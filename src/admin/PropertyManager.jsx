import { useMemo, useState } from 'react'
import API from '../utils/api'
import { Alert, Spinner } from './ui'
import { ImageUpload, GalleryUpload, FileUpload } from './ImageUpload'
import DataList from './DataList'
import { Icon } from './ui'
import { priceRangeOf } from '../utils/propertySearch'
import {
  CATEGORIES, categoryById, TYPES, STATUSES, TAGS, configHint,
  emptyProperty, toPayload, toForm, REQUIRED, composeLocation,
} from './propertyConfig'
import { CITIES, localitiesOf, placeOf } from '../data/locations'
import { AMENITIES, AmenityIcon } from '../data/amenities'
import './admin.css'
import './property-admin.css'
import { propertyUrl, slugTyping, slugify } from '../utils/slug'

const errorOf = (e, fallback) => e.response?.data?.error || fallback
const OTHER = '__other__'

// ---------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------
function Field({ label, hint, required, error, children, full }) {
  return (
    <div className={`hwa-field${full ? ' hwp-full' : ''}`}>
      <label>{label}{required && <span className="hwp-req"> *</span>}</label>
      {children}
      {error ? <span className="hwa-hint bad">{error}</span> : hint && <span className="hwa-hint">{hint}</span>}
    </div>
  )
}

function Step({ n, title, sub, children }) {
  return (
    <section className="hwa-card hwp-step">
      <div className="hwp-step-head">
        <span className="hwp-step-no">{n}</span>
        <div>
          <h3>{title}</h3>
          {sub && <p>{sub}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}

// Editable list of text rows (highlights)
function ListInput({ items, onChange, placeholder, addLabel, max = 12 }) {
  const update = (i, v) => onChange(items.map((x, j) => (j === i ? v : x)))
  const remove = (i) => onChange(items.length > 1 ? items.filter((_, j) => j !== i) : [''])
  return (
    <div className="hwp-list">
      {items.map((v, i) => (
        <div key={i} className="hwp-list-row">
          <span className="hwp-list-no">{i + 1}</span>
          <input className="hwa-input no-icon" value={v} onChange={e => update(i, e.target.value)} placeholder={placeholder} />
          <button type="button" className="hwp-x" onClick={() => remove(i)} aria-label="Remove">✕</button>
        </div>
      ))}
      {items.length < max && (
        <button type="button" className="hwp-add" onClick={() => onChange([...items, ''])}>+ {addLabel}</button>
      )}
    </div>
  )
}

// Editable rows with several fields each (pricing, stats, FAQs)
function RowsInput({ rows, onChange, fields, empty, addLabel, max = 20, textareaKey }) {
  const update = (i, k, v) => onChange(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)))
  const remove = (i) => onChange(rows.length > 1 ? rows.filter((_, j) => j !== i) : [{ ...empty }])
  return (
    <div className="hwp-list">
      {rows.map((r, i) => (
        <div key={i} className={`hwp-rows-row${textareaKey ? ' stacked' : ''}`}>
          <span className="hwp-list-no">{i + 1}</span>
          <div className="hwp-rows-fields" style={{ gridTemplateColumns: textareaKey ? '1fr' : fields.map(x => x.w || '1fr').join(' ') }}>
            {fields.map(x => x.key === textareaKey
              ? <textarea key={x.key} className="hwa-input no-icon hwp-textarea" rows={2} value={r[x.key] || ''} onChange={e => update(i, x.key, e.target.value)} placeholder={x.placeholder} />
              : <input key={x.key} className="hwa-input no-icon" value={r[x.key] || ''} onChange={e => update(i, x.key, e.target.value)} placeholder={x.placeholder} />)}
          </div>
          <button type="button" className="hwp-x" onClick={() => remove(i)} aria-label="Remove">✕</button>
        </div>
      ))}
      {rows.length < max && <button type="button" className="hwp-add" onClick={() => onChange([...rows, { ...empty }])}>+ {addLabel}</button>}
    </div>
  )
}

