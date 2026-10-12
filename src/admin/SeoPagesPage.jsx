import { useMemo } from 'react'
import API from '../utils/api'
import { Icon } from './ui'
import DataList, { Drawer } from './DataList'
import { Field, Input, PageHead, useEditor, DrawerFooter, need } from './ContentPages'
import SeoFields from './SeoFields'
import RichEditor from './RichEditor'
import { CITIES, localitiesOf } from '../data/locations'
import { slugify } from '../utils/slug'
import { readFilters, applyFilters, resultsTitle, BUDGETS, STATUSES, TYPE_OPTIONS, CATEGORY_OPTIONS, BHK_OPTIONS } from '../utils/propertySearch'
import { seoPageParams } from '../utils/seoPages'
import './seo-pages-admin.css'

// ---------------------------------------------------------------
// SEO Pages: homwisor.com/<address> = search results for saved filters,
// with the admin's own meta title, meta description, heading and intro text.
// ---------------------------------------------------------------
const emptyPage = {
  slug: '', heading: '', q: '', city: '', locality: '', type: '', budget: '', bhk: '', status: '', category: '',
  metaTitle: '', metaDescription: '', intro: '', active: true,
}

const site = typeof window !== 'undefined' ? window.location.origin : ''
const filtersOf = (pg) => readFilters(seoPageParams(pg))
const summary = (pg) => {
  const f = filtersOf(pg)
  return [f.locality || f.city, f.type, f.bhk, BUDGETS.find(b => b.value === f.budget)?.label || f.budget, f.status,
    f.category && (CATEGORY_OPTIONS.find(([v]) => v === f.category)?.[1] || f.category), f.q && `“${f.q}”`].filter(Boolean).join(' · ')
}

function Select({ value, onChange, children }) {
  return <select className="hwa-input no-icon" value={value || ''} onChange={e => onChange(e.target.value)}>{children}</select>
}

