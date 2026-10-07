import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../utils/api'
import { isLoggedIn, getAdmin, setAdmin, clearSession, tokenTimeLeft } from '../utils/auth'
import AdminUsers, { ChangePasswordForm } from './AdminUsers'
import PropertyManager from './PropertyManager'
import { CATEGORIES } from './propertyConfig'
import { Icon, Spinner } from './ui'
import { SnapsPage, BannersPage, LocationsPage, OffersPage, RecommendedPage } from './ContentPages'
import { BlogPage } from './BlogPage'
import { TestimonialsPage } from './TestimonialsPage'
import { BrandedFeaturePage } from './BrandedFeaturePage'
import logo from '../images/logo-homwiser.png'
import './admin.css'
import './dashboard.css'

const today = () => new Date().toISOString().slice(0, 10)
const errorOf = (e, fallback) => e.response?.data?.error || (e.response ? fallback : e.message) || fallback

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
    { id: 'recommended', label: 'Recommended', icon: Icon.star, count: 'recs' },
    { id: 'banners', label: 'Banners', icon: Icon.image },
    { id: 'locations', label: 'Prime Locations', icon: Icon.pin },
    { id: 'offers', label: 'Festival Offers', icon: Icon.gift },
    { id: 'branded', label: 'Branded Banner', icon: Icon.gem },
    { id: 'testimonials', label: 'Testimonials', icon: Icon.users, count: 'testis' },
  ] },
  { group: 'Content', items: [
    { id: 'blog', label: 'Blog', icon: Icon.edit, count: 'blogs' },
  ] },
  { group: 'Account', items: [
    { id: 'admins', label: 'Admins & Security', altLabel: 'My Account', icon: Icon.shield },
  ] },
]
const PAGE_NAMES = { overview: 'Overview', enquiries: 'Enquiries', properties: 'Properties', snaps: 'Property Snaps', recommended: 'Recommended', banners: 'Banners', locations: 'Prime Locations', offers: 'Festival Offers', branded: 'Branded Banner', blog: 'Blog', testimonials: 'Testimonials', admins: 'Admins & Security' }

// ---------------------------------------------------------------
// Overview
// ---------------------------------------------------------------
function Overview({ me, props, enqs, snaps, offers, locations, banners, recs, stats, isSuper, go, openProperties, reset }) {
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
          <button className="hwd-tile" onClick={() => go('banners')}><b>{banners.hero.length + (banners.slider?.length || 0) + banners.small.length}</b><span>Banners</span></button>
          <button className="hwd-tile" onClick={() => go('locations')}><b>{locations.length}</b><span>Prime locations</span></button>
          <button className="hwd-tile" onClick={() => go('offers')}><b>{offers.length}</b><span>Festival offers</span></button>
          <div className="hwd-tile"><b>{stats?.totalBuilders ?? '—'}</b><span>Developers</span></div>
          <button className="hwd-tile" onClick={() => go('recommended')}><b>{recs.length}</b><span>Recommended</span></button>
          <button className="hwd-tile" onClick={() => go('snaps')}><b>{snaps.length}</b><span>Snaps</span></button>
        </div>
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
  const [banners, setBanners] = useState({ hero: [], slider: [], small: [] })
  const [locations, setLocations] = useState([])
  const [offers, setOffers] = useState([])
  const [blogs, setBlogs] = useState([])
  const [testis, setTestis] = useState([])
  const [snaps, setSnaps] = useState([])
  const [recs, setRecs] = useState([])
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
      const [s, p, e, b, l, o, sn, rc, bl, ts] = await Promise.all([
        API.get('/admin/stats').catch(() => ({ data: {} })),
        API.get('/properties'),
        API.get('/enquiries').catch(() => ({ data: [] })),
        API.get('/banners'),
        API.get('/locations'),
        API.get('/offers'),
        API.get('/snaps'),
        API.get('/recommended').catch(() => ({ data: [] })),
        API.get('/blogs/admin/all').catch(() => ({ data: [] })),
        API.get('/testimonials/admin/all').catch(() => ({ data: [] }))
      ])
      setStats(s.data); setProps(p.data); setEnqs(e.data || []); setBanners(b.data); setLocations(l.data); setOffers(o.data); setSnaps(sn.data || []); setRecs(rc.data || []); setBlogs(bl.data || []); setTestis(ts.data || [])
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

  const counts = { enqs: enqs.length, props: props.length, snaps: snaps.length, recs: recs.length, blogs: blogs.length, testis: testis.length }
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
              {active === 'overview' && <Overview me={me} recs={recs} props={props} enqs={enqs} snaps={snaps} offers={offers} locations={locations} banners={banners} stats={stats} isSuper={isSuper} go={go} openProperties={openProperties} reset={reset} />}
              {active === 'properties' && <PropertyManager key={propView.key} properties={props} loaded={loaded} onChange={load} initialFilter={propView.filter} startAdding={propView.adding} />}
              {active === 'snaps' && <SnapsPage snaps={snaps} run={run} />}
              {active === 'banners' && <BannersPage banners={banners} run={run} properties={props} />}
              {active === 'locations' && <LocationsPage locations={locations} run={run} />}
              {active === 'offers' && <OffersPage offers={offers} run={run} properties={props} />}
              {active === 'recommended' && <RecommendedPage items={recs} run={run} properties={props} />}
              {active === 'blog' && <BlogPage blogs={blogs} run={run} />}
              {active === 'testimonials' && <TestimonialsPage items={testis} run={run} />}
              {active === 'branded' && <BrandedFeaturePage run={run} properties={props} />}
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
