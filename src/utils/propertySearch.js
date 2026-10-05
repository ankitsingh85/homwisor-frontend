// One filter engine for the whole website.
// Understands every link format used by the navbar, homepage buttons and
// search boxes, e.g. budget=under1 | under-1-cr | "1 Cr - 4 Cr" | 16-cr-onwards,
// type=Apartment | luxury-villas | "Plots / Land" | Branded, bhk=3 BHK, status=new-launch …

import { findLocality, findCity, placeOf } from '../data/locations'

const norm = (s = '') => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

/* ---------------- PRICES (in crore) ---------------- */

// "₹ 5.2 - 5.8 Cr" → {min:5.2,max:5.8}; "₹85 L - 1.2 Cr" → {min:.85,max:1.2}
export const priceRangeOf = (p) => {
  const text = String(p?.priceRange || p?.price || '').toLowerCase().replace(/,/g, '')
  const tokens = [...text.matchAll(/(\d+(?:\.\d+)?)\s*(cr|crore|crores|l|lac|lacs|lakh|lakhs|k)?\b/g)]
    .map(m => ({ n: parseFloat(m[1]), unit: m[2] || '' }))
  if (!tokens.length) return null
  // a number without unit takes the unit of the next number that has one ("5.2 - 5.8 Cr")
  for (let i = tokens.length - 1, last = 'cr'; i >= 0; i--) {
    if (tokens[i].unit) last = tokens[i].unit
    else tokens[i].unit = last
  }
  const toCr = ({ n, unit }) => /^(l|lac|lacs|lakh|lakhs)$/.test(unit) ? n / 100 : unit === 'k' ? n / 100000 : n
  const values = tokens.map(toCr)
  return { min: Math.min(...values), max: Math.max(...values) }
}

// "under-1-cr" | "under1" | "1-cr-4-cr" | "1 Cr - 4 Cr" | "5-10" | "20plus" | "16-cr-onwards"
export const parseBudget = (value) => {
  if (!value) return null
  const s = String(value).toLowerCase()
  const nums = [...s.matchAll(/\d+(?:\.\d+)?/g)].map(m => parseFloat(m[0]))
  if (!nums.length) return null
  if (/under|below|upto|up to|less|max/.test(s)) return { min: 0, max: nums[0] }
  if (/onward|plus|above|more|\+|min/.test(s) || nums.length === 1) return { min: nums[0], max: Infinity }
  return { min: Math.min(nums[0], nums[1]), max: Math.max(nums[0], nums[1]) }
}

export const budgetLabel = (b) => {
  if (!b) return ''
  if (b.min === 0) return `Under ₹${b.max} Cr`
  if (b.max === Infinity) return `₹${b.min} Cr+`
  return `₹${b.min} – ${b.max} Cr`
}

// Options shown in the Search page budget filter
export const BUDGETS = [
  { value: 'under-1-cr', label: 'Under ₹1 Cr' },
  { value: '1-cr-4-cr', label: '₹1 – 4 Cr' },
  { value: '4-cr-8-cr', label: '₹4 – 8 Cr' },
  { value: '8-cr-12-cr', label: '₹8 – 12 Cr' },
  { value: '12-cr-16-cr', label: '₹12 – 16 Cr' },
  { value: '16-cr-onwards', label: '₹16 Cr+' },
]

/* ---------------- TYPES ---------------- */

const RESIDENTIAL = ['apartment', 'villa', 'builder floor', 'plots', 'farmhouse']
const COMMERCIAL = ['commercial', 'retail', 'sco']
const BRANDS = ['trump', 'elie saab', 'brabus', 'franck', 'muller', 'tonino', 'armani', 'branded', 'oberoi', 'dlf privana', 'versace', 'lamborghini']
const LUXURY_FROM_CR = 10

const isHome = (p) => !COMMERCIAL.includes(norm(p.type || p.propertyType)) && !['commercial', 'sco'].includes(p.category)
const isLuxury = (p) => isHome(p) && ((priceRangeOf(p)?.max || 0) >= LUXURY_FROM_CR || /luxury/i.test(`${p.tag} ${p.propertyTypeDetail}`))
const isBranded = (p) => isHome(p) && BRANDS.some(b => norm(`${p.title} ${p.tag} ${p.propertyTypeDetail}`).includes(b))

