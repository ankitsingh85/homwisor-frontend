import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../utils/api'
import { isLoggedIn, getAdmin, setAdmin, clearSession, tokenTimeLeft } from '../utils/auth'
import AdminUsers, { ChangePasswordForm } from './AdminUsers'
import PropertyManager from './PropertyManager'
import { CATEGORIES } from './propertyConfig'
import { Icon, Spinner } from './ui'
import logo from '../images/logo-homwiser.png'
import './admin.css'
import './dashboard.css'

const today = () => new Date().toISOString().slice(0, 10)
const errorOf = (e, fallback) => e.response?.data?.error || fallback

// ---------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------
function Field({ label, hint, full, children }) {
  return (
    <div className={`hwa-field${full ? ' full' : ''}`}>
      <label>{label}</label>
      {children}
      {hint && <span className="hwa-hint">{hint}</span>}
    </div>
  )
}

const Input = ({ value, onChange, ...rest }) => (
  <input className="hwa-input no-icon" value={value ?? ''} onChange={e => onChange(e.target.value)} {...rest} />
)

function PageHead({ title, count, sub, children }) {
  return (
    <div className="hwd-page-head">
      <div>
        <h1>{title}{count !== undefined && <span className="count">({count})</span>}</h1>
        {sub && <p>{sub}</p>}
      </div>
      {children}
    </div>
  )
}

function Empty({ icon: I = Icon.grid, children }) {
  return <div className="hwd-empty"><I /><div>{children}</div></div>
}

const NAV = [
  { group: 'Main', items: [
    { id: 'overview', label: 'Overview', icon: Icon.grid },
    { id: 'enquiries', label: 'Enquiries', icon: Icon.chat, count: 'enqs', hot: true },
  ] },
  { group: 'Listings', items: [
    { id: 'properties', label: 'Properties', icon: Icon.building, count: 'props' },
    { id: 'snaps', label: 'Property Snaps', icon: Icon.film, count: 'snaps' },
  ] },
  { group: 'Homepage', items: [
    { id: 'banners', label: 'Banners', icon: Icon.image },
    { id: 'locations', label: 'Prime Locations', icon: Icon.pin },
    { id: 'offers', label: 'Festival Offers', icon: Icon.gift },
  ] },
  { group: 'Account', items: [
    { id: 'admins', label: 'Admins & Security', altLabel: 'My Account', icon: Icon.shield },
  ] },
]
const PAGE_NAMES = { overview: 'Overview', enquiries: 'Enquiries', properties: 'Properties', snaps: 'Property Snaps', banners: 'Banners', locations: 'Prime Locations', offers: 'Festival Offers', admins: 'Admins & Security' }

