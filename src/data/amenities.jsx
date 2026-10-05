// Amenities offered in the admin checklist + their icons on the detail page.
// Custom amenities (typed by an admin) get the icon of the closest keyword, or a check mark.

const P = {
  pool: <><path d="M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5" /><path d="M2 21.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" /><path d="M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8" /></>,
  gym: <><path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12" /></>,
  club: <><path d="M3 21h18M5 21V9l7-5 7 5v12" /><path d="M10 21v-6h4v6" /></>,
  kids: <><circle cx="12" cy="5" r="2" /><path d="M8 21l2-7-3-3 5-2 5 2-3 3 2 7" /></>,
  run: <><circle cx="14" cy="4" r="2" /><path d="M6 20l4-6 3 2 2-5 4 3M9 9l4-2 3 2" /></>,
  garden: <><path d="M12 22V12" /><path d="M12 12c0-5 4-8 8-8 0 5-3 8-8 8ZM12 14c0-4-3-7-7-7 0 4 3 7 7 7Z" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  power: <><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></>,
  yoga: <><circle cx="12" cy="4.5" r="2" /><path d="M4 20h16M12 7v6M7 11l5 2 5-2M8 20l4-7 4 7" /></>,
  tennis: <><circle cx="9" cy="9" r="6" /><path d="M13.5 13.5 20 20M5 5c3 1 5 3 6 8" /></>,
  parking: <><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M10 17V7h3.5a3 3 0 0 1 0 6H10" /></>,
  cafe: <><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" /><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3" /></>,
  spa: <><path d="M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7Z" /><path d="M12 18c0-4 1.5-8 0-12-1.5 4 0 8 0 12Z" /></>,
  lift: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="m9 9 3-3 3 3M9 15l3 3 3-3" /></>,
  wifi: <><path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.5" r="1" /></>,
  camera: <><rect x="3" y="7" width="13" height="10" rx="2" /><path d="m16 11 5-3v8l-5-3" /></>,
  theatre: <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  ball: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  party: <><path d="m4 20 5-14 9 9-14 5Z" /><path d="M14 4l1 2M19 9l2-1M17 3l-1 3" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></>,
  pet: <><circle cx="6" cy="10" r="2" /><circle cx="10" cy="6" r="2" /><circle cx="14" cy="6" r="2" /><circle cx="18" cy="10" r="2" /><path d="M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3Z" /></>,
  ev: <><rect x="4" y="4" width="10" height="16" rx="2" /><path d="M9 8l-2 4h4l-2 4M14 10h3a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0V9l-2-2" /></>,
  water: <><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /></>,
  concierge: <><path d="M4 18h16M6 18a6 6 0 0 1 12 0M12 9V7M10 7h4" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
}

export const AMENITIES = [
  ['Swimming Pool', 'pool'], ['Gymnasium', 'gym'], ['Club House', 'club'], ['Kids Play Area', 'kids'],
  ['Jogging Track', 'run'], ['Landscaped Garden', 'garden'], ['24x7 Security', 'shield'], ['Power Backup', 'power'],
  ['Yoga Deck', 'yoga'], ['Tennis Court', 'tennis'], ['Covered Parking', 'parking'], ['Cafeteria', 'cafe'],
  ['Spa & Sauna', 'spa'], ['High-speed Lifts', 'lift'], ['Wi-Fi Lounge', 'wifi'], ['CCTV Surveillance', 'camera'],
  ['Mini Theatre', 'theatre'], ['Sports Court', 'ball'], ['Party Hall', 'party'], ['Library', 'book'],
  ['Pet Park', 'pet'], ['EV Charging', 'ev'], ['Rainwater Harvesting', 'water'], ['Concierge Service', 'concierge'],
]

export const DEFAULT_AMENITIES = ['Swimming Pool', 'Gymnasium', 'Club House', 'Kids Play Area', 'Jogging Track', 'Landscaped Garden', '24x7 Security', 'Power Backup']

const KEYWORDS = [
  ['pool', 'pool'], ['swim', 'pool'], ['gym', 'gym'], ['fitness', 'gym'], ['club', 'club'], ['kid', 'kids'], ['play', 'kids'],
  ['jog', 'run'], ['track', 'run'], ['walk', 'run'], ['garden', 'garden'], ['park', 'garden'], ['green', 'garden'],
  ['secur', 'shield'], ['power', 'power'], ['backup', 'power'], ['yoga', 'yoga'], ['meditation', 'yoga'], ['tennis', 'tennis'],
  ['badminton', 'tennis'], ['parking', 'parking'], ['cafe', 'cafe'], ['restaurant', 'cafe'], ['spa', 'spa'], ['sauna', 'spa'],
  ['lift', 'lift'], ['elevator', 'lift'], ['wifi', 'wifi'], ['wi-fi', 'wifi'], ['cctv', 'camera'], ['theatre', 'theatre'],
  ['cinema', 'theatre'], ['sport', 'ball'], ['basket', 'ball'], ['football', 'ball'], ['party', 'party'], ['banquet', 'party'],
  ['library', 'book'], ['pet', 'pet'], ['ev ', 'ev'], ['charging', 'ev'], ['water', 'water'], ['concierge', 'concierge'],
]

export const amenityIconKey = (name = '') => {
  const exact = AMENITIES.find(([n]) => n.toLowerCase() === String(name).toLowerCase())
  if (exact) return exact[1]
  const n = ` ${String(name).toLowerCase()} `
  return KEYWORDS.find(([k]) => n.includes(k))?.[1] || 'check'
}

export function AmenityIcon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[amenityIconKey(name)]}
    </svg>
  )
}
