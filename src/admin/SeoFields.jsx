import './seo-fields.css'

// Meta title + description with character counters and a Google preview.
// Used by the blog and property forms. Pass `note` to show a heading + explanation.

// Google cuts titles at ~60 characters and descriptions at ~160
const clip = (t, max) => (t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t)
const Count = ({ n, max }) => (
  <span className="hwa-hint" style={{ color: n > max ? '#b91c1c' : n > max * 0.85 ? '#9A7418' : undefined }}>
    {n}/{max} characters{n > max ? ' — Google will cut it short' : ''}
  </span>
)

export default function SeoFields({ title, description, onTitle, onDescription, defaultTitle = '', defaultDescription = '', path = '', note }) {
  const shownTitle = title || defaultTitle
  const shownDesc = description || defaultDescription
  return (
    <div className="hwseo">
      {/* own heading only when not already inside a titled step (the property form has one) */}
      {note && (
        <div className="hwseo-head">
          <strong>Search engine (SEO)</strong>
          <span>{note}</span>
        </div>
      )}
      <div className="hwa-field">
        <label>Meta title</label>
        <input className="hwa-input no-icon" value={title || ''} onChange={e => onTitle(e.target.value)} placeholder={defaultTitle || 'e.g. M3M Elie Saab Dwarka Expressway – Price & Floor Plans'} maxLength={200} />
        <Count n={shownTitle.length} max={60} />
      </div>
      <div className="hwa-field">
        <label>Meta description</label>
        <textarea className="hwa-input no-icon hwseo-text" rows={3} maxLength={400} value={description || ''} onChange={e => onDescription(e.target.value)} placeholder={defaultDescription || 'One or two sentences that make people want to click.'} />
        <Count n={shownDesc.length} max={160} />
      </div>
      <div className="hwseo-serp" aria-label="Google preview">
        <small>Google preview</small>
        <span className="hwseo-url">homwisor.com{path ? ` › ${path.replace(/^\//, '').split('/').join(' › ')}` : ''}</span>
        <span className="hwseo-title">{clip(shownTitle || 'Meta title', 60)}</span>
        <span className="hwseo-desc">{clip(shownDesc || 'Meta description', 160)}</span>
      </div>
    </div>
  )
}
