import { useState } from 'react'
import API from '../utils/api'
import { Icon } from './ui'
import { ImageUpload } from './ImageUpload'
import DataList, { Drawer } from './DataList'
import { localitiesOf } from '../data/locations'
import { BUDGETS } from '../utils/propertySearch'

export const need = (value, what) => { if (!value) throw new Error(`Please ${what}`) }
const byText = (k) => (a, b) => String(a[k] || '').localeCompare(String(b[k] || ''))
const newest = (a, b) => String(b.createdAt || b.id).localeCompare(String(a.createdAt || a.id))
const oldest = (a, b) => -newest(a, b)
const isUploading = () => !!document.querySelector('.hwl-drawer .hwu-busy')

export function Field({ label, hint, full, children }) {
  return (
    <div className={`hwa-field${full ? ' full' : ''}`}>
      <label>{label}</label>
      {children}
      {hint && <span className="hwa-hint">{hint}</span>}
    </div>
  )
}
export const Input = ({ value, onChange, ...rest }) => (
  <input className="hwa-input no-icon" value={value ?? ''} onChange={e => onChange(e.target.value)} {...rest} />
)
export function PageHead({ title, count, sub, children }) {
  return (
    <div className="hwd-page-head">
      <div>
        <h1>{title}{count !== undefined && <span className="count">({count})</span>}</h1>
        {sub && <p>{sub}</p>}
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{children}</div>
    </div>
  )
}

// Shared open / save / delete logic for a drawer-edited collection
export function useEditor({ empty, run, create, update, remove, validate, labels }) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [f, setF] = useState(empty)
  const [saving, setSaving] = useState(false)
  const set = (k) => (v) => setF(prev => ({ ...prev, [k]: v }))

  const openNew = (preset = {}) => { setEditing(null); setF({ ...empty, ...preset }); setOpen(true) }
  const openEdit = (item) => { setEditing(item); setF({ ...empty, ...item }); setOpen(true) }
  const close = () => !saving && setOpen(false)
  const save = async (e) => {
    e?.preventDefault()
    if (isUploading()) return run(() => { throw new Error('Please wait — the image is still uploading') })
    setSaving(true)
    let ok = false
    await run(async () => {
      validate?.(f)
      const body = Object.fromEntries(Object.keys(empty).map(k => [k, f[k]]))
      if (editing) await update(editing, body)
      else await create(body)
      ok = true
    }, editing ? labels.updated : labels.created)
    setSaving(false)
    if (ok) setOpen(false)
  }
  const del = (item) => {
    if (confirm(`Delete “${item.title || item.name}”? This removes it from the website.`)) run(() => remove(item), labels.deleted)
  }
  return { open, editing, f, set, setF, saving, openNew, openEdit, close, save, del }
}

export const DrawerFooter = ({ ed, saveLabel }) => (
  <>
    <button type="button" className="hwd-btn" onClick={ed.close} disabled={ed.saving}>Cancel</button>
    <button type="submit" form="hwl-form" className="hwd-btn gold" disabled={ed.saving}>
      {ed.saving ? 'Saving…' : ed.editing ? 'Save changes' : saveLabel}
    </button>
  </>
)

// ---------------------------------------------------------------
// Property Snaps
// ---------------------------------------------------------------
const emptySnap = { title: '', developer: '', location: '', microMarket: '', price: 'Contact for price', description: '', videoUrl: '', thumbnail: '', image: '', phone: '9811 750 740', demandText: 'High Demand: 10 buyers enquired in last 24 hours', activeBuyers: 24, monthlyRental: '₹85,000/mo', roi: '5.5%', badge: 'LUXURY EDITION' }

