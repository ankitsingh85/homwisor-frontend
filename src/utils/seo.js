// Page <title> and meta tags for search engines and link previews.
// applyMeta() returns a function that puts the previous values back, so the
// next page doesn't keep this page's title/description.

const absolute = (url = '') => {
  if (!url) return ''
  try { return new URL(url, window.location.origin).href } catch { return '' }
}

const TAGS = (m) => [
  ['name', 'description', m.description],
  ['property', 'og:title', m.title],
  ['property', 'og:description', m.description],
  ['property', 'og:type', m.type || 'website'],
  ['property', 'og:url', m.url],
  ['property', 'og:image', absolute(m.image)],
  ['property', 'og:site_name', 'HomWisor'],
  ['name', 'twitter:card', m.image ? 'summary_large_image' : 'summary'],
  ['name', 'twitter:title', m.title],
  ['name', 'twitter:description', m.description],
  ['name', 'twitter:image', absolute(m.image)],
]

export function applyMeta(m) {
  const undo = []
  const prevTitle = document.title
  if (m.title) document.title = m.title
  undo.push(() => { document.title = prevTitle })

  for (const [attr, key, value] of TAGS(m)) {
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
    const created = !tag
    const prev = tag?.getAttribute('content')
    if (!value) continue
    if (created) { tag = document.createElement('meta'); tag.setAttribute(attr, key); document.head.appendChild(tag) }
    tag.setAttribute('content', value)
    undo.push(() => (created ? tag.remove() : tag.setAttribute('content', prev ?? '')))
  }

  if (m.url) {
    let link = document.head.querySelector('link[rel="canonical"]')
    const created = !link
    const prev = link?.getAttribute('href')
    if (created) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = m.url
    undo.push(() => (created ? link.remove() : link.setAttribute('href', prev ?? '')))
  }

  return () => undo.reverse().forEach((fn) => fn())
}

// Meta title / description for a property page — the admin's own text, or
// one built from the property's details. The admin form previews the same thing.
const clipText = (t = '', max) => {
  const s = String(t).replace(/\s+/g, ' ').trim()
  return s.length > max ? s.slice(0, s.lastIndexOf(' ', max - 1) > 40 ? s.lastIndexOf(' ', max - 1) : max - 1).replace(/[,.;:\s]+$/, '') + '…' : s
}
export const propertyMeta = (p = {}) => {
  const name = String(p.title || '').trim()
  const price = p.price || p.priceRange
  const built = [
    name && `${name}${p.developer ? ` by ${p.developer}` : ''}${p.location ? ` at ${p.location}` : ''}.`,
    p.bhk && `${p.bhk}${price ? ` from ${price}` : ''}.`,
    'Check the price list, floor plans, amenities and RERA details on HomWisor.',
  ].filter(Boolean).join(' ')
  return {
    title: String(p.seoTitle || '').trim() || (name ? `${name} | Price & Floor Plans | HomWisor` : ''),
    description: String(p.seoDescription || '').trim() || clipText(p.overview || built, 160),
  }
}
