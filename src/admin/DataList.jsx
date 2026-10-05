import { useEffect, useMemo, useState } from 'react'
import { Icon } from './ui'
import './list.css'

const readView = (key, fallback) => { try { return localStorage.getItem(`hwl-view-${key}`) || fallback } catch { return fallback } }
const saveView = (key, v) => { try { localStorage.setItem(`hwl-view-${key}`, v) } catch { /* private mode */ } }

/**
 * One listing UI for every admin section.
 *
 * columns: [{ label, render: item => node, className?, hideSm? }]   (table view, after the main cell)
 * main:    { thumb: item => url, title: item => text, sub: item => node, aspect?: 'wide'|'tall'|'square' }
 * badges:  item => [{ text, tone: 'gold'|'dark'|'green'|'grey'|'red' }]
 * actions: item => [{ label, icon, onClick?, href?, danger? }]
 * searchText: item => string    sorts: [{ value, label, fn: (a,b) => number }]
 */
export default function DataList({
  id, items, main, columns = [], badges, actions, searchText, sorts = [],
  empty = 'Nothing here yet.', onEmptyAdd, emptyAddLabel = 'Add the first one',
  defaultView = 'table', toolbarExtra, loading,
}) {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState(sorts[0]?.value || '')
  const [view, setView] = useState(() => readView(id, defaultView))
  useEffect(() => saveView(id, view), [id, view])

  const shown = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean)
    let out = !words.length ? items : items.filter(it => {
      const hay = String(searchText ? searchText(it) : main.title(it)).toLowerCase()
      return words.every(w => hay.includes(w))
    })
    const s = sorts.find(x => x.value === sort)
    if (s?.fn) out = [...out].sort(s.fn)
    return out
  }, [items, q, sort, sorts, searchText, main])

  // Same Actions column width on every row so the other columns line up
  const actionsWidth = useMemo(() => {
    const widthOf = (list) => list.filter(Boolean).reduce((w, a, i) =>
      w + (i ? 6 : 0) + (a.danger ? 32 : Math.ceil(String(a.label).length * 7.4) + 42), 0)
    return Math.max(80, ...shown.map(it => widthOf(actions?.(it) || [])))
  }, [shown, actions])

  const Thumb = ({ it, big }) => {
    const src = main.thumb?.(it)
    return (
      <span className={`hwl-thumb ${main.aspect || 'wide'}${big ? ' big' : ''}`}>
        {src ? <img src={src} alt="" loading="lazy" onError={e => (e.currentTarget.style.visibility = 'hidden')} /> : <Icon.image />}
        {main.overlay?.(it)}
      </span>
    )
  }
  const Badges = ({ it }) => {
    const list = badges?.(it)?.filter(Boolean) || []
    return list.length ? <span className="hwl-badges">{list.map((b, i) => <span key={i} className={`hwl-badge ${b.tone || 'grey'}`}>{b.text}</span>)}</span> : null
  }
  const Actions = ({ it }) => (
    <span className="hwl-actions">
      {(actions?.(it) || []).filter(Boolean).map(a => {
        const I = a.icon
        const cls = `hwl-act${a.danger ? ' danger' : ''}${a.primary ? ' primary' : ''}`
        return a.href
          ? <a key={a.label} className={cls} href={a.href} target="_blank" rel="noreferrer" title={a.label}>{I && <I />}<span>{a.label}</span></a>
          : <button key={a.label} type="button" className={cls} onClick={() => a.onClick(it)} title={a.label}>{I && <I />}<span>{a.label}</span></button>
      })}
    </span>
  )

  return (
    <div className="hwl">
      <div className="hwl-toolbar">
        <div className="hwl-search">
          <Icon.search />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" />
          {q && <button type="button" onClick={() => setQ('')} aria-label="Clear search">✕</button>}
        </div>
        {toolbarExtra}
        {sorts.length > 1 && (
          <select className="hwl-sort" value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort">
            {sorts.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        )}
        <span className="hwl-count">{shown.length} of {items.length}</span>
        <div className="hwl-views" role="group" aria-label="View">
          <button type="button" className={view === 'table' ? 'on' : ''} onClick={() => setView('table')} title="Table view"><Icon.menu /></button>
          <button type="button" className={view === 'grid' ? 'on' : ''} onClick={() => setView('grid')} title="Grid view"><Icon.grid /></button>
        </div>
      </div>

      {loading ? (
        <div className="hwl-empty"><span className="hwa-spinner" style={{ borderTopColor: '#9A7418' }} /> Loading…</div>
      ) : shown.length === 0 ? (
        <div className="hwl-empty">
          <Icon.grid />
          <p>{items.length ? 'Nothing matches your search.' : empty}</p>
          {!items.length && onEmptyAdd && <button type="button" className="hwd-btn gold" onClick={onEmptyAdd}><Icon.plus /> {emptyAddLabel}</button>}
        </div>
      ) : view === 'table' ? (
        <div className="hwl-table" role="table" style={{ '--hwl-cols': columns.length, '--hwl-cols-sm': columns.filter(c => !c.hideSm).length, '--hwl-actw': `${actionsWidth}px` }}>
          <div className="hwl-row head" role="row">
            <span className="hwl-cell main" role="columnheader">Name</span>
            {columns.map(c => <span key={c.label} className={`hwl-cell ${c.className || ''}${c.hideSm ? ' hide-sm' : ''}`} role="columnheader">{c.label}</span>)}
            <span className="hwl-cell act" role="columnheader">Actions</span>
          </div>
          {shown.map(it => (
            <div key={it.id || it._id} className="hwl-row" role="row">
              <span className="hwl-cell main" role="cell">
                <Thumb it={it} />
                <span className="hwl-main-text">
                  <strong title={main.title(it)}>{main.title(it)}</strong>
                  {main.sub && <span className="hwl-sub">{main.sub(it)}</span>}
                  <Badges it={it} />
                </span>
              </span>
              {columns.map(c => (
                <span key={c.label} className={`hwl-cell ${c.className || ''}${c.hideSm ? ' hide-sm' : ''}`} role="cell" data-label={c.label}>
                  {c.render(it)}
                </span>
              ))}
              <span className="hwl-cell act" role="cell"><Actions it={it} /></span>
            </div>
          ))}
        </div>
      ) : (
        <div className={`hwl-grid ${main.aspect || 'wide'}`}>
          {shown.map(it => (
            <div key={it.id || it._id} className="hwl-card">
              <Thumb it={it} big />
              <div className="hwl-card-body">
                <Badges it={it} />
                <strong title={main.title(it)}>{main.title(it)}</strong>
                {main.sub && <span className="hwl-sub">{main.sub(it)}</span>}
                <span className="hwl-card-meta">
                  {columns.filter(c => !c.hideGrid).slice(0, 3).map(c => <span key={c.label}><em>{c.label}</em>{c.render(it)}</span>)}
                </span>
                <Actions it={it} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------
// Slide-in panel for add / edit forms
// ---------------------------------------------------------------
export function Drawer({ open, title, sub, onClose, children, footer, wide }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="hwl-drawer-wrap" role="dialog" aria-modal="true" aria-label={title}>
      <div className="hwl-drawer-back" onClick={onClose} />
      <aside className={`hwl-drawer${wide ? ' wide' : ''}`}>
        <header className="hwl-drawer-head">
          <div>
            <h3>{title}</h3>
            {sub && <p>{sub}</p>}
          </div>
          <button type="button" className="hwl-drawer-x" onClick={onClose} aria-label="Close"><Icon.x /></button>
        </header>
        <div className="hwl-drawer-body hwa hwa-light">{children}</div>
        {footer && <footer className="hwl-drawer-foot">{footer}</footer>}
      </aside>
    </div>
  )
}
