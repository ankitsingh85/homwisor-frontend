import { placeOf, findLocality, findCity } from '../data/locations'
import { slugify } from '../utils/slug'

// One place that explains every property category ("section") and field.
// Category decides WHERE the property appears on the website.

export const CATEGORIES = [
  {
    id: 'trending',
    label: 'Trending',
    icon: '🔥',
    shows: 'Homepage → "Trending Projects in Gurugram"',
    defaultType: 'Apartment',
    status: 'Trending',
  },
  {
    id: 'upcoming',
    label: 'Upcoming',
    icon: '🗓️',
    shows: 'Homepage → "Upcoming Projects in Gurugram" (4 newest)',
    defaultType: 'Apartment',
    status: 'Upcoming',
  },
  {
    id: 'newlaunch',
    label: 'New Launch',
    icon: '🚀',
    shows: 'Homepage → "New Launch Projects in Gurugram" (4 newest)',
    defaultType: 'Apartment',
    status: 'New Launch',
  },
  {
    id: 'branded',
    label: 'Branded',
    icon: '💎',
    shows: 'Homepage → "Branded Residences" (4 newest) — the newest is also the big branded feature banner',
    defaultType: 'Apartment',
  },
  {
    id: 'luxury',
    label: 'Luxury',
    icon: '👑',
    shows: 'Homepage → "Top Luxury Projects" (4 newest)',
    defaultType: 'Apartment',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: '🏢',
    shows: 'Homepage → "Commercial Projects in Gurugram" (4 newest)',
    defaultType: 'Commercial',
  },
  {
    id: 'sco',
    label: 'SCO',
    icon: '🏬',
    shows: 'Homepage → "SCO Projects in Gurugram" (4 newest)',
    defaultType: 'SCO',
  },
]

export const categoryById = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[0]

// Must match the Property model's "type" list on the backend
export const TYPES = ['Apartment', 'Villa', 'Builder Floor', 'Plots', 'Farmhouse', 'Commercial', 'Retail', 'SCO']

export const STATUSES = ['New Launch', 'Upcoming', 'Under Construction', 'Ready to Move', 'Trending']

export const TAGS = ['RERA', 'Founder Choice', 'Hot Deal', 'Limited Units', 'Luxury']

// Placeholder hints change with the property type
export const configHint = (type) =>
  ['Commercial', 'Retail', 'SCO'].includes(type) ? 'e.g. Shops, Offices & Food Court'
    : type === 'Plots' ? 'e.g. 250 – 500 Sq.Yds.'
      : 'e.g. 3 & 4 BHK'

export const emptyProperty = {
  category: 'trending',
  title: '',
  slug: '',
  seoTitle: '',
  seoDescription: '',
  developer: '',
  location: '',
  city: 'Gurugram',
  locality: '',
  address: '',
  type: 'Apartment',
  bhk: '',
  tag: 'RERA',
  rera: true,
  price: '',
  priceRange: '',
  status: 'New Launch',
  possession: '',
  landArea: '',
  towers: '',
  propertyTypeDetail: '',
  image: '',
  logo: '',
  brandColor: '#1e3a5f',
  gallery: [],
  highlights: ['', '', '', ''],
  // detail page content
  overview: '',
  tagline: '',
  taglineSub: '',
  videoUrl: '',
  brochure: '',
  pricing: [{ type: '', size: '', price: '' }],
  amenities: [],
  galleryCaptions: [],
  about: { heading: '', subheading: '', description: '', image: '', stats: [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }] },
  faqs: [{ question: '', answer: '' }],
}

