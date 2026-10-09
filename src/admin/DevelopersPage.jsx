import { useState } from 'react'
import API from '../utils/api'
import { Icon } from './ui'
import { ImageUpload } from './ImageUpload'
import DataList, { Drawer } from './DataList'
import { Field, Input, PageHead, useEditor, DrawerFooter, need } from './ContentPages'
import { logoOf, initials, developerUrl, propertiesOf } from '../data/developers'
import { slugify, slugTyping } from '../utils/slug'
import './property-admin.css' // .hwp-slug

// ---------------------------------------------------------------
// Developers — homepage "Top Property Developers" + /developer/<slug> pages
// ---------------------------------------------------------------
const emptyDev = {
  name: '', slug: '', logo: '', subtext: '', description: '', aliases: '',
  count: '', established: '', website: '', active: true,
}

const textarea = { height: 'auto', minHeight: 90, padding: '10px 12px', lineHeight: 1.6, fontFamily: 'inherit' }

// Section heading + numbers band (stored as feature "developers")
function SectionSettings({ open, onClose, run, auto }) {
  const [f, setF] = useState(null)
  const [saving, setSaving] = useState(false)
  if (open && !f) {
    API.get('/features/developers').then(r => {
      const d = r.data || {}
      setF({ eyebrow: d.eyebrow || '', heading: d.heading || '', highlight: d.highlight || '', description: d.description || '', stats: [...(d.stats || []), ...Array(4).fill({ value: '', label: '' })].slice(0, 4) })
    }).catch(() => setF({ eyebrow: '', heading: '', highlight: '', description: '', stats: Array(4).fill({ value: '', label: '' }) }))
  }
  const set = (k) => (v) => setF(p => ({ ...p, [k]: v }))
  const setStat = (i, k, v) => setF(p => ({ ...p, stats: p.stats.map((s, j) => (j === i ? { ...s, [k]: v } : s)) }))
  const close = () => { onClose(); setF(null) }
  const save = async (e) => {
    e.preventDefault(); setSaving(true)
    let ok = false
    await run(async () => { await API.put('/features/developers', f); ok = true }, 'Developers section saved')
    setSaving(false); if (ok) close()
  }
  return (
    <Drawer open={open} onClose={close} title="Section text & numbers" sub="Heading of the homepage section and the white numbers band under it."
      footer={<><button type="button" className="hwd-btn" onClick={close}>Cancel</button><button type="submit" form="hwdev-section" className="hwd-btn gold" disabled={saving || !f}>{saving ? 'Saving…' : 'Save'}</button></>}>
      {!f ? <p>Loading…</p> : (
        <form id="hwdev-section" onSubmit={save}>
          <div className="hwd-form-grid">
            <Field label="Small label"><Input value={f.eyebrow} onChange={set('eyebrow')} placeholder="TRUSTED NAMES" /></Field>
            <Field label="Gold words" hint="Part of the heading shown in gold"><Input value={f.highlight} onChange={set('highlight')} placeholder="Developers" /></Field>
            <Field label="Heading" full><Input value={f.heading} onChange={set('heading')} placeholder="Top Property Developers" /></Field>
            <Field label="Description" full><Input value={f.description} onChange={set('description')} placeholder="Partnering with India's most trusted builders to bring you the best properties." /></Field>
          </div>
          <Field label="Numbers band" hint="Leave all empty to work them out automatically (shown in grey)">
            <div style={{ display: 'grid', gap: 8 }}>
              {f.stats.map((s, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 8 }}>
                  <Input value={s.value} onChange={v => setStat(i, 'value', v)} placeholder={auto[i]?.[0] ?? 'e.g. 50+'} maxLength={20} />
                  <Input value={s.label} onChange={v => setStat(i, 'label', v)} placeholder={auto[i]?.[1] ?? 'e.g. Happy Families'} maxLength={40} />
                </div>
              ))}
            </div>
          </Field>
        </form>
      )}
    </Drawer>
  )
}

