// "Where Branded Residences Meet Landmark Architecture" homepage banner.
// Built-in content — used until the banner is saved in Admin → Branded Banner,
// and as the grey placeholders in that form.
export const BRANDED_FEATURE_DEFAULTS = {
  eyebrow: 'HOMWISOR',
  heading: 'Where Branded Residences Meet Landmark Architecture',
  highlight: 'Branded Residences',
  description:
    "Discover a curated portfolio of branded residences, created with the world's leading fashion houses and hoteliers. Each home pairs signature design with dedicated concierge service and enduring value.",
  points: ['Concierge & Valet Services', 'Every Property RERA-Verified'],
  primaryLabel: 'Explore Residences',
  primaryLink: '/search?category=branded',
  secondaryLabel: 'Request a Callback',
  secondaryLink: '/contact',
  main: {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop',
    label: 'BRANDED RESIDENCES',
    title: 'Branded Residences',
    link: '/search?category=branded',
  },
  side: {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop',
    label: 'HOMWISOR',
    brand: 'BRABUS',
    sub: 'RESIDENCES',
    tagline: 'POWER. PRESTIGE. PERFECTION.',
    note: 'COMING TO',
    location: 'SECTOR 58, GURGAON',
    footer: '4 & 5 BHK • STARTING FROM ₹20 CR*',
    link: '/search?q=brabus',
  },
}

// Saved banner + built-in defaults. Text left empty in the admin uses the default;
// a custom side image with no text lines shows just the image (posters often have text).
export function brandedFeatureContent(saved = {}, firstBrandedProperty = null, propertyLink = (p) => p && `/property/${p.slug || p.id}`) {
  const d = BRANDED_FEATURE_DEFAULTS
  const s = saved || {}
  const pick = (v, fallback) => (typeof v === 'string' && v.trim() ? v.trim() : fallback)
  const m = s.main || {}
  const side = s.side || {}
  const customSide = !!pick(side.image, '')
  const sideText = (k) => (customSide ? pick(side[k], '') : pick(side[k], d.side[k]))
  return {
    eyebrow: pick(s.eyebrow, d.eyebrow),
    heading: pick(s.heading, d.heading),
    highlight: pick(s.highlight, s.heading ? '' : d.highlight),
    description: pick(s.description, d.description),
    points: Array.isArray(s.points) && s.points.some(Boolean) ? s.points.filter(Boolean) : d.points,
    primaryLabel: pick(s.primaryLabel, d.primaryLabel),
    primaryLink: pick(s.primaryLink, d.primaryLink),
    secondaryLabel: pick(s.secondaryLabel, d.secondaryLabel),
    secondaryLink: pick(s.secondaryLink, d.secondaryLink),
    // main card: what the admin chose, else the first "branded" property, else the defaults
    main: {
      image: pick(m.image, firstBrandedProperty?.image || d.main.image),
      label: pick(m.label, d.main.label),
      title: pick(m.title, firstBrandedProperty?.title || d.main.title),
      link: pick(m.link, (firstBrandedProperty && propertyLink(firstBrandedProperty)) || d.main.link),
    },
    side: {
      image: pick(side.image, d.side.image),
      label: customSide ? '' : d.side.label,
      brand: sideText('brand'),
      sub: sideText('sub'),
      tagline: sideText('tagline'),
      note: sideText('note'),
      location: sideText('location'),
      footer: sideText('footer'),
      link: pick(side.link, d.side.link),
    },
  }
}