// Only these fields are sent to the API
export const toPayload = (f) => ({
  category: f.category,
  title: f.title.trim(),
  slug: slugify(f.slug || f.title),
  seoTitle: (f.seoTitle || '').trim(),
  seoDescription: (f.seoDescription || '').trim(),
  developer: f.developer.trim(),
  location: composeLocation(f),
  city: f.city.trim(),
  locality: f.locality.trim(),
  type: f.type,
  bhk: f.bhk.trim(),
  tag: f.tag.trim(),
  rera: !!f.rera,
  price: f.price.trim(),
  priceRange: f.priceRange.trim(),
  status: f.status,
  possession: f.possession.trim(),
  landArea: f.landArea.trim(),
  towers: f.towers.trim(),
  propertyTypeDetail: f.propertyTypeDetail.trim(),
  image: f.image.trim(),
  logo: f.logo.trim(),
  brandColor: f.brandColor,
  gallery: f.gallery.map(s => s.trim()).filter(Boolean),
  highlights: f.highlights.map(s => s.trim()).filter(Boolean),
  overview: f.overview.trim(),
  tagline: f.tagline.trim(),
  taglineSub: f.taglineSub.trim(),
  videoUrl: f.videoUrl.trim(),
  brochure: f.brochure.trim(),
  pricing: f.pricing.map(r => ({ type: r.type.trim(), size: r.size.trim(), price: r.price.trim() })).filter(r => r.type || r.size || r.price),
  amenities: [...new Set(f.amenities.map(a => a.trim()).filter(Boolean))],
  // one caption per gallery photo (same order)
  galleryCaptions: f.gallery.map((src, i) => (f.galleryCaptions[i] || '').trim()),
  about: {
    heading: f.about.heading.trim(),
    subheading: f.about.subheading.trim(),
    description: f.about.description.trim(),
    image: f.about.image.trim(),
    stats: f.about.stats.map(x => ({ value: x.value.trim(), label: x.label.trim() })).filter(x => x.value || x.label),
  },
  faqs: f.faqs.map(q => ({ question: q.question.trim(), answer: q.answer.trim() })).filter(q => q.question),
})

// Existing property → form values (fills gaps so every input is controlled)
export const toForm = (p) => {
  const pad = (arr, n) => { const a = [...(arr || [])]; while (a.length < n) a.push(''); return a }
  const f = { ...emptyProperty }
  for (const k of Object.keys(emptyProperty)) if (p[k] !== undefined && p[k] !== null) f[k] = p[k]
  // split the stored address into city / locality / sector
  const place = placeOf(p)
  f.city = place.city || 'Gurugram'
  f.locality = place.locality
  f.address = String(p.location || '')
    .split(',').map(s => s.trim()).filter(Boolean)
    .filter(part => !findLocality(part) && !findCity(part) && part.toLowerCase() !== f.locality.toLowerCase())
    .join(', ')
  f.gallery = (p.gallery || []).filter(Boolean)
  f.highlights = pad(p.highlights, 4)
  // detail page content
  const padRows = (arr, n, empty) => { const a = (arr || []).map(x => ({ ...empty, ...x })); while (a.length < n) a.push({ ...empty }); return a }
  f.pricing = padRows(p.pricing, 1, { type: '', size: '', price: '' })
  f.amenities = [...(p.amenities || [])]
  f.galleryCaptions = (p.gallery || []).filter(Boolean).map((_, i) => p.galleryCaptions?.[i] || '')
  f.about = {
    heading: p.about?.heading || '',
    subheading: p.about?.subheading || '',
    description: p.about?.description || '',
    image: p.about?.image || '',
    stats: padRows(p.about?.stats, 4, { value: '', label: '' }),
  }
  f.faqs = padRows(p.faqs, 1, { question: '', answer: '' })
  for (const k of ['overview', 'tagline', 'taglineSub', 'videoUrl', 'brochure']) f[k] = p[k] || ''
  f.rera = p.rera !== false
  return f
}

// Required fields: [key, label]
export const REQUIRED = [
  ['title', 'Project name'],
  ['developer', 'Developer'],
  ['city', 'City'],
  ['locality', 'Locality'],
  ['bhk', 'Configuration'],
  ['price', 'Starting price'],
  ['priceRange', 'Price range'],
  ['image', 'Main photo'],
]

// "Sector 58" + "Golf Course Extension Road" + "Gurugram" → full display address
export const composeLocation = (f) =>
  [f.address, f.locality, f.city].map(x => String(x || '').trim()).filter(Boolean).join(', ')
