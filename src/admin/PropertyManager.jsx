import { useMemo, useState } from 'react'
import API from '../utils/api'
import { Alert, Spinner } from './ui'
import {
  CATEGORIES, categoryById, TYPES, STATUSES, TAGS, configHint,
  emptyProperty, toPayload, toForm, REQUIRED,
} from './propertyConfig'
import './admin.css'
import './property-admin.css'

const errorOf = (e, fallback) => e.response?.data?.error || fallback

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

// Image preview that reports whether the URL actually loads
function ImagePreview({ url, onStatus, className = '' }) {
  const [state, setState] = useState('idle')
  const [shown, setShown] = useState('')
  if (url !== shown) { setShown(url); setState(url ? 'loading' : 'idle') }
  const set = (s) => { setState(s); onStatus?.(s) }
  if (!url) return <div className={`hwp-img-empty ${className}`}>No image yet</div>
  return (
    <div className={`hwp-img ${className}`}>
      <img src={url} alt="" onLoad={() => set('ok')} onError={() => set('error')} style={{ display: state === 'error' ? 'none' : 'block' }} />
      {state === 'error' && <div className="hwp-img-bad">⚠️ This link doesn’t open as an image. Use a direct image link (ends with .jpg / .png / .webp or an Unsplash link).</div>}
    </div>
  )
}