export function SnapsPage({ snaps, run }) {
  const ed = useEditor({
    empty: emptySnap, run,
    create: (b) => API.post('/snaps', b),
    update: (it, b) => API.put(`/snaps/${it.id}`, b),
    remove: (it) => API.delete(`/snaps/${it.id}`),
    validate: (f) => { need(f.title, 'enter a title'); need(f.videoUrl, 'paste the video link'); need(f.thumbnail, 'upload a thumbnail') },
    labels: { created: 'Snap published', updated: 'Snap updated', deleted: 'Snap deleted' },
  })
  const { f, set } = ed

  return (
    <>
      <PageHead title="Property Snaps" count={snaps.length} sub="Vertical video reels shown on the /property-snaps page.">
        <a className="hwd-btn" href="/property-snaps" target="_blank" rel="noreferrer"><Icon.external /> View page</a>
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add snap</button>
      </PageHead>

      <DataList
        id="snaps"
        items={snaps}
        main={{
          aspect: 'tall',
          thumb: s => s.thumbnail || s.image,
          title: s => s.title,
          sub: s => [s.developer, s.location].filter(Boolean).join(' · '),
          overlay: () => <span className="hwl-play"><span><Icon.film /></span></span>,
        }}
        badges={s => [s.badge && { text: s.badge, tone: 'dark' }]}
        columns={[
          { label: 'Price', render: s => <span className="gold">{s.price}</span> },
          { label: 'Buyers', render: s => <span><b>{s.activeBuyers}</b> <span className="muted">viewing</span></span>, hideSm: true },
          { label: 'Rental / ROI', render: s => <span className="muted">{s.monthlyRental} · {s.roi}</span>, hideSm: true },
        ]}
        actions={s => [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          s.videoUrl && { label: 'Video', icon: Icon.film, href: s.videoUrl },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ]}
        searchText={s => `${s.title} ${s.developer} ${s.location} ${s.badge}`}
        sorts={[{ value: 'new', label: 'Newest first', fn: newest }, { value: 'old', label: 'Oldest first', fn: oldest }, { value: 'az', label: 'Name A–Z', fn: byText('title') }]}
        empty="No snaps yet."
        onEmptyAdd={() => ed.openNew()}
        emptyAddLabel="Add the first snap"
        defaultView="grid"
      />

      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? `Edit snap` : 'Add a snap'} sub="Paste an .mp4 video link and upload a portrait thumbnail." footer={<DrawerFooter ed={ed} saveLabel="Publish snap" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          <div className="hwl-drawer-section">
            <h4>Video</h4>
            <div className="hwd-form-grid">
              <Field label="Video link (.mp4) *" full hint="Plays muted on a loop"><Input value={f.videoUrl} onChange={set('videoUrl')} placeholder="https://…/video.mp4" /></Field>
              <Field label="Thumbnail *" full><div style={{ maxWidth: 220 }}><ImageUpload value={f.thumbnail} onChange={set('thumbnail')} purpose="snap" aspect="4 / 5" /></div></Field>
            </div>
          </div>
          <div className="hwl-drawer-section">
            <h4>Details</h4>
            <div className="hwd-form-grid">
              <Field label="Title *" full><Input value={f.title} onChange={set('title')} placeholder="e.g. Oberoi Realty 360 North" /></Field>
              <Field label="Developer"><Input value={f.developer} onChange={set('developer')} placeholder="e.g. Oberoi Realty" /></Field>
              <Field label="Location"><Input value={f.location} onChange={set('location')} placeholder="e.g. Sector 66, Gurugram" /></Field>
              <Field label="Price"><Input value={f.price} onChange={set('price')} placeholder="₹5.20 Cr" /></Field>
              <Field label="Badge"><Input value={f.badge} onChange={set('badge')} placeholder="LUXURY EDITION" /></Field>
              <Field label="Description" full><textarea className="hwa-input no-icon" rows={3} value={f.description} onChange={e => set('description')(e.target.value)} placeholder="Project overview…" /></Field>
            </div>
          </div>
          <div className="hwl-drawer-section">
            <h4>Info cards</h4>
            <div className="hwd-form-grid">
              <Field label="Phone"><Input value={f.phone} onChange={set('phone')} /></Field>
              <Field label="Micro-market"><Input value={f.microMarket} onChange={set('microMarket')} placeholder="Golf Course Ext." /></Field>
              <Field label="Monthly rental"><Input value={f.monthlyRental} onChange={set('monthlyRental')} /></Field>
              <Field label="ROI"><Input value={f.roi} onChange={set('roi')} /></Field>
              <Field label="Active buyers"><input className="hwa-input no-icon" type="number" min="0" value={f.activeBuyers} onChange={e => set('activeBuyers')(parseInt(e.target.value) || 0)} /></Field>
              <Field label="Demand text" full><Input value={f.demandText} onChange={set('demandText')} /></Field>
            </div>
          </div>
        </form>
      </Drawer>
    </>
  )
}

// ---------------------------------------------------------------
// Banners (hero, image slider, side ads) + "opens when clicked" picker
// ---------------------------------------------------------------
const emptyBanner = { image: '', title: '', link: '', developer: '' }

