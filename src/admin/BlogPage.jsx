import { useState } from 'react'
import API from '../utils/api'
import { Icon } from './ui'
import { ImageUpload } from './ImageUpload'
import DataList, { Drawer } from './DataList'
import { Field, Input, PageHead, useEditor, DrawerFooter, need } from './ContentPages'
import { BLOG_CATEGORIES, blogDate, readTime } from '../data/blog'
import { slugify, slugTyping, blogUrl } from '../utils/slug'
import './blog-admin.css'
import './property-admin.css' // .hwp-slug

// ---------------------------------------------------------------
// Blog articles (website /blog)
// ---------------------------------------------------------------
const today = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)
const emptySection = { heading: '', text: '', image: '' }

const emptyBlog = {
  title: '', slug: '', category: BLOG_CATEGORIES[0], excerpt: '', image: '',
  content: [{ ...emptySection }], author: 'HomWisor Insights', tags: '',
  status: 'published', featured: false, publishedAt: '', seoTitle: '', seoDescription: '',
}

const isLive = (b) => b.status === 'published' && new Date(b.publishedAt) <= new Date()
const statusOf = (b) => b.status === 'draft' ? 'Draft' : isLive(b) ? 'Published' : 'Scheduled'

function Sections({ rows, onChange }) {
  const update = (i, k, v) => onChange(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)))
  const move = (i, d) => { const j = i + d; if (j < 0 || j >= rows.length) return; const n = [...rows]; [n[i], n[j]] = [n[j], n[i]]; onChange(n) }
  const remove = (i) => onChange(rows.length > 1 ? rows.filter((_, j) => j !== i) : [{ ...emptySection }])
  return (
    <div className="hwb-sections">
      {rows.map((s, i) => (
        <div key={i} className="hwb-section">
          <div className="hwb-section-head">
            <span className="hwb-no">{i + 1}</span>
            <input className="hwa-input no-icon" value={s.heading} onChange={e => update(i, 'heading', e.target.value)} placeholder="Section heading, e.g. Why connectivity matters" />
            <button type="button" className="hwb-icon" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up">↑</button>
            <button type="button" className="hwb-icon" onClick={() => move(i, 1)} disabled={i === rows.length - 1} aria-label="Move down">↓</button>
            <button type="button" className="hwb-icon danger" onClick={() => remove(i)} aria-label="Remove section">✕</button>
          </div>
          <textarea className="hwa-input no-icon hwb-text" rows={6} value={s.text} onChange={e => update(i, 'text', e.target.value)} placeholder="Write this part of the article. Leave an empty line between paragraphs." />
          {s.image || s.withImage
            ? <div className="hwb-secimg">
                <ImageUpload value={s.image} onChange={v => onChange(rows.map((r, j) => (j === i ? { ...r, image: v, withImage: !!v } : r)))} purpose="blog" aspect="16 / 9" />
                {!s.image && <button type="button" className="hwb-addimg" onClick={() => update(i, 'withImage', false)}>Cancel photo</button>}
              </div>
            : <button type="button" className="hwb-addimg" onClick={() => update(i, 'withImage', true)}>+ Add a photo to this section</button>}
        </div>
      ))}
      <button type="button" className="hwb-add" onClick={() => onChange([...rows, { ...emptySection }])}>+ Add section</button>
    </div>
  )
}