// Every way the site names a type → a test on the property
export const typeMatcher = (raw) => {
  const t = norm(raw)
  if (!t || t === 'all' || t === 'all types') return null
  const type = (p) => norm(p.type || p.propertyType)
  const text = (p) => norm(`${p.type} ${p.bhk} ${p.title} ${p.propertyTypeDetail}`)
  const map = {
    'residential': p => RESIDENTIAL.includes(type(p)),
    'residential projects': p => RESIDENTIAL.includes(type(p)),
    'commercial': p => COMMERCIAL.includes(type(p)) || ['commercial', 'sco'].includes(p.category),
    'commercial projects': p => COMMERCIAL.includes(type(p)) || ['commercial', 'sco'].includes(p.category),
    'luxury villas': p => type(p) === 'villa',
    'villa': p => type(p) === 'villa',
    'villas': p => type(p) === 'villa',
    'independent floors': p => type(p) === 'builder floor',
    'builder floor': p => type(p) === 'builder floor',
    'pent house': p => /pent ?house/.test(text(p)),
    'penthouse': p => /pent ?house/.test(text(p)),
    'residential plots': p => type(p) === 'plots',
    'plots': p => type(p) === 'plots',
    'plots land': p => type(p) === 'plots',
    'sco plots': p => type(p) === 'sco' || p.category === 'sco',
    'sco': p => type(p) === 'sco' || p.category === 'sco',
    'branded': p => p.category === 'branded' || isBranded(p),
    'luxury': p => ['luxury', 'branded'].includes(p.category) || isLuxury(p),
    // commercial sub-menus
    'shops': p => COMMERCIAL.includes(type(p)) || p.category === 'commercial',
    'office space': p => COMMERCIAL.includes(type(p)) || p.category === 'commercial',
    'food court': p => COMMERCIAL.includes(type(p)) || p.category === 'commercial',
    'anchor stores': p => COMMERCIAL.includes(type(p)) || p.category === 'commercial',
    'cinema entertainment': p => COMMERCIAL.includes(type(p)) || p.category === 'commercial',
  }
  return map[t] || (p => type(p) === t || type(p).includes(t))
}

/* ---------------- BHK ---------------- */

// "3/4 BHK" | "3 & 4 BHK" | "2, 3 BHK" → [3,4]
export const bhksOf = (p) => {
  const s = String(p?.bhk || '').toLowerCase()
  if (!/bhk|bed/.test(s)) return []
  return [...s.matchAll(/\d+/g)].map(m => parseInt(m[0])).filter(n => n > 0 && n < 10)
}
export const bhkMatcher = (raw) => {
  const s = String(raw || '').toLowerCase()
  if (!s) return null
  if (s.includes('studio')) return p => /studio|1 ?rk/.test(String(p.bhk).toLowerCase())
  const n = parseInt(s.match(/\d+/)?.[0])
  if (!n) return null
  if (/\+|plus|above/.test(s)) return p => bhksOf(p).some(x => x >= n)
  return p => bhksOf(p).includes(n)
}

/* ---------------- STATUS ---------------- */

const STATUS_ALIASES = {
  'upcoming': ['upcoming'],
  'new launch': ['new launch', 'newlaunch'],
  'ready to move': ['ready to move', 'ready'],
  'under construction': ['under construction', 'trending', 'new launch'],
  'trending': ['trending'],
}
export const STATUSES = ['New Launch', 'Upcoming', 'Under Construction', 'Ready to Move']
export const statusMatcher = (raw) => {
  const s = norm(raw).replace('newlaunch', 'new launch')
  if (!s || s === 'for sale' || s === 'all') return null
  const keys = STATUS_ALIASES[s] || [s]
  return p => keys.includes(norm(p.status).replace('newlaunch', 'new launch')) || keys.includes(norm(p.category).replace('newlaunch', 'new launch'))
}

/* ---------------- MAIN ---------------- */