const BANNER_TYPES = {
  hero: {
    tab: 'Hero banners', one: 'hero banner', purpose: 'hero', aspect: '3 / 1', thumb: 'banner',
    where: 'The big rotating banner at the very top of the homepage.',
  },
  slider: {
    tab: 'Image slider', one: 'slider image', purpose: 'slider', aspect: '1373 / 240', thumb: 'banner',
    where: 'The wide rotating strip just below the homepage search box.',
  },
  small: {
    tab: 'Side ads', one: 'side ad', purpose: 'sidead', aspect: '9 / 20', thumb: 'tall', fit: 'cover', narrow: true,
    where: 'The tall rotating promo beside the Trending, SCO and Commercial listings.',
  },
}

// Ready-made destinations so admins don't have to type links
function linkOptions(properties = []) {
  return [
    { group: 'Properties', items: [...properties].sort((a, b) => a.title.localeCompare(b.title)).map(p => [`/property/${p.id}`, p.title]) },
    { group: 'Listings', items: [
      ['/search', 'All properties'],
      ['/search?category=trending', 'Trending'],
      ['/search?category=upcoming', 'Upcoming'],
      ['/search?category=newlaunch', 'New Launch'],
      ['/search?category=commercial', 'Commercial'],
      ['/search?category=sco', 'SCO'],
      ['/search?category=branded', 'Branded residences'],
      ['/search?category=luxury', 'Luxury projects'],
      ['/property-snaps', 'Property Snaps'],
    ] },
    { group: 'Locations', items: localitiesOf('Gurugram').map(l => [`/search?location=${l.slug}`, `${l.name}, Gurugram`]) },
    { group: 'Budget', items: BUDGETS.map(b => [`/search?budget=${b.value}`, b.label]) },
    { group: 'Pages', items: [['/about', 'About us'], ['/contact', 'Contact'], ['/blog', 'Blog']] },
  ]
}

const CUSTOM = '__custom__'

export function LinkPicker({ value, onChange, properties }) {
  const groups = linkOptions(properties)
  const known = groups.some(g => g.items.some(([v]) => v === value))
  const [custom, setCustom] = useState(!!value && value !== '#' && !known)
  const current = !value || value === '#' ? '' : value
  const label = groups.flatMap(g => g.items).find(([v]) => v === current)?.[1]

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <select
        className="hwa-input no-icon"
        value={custom ? CUSTOM : current}
        onChange={e => {
          if (e.target.value === CUSTOM) { setCustom(true); return }
          setCustom(false); onChange(e.target.value)
        }}
      >
        <option value="">Nothing — not clickable</option>
        {groups.map(g => g.items.length > 0 && (
          <optgroup key={g.group} label={g.group}>
            {g.items.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </optgroup>
        ))}
        <option value={CUSTOM}>Other page or website…</option>
      </select>
      {custom && (
        <input className="hwa-input no-icon" value={current} onChange={e => onChange(e.target.value)} placeholder="/search?q=verano  or  https://example.com" autoFocus />
      )}
      {current && (
        <span className="hwa-hint" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          Opens: <b style={{ color: '#3a3627' }}>{label || current}</b>
          <a href={current} target="_blank" rel="noreferrer" className="hwd-link">Test link <Icon.external /></a>
        </span>
      )}
    </div>
  )
}