// Editable list of text rows (gallery URLs, highlights)
function ListInput({ items, onChange, placeholder, addLabel, max = 12, renderExtra }) {
  const update = (i, v) => onChange(items.map((x, j) => (j === i ? v : x)))
  const remove = (i) => onChange(items.length > 1 ? items.filter((_, j) => j !== i) : [''])
  return (
    <div className="hwp-list">
      {items.map((v, i) => (
        <div key={i} className="hwp-list-row">
          <span className="hwp-list-no">{i + 1}</span>
          <input className="hwa-input no-icon" value={v} onChange={e => update(i, e.target.value)} placeholder={placeholder} />
          {renderExtra?.(v)}
          <button type="button" className="hwp-x" onClick={() => remove(i)} aria-label="Remove">✕</button>
        </div>
      ))}
      {items.length < max && (
        <button type="button" className="hwp-add" onClick={() => onChange([...items, ''])}>+ {addLabel}</button>
      )}
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
  const [mainImg, setMainImg] = useState('idle')

  const set = (k, v) => setF(prev => ({ ...prev, [k]: v }))
  const cat = categoryById(f.category)

  const chooseCategory = (c) => setF(prev => ({
    ...prev,
    category: c.id,
    // keep the type sensible for the section, and pre-fill the matching status
    type: ['commercial', 'sco'].includes(c.id) || ['Commercial', 'Retail', 'SCO'].includes(prev.type) ? c.defaultType : prev.type,
    status: c.status || prev.status,
  }))

  const missing = REQUIRED.filter(([k]) => !String(f[k] || '').trim())
  const errorFor = (k) => touched && !String(f[k] || '').trim() ? 'Required' : null

  const save = async (e) => {
    e.preventDefault()
    setTouched(true); setErr('')
    if (missing.length) return setErr(`Please fill: ${missing.map(m => m[1]).join(', ')}`)
    if (mainImg === 'error') return setErr('The main photo link does not open as an image. Please use a direct image URL.')
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

        {/* 2. BASICS */}
        <Step n="2" title="Basic details" sub="Shown on the property card and the top of the detail page.">
          <div className="hwp-grid">
            <Field label="Project name" required error={errorFor('title')} full>
              <input className="hwa-input no-icon" value={f.title} onChange={e => set('title', e.target.value)} placeholder="e.g. M3M Brabus Residences" />
            </Field>
            <Field label="Developer / Builder" required error={errorFor('developer')}>
              <input className="hwa-input no-icon" value={f.developer} onChange={e => set('developer', e.target.value)} placeholder="e.g. M3M Group" />
            </Field>
            <Field label="Location" required error={errorFor('location')} hint="Sector, road, city">
              <input className="hwa-input no-icon" value={f.location} onChange={e => set('location', e.target.value)} placeholder="e.g. Sector 58, Golf Course Extension Road, Gurugram" />
            </Field>
            <Field label="Property type" required>
              <select className="hwa-input no-icon" value={f.type} onChange={e => set('type', e.target.value)}>
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Configuration" required error={errorFor('bhk')} hint="BHK, unit mix or plot size">
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

        {/* 3. PRICE */}
        <Step n="3" title="Price" sub="Write prices exactly as they should appear.">
          <div className="hwp-grid">
            <Field label="Starting price" required error={errorFor('price')} hint="Shown as “Starting from” on the detail page">
              <input className="hwa-input no-icon" value={f.price} onChange={e => set('price', e.target.value)} placeholder="e.g. ₹5.20 Cr" />
            </Field>
            <Field label="Price range" required error={errorFor('priceRange')} hint="Shown on homepage cards">
              <input className="hwa-input no-icon" value={f.priceRange} onChange={e => set('priceRange', e.target.value)} placeholder="e.g. ₹5.2 – 5.8 Cr" />
            </Field>
          </div>
        </Step>

        {/* 4. PROJECT FACTS */}
        <Step n="4" title="Project details" sub="Shown in the “Overview” boxes on the detail page. Optional, but recommended — sample values are shown when left empty.">
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

        {/* 5. PHOTOS */}
        <Step n="5" title="Photos & branding" sub="Paste image links. Landscape photos work best (about 3:2, e.g. 1200×800). Any size is accepted.">
          <div className="hwp-grid">
            <Field label="Main photo link" required error={errorFor('image')} full hint="Used on all cards and as the detail page cover">
              <input className="hwa-input no-icon" value={f.image} onChange={e => set('image', e.target.value)} placeholder="https://images.unsplash.com/photo-…" />
            </Field>
            <div className="hwp-full"><ImagePreview url={f.image.trim()} onStatus={setMainImg} className="hwp-img-main" /></div>
            <Field label="Developer logo link" hint="Optional — shown on the detail page">
              <input className="hwa-input no-icon" value={f.logo} onChange={e => set('logo', e.target.value)} placeholder="https://…/logo.png" />
            </Field>
            <Field label="Brand colour" hint="Colour of the detail page header">
              <div className="hwp-color">
                <input type="color" value={f.brandColor} onChange={e => set('brandColor', e.target.value)} />
                <code>{f.brandColor}</code>
                {f.logo.trim() && <span className="hwp-logo-prev" style={{ background: f.brandColor }}><img src={f.logo.trim()} alt="logo preview" onError={e => (e.target.style.display = 'none')} /></span>}
              </div>
            </Field>
            <Field label="Gallery photos" full hint="Shown in the gallery on the detail page. Add as many as you like.">
              <ListInput
                items={f.gallery}
                onChange={v => set('gallery', v)}
                placeholder="https://… image link"
                addLabel="Add another photo"
                renderExtra={(v) => v.trim() ? <img className="hwp-thumb" src={v.trim()} alt="" onError={e => (e.target.style.visibility = 'hidden')} /> : <span className="hwp-thumb" />}
              />
            </Field>
          </div>
        </Step>

        {/* 6. HIGHLIGHTS */}
        <Step n="6" title="Highlights" sub="Key selling points — shown with checkmarks on the detail page. 4 is ideal.">
          <ListInput items={f.highlights} onChange={v => set('highlights', v)} placeholder="e.g. Only 2 apartments per floor with private lobbies" addLabel="Add highlight" />
        </Step>
      </div>

      {/* PREVIEW + ACTIONS */}
      <aside className="hwp-side">
        <div className="hwa-card hwp-preview">
          <div className="hwp-side-title">Live preview</div>
          <div className="hwp-pcard">
            <div className="hwp-pcard-img">
              {f.image.trim() ? <img src={f.image.trim()} alt="" onError={e => (e.target.style.visibility = 'hidden')} /> : <span>Main photo</span>}
              {f.tag && <b className="hwp-pcard-tag">{f.tag}</b>}
              {f.rera && <b className="hwp-pcard-rera">✓ RERA</b>}
            </div>
            <div className="hwp-pcard-body">
              <strong>{f.title || 'Project name'}</strong>
              <span className="hwp-pcard-price">{f.priceRange || f.price || 'Price range'}</span>
              <span className="hwp-pcard-loc">📍 {f.location || 'Location'}</span>
              <span className="hwp-pcard-meta">{f.bhk || 'Configuration'} · {f.type}</span>
            </div>
          </div>
          <div className="hwp-where">
            <span>{cat.icon} Will appear in</span>
            <strong>{cat.shows}</strong>
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
// List + switching between list and form
// ---------------------------------------------------------------
export default function PropertyManager({ properties, loaded = true, onChange, initialFilter = 'all', startAdding = false }) {
  // 'list' or { key, initial } while the add/edit form is open
  const [mode, setMode] = useState(() => {
    if (!startAdding) return 'list'
    const c = categoryById(initialFilter !== 'all' ? initialFilter : 'recommended')
    return { key: Date.now(), initial: { ...emptyProperty, category: c.id, type: c.defaultType, status: c.status || emptyProperty.status } }
  })
  const [editing, setEditing] = useState(null) // property being edited
  const [filter, setFilter] = useState(initialFilter)
  const [q, setQ] = useState('')
  const [notice, setNotice] = useState('')

  const counts = useMemo(() => {
    const c = { all: properties.length }
    for (const p of properties) c[p.category] = (c[p.category] || 0) + 1
    return c
  }, [properties])

  const shown = properties.filter(p =>
    (filter === 'all' || p.category === filter) &&
    (!q.trim() || `${p.title} ${p.location} ${p.developer}`.toLowerCase().includes(q.trim().toLowerCase()))
  )

  const openNew = (category) => {
    const c = categoryById(category || (filter !== 'all' ? filter : 'recommended'))
    setEditing(null)
    setNotice('')
    setMode({ key: Date.now(), initial: { ...emptyProperty, category: c.id, type: c.defaultType, status: c.status || emptyProperty.status } })
    window.scrollTo(0, 0)
  }
  const openEdit = (p) => {
    setEditing(p)
    setNotice('')
    setMode({ key: p.id, initial: toForm(p) })
    window.scrollTo(0, 0)
  }
  const saved = (action, title, category) => {
    setMode('list')
    setFilter(category)
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
        <PropertyForm
          key={mode.key}
          initial={mode.initial}
          editingId={editing?.id}
          counts={counts}
          onSaved={saved}
          onCancel={() => setMode('list')}
        />
      </div>
    )
  }

  return (
    <div className="hwa hwa-section hwa-light hwp">
      <div className="hwa-section-head">
        <div>
          <h2>Properties <span style={{ fontWeight: 500, color: '#9ca3af', fontSize: 14 }}>({properties.length})</span></h2>
          <p>Each property belongs to one section. Choose a section below to see or add its properties.</p>
        </div>
        <button className="hwa-btn hwa-btn-gold hwp-add-main" onClick={() => openNew()}>+ Add Property</button>
      </div>

      {notice && <div style={{ marginTop: 14 }}><Alert type="success">{notice}</Alert></div>}

      <div className="hwp-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All <em>{counts.all}</em></button>
        {CATEGORIES.map(c => (
          <button key={c.id} className={filter === c.id ? 'active' : ''} onClick={() => setFilter(c.id)}>
            {c.icon} {c.label} <em>{counts[c.id] || 0}</em>
          </button>
        ))}
      </div>

      {filter !== 'all' && (
        <div className="hwp-section-info">
          <div><strong>{categoryById(filter).icon} {categoryById(filter).label}</strong> — {categoryById(filter).shows}</div>
          <button className="hwa-mini" onClick={() => openNew(filter)}>+ Add to {categoryById(filter).label}</button>
        </div>
      )}

      <input className="hwa-input no-icon hwp-search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name, location or developer…" />

      {!loaded ? (
        <div className="hwa-card hwp-empty"><Spinner /><p>Loading properties… (the server may take up to a minute to wake up)</p></div>
      ) : shown.length === 0 ? (
        <div className="hwa-card hwp-empty">
          <p>No properties here yet.</p>
          <button className="hwa-btn hwa-btn-gold" style={{ width: 'auto', padding: '0 22px' }} onClick={() => openNew(filter !== 'all' ? filter : undefined)}>+ Add the first one</button>
        </div>
      ) : (
        <div className="hwp-cards">
          {shown.map(p => {
            const c = categoryById(p.category)
            return (
              <div key={p.id} className="hwp-item">
                <div className="hwp-item-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="hwp-item-cat">{c.icon} {c.label}</span>
                </div>
                <div className="hwp-item-body">
                  <strong title={p.title}>{p.title}</strong>
                  <span className="hwp-item-price">{p.priceRange || p.price}</span>
                  <span className="hwp-item-sub">{p.bhk} · {p.type}</span>
                  <span className="hwp-item-sub" title={p.location}>📍 {p.location}</span>
                  <div className="hwp-item-actions">
                    <button className="hwa-mini" onClick={() => openEdit(p)}>Edit</button>
                    <a className="hwa-mini" href={`/property/${p.id}`} target="_blank" rel="noreferrer">View</a>
                    <button className="hwa-mini danger" onClick={() => remove(p)}>Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