// ---------------------------------------------------------------
// Overview
// ---------------------------------------------------------------
function Overview({ me, props, enqs, snaps, offers, locations, banners, stats, isSuper, go, openProperties, reset }) {
  const hour = new Date().getHours()
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const newToday = enqs.filter(e => e.date === today()).length
  const perCat = CATEGORIES.map(c => ({ ...c, n: props.filter(p => p.category === c.id).length }))
  const max = Math.max(1, ...perCat.map(c => c.n))
  const firstName = (me?.name || '').split(' ')[0] || 'there'

  return (
    <>
      <section className="hwd-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hwd-hero-date">{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
          <h1>{greet}, {firstName}</h1>
          <p>{newToday > 0 ? `You have ${newToday} new enquir${newToday === 1 ? 'y' : 'ies'} today. ` : 'No new enquiries today yet. '}Everything you publish here goes live on HomWisor.com instantly.</p>
        </div>
        <div className="hwd-hero-actions">
          <button className="hwd-btn gold" onClick={() => openProperties('all', true)}><Icon.plus /> Add Property</button>
          <a className="hwd-btn" href="/" target="_blank" rel="noreferrer"><Icon.external /> View Website</a>
        </div>
      </section>

      <div className="hwd-stats">
        <button className="hwd-stat" onClick={() => go('properties')}>
          <div className="hwd-stat-top"><span className="hwd-stat-label">Properties</span><span className="hwd-stat-ic"><Icon.building /></span></div>
          <div className="hwd-stat-value">{props.length}</div>
          <div className="hwd-stat-sub"><span className="hwd-dot" /> Live across {perCat.filter(c => c.n).length} sections</div>
        </button>
        <button className="hwd-stat" onClick={() => go('enquiries')}>
          <div className="hwd-stat-top"><span className="hwd-stat-label">Enquiries</span><span className="hwd-stat-ic"><Icon.chat /></span></div>
          <div className="hwd-stat-value">{enqs.length}</div>
          <div className="hwd-stat-sub">{newToday > 0 ? <><span className="up">+{newToday}</span> today</> : 'No new leads today'}</div>
        </button>
        <button className="hwd-stat" onClick={() => go('snaps')}>
          <div className="hwd-stat-top"><span className="hwd-stat-label">Property Snaps</span><span className="hwd-stat-ic"><Icon.film /></span></div>
          <div className="hwd-stat-value">{snaps.length}</div>
          <div className="hwd-stat-sub">Video reels on /property-snaps</div>
        </button>
        <button className="hwd-stat" onClick={() => go('offers')}>
          <div className="hwd-stat-top"><span className="hwd-stat-label">Festival Offers</span><span className="hwd-stat-ic"><Icon.gift /></span></div>
          <div className="hwd-stat-value">{offers.length}</div>
          <div className="hwd-stat-sub">Shown in “Best Festival Offer”</div>
        </button>
      </div>

      <div className="hwd-row r-2-1">
        <div className="hwd-card">
          <div className="hwd-card-head">
            <h3><span className="ic"><Icon.trend /></span> Listings by section</h3>
            <button className="hwd-link" onClick={() => go('properties')}>Manage <Icon.arrow /></button>
          </div>
          <div className="hwd-bars">
            {perCat.map(c => (
              <button key={c.id} className="hwd-bar" onClick={() => openProperties(c.id)} title={c.shows}>
                <span className="hwd-bar-label">{c.icon} {c.label}</span>
                <span className="hwd-bar-track"><span className="hwd-bar-fill" style={{ width: `${(c.n / max) * 100}%` }} /></span>
                <span className="hwd-bar-num">{c.n}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="hwd-card">
          <div className="hwd-card-head"><h3><span className="ic"><Icon.plus /></span> Quick actions</h3></div>
          <div className="hwd-quick">
            <button className="hwd-q" onClick={() => openProperties('all', true)}><span className="ic"><Icon.building /></span><div><strong>Add property</strong><span>Step-by-step form</span></div></button>
            <button className="hwd-q" onClick={() => go('snaps')}><span className="ic"><Icon.film /></span><div><strong>Add snap</strong><span>Video reel</span></div></button>
            <button className="hwd-q" onClick={() => go('banners')}><span className="ic"><Icon.image /></span><div><strong>Add banner</strong><span>Homepage slider</span></div></button>
            <button className="hwd-q" onClick={() => go('offers')}><span className="ic"><Icon.gift /></span><div><strong>Add offer</strong><span>Festival deal</span></div></button>
          </div>
          {isSuper && (
            <button className="hwd-btn danger" style={{ width: '100%', marginTop: 12 }} onClick={reset}><Icon.refresh /> Reset all data to demo</button>
          )}
        </div>
      </div>

      <div className="hwd-row r-1-1">
        <div className="hwd-card">
          <div className="hwd-card-head">
            <h3><span className="ic"><Icon.chat /></span> Latest enquiries</h3>
            <button className="hwd-link" onClick={() => go('enquiries')}>View all <Icon.arrow /></button>
          </div>
          {enqs.length === 0 ? <Empty icon={Icon.chat}>No enquiries yet. Leads from property pages appear here.</Empty> : (
            <div className="hwd-list">
              {enqs.slice(0, 5).map(e => (
                <div key={e.id} className="hwd-li">
                  <span className="hwd-initial">{(e.name || '?').slice(0, 1).toUpperCase()}</span>
                  <div className="hwd-li-body">
                    <strong>{e.name || 'Unknown'} {e.date === today() && <span className="hwd-new" style={{ display: 'inline', marginLeft: 6 }}>NEW</span>}</strong>
                    <span>{e.property || '—'} · {e.date}</span>
                  </div>
                  {e.phone && <a className="hwd-round" href={`tel:${e.phone}`} title="Call"><Icon.phone /></a>}
                  {e.phone && <a className="hwd-round wa" href={`https://wa.me/91${e.phone.replace(/\D/g, '').slice(-10)}`} target="_blank" rel="noreferrer" title="WhatsApp"><Icon.whatsapp /></a>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hwd-card">
          <div className="hwd-card-head">
            <h3><span className="ic"><Icon.building /></span> Recently added</h3>
            <button className="hwd-link" onClick={() => go('properties')}>All properties <Icon.arrow /></button>
          </div>
          {props.length === 0 ? <Empty icon={Icon.building}>No properties yet.</Empty> : (
            <div className="hwd-list">
              {props.slice(0, 5).map(p => (
                <div key={p.id} className="hwd-li">
                  <img className="hwd-li-thumb" src={p.image} alt="" />
                  <div className="hwd-li-body">
                    <strong>{p.title}</strong>
                    <span>{CATEGORIES.find(c => c.id === p.category)?.label || p.category} · {(p.location || '').split(',').slice(0, 2).join(',')}</span>
                  </div>
                  <span className="hwd-li-side">{p.priceRange || p.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hwd-card" style={{ marginTop: 16 }}>
        <div className="hwd-card-head"><h3><span className="ic"><Icon.image /></span> Homepage content</h3></div>
        <div className="hwd-tiles">
          <button className="hwd-tile" onClick={() => go('banners')}><b>{banners.hero.length + banners.small.length}</b><span>Banners</span></button>
          <button className="hwd-tile" onClick={() => go('locations')}><b>{locations.length}</b><span>Prime locations</span></button>
          <button className="hwd-tile" onClick={() => go('offers')}><b>{offers.length}</b><span>Festival offers</span></button>
          <div className="hwd-tile"><b>{stats?.totalBuilders ?? '—'}</b><span>Developers</span></div>
          <div className="hwd-tile"><b>{stats?.totalTestimonials ?? '—'}</b><span>Testimonials</span></div>
          <button className="hwd-tile" onClick={() => go('snaps')}><b>{snaps.length}</b><span>Snaps</span></button>
        </div>
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// Property Snaps
// ---------------------------------------------------------------
const emptySnap = { title: '', developer: '', location: '', microMarket: '', price: 'Contact for price', description: '', videoUrl: '', thumbnail: '', image: '', phone: '9811 750 740', demandText: 'High Demand: 10 buyers enquired in last 24 hours', activeBuyers: 24, monthlyRental: '₹85,000/mo', roi: '5.5%', badge: 'LUXURY EDITION' }

function SnapsPage({ snaps, run }) {
  const [f, setF] = useState(emptySnap)
  const [editing, setEditing] = useState(null)
  const set = (k) => (v) => setF(prev => ({ ...prev, [k]: v }))

  const save = (e) => {
    e.preventDefault()
    run(async () => {
      if (editing) await API.put(`/snaps/${editing}`, f)
      else await API.post('/snaps', f)
      setEditing(null); setF(emptySnap)
    }, editing ? 'Snap updated' : 'Snap published')
  }
  const edit = (s) => { setEditing(s.id); setF({ ...emptySnap, ...s }); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const del = (s) => { if (confirm(`Delete snap “${s.title}”?`)) run(() => API.delete(`/snaps/${s.id}`), 'Snap deleted') }

  return (
    <>
      <PageHead title="Property Snaps" count={snaps.length} sub="Vertical video reels shown at /property-snaps. Paste an .mp4 video link and a thumbnail." >
        <a className="hwd-btn" href="/property-snaps" target="_blank" rel="noreferrer"><Icon.external /> View Snaps page</a>
      </PageHead>
      <div className="hwd-split">
        <form className="hwd-card hwd-form hwa hwa-light" onSubmit={save}>
          <div className="hwd-card-head"><h3><span className="ic">{editing ? <Icon.edit /> : <Icon.plus />}</span> {editing ? 'Edit snap' : 'Add a snap'}</h3></div>
          <div className="hwd-form-grid">
            <Field label="Title *" full><Input required value={f.title} onChange={set('title')} placeholder="e.g. Oberoi Realty 360 North" /></Field>
            <Field label="Developer"><Input value={f.developer} onChange={set('developer')} placeholder="e.g. Oberoi Realty" /></Field>
            <Field label="Location"><Input value={f.location} onChange={set('location')} placeholder="e.g. Sector 66, Gurugram" /></Field>
            <Field label="Video link (.mp4) *" full hint="Plays muted on a loop"><Input required value={f.videoUrl} onChange={set('videoUrl')} placeholder="https://…/video.mp4" /></Field>
            <Field label="Thumbnail image *" full><Input required value={f.thumbnail} onChange={set('thumbnail')} placeholder="https://… image link" /></Field>
            <div className="full" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div className="hwd-preview tall" style={{ width: 120, flexShrink: 0 }}>{f.thumbnail ? <img src={f.thumbnail} alt="" onError={e => (e.target.style.display = 'none')} /> : 'Thumbnail'}</div>
              {f.videoUrl && <a href={f.videoUrl} target="_blank" rel="noreferrer" className="hwd-link" style={{ marginTop: 6 }}>Test video link <Icon.external /></a>}
            </div>
            <Field label="Price"><Input value={f.price} onChange={set('price')} placeholder="₹5.20 Cr" /></Field>
            <Field label="Badge"><Input value={f.badge} onChange={set('badge')} placeholder="LUXURY EDITION" /></Field>
            <Field label="Phone"><Input value={f.phone} onChange={set('phone')} /></Field>
            <Field label="Micro-market"><Input value={f.microMarket} onChange={set('microMarket')} placeholder="Golf Course Ext." /></Field>
            <Field label="Monthly rental"><Input value={f.monthlyRental} onChange={set('monthlyRental')} /></Field>
            <Field label="ROI"><Input value={f.roi} onChange={set('roi')} /></Field>
            <Field label="Active buyers"><input className="hwa-input no-icon" type="number" min="0" value={f.activeBuyers} onChange={e => set('activeBuyers')(parseInt(e.target.value) || 0)} /></Field>
            <Field label="Poster image (fallback)"><Input value={f.image} onChange={set('image')} placeholder="Optional" /></Field>
            <Field label="Demand text" full><Input value={f.demandText} onChange={set('demandText')} /></Field>
            <Field label="Description" full><textarea className="hwa-input no-icon" rows={3} value={f.description} onChange={e => set('description')(e.target.value)} placeholder="Project overview…" /></Field>
          </div>
          <div className="hwd-form-actions">
            <button className="hwd-btn gold" type="submit">{editing ? 'Save changes' : 'Publish snap'}</button>
            {editing && <button className="hwd-btn" type="button" onClick={() => { setEditing(null); setF(emptySnap) }}>Cancel</button>}
          </div>
        </form>

        <div>
          {snaps.length === 0 ? <div className="hwd-card"><Empty icon={Icon.film}>No snaps yet — add the first one.</Empty></div> : (
            <div className="hwd-media">
              {snaps.map(s => (
                <div key={s.id} className="hwd-m">
                  <div className="hwd-m-img tall">
                    <img src={s.thumbnail || s.image} alt={s.title} loading="lazy" />
                    <div className="hwd-m-play"><span><Icon.film /></span></div>
                    {s.badge && <span className="hwd-m-badge">{s.badge}</span>}
                  </div>
                  <div className="hwd-m-body">
                    <strong title={s.title}>{s.title}</strong>
                    <span className="gold">{s.price}</span>
                    <span className="sub">{s.location} · {s.activeBuyers} viewing</span>
                    <div className="hwd-m-actions">
                      <button className="hwa-mini" onClick={() => edit(s)}><Icon.edit /> Edit</button>
                      <button className="hwa-mini danger" onClick={() => del(s)}><Icon.trash /> Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// Banners
// ---------------------------------------------------------------
function BannersPage({ banners, run }) {
  const empty = { image: '', title: '', link: '#', developer: '' }
  const [type, setType] = useState('hero')
  const [f, setF] = useState(empty)
  const set = (k) => (v) => setF(prev => ({ ...prev, [k]: v }))
  const save = (e) => { e.preventDefault(); run(async () => { await API.post(`/banners/${type}`, f); setF(empty) }, 'Banner added') }
  const del = (t, b) => { if (confirm(`Delete banner “${b.title}”?`)) run(() => API.delete(`/banners/${t}/${b.id}`), 'Banner deleted') }

  const List = ({ t, items }) => items.length === 0 ? <div className="hwd-card"><Empty icon={Icon.image}>No {t} banners.</Empty></div> : (
    <div className={`hwd-media${t === 'hero' ? ' wide' : ''}`}>
      {items.map(b => (
        <div key={b.id} className="hwd-m">
          <div className="hwd-m-img"><img src={b.image} alt={b.title} loading="lazy" />{b.developer && <span className="hwd-m-badge">{b.developer}</span>}</div>
          <div className="hwd-m-body">
            <strong title={b.title}>{b.title}</strong>
            <span className="sub">Link: {b.link || '—'}</span>
            <div className="hwd-m-actions"><button className="hwa-mini danger" onClick={() => del(t, b)}><Icon.trash /> Delete</button></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <PageHead title="Banners" count={banners.hero.length + banners.small.length} sub="Hero banners rotate at the top of the homepage. Small banners are the cards below the search box." />
      <div className="hwd-split">
        <form className="hwd-card hwd-form hwa hwa-light hwd-sticky" onSubmit={save}>
          <div className="hwd-card-head"><h3><span className="ic"><Icon.plus /></span> Add a banner</h3></div>
          <div className="hwd-seg">
            <button type="button" className={type === 'hero' ? 'on' : ''} onClick={() => setType('hero')}>Hero (large)</button>
            <button type="button" className={type === 'small' ? 'on' : ''} onClick={() => setType('small')}>Small card</button>
          </div>
          <div className="hwd-preview">{f.image ? <img src={f.image} alt="" onError={e => (e.target.style.display = 'none')} /> : 'Image preview'}</div>
          <Field label="Image link *"><Input required value={f.image} onChange={set('image')} placeholder="https://… wide image" /></Field>
          <Field label="Title *"><Input required value={f.title} onChange={set('title')} placeholder="e.g. Godrej Verano — Sector 63A" /></Field>
          {type === 'hero' && <Field label="Developer"><Input value={f.developer} onChange={set('developer')} placeholder="e.g. GODREJ PROPERTIES" /></Field>}
          <Field label="Link" hint="Where the banner goes when clicked, e.g. /search or /property/p1"><Input value={f.link} onChange={set('link')} /></Field>
          <div className="hwd-form-actions"><button className="hwd-btn gold" type="submit">Add {type === 'hero' ? 'hero' : 'small'} banner</button></div>
        </form>
        <div>
          <div className="hwd-subhead" style={{ marginTop: 0 }}>Hero banners <em>{banners.hero.length}</em></div>
          <List t="hero" items={banners.hero} />
          <div className="hwd-subhead">Small banners <em>{banners.small.length}</em></div>
          <List t="small" items={banners.small} />
        </div>
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// Prime Locations
// ---------------------------------------------------------------
function LocationsPage({ locations, run }) {
  const empty = { name: '', image: '', count: '' }
  const [f, setF] = useState(empty)
  const set = (k) => (v) => setF(prev => ({ ...prev, [k]: v }))
  const save = (e) => { e.preventDefault(); run(async () => { await API.post('/locations', f); setF(empty) }, 'Location added') }
  const del = (l) => { if (confirm(`Delete “${l.name}”?`)) run(() => API.delete(`/locations/${l.id}`), 'Location deleted') }
  return (
    <>
      <PageHead title="Prime Locations" count={locations.length} sub="The “Gurugram’s Prime Locations” cards on the homepage." />
      <div className="hwd-split">
        <form className="hwd-card hwd-form hwa hwa-light hwd-sticky" onSubmit={save}>
          <div className="hwd-card-head"><h3><span className="ic"><Icon.plus /></span> Add a location</h3></div>
          <div className="hwd-preview">{f.image ? <img src={f.image} alt="" onError={e => (e.target.style.display = 'none')} /> : 'Image preview'}</div>
          <Field label="Location name *"><Input required value={f.name} onChange={set('name')} placeholder="e.g. Golf Course Road" /></Field>
          <Field label="Image link *"><Input required value={f.image} onChange={set('image')} placeholder="https://…" /></Field>
          <Field label="Count text *" hint="Shown under the name"><Input required value={f.count} onChange={set('count')} placeholder="e.g. 142 Projects" /></Field>
          <div className="hwd-form-actions"><button className="hwd-btn gold" type="submit">Add location</button></div>
        </form>
        {locations.length === 0 ? <div className="hwd-card"><Empty icon={Icon.pin}>No locations yet.</Empty></div> : (
          <div className="hwd-media">
            {locations.map(l => (
              <div key={l.id} className="hwd-m">
                <div className="hwd-m-img"><img src={l.image} alt={l.name} loading="lazy" /></div>
                <div className="hwd-m-body">
                  <strong>{l.name}</strong>
                  <span className="sub">{l.count}</span>
                  <div className="hwd-m-actions"><button className="hwa-mini danger" onClick={() => del(l)}><Icon.trash /> Delete</button></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// Festival Offers
// ---------------------------------------------------------------
function OffersPage({ offers, run }) {
  const empty = { title: '', price: '', location: '', image: '', badge: '' }
  const [f, setF] = useState(empty)
  const set = (k) => (v) => setF(prev => ({ ...prev, [k]: v }))
  const save = (e) => { e.preventDefault(); run(async () => { await API.post('/offers', f); setF(empty) }, 'Offer added') }
  const del = (o) => { if (confirm(`Delete offer “${o.title}”?`)) run(() => API.delete(`/offers/${o.id}`), 'Offer deleted') }
  return (
    <>
      <PageHead title="Festival Offers" count={offers.length} sub="Deals shown in the “Best Festival Offer” section on the homepage." />
      <div className="hwd-split">
        <form className="hwd-card hwd-form hwa hwa-light hwd-sticky" onSubmit={save}>
          <div className="hwd-card-head"><h3><span className="ic"><Icon.plus /></span> Add an offer</h3></div>
          <div className="hwd-preview">{f.image ? <img src={f.image} alt="" onError={e => (e.target.style.display = 'none')} /> : 'Image preview'}</div>
          <div className="hwd-form-grid">
            <Field label="Project *" full><Input required value={f.title} onChange={set('title')} placeholder="e.g. BPTP DownTown 66" /></Field>
            <Field label="Price *"><Input required value={f.price} onChange={set('price')} placeholder="₹5.20 Cr" /></Field>
            <Field label="Badge *"><Input required value={f.badge} onChange={set('badge')} placeholder="NAVRATRI SPECIAL" /></Field>
            <Field label="Location *" full><Input required value={f.location} onChange={set('location')} placeholder="Sector 66, Gurugram" /></Field>
            <Field label="Image link *" full><Input required value={f.image} onChange={set('image')} placeholder="https://…" /></Field>
          </div>
          <div className="hwd-form-actions"><button className="hwd-btn gold" type="submit">Add offer</button></div>
        </form>
        {offers.length === 0 ? <div className="hwd-card"><Empty icon={Icon.gift}>No offers yet.</Empty></div> : (
          <div className="hwd-media">
            {offers.map(o => (
              <div key={o.id} className="hwd-m">
                <div className="hwd-m-img"><img src={o.image} alt={o.title} loading="lazy" />{o.badge && <span className="hwd-m-badge">{o.badge}</span>}</div>
                <div className="hwd-m-body">
                  <strong title={o.title}>{o.title}</strong>
                  <span className="gold">{o.price}</span>
                  <span className="sub">{o.location}</span>
                  <div className="hwd-m-actions"><button className="hwa-mini danger" onClick={() => del(o)}><Icon.trash /> Delete</button></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

// ---------------------------------------------------------------
// Enquiries
// ---------------------------------------------------------------
function EnquiriesPage({ enqs, run }) {
  const [q, setQ] = useState('')
  const [onlyToday, setOnlyToday] = useState(false)
  const shown = enqs.filter(e =>
    (!onlyToday || e.date === today()) &&
    (!q.trim() || `${e.name} ${e.phone} ${e.email} ${e.property} ${e.message}`.toLowerCase().includes(q.trim().toLowerCase()))
  )
  const del = (e) => { if (confirm(`Delete the enquiry from ${e.name || 'this lead'}?`)) run(() => API.delete(`/enquiries/${e.id}`), 'Enquiry deleted') }
  const newCount = enqs.filter(e => e.date === today()).length

  return (
    <>
      <PageHead title="Enquiries" count={enqs.length} sub="Leads submitted from property pages. Call or WhatsApp them quickly." />
      <div className="hwd-toolbar">
        <div className="hwd-search"><Icon.search /><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search name, phone, property…" /></div>
        <div className="hwd-seg" style={{ margin: 0 }}>
          <button className={!onlyToday ? 'on' : ''} onClick={() => setOnlyToday(false)}>All</button>
          <button className={onlyToday ? 'on' : ''} onClick={() => setOnlyToday(true)}>Today ({newCount})</button>
        </div>
      </div>
      {shown.length === 0 ? <div className="hwd-card"><Empty icon={Icon.chat}>{enqs.length ? 'No enquiries match.' : 'No enquiries yet.'}</Empty></div> : (
        <div className="hwd-enq">
          {shown.map(e => {
            const digits = (e.phone || '').replace(/\D/g, '').slice(-10)
            return (
              <div key={e.id} className="hwd-e">
                <span className="hwd-initial">{(e.name || '?').slice(0, 1).toUpperCase()}</span>
                <div style={{ minWidth: 0 }}>
                  <div className="hwd-e-top">
                    <strong>{e.name || 'Unknown'}</strong>
                    {e.date === today() && <span className="hwd-new">NEW</span>}
                    <span className="hwd-e-date">{e.date}</span>
                  </div>
                  <div className="hwd-e-contact">
                    {e.phone && <span>📞 {e.phone}</span>}
                    {e.email && <span>✉️ {e.email}</span>}
                  </div>
                  {e.property && <span className="hwd-e-prop"><Icon.building /> {e.property}</span>}
                  {e.message && <div className="hwd-e-msg">{e.message}</div>}
                </div>
                <div className="hwd-e-actions">
                  {e.phone && <a className="call" href={`tel:${e.phone}`}><Icon.phone /> Call</a>}
                  {digits && <a className="wa" href={`https://wa.me/91${digits}`} target="_blank" rel="noreferrer"><Icon.whatsapp /> WhatsApp</a>}
                  <button className="del" onClick={() => del(e)}><Icon.trash /></button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

// ---------------------------------------------------------------
// Shell
// ---------------------------------------------------------------
export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [props, setProps] = useState([])
  const [enqs, setEnqs] = useState([])
  const [banners, setBanners] = useState({ hero: [], small: [] })
  const [locations, setLocations] = useState([])
  const [offers, setOffers] = useState([])
  const [snaps, setSnaps] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState('overview')
  const [propView, setPropView] = useState({ key: 0, filter: 'all', adding: false })
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [timeLeft, setTimeLeft] = useState(tokenTimeLeft())
  const [me, setMe] = useState(getAdmin())
  const nav = useNavigate()
  const isSuper = me?.role === 'superadmin'

  const updateMe = (a) => { setAdmin(a); setMe(a) }

  useEffect(() => {
    if (!isLoggedIn()) { clearSession(); nav('/admin?session=expired', { replace: true }); return }
    API.get('/admin/me').then(r => updateMe(r.data.admin)).catch(() => {})
    load()
    // Sign out exactly when the 1-day token expires
    const timer = setTimeout(() => { clearSession(); nav('/admin?session=expired', { replace: true }) }, tokenTimeLeft())
    const tick = setInterval(() => setTimeLeft(tokenTimeLeft()), 60000)
    return () => { clearTimeout(timer); clearInterval(tick) }
  }, [])

  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 3200); return () => clearTimeout(t) }, [toast])

  const load = async () => {
    try {
      const [s, p, e, b, l, o, sn] = await Promise.all([
        API.get('/admin/stats').catch(() => ({ data: {} })),
        API.get('/properties'),
        API.get('/enquiries').catch(() => ({ data: [] })),
        API.get('/banners'),
        API.get('/locations'),
        API.get('/offers'),
        API.get('/snaps')
      ])
      setStats(s.data); setProps(p.data); setEnqs(e.data || []); setBanners(b.data); setLocations(l.data); setOffers(o.data); setSnaps(sn.data || [])
    } catch (e) {
      console.error(e)
    } finally { setLoaded(true) }
  }

  // Run an API action, show a toast, refresh data
  const run = async (fn, okMsg) => {
    try { await fn(); setToast({ msg: okMsg }); await load() }
    catch (e) { setToast({ msg: errorOf(e, 'Something went wrong'), type: 'error' }) }
  }

  const go = (id) => { setActive(id); setMenuOpen(false); window.scrollTo(0, 0) }
  const openProperties = (filter = 'all', adding = false) => { setPropView({ key: Date.now(), filter, adding }); go('properties') }

  const logout = () => { clearSession(); nav('/admin?session=loggedout', { replace: true }) }
  const reset = () => { if (confirm('Reset ALL website data to the demo content? Your properties, offers, banners and enquiries will be replaced.')) run(() => API.post('/admin/reset'), 'Demo data restored') }

  const counts = { enqs: enqs.length, props: props.length, snaps: snaps.length }
  const hoursLeft = Math.max(0, Math.round(timeLeft / 3600000))
  const newToday = useMemo(() => enqs.filter(e => e.date === today()).length, [enqs])

  return (
    <div className={`hwd${menuOpen ? ' open' : ''}`}>
      <div className="hwd-backdrop" onClick={() => setMenuOpen(false)} />

      {/* ---------- SIDEBAR ---------- */}
      <aside className="hwd-side">
        <div className="hwd-side-top">
          <img src={logo} alt="HomWisor" />
          <button className="hwd-side-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon.x /></button>
        </div>
        <nav className="hwd-nav">
          {NAV.map(g => (
            <div key={g.group} className="hwd-nav-group">
              <div className="hwd-nav-label">{g.group}</div>
              {g.items.map(item => {
                const I = item.icon
                const n = item.count ? counts[item.count] : null
                return (
                  <button key={item.id} className={`hwd-nav-item${active === item.id ? ' active' : ''}`} onClick={() => item.id === 'properties' ? openProperties() : go(item.id)}>
                    <I /> {!isSuper && item.altLabel ? item.altLabel : item.label}
                    {n !== null && n > 0 && <span className={`hwd-nav-count${item.hot && newToday ? ' hot' : ''}`}>{item.hot && newToday ? `${newToday} new` : n}</span>}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>
        <div className="hwd-side-foot">
          {me && (
            <div className="hwd-user">
              <span className="hwd-avatar">{(me.name || me.email || '?').slice(0, 1).toUpperCase()}</span>
              <div className="hwd-user-meta" onClick={() => go('admins')} title="My account">
                <strong>{me.name}</strong>
                <span>{isSuper ? 'Super Admin' : 'Admin'}</span>
              </div>
              <button className="hwd-icon-btn" onClick={logout} title="Sign out" aria-label="Sign out"><Icon.logout /></button>
            </div>
          )}
        </div>
      </aside>

      {/* ---------- MAIN ---------- */}
      <div className="hwd-main">
        <header className="hwd-top">
          <button className="hwd-btn hwd-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu" style={{ width: 38, padding: 0 }}><Icon.menu /></button>
          <div className="hwd-crumbs"><span>Admin</span><span>›</span><strong>{PAGE_NAMES[active]}</strong></div>
          <div className="hwd-top-right">
            <span className="hwd-chip session" title="You will be signed out automatically when the session ends"><Icon.clock /> Session: {hoursLeft}h left</span>
            <a className="hwd-btn" href="/" target="_blank" rel="noreferrer"><Icon.external /><span>View website</span></a>
            <button className="hwd-btn gold" onClick={() => openProperties('all', true)}><Icon.plus /><span>Add property</span></button>
          </div>
        </header>

        <main className="hwd-content">
          {!loaded && active === 'overview' ? (
            <div className="hwd-card" style={{ display: 'grid', placeItems: 'center', gap: 12, padding: 60, color: '#6b7280' }}>
              <Spinner /> Loading dashboard… (the server may take up to a minute to wake up)
            </div>
          ) : (
            <>
              {active === 'overview' && <Overview me={me} props={props} enqs={enqs} snaps={snaps} offers={offers} locations={locations} banners={banners} stats={stats} isSuper={isSuper} go={go} openProperties={openProperties} reset={reset} />}
              {active === 'properties' && <PropertyManager key={propView.key} properties={props} loaded={loaded} onChange={load} initialFilter={propView.filter} startAdding={propView.adding} />}
              {active === 'snaps' && <SnapsPage snaps={snaps} run={run} />}
              {active === 'banners' && <BannersPage banners={banners} run={run} />}
              {active === 'locations' && <LocationsPage locations={locations} run={run} />}
              {active === 'offers' && <OffersPage offers={offers} run={run} />}
              {active === 'enquiries' && <EnquiriesPage enqs={enqs} run={run} />}
              {active === 'admins' && <AdminUsers me={me} onMeChange={updateMe} />}
            </>
          )}
        </main>
      </div>

      {toast && (
        <div className={`hwd-toast${toast.type === 'error' ? ' error' : ''}`} role="status">
          {toast.type === 'error' ? <Icon.alert /> : <Icon.check />} {toast.msg}
        </div>
      )}

      {me?.mustChangePassword && (
        <div className="hwa hwa-overlay">
          <div className="hwa-modal">
            <img src={logo} alt="HomWisor" style={{ width: 130, marginBottom: 16 }} />
            <h3>Set a new password</h3>
            <p>You are signed in with a default password. Choose a new one to continue — it must be at least 8 characters with letters and numbers.</p>
            <ChangePasswordForm admin={me} onChanged={a => { updateMe(a); load() }} submitLabel="Save & Continue" />
            <button onClick={logout} style={{ marginTop: 12, width: '100%', background: 'none', border: 'none', color: '#a39e92', fontSize: 13, cursor: 'pointer' }}>Sign out instead</button>
          </div>
        </div>
      )}
    </div>
  )
}
