import API from './api'

// SEO landing pages (Admin → SEO Pages): homwisor.com/<slug> = search page with saved filters
// + its own meta title / description / heading / intro.

export const SEO_FILTER_KEYS = ['q', 'city', 'locality', 'type', 'budget', 'bhk', 'status', 'category']

// list of active pages — loaded once per visit
let listPromise = null
export const loadSeoPages = () => (listPromise ||= API.get('/seo-pages')
  .then((r) => (Array.isArray(r.data) ? r.data : []))
  .catch(() => { listPromise = null; return [] }))

// full page (with intro) for an address, or null when no SEO page uses it
const full = new Map()
export async function getSeoPage(slug) {
  const s = String(slug || '').toLowerCase()
  const list = await loadSeoPages()
  if (!list.some((p) => p.slug === s)) return null
  if (!full.has(s)) {
    full.set(s, API.get(`/seo-pages/${encodeURIComponent(s)}`).then((r) => r.data).catch(() => { full.delete(s); return null }))
  }
  return full.get(s)
}

// saved filters → the same URL parameters the search page reads
export const seoPageParams = (page) => {
  const out = new URLSearchParams()
  SEO_FILTER_KEYS.forEach((k) => page?.[k] && out.set(k, page[k]))
  return out
}

// two filter objects (from readFilters) describe the same search; "builder-plots" = "Builder Plots"
const norm = (v) => String(v || '').trim().toLowerCase().replace(/[-_\s]+/g, ' ')
export const sameSearch = (a, b) => SEO_FILTER_KEYS.every((k) => norm(a[k]) === norm(b[k]))
