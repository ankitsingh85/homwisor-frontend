import { useEffect, useState } from 'react'
import API from '../utils/api'
import { Spinner } from './ui'
import { Field, Input, PageHead } from './ContentPages'
import { HOME_HEADINGS, mergeHeadings, HeadingText } from '../data/homeHeadings'
import './headings-admin.css'

// ---------------------------------------------------------------
// Homepage section headings (stored as feature "headings").
// Every field is optional — empty = the built-in text shown in grey.
// ---------------------------------------------------------------
const FIELDS = ['eyebrow', 'heading', 'highlight', 'description']
const blank = () => Object.fromEntries(HOME_HEADINGS.map(d => [d.key, { eyebrow: '', heading: '', highlight: '', description: '' }]))

export function HeadingsPage({ run, go }) {
  const [f, setF] = useState(null)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    API.get('/features/headings').then(r => {
      const next = blank()
      ;(r.data?.sections || []).forEach(s => { if (next[s.key]) FIELDS.forEach(k => { next[s.key][k] = s[k] || '' }) })
      setF(next)
    }).catch(() => setF(blank()))
  }, [])

  const set = (key, field) => (v) => { setF(p => ({ ...p, [key]: { ...p[key], [field]: v } })); setDirty(true) }
  const reset = (key) => { setF(p => ({ ...p, [key]: { eyebrow: '', heading: '', highlight: '', description: '' } })); setDirty(true) }
  const save = async (e) => {
    e?.preventDefault()
    setSaving(true)
    const sections = Object.entries(f)
      .map(([key, v]) => ({ key, ...v }))
      .filter(s => FIELDS.some(k => s[k].trim()))
    await run(async () => { await API.put('/features/headings', { sections }); setDirty(false) }, 'Homepage headings saved')
    setSaving(false)
  }

  if (!f) return <div className="hwd-card" style={{ display: 'grid', placeItems: 'center', gap: 12, padding: 60, color: '#6b7280' }}><Spinner /> Loading headings…</div>

  const shown = mergeHeadings(Object.entries(f).map(([key, v]) => ({ key, ...v })))
  return (
    <form onSubmit={save} className="hwa hwa-light">
      <PageHead title="Homepage Headings" sub="The heading, small label and description of each homepage section, in the order they appear. Leave a field empty to keep the text shown in grey.">
        <button type="submit" className="hwd-btn gold" disabled={saving || !dirty}>{saving ? 'Saving…' : dirty ? 'Save changes' : 'Saved'}</button>
      </PageHead>

      <p className="hwhd-note">
        The <button type="button" onClick={() => go('developers')}>Developers</button> section heading is edited in Admin → Developers → “Section text &amp; numbers”, and the
        “Where Branded Residences Meet…” banner in <button type="button" onClick={() => go('branded')}>Branded Banner</button>.
      </p>

      <div className="hwhd-list">
        {HOME_HEADINGS.map((d, i) => {
          const v = f[d.key]
          const edited = FIELDS.some(k => v[k].trim())
          const h = shown[d.key]
          return (
            <section key={d.key} className="hwd-card hwhd-card">
              <div className="hwhd-head">
                <span className="hwhd-no">{i + 1}</span>
                <div className="hwhd-preview">
                  <small>{d.label}{edited && <em>Edited</em>}</small>
                  {!d.noEyebrow && h.eyebrow && <span className="hwhd-eyebrow">{h.eyebrow}</span>}
                  <strong><HeadingText h={h} /></strong>
                  <p>{h.description}</p>
                </div>
                {edited && <button type="button" className="hwd-btn hwhd-reset" onClick={() => reset(d.key)}>Use built-in text</button>}
              </div>
              <div className="hwd-form-grid">
                <Field label="Heading" full><Input value={v.heading} onChange={set(d.key, 'heading')} placeholder={d.heading} maxLength={160} /></Field>
                <Field label="Gold words" hint="Shown in gold. If these words aren't in the heading, they're added at the end.">
                  <Input value={v.highlight} onChange={set(d.key, 'highlight')} placeholder={v.heading.trim() ? 'e.g. Gurugram' : d.highlight || 'none'} maxLength={80} />
                </Field>
                {!d.noEyebrow
                  ? <Field label="Small label above"><Input value={v.eyebrow} onChange={set(d.key, 'eyebrow')} placeholder={d.eyebrow} maxLength={60} /></Field>
                  : <div />}
                <Field label="Description" full>
                  <textarea className="hwa-input no-icon hwhd-text" rows={2} maxLength={400} value={v.description} onChange={e => set(d.key, 'description')(e.target.value)} placeholder={d.description} />
                </Field>
              </div>
            </section>
          )
        })}
      </div>

      {dirty && (
        <div className="hwhd-savebar">
          <span>You have unsaved changes</span>
          <button type="submit" className="hwd-btn gold" disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</button>
        </div>
      )}
    </form>
  )
}
