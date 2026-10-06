// URL slugs for properties and blog articles (same rules as the backend)

export const slugify = (s = '') =>
  String(s).toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 90).replace(/-$/, '')

// While typing in a slug box: same rules, but a trailing "-" is kept so
// "dlf-" can become "dlf-privana". Cleaned up fully on save with slugify().
export const slugTyping = (s = '') =>
  String(s).toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+/, '').slice(0, 90)

// Link to a property's detail page — its slug, or its id for old data
export const propertyUrl = (p) => `/property/${encodeURIComponent(p?.slug || p?.id || '')}`

// A saved link like "/property/p8" or an old slug → the property's current address.
// Used for banner / Recommended links that were saved before a slug changed.
export const currentPropertyLink = (link, properties = []) => {
  const m = /^\/property\/([^/?#]+)(.*)$/.exec(String(link || ''))
  if (!m) return link
  const key = decodeURIComponent(m[1])
  const p = properties.find((x) => x.slug === key || x.id === key || (x.oldSlugs || []).includes(key))
  return p?.slug ? `/property/${p.slug}${m[2]}` : link
}

// Blog articles live at the top level: homwisor.com/<slug>
export const blogUrl = (b) => `/${encodeURIComponent(typeof b === 'string' ? b : b?.slug || '')}`