// Read every supported URL parameter into one filter object
export const readFilters = (params) => {
  const get = (k) => (params.get(k) || '').trim()
  let q = get('q')
  let locality = get('locality')
  let city = get('city')
  const location = get('location')
  // "location" may be a locality, a city, or free text from the hero search box
  if (location) {
    const l = findLocality(location)
    const c = !l && findCity(location)
    if (l) locality = l.name
    else if (c) city = c.city
    else q = q ? `${q} ${location}` : location
  }
  if (locality) {
    const l = findLocality(locality)
    if (l) { locality = l.name; city = city || l.city }
  }
  if (city) city = findCity(city)?.city || city
  return {
    q,
    city,
    locality,
    type: get('type') || get('propertyType'),
    budget: get('budget'),
    bhk: get('bhk'),
    status: get('status'),
    category: get('category'),
    sort: get('sort'),
  }
}

export const applyFilters = (properties, f, { offerTitles = [] } = {}) => {
  const words = norm(f.q).split(' ').filter(Boolean)
  const tm = typeMatcher(f.type)
  const bm = bhkMatcher(f.bhk)
  const sm = statusMatcher(f.status)
  const budget = parseBudget(f.budget)
  const offers = offerTitles.map(norm)

  const out = properties.filter(p => {
    const place = placeOf(p)
    if (words.length) {
      const hay = norm(`${p.title} ${p.location} ${p.developer} ${p.type} ${p.bhk} ${place.locality} ${place.city}`)
      if (!words.every(w => hay.includes(w))) return false
    }
    if (f.city && norm(place.city) !== norm(f.city)) return false
    if (f.locality && norm(place.locality) !== norm(f.locality)) return false
    if (tm && !tm(p)) return false
    if (bm && !bm(p)) return false
    if (sm && !sm(p)) return false
    if (budget) {
      const r = priceRangeOf(p)
      if (!r || r.max < budget.min || r.min > budget.max) return false
    }
    if (f.category) {
      const c = f.category.toLowerCase()
      // sections (incl. Branded / Luxury) match exactly; "festival" = has an offer
      if (c === 'festival') { if (!offers.some(o => norm(p.title).includes(o) || o.includes(norm(p.title)))) return false }
      else if (String(p.category).toLowerCase() !== c) return false
    }
    return true
  })

  const low = (p) => priceRangeOf(p)?.min ?? Infinity
  if (f.sort === 'price-low') out.sort((a, b) => low(a) - low(b))
  if (f.sort === 'price-high') out.sort((a, b) => (priceRangeOf(b)?.max ?? -1) - (priceRangeOf(a)?.max ?? -1))
  if (f.sort === 'newest') out.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
  return out
}

// Human title for the results, e.g. "3 BHK Apartments in Dwarka Expressway"
const TYPE_LABELS = {
  'apartment': 'Apartments', 'villa': 'Villas', 'villas': 'Villas', 'luxury villas': 'Luxury Villas',
  'builder floor': 'Builder Floors', 'independent floors': 'Independent Floors', 'farmhouse': 'Farmhouses',
  'plots': 'Plots', 'plots land': 'Plots & Land', 'residential plots': 'Residential Plots',
  'pent house': 'Penthouses', 'penthouse': 'Penthouses',
  'residential': 'Residential Projects', 'residential projects': 'Residential Projects',
  'commercial': 'Commercial Projects', 'commercial projects': 'Commercial Projects', 'retail': 'Retail Spaces',
  'sco': 'SCO Plots', 'sco plots': 'SCO Plots', 'branded': 'Branded Residences', 'luxury': 'Luxury Homes',
  'shops': 'Shops', 'office space': 'Office Spaces', 'food court': 'Food Courts', 'anchor stores': 'Anchor Stores',
  'cinema entertainment': 'Cinema & Entertainment Spaces',
}

export const resultsTitle = (f) => {
  const bits = []
  if (f.bhk) bits.push(/bhk|studio/i.test(f.bhk) ? f.bhk : `${f.bhk} BHK`)
  bits.push(f.type ? (TYPE_LABELS[norm(f.type)] || f.type) : 'Properties')
  const where = f.locality || f.city || 'Gurugram'
  return `${bits.join(' ')} in ${where}`
}