export function SeoPagesPage({ items, run, properties = [] }) {
  const ed = useEditor({
    empty: emptyPage, run,
    create: (b) => API.post('/seo-pages', { ...b, slug: b.slug || b.heading }),
    update: (it, b) => API.put(`/seo-pages/${it.id}`, { ...b, slug: b.slug || b.heading }),
    remove: (it) => API.delete(`/seo-pages/${it.id}`),
    validate: (f) => {
      need(slugify(f.slug || f.heading), 'enter the page address (or a heading)')
      need(['q', 'city', 'locality', 'type', 'budget', 'bhk', 'status', 'category'].some(k => f[k]), 'choose at least one filter (e.g. a locality)')
    },
    labels: { created: 'SEO page created', updated: 'SEO page updated', deleted: 'SEO page deleted' },
  })
  const { f, set, setF } = ed

  const matchesOf = (pg) => applyFilters(properties, filtersOf(pg))
  const matchCount = (pg) => matchesOf(pg).length
  const live = useMemo(() => {
    const filters = filtersOf(f)
    return { count: applyFilters(properties, filters).length, auto: resultsTitle(filters) }
  }, [f, properties])
  const address = slugify(f.slug || f.heading)
  const pickCity = (city) => setF(p => ({ ...p, city, locality: localitiesOf(city).some(l => l.name === p.locality) ? p.locality : '' }))
  const toggle = (pg) => run(() => API.put(`/seo-pages/${pg.id}`, { active: pg.active === false }), pg.active === false ? 'Page is live again' : 'Page switched off')

  return (
    <>
      <PageHead title="SEO Pages" count={items.length} sub="Landing pages like homwisor.com/projects-on-southern-peripheral-road — search results for the filters you choose, with your own meta title, description, heading and intro. Visitors using the same filters on the search page are sent here too.">
        <button className="hwd-btn gold" onClick={() => ed.openNew()}><Icon.plus /> Add SEO page</button>
      </PageHead>

      <DataList
        id="seo-pages"
        items={items}
        main={{
          thumb: pg => matchesOf(pg)[0]?.image, // first property on the page
          title: pg => pg.heading || resultsTitle(filtersOf(pg)),
          sub: pg => `homwisor.com/${pg.slug}`,
        }}
        badges={pg => [
          pg.active === false ? { text: 'Off', tone: 'grey' } : { text: 'Live', tone: 'green' },
          !pg.metaTitle && { text: 'No meta title', tone: 'dark' },
        ]}
        columns={[
          { label: 'Shows', render: pg => <span className="muted">{summary(pg) || '—'}</span> },
          { label: 'Properties', render: pg => { const n = matchCount(pg); return <strong style={{ color: n ? undefined : '#b91c1c' }}>{n}</strong> }, hideSm: true },
        ]}
        actions={pg => [
          { label: 'Edit', icon: Icon.edit, onClick: ed.openEdit, primary: true },
          pg.active !== false && { label: 'View', icon: Icon.external, href: `${site}/${pg.slug}` },
          { label: pg.active === false ? 'Switch on' : 'Switch off', icon: Icon.eye, onClick: toggle },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ].filter(Boolean)}
        searchText={pg => `${pg.slug} ${pg.heading} ${pg.metaTitle} ${summary(pg)}`}
        sorts={[{ value: 'new', label: 'Newest first' }, { value: 'az', label: 'Address A–Z', fn: (a, b) => a.slug.localeCompare(b.slug) }]}
        empty="No SEO pages yet."
        onEmptyAdd={() => ed.openNew()}
        emptyAddLabel="Create the first SEO page"
      />

      <Drawer open={ed.open} onClose={ed.close} title={ed.editing ? 'Edit SEO page' : 'Add an SEO page'} footer={<DrawerFooter ed={ed} saveLabel="Create page" />}>
        <form id="hwl-form" onSubmit={ed.save} className="hwsp-form">
          <div className="hwd-form-grid">
            <Field label="Page address *" full hint="Lowercase words joined with dashes. Changing it later breaks links people already saved.">
              <div className="hwsp-url">
                <span>homwisor.com/</span>
                <input className="hwa-input no-icon" value={f.slug} onChange={e => set('slug')(e.target.value)} onBlur={e => set('slug')(slugify(e.target.value))} placeholder={slugify(f.heading) || 'projects-on-southern-peripheral-road'} />
              </div>
            </Field>
            <Field label="Heading (H1)" full hint={`Big title on the page. Empty = “${live.auto}”`}>
              <Input value={f.heading} onChange={set('heading')} placeholder="e.g. New Projects on Southern Peripheral Road" maxLength={200} />
            </Field>
          </div>

          <div className="hwsp-box">
            <div className="hwsp-box-head">
              <strong>Which properties show</strong>
              <span className={live.count ? 'ok' : 'none'}>{live.count} {live.count === 1 ? 'property matches' : 'properties match'}</span>
            </div>
            <div className="hwd-form-grid">
              <Field label="City">
                <Select value={f.city} onChange={pickCity}>
                  <option value="">Any city</option>
                  {CITIES.map(c => <option key={c.city} value={c.city}>{c.city}</option>)}
                </Select>
              </Field>
              <Field label="Locality">
                <Select value={f.locality} onChange={set('locality')}>
                  <option value="">Any locality</option>
                  {(f.city ? [{ city: f.city, localities: localitiesOf(f.city) }] : CITIES).map(c => (
                    <optgroup key={c.city} label={c.city}>
                      {c.localities.map(l => <option key={l.slug} value={l.name}>{l.name}</option>)}
                    </optgroup>
                  ))}
                </Select>
              </Field>
              <Field label="Property type">
                <Select value={f.type} onChange={set('type')}>
                  <option value="">Any type</option>
                  {TYPE_OPTIONS.map(g => (
                    <optgroup key={g.group} label={g.group}>
                      {g.items.map(([v, text]) => <option key={v} value={v}>{text}</option>)}
                    </optgroup>
                  ))}
                </Select>
              </Field>
              <Field label="BHK">
                <Select value={f.bhk} onChange={set('bhk')}>
                  <option value="">Any BHK</option>
                  {BHK_OPTIONS.map(b => <option key={b}>{b}</option>)}
                </Select>
              </Field>
              <Field label="Budget">
                <Select value={f.budget} onChange={set('budget')}>
                  <option value="">Any budget</option>
                  {BUDGETS.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                </Select>
              </Field>
              <Field label="Project status">
                <Select value={f.status} onChange={set('status')}>
                  <option value="">Any status</option>
                  {STATUSES.map(s => <option key={s}>{s}</option>)}
                </Select>
              </Field>
              <Field label="Homepage section">
                <Select value={f.category} onChange={set('category')}>
                  {CATEGORY_OPTIONS.map(([v, text]) => <option key={v} value={v}>{v ? text : 'Any section'}</option>)}
                </Select>
              </Field>
              <Field label="Keyword" hint="Optional — e.g. a developer name like “DLF”">
                <Input value={f.q} onChange={set('q')} placeholder="Any" maxLength={120} />
              </Field>
            </div>
          </div>

          <SeoFields
            note="What Google shows for this page."
            title={f.metaTitle} description={f.metaDescription}
            onTitle={set('metaTitle')} onDescription={set('metaDescription')}
            defaultTitle={`${f.heading || live.auto} | HomWisor`}
            defaultDescription={`Explore ${live.auto.charAt(0).toLowerCase() + live.auto.slice(1)} — latest prices, floor plans, photos and free site visits with HomWisor.`}
            path={address ? `/${address}` : ''}
          />

          <Field label="Intro text" full hint="Optional — shown above the property list. 1–3 short paragraphs about the area help Google understand the page.">
            <RichEditor value={f.intro} onChange={set('intro')} placeholder="e.g. Southern Peripheral Road (SPR) connects Golf Course Extension Road to NH-48…" />
          </Field>

          <label className="hwsp-check"><input type="checkbox" checked={f.active !== false} onChange={e => set('active')(e.target.checked)} /> Page is live on the website</label>
        </form>
      </Drawer>
    </>
  )
}
