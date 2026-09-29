// One place that explains every property category ("section") and field.
// Category decides WHERE the property appears on the website.

export const CATEGORIES = [
  {
    id: 'recommended',
    label: 'Recommended',
    icon: '⭐',
    shows: 'Homepage → "Recommended Properties" (4 newest) and "Trending Projects"',
    defaultType: 'Apartment',
  },
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
  category: 'recommended',
  title: '',
  developer: '',
  location: '',
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
  gallery: [''],
  highlights: ['', '', '', ''],
}

// Only these fields are sent to the API
export const toPayload = (f) => ({
  category: f.category,
  title: f.title.trim(),
  developer: f.developer.trim(),
  location: f.location.trim(),
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
})

// Existing property → form values (fills gaps so every input is controlled)
export const toForm = (p) => {
  const pad = (arr, n) => { const a = [...(arr || [])]; while (a.length < n) a.push(''); return a }
  const f = { ...emptyProperty }
  for (const k of Object.keys(emptyProperty)) if (p[k] !== undefined && p[k] !== null) f[k] = p[k]
  f.gallery = pad(p.gallery, 1)
  f.highlights = pad(p.highlights, 4)
  f.rera = p.rera !== false
  return f
}

// Required fields: [key, label]
export const REQUIRED = [
  ['title', 'Project name'],
  ['developer', 'Developer'],
  ['location', 'Location'],
  ['bhk', 'Configuration'],
  ['price', 'Starting price'],
  ['priceRange', 'Price range'],
  ['image', 'Main photo'],
]
