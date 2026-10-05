// Cities and localities used by the admin property form, the admin
// "Location" tab and the website filters. Slugs match the navbar's
// /location/<slug> links. `aliases` are other spellings found in addresses.

export const CITIES = [
  {
    city: 'Gurugram',
    aliases: ['gurgaon'],
    localities: [
      { name: 'Golf Course Road', slug: 'golf-course-road' },
      { name: 'Golf Course Extension Road', slug: 'golf-course-extension-road', aliases: ['gcer', 'golf course ext'] },
      { name: 'Dwarka Expressway', slug: 'dwarka-expressway' },
      { name: 'Sohna Road', slug: 'sohna-road' },
      { name: 'Southern Peripheral Road (SPR)', slug: 'southern-peripheral-road', aliases: ['southern peripheral road', 'spr'] },
      { name: 'New Gurgaon', slug: 'new-gurgaon', aliases: ['new gurugram'] },
      { name: 'Nirvana Road', slug: 'nirvana-road' },
      { name: 'MG Road', slug: 'mg-road', aliases: ['m.g. road'] },
      { name: 'NH-48', slug: 'nh-48', aliases: ['nh 48', 'nh8', 'nh-8'] },
    ],
  },
  {
    city: 'Noida',
    aliases: ['greater noida'],
    localities: [
      { name: 'Noida Expressway', slug: 'noida-expressway' },
      { name: 'Noida Extension', slug: 'noida-extension' },
      { name: 'Yamuna Expressway', slug: 'yamuna-expressway' },
    ],
  },
  {
    city: 'New Delhi',
    aliases: ['delhi'],
    localities: [
      { name: 'Dwarka', slug: 'dwarka' },
      { name: 'South Delhi', slug: 'south-delhi' },
      { name: 'Central Delhi', slug: 'central-delhi' },
    ],
  },
  {
    city: 'Faridabad',
    localities: [
      { name: 'Greater Faridabad', slug: 'greater-faridabad' },
      { name: 'Mathura Road', slug: 'mathura-road' },
      { name: 'Suraj Kund', slug: 'suraj-kund', aliases: ['surajkund'] },
    ],
  },
  {
    city: 'Bengaluru',
    aliases: ['bangalore'],
    localities: [
      { name: 'North Bengaluru', slug: 'north-bengaluru' },
      { name: 'East Bengaluru', slug: 'east-bengaluru' },
      { name: 'Sarjapur Road (IT Corridor)', slug: 'sarjapur-road', aliases: ['sarjapur road', 'sarjapur'] },
      { name: 'South Bengaluru', slug: 'south-bengaluru' },
      { name: 'Hoskote & East Peripheral Belt', slug: 'hoskote', aliases: ['hoskote'] },
    ],
  },
  {
    city: 'Hyderabad',
    localities: [
      { name: 'North Hyderabad', slug: 'north-hyderabad' },
      { name: 'South Hyderabad', slug: 'south-hyderabad' },
      { name: 'East Hyderabad', slug: 'east-hyderabad' },
      { name: 'West Hyderabad', slug: 'west-hyderabad' },
    ],
  },
  {
    city: 'Mumbai',
    localities: [
      { name: 'South Mumbai', slug: 'south-mumbai' },
      { name: 'Navi Mumbai', slug: 'navi-mumbai' },
      { name: 'Panvel', slug: 'panvel' },
      { name: 'Central Mumbai', slug: 'central-mumbai' },
      { name: 'Kalyan', slug: 'kalyan' },
    ],
  },
  {
    city: 'Pune',
    localities: [
      { name: 'West Pune', slug: 'west-pune' },
      { name: 'East Pune', slug: 'east-pune' },
      { name: 'Punawale', slug: 'punawale' },
      { name: 'South East Pune', slug: 'south-east-pune' },
    ],
  },
]

const norm = (s = '') => String(s).toLowerCase().replace(/\([^)]*\)/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()

const LOCALITIES = CITIES.flatMap(c => c.localities.map(l => ({ ...l, city: c.city })))

// Longest names first so "Dwarka Expressway" wins over "Dwarka"
const LOCALITY_MATCHERS = LOCALITIES
  .map(l => ({ l, keys: [l.name, l.slug.replace(/-/g, ' '), ...(l.aliases || [])].map(norm) }))
  .sort((a, b) => Math.max(...b.keys.map(k => k.length)) - Math.max(...a.keys.map(k => k.length)))

const has = (text, key) => key && ` ${text} `.includes(` ${key} `)

export const findLocality = (value) => {
  const n = norm(value)
  if (!n) return null
  return LOCALITY_MATCHERS.find(m => m.keys.some(k => k === n))?.l || null
}

export const findCity = (value) => {
  const n = norm(value)
  if (!n) return null
  return CITIES.find(c => [c.city, ...(c.aliases || [])].map(norm).includes(n)) || null
}

// Work out locality + city of a property (stored fields first, then the address text)
export const placeOf = (p = {}) => {
  const text = norm(p.location)
  const loc = (p.locality && findLocality(p.locality)) || LOCALITY_MATCHERS.find(m => m.keys.some(k => has(text, k)))?.l || null
  const city =
    (p.city && findCity(p.city)?.city) ||
    loc?.city ||
    CITIES.find(c => [c.city, ...(c.aliases || [])].some(k => has(text, norm(k))))?.city ||
    null
  return { locality: p.locality || loc?.name || '', city: p.city || city || '' }
}

export const localitiesOf = (city) => CITIES.find(c => c.city === city)?.localities || []
