import { useEffect, useState } from 'react'
import API from '../utils/api'
import { Icon } from './ui'
import { ImageUpload } from './ImageUpload'
import { Field, Input, PageHead, LinkPicker } from './ContentPages'
import { BRANDED_FEATURE_DEFAULTS as D } from '../data/brandedFeature'
import { propertyUrl } from '../utils/slug'

// ---------------------------------------------------------------
// Homepage "Where Branded Residences Meet Landmark Architecture" banner
// Empty fields keep the website's built-in text (shown in grey).
// ---------------------------------------------------------------
const EMPTY = {
  eyebrow: '', heading: '', highlight: '', description: '', points: ['', ''],
  primaryLabel: '', primaryLink: '', secondaryLabel: '', secondaryLink: '',
  main: { image: '', label: '', title: '', link: '' },
  side: { image: '', brand: '', sub: '', tagline: '', note: '', location: '', footer: '', link: '' },
}

const fromSaved = (s = {}) => ({
  ...EMPTY, ...s,
  points: [...(s.points || []), '', ''].slice(0, Math.max(2, (s.points || []).length)),
  main: { ...EMPTY.main, ...(s.main || {}) },
  side: { ...EMPTY.side, ...(s.side || {}) },
})

function Group({ title, sub, children }) {
  return (
    <section className="hwa-card" style={{ padding: 20, marginBottom: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
        {sub && <p style={{ margin: '4px 0 0', fontSize: 13, color: '#8f8873' }}>{sub}</p>}
      </div>
      {children}
    </section>
  )
}

export function BrandedFeaturePage({ run, properties = [] }) {
  const [f, setF] = useState(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    API.get('/features/branded').then(r => setF(fromSaved(r.data))).catch(() => {}).finally(() => setLoaded(true))
  }, [])

  const set = (k) => (v) => setF(p => ({ ...p, [k]: v }))
  const setMain = (k) => (v) => setF(p => ({ ...p, main: { ...p.main, [k]: v } }))
  const setSide = (k) => (v) => setF(p => ({ ...p, side: { ...p.side, [k]: v } }))
  const setPoint = (i, v) => setF(p => ({ ...p, points: p.points.map((x, j) => (j === i ? v : x)) }))

  // copy photo / title / link from one of your properties into the main card
  const fillMain = (id) => {
    const pr = properties.find(x => x.id === id)
    if (pr) setF(p => ({ ...p, main: { ...p.main, image: pr.image || p.main.image, title: pr.title, link: propertyUrl(pr) } }))
  }

  const save = async (e) => {
    e.preventDefault()
    if (document.querySelector('.hwu-busy')) return run(() => { throw new Error('Please wait — an image is still uploading') })
    setSaving(true)
    await run(() => API.put('/features/branded', f), 'Branded banner saved')
    setSaving(false)
  }
  const reset = () => {
    if (confirm('Clear every field? The website goes back to the built-in banner until you save new content.')) setF(EMPTY)
  }

  const branded = properties.filter(p => p.category === 'branded')
  const ordered = [...branded, ...properties.filter(p => p.category !== 'branded')]

  if (!loaded) return <PageHead title="Branded Banner" sub="Loading…" />

  return (
    <form onSubmit={save}>
      <PageHead title="Branded Banner" sub="The “Where Branded Residences Meet Landmark Architecture” banner on the homepage. Leave a field empty to keep the text shown in grey.">
        <a className="hwd-btn" href="/#branded" target="_blank" rel="noreferrer"><Icon.external /> View homepage</a>
        <button type="button" className="hwd-btn" onClick={reset}>Clear all</button>
        <button type="submit" className="hwd-btn gold" disabled={saving}>{saving ? 'Saving…' : 'Save banner'}</button>
      </PageHead>

      <div className="hwa hwa-light">
        <Group title="Text" sub="Left side of the banner.">
          <div className="hwd-form-grid">
            <Field label="Small label"><Input value={f.eyebrow} onChange={set('eyebrow')} placeholder={D.eyebrow} /></Field>
            <Field label="Gold words in the headline" hint="Must appear in the headline exactly"><Input value={f.highlight} onChange={set('highlight')} placeholder={D.highlight} /></Field>
            <Field label="Headline" full><Input value={f.heading} onChange={set('heading')} placeholder={D.heading} /></Field>
            <Field label="Description" full>
              <textarea className="hwa-input no-icon" style={{ height: 'auto', minHeight: 80, padding: '10px 12px', lineHeight: 1.6 }} rows={3} value={f.description} onChange={e => set('description')(e.target.value)} placeholder={D.description} />
            </Field>
            {f.points.map((pt, i) => (
              <Field key={i} label={`Point ${i + 1}`}><Input value={pt} onChange={v => setPoint(i, v)} placeholder={D.points[i] || 'e.g. Private Lift Lobbies'} /></Field>
            ))}
            {f.points.length < 4 && <Field label=" "><button type="button" className="hwd-btn" onClick={() => set('points')([...f.points, ''])}>+ Add point</button></Field>}
          </div>
        </Group>

        <Group title="Buttons">
          <div className="hwd-form-grid">
            <Field label="Gold button text"><Input value={f.primaryLabel} onChange={set('primaryLabel')} placeholder={D.primaryLabel} /></Field>
            <Field label="Gold button opens"><LinkPicker value={f.primaryLink} onChange={set('primaryLink')} properties={properties} emptyLabel="Default — Branded search" /></Field>
            <Field label="Second button text"><Input value={f.secondaryLabel} onChange={set('secondaryLabel')} placeholder={D.secondaryLabel} /></Field>
            <Field label="Second button opens"><LinkPicker value={f.secondaryLink} onChange={set('secondaryLink')} properties={properties} emptyLabel="Default — Contact page" /></Field>
          </div>
        </Group>

        <Group title="Main photo card" sub="The big photo with “EXPLORE →”. Empty = your first Branded property is shown automatically.">
          <Field label="Fill from a property" hint="Copies its photo, name and link below">
            <select className="hwa-input no-icon" value="" onChange={e => fillMain(e.target.value)}>
              <option value="">Choose a property…</option>
              {ordered.map(p => <option key={p.id} value={p.id}>{p.category === 'branded' ? '💎 ' : ''}{p.title}</option>)}
            </select>
          </Field>
          <div className="hwd-form-grid">
            <Field label="Photo" full><div style={{ maxWidth: 420 }}><ImageUpload value={f.main.image} onChange={setMain('image')} purpose="property" aspect="3 / 2" /></div></Field>
            <Field label="Small label"><Input value={f.main.label} onChange={setMain('label')} placeholder={D.main.label} /></Field>
            <Field label="Title"><Input value={f.main.title} onChange={setMain('title')} placeholder={branded[0]?.title || D.main.title} /></Field>
            <Field label="“EXPLORE” opens" full><LinkPicker value={f.main.link} onChange={setMain('link')} properties={properties} emptyLabel="Default — your first Branded property" /></Field>
          </div>
        </Group>

        <Group title="Tall side card" sub="The narrow poster on the right. With your own image and no text lines, only the image is shown (useful when the poster already has text).">
          <div className="hwd-form-grid">
            <Field label="Image" hint="Tall poster, 9:20"><div style={{ maxWidth: 180 }}><ImageUpload value={f.side.image} onChange={setSide('image')} purpose="sidead" aspect="9 / 20" /></div></Field>
            <Field label="Opens when clicked"><LinkPicker value={f.side.link} onChange={setSide('link')} properties={properties} emptyLabel="Default — search for Brabus" /></Field>
            <Field label="Big name"><Input value={f.side.brand} onChange={setSide('brand')} placeholder={f.side.image ? 'optional' : D.side.brand} /></Field>
            <Field label="Under the name"><Input value={f.side.sub} onChange={setSide('sub')} placeholder={f.side.image ? 'optional' : D.side.sub} /></Field>
            <Field label="Tagline"><Input value={f.side.tagline} onChange={setSide('tagline')} placeholder={f.side.image ? 'optional' : D.side.tagline} /></Field>
            <Field label="Small label"><Input value={f.side.note} onChange={setSide('note')} placeholder={f.side.image ? 'optional' : D.side.note} /></Field>
            <Field label="Location"><Input value={f.side.location} onChange={setSide('location')} placeholder={f.side.image ? 'optional' : D.side.location} /></Field>
            <Field label="Bottom strip"><Input value={f.side.footer} onChange={setSide('footer')} placeholder={f.side.image ? 'optional' : D.side.footer} /></Field>
          </div>
        </Group>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <button type="submit" className="hwd-btn gold" disabled={saving}>{saving ? 'Saving…' : 'Save banner'}</button>
        </div>
      </div>
    </form>
  )
}