export function BannersPage({ banners, run, properties = [] }) {
  const [tab, setTab] = useState('hero')
  const cfg = BANNER_TYPES[tab]
  const ed = useEditor({
    empty: emptyBanner, run,
    create: (b) => API.post(`/banners/${tab}`, b),
    update: (it, b) => API.put(`/banners/${it.type || tab}/${it.id}`, b),
    remove: (it) => API.delete(`/banners/${it.type || tab}/${it.id}`),
    validate: (f) => { need(f.image, 'upload an image'); need(f.title, 'enter a title') },
    labels: { created: 'Banner added', updated: 'Banner updated', deleted: 'Banner deleted' },
  })
  const { f, set } = ed
  const items = banners[tab] || []
  const total = Object.keys(BANNER_TYPES).reduce((n, t) => n + (banners[t]?.length || 0), 0)
  const linkLabel = (link) => {
    if (!link || link === '#') return <span className="muted">Not clickable</span>
    const hit = linkOptions(properties).flatMap(g => g.items).find(([v]) => v === link)
    return <span className="hwl-ellipsis" title={link}><b>{hit ? hit[1] : link}</b>{hit && <><br /><span className="muted">{link}</span></>}</span>
  }

  return (
    <>
      <PageHead title="Banners" count={total} sub={cfg.where}>
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add {cfg.one}</button>
      </PageHead>

      <div className="hwd-seg" style={{ margin: '0 0 14px' }}>
        {Object.entries(BANNER_TYPES).map(([key, t]) => (
          <button key={key} className={tab === key ? 'on' : ''} onClick={() => setTab(key)}>{t.tab} ({banners[key]?.length || 0})</button>
        ))}
      </div>

      <DataList
        id={`banners-${tab}`}
        items={items}
        main={{ aspect: cfg.thumb, thumb: b => b.image, title: b => b.title, sub: b => b.developer || cfg.tab }}
        badges={b => [{ text: (b.link && b.link !== '#') ? 'CLICKABLE' : 'NO LINK', tone: (b.link && b.link !== '#') ? 'green' : 'grey' }]}
        columns={[{ label: 'Opens when clicked', render: b => linkLabel(b.link) }]}
        actions={b => [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          b.link && b.link !== '#' && { label: 'Open', icon: Icon.external, href: b.link },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ]}
        searchText={b => `${b.title} ${b.developer} ${b.link}`}
        sorts={[{ value: 'site', label: 'Website order' }, { value: 'az', label: 'Title A–Z', fn: byText('title') }]}
        empty={tab === 'hero' ? 'No hero banners yet.' : `No ${cfg.tab.toLowerCase()} yet — the homepage shows its built-in images until you add one.`}
        onEmptyAdd={() => ed.openNew()}
        defaultView="table"
      />

      <Drawer open={ed.open} onClose={ed.close} title={`${ed.editing ? 'Edit' : 'Add'} ${cfg.one}`} sub={cfg.where} footer={<DrawerFooter ed={ed} saveLabel={`Add ${cfg.one}`} />}>
        <form id="hwl-form" onSubmit={ed.save}>
          <Field label="Image *">
            <div style={cfg.narrow ? { maxWidth: 170 } : undefined}>
              <ImageUpload key={tab} value={f.image} onChange={set('image')} purpose={cfg.purpose} aspect={cfg.aspect} fit={cfg.fit} maxSide={cfg.narrow ? 1800 : 2200} />
            </div>
          </Field>
          <Field label="Title *" hint="Used as the image description (and for your reference)"><Input value={f.title} onChange={set('title')} placeholder="e.g. Godrej Verano — Sector 63A" /></Field>
          {tab === 'hero' && <Field label="Developer"><Input value={f.developer} onChange={set('developer')} placeholder="e.g. GODREJ PROPERTIES" /></Field>}
          <Field label="Opens when clicked" hint="Pick a property, listing, location or budget — or any other page / website">
            <LinkPicker key={ed.editing?.id || 'new'} value={f.link} onChange={set('link')} properties={properties} />
          </Field>
        </form>
      </Drawer>
    </>
  )
}

// ---------------------------------------------------------------
// Prime Locations
// ---------------------------------------------------------------
const emptyLocation = { name: '', image: '', count: '' }

export function LocationsPage({ locations, run }) {
  const ed = useEditor({
    empty: emptyLocation, run,
    create: (b) => API.post('/locations', b),
    update: (it, b) => API.put(`/locations/${it.id}`, b),
    remove: (it) => API.delete(`/locations/${it.id}`),
    validate: (f) => { need(f.name, 'enter the location name'); need(f.image, 'upload an image') },
    labels: { created: 'Location added', updated: 'Location updated', deleted: 'Location deleted' },
  })
  const { f, set } = ed
  return (
    <>
      <PageHead title="Prime Locations" count={locations.length} sub="The “Gurugram’s Prime Locations” cards on the homepage. Clicking one opens properties in that area.">
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add location</button>
      </PageHead>
      <DataList
        id="locations"
        items={locations}
        main={{ aspect: 'wide', thumb: l => l.image, title: l => l.name, sub: l => l.count }}
        columns={[
          { label: 'Opens', render: l => <a className="muted hwl-ellipsis" href={`/search?location=${encodeURIComponent(l.name)}`} target="_blank" rel="noreferrer">/search?location={l.name}</a>, hideSm: true },
        ]}
        actions={() => [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ]}
        searchText={l => `${l.name} ${l.count}`}
        sorts={[{ value: 'site', label: 'Website order' }, { value: 'az', label: 'Name A–Z', fn: byText('name') }]}
        empty="No locations yet."
        onEmptyAdd={() => ed.openNew()}
        defaultView="grid"
      />
      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? 'Edit location' : 'Add a location'} footer={<DrawerFooter ed={ed} saveLabel="Add location" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          <Field label="Image *"><ImageUpload value={f.image} onChange={set('image')} purpose="location" aspect="4 / 3" /></Field>
          <Field label="Location name *" hint="Use the locality name, e.g. Golf Course Road — the card links to its properties"><Input value={f.name} onChange={set('name')} placeholder="e.g. Golf Course Road" /></Field>
          <Field label="Count text" hint="Shown under the name"><Input value={f.count} onChange={set('count')} placeholder="e.g. 142 Projects" /></Field>
        </form>
      </Drawer>
    </>
  )
}