export function DevelopersPage({ items, run, properties = [] }) {
  const ed = useEditor({
    empty: emptyDev, run,
    create: (b) => API.post('/builders', toPayload(b)),
    update: (it, b) => API.put(`/builders/${it.id}`, toPayload(b)),
    remove: (it) => API.delete(`/builders/${it.id}`),
    validate: (f) => need(f.name.trim(), "enter the developer's name"),
    labels: { created: 'Developer added', updated: 'Developer updated', deleted: 'Developer deleted' },
  })
  const { f, set, setF } = ed
  const [slugTouched, setSlugTouched] = useState(false)
  const [sectionOpen, setSectionOpen] = useState(false)

  const openNew = () => { ed.openNew(); setSlugTouched(false) }
  // old placeholder logo links no longer load — show an empty upload box instead
  const openEdit = (d) => { ed.openEdit({ ...d, logo: /via\.placeholder\.com|dummyimage\.com/.test(d.logo || '') ? '' : d.logo || '', aliases: (d.aliases || []).join(', '), count: d.count ?? '' }); setSlugTouched(true) }
  const setName = (v) => setF(p => ({ ...p, name: v, slug: slugTouched ? p.slug : slugify(v) }))

  const move = (item, dir) => {
    const list = [...items]
    const i = list.findIndex(x => x.id === item.id), j = i + dir
    if (j < 0 || j >= list.length) return
    ;[list[i], list[j]] = [list[j], list[i]]
    run(() => Promise.all(list.map((x, k) => (x.order === k ? null : API.put(`/builders/${x.id}`, { order: k })))), 'Order updated')
  }
  const toggle = (d) => run(() => API.put(`/builders/${d.id}`, { active: d.active === false }), d.active === false ? 'Shown on the website' : 'Hidden from the website')

  // properties currently matched to the developer being edited
  const preview = propertiesOf({ name: f.name, aliases: String(f.aliases || '').split(',').map(s => s.trim()) }, properties)
  // property "Developer" names that no developer covers yet — handy as aliases
  const unmatched = [...new Set(properties.map(p => p.developer).filter(Boolean))].filter(name => !items.some(d => propertiesOf(d, [{ developer: name }]).length))

  const visible = items.filter(d => d.active !== false)
  const listedTotal = new Set(visible.flatMap(d => propertiesOf(d, properties).map(p => p.id))).size
  const autoStats = [[`${visible.length}+`, 'Developers'], [`${visible.reduce((s, d) => s + (d.count || 0), 0)}+`, 'Projects'], [String(listedTotal), 'Live Listings'], ['', 'Cities']]

  return (
    <>
      <PageHead title="Developers" count={items.length} sub="The “Top Property Developers” section on the homepage. Each developer has its own page listing its properties — a property belongs to a developer when its “Developer / Builder” field matches the name or one of the other names.">
        <button className="hwd-btn" onClick={() => setSectionOpen(true)}><Icon.edit /> Section text & numbers</button>
        <button className="hwd-btn gold" onClick={openNew}><Icon.plus /> Add developer</button>
      </PageHead>

      {unmatched.length > 0 && (
        <div className="hwa-alert" style={{ marginBottom: 14 }}>
          Properties whose developer isn't linked to any developer here: <b>{unmatched.join(', ')}</b>. Add that developer, or put the name under “Other names” of an existing one.
        </div>
      )}

      <DataList
        id="developers"
        items={items}
        main={{
          aspect: 'banner',
          thumb: d => logoOf(d),
          overlay: d => !logoOf(d) && <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: '#0b0b0b', color: '#E8C766', fontWeight: 800 }}>{initials(d.name)}</span>,
          title: d => d.name,
          sub: d => d.subtext || `/developer/${d.slug || ''}`,
        }}
        badges={d => [d.active === false ? { text: 'Hidden', tone: 'grey' } : { text: 'On website', tone: 'green' }]}
        columns={[
          { label: 'Projects', render: d => <span>{d.count || '—'}</span> },
          { label: 'On HomWisor', render: d => <span className="gold">{propertiesOf(d, properties).length} listed</span> },
        ]}
        actions={d => {
          const pos = items.findIndex(x => x.id === d.id)
          return [
            { label: 'Edit', icon: Icon.edit, onClick: openEdit, primary: true },
            d.active !== false && { label: 'View', icon: Icon.external, href: developerUrl(d) },
            pos > 0 && { label: 'Move up', icon: () => <span style={{ fontWeight: 900 }}>↑</span>, onClick: () => move(d, -1) },
            pos < items.length - 1 && { label: 'Move down', icon: () => <span style={{ fontWeight: 900 }}>↓</span>, onClick: () => move(d, 1) },
            { label: d.active === false ? 'Show' : 'Hide', icon: Icon.eye, onClick: toggle },
            { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
          ].filter(Boolean)
        }}
        searchText={d => `${d.name} ${(d.aliases || []).join(' ')} ${d.subtext}`}
        sorts={[{ value: 'site', label: 'Website order' }, { value: 'az', label: 'Name A–Z', fn: (a, b) => a.name.localeCompare(b.name) }]}
        empty="No developers yet."
        onEmptyAdd={openNew}
      />

      <Drawer wide open={ed.open} onClose={ed.close} title={ed.editing ? `Edit: ${ed.editing.name}` : 'Add a developer'} footer={<DrawerFooter ed={ed} saveLabel="Add developer" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          <div className="hwd-form-grid">
            <Field label="Developer name *" full><Input value={f.name} onChange={setName} placeholder="e.g. DLF Homes" /></Field>
            <Field label="Web address (slug)" full>
              <div className="hwp-slug">
                <span>homwisor.com/developer/</span>
                <Input value={f.slug} onChange={v => { setSlugTouched(true); set('slug')(slugTyping(v)) }} onBlur={() => set('slug')(slugify(f.slug || f.name))} placeholder={slugify(f.name) || 'dlf-homes'} />
              </div>
            </Field>
          </div>
          <Field label="Logo" hint="Shown on a white tile — a logo with a transparent or white background works best">
            <div style={{ maxWidth: 320 }}><ImageUpload value={f.logo} onChange={set('logo')} purpose="logo" aspect="5 / 2" kind="logo" fit="contain" /></div>
          </Field>
          <div className="hwd-form-grid">
            <Field label="Tagline"><Input value={f.subtext} onChange={set('subtext')} placeholder="e.g. Building India since 1946" /></Field>
            <Field label="Total projects" hint="Shown on the tile, e.g. 17 Projects. Empty = the number listed on HomWisor"><Input type="number" min="0" value={f.count} onChange={set('count')} placeholder={String(preview.length)} /></Field>
            <Field label="Established"><Input value={f.established} onChange={set('established')} placeholder="e.g. 1946" /></Field>
            <Field label="Official website"><Input value={f.website} onChange={set('website')} placeholder="https://…" /></Field>
            <Field label="About the developer" full hint="Shown on the developer page">
              <textarea className="hwa-input no-icon" style={textarea} rows={4} value={f.description} onChange={e => set('description')(e.target.value)} placeholder="A few lines about the developer, its history and landmark projects." />
            </Field>
            <Field label="Other names" full hint="Comma separated — other ways this developer is written in a property's “Developer / Builder” field, e.g. DLF, DLF Ltd">
              <Input value={f.aliases} onChange={set('aliases')} placeholder="e.g. DLF, DLF Limited" />
            </Field>
            <Field label="Show on website" full>
              <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, textTransform: 'none', letterSpacing: 0, fontWeight: 500 }}>
                <input type="checkbox" checked={f.active !== false} onChange={e => set('active')(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#D4AF37' }} /> Show in the homepage section and its own page
              </label>
            </Field>
          </div>
          <div className="hwa-card" style={{ padding: 14, marginTop: 6 }}>
            <strong style={{ fontSize: 13 }}>Properties linked to this developer ({preview.length})</strong>
            <p style={{ margin: '6px 0 0', fontSize: 13, color: '#6b6450', lineHeight: 1.6 }}>
              {preview.length ? preview.map(p => p.title).join(' · ') : 'None yet — properties appear here when their “Developer / Builder” field matches the name or other names above.'}
            </p>
          </div>
        </form>
      </Drawer>

      <SectionSettings open={sectionOpen} onClose={() => setSectionOpen(false)} run={run} auto={autoStats} />
    </>
  )
}

function toPayload(f) {
  return {
    ...f,
    name: f.name.trim(),
    slug: slugify(f.slug || f.name),
    aliases: String(f.aliases || '').split(',').map(s => s.trim()).filter(Boolean),
    count: f.count === '' || f.count == null ? 0 : Number(f.count),
  }
}
