// Developers: logos, links and which properties belong to them.
// Used by the homepage section, the /developer/<slug> page and the admin.
import dlfLogo from '../images/dlf.avif'
import godrejLogo from '../images/godrej.avif'
import experionLogo from '../images/experion.avif'
import m3mLogo from '../images/m3m.avif'
import maxLogo from '../images/max.avif'
import trumpLogo from '../images/trump.avif'

// built-in logos for developers whose name starts with one of these words
const LOCAL_LOGOS = { dlf: dlfLogo, godrej: godrejLogo, experion: experionLogo, m3m: m3mLogo, max: maxLogo, trump: trumpLogo }

const norm = (s = '') => String(s).toLowerCase().replace(/[^a-z0-9]/g, '')
const firstWord = (s = '') => String(s).trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '')

export const initials = (name = '') => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
export const developerUrl = (b) => `/developer/${encodeURIComponent(b?.slug || b?.id || '')}`

// uploaded logo first, else a built-in one; old placeholder links don't count
export const logoOf = (b = {}) => {
  const ok = b.logo && !/via\.placeholder\.com|dummyimage\.com/.test(b.logo)
  return ok ? b.logo : LOCAL_LOGOS[firstWord(b.name)] || ''
}

// A property belongs to a developer when its "Developer / Builder" text is the
// developer's name or one of its other names — or starts with the same word
// ("DLF" ↔ "DLF Homes").
export const belongsTo = (b, p) => {
  const dev = norm(p?.developer)
  if (!dev) return false
  const names = [b.name, ...(b.aliases || [])].map(norm).filter(Boolean)
  if (names.includes(dev)) return true
  const fw = firstWord(b.name)
  return fw.length > 1 && fw === firstWord(p.developer)
}
export const propertiesOf = (b, properties = []) => properties.filter((p) => belongsTo(b, p))

export const cityOf = (p) => p.city || String(p.location || '').split(',').pop().trim()
