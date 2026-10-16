// Homepage section headings — Admin → Homepage Headings.
// Saved as feature "headings" ({ sections: [{ key, eyebrow, heading, highlight, description }] });
// an empty field shows the built-in text below.

export const HOME_HEADINGS = [
  { key: 'recommended', label: 'Our Top Properties', eyebrow: '', heading: 'Our Top Properties', highlight: 'Our Top', description: 'Premium properties chosen by Homwisor: built for luxury living, selected for lasting value.', noEyebrow: true },
  { key: 'trending', label: 'Trending Properties', eyebrow: 'HOMWISOR', heading: 'Trending Properties in Gurugram', highlight: 'Gurugram', description: "Discover new launch and ready-to-move projects in Gurugram's top locations, including Dwarka Expressway, Golf Course Road and New Gurgaon." },
  { key: 'newlaunch', label: 'New Launch', eyebrow: 'HOMWISOR', heading: 'Newly Launched Properties in Gurugram', highlight: 'Gurugram', description: "Book early in Gurugram's latest projects and get the best choice of units at launch prices." },
  { key: 'prime', label: 'Prime Locations', eyebrow: 'HOMWISOR', heading: 'Explore Gurugram by Location', highlight: 'Location', description: 'Pick your preferred locality and browse verified projects that match your lifestyle and budget.' },
  { key: 'budget', label: 'Browse by Budget', eyebrow: 'HOMWISOR', heading: 'Browse by Budget', highlight: 'Budget', description: 'Pick a price range and see matching projects in Gurugram.' },
  { key: 'branded', label: 'Branded Residences', eyebrow: 'HOMWISOR', heading: 'Branded Residences in India', highlight: 'India', description: 'Explore premium branded residences and landmark projects' },
  { key: 'luxury', label: 'Luxury Residences', eyebrow: 'HOMWISOR', heading: "India's Finest Luxury Residences", highlight: 'Luxury Residences', description: 'A curated collection of landmark homes with expansive layouts, world-class amenities and prime locations.' },
  { key: 'upcoming', label: 'Upcoming Launches', eyebrow: 'HOMWISOR', heading: 'Upcoming Launches in Gurugram', highlight: 'Gurugram', description: "Be among the first to explore Gurugram's newest upcoming residences" },
  { key: 'bhk', label: 'Which BHK', eyebrow: 'HOMWISOR', heading: 'Which BHK Is Right for You?', highlight: '', description: 'Choose a size and see matching homes in Gurugram.' },
  { key: 'festival', label: 'Festival Offers', eyebrow: 'HOMWISOR', heading: 'Festive Season Home Offers 2026', highlight: '2026', description: "Celebrate with a new address. Exclusive festive deals on Gurugram's finest residences, available for a limited time." },
  { key: 'sco', label: 'SCO Plots', eyebrow: 'SCO PROJECTS', heading: 'SCO Plots in Gurugram', highlight: 'Gurugram', description: 'Own your commercial address. Handpicked shop-cum-office plots .' },
  { key: 'commercial', label: 'Commercial Projects', eyebrow: 'COMMERCIAL PROJECTS', heading: 'Commercial Projects in Gurugram', highlight: 'Gurugram', description: 'Retail, office and high-street commercial spaces in Gurugram' },
  { key: 'testimonials', label: 'Customer Testimonials', eyebrow: 'REAL STORIES, REAL HOMES', heading: 'Customer Testimonials', highlight: '', description: 'Hear from our happy homeowners who found their dream properties with us.' },
  { key: 'trust', label: 'Why Buyers Trust Us', eyebrow: 'HOMWISOR', heading: 'Why Buyers Trust Homwisor', highlight: '', description: "We verify every property, get you the builder's price and stay with you until the keys are in your hand." },
]

// saved sections → { key: { eyebrow, heading, highlight, description } } with built-in text for empty fields
// brand is always written "Homwisor" on the site, whatever was typed in the admin
const brand = (t) => (typeof t === "string" ? t.replace(/homwisor/gi, (m) => (m === "HOMWISOR" ? m : "Homwisor")) : t)

export function mergeHeadings(saved = []) {
  const byKey = Object.fromEntries((Array.isArray(saved) ? saved : []).map((s) => [s.key, {
    ...s, eyebrow: brand(s.eyebrow), heading: brand(s.heading), highlight: brand(s.highlight), description: brand(s.description),
  }]))
  return Object.fromEntries(HOME_HEADINGS.map((d) => {
    const s = byKey[d.key] || {}
    let heading = s.heading?.trim() || d.heading
    // gold words: the admin's, else the built-in ones (only with the built-in heading)
    let highlight = s.heading?.trim() ? (s.highlight?.trim() || '') : (s.highlight?.trim() || d.highlight)
    if (highlight) {
      // found in the heading (any upper/lower case) → those words turn gold;
      // not in it → added at the end, e.g. "Top Properties In" + "Gurugram"
      const i = heading.toLowerCase().indexOf(highlight.toLowerCase())
      if (i >= 0) highlight = heading.slice(i, i + highlight.length)
      else heading = `${heading} ${highlight}`
    }
    return [d.key, {
      eyebrow: s.eyebrow?.trim() || d.eyebrow,
      heading,
      highlight,
      description: s.description?.trim() || d.description,
    }]
  }))
}

export const DEFAULT_HEADINGS = mergeHeadings()

// heading text with the gold words wrapped (the section's CSS styles `span` inside its h2)
export function HeadingText({ h, className, style }) {
  if (!h) return null
  const i = h.highlight ? h.heading.indexOf(h.highlight) : -1
  if (i < 0) return h.heading
  return <>{h.heading.slice(0, i)}<span className={className} style={style}>{h.highlight}</span>{h.heading.slice(i + h.highlight.length)}</>
}