// ---------------------------------------------------------------
// Festival Offers
// ---------------------------------------------------------------
const emptyOffer = { title: '', price: '', location: '', image: '', badge: '' }

export function OffersPage({ offers, run }) {
  const ed = useEditor({
    empty: emptyOffer, run,
    create: (b) => API.post('/offers', b),
    update: (it, b) => API.put(`/offers/${it.id}`, b),
    remove: (it) => API.delete(`/offers/${it.id}`),
    validate: (f) => { need(f.title, 'enter the project name'); need(f.image, 'upload an image') },
    labels: { created: 'Offer added', updated: 'Offer updated', deleted: 'Offer deleted' },
  })
  const { f, set } = ed
  return (
    <>
      <PageHead title="Festival Offers" count={offers.length} sub="Deals shown in the “Best Festival Offer” section on the homepage.">
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add offer</button>
      </PageHead>
      <DataList
        id="offers"
        items={offers}
        main={{ aspect: 'wide', thumb: o => o.image, title: o => o.title, sub: o => o.location }}
        badges={o => [o.badge && { text: o.badge, tone: 'gold' }]}
        columns={[
          { label: 'Price', render: o => <span className="gold">{o.price}</span> },
          { label: 'Location', render: o => <span className="muted hwl-ellipsis">{o.location}</span>, hideSm: true, hideGrid: true },
        ]}
        actions={() => [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ]}
        searchText={o => `${o.title} ${o.location} ${o.badge} ${o.price}`}
        sorts={[{ value: 'site', label: 'Website order' }, { value: 'az', label: 'Name A–Z', fn: byText('title') }]}
        empty="No offers yet."
        onEmptyAdd={() => ed.openNew()}
        defaultView="grid"
      />
      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? 'Edit offer' : 'Add an offer'} footer={<DrawerFooter ed={ed} saveLabel="Add offer" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          <Field label="Image *"><ImageUpload value={f.image} onChange={set('image')} purpose="offer" aspect="3 / 2" /></Field>
          <div className="hwd-form-grid">
            <Field label="Project *" full><Input value={f.title} onChange={set('title')} placeholder="e.g. BPTP DownTown 66" /></Field>
            <Field label="Price"><Input value={f.price} onChange={set('price')} placeholder="₹5.20 Cr" /></Field>
            <Field label="Badge"><Input value={f.badge} onChange={set('badge')} placeholder="NAVRATRI SPECIAL" /></Field>
            <Field label="Location" full><Input value={f.location} onChange={set('location')} placeholder="Sector 66, Gurugram" /></Field>
          </div>
        </form>
      </Drawer>
    </>
  )
}

// ---------------------------------------------------------------
// Recommended (homepage "Recommended" cards)
// ---------------------------------------------------------------
const emptyRec = { title: '', image: '', price: '', location: '', link: '', badge: 'Founder Choice' }