export function BlogPage({ blogs, run }) {
  const ed = useEditor({
    empty: emptyBlog, run,
    create: (b) => API.post('/blogs', toPayload(b)),
    update: (it, b) => API.put(`/blogs/${it.id}`, toPayload(b)),
    remove: (it) => API.delete(`/blogs/${it.id}`),
    validate: (f) => {
      need(f.title.trim(), 'enter a title')
      need(f.image, 'upload a cover photo')
      need(f.excerpt.trim(), 'write a short summary')
      need(f.content.some(s => s.text.trim()), 'write the article text')
    },
    labels: { created: 'Article saved', updated: 'Article updated', deleted: 'Article deleted' },
  })
  const { f, set, setF } = ed
  const [loadingId, setLoadingId] = useState('')
  const [slugTouched, setSlugTouched] = useState(false)
  const [customCat, setCustomCat] = useState(false)

  const categories = [...new Set([...BLOG_CATEGORIES, ...blogs.map(b => b.category).filter(Boolean)])]

  // the list has no article bodies — fetch the full article before editing
  const openEdit = async (item) => {
    setLoadingId(item.id)
    try {
      const { data } = await API.get(`/blogs/admin/${item.id}`)
      ed.openEdit({
        ...data,
        tags: (data.tags || []).join(', '),
        publishedAt: data.publishedAt ? String(data.publishedAt).slice(0, 10) : today(),
        content: data.content?.length ? data.content.map(s => ({ ...emptySection, ...s })) : [{ ...emptySection }],
      })
      setSlugTouched(true); setCustomCat(false)
    } catch (e) {
      run(() => { throw e })
    }
    setLoadingId('')
  }
  const openNew = () => { ed.openNew({ publishedAt: today(), content: [{ ...emptySection }] }); setSlugTouched(false); setCustomCat(false) }

  const setTitle = (v) => setF(prev => ({ ...prev, title: v, slug: slugTouched ? prev.slug : slugify(v) }))
  const toggleFeatured = (b) => run(() => API.put(`/blogs/${b.id}`, { featured: !b.featured }), b.featured ? 'Removed from featured' : 'Set as the featured article')
  const togglePublish = (b) => run(() => API.put(`/blogs/${b.id}`, { status: b.status === 'draft' ? 'published' : 'draft' }), b.status === 'draft' ? 'Article published' : 'Moved to drafts')

  const live = blogs.filter(isLive).length
  const words = f.content.map(s => s.text).join(' ').split(/\s+/).filter(Boolean).length

  return (
    <>
      <PageHead title="Blog" count={blogs.length} sub={`Articles on the website’s Blog page — ${live} live, ${blogs.length - live} draft or scheduled. The newest featured article is shown big at the top.`}>
        <a className="hwd-btn" href="/blog" target="_blank" rel="noreferrer"><Icon.external /> View blog</a>
        <button className="hwd-btn gold" onClick={openNew}><Icon.plus /> Write article</button>
      </PageHead>

      <DataList
        id="blogs"
        items={blogs}
        main={{ aspect: 'wide', thumb: b => b.image, title: b => b.title, sub: b => `${b.category} · ${b.author || 'HomWisor'}` }}
        badges={b => [
          b.featured && { text: '★ Featured', tone: 'gold' },
          { text: statusOf(b), tone: statusOf(b) === 'Published' ? 'green' : statusOf(b) === 'Draft' ? 'grey' : 'dark' },
        ]}
        columns={[
          { label: 'Date', render: b => <span className="muted">{blogDate(b.publishedAt)}</span> },
          { label: 'Category', render: b => <span>{b.category}</span>, hideSm: true },
        ]}
        actions={b => [
          { label: loadingId === b.id ? 'Opening…' : 'Edit', icon: Icon.edit, onClick: openEdit, primary: true },
          isLive(b) && { label: 'View', icon: Icon.external, href: blogUrl(b) },
          { label: b.featured ? 'Unfeature' : 'Feature', icon: Icon.star, onClick: toggleFeatured },
          { label: b.status === 'draft' ? 'Publish' : 'Unpublish', icon: Icon.eye, onClick: togglePublish },
          { label: 'Delete', icon: Icon.trash, onClick: ed.del, danger: true },
        ].filter(Boolean)}
        searchText={b => `${b.title} ${b.category} ${b.excerpt} ${(b.tags || []).join(' ')}`}
        sorts={[
          { value: 'new', label: 'Newest first', fn: (a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)) },
          { value: 'old', label: 'Oldest first', fn: (a, b) => String(a.publishedAt).localeCompare(String(b.publishedAt)) },
          { value: 'az', label: 'Title A–Z', fn: (a, b) => a.title.localeCompare(b.title) },
        ]}
        empty="No articles yet."
        onEmptyAdd={openNew}
        emptyAddLabel="Write the first article"
        defaultView="grid"
      />

      <Drawer
        wide
        open={ed.open}
        onClose={ed.close}
        title={ed.editing ? 'Edit article' : 'Write an article'}
        sub={`${words} words · about ${readTime({ excerpt: f.excerpt, content: f.content })} min read`}
        footer={<DrawerFooter ed={ed} saveLabel={f.status === 'draft' ? 'Save draft' : 'Publish article'} />}
      >
        <form id="hwl-form" onSubmit={ed.save}>
          <div className="hwd-form-grid">
            <Field label="Title *" full><Input value={f.title} onChange={setTitle} placeholder="e.g. Sector 49 Gurgaon: Prices & Metro Expansion" /></Field>
            <Field label="Web address (slug)" full hint={ed.editing?.slug && slugify(f.slug) !== ed.editing.slug ? `Old link /${ed.editing.slug} will redirect to the new one` : 'Lowercase words joined by hyphens — made from the title, or type your own'}>
              <div className="hwp-slug">
                <span>homwisor.com/</span>
                <Input value={f.slug} onChange={v => { setSlugTouched(true); set('slug')(slugTyping(v)) }} onBlur={() => set('slug')(slugify(f.slug || f.title))} placeholder={slugify(f.title) || 'made-from-the-title'} />
                {f.title && slugify(f.title) !== f.slug && <button type="button" className="hwd-btn" style={{ marginLeft: 8, height: 38, padding: '0 12px' }} onClick={() => { setSlugTouched(false); set('slug')(slugify(f.title)) }}>Use title</button>}
              </div>
            </Field>
          </div>

          <Field label="Cover photo *"><ImageUpload value={f.image} onChange={set('image')} purpose="blog" aspect="16 / 9" /></Field>

          <div className="hwd-form-grid">
            <Field label="Category">
              {customCat
                ? <div className="hwb-inline">
                    <Input value={f.category} onChange={set('category')} placeholder="New category name" autoFocus />
                    <button type="button" className="hwd-btn" onClick={() => { setCustomCat(false); set('category')(categories[0]) }}>Cancel</button>
                  </div>
                : <select className="hwa-input no-icon" value={f.category} onChange={e => e.target.value === '__new' ? (setCustomCat(true), set('category')('')) : set('category')(e.target.value)}>
                    {categories.map(c => <option key={c}>{c}</option>)}
                    <option value="__new">+ New category…</option>
                  </select>}
            </Field>
            <Field label="Author"><Input value={f.author} onChange={set('author')} placeholder="HomWisor Insights" /></Field>
            <Field label="Status">
              <div className="hwb-seg">
                {[['published', 'Published'], ['draft', 'Draft']].map(([v, l]) => (
                  <button type="button" key={v} className={f.status === v ? 'on' : ''} onClick={() => set('status')(v)}>{l}</button>
                ))}
              </div>
            </Field>
            <Field label="Publish date" hint="A future date schedules the article">
              <input type="date" className="hwa-input no-icon" value={f.publishedAt} onChange={e => set('publishedAt')(e.target.value)} />
            </Field>
            <Field label="Featured" full>
              <label className="hwb-check"><input type="checkbox" checked={!!f.featured} onChange={e => set('featured')(e.target.checked)} /> Show as the big “Featured insight” at the top of the blog (replaces the current one)</label>
            </Field>
            <Field label="Summary *" full hint="1–2 sentences — shown on the article cards and as the intro">
              <textarea className="hwa-input no-icon hwb-text" rows={3} value={f.excerpt} onChange={e => set('excerpt')(e.target.value)} placeholder="Explore connectivity, location advantages and…" />
            </Field>
          </div>

          <Field label="Article *" hint="Split the article into sections, each with a heading. Leave an empty line between paragraphs.">
            <Sections rows={f.content} onChange={set('content')} />
          </Field>

          <details className="hwb-more">
            <summary>Tags &amp; Google (SEO)</summary>
            <div className="hwd-form-grid">
              <Field label="Tags" full hint="Comma separated, e.g. Metro, Gurgaon, Investment"><Input value={f.tags} onChange={set('tags')} /></Field>
              <Field label="Google title" full hint={`${(f.seoTitle || f.title).length}/60 — defaults to the title`}><Input value={f.seoTitle} onChange={set('seoTitle')} placeholder={f.title} /></Field>
              <Field label="Google description" full hint={`${(f.seoDescription || f.excerpt).length}/160 — defaults to the summary`}>
                <textarea className="hwa-input no-icon hwb-text" rows={2} value={f.seoDescription} onChange={e => set('seoDescription')(e.target.value)} placeholder={f.excerpt} />
              </Field>
            </div>
          </details>
        </form>
      </Drawer>
    </>
  )
}

function toPayload(f) {
  return {
    ...f,
    title: f.title.trim(),
    category: (f.category || '').trim() || BLOG_CATEGORIES[0],
    slug: slugify(f.slug || f.title),
    tags: String(f.tags || '').split(',').map(t => t.trim()).filter(Boolean),
    content: f.content.map(s => ({ heading: s.heading.trim(), text: s.text.trim(), image: (s.image || '').trim() })).filter(s => s.heading || s.text || s.image),
    publishedAt: f.publishedAt ? new Date(`${f.publishedAt}T${f.publishedAt === today() ? new Date().toTimeString().slice(0, 8) : '06:00:00'}`).toISOString() : new Date().toISOString(),
  }
}