// ---------------------------------------------------------------
// Add / edit form
// ---------------------------------------------------------------
function PropertyForm({ initial, editingId, counts, onSaved, onCancel }) {
  const [f, setF] = useState(initial)
  const [touched, setTouched] = useState(false)
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState('')

  const set = (k, v) => setF(prev => ({ ...prev, [k]: v }))
  // the web address follows the name until the admin edits it (existing properties keep theirs)
  const [slugTouched, setSlugTouched] = useState(!!initial.slug)
  const setTitle = (v) => setF(prev => ({ ...prev, title: v, slug: slugTouched ? prev.slug : slugify(v) }))
  const setAbout = (k, v) => setF(prev => ({ ...prev, about: { ...prev.about, [k]: v } }))
  const [customAmenity, setCustomAmenity] = useState('')
  const toggleAmenity = (name) => setF(prev => ({ ...prev, amenities: prev.amenities.includes(name) ? prev.amenities.filter(a => a !== name) : [...prev.amenities, name] }))
  const addCustomAmenity = () => { const n = customAmenity.trim(); if (n && !f.amenities.includes(n)) set('amenities', [...f.amenities, n]); setCustomAmenity('') }
  const cat = categoryById(f.category)
  const cityLocalities = localitiesOf(f.city)
  const isListed = cityLocalities.some(l => l.name === f.locality)
  const [customLocality, setCustomLocality] = useState(!!initial.locality && !localitiesOf(initial.city).some(l => l.name === initial.locality))
  const [customCity, setCustomCity] = useState(!!initial.city && !CITIES.some(c => c.city === initial.city))

  const chooseCategory = (c) => setF(prev => ({
    ...prev,
    category: c.id,
    // keep the type sensible for the section, and pre-fill the matching status
    type: ['commercial', 'sco'].includes(c.id) || ['Commercial', 'Retail', 'SCO'].includes(prev.type) ? c.defaultType : prev.type,
    status: c.status || prev.status,
  }))

  const missing = REQUIRED.filter(([k]) => !String(f[k] || '').trim())
  const errorFor = (k) => touched && !String(f[k] || '').trim() ? 'Required' : null
  const isUploading = () => document.querySelector('.hwp .hwu-busy')

  const save = async (e) => {
    e.preventDefault()
    setTouched(true); setErr('')
    if (isUploading()) return setErr('Please wait — photos are still uploading.')
    if (missing.length) { window.scrollTo({ top: 0, behavior: 'smooth' }); return setErr(`Please fill: ${missing.map(m => m[1]).join(', ')}`) }
    setSaving(true)
    try {
      const payload = toPayload(f)
      if (editingId) await API.put(`/properties/${editingId}`, payload)
      else await API.post('/properties', payload)
      onSaved(editingId ? 'updated' : 'added', payload.title, payload.category)
    } catch (e) {
      setErr(errorOf(e, 'Could not save the property'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally { setSaving(false) }
  }

  const fullLocation = composeLocation(f)

  return (
    <form onSubmit={save} noValidate className="hwp-form-layout">
      <div className="hwp-form-main">
        {err && <Alert>{err}</Alert>}

        {/* 1. SECTION */}
        <Step n="1" title="Where should this property appear?" sub="Pick one section. This decides where it shows on the website.">
          <div className="hwp-cats">
            {CATEGORIES.map(c => (
              <button type="button" key={c.id} className={`hwp-cat${f.category === c.id ? ' active' : ''}`} onClick={() => chooseCategory(c)}>
                <span className="hwp-cat-top">
                  <span className="hwp-cat-icon">{c.icon}</span>
                  <strong>{c.label}</strong>
                  <em>{counts[c.id] || 0} listed</em>
                </span>
                <span className="hwp-cat-where">{c.shows}</span>
              </button>
            ))}
          </div>
        </Step>

        {/* 2. LOCATION */}
        <Step n="2" title="Location" sub="Choose the city and locality — the website’s location filters and menus use these.">
          <div className="hwp-grid">
            <Field label="City" required error={errorFor('city')}>
              {customCity ? (
                <div className="hwp-inline">
                  <input className="hwa-input no-icon" value={f.city} onChange={e => set('city', e.target.value)} placeholder="Type city name" autoFocus />
                  <button type="button" className="hwa-mini" onClick={() => { setCustomCity(false); setF(p => ({ ...p, city: 'Gurugram', locality: '' })) }}>List</button>
                </div>
              ) : (
                <select className="hwa-input no-icon" value={f.city} onChange={e => {
                  if (e.target.value === OTHER) { setCustomCity(true); setCustomLocality(true); setF(p => ({ ...p, city: '', locality: '' })); return }
                  setCustomLocality(false); setF(p => ({ ...p, city: e.target.value, locality: '' }))
                }}>
                  {CITIES.map(c => <option key={c.city} value={c.city}>{c.city}</option>)}
                  <option value={OTHER}>Other city…</option>
                </select>
              )}
            </Field>
            <Field label="Locality / Micro-market" required error={errorFor('locality')}>
              {customLocality || customCity ? (
                <div className="hwp-inline">
                  <input className="hwa-input no-icon" value={f.locality} onChange={e => set('locality', e.target.value)} placeholder="e.g. Sector 150 Corridor" />
                  {!customCity && <button type="button" className="hwa-mini" onClick={() => { setCustomLocality(false); set('locality', '') }}>List</button>}
                </div>
              ) : (
                <select className="hwa-input no-icon" value={isListed ? f.locality : ''} onChange={e => {
                  if (e.target.value === OTHER) { setCustomLocality(true); set('locality', ''); return }
                  set('locality', e.target.value)
                }}>
                  <option value="">Select locality…</option>
                  {cityLocalities.map(l => <option key={l.slug} value={l.name}>{l.name}</option>)}
                  <option value={OTHER}>Other locality…</option>
                </select>
              )}
            </Field>
            <Field label="Sector / Address" hint="Optional — e.g. Sector 58 or the street">
              <input className="hwa-input no-icon" value={f.address} onChange={e => set('address', e.target.value)} placeholder="e.g. Sector 58" />
            </Field>
            <Field label="Shown on the website as">
              <div className="hwp-location-out">📍 {fullLocation || 'Choose city and locality'}</div>
            </Field>
          </div>
        </Step>

        {/* 3. BASICS */}
        <Step n="3" title="Basic details" sub="Shown on the property card and the top of the detail page.">
          <div className="hwp-grid">
            <Field label="Project name" required error={errorFor('title')} full>
              <input className="hwa-input no-icon" value={f.title} onChange={e => setTitle(e.target.value)} placeholder="e.g. M3M Brabus Residences" />
            </Field>
            <Field label="Web address (slug)" full hint={editingId && initial.slug && slugify(f.slug) !== initial.slug ? `Old link /property/${initial.slug} will redirect to the new one` : 'Lowercase words joined by hyphens — made from the name, or type your own'}>
              <div className="hwp-slug">
                <span>homwisor.com/property/</span>
                <input className="hwa-input no-icon" value={f.slug} onChange={e => { setSlugTouched(true); set('slug', slugTyping(e.target.value)) }} onBlur={() => set('slug', slugify(f.slug || f.title))} placeholder={slugify(f.title) || 'm3m-brabus-residences'} />
                {f.title && slugify(f.title) !== f.slug && <button type="button" className="hwa-mini" onClick={() => { setSlugTouched(false); set('slug', slugify(f.title)) }}>Use name</button>}
              </div>
            </Field>
            <Field label="Developer / Builder" required error={errorFor('developer')}>
              <input className="hwa-input no-icon" value={f.developer} onChange={e => set('developer', e.target.value)} placeholder="e.g. M3M Group" />
            </Field>
            <Field label="Property type" required>
              <select className="hwa-input no-icon" value={f.type} onChange={e => set('type', e.target.value)}>
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Configuration" required error={errorFor('bhk')} hint="BHK, unit mix or plot size — used by the BHK filter">
              <input className="hwa-input no-icon" value={f.bhk} onChange={e => set('bhk', e.target.value)} placeholder={configHint(f.type)} />
            </Field>
            <Field label="Card badge" hint="Small label on the card image">
              <input className="hwa-input no-icon" list="hwp-tags" value={f.tag} onChange={e => set('tag', e.target.value)} placeholder="e.g. RERA" />
              <datalist id="hwp-tags">{TAGS.map(t => <option key={t} value={t} />)}</datalist>
            </Field>
            <Field label="RERA approved?">
              <div className="hwp-toggle">
                <button type="button" className={f.rera ? 'on' : ''} onClick={() => set('rera', true)}>Yes</button>
                <button type="button" className={!f.rera ? 'on' : ''} onClick={() => set('rera', false)}>No</button>
              </div>
            </Field>
          </div>
        </Step>

        {/* 4. PRICE */}
        <Step n="4" title="Price" sub="Write prices as they should appear, in Cr or L (e.g. ₹85 L – 1.2 Cr). The budget filter reads them automatically.">
          <div className="hwp-grid">
            <Field label="Starting price" required error={errorFor('price')} hint="Shown as “Starting from” on the detail page">
              <input className="hwa-input no-icon" value={f.price} onChange={e => set('price', e.target.value)} placeholder="e.g. ₹5.20 Cr" />
            </Field>
            <Field label="Price range" required error={errorFor('priceRange')} hint="Shown on homepage cards">
              <input className="hwa-input no-icon" value={f.priceRange} onChange={e => set('priceRange', e.target.value)} placeholder="e.g. ₹5.2 – 5.8 Cr" />
            </Field>
          </div>
        </Step>

        {/* 5. OVERVIEW */}
        <Step n="5" title="Overview" sub="The opening section of the detail page — description, image overlay text and an optional video.">
          <div className="hwp-grid">
            <Field label="Description" full hint="A few lines about the project. Long text gets a “Read more” link.">
              <textarea className="hwa-input no-icon hwp-textarea" rows={5} value={f.overview} onChange={e => set('overview', e.target.value)} placeholder="e.g. M3M Brabus Residences is an ultra-luxury residential development by M3M India in collaboration with BRABUS…" />
            </Field>
            <Field label="Image overlay title" hint="Shown on the photo slider">
              <input className="hwa-input no-icon" value={f.tagline} onChange={e => set('tagline', e.target.value)} placeholder="e.g. A New Icon Rises" />
            </Field>
            <Field label="Image overlay sub-line">
              <input className="hwa-input no-icon" value={f.taglineSub} onChange={e => set('taglineSub', e.target.value)} placeholder="e.g. Luxury living beyond compare" />
            </Field>
            <Field label="Video link" full hint="Optional — YouTube or .mp4 link for the “Watch video” button">
              <input className="hwa-input no-icon" value={f.videoUrl} onChange={e => set('videoUrl', e.target.value)} placeholder="https://youtube.com/watch?v=…" />
            </Field>
            <Field label="Brochure (PDF)" full hint="Optional — visitors download it from the “Brochure” buttons. Without one, those buttons ask for their details instead.">
              <FileUpload value={f.brochure} onChange={v => set('brochure', v)} />
            </Field>
          </div>
        </Step>

        {/* 6. SPACE & PRICING */}
        <Step n="6" title="Space & Pricing" sub="One row per unit type — shown as the price table on the detail page.">
          <RowsInput
            rows={f.pricing}
            onChange={v => set('pricing', v)}
            empty={{ type: '', size: '', price: '' }}
            addLabel="Add unit type"
            fields={[
              { key: 'type', placeholder: 'Type, e.g. 4 BHK', w: '1fr' },
              { key: 'size', placeholder: 'Size, e.g. 5,000 Sq.Ft.', w: '1.2fr' },
              { key: 'price', placeholder: 'Price, e.g. ₹20 Cr', w: '1fr' },
            ]}
          />
        </Step>

        {/* 7. PHOTOS */}
        <Step n="7" title="Photos & branding" sub="Upload photos from your computer — they’re resized automatically. The preview shows the same crop the website cards use.">
          <div className="hwp-grid">
            <Field label="Main photo" required error={errorFor('image')} full>
              <ImageUpload value={f.image} onChange={v => set('image', v)} purpose="property" aspect="3 / 2" hint="Cover photo on every card and the detail page (landscape works best)" />
            </Field>
            <Field label="Gallery photos" full hint="Shown in the gallery on the detail page — the first 5 make the photo collage; captions appear on the photos">
              <GalleryUpload value={f.gallery} onChange={v => set('gallery', v)} onMakeCover={src => set('image', src)} purpose="property" captions={f.galleryCaptions} onCaptionsChange={v => set('galleryCaptions', v)} />
            </Field>
            <Field label="Developer logo" hint="Optional — shown on the detail page header">
              <ImageUpload value={f.logo} onChange={v => set('logo', v)} purpose="logo" aspect="5 / 2" kind="logo" fit="contain" />
            </Field>
            <Field label="Brand colour" hint="Colour of the detail page header">
              <div className="hwp-color">
                <input type="color" value={f.brandColor} onChange={e => set('brandColor', e.target.value)} />
                <code>{f.brandColor}</code>
                {f.logo.trim() && <span className="hwp-logo-prev" style={{ background: f.brandColor }}><img src={f.logo.trim()} alt="logo preview" onError={e => (e.target.style.display = 'none')} /></span>}
              </div>
            </Field>
          </div>
        </Step>

        {/* 6. PROJECT FACTS */}
        <Step n="8" title="Project details" sub="Shown in the “Overview” boxes on the detail page. Status also powers the “Project Status” filter.">
          <div className="hwp-grid">
            <Field label="Project status" hint="Filled automatically from the section; change if needed">
              <select className="hwa-input no-icon" value={f.status} onChange={e => set('status', e.target.value)}>
                {[...new Set([f.status, ...STATUSES])].filter(Boolean).map(s => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Possession">
              <input className="hwa-input no-icon" value={f.possession} onChange={e => set('possession', e.target.value)} placeholder="e.g. Dec 2030" />
            </Field>
            <Field label="Land area">
              <input className="hwa-input no-icon" value={f.landArea} onChange={e => set('landArea', e.target.value)} placeholder="e.g. 12 Acres" />
            </Field>
            <Field label="Towers & units">
              <input className="hwa-input no-icon" value={f.towers} onChange={e => set('towers', e.target.value)} placeholder="e.g. 3 Towers – 110 Units" />
            </Field>
            <Field label="Property type (detail)" full hint="Longer description of the type, e.g. for the overview box">
              <input className="hwa-input no-icon" value={f.propertyTypeDetail} onChange={e => set('propertyTypeDetail', e.target.value)} placeholder="e.g. Ultra-luxury Residential Flats" />
            </Field>
          </div>
        </Step>

        {/* 7. HIGHLIGHTS */}
        <Step n="9" title="Highlights" sub="Key selling points — shown with checkmarks on the detail page. 4 is ideal.">
          <ListInput items={f.highlights} onChange={v => set('highlights', v)} placeholder="e.g. Only 2 apartments per floor with private lobbies" addLabel="Add highlight" />
        </Step>

        {/* 10. AMENITIES */}
        <Step n="10" title="Amenities" sub="Tick what the project offers, or add your own. Shown as an icon grid on the detail page.">
          <div className="hwp-amenities">
            {[...AMENITIES.map(([n]) => n), ...f.amenities.filter(a => !AMENITIES.some(([n]) => n === a))].map(name => (
              <button type="button" key={name} className={`hwp-amenity${f.amenities.includes(name) ? ' on' : ''}`} onClick={() => toggleAmenity(name)}>
                <AmenityIcon name={name} size={18} /> {name}
              </button>
            ))}
          </div>
          <div className="hwp-inline" style={{ marginTop: 10, maxWidth: 420 }}>
            <input className="hwa-input no-icon" value={customAmenity} onChange={e => setCustomAmenity(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomAmenity())} placeholder="Add another amenity, e.g. Infinity Pool" />
            <button type="button" className="hwa-mini" onClick={addCustomAmenity}>Add</button>
          </div>
          <span className="hwa-hint" style={{ display: 'block', marginTop: 6 }}>{f.amenities.length} selected</span>
        </Step>

        {/* 11. ABOUT THE DEVELOPER */}
        <Step n="11" title="About the developer" sub={`The “About ${f.developer || "the developer"}” section. Leave empty to show a short default about the developer.`}>
          <div className="hwp-grid">
            <Field label="Heading" hint={`Default: About ${f.developer || 'the developer'}`}>
              <input className="hwa-input no-icon" value={f.about.heading} onChange={e => setAbout('heading', e.target.value)} placeholder={`About ${f.developer || 'M3M India'}`} />
            </Field>
            <Field label="Sub-heading">
              <input className="hwa-input no-icon" value={f.about.subheading} onChange={e => setAbout('subheading', e.target.value)} placeholder="e.g. Building a Better Tomorrow" />
            </Field>
            <Field label="Description" full>
              <textarea className="hwa-input no-icon hwp-textarea" rows={4} value={f.about.description} onChange={e => setAbout('description', e.target.value)} placeholder="e.g. M3M India is a leading real estate developer, known for its commitment to quality…" />
            </Field>
            <Field label="Image" full hint="A landscape photo of the developer’s work">
              <div style={{ maxWidth: 420 }}><ImageUpload value={f.about.image} onChange={v => setAbout('image', v)} purpose="property" aspect="3 / 2" /></div>
            </Field>
            <Field label="Key numbers" full hint="Up to 4, e.g. 15+ / Years of Excellence">
              <RowsInput
                rows={f.about.stats}
                onChange={v => setAbout('stats', v)}
                empty={{ value: '', label: '' }}
                max={4}
                addLabel="Add number"
                fields={[{ key: 'value', placeholder: 'e.g. 15+', w: '.6fr' }, { key: 'label', placeholder: 'e.g. Years of Excellence', w: '1.4fr' }]}
              />
            </Field>
          </div>
        </Step>

        {/* 12. FAQS */}
        <Step n="12" title="Questions & answers" sub="Shown in “Everything You Need to Know”. Leave empty to show common questions answered from this property’s details.">
          <RowsInput
            rows={f.faqs}
            onChange={v => set('faqs', v)}
            empty={{ question: '', answer: '' }}
            addLabel="Add question"
            textareaKey="answer"
            fields={[{ key: 'question', placeholder: 'Question, e.g. What is the possession date?' }, { key: 'answer', placeholder: 'Answer' }]}
          />
        </Step>
      </div>

      {/* PREVIEW + ACTIONS */}
      <aside className="hwp-side">
        <div className="hwa-card hwp-preview">
          <div className="hwp-side-title">Live preview — as on the website</div>
          <div className="hwp-pcard">
            <div className="hwp-pcard-img">
              {f.image.trim() ? <img src={f.image.trim()} alt="" onError={e => (e.target.style.visibility = 'hidden')} /> : <span>Main photo</span>}
              {f.rera && <b className="hwp-pcard-rera">✓ RERA</b>}
              <b className="hwp-pcard-tag">{f.bhk || f.type}</b>
            </div>
            <div className="hwp-pcard-body">
              <strong>{f.title || 'Project name'}</strong>
              <span className="hwp-pcard-price">{f.priceRange || f.price || 'Price range'}</span>
              <span className="hwp-pcard-loc">📍 {fullLocation || 'Location'}</span>
              <span className="hwp-pcard-meta">{f.bhk || 'Configuration'} · {f.type}</span>
            </div>
          </div>
          <div className="hwp-where">
            <span>{cat.icon} Will appear in</span>
            <strong>{cat.shows}</strong>
            {f.locality && <strong style={{ fontWeight: 600 }}>📍 Location filter: {f.locality}{f.city ? `, ${f.city}` : ''}</strong>}
          </div>
          <ul className="hwp-check">
            {REQUIRED.map(([k, label]) => {
              const ok = !!String(f[k] || '').trim()
              return <li key={k} className={ok ? 'ok' : ''}>{ok ? '✓' : '○'} {label}</li>
            })}
          </ul>
          <button className="hwa-btn hwa-btn-gold" disabled={saving}>
            {saving ? <><Spinner /> Saving…</> : editingId ? 'Save changes' : 'Publish property'}
          </button>
          <button type="button" className="hwp-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </aside>
    </form>
  )
}

// ---------------------------------------------------------------
// List: browse by Section / Location / Type, each with "+ Add here"
// ---------------------------------------------------------------
const BROWSE = [
  { id: 'section', label: 'By Section', hint: 'Homepage section' },
  { id: 'location', label: 'By Location', hint: 'City & locality' },
  { id: 'type', label: 'By Type', hint: 'Apartment, Villa, SCO…' },
]

export default function PropertyManager({ properties, loaded = true, onChange, initialFilter = 'all', startAdding = false }) {
  const newForm = (preset = {}) => {
    const c = categoryById(preset.category || 'trending')
    return {
      key: Date.now(),
      initial: { ...emptyProperty, category: c.id, type: c.defaultType, status: c.status || emptyProperty.status, ...preset },
    }
  }

  // 'list' or { key, initial } while the add/edit form is open
  const [mode, setMode] = useState(() => startAdding ? newForm(initialFilter !== 'all' ? { category: initialFilter } : {}) : 'list')
  const [editing, setEditing] = useState(null)
  const [browse, setBrowse] = useState('section')
  const [section, setSection] = useState(initialFilter)
  const [city, setCity] = useState('Gurugram')
  const [locality, setLocality] = useState('')
  const [type, setType] = useState('')
  const [notice, setNotice] = useState('')

  // where each property sits (city/locality worked out from the address if not stored)
  const placed = useMemo(() => properties.map(p => ({ p, ...placeOf(p) })), [properties])

  const counts = useMemo(() => {
    const c = { all: properties.length }
    for (const p of properties) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [properties])

  const cityCount = (name) => placed.filter(x => x.city === name).length
  const localityCount = (name) => placed.filter(x => x.city === city && x.locality === name).length
  const typeCount = (t) => properties.filter(p => p.type === t).length
  const unplaced = placed.filter(x => x.city === city && !localitiesOf(city).some(l => l.name === x.locality))

  const shown = placed.filter(({ p, city: c, locality: l }) => {
    if (browse === 'section' && section !== 'all' && p.category !== section) return false
    if (browse === 'location') {
      if (c !== city) return false
      if (locality === OTHER) { if (localitiesOf(city).some(x => x.name === l)) return false }
      else if (locality && l !== locality) return false
    }
    if (browse === 'type' && type && p.type !== type) return false
    return true
  }).map(x => x.p)

  // what "+ Add" pre-fills in the current view
  const preset = () => {
    if (browse === 'section') return section !== 'all' ? { category: section } : {}
    if (browse === 'location') return { city, locality: locality && locality !== OTHER ? locality : '' }
    if (browse === 'type' && type) {
      const c = type === 'SCO' ? 'sco' : ['Commercial', 'Retail'].includes(type) ? 'commercial' : undefined
      return { type, ...(c ? { category: c, type } : {}) }
    }
    return {}
  }
  const presetLabel = () => {
    if (browse === 'section' && section !== 'all') return categoryById(section).label
    if (browse === 'location') return locality && locality !== OTHER ? locality : city
    if (browse === 'type' && type) return type
    return ''
  }

  const openNew = (p = preset()) => {
    setEditing(null); setNotice('')
    const form = newForm(p)
    // a type preset must survive newForm's section default
    if (p.type) form.initial.type = p.type
    setMode(form)
    window.scrollTo(0, 0)
  }
  const openEdit = (p) => {
    setEditing(p); setNotice('')
    setMode({ key: p.id, initial: toForm(p) })
    window.scrollTo(0, 0)
  }
  const saved = (action, title, category) => {
    setMode('list')
    setNotice(`“${title}” ${action}. It now appears in: ${categoryById(category).shows}`)
    onChange()
    window.scrollTo(0, 0)
  }
  const remove = async (p) => {
    if (!window.confirm(`Delete “${p.title}”? It will be removed from the website.`)) return
    try { await API.delete(`/properties/${p.id}`); onChange() }
    catch (e) { alert(errorOf(e, 'Could not delete')) }
  }

  if (mode !== 'list') {
    return (
      <div className="hwa hwa-section hwa-light hwp">
        <div className="hwa-section-head">
          <div>
            <button type="button" className="hwp-back" onClick={() => setMode('list')}>← All properties</button>
            <h2>{editing ? `Edit: ${editing.title}` : 'Add a new property'}</h2>
            <p>Fill the steps below. Fields marked <span className="hwp-req">*</span> are required. The preview on the right updates as you type.</p>
          </div>
        </div>
        <PropertyForm key={mode.key} initial={mode.initial} editingId={editing?.id} counts={counts} onSaved={saved} onCancel={() => setMode('list')} />
      </div>
    )
  }

  const label = presetLabel()

  return (
    <div className="hwa hwa-section hwa-light hwp">
      <div className="hwa-section-head">
        <div>
          <h2>Properties <span style={{ fontWeight: 500, color: '#9ca3af', fontSize: 14 }}>({properties.length})</span></h2>
          <p>Browse by section, location or type — then use “+ Add” to create a property already filled in for that group.</p>
        </div>
        <button className="hwa-btn hwa-btn-gold hwp-add-main" onClick={() => openNew({})}>+ Add Property</button>
      </div>

      {notice && <div style={{ marginTop: 14 }}><Alert type="success">{notice}</Alert></div>}

      {/* browse mode switch */}
      <div className="hwp-browse">
        {BROWSE.map(b => (
          <button key={b.id} className={browse === b.id ? 'active' : ''} onClick={() => setBrowse(b.id)}>
            <strong>{b.label}</strong><span>{b.hint}</span>
          </button>
        ))}
      </div>

      {/* ---- SECTION ---- */}
      {browse === 'section' && (
        <div className="hwp-tabs">
          <button className={section === 'all' ? 'active' : ''} onClick={() => setSection('all')}>All <em>{counts.all}</em></button>
          {CATEGORIES.map(c => (
            <button key={c.id} className={section === c.id ? 'active' : ''} onClick={() => setSection(c.id)}>
              {c.icon} {c.label} <em>{counts[c.id] || 0}</em>
            </button>
          ))}
        </div>
      )}

      {/* ---- LOCATION ---- */}
      {browse === 'location' && (
        <>
          <div className="hwp-tabs">
            {CITIES.map(c => (
              <button key={c.city} className={city === c.city ? 'active' : ''} onClick={() => { setCity(c.city); setLocality('') }}>
                {c.city} <em>{cityCount(c.city)}</em>
              </button>
            ))}
          </div>
          <div className="hwp-locs">
            <button className={`hwp-loc${locality === '' ? ' active' : ''}`} onClick={() => setLocality('')}>
              <strong>All of {city}</strong><span>{cityCount(city)} properties</span>
            </button>
            {localitiesOf(city).map(l => (
              <div key={l.slug} className={`hwp-loc${locality === l.name ? ' active' : ''}`} onClick={() => setLocality(l.name)} role="button" tabIndex={0}>
                <strong>{l.name}</strong>
                <span>{localityCount(l.name)} {localityCount(l.name) === 1 ? 'property' : 'properties'}</span>
                <button type="button" className="hwp-loc-add" onClick={e => { e.stopPropagation(); openNew({ city, locality: l.name }) }} title={`Add property in ${l.name}`}>+ Add</button>
              </div>
            ))}
            {unplaced.length > 0 && (
              <button className={`hwp-loc warn${locality === OTHER ? ' active' : ''}`} onClick={() => setLocality(OTHER)}>
                <strong>Other / not set</strong><span>{unplaced.length} — edit to choose a locality</span>
              </button>
            )}
          </div>
        </>
      )}

      {/* ---- TYPE ---- */}
      {browse === 'type' && (
        <div className="hwp-tabs">
          <button className={type === '' ? 'active' : ''} onClick={() => setType('')}>All <em>{properties.length}</em></button>
          {TYPES.map(t => (
            <button key={t} className={type === t ? 'active' : ''} onClick={() => setType(t)}>{t} <em>{typeCount(t)}</em></button>
          ))}
        </div>
      )}

      {label && (
        <div className="hwp-section-info">
          <div>
            <strong>{label}</strong>
            {browse === 'section' && <> — {categoryById(section).shows}</>}
            {browse === 'location' && <> — shown when visitors filter by {label} on the website</>}
            {browse === 'type' && <> — shown when visitors filter by “{label}”</>}
          </div>
          <button className="hwa-mini" onClick={() => openNew()}>+ Add in {label}</button>
        </div>
      )}

      <DataList
        id="properties"
        loading={!loaded}
        items={shown}
        main={{
          aspect: 'wide',
          thumb: p => p.image,
          title: p => p.title,
          sub: p => p.developer,
        }}
        badges={p => {
          const c = categoryById(p.category)
          return [{ text: `${c.icon} ${c.label}`, tone: 'dark' }, p.rera !== false && { text: 'RERA', tone: 'green' }]
        }}
        columns={[
          { label: 'Location', render: p => { const pl = placeOf(p); return <span className="hwl-ellipsis" title={p.location}>{pl.locality ? <><b>{pl.locality}</b><br /><span className="muted">{pl.city}</span></> : p.location}</span> } },
          { label: 'Type', render: p => <span>{p.bhk}<br /><span className="muted">{p.type}</span></span>, hideSm: true },
          { label: 'Price', render: p => <span className="gold">{p.priceRange || p.price}</span> },
          { label: 'Status', render: p => <span className="muted">{p.status || '—'}</span>, hideSm: true, hideGrid: true },
        ]}
        actions={p => [
          { label: 'Edit', icon: Icon.edit, onClick: openEdit, primary: true },
          { label: 'View', icon: Icon.external, href: propertyUrl(p) },
          { label: 'Delete', icon: Icon.trash, onClick: remove, danger: true },
        ]}
        searchText={p => `${p.title} ${p.location} ${p.developer} ${p.bhk} ${p.type} ${p.locality || ''}`}
        sorts={[
          { value: 'new', label: 'Newest first', fn: (a, b) => String(b.createdAt).localeCompare(String(a.createdAt)) },
          { value: 'old', label: 'Oldest first', fn: (a, b) => String(a.createdAt).localeCompare(String(b.createdAt)) },
          { value: 'az', label: 'Name A–Z', fn: (a, b) => a.title.localeCompare(b.title) },
          { value: 'pl', label: 'Price: low to high', fn: (a, b) => (priceRangeOf(a)?.min ?? 1e9) - (priceRangeOf(b)?.min ?? 1e9) },
          { value: 'ph', label: 'Price: high to low', fn: (a, b) => (priceRangeOf(b)?.max ?? -1) - (priceRangeOf(a)?.max ?? -1) },
        ]}
        empty="No properties here yet."
        onEmptyAdd={() => openNew()}
        emptyAddLabel={`Add the first one${label ? ` in ${label}` : ''}`}
      />
    </div>
  )
}