export function RecommendedPage({ items, run, properties = [] }) {
  const ed = useEditor({
    empty: emptyRec, run,
    create: (b) => API.post('/recommended', b),
    update: (it, b) => API.put(`/recommended/${it.id}`, b),
    remove: (it) => API.delete(`/recommended/${it.id}`),
    validate: (f) => { need(f.title, 'enter the name'); need(f.image, 'upload an image') },
    labels: { created: 'Added to Recommended', updated: 'Recommended card updated', deleted: 'Removed from Recommended' },
  })
  const { f, set, setF } = ed
  const [pickerKey, setPickerKey] = useState(0) // remount the link picker after "fill from property"

  // move a card up/down: renumber everything in the new order
  const move = (item, dir) => {
    const list = [...items]
    const i = list.findIndex(x => x.id === item.id)
    const j = i + dir
    if (j < 0 || j >= list.length) return
    ;[list[i], list[j]] = [list[j], list[i]]
    run(() => Promise.all(list.map((x, k) => x.order === k ? null : API.put(`/recommended/${x.id}`, { order: k }))), 'Order updated')
  }

  // copy name / photo / price / location / link from an existing property
  const fillFrom = (id) => {
    const p = properties.find(x => x.id === id)
    if (!p) return
    setF(prev => ({ ...prev, title: p.title, image: p.image || prev.image, price: p.price || p.priceRange || '', location: p.location || '', link: `/property/${p.id}` }))
    setPickerKey(k => k + 1)
  }

  return (
    <>
      <PageHead title="Recommended" count={items.length} sub="The “HomWisor Recommended” cards on the homepage. The first 4 are shown, in this order — use ↑ ↓ to reorder.">
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add recommended</button>
      </PageHead>

      <DataList
        id="recommended"
        items={items}
        main={{ aspect: 'square', thumb: r => r.image, title: r => r.title, sub: r => r.location }}
        badges={(r) => {
          const pos = items.findIndex(x => x.id === r.id)
          return [
            { text: pos < 4 ? `#${pos + 1} ON HOMEPAGE` : 'HIDDEN (after 4th)', tone: pos < 4 ? 'dark' : 'grey' },
            r.badge && { text: r.badge.toUpperCase(), tone: 'gold' },
          ]
        }}
        columns={[
          { label: 'Price', render: r => <span className="gold">{r.price || '—'}</span> },
          { label: 'Opens', render: r => <span className="muted hwl-ellipsis" title={r.link}>{r.link || 'Not clickable'}</span>, hideSm: true },
        ]}
        actions={r => {
          const pos = items.findIndex(x => x.id === r.id)
          return [
            { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
            pos > 0 && { label: 'Move up', icon: () => <span style={{ fontWeight: 900 }}>↑</span>, onClick: () => move(r, -1) },
            pos < items.length - 1 && { label: 'Move down', icon: () => <span style={{ fontWeight: 900 }}>↓</span>, onClick: () => move(r, 1) },
            { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
          ]
        }}
        searchText={r => `${r.title} ${r.location} ${r.price}`}
        sorts={[{ value: 'site', label: 'Homepage order' }]}
        empty="No recommended cards yet — the homepage section is hidden until you add one."
        onEmptyAdd={() => ed.openNew()}
        defaultView="table"
      />

      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? 'Edit recommended card' : 'Add recommended card'} sub="Shown in the “HomWisor Recommended” section on the homepage." footer={<DrawerFooter ed={ed} saveLabel="Add to Recommended" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          {!ed.editing && properties.length > 0 && (
            <Field label="Fill from a property (optional)" hint="Copies the name, photo, price, location and link — you can still change anything">
              <select className="hwa-input no-icon" defaultValue="" onChange={e => fillFrom(e.target.value)}>
                <option value="">Choose a property…</option>
                {[...properties].sort((a, b) => a.title.localeCompare(b.title)).map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </Field>
          )}
          <Field label="Image *"><div style={{ maxWidth: 300 }}><ImageUpload value={f.image} onChange={set('image')} purpose="recommended" aspect="46 / 45" /></div></Field>
          <div className="hwd-form-grid">
            <Field label="Name *" full><Input value={f.title} onChange={set('title')} placeholder="e.g. M3M Brabus Residences" /></Field>
            <Field label="Price"><Input value={f.price} onChange={set('price')} placeholder="e.g. ₹20.00 Cr" /></Field>
            <Field label="Badge" hint="Pill on the top-left of the card"><Input value={f.badge} onChange={set('badge')} placeholder="Founder Choice" /></Field>
            <Field label="Location" full><Input value={f.location} onChange={set('location')} placeholder="e.g. Sector 58, Golf Course Extension Road, Gurugram" /></Field>
          </div>
          <Field label="Opens when clicked">
            <LinkPicker key={`${ed.editing?.id || 'new'}-${pickerKey}`} value={f.link} onChange={set('link')} properties={properties} />
          </Field>
        </form>
      </Drawer>
    </>
  )
}
