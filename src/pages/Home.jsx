import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/api'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import PropertyCard from '../components/PropertyCard'
import PremiumAutoSlider from '../components/image-slider'
import RecommendedProperties from '../components/RecommendedProperties'
import TrendingProjects from '../components/TrendingProjects'
import DeveloperSection from '../components/DeveloperSection'
import './Home.css'
import Footer from '../components/Footer'

const GOLD = '#D4AF37'
const GOLD_DARK = '#B9943A'
const BLACK = '#0A0A0A'

export default function Home(){

  const [banners, setBanners] = useState({
    hero: [],
    small: []
  })

  const [properties, setProperties] = useState([])
  const [locations, setLocations] = useState([])
  const [offers, setOffers] = useState([])
  const [builders, setBuilders] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function load(){

      try{

        const [
          b,
          p,
          l,
          o,
          bd,
          tm
        ] = await Promise.all([

          API.get('/banners'),

          API.get('/properties'),

          API.get('/locations'),

          API.get('/offers'),

          API.get('/builders')
            .catch(() => ({ data: [] })),

          API.get('/testimonials')
            .catch(() => ({ data: [] }))

        ])

        setBanners(b.data)

        setProperties(p.data)

        setLocations(l.data)

        setOffers(o.data)

        setBuilders(bd.data || [])

        setTestimonials(tm.data || [])

      }catch(e){

        console.error(e)

      }finally{

        setLoading(false)

      }

    }

    load()

  }, [])


  /* ==============================
     PROPERTY DATA
  ============================== */

  const recommended =
    properties
      .filter(
        p => p.category === 'recommended'
      )
      .slice(0, 4)


  const trending =
    properties
      .filter(
        p => p.category === 'trending'
      )
      .slice(0, 4)


  const luxury =
    properties
      .filter(
        p =>
          [
            '₹19',
            '₹28',
            '₹16',
            '₹5.2'
          ].some(
            v =>
              p.priceRange &&
              p.priceRange.includes(v)
          )
          ||
          p.category === 'trending'
      )
      .slice(0, 4)


  const luxuryExact = [

    properties.find(
      p =>
        p.title &&
        p.title.includes(
          'Oberoi Three Sixty'
        )
    )
    ||
    properties.find(
      p =>
        p.title &&
        p.title.includes('BPTP')
    )
    ||
    luxury[0],

    properties.find(
      p =>
        p.title &&
        p.title.includes(
          'Experion One 42'
        )
    )
    ||
    luxury[1],

    properties.find(
      p =>
        p.title &&
        p.title.includes(
          'Max Estate 59'
        )
    )
    ||
    luxury[2],

    properties.find(
      p =>
        p.title &&
        p.title.includes(
          'BPTP DownTown'
        )
    )
    ||
    luxury[3]

  ]
    .filter(Boolean)
    .slice(0, 4)


  const commercial =
    properties
      .filter(
        p => p.category === 'commercial'
      )
      .slice(0, 4)


  const sco =
    properties
      .filter(
        p => p.category === 'sco'
      )
      .slice(0, 4)


  const upcoming =
    properties
      .filter(
        p => p.category === 'upcoming'
      )
      .slice(0, 4)


  const newlaunch =
    properties
      .filter(
        p => p.category === 'newlaunch'
      )
      .slice(0, 4)


  /* ==============================
     LOADING
  ============================== */

  if(loading){

    return (

      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#fff'
        }}
      >

        <div
          style={{
            textAlign: 'center'
          }}
        >

          <div
            style={{
              width: 48,
              height: 48,
              border: '3px solid #eee',
              borderTopColor: GOLD,
              borderRadius: '50%',
              animation:
                'spin 1s linear infinite',
              margin: '0 auto 12px'
            }}
          />

          <div
            style={{
              fontWeight: 600,
              color: '#6b7280'
            }}
          >
            Loading HomWisor luxury...
          </div>

          <style>
            {`
              @keyframes spin{
                to{
                  transform:rotate(360deg)
                }
              }
            `}
          </style>

        </div>

      </div>

    )

  }


  /* ==============================
     FALLBACKS
  ============================== */

  const commercialDisplay =
    commercial.length >= 4
      ? commercial
      : properties.slice(4, 8)


  const scoDisplay =
    sco.length >= 4
      ? sco
      : properties.slice(8, 12)


  const luxuryDisplay =
    luxuryExact.length >= 4
      ? luxuryExact
      : trending


  /* ==============================
     BUDGET
  ============================== */

  const budgetBuckets = [

    {
      label: 'Under ₹1 Cr',
      sub: 'View Projects',
      count: '320+ Properties',
      img:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop',
      link: '/search?budget=under1'
    },

    {
      label: '₹1 Crore - ₹5 Crore',
      sub: 'View Projects',
      count: '980+ Properties',
      img:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=280&fit=crop',
      link: '/search?budget=1-5'
    },

    {
      label: '₹5 Crore - ₹10 Crore',
      sub: 'View Projects',
      count: '760+ Properties',
      img:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=280&fit=crop',
      link: '/search?budget=5-10'
    },

    {
      label: '₹10 Crore - ₹20 Crore',
      sub: 'View Projects',
      count: '410+ Properties',
      img:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=280&fit=crop',
      link: '/search?budget=10-20'
    },

    {
      label: '₹20 Crore+',
      sub: 'View Projects',
      count: '180+ Properties',
      img:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=280&fit=crop',
      link: '/search?budget=20plus'
    }

  ]


  /* ==============================
     BHK
  ============================== */

  const bhkData = [

    {
      name: 'Studio',
      sub: 'Apartment',
      place: 'in Gurugram',
      count: '320+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop'
    },

    {
      name: '1 BHK',
      sub: 'in Gurugram',
      count: '980+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop'
    },

    {
      name: '2 BHK',
      sub: 'in Gurugram',
      count: '1,450+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop'
    },

    {
      name: '3 BHK',
      sub: 'in Gurugram',
      count: '760+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop'
    },

    {
      name: '4 BHK',
      sub: 'in Gurugram',
      count: '410+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop'
    },

    {
      name: '5 BHK',
      sub: 'in Gurugram',
      count: '180+ Properties',
      dark: false,
      img:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop'
    },

    {
      name: 'Penthouse',
      sub: 'in Gurugram',
      count: '95+ Properties',
      dark: true,
      img:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop'
    }

  ]


  /* ==============================
     BUILDERS
  ============================== */

  const buildersFallback =
    builders.length
      ? builders
      : [

          {
            id: 'b1',
            name: 'DLF Homes',
            logo:
              'https://via.placeholder.com/140x70/0B2B4A/FFFFFF?text=DLF',
            projects: '17 Projects'
          },

          {
            id: 'b2',
            name: 'M3M India',
            logo:
              'https://via.placeholder.com/140x70/1e3a5f/FFFFFF?text=M3M',
            projects: '41 Projects'
          },

          {
            id: 'b3',
            name: 'Oberoi Realty',
            logo:
              'https://via.placeholder.com/140x70/1a1a1a/D4AF37?text=OBEROI',
            projects: '1 Project'
          },

          {
            id: 'b4',
            name: 'MVN Infrastructure',
            logo:
              'https://via.placeholder.com/140x70/0A1931/D4AF37?text=MVN',
            projects: '2 Projects'
          },

          {
            id: 'b5',
            name: 'Godrej Properties',
            logo:
              'https://via.placeholder.com/140x70/ffffff/0B2B4A?text=GODREJ',
            projects: '25 Projects'
          },

          {
            id: 'b6',
            name: 'BPTP Limited',
            logo:
              'https://via.placeholder.com/140x70/111111/ffffff?text=BPTP',
            projects: '13 Projects'
          },

          {
            id: 'b7',
            name: 'Trump Towers',
            logo:
              'https://via.placeholder.com/140x70/0A0A0A/D4AF37?text=TRUMP',
            projects: '3 Projects'
          },

          {
            id: 'b8',
            name: 'Kreeva',
            logo:
              'https://via.placeholder.com/140x70/fff8e1/D4AF37?text=KREEVA',
            projects: '2 Projects'
          }

        ]


  /* ==============================
     TESTIMONIALS
  ============================== */

  const testimonialsFallback =
    testimonials.length
      ? testimonials
      : [

          {
            id: 't1',
            name: 'Aayush Gupta',
            initials: 'AG',
            color: '#F59E0B',
            platform: 'Google',
            verified: true,
            rating: 5,
            text:
              'Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person.'
          },

          {
            id: 't2',
            name: 'Soumya',
            initials: 'SO',
            color: '#E9D5FF',
            textColor: '#6B21A8',
            platform: 'Google',
            verified: true,
            rating: 5,
            text:
              "Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options and only showed m..."
          },

          {
            id: 't3',
            name: 'Amit Kumar',
            initials: 'AK',
            color: '#D6D3D1',
            textColor: '#44403C',
            platform: 'Google',
            verified: true,
            rating: 5,
            text:
              'HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional.'
          },

          {
            id: 't4',
            name: 'Neha Gupta',
            initials: 'NG',
            color: '#10B981',
            platform: 'Google',
            verified: true,
            rating: 5,
            text:
              'Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns.'
          }

        ]


  return (

    <div
      style={{
        background: '#fcfcfc'
      }}
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <Header />


      {/* =========================================
          HERO + FLOATING SEARCH
      ========================================= */}

      <section
        className="hw-home-hero"
      >

        <Hero
          banners={banners.hero}
        />


        {/* FLOATING SEARCH BOX */}

        <div
          className="hw-search-overlay"
        >

          <SearchSection />

        </div>

      </section>
{/* NEW SLIDER */}
<section className="hw-new-premium-slider">
  <PremiumAutoSlider
    banners={banners.hero}
  />
</section>

{/* recommended properties */}

<RecommendedProperties properties={properties} />

 {/* =========================================
          TRENDING
      ========================================= */}
<TrendingProjects
  properties={properties}
  locations={locations}
  upcoming={upcoming}
  newlaunch={newlaunch}
  offers={offers}
/>
      {/* <section
        className="container"
        style={{
          padding:
            '28px 16px 0'
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              'space-between',
            marginBottom: 12
          }}
        >

          <h2
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: '#111'
            }}
          >
            Trending Projects in Gurugram
          </h2>

          <Link
            to="/search?category=trending"
            style={{
              fontWeight: 700,
              fontSize: 12,
              color: '#fff',
              background: BLACK,
              padding: '7px 12px',
              borderRadius: 20,
              border:
                `1px solid ${GOLD}`
            }}
          >
            View All Projects
          </Link>

        </div>


        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(4,1fr)',
            gap: 14
          }}
          className="grid-4"
        >

          {trending.map(
            p => (
              <PropertyCard
                key={p.id}
                p={p}
              />
            )
          )}

        </div>

      </section> */}


      {/* =========================================
          BHK - PREMIUM CATEGORY STRIP
      ========================================= */}

      <section
        className="container hw-bhk-premium-section"
        style={{
          padding: '38px 16px 0'
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 2
          }}
        >
          <span
            style={{
              width: 42,
              height: 1,
              background: '#D4AF37',
              display: 'inline-block'
            }}
          />
          <span
            style={{
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: 2.5,
              color: '#9A7A22'
            }}
          >
            HOMWISOR
          </span>
          <span
            style={{
              width: 42,
              height: 1,
              background: '#D4AF37',
              display: 'inline-block'
            }}
          />
        </div>

        <h2
          style={{
            fontSize: 29,
            lineHeight: 1.08,
            fontWeight: 800,
            color: '#102A43',
            margin: '2px 0 3px',
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: '-.5px'
          }}
        >
          Which BHK suits your lifestyle best?
        </h2>

        <p
          style={{
            fontSize: 11,
            color: '#64748B',
            margin: 0,
            lineHeight: 1.4
          }}
        >
          Find a home that fits you and tomorrow.
        </p>

        <div
          className="bhk-grid hw-bhk-premium-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            gap: 9,
            marginTop: 10,
            overflowX: 'auto',
            paddingBottom: 2
          }}
        >

          {bhkData.slice(0, 6).map((b, i) => {
            const palette = [
              { bg: '#FFF8ED', iconBg: '#FFF0D6', icon: '#A87522' },
              { bg: '#F2F8FD', iconBg: '#DDECF8', icon: '#2871A8' },
              { bg: '#FFF5F6', iconBg: '#FBE0E3', icon: '#C75B66' },
              { bg: '#F3F6FC', iconBg: '#DDE7F7', icon: '#31598C' },
              { bg: '#F2F8F3', iconBg: '#DDEEDC', icon: '#5B7D3C' },
              { bg: '#F6F2FC', iconBg: '#E7DFF7', icon: '#66509A' }
            ][i]

            const icons = ['▦', '▰', '▰', '♟', '◇', '♛']

            return (
              <Link
                key={b.name}
                to={`/search?bhk=${encodeURIComponent(b.name)}`}
                className="hw-bhk-premium-card"
                style={{
                  minWidth: 0,
                  borderRadius: 7,
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  background: palette.bg,
                  display: 'block',
                  textDecoration: 'none',
                  boxShadow: '0 1px 5px rgba(15,23,42,.04)'
                }}
              >
                <div
                  style={{
                    padding: '8px 8px 7px',
                    minHeight: 103
                  }}
                >
                  <div
                    style={{
                      width: 27,
                      height: 27,
                      borderRadius: '50%',
                      background: palette.iconBg,
                      color: palette.icon,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 15,
                      fontWeight: 900,
                      marginBottom: 7
                    }}
                  >
                    {icons[i]}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.1,
                      fontWeight: 800,
                      color: '#183B5B'
                    }}
                  >
                    {b.name}
                  </div>

                  <div
                    style={{
                      fontSize: 8.5,
                      fontWeight: 600,
                      color: '#64748B',
                      marginTop: 2
                    }}
                  >
                    {b.sub} {b.place ? b.place.replace(/^in\s*/i, 'in ') : 'in Gurugram'}
                  </div>

                  <div
                    style={{
                      fontSize: 8,
                      color: '#64748B',
                      marginTop: 8
                    }}
                  >
                    {b.count}
                  </div>
                </div>

                <div
                  style={{
                    height: 143,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 38,
                      background: 'linear-gradient(to top, rgba(15,23,42,.22), transparent)'
                    }}
                  />
                </div>
              </Link>
            )
          })}

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE HOMWISOR - PREMIUM
      ========================================= */}

      <section
        className="container hw-why-premium-section"
        style={{
          padding: '30px 16px 0'
        }}
      >

        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 18
          }}
        >

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 4
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                background: GOLD,
                display: 'inline-block'
              }}
            />

            <span
              style={{
                fontSize: 10,
                letterSpacing: 2.5,
                fontWeight: 800,
                color: '#9A7A22'
              }}
            >
              HOMWISOR
            </span>

            <span
              style={{
                width: 34,
                height: 1,
                background: GOLD,
                display: 'inline-block'
              }}
            />
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.08,
              fontWeight: 800,
              color: '#102A43',
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '-.4px'
            }}
          >
            Why Choose <span style={{ color: '#9A641A' }}>HomWisor?</span>
          </h2>

          <p
            style={{
              margin: '5px auto 0',
              maxWidth: 650,
              fontSize: 12,
              lineHeight: 1.5,
              color: '#64748B'
            }}
          >
            India's trusted real estate platform for verified properties, direct builder pricing, and complete end-to-end guidance.
          </p>

        </div>


        {/* Feature cards */}
        <div
          className="hw-why-feature-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 8
          }}
        >

          {[
            {
              no: '01',
              title: '100% Verified Listings',
              desc: 'Every property listing undergoes rigorous physical and legal verification. Genuine photos, accurate pricing, and title ownership put fake listings.',
              icon: '✓',
              iconBg: '#FFF0D2',
              iconColor: '#A66A18',
              bg: '#FFF9EF',
              image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=520&fit=crop'
            },
            {
              no: '02',
              title: 'Direct Builder Rates',
              desc: 'We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.',
              icon: '◇',
              iconBg: '#E5F0FC',
              iconColor: '#376D9F',
              bg: '#F4F9FD',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=520&fit=crop'
            },
            {
              no: '03',
              title: 'Free Guided Site Visits',
              desc: 'Schedule doorstep property site visits with experienced specialists who provide personalized advice tailored to your budget.',
              icon: '♟',
              iconBg: '#DDF0DE',
              iconColor: '#3F7D4C',
              bg: '#F3FAF3',
              image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=520&fit=crop'
            }
          ].map(c => (

            <div
              key={c.title}
              className="hw-why-feature-card"
              style={{
                position: 'relative',
                height: 205,
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 6,
                border: '1px solid #E5E7EB',
                background: c.bg,
                display: 'flex'
              }}
            >

              {/* Left content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '58%',
                  padding: '17px 14px 10px',
                  background: c.bg,
                  clipPath: 'ellipse(90% 78% at 0% 50%)'
                }}
              >

                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: c.iconBg,
                    color: c.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 17,
                    fontWeight: 900,
                    marginBottom: 6
                  }}
                >
                  {c.icon}
                </div>

                <div
                  style={{
                    width: 26,
                    height: 1,
                    background: c.iconColor,
                    opacity: .35,
                    margin: '0 0 5px'
                  }}
                />

                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.12,
                    fontWeight: 800,
                    color: '#17324D'
                  }}
                >
                  {c.title}
                </div>

                <div
                  style={{
                    fontSize: 11.2,
                    lineHeight: 1.4,
                    color: '#64748B',
                    marginTop: 5,
                    maxWidth: 170
                  }}
                >
                  {c.desc}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 2,
                    fontSize: 28,
                    lineHeight: 1,
                    fontWeight: 800,
                    color: c.iconColor,
                    opacity: .20
                  }}
                >
                  {c.no}
                </div>

              </div>

              {/* Right image */}
              <div
                style={{
                  position: 'absolute',
                  inset: '0 0 0 42%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>

            </div>

          ))}

        </div>


        {/* Bottom stats strip */}
        <div
          className="hw-why-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            marginTop: 7,
            background: '#fff',
            border: '1px solid #E8E1D3',
            borderRadius: 5,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(15,23,42,.05)'
          }}
        >

          {[
            ['25K+', 'Verified Properties', '▦'],
            ['10K+', 'Happy Customers', '♟'],
            ['500+', 'Top Developers', '▦'],
            ['50+', 'Cities Covered', '●'],
            ['24×7', 'Expert Support', '◉']
          ].map((s, i) => (

            <div
              key={s[1]}
              style={{
                minWidth: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '11px 7px',
                borderRight: i < 4 ? '1px solid #E8E1D3' : 'none'
              }}
            >

              <div
                style={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  borderRadius: '50%',
                  background: '#FFF7ED',
                  color: GOLD_DARK,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 800
                }}
              >
                {s[2]}
              </div>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 12,
                    lineHeight: 1,
                    fontWeight: 800,
                    color: '#17324D'
                  }}
                >
                  {s[0]}
                </div>

                <div
                  style={{
                    fontSize: 10,
                    lineHeight: 1.25,
                    color: '#64748B',
                    marginTop: 2,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {s[1]}
                </div>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================
          CUSTOMER TESTIMONIALS - PREMIUM
      ========================================= */}

      <section
        className="container hw-testimonials-premium"
        style={{
          padding: '34px 16px 0'
        }}
      >

        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 18
          }}
        >

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 4
            }}
          >
            <span
              style={{
                width: 38,
                height: 1,
                background: GOLD,
                display: 'inline-block'
              }}
            />

            <span
              style={{
                fontSize: 8,
                letterSpacing: 2.5,
                fontWeight: 800,
                color: '#9A7A22'
              }}
            >
              REAL STORIES, REAL HOMES
            </span>

            <span
              style={{
                width: 38,
                height: 1,
                background: GOLD,
                display: 'inline-block'
              }}
            />
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.08,
              fontWeight: 800,
              color: '#8B5E1A',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}
          >
            Customer Testimonials
          </h2>

          <p
            style={{
              margin: '4px 0 0',
              fontSize: 12,
              color: '#64748B'
            }}
          >
            Hear from our happy homeowners who found their dream properties with us.
          </p>

        </div>


        {/* Testimonial cards */}
        <div
          className="hw-testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 8
          }}
        >

          {testimonialsFallback.slice(0, 4).map((t, index) => (

            <div
              key={t.id}
              className="hw-testimonial-card"
              style={{
                minWidth: 0,
                height: 200,
                padding: '10px 10px 9px',
                borderRadius: 7,
                border: '1px solid #E7E7E7',
                background:
                  index === 0 ? '#FFF9EF' :
                  index === 1 ? '#F3F8FD' :
                  index === 2 ? '#FFF6F7' :
                  '#F3FAF4',
                boxShadow: '0 2px 8px rgba(15,23,42,.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >

              {/* Top row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >

                <div
                  style={{
                    width: 27,
                    height: 27,
                    borderRadius: '50%',
                    background: t.color || '#FFF0D2',
                    color: t.textColor || '#A66A18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 900
                  }}
                >
                  “
                </div>

                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#4285F4',
                    letterSpacing: -.3
                  }}
                >
                  Google
                </div>

              </div>


              {/* Rating */}
              <div
                style={{
                  color: '#F4B400',
                  fontSize: 13,
                  letterSpacing: 1,
                  marginTop: 6
                }}
              >
                ★★★★★
              </div>


              {/* Review */}
              <div
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.5,
                  color: '#475569',
                  marginTop: 6,
                  fontStyle: 'italic',
                  flex: 1
                }}
              >
                "{t.text}"
              </div>


              {/* User */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  marginTop: 7
                }}
              >

                <div
                  style={{
                    width: 31,
                    height: 31,
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: t.color || '#E5E7EB',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    fontSize: 9,
                    color: t.textColor || '#475569',
                    border: '1px solid rgba(0,0,0,.06)'
                  }}
                >
                  {t.initials}
                </div>

                <div
                  style={{
                    minWidth: 0
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      lineHeight: 1.1,
                      fontWeight: 800,
                      color: '#17324D',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {t.name}
                  </div>

                  <div
                    style={{
                      fontSize: 8,
                      lineHeight: 1.2,
                      marginTop: 2,
                      color: '#64748B',
                      fontWeight: 600
                    }}
                  >
                    VERIFIED BUYER
                  </div>
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Slider dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            marginTop: 10
          }}
        >
          {[0, 1, 2, 3].map((d, i) => (
            <span
              key={d}
              style={{
                width: i === 0 ? 7 : 6,
                height: i === 0 ? 7 : 6,
                borderRadius: '50%',
                background: i === 0 ? GOLD_DARK : '#D1D5DB',
                display: 'block'
              }}
            />
          ))}
        </div>

      </section>
<DeveloperSection builders={builders} properties={properties} />  

      {/* =========================================
          STATS
      ========================================= */}

      <div
        className="container"
        style={{
          padding:
            '22px 16px'
        }}
      >

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(4,1fr)',
            gap: 12,
            background: '#fff',
            border:
              `1px solid ${GOLD}`,
            borderRadius: 14,
            padding: 16
          }}
          className="stats-grid"
        >

          {[
            ['500+','Premium Projects'],
            ['50K+','Happy Families'],
            ['15+','Years Experience'],
            ['4.8★','Customer Rating']
          ].map(
            x => (

              <div
                key={x[1]}
                style={{
                  textAlign: 'center',
                  padding: '8px 0'
                }}
              >

                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    color: '#111'
                  }}
                >
                  {x[0]}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: '#6b7280',
                    fontWeight: 600
                  }}
                >
                  {x[1]}
                </div>

              </div>

            )
          )}

        </div>

      </div>


      <Footer />


      {/* =========================================
          RESPONSIVE + HERO SEARCH POSITIONING
      ========================================= */}

    </div>

  )

}