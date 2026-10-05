import API from '../utils/api'
import { Icon } from './ui'
import { ImageUpload } from './ImageUpload'
import DataList, { Drawer } from './DataList'
import { Field, Input, PageHead, useEditor, DrawerFooter, need } from './ContentPages'
import './testimonials-admin.css'

// ---------------------------------------------------------------
// Customer testimonials (homepage + About page)
// ---------------------------------------------------------------
const PLATFORMS = ['Google', 'Facebook', 'Justdial', 'Website', 'Other']
const SHOWN = 4 // the website shows the first 4 visible reviews

// avatar colour pairs [background, text]
const SWATCHES = [
  ['#F3E7C2', '#5b4a16'], ['#F59E0B', '#ffffff'], ['#10B981', '#ffffff'], ['#E9D5FF', '#6B21A8'],
  ['#DBEAFE', '#1E40AF'], ['#FECACA', '#991B1B'], ['#D6D3D1', '#44403C'], ['#0b0b0b', '#E8C766'],
]

const emptyTestimonial = {
  name: '', role: '', text: '', photo: '', rating: 5, platform: 'Google',
  verified: true, active: true, color: SWATCHES[0][0], textColor: SWATCHES[0][1],
}

const initialsOf = (name = '') => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()
const MAX_TEXT = 600

function Avatar({ t, size = 44 }) {
  return (
    <span className="hwt-avatar" style={{ width: size, height: size, background: t.color, color: t.textColor, fontSize: size * 0.36 }}>
      {t.photo ? <img src={t.photo} alt="" /> : initialsOf(t.name) || '?'}
    </span>
  )
}

function Stars({ value, onChange }) {
  return (
    <div className="hwt-stars" role={onChange ? 'radiogroup' : undefined}>
      {[1, 2, 3, 4, 5].map(n => onChange
        ? <button key={n} type="button" className={n <= value ? 'on' : ''} onClick={() => onChange(n)} aria-label={`${n} star${n > 1 ? 's' : ''}`}>★</button>
        : <span key={n} className={n <= value ? 'on' : ''}>★</span>)}
    </div>
  )
}

export function TestimonialsPage({ items, run }) {
  const ed = useEditor({
    empty: emptyTestimonial, run,
    create: (b) => API.post('/testimonials', b),
    update: (it, b) => API.put(`/testimonials/${it.id}`, b),
    remove: (it) => API.delete(`/testimonials/${it.id}`),
    validate: (f) => {
      need(f.name.trim(), "enter the customer's name")
      need(f.text.trim(), 'write the review')
      if (f.text.length > MAX_TEXT) throw new Error(`Please keep the review under ${MAX_TEXT} characters`)
    },
    labels: { created: 'Testimonial added', updated: 'Testimonial updated', deleted: 'Testimonial deleted' },
  })
  const { f, set, setF } = ed

  const visible = items.filter(t => t.active !== false)
  const onSite = new Set(visible.slice(0, SHOWN).map(t => t.id))

  // move up/down: renumber everything in the new order
  const move = (item, dir) => {
    const list = [...items]
    const i = list.findIndex(x => x.id === item.id)
    const j = i + dir
    if (j < 0 || j >= list.length) return
    ;[list[i], list[j]] = [list[j], list[i]]
    run(() => Promise.all(list.map((x, k) => x.order === k ? null : API.put(`/testimonials/${x.id}`, { order: k }))), 'Order updated')
  }
  const toggle = (t) => run(() => API.put(`/testimonials/${t.id}`, { active: t.active === false }), t.active === false ? 'Shown on the website' : 'Hidden from the website')

  return (
    <>
      <PageHead title="Testimonials" count={items.length} sub={`Customer reviews on the homepage and About page. The first ${SHOWN} visible ones are shown, in this order — use ↑ ↓ to reorder.`}>
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add testimonial</button>
      </PageHead>

      <DataList
        id="testimonials"
        items={items}
        main={{
          aspect: 'square',
          thumb: t => t.photo,
          overlay: t => !t.photo && <span className="hwt-thumb-initials" style={{ background: t.color, color: t.textColor }}>{t.initials || initialsOf(t.name)}</span>,
          title: t => t.name,
          sub: t => t.role || `${t.platform || 'Google'} review`,
        }}
        badges={t => [
          t.active === false ? { text: 'Hidden', tone: 'grey' } : onSite.has(t.id) ? { text: 'On website', tone: 'green' } : { text: 'Not in top 4', tone: 'dark' },
          t.verified !== false && { text: 'Verified', tone: 'gold' },
        ]}
        columns={[
          { label: 'Rating', render: t => <Stars value={t.rating || 5} /> },
          { label: 'Review', render: t => <span className="muted hwt-clip">“{t.text}”</span>, hideSm: true },
        ]}
        actions={t => {
          const pos = items.findIndex(x => x.id === t.id)
          return [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          pos > 0 && { label: 'Move up', icon: () => <span style={{ fontWeight: 900 }}>↑</span>, onClick: () => move(t, -1) },
          pos < items.length - 1 && { label: 'Move down', icon: () => <span style={{ fontWeight: 900 }}>↓</span>, onClick: () => move(t, 1) },
          { label: t.active === false ? 'Show' : 'Hide', icon: Icon.eye, onClick: toggle },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
          ].filter(Boolean)
        }}
        searchText={t => `${t.name} ${t.role} ${t.text} ${t.platform}`}
        sorts={[{ value: 'site', label: 'Website order' }, { value: 'az', label: 'Name A–Z', fn: (a, b) => a.name.localeCompare(b.name) }]}
        empty="No testimonials yet — the website will hide this section until you add one."
        onEmptyAdd={() => ed.openNew()}
        emptyAddLabel="Add the first testimonial"
      />

      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? 'Edit testimonial' : 'Add a testimonial'} footer={<DrawerFooter ed={ed} saveLabel="Add testimonial" />}>
        <form id="hwl-form" onSubmit={ed.save}>
          {/* live preview */}
          <div className="hwt-preview">
            <div className="hwt-preview-top">
              <span className="hwt-quote" style={{ background: f.color, color: f.textColor }}>“</span>
              {f.platform !== 'Other' && <span className="hwt-platform">{f.platform}</span>}
            </div>
            <Stars value={f.rating} />
            <p>“{f.text || 'The review will appear here…'}”</p>
            <div className="hwt-preview-user">
              <Avatar t={f} />
              <div>
                <strong>{f.name || 'Customer name'}</strong>
                <small>{f.role || (f.verified ? 'VERIFIED BUYER' : '')}</small>
              </div>
            </div>
          </div>

          <div className="hwd-form-grid">
            <Field label="Customer name *"><Input value={f.name} onChange={set('name')} placeholder="e.g. Neha Gupta" /></Field>
            <Field label="Line under the name" hint="Optional — e.g. Bought a 3 BHK at DLF Privana"><Input value={f.role} onChange={set('role')} placeholder="Verified buyer" /></Field>
            <Field label="Review *" full hint={`${f.text.length}/${MAX_TEXT} characters — about 150–250 reads best`}>
              <textarea className="hwa-input no-icon hwt-textarea" rows={5} value={f.text} onChange={e => set('text')(e.target.value)} placeholder="What did the customer say about HomWisor?" />
            </Field>
            <Field label="Rating"><Stars value={f.rating} onChange={set('rating')} /></Field>
            <Field label="Review from">
              <select className="hwa-input no-icon" value={f.platform} onChange={e => set('platform')(e.target.value)}>
                {PLATFORMS.map(p => <option key={p}>{p}</option>)}
              </select>
            </Field>
            <Field label="Avatar colour" full hint="Used when there's no photo, and for the quote mark">
              <div className="hwt-swatches">
                {SWATCHES.map(([bg, fg]) => (
                  <button key={bg} type="button" className={f.color === bg ? 'on' : ''} style={{ background: bg, color: fg }} onClick={() => setF(p => ({ ...p, color: bg, textColor: fg }))} aria-label={`Colour ${bg}`}>
                    {initialsOf(f.name) || 'Aa'}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Customer photo" full hint="Optional — a square photo replaces the initials">
              <div style={{ maxWidth: 200 }}><ImageUpload value={f.photo} onChange={set('photo')} purpose="avatar" aspect="1 / 1" /></div>
            </Field>
            <Field label="Options" full>
              <label className="hwt-check"><input type="checkbox" checked={!!f.verified} onChange={e => set('verified')(e.target.checked)} /> Show “Verified buyer” (when there's no line under the name)</label>
              <label className="hwt-check"><input type="checkbox" checked={f.active !== false} onChange={e => set('active')(e.target.checked)} /> Show on the website</label>
            </Field>
          </div>
        </form>
      </Drawer>
    </>
  )
}
