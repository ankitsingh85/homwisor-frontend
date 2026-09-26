import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../utils/api'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import DeveloperSection from '../components/DeveloperSection'

export default function PropertyDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [related, setRelated] = useState([])
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [heroForm, setHeroForm] = useState({ name: '', phone: '' })
  const [heroSent, setHeroSent] = useState(false)

  useEffect(() => {
    API.get(`/properties/${id}`).then(r => setP(r.data)).catch(() => { })
    API.get('/properties?limit=4').then(r => setRelated(r.data.slice(0, 4)))
    window.scrollTo(0, 0)
  }, [id])

  // Scroll spy for detail nav
  useEffect(() => {
    if (!p) return
    const sections = ['overview', 'price', 'highlights', 'amenities', 'gallery', 'location', 'masterplan', 'developer']
    const observers = []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 })
    sections.forEach(s => {
      const el = document.getElementById(s)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [p])

  const handleEnquiry = async (e) => {
    e.preventDefault()
    try {
      await API.post('/enquiries', { ...form, property: p.title })
      setSent(true)
      setTimeout(() => setSent(false), 3000)
      setForm({ name: '', phone: '', email: '', message: '' })
      setShowEnquiry(false)
    } catch { }
  }

  const handleHeroSubmit = async (e) => {
    e.preventDefault()
    try {
      await API.post('/enquiries', { name: heroForm.name, phone: heroForm.phone, property: p.title + ' - Hero Form', message: 'Hero form lead' })
      setHeroSent(true)
      setTimeout(() => setHeroSent(false), 3000)
      setHeroForm({ name: '', phone: '' })
    } catch { }
  }

  const scrollTo = (sid) => {
    document.getElementById(sid)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveTab(sid)
  }

  if (!p) return <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}><div style={{ width: 36, height: 36, border: '3px solid #eee', borderTopColor: '#d8232a', borderRadius: '50%', animation: 'spin 1s linear infinite' }} /><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>

  const brandColor = p.brandColor || "#1e3a5f"
  const logo = p.logo || `https://via.placeholder.com/200x80/${brandColor.replace('#', '')}/ffffff?text=${encodeURIComponent((p.developer || 'PROPERTY').slice(0, 6))}`
  const heroNumber = (p.title.match(/\d+/)?.[0]) || p.title.slice(0, 2).toUpperCase()
  const possession = p.possession || "Dec 2032"
  const landArea = p.landArea || "3.42 Acres"
  const towers = p.towers || "3 Tower – 110 Unit"
  const propertyTypeDetail = p.propertyTypeDetail || p.type || "Residential Flats"
  const startingFrom = p.price || "₹20 Cr*"

  return (
    <div className="property-detail-page" style={{ background: '#f8f9fb', fontFamily: 'Manrope, Arial, sans-serif' }}>


      {/* Developer Navbar - sticky, updates on scroll */}
      <div style={{ background: brandColor, color: '#fff', position: 'sticky', top: 0, zIndex: 40, borderTop: '3px solid #ff8c00', boxShadow: '0 4px 20px rgba(0,0,0,.15)', transition: 'all .2s' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
            <div style={{ background: '#fff', padding: '6px 14px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 8, height: 42, flexShrink: 0 }}>
              <img src={logo} alt={p.developer || p.title} style={{ height: 28, maxWidth: 110, objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
            </div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 24, padding: 4, overflowX: 'auto' }} className="dev-nav scrollbar-hide">
              {[
                { id: 'overview', label: 'OVERVIEW' },
                { id: 'price', label: 'PRICE' },
                { id: 'highlights', label: 'HIGHLIGHTS' },
                { id: 'amenities', label: 'AMENITIES' },
                { id: 'gallery', label: 'GALLERY' },
                { id: 'location', label: 'LOCATION' },
                { id: 'masterplan', label: 'MASTER PLAN' },
                { id: 'developer', label: 'DEVELOPER' }
              ].map(tab => (
                <button key={tab.id} onClick={() => scrollTo(tab.id)} style={{
                  padding: '7px 12px', borderRadius: 20, border: 'none', fontWeight: 700, fontSize: 10.5, letterSpacing: .3, cursor: 'pointer', whiteSpace: 'nowrap',
                  background: activeTab === tab.id ? '#fff' : 'transparent',
                  color: activeTab === tab.id ? brandColor : '#fff',
                  opacity: activeTab === tab.id ? 1 : .85, transition: 'all .2s'
                }}>{tab.label}</button>
              ))}
            </nav>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <a href="https://wa.me/919811750130" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', padding: '8px 14px', borderRadius: 24, fontWeight: 700, fontSize: 12, color: '#fff', whiteSpace: 'nowrap' }} className="hide-mobile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z" /></svg>
              WHATSAPP
            </a>
            <a href="tel:9811750130" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontWeight: 800, fontSize: 15, whiteSpace: 'nowrap' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" className="hide-mobile"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z" /></svg>
              9811750130
            </a>
          </div>
        </div>
      </div>

      {/* HERO - Black background with large number, as in Experion One 42 SC */}
      <div className="property-hero" style={{ background: '#0a0a0a', color: '#fff', position: 'relative', overflow: 'hidden', minHeight: 460 }}>
        {/* large watermark number */}
        <div style={{ position: 'absolute', left: '45%', top: '50%', transform: 'translate(-50%,-50%)', fontSize: 380, fontWeight: 900, color: 'rgba(210,140,90,.95)', lineHeight: 1, opacity: .95, pointerEvents: 'none', fontFamily: 'Manrope, Arial, sans-serif', letterSpacing: -12, userSelect: 'none' }} className="hero-number">{heroNumber}</div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.2) 45%, rgba(0,0,0,.5) 100%)' }}></div>

        <div className="container property-hero-inner" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 380px', gap: 24, alignItems: 'center', padding: '36px 16px' }}>
          {/* Left info cards */}
          <div>
            <div style={{ background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 12, padding: '14px 16px', display: 'inline-block', minWidth: 340 }}>
              <div style={{ fontSize: 10, letterSpacing: 1.5, color: '#38bdf8', fontWeight: 700 }}>RESIDENTIAL FLATS</div>
              <div style={{ fontWeight: 800, fontSize: 22, marginTop: 4, letterSpacing: -0.5 }}>{p.title.toUpperCase()}</div>
              <div style={{ fontSize: 13, opacity: .9, marginTop: 4, fontWeight: 500 }}>{p.location}</div>
            </div>

            <div style={{ background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: 14, marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 380 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: .6, color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>PROPERTY TYPE</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{propertyTypeDetail}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: .6, color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>POSSESSION</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{possession}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: .6, color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>ABOUT PROJECT</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{towers}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: .6, color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>LAND AREA</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{landArea}</div>
              </div>
              <div style={{ gridColumn: 'span 2', borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 10, marginTop: 4 }}>
                <div style={{ fontSize: 10, letterSpacing: .6, color: '#38bdf8', fontWeight: 700 }}>STARTING FROM</div>
                <div style={{ fontWeight: 800, fontSize: 16, marginTop: 4, color: '#38bdf8' }}>{startingFrom}</div>
              </div>
            </div>
          </div>

          {/* Right form - Get in Touch */}
          <div className="property-hero-form" style={{ background: '#fff', borderRadius: 16, padding: 20, color: '#111', boxShadow: '0 20px 60px rgba(0,0,0,.3)', border: '1px solid #eef0f3' }}>
            <h3 style={{ fontWeight: 800, fontSize: 18, color: '#111' }}>Get in Touch with us.</h3>
            <p style={{ fontSize: 14, letterSpacing: .5, color: '#6b7280', fontWeight: 600, marginTop: 4 }}>ENTER YOUR DETAILS BELOW TO PROCEED</p>
            {heroSent && <div style={{ marginTop: 10, background: '#ecfdf5', color: '#065f46', padding: '8px 10px', borderRadius: 8, fontSize: 12, fontWeight: 700, border: '1px solid #a7f3d0' }}>✓ Submitted! We'll call you shortly.</div>}
            <form onSubmit={handleHeroSubmit} style={{ display: 'grid', gap: 12, marginTop: 14 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>FULL NAME</label>
                <input required value={heroForm.name} onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} placeholder="Enter your name" style={{ width: '100%', marginTop: 6, height: 42, border: '1px solid #e5e7eb', borderRadius: 8, padding: '0 12px', fontSize: 13, outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>MOBILE NUMBER</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                  <select style={{ height: 42, border: '1px solid #e5e7eb', borderRadius: 8, padding: '0 8px', fontSize: 13, background: '#f9fafb' }}>
                    <option>+91</option>
                  </select>
                  <input required value={heroForm.phone} onChange={e => setHeroForm({ ...heroForm, phone: e.target.value })} placeholder="Enter mobile number" style={{ flex: 1, height: 42, border: '1px solid #e5e7eb', borderRadius: 8, padding: '0 12px', fontSize: 13, outline: 'none' }} />
                </div>
              </div>
              <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 11, color: '#6b7280', lineHeight: 1.4 }}>
                <input type="checkbox" defaultChecked style={{ marginTop: 2 }} />
                I authorize company representatives to Call, SMS, Email or WhatsApp me.
              </label>
              <button type="submit" style={{ height: 42, background: '#9fb6c9', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 800, fontSize: 13, letterSpacing: .5, cursor: 'pointer' }}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '28px 16px 20px' }}>
      {/* =========================================================
    OVERVIEW SECTION
========================================================= */}

<div
  id="overview"
  className="overview-section"
  style={{
    background: "#fff",
    border: "1px solid #e5ebf0",
    borderRadius: 16,
    padding: "22px",
    marginTop: 16,
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
  <div
    className="overview-main"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 0.95fr",
      gap: 28,
      alignItems: "center",
      width: "100%",
    }}
  >

    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}

    <div
      className="overview-content"
      style={{
        minWidth: 0,
      }}
    >

      {/* LABEL */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            width: 30,
            height: 1,
            background: "#c5a15a",
          }}
        />

        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#a17b39",
          }}
        >
          PROJECT OVERVIEW
        </span>
      </div>


      {/* HEADING */}

      <h2
        style={{
          margin: 0,
          fontSize: 29,
          lineHeight: 1.15,
          fontWeight: 800,
          color: "#173b63",
          letterSpacing: "-0.7px",
        }}
      >
        About{" "}
        <span style={{ color: "#a87529" }}>
          {p.title}
        </span>
      </h2>


      {/* UNDERLINE */}

      <div
        style={{
          width: 48,
          height: 3,
          borderRadius: 3,
          background: "#28658e",
          marginTop: 9,
          marginBottom: 15,
        }}
      />


      {/* DESCRIPTION */}

      <p
        style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.75,
          color: "#596878",
        }}
      >
        Discover luxury living at{" "}
        <strong style={{ color: "#243f5e" }}>
          {p.title}
        </strong>{" "}
        by{" "}
        <strong style={{ color: "#243f5e" }}>
          {p.developer || "Premium Developer"}
        </strong>{" "}
        located at{" "}
        <strong style={{ color: "#243f5e" }}>
          {p.location}
        </strong>
        . This {p.bhk} {p.type?.toLowerCase()} project offers
        premium configurations with world-class amenities,
        excellent connectivity and strong investment potential.
        RERA approved, it promises an exceptional lifestyle and
        excellent connectivity in the heart of Gurugram.
      </p>


      {/* =================================================
          QUICK INFORMATION
      ================================================= */}

      <div
        className="overview-mini-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 15,
          marginTop: 16,
        }}
      >

        {/* PRICE */}

        <div
          style={{
            background: "#f8fbfd",
            border: "1px solid #e2eaf0",
            borderRadius: 9,
            padding: "9px 6px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: "#788797",
              letterSpacing: .7,
            }}
          >
            PRICE
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: brandColor,
              marginTop: 4,
            }}
          >
            {p.price}
          </div>
        </div>


        {/* CONFIG */}

        <div
          style={{
            background: "#f8fbfd",
            border: "1px solid #e2eaf0",
            borderRadius: 9,
            padding: "9px 6px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: "#788797",
              letterSpacing: .7,
            }}
          >
            CONFIG
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#203f5e",
              marginTop: 4,
            }}
          >
            {p.bhk}
          </div>
        </div>


        {/* STATUS */}

        <div
          style={{
            background: "#f8fbfd",
            border: "1px solid #e2eaf0",
            borderRadius: 9,
            padding: "9px 6px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: "#788797",
              letterSpacing: .7,
            }}
          >
            STATUS
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#159447",
              marginTop: 4,
            }}
          >
            {p.status}
          </div>
        </div>


        {/* RERA */}

        <div
          style={{
            background: "#f8fbfd",
            border: "1px solid #e2eaf0",
            borderRadius: 9,
            padding: "9px 6px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: "#788797",
              letterSpacing: .7,
            }}
          >
            RERA
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#159447",
              marginTop: 4,
            }}
          >
            {p.rera ? "Approved" : "N/A"}
          </div>
        </div>

      </div>

    </div>


    {/* =====================================================
        RIGHT IMAGE
    ===================================================== */}

    <div
      className="overview-image-wrap"
      style={{
        width: "100%",
        height: 380,
        minWidth: 0,
      }}
    >
      <div
        className="overview-image-box"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 18,
          border: "1px solid #e0e8ee",
          background: "#edf2f5",
          boxShadow: "0 10px 30px rgba(20,55,85,.10)",
        }}
      >
        <img
          src={p.image}
          alt={p.title || "Property Overview"}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      .overview-section {
        width: 100%;
        box-sizing: border-box;
      }

      .overview-image-box {
        position: relative;
      }

      .overview-image-box img {
        transition: transform .4s ease;
      }

      .overview-image-box:hover img {
        transform: scale(1.02);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .overview-main {
          grid-template-columns: 1fr 0.9fr !important;
          gap: 18px !important;
        }

        .overview-content h2 {
          font-size: 26px !important;
        }

        .overview-content p {
          font-size: 11.5px !important;
        }

        .overview-image-wrap {
          height: 245px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 750px) {

        .overview-section {
          padding: 18px 14px !important;
        }

        .overview-main {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .overview-content h2 {
          font-size: 24px !important;
        }

        .overview-content p {
          font-size: 11px !important;
          line-height: 1.7 !important;
        }

        .overview-image-wrap {
          height: 260px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .overview-section {
          padding: 16px 12px !important;
          border-radius: 13px !important;
        }

        .overview-main {
          gap: 15px !important;
        }

        .overview-content h2 {
          font-size: 22px !important;
        }

        .overview-content p {
          font-size: 10px !important;
        }

        .overview-mini-stats {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 7px !important;
        }

        .overview-image-wrap {
          height: 220px !important;
        }

        .overview-image-box {
          border-radius: 14px !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 360px) {

        .overview-content h2 {
          font-size: 20px !important;
        }

        .overview-content p {
          font-size: 9.5px !important;
        }

        .overview-image-wrap {
          height: 195px !important;
        }

      }

    `}
  </style>

</div>

       {/* =========================================================
    PRICE & PAYMENT SECTION
========================================================= */}

<div
  id="price"
  className="price-section"
  style={{
    background: "#fff",
    border: "1px solid #eef0f3",
    borderRadius: 16,
    padding: "20px 20px 16px",
    marginTop: 16,
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>

  {/* =======================================================
      HEADER
  ======================================================= */}

  <div
    className="price-header"
    style={{
      textAlign: "center",
      marginBottom: 17,
    }}
  >

    {/* LABEL */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        marginBottom: 5,
      }}
    >
      <span
        style={{
          width: 42,
          height: 1,
          background: "#c8a35d",
        }}
      />

      <span
        style={{
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 2.5,
          color: "#a27b3c",
        }}
      >
        SPACE & PRICING
      </span>

      <span
        style={{
          width: 42,
          height: 1,
          background: "#c8a35d",
        }}
      />
    </div>


    {/* TITLE */}

    <h2
      style={{
        margin: 0,
        fontSize: 29,
        lineHeight: 1.15,
        fontWeight: 800,
        color: "#173b63",
        letterSpacing: "-0.6px",
      }}
    >
      {p.title || "M3M Brabus Residences"}{" "}
      <span
        style={{
          color: "#a87529",
        }}
      >
        Price
      </span>
    </h2>


    {/* BLUE LINE */}

    <div
      style={{
        width: 45,
        height: 3,
        borderRadius: 3,
        background: "#28658e",
        margin: "9px auto 0",
      }}
    />

  </div>


  {/* =======================================================
      PRICE TABLE
  ======================================================= */}

  <div
    className="price-table-wrapper"
    style={{
      width: "100%",
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #e4eaf0",
      boxShadow: "0 5px 18px rgba(25,55,85,.06)",
    }}
  >

    {/* TABLE HEADER */}

    <div
      className="price-table-header"
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr 1fr 45px",
        alignItems: "center",
        minHeight: 40,
        background: "#124b78",
        color: "#fff",
        padding: "0 8px",
        boxSizing: "border-box",
      }}
    >

      {/* TYPE */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: .3,
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5h14v16" />
          <path d="M9 9h2" />
          <path d="M13 9h2" />
          <path d="M9 13h2" />
          <path d="M13 13h2" />
        </svg>

        TYPE / BHK
      </div>


      {/* SIZE */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: .3,
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 4h6" />
          <path d="M4 4v6" />
          <path d="M20 4h-6" />
          <path d="M20 4v6" />
          <path d="M4 20h6" />
          <path d="M4 20v-6" />
          <path d="M20 20h-6" />
          <path d="M20 20v-6" />
        </svg>

        UNIT SIZE
      </div>


      {/* PRICE */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: .3,
        }}
      >
        ₹

        <span>
          UNIT PRICE
        </span>
      </div>

      <div />

    </div>


    {/* =====================================================
        PRICE ROWS
    ===================================================== */}

    {[
      {
        bhk: "4 BHK",
        size: "5,000 SQ.FT",
        price: "₹ 20 Cr",
      },
      {
        bhk: "5 BHK",
        size: "6,000 SQ.FT",
        price: "₹ 24 Cr",
      },
      {
        bhk: "5 BHK",
        size: "7,000 SQ.FT",
        price: "₹ 28 Cr",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="price-table-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr 1fr 45px",
          alignItems: "center",
          minHeight: 39,
          padding: "0 8px",
          background:
            index % 2 === 0 ? "#fff" : "#f5f9fc",
          borderTop:
            "1px solid #edf1f4",
          boxSizing: "border-box",
        }}
      >

        {/* BHK */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 800,
            color: "#173b63",
          }}
        >

          <div
            style={{
              width: 22,
              height: 22,
              display: "grid",
              placeItems: "center",
              color: "#315b7d",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M4 20V9l8-5 8 5v11" />
              <path d="M4 20h16" />
              <path d="M8 20v-5h8v5" />
            </svg>
          </div>

          {item.bhk}

        </div>


        {/* SIZE */}

        <div
          style={{
            fontSize: 9.5,
            color: "#315573",
            fontWeight: 600,
          }}
        >
          {item.size}
        </div>


        {/* PRICE */}

        <div
          style={{
            fontSize: 11,
            color: "#173b63",
            fontWeight: 800,
          }}
        >
          {item.price}
        </div>


        {/* ARROW */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            onClick={() => setShowEnquiry(true)}
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: "none",
              background: "#edf5fa",
              color: "#31749b",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            →
          </button>
        </div>

      </div>

    ))}

  </div>


  {/* =======================================================
      BOTTOM CTA
  ======================================================= */}

  <div
    className="price-bottom-cta"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      marginTop: 15,
    }}
  >

    {/* GET IN TOUCH */}

    <button
      type="button"
      onClick={() => setShowEnquiry(true)}
      style={{
        border: "none",
        borderRadius: 22,
        background:
          "linear-gradient(90deg, #12517f 0%, #1c6b99 100%)",
        color: "#fff",
        padding: "12px 24px",
        minWidth: 125,
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: .5,
        cursor: "pointer",
        boxShadow: "0 5px 12px rgba(18,81,127,.18)",
      }}
    >
      GET IN TOUCH&nbsp; →
    </button>


    {/* OR */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
      }}
    >

      <span
        style={{
          width: 25,
          height: 2,
          background: "#d8dfe5",
        }}
      />

      <span
        style={{
          fontSize: 10,
          color: "#9aa5af",
          fontWeight: 600,
        }}
      >
        OR
      </span>

      <span
        style={{
          width: 25,
          height: 2,
          background: "#d8dfe5",
        }}
      />

    </div>


    {/* SPEAK WITH EXPERT */}

    <a
      href="tel:+919811750130"
      className="expert-price-contact"
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid #e2c98f",
        borderRadius: 22,
        padding: "5px 14px 5px 7px",
        background: "#fff",
        minWidth: 145,
        boxSizing: "border-box",
      }}
    >

      {/* Phone */}

      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#eef6fb",
          border: "1px solid #dceaf2",
          display: "grid",
          placeItems: "center",
          color: "#23678e",
          flexShrink: 0,
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>


      <div>

        <div
          style={{
            fontSize: 8,
            color: "#8a96a1",
            fontWeight: 700,
            letterSpacing: .5,
          }}
        >
          SPEAK WITH EXPERT
        </div>

        <div
          style={{
            fontSize: 11,
            color: "#173b63",
            fontWeight: 800,
            marginTop: 2,
          }}
        >
          +91 9811750130
        </div>

      </div>

    </a>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      .price-section {
        width: 100%;
        box-sizing: border-box;
      }

      .price-table-row {
        transition: background .2s ease;
      }

      .price-table-row:hover {
        background: #f1f7fb !important;
      }

      .price-table-row button {
        transition:
          transform .2s ease,
          background .2s ease;
      }

      .price-table-row button:hover {
        transform: translateX(2px);
        background: #dcecf5 !important;
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .price-section {
          padding: 19px 16px 15px !important;
        }

        .price-header h2 {
          font-size: 24px !important;
        }

        .price-bottom-cta {
          gap: 10px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .price-section {
          padding: 18px 12px 14px !important;
          border-radius: 14px !important;
        }

        .price-header h2 {
          font-size: 21px !important;
        }

        .price-table-header {
          grid-template-columns:
            1.05fr
            1fr
            .95fr
            34px !important;
        }

        .price-table-row {
          grid-template-columns:
            1.05fr
            1fr
            .95fr
            34px !important;
        }

        .price-table-header {
          min-height: 32px !important;
        }

        .price-table-row {
          min-height: 40px !important;
        }

        .price-table-header > div {
          font-size: 6px !important;
        }

        .price-table-row > div:nth-child(1) {
          font-size: 9px !important;
        }

        .price-table-row > div:nth-child(2) {
          font-size: 8px !important;
        }

        .price-table-row > div:nth-child(3) {
          font-size: 9px !important;
        }

        .price-bottom-cta {
          flex-wrap: wrap !important;
          gap: 10px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 430px) {

        .price-header h2 {
          font-size: 19px !important;
        }

        .price-table-header {
          grid-template-columns:
            1fr
            .9fr
            .85fr
            28px !important;
        }

        .price-table-row {
          grid-template-columns:
            1fr
            .9fr
            .85fr
            28px !important;
        }

        .price-table-header {
          padding: 0 5px !important;
        }

        .price-table-row {
          padding: 0 5px !important;
        }

        .price-table-row > div:nth-child(1) {
          font-size: 8px !important;
          gap: 4px !important;
        }

        .price-table-row > div:nth-child(2) {
          font-size: 7.5px !important;
        }

        .price-table-row > div:nth-child(3) {
          font-size: 8px !important;
        }

        .price-table-row button {
          width: 20px !important;
          height: 20px !important;
        }

        .price-bottom-cta {
          flex-direction: column !important;
          width: 100%;
        }

        .price-bottom-cta > button {
          width: 150px !important;
        }

        .expert-price-contact {
          min-width: 160px !important;
        }

      }

    `}
  </style>

</div>

       {/* =========================================================
    PROJECT HIGHLIGHTS
========================================================= */}

<div
  id="highlights"
  className="highlights-section"
  style={{
    background: "#f8fbff",
    border: "1px solid #e3ebf2",
    borderRadius: 16,
    padding: "20px 22px",
    marginTop: 16,
    overflow: "hidden",
    boxSizing: "border-box",
  }}
>
  <div
    className="highlights-main"
    style={{
      display: "grid",
      gridTemplateColumns: "46% 54%",
      gap: 24,
      alignItems: "center",
      width: "100%",
      minHeight: 265,
      boxSizing: "border-box",
    }}
  >

    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}

    <div
      className="highlights-left"
      style={{
        minWidth: 0,
        paddingRight: 10,
      }}
    >

      {/* LABEL */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            width: 30,
            height: 1,
            background: "#c5a15a",
            display: "block",
          }}
        />

        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#a17b39",
          }}
        >
          EXPLORE FEATURES
        </span>
      </div>


      {/* HEADING */}

      <h2
        style={{
          margin: 0,
          fontSize: 29,
          lineHeight: 1.15,
          fontWeight: 800,
          color: "#173b63",
          letterSpacing: "-0.7px",
        }}
      >
        Project{" "}
        <span style={{ color: "#a87529" }}>
          Highlights
        </span>
      </h2>


      {/* UNDERLINE */}

      <div
        style={{
          width: 48,
          height: 3,
          borderRadius: 3,
          background: "#28658e",
          marginTop: 9,
          marginBottom: 14,
        }}
      />


      {/* =================================================
          HIGHLIGHT LIST
      ================================================= */}

      <div
        style={{
          display: "grid",
          gap: 7,
        }}
      >

        {(p.highlights || [
          "Two Apartments Per Floor but Feels Like One Home on Each Floor",
          "Ultra-Luxury 4 & 5 BHK Residences - Spacious homes planned in sizes of approximately 5000 - 7000 SQ.FT",
          "Low-Density Development - Planned across around 30 acres with just 2 towers and approximately 240 residences.",
          "Two Residences Per Core - A planning concept designed to limit the number of homes sharing common access areas.",
        ]).map((h, i) => (

          <div
            key={i}
            className="highlight-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              minHeight: 40,
              padding: "7px 10px",
              background: "#fff",
              border: "1px solid #dfe7ee",
              borderRadius: 8,
              boxSizing: "border-box",
            }}
          >

            {/* CHECK ICON */}

            <div
              style={{
                width: 30,
                height: 30,
                minWidth: 30,
                borderRadius: "50%",
                background: "#f7fbfe",
                border: "1px solid #d6e1e9",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2879a8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>


            {/* TEXT */}

            <span
              style={{
                fontSize: 12,
                lineHeight: 1.4,
                color: "#36516b",
                fontWeight: 500,
              }}
            >
              {h}
            </span>

          </div>

        ))}

      </div>

    </div>


    {/* =====================================================
        RIGHT NORMAL IMAGE
    ===================================================== */}

    <div
      className="highlights-right"
      style={{
        minWidth: 0,
        height: 385,
      }}
    >

      <div
        className="highlight-image-box"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 18,
          border: "1px solid #e1e8ee",
          background: "#eaf0f4",
          boxShadow: "0 10px 30px rgba(20,55,85,.10)",
          boxSizing: "border-box",
        }}
      >

        <img
          src={p.image}
          alt={p.title || "Project Highlights"}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

      </div>

    </div>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      /* ==========================================
         BASE
      ========================================== */

      .highlights-section {
        width: 100%;
        box-sizing: border-box;
      }

      .highlight-row {
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .highlight-row:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(23,59,99,.06);
      }

      .highlight-image-box {
        position: relative;
      }

      .highlight-image-box img {
        transition: transform .4s ease;
      }

      .highlight-image-box:hover img {
        transform: scale(1.02);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .highlights-main {
          grid-template-columns: 45% 55% !important;
          gap: 18px !important;
          min-height: 245px !important;
        }

        .highlights-right {
          height: 245px !important;
        }

        .highlights-left h2 {
          font-size: 26px !important;
        }

        .highlight-row {
          min-height: 38px !important;
          padding: 6px 8px !important;
        }

        .highlight-row span {
          font-size: 8.5px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 750px) {

        .highlights-section {
          padding: 18px 14px !important;
        }

        .highlights-main {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .highlights-left {
          padding-right: 0 !important;
        }

        .highlights-right {
          height: 260px !important;
        }

        .highlight-image-box {
          border-radius: 16px !important;
        }

        .highlight-row span {
          font-size: 10px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .highlights-section {
          padding: 16px 12px !important;
          border-radius: 13px !important;
        }

        .highlights-main {
          gap: 16px !important;
        }

        .highlights-left h2 {
          font-size: 23px !important;
        }

        .highlights-right {
          height: 220px !important;
        }

        .highlight-image-box {
          border-radius: 14px !important;
        }

        .highlight-row {
          min-height: 42px !important;
          padding: 8px !important;
        }

        .highlight-row span {
          font-size: 9px !important;
          line-height: 1.4 !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .highlights-section {
          padding: 14px 10px !important;
        }

        .highlights-left h2 {
          font-size: 21px !important;
        }

        .highlights-right {
          height: 195px !important;
        }

        .highlight-row span {
          font-size: 8.5px !important;
        }

      }

    `}
  </style>

</div>

       {/* Amenities */}
<div
  id="amenities"
  style={{
    background: '#fff',
    border: '1px solid #eef0f3',
    borderRadius: 16,
    padding: 20,
    marginTop: 16
  }}
>

  {/* ===== PREMIUM HEADING ===== */}

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5
    }}
  >
    <span
      style={{
        width: 30,
        height: 1,
        background: '#c5a15a',
        display: 'block'
      }}
    />

    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 2,
        color: '#a17b39'
      }}
    >
      LUXURY LIFESTYLE
    </span>
  </div>

  <h2
    style={{
      margin: 0,
      fontSize: 29,
      lineHeight: 1.15,
      fontWeight: 800,
      color: '#173b63',
      letterSpacing: '-0.6px'
    }}
  >
    Amenities
  </h2>

  {/* Blue underline */}

  <div
    style={{
      width: 48,
      height: 3,
      background: '#28658e',
      borderRadius: 3,
      marginTop: 9
    }}
  />

  {/* Existing description */}

  <p
    style={{
      fontSize: 14,
      color: '#6b7280',
      marginTop: 10
    }}
  >
    World-class amenities for an elevated lifestyle – curated for luxury, wellness and community.
  </p>


  {/* Existing Amenities */}

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 14
    }}
    className="amenities-grid"
  >

    {[
      { icon: '🏊', label: 'Swimming Pool' },
      { icon: '🏋️', label: 'Gymnasium' },
      { icon: '🏠', label: 'Club House' },
      { icon: '🛝', label: 'Kids Play Area' },
      { icon: '🏃', label: 'Jogging Track' },
      { icon: '🌳', label: 'Landscaped Garden' },
      { icon: '🛡️', label: '24x7 Security' },
      { icon: '⚡', label: 'Power Backup' },
      { icon: '🧘', label: 'Yoga Deck' },
      { icon: '🎾', label: 'Tennis Court' },
      { icon: '🅿️', label: 'Covered Parking' },
      { icon: '☕', label: 'Cafeteria' }
    ].map(a => (

      <div
        key={a.label}
        style={{
          background: '#f9fafb',
          border: '1px solid #eef0f3',
          borderRadius: 12,
          padding: 14,
          textAlign: 'center'
        }}
      >
        <div style={{ fontSize: 22 }}>
          {a.icon}
        </div>

        <div
          style={{
            fontWeight: 600,
            fontSize: 12,
            marginTop: 6,
            color: '#374151'
          }}
        >
          {a.label}
        </div>

      </div>

    ))}

  </div>

</div>

      {/* =========================================================
    GALLERY
========================================================= */}

<div
  id="gallery"
  className="gallery-section"
  style={{
    background: '#fff',
    border: '1px solid #eef0f3',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    boxSizing: 'border-box',
    overflow: 'hidden'
  }}
>

  {/* ===== PREMIUM HEADING ===== */}

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5
    }}
  >
    <span
      style={{
        width: 30,
        height: 1,
        background: '#c5a15a',
        display: 'block'
      }}
    />

    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 2,
        color: '#a17b39'
      }}
    >
      PROJECT GALLERY
    </span>
  </div>


  {/* TITLE */}

  <h2
    style={{
      margin: 0,
      fontSize: 29,
      lineHeight: 1.15,
      fontWeight: 800,
      color: '#173b63',
      letterSpacing: '-0.6px'
    }}
  >
    Gallery
  </h2>


  {/* BLUE UNDERLINE */}

  <div
    style={{
      width: 48,
      height: 3,
      background: '#28658e',
      borderRadius: 3,
      marginTop: 9
    }}
  />


  {/* =======================================================
      GALLERY GRID
  ======================================================= */}

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.min(
        (p.gallery || [p.image]).length,
        3
      )}, 1fr)`,
      gap: 10,
      marginTop: 15
    }}
    className="gallery-grid"
  >

    {(p.gallery || [p.image, p.image])
      .slice(0, 6)
      .map((img, i) => (

        <div
          key={i}
          className="gallery-item"
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            aspectRatio: '1.6',
            border: '1px solid #e8edf1',
            background: '#f5f7f9',
            boxSizing: 'border-box'
          }}
        >

          <img
            src={img}
            alt={`Gallery ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

        </div>

      ))}

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      .gallery-section {
        width: 100%;
        box-sizing: border-box;
      }

      .gallery-item {
        transition:
          transform .25s ease,
          box-shadow .25s ease;
      }

      .gallery-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(20,55,85,.10);
      }

      .gallery-item img {
        transition: transform .35s ease;
      }

      .gallery-item:hover img {
        transform: scale(1.03);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .gallery-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .gallery-section h2 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 550px) {

        .gallery-section {
          padding: 18px 14px !important;
          border-radius: 14px !important;
        }

        .gallery-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }

        .gallery-item {
          border-radius: 10px !important;
        }

        .gallery-section h2 {
          font-size: 23px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .gallery-section {
          padding: 16px 12px !important;
        }

        .gallery-grid {
          gap: 7px !important;
        }

        .gallery-section h2 {
          font-size: 21px !important;
        }

      }

    `}
  </style>

</div>

{/* =========================================================
    LOCATION & CONNECTIVITY SECTION
========================================================= */}

<div
  id="location"
  className="location-section"
  style={{
    background: "#fff",
    border: "1px solid #eef0f3",
    borderRadius: 16,
    padding: "24px 20px 20px",
    marginTop: 16,
    overflow: "hidden",
  }}
>

  {/* =======================================================
      HEADING
  ======================================================= */}

  <div
    className="location-heading"
    style={{
      marginBottom: 17,
    }}
  >

    {/* LABEL */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 5,
      }}
    >
      <span
        style={{
          width: 32,
          height: 1,
          background: "#c6a05b",
          display: "block",
        }}
      />

      <span
        style={{
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 2,
          color: "#9b7b3e",
          textTransform: "uppercase",
        }}
      >
        NEIGHBORHOOD INTELLIGENCE
      </span>
    </div>


    {/* TITLE */}
    <h2
      style={{
        margin: 0,
        fontSize: 29,
        lineHeight: 1.15,
        fontWeight: 800,
        color: "#17365d",
        letterSpacing: "-0.6px",
      }}
    >
      Connectivity &{" "}
      <span
        style={{
          color: "#b07c25",
        }}
      >
        Strategic Location
      </span>
    </h2>


    {/* DESCRIPTION */}
    <p
      style={{
        margin: "6px 0 0",
        fontSize: 14,
        lineHeight: 1.55,
        color: "#68778a",
        maxWidth: 650,
      }}
    >
      Explore the premium ecosystem around{" "}
      <strong
        style={{
          color: "#24466b",
        }}
      >
        {p.title}
      </strong>
      . Perfectly positioned for ultimate convenience.
    </p>

  </div>


  {/* =======================================================
      MAIN CONTENT
  ======================================================= */}

  <div
    className="location-main-layout"
    style={{
      display: "grid",
      gridTemplateColumns: "1.55fr 0.85fr",
      gap: 16,
      alignItems: "stretch",
    }}
  >


    {/* =====================================================
        LEFT SIDE - ACTUAL MAP IMAGE
    ===================================================== */}

    <div
      className="location-map-column"
      style={{
        minWidth: 0,
      }}
    >

      <div
        className="location-map-card"
        style={{
          position: "relative",
          width: "100%",
          height: 250,
          overflow: "hidden",
          borderRadius: 13,
          border: "1px solid #e3e8ed",
          background: "#fff",
          boxShadow: "0 5px 18px rgba(28,52,77,.06)",
        }}
      >

        {/* ===============================================
            ACTUAL MAP IMAGE
            =============================================== */}

        <img
          src={
            p.locationMap ||
            p.mapImage ||
            p.locationImage ||
            ""
          }
          alt={`${p.title || "Property"} Location Map`}
          className="location-map-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />

      </div>

    </div>


    {/* =====================================================
        RIGHT SIDE - NEARBY ESSENTIALS
        NO BACKGROUND IMAGE
    ===================================================== */}

    <div
      className="location-right"
      style={{
        minWidth: 0,
        background: "#fff",
        borderRadius: 12,
      }}
    >

      {/* =================================================
          NEARBY ESSENTIALS CARD
      ================================================= */}

      <div
        className="nearby-card"
        style={{
          width: "100%",
          background: "#fff",
          border: "1px solid #e1e6eb",
          borderRadius: 11,
          padding: 13,
          boxShadow: "0 6px 20px rgba(23,54,93,.08)",
        }}
      >


        {/* ===============================================
            CARD HEADING
        =============================================== */}

        <div
          style={{
            marginBottom: 8,
          }}
        >

          <div
            style={{
              fontSize: 20,
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#17365d",
            }}
          >
            Nearby{" "}
            <span
              style={{
                color: "#b07c25",
              }}
            >
              Essentials
            </span>
          </div>


          <div
            style={{
              fontSize: 11,
              color: "#9ca3af",
              letterSpacing: 0.8,
              marginTop: 3,
              textTransform: "uppercase",
            }}
          >
            DISTANCE FROM SITE
          </div>

        </div>


        {/* ===============================================
            ITEM 1
        =============================================== */}

        <div
          className="essential-row"
          style={{
            display: "grid",
            gridTemplateColumns: "28px minmax(0,1fr) auto",
            gap: 8,
            alignItems: "center",
            padding: "7px 0",
            borderBottom: "1px solid #edf0f3",
          }}
        >

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#f0f5f8",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            ⛳
          </div>


          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#24466b",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Golf Course Road
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 2,
              }}
            >
              Approx. 5-10 minutes
            </div>
          </div>


          <div
            style={{
              textAlign: "right",
              minWidth: 30,
            }}
          >
            <div
              style={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 800,
                color: "#17365d",
              }}
            >
              5-10
            </div>

            <div
              style={{
                fontSize: 9,
                marginTop: 2,
                color: "#9ca3af",
              }}
            >
              MINS
            </div>
          </div>

        </div>


        {/* ===============================================
            ITEM 2
        =============================================== */}

        <div
          className="essential-row"
          style={{
            display: "grid",
            gridTemplateColumns: "28px minmax(0,1fr) auto",
            gap: 8,
            alignItems: "center",
            padding: "7px 0",
            borderBottom: "1px solid #edf0f3",
          }}
        >

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#f0f5f8",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            🚇
          </div>


          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#24466b",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Rapid Metro Sector 55-56
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 2,
              }}
            >
              Approx. 7-10 minutes
            </div>
          </div>


          <div
            style={{
              textAlign: "right",
              minWidth: 30,
            }}
          >
            <div
              style={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 800,
                color: "#17365d",
              }}
            >
              7-10
            </div>

            <div
              style={{
                fontSize: 9,
                marginTop: 2,
                color: "#9ca3af",
              }}
            >
              MINS
            </div>
          </div>

        </div>


        {/* ===============================================
            ITEM 3
        =============================================== */}

        <div
          className="essential-row"
          style={{
            display: "grid",
            gridTemplateColumns: "28px minmax(0,1fr) auto",
            gap: 8,
            alignItems: "center",
            padding: "7px 0",
            borderBottom: "1px solid #edf0f3",
          }}
        >

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#f0f5f8",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            🛣️
          </div>


          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize:12,
                fontWeight: 700,
                color: "#24466b",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Southern Peripheral Road
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 2,
              }}
            >
              Approx. 5 minutes
            </div>
          </div>


          <div
            style={{
              textAlign: "right",
              minWidth: 30,
            }}
          >
            <div
              style={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 800,
                color: "#17365d",
              }}
            >
              5
            </div>

            <div
              style={{
                fontSize: 9,
                marginTop: 2,
                color: "#9ca3af",
              }}
            >
              MINS
            </div>
          </div>

        </div>


        {/* ===============================================
            ITEM 4
        =============================================== */}

        <div
          className="essential-row"
          style={{
            display: "grid",
            gridTemplateColumns: "28px minmax(0,1fr) auto",
            gap: 8,
            alignItems: "center",
            padding: "7px 0",
            borderBottom: "1px solid #edf0f3",
          }}
        >

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#f0f5f8",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            📍
          </div>


          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#24466b",
              }}
            >
              Sohna Road
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 2,
              }}
            >
              Approx. 10 minutes
            </div>
          </div>


          <div
            style={{
              textAlign: "right",
              minWidth: 30,
            }}
          >
            <div
              style={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 800,
                color: "#17365d",
              }}
            >
              10
            </div>

            <div
              style={{
                fontSize: 9,
                marginTop: 2,
                color: "#9ca3af",
              }}
            >
              MINS
            </div>
          </div>

        </div>


        {/* ===============================================
            ITEM 5
        =============================================== */}

        <div
          className="essential-row"
          style={{
            display: "grid",
            gridTemplateColumns: "28px minmax(0,1fr) auto",
            gap: 8,
            alignItems: "center",
            padding: "7px 0 4px",
          }}
        >

          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#f0f5f8",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            ✈️
          </div>


          <div
            style={{
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#24466b",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              NH-48 (Delhi-Jaipur Highway)
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 2,
              }}
            >
              Approx. 15 minutes
            </div>
          </div>


          <div
            style={{
              textAlign: "right",
              minWidth: 30,
            }}
          >
            <div
              style={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 800,
                color: "#17365d",
              }}
            >
              15
            </div>

            <div
              style={{
                fontSize: 9,
                marginTop: 2,
                color: "#9ca3af",
              }}
            >
              MINS
            </div>
          </div>

        </div>


        {/* ===============================================
            INTERACTIVE MAP BUTTON
        =============================================== */}

        <button
          type="button"
          onClick={() => {
            const location =
              p.location || "";

            if (location) {
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location
                )}`,
                "_blank",
                "noopener,noreferrer"
              );
            }
          }}
          style={{
            width: "100%",
            marginTop: 10,
            border: "none",
            borderRadius: 8,
            padding: "13px 10px",
            background: "#17365d",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              minWidth: 0,
            }}
          >

            <span
              style={{
                width: 30,
                height: 30,
                flexShrink: 0,
                borderRadius: 7,
                background: "rgba(255,255,255,.12)",
                display: "grid",
                placeItems: "center",
                fontSize: 14,
              }}
            >
              ◇
            </span>


            <div
              style={{
                textAlign: "left",
                minWidth: 0,
              }}
            >

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                EXPLORE ON OUR INTERACTIVE MAP
              </div>

              <div
                style={{
                  fontSize: 9,
                  opacity: 0.65,
                  marginTop: 2,
                }}
              >
                Discover the complete neighborhood
              </div>

            </div>

          </div>


          <span
            style={{
              width: 23,
              height: 23,
              flexShrink: 0,
              borderRadius: "50%",
              background: "#d6a63b",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
            }}
          >
            →
          </span>

        </button>

      </div>

    </div>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      /* ==================================================
         BASE
      ================================================== */

      .location-section {
        position: relative;
        width: 100%;
        background: #fff !important;
      }

      .location-main-layout {
        width: 100%;
        background: #fff !important;
      }

      .location-map-column {
        background: #fff !important;
      }

      .location-map-card {
        background: #fff !important;
      }

      .location-map-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }

      .location-right {
        background: #fff !important;
        background-image: none !important;
      }

      .nearby-card {
        background: #fff !important;
        background-image: none !important;
      }

      .essential-row {
        transition:
          background-color 0.2s ease,
          transform 0.2s ease;
      }

      .essential-row:hover {
        background: #f8fafc;
      }


      /* ==================================================
         TABLET
      ================================================== */

      @media (max-width: 1100px) {

        .location-main-layout {
          grid-template-columns: 1.35fr 0.9fr !important;
          gap: 14px !important;
        }

        .location-map-card {
          height: 240px !important;
        }

        .location-heading h2 {
          font-size: 25px !important;
        }

      }


      /* ==================================================
         TABLET SMALL
      ================================================== */

      @media (max-width: 900px) {

        .location-main-layout {
          grid-template-columns: 1.2fr 0.9fr !important;
          gap: 12px !important;
        }

        .location-map-card {
          height: 230px !important;
        }

        .nearby-card {
          padding: 11px !important;
        }

        .nearby-card > div:first-child {
          margin-bottom: 6px !important;
        }

        .essential-row {
          padding: 6px 0 !important;
        }

      }


      /* ==================================================
         MOBILE
      ================================================== */

      @media (max-width: 800px) {

        .location-section {
          padding: 20px 14px 16px !important;
        }

        .location-main-layout {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }

        .location-map-card {
          height: 270px !important;
        }

        .location-right {
          min-height: auto !important;
          width: 100% !important;
        }

        .nearby-card {
          width: 100% !important;
        }

        .location-heading h2 {
          font-size: 23px !important;
        }

        .location-heading p {
          max-width: 100% !important;
        }

      }


      /* ==================================================
         MOBILE 600
      ================================================== */

      @media (max-width: 600px) {

        .location-section {
          padding: 18px 12px 15px !important;
          border-radius: 14px !important;
        }

        .location-heading {
          margin-bottom: 14px !important;
        }

        .location-heading h2 {
          font-size: 21px !important;
          letter-spacing: -0.3px !important;
        }

        .location-heading p {
          font-size: 10.5px !important;
          line-height: 1.5 !important;
        }

        .location-map-card {
          height: 245px !important;
          border-radius: 11px !important;
        }

        .nearby-card {
          padding: 12px !important;
          border-radius: 11px !important;
        }

        .essential-row {
          grid-template-columns: 28px minmax(0,1fr) auto !important;
        }

      }


      /* ==================================================
         MOBILE 480
      ================================================== */

      @media (max-width: 480px) {

        .location-heading h2 {
          font-size: 20px !important;
        }

        .location-heading > div:first-child span:last-child {
          font-size: 8px !important;
          letter-spacing: 1.5px !important;
        }

        .location-map-card {
          height: 220px !important;
        }

        .nearby-card {
          padding: 11px !important;
        }

        .nearby-card > div:first-child > div:first-child {
          font-size: 15px !important;
        }

        .essential-row {
          padding: 7px 0 !important;
        }

        .essential-row > div:nth-child(2) > div:first-child {
          font-size: 8px !important;
        }

        .essential-row > div:nth-child(2) > div:last-child {
          font-size: 6px !important;
        }

      }


      /* ==================================================
         VERY SMALL MOBILE
      ================================================== */

      @media (max-width: 380px) {

        .location-section {
          padding: 16px 10px 13px !important;
        }

        .location-heading h2 {
          font-size: 18px !important;
        }

        .location-map-card {
          height: 205px !important;
        }

        .essential-row {
          grid-template-columns: 25px minmax(0,1fr) auto !important;
          gap: 6px !important;
        }

        .essential-row > div:first-child {
          width: 23px !important;
          height: 23px !important;
          font-size: 9px !important;
        }

      }

    `}
  </style>

</div>  
{/* =========================================================
    NEIGHBORHOOD SCORE SECTION
========================================================= */}

<div
  id="neighborhood-score"
  className="neighborhood-score-section"
  style={{
    background: "#fff",
    border: "1px solid #e8edf2",
    borderRadius: 16,
    padding: "20px 18px 16px",
    marginTop: 16,
    overflow: "hidden",
  }}
>
  {/* =======================================================
      HEADER
  ======================================================= */}

  <div
    className="score-header"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 20,
    }}
  >
    <div>
      {/* SMALL LABEL */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 3,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 2,
            color: "#a17b35",
          }}
        >
          LIVE BETTER
        </span>

        <span
          style={{
            width: 42,
            height: 1,
            background: "#c7a55b",
          }}
        />
      </div>


      {/* TITLE */}

      <h2
        style={{
          margin: 0,
          fontSize: 29,
          lineHeight: 1.1,
          fontWeight: 800,
          color: "#172f55",
          letterSpacing: "-0.7px",
        }}
      >
        Neighborhood{" "}
        <span
          style={{
            color: "#a57429",
          }}
        >
          Score
        </span>
      </h2>


      {/* SUBTITLE */}

      <div
        style={{
          marginTop: 5,
          fontSize: 10.5,
          color: "#9ca3af",
        }}
      >
        Life in this locality
      </div>
    </div>


    {/* =====================================================
        QUOTE
    ===================================================== */}

    <div
      className="score-quote"
      style={{
        alignSelf: "center",
        textAlign: "center",
        color: "#9ba5b4",
        fontSize: 12,
        fontStyle: "italic",
        lineHeight: 1.2,
        marginLeft: "auto",
      }}
    >
      
    </div>


    {/* =====================================================
        OVERALL SCORE
    ===================================================== */}

    <div
      className="overall-score"
      style={{
        width: 102,
        minWidth: 102,
        height: 82,
        borderRadius: 9,
        background:
          "linear-gradient(145deg, #194f85 0%, #123b69 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 5px 14px rgba(20,62,105,.15)",
      }}
    >
      <div
        style={{
          fontSize: 27,
          lineHeight: 1,
          fontWeight: 800,
        }}
      >
        8.8
      </div>

      <div
        style={{
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: 0.5,
          marginTop: 3,
          opacity: 0.9,
        }}
      >
        OVERALL SCORE
      </div>

      <div
        style={{
          color: "#f2c14e",
          fontSize: 9,
          letterSpacing: 1.5,
          marginTop: 2,
        }}
      >
        ★★★★★
      </div>

      <div
        style={{
          fontSize: 9,
          marginTop: 1,
          opacity: 0.7,
        }}
      >
        VERY HIGH
      </div>
    </div>
  </div>


  {/* =======================================================
      SCORE CARDS
  ======================================================= */}

  <div
    className="score-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 6,
      marginTop: 17,
    }}
  >

    {/* =====================================================
        CONNECTIVITY
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          className="score-icon blue"
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#eaf4fb",
            color: "#1680bd",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ▣
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            CONNECTIVITY
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            9.2/10
          </div>
        </div>
      </div>

      <div
        className="score-progress"
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "92%",
            height: "100%",
            background: "#3b9bd3",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#98a4b8",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Excellent metro & road access
      </div>
    </div>


    {/* =====================================================
        HEALTHCARE
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#fcecee",
            color: "#d94a5d",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ♜
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            HEALTHCARE
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            8.5/10
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "85%",
            height: "100%",
            background: "#ec526a",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#9ca3af",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Top hospitals nearby
      </div>
    </div>


    {/* =====================================================
        EDUCATION
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#f0eafa",
            color: "#7047d7",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ◆
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            EDUCATION
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            8.8/10
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "88%",
            height: "100%",
            background: "#794de0",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#9ca3af",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Reputed schools & institutes
      </div>
    </div>


    {/* =====================================================
        LIFESTYLE
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#fff3e5",
            color: "#e59621",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ♙
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            LIFESTYLE
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            9/10
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "100%",
            background: "#ee9b22",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#9ca3af",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Malls, dining & entertainment
      </div>
    </div>


    {/* =====================================================
        COMMUTE
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#e6f6f5",
            color: "#19a8a1",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ▣
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            COMMUTE
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            8.2/10
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "82%",
            height: "100%",
            background: "#25b8b0",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#9ca3af",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Smooth daily travel
      </div>
    </div>


    {/* =====================================================
        GREENERY
    ===================================================== */}

    <div
      className="score-card"
      style={{
        background: "#fff",
        border: "1px solid #edf0f3",
        borderRadius: 9,
        padding: "9px 9px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <div
          style={{
            width: 27,
            height: 27,
            borderRadius: 7,
            background: "#eaf7e8",
            color: "#55a843",
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          ♧
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#65748a",
            }}
          >
            GREENERY
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#17365d",
              marginTop: 2,
            }}
          >
            7.5/10
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 10,
          background: "#e8edf2",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "100%",
            background: "#62b94f",
            borderRadius: 10,
          }}
        />
      </div>

      <div
        style={{
          fontSize: 10,
          color: "#9ca3af",
          marginTop: 6,
          whiteSpace: "nowrap",
        }}
      >
        Clean & green surroundings
      </div>
    </div>

  </div>


  {/* =======================================================
      BOTTOM HIGHLIGHT BAR
  ======================================================= */}

  <div
    className="score-highlight"
    style={{
      marginTop: 10,
      minHeight: 40,
      borderRadius: 10,
      border: "1px solid #dce8f1",
      background:
        "linear-gradient(90deg, #eef7fd 0%, #f8fbfd 100%)",
      display: "flex",
      alignItems: "center",
      padding: "7px 10px",
      gap: 10,
    }}
  >

    {/* ICON */}

    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 7,
        background: "#e1eff9",
        color: "#2877a9",
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        flexShrink: 0,
      }}
    >
      ⚙
    </div>


    {/* TEXT */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flex: 1,
        minWidth: 0,
      }}
    >

      <div
        style={{
          fontSize: 10,
          fontWeight: 800,
          color: "#234a70",
          whiteSpace: "nowrap",
        }}
      >
        Top Rated in Connectivity
      </div>

      <div
        style={{
          width: 1,
          height: 15,
          background: "#d5e1e9",
        }}
      />

      <div
        style={{
          fontSize: 9,
          color: "#8794a3",
          whiteSpace: "nowrap",
        }}
      >
        Located within 500m of Metro.
      </div>

      <div
        className="highlight-spacer"
        style={{
          flex: 1,
        }}
      />

      <div
        className="highlight-location"
        style={{
          fontSize: 9,
          color: "#8794a3",
          whiteSpace: "nowrap",
        }}
      >
        A Well-Connected, Well-Lived. Location.
      </div>

    </div>


    {/* ARROW */}

    <button
      type="button"
      style={{
        width: 27,
        height: 27,
        borderRadius: "50%",
        border: "none",
        background: "#e3f0f8",
        color: "#397ca7",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        flexShrink: 0,
        fontSize: 16,
      }}
    >
      →
    </button>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      /* ==========================================
         BASE
      ========================================== */

      .neighborhood-score-section {
        font-family: inherit;
      }

      .score-card {
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .score-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(23,54,93,.07);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1050px) {

        .score-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }

        .score-header h2 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         SMALL TABLET
      ========================================== */

      @media (max-width: 800px) {

        .score-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .score-header {
          flex-wrap: wrap !important;
        }

        .score-quote {
          display: none !important;
        }

        .overall-score {
          margin-left: auto !important;
        }

        .score-highlight {
          min-height: auto !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .neighborhood-score-section {
          padding: 18px 12px 14px !important;
        }

        .score-header h2 {
          font-size: 22px !important;
        }

        .score-header > div:first-child {
          min-width: 0;
        }

        .overall-score {
          width: 90px !important;
          min-width: 90px !important;
          height: 68px !important;
        }

        .overall-score > div:first-child {
          font-size: 24px !important;
        }

        .score-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 7px !important;
        }

        .score-card {
          padding: 9px 8px 8px !important;
        }

        .score-card > div:first-child {
          gap: 6px !important;
        }

        .score-highlight {
          padding: 8px !important;
        }

        .highlight-location {
          display: none !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 420px) {

        .neighborhood-score-section {
          padding: 16px 10px 12px !important;
        }

        .score-header h2 {
          font-size: 20px !important;
        }

        .score-header > div:first-child > div:first-child span:first-child {
          font-size: 7px !important;
        }

        .overall-score {
          width: 82px !important;
          min-width: 82px !important;
          height: 62px !important;
        }

        .overall-score > div:first-child {
          font-size: 21px !important;
        }

        .score-grid {
          grid-template-columns: 1fr 1fr !important;
        }

        .score-card {
          min-width: 0;
        }

        .score-card > div:first-child {
          align-items: flex-start !important;
        }

        .score-card > div:first-child > div:last-child {
          min-width: 0;
        }

        .score-card > div:first-child > div:last-child > div:first-child {
          font-size: 7px !important;
        }

        .score-card > div:first-child > div:last-child > div:last-child {
          font-size: 10px !important;
        }

        .score-card > div:last-child {
          white-space: normal !important;
        }

        .score-highlight > div:nth-child(2) {
          gap: 7px !important;
        }

        .score-highlight > div:nth-child(2) > div:nth-child(3) {
          display: none !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 350px) {

        .score-grid {
          grid-template-columns: 1fr !important;
        }

        .overall-score {
          width: 78px !important;
          min-width: 78px !important;
        }

        .score-header h2 {
          font-size: 19px !important;
        }

      }

    `}
  </style>

</div>

{/* =========================================================
    FAQ / GET IN TOUCH SECTION
========================================================= */}

<div
  id="faq"
  className="faq-contact-section"
  style={{
    background: "#fff",
    border: "1px solid #eef0f3",
    borderRadius: 16,
    padding: "28px 24px 20px",
    marginTop: 16,
    overflow: "hidden",
  }}
>
  {/* =======================================================
      TOP HEADING
  ======================================================= */}

  <div
    className="faq-top-header"
    style={{
      textAlign: "center",
      position: "relative",
      marginBottom: 24,
    }}
  >
    {/* LABEL */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginBottom: 5,
      }}
    >
      <span
        style={{
          width: 32,
          height: 1,
          background: "#c7a55b",
        }}
      />

      <span
        style={{
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 2.5,
          color: "#a17c3d",
        }}
      >
        CIERGE SUPPORT
      </span>

      <span
        style={{
          width: 32,
          height: 1,
          background: "#c7a55b",
        }}
      />
    </div>


    {/* TITLE */}

    <h2
      style={{
        margin: 0,
        fontSize: 29,
        lineHeight: 1.15,
        fontWeight: 800,
        color: "#17365d",
        letterSpacing: "-0.7px",
      }}
    >
      Everything You{" "}
      <span
        style={{
          color: "#a87529",
        }}
      >
        Need to Know
      </span>
    </h2>


    {/* SUBTITLE */}

    <p
      style={{
        margin: "6px auto 0",
        fontSize: 14,
        lineHeight: 1.5,
        color: "#7c8795",
        maxWidth: 430,
      }}
    >
      Get answers to the most common questions about{" "}
      <strong style={{ color: "#52647a" }}>
        {p.title}
      </strong>
      .
      
      Our team is here to help you at every step of your journey.
    </p>


    {/* =====================================================
        EXPERT CONTACT PILL
    ===================================================== */}

    <div
      className="expert-contact"
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        minWidth: 200,
        background: "#fff",
        border: "1px solid #d8b76e",
        borderRadius: 30,
        padding: "7px 14px 7px 8px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "0 3px 12px rgba(25,55,85,.06)",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#eef5f9",
          color: "#17365d",
          display: "grid",
          placeItems: "center",
          fontSize: 15,
          flexShrink: 0,
        }}
      >
        ☎
      </div>

      <div style={{ textAlign: "left" }}>
        <div
          style={{
            fontSize: 9,
            color: "#7d8997",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          TALK TO OUR EXPERT
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#17365d",
            marginTop: 1,
          }}
        >
          +91 9811750740
        </div>

        <div
          style={{
            fontSize: 9,
            color: "#8b96a3",
            marginTop: 1,
          }}
        >
          AVAILABLE NOW
        </div>
      </div>
    </div>
  </div>


  {/* =======================================================
      FAQ + FORM
  ======================================================= */}

  <div
    className="faq-main-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "1.55fr .85fr",
      gap: 15,
      alignItems: "stretch",
    }}
  >

    {/* =====================================================
        LEFT FAQ
    ===================================================== */}

    <div
      className="faq-list"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >

      {/* FAQ 01 */}

      <details
        open
        className="faq-item"
        style={{
          border: "1px solid #e4e9ee",
          borderRadius: 9,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "28px 1fr 25px",
            alignItems: "center",
            gap: 8,
            padding: "7px 10px",
          }}
        >
          <span
            className="faq-number"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#f8f4e9",
              border: "1px solid #e4cf9f",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#8e6c31",
            }}
          >
            01
          </span>

          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#24466b",
            }}
          >
            What is the exact location of {p.title}?
          </span>

          <span
            className="faq-plus"
            style={{
              width: 25,
              height: 25,
              borderRadius: "50%",
              background: "#f0f3f6",
              color: "#6d7b8b",
              display: "grid",
              placeItems: "center",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            −
          </span>
        </summary>

        <div
          style={{
            padding: "0 42px 10px",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#8a95a2",
          }}
        >
          {p.title} is strategically located at{" "}
          {p.location || "Sector 58, Gurugram"} with excellent
          connectivity to major roads, business hubs, schools,
          hospitals and lifestyle destinations.
        </div>
      </details>


      {/* FAQ 02 */}

      <details
        className="faq-item"
        style={{
          border: "1px solid #e4e9ee",
          borderRadius: 9,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "28px 1fr 25px",
            alignItems: "center",
            gap: 8,
            padding: "7px 10px",
          }}
        >
          <span className="faq-number">
            02
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#24466b",
            }}
          >
            What is the expected possession date for {p.title}?
          </span>

          <span className="faq-plus">
            +
          </span>
        </summary>

        <div className="faq-answer">
          The expected possession timeline may vary depending on
          the project's construction and development schedule.
          Please contact our property expert for the latest update.
        </div>
      </details>


      {/* FAQ 03 */}

      <details
        className="faq-item"
        style={{
          border: "1px solid #e4e9ee",
          borderRadius: 9,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "28px 1fr 25px",
            alignItems: "center",
            gap: 8,
            padding: "7px 10px",
          }}
        >
          <span className="faq-number">
            03
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#24466b",
            }}
          >
            How can I verify the RERA approval status of {p.title}?
          </span>

          <span className="faq-plus">
            +
          </span>
        </summary>

        <div className="faq-answer">
          RERA details and project registration information can
          be verified through the official RERA records. Our
          property team can also assist you with the relevant
          project information.
        </div>
      </details>


      {/* FAQ 04 */}

      <details
        className="faq-item"
        style={{
          border: "1px solid #e4e9ee",
          borderRadius: 9,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "28px 1fr 25px",
            alignItems: "center",
            gap: 8,
            padding: "7px 10px",
          }}
        >
          <span className="faq-number">
            04
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#24466b",
            }}
          >
            Who is the developer of {p.title}?
          </span>

          <span className="faq-plus">
            +
          </span>
        </summary>

        <div className="faq-answer">
          {p.developer || "Premium Developer"} is the developer
          associated with this project.
        </div>
      </details>


      {/* FAQ 05 */}

      <details
        className="faq-item"
        style={{
          border: "1px solid #e4e9ee",
          borderRadius: 9,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "28px 1fr 25px",
            alignItems: "center",
            gap: 8,
            padding: "7px 10px",
          }}
        >
          <span className="faq-number">
            05
          </span>

          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#24466b",
            }}
          >
            What types of BHK units are available in {p.title}?
          </span>

          <span className="faq-plus">
            +
          </span>
        </summary>

        <div className="faq-answer">
          The project offers premium residential configurations
          including {p.bhk || "multiple BHK"} options, subject
          to availability.
        </div>
      </details>


      {/* =====================================================
          BOTTOM FEATURE ITEMS
      ===================================================== */}

      <div
        className="faq-features"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid #e7ebef",
          borderRadius: 9,
          marginTop: 3,
          overflow: "hidden",
          background: "#fff",
        }}
      >

        {/* FEATURE 1 */}

        <div
          style={{
            padding: "7px 8px",
            display: "flex",
            alignItems: "center",
            gap: 7,
            borderRight: "1px solid #e7ebef",
          }}
        >
          <div
            style={{
              width: 27,
              height: 27,
              borderRadius: "50%",
              background: "#f8f3e5",
              color: "#a47b32",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ♧
          </div>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.35,
              color: "#65748a",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#24466b",
                fontSize: 13,
              }}
            >
              Dedicated
            </strong>
            Relationship Manager
          </div>
        </div>


        {/* FEATURE 2 */}

        <div
          style={{
            padding: "7px 8px",
            display: "flex",
            alignItems: "center",
            gap: 7,
            borderRight: "1px solid #e7ebef",
          }}
        >
          <div
            style={{
              width: 27,
              height: 27,
              borderRadius: "50%",
              background: "#f8f3e5",
              color: "#a47b32",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ▤
          </div>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.35,
              color: "#65748a",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#24466b",
                fontSize: 13,
              }}
            >
              Latest Project
            </strong>
            Updates
          </div>
        </div>


        {/* FEATURE 3 */}

        <div
          style={{
            padding: "7px 8px",
            display: "flex",
            alignItems: "center",
            gap: 7,
            borderRight: "1px solid #e7ebef",
          }}
        >
          <div
            style={{
              width: 27,
              height: 27,
              borderRadius: "50%",
              background: "#f8f3e5",
              color: "#a47b32",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ▣
          </div>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.35,
              color: "#65748a",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#24466b",
                fontSize: 13,
              }}
            >
              Site Visit
            </strong>
            Assistance
          </div>
        </div>


        {/* FEATURE 4 */}

        <div
          style={{
            padding: "7px 8px",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <div
            style={{
              width: 27,
              height: 27,
              borderRadius: "50%",
              background: "#f8f3e5",
              color: "#a47b32",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ★
          </div>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.35,
              color: "#65748a",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#24466b",
                fontSize: 13,
              }}
            >
              Exclusive Offers
            </strong>
            & Pricing Details
          </div>
        </div>

      </div>

    </div>


    {/* =====================================================
        RIGHT - GET IN TOUCH
    ===================================================== */}

    <div
      className="contact-form-card"
      style={{
        background:
          "linear-gradient(145deg, #123f69 0%, #0e3154 100%)",
        borderRadius: 10,
        padding: "18px 13px 18px",
        color: "#fff",
        boxShadow: "0 8px 20px rgba(15,55,91,.14)",
      }}
    >

      {/* FORM LABEL */}

      <div
        style={{
          fontSize: 10,
          letterSpacing: 1.8,
          color: "#d2ad5b",
          fontWeight: 800,
          textTransform: "uppercase",
          marginBottom: 3,
        }}
      >
        GET IN TOUCH
      </div>


      {/* FORM TITLE */}

      <h3
        style={{
          margin: 0,
          fontSize: 18,
          lineHeight: 1.15,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Get in Touch{" "}
        <span
          style={{
            color: "#d8ad4e",
          }}
        >
          with Us.
        </span>
      </h3>


      <p
        style={{
          margin: "4px 0 9px",
          fontSize: 14,
          lineHeight: 1.4,
          color: "rgba(255,255,255,.7)",
        }}
      >
        Fill in your details and our team will get back to you shortly.
      </p>


      {/* NAME */}

      <input
        type="text"
        placeholder="  Full Name"
        className="contact-input"
      />


      {/* MOBILE */}

      <input
        type="tel"
        placeholder="  Mobile Number"
        className="contact-input"
      />


      {/* EMAIL */}

      <input
        type="email"
        placeholder="  Email Address (Optional)"
        className="contact-input"
      />


      {/* MESSAGE */}

      <textarea
        placeholder="  Your Message (Optional)"
        className="contact-input contact-textarea"
      />


      {/* CALLBACK BUTTON */}

      <button
        type="button"
        onClick={() => {
          if (typeof setShowEnquiry === "function") {
            setShowEnquiry(true);
          }
        }}
        style={{
          width: "100%",
          border: "none",
          borderRadius: 5,
          background:
            "linear-gradient(90deg, #d69e2e 0%, #c28a20 100%)",
          color: "#fff",
          padding: "12px 10px",
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 0.7,
          cursor: "pointer",
          marginTop: 1,
        }}
      >
        REQUEST CALLBACK →
      </button>


      {/* SAFE TEXT */}

      <div
        style={{
          textAlign: "center",
          fontSize: 9,
          color: "rgba(255,255,255,.55)",
          marginTop: 5,
        }}
      >
        🔒 Your information is safe with us.
      </div>

    </div>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      /* ==========================================
         FAQ DEFAULT
      ========================================== */

      .faq-contact-section {
        font-family: inherit;
      }

      .faq-item summary::-webkit-details-marker {
        display: none;
      }

      .faq-item summary {
        outline: none;
      }

      .faq-item[open] {
        background: #fff;
      }

      .faq-item[open] .faq-plus {
        background: #eef2f6 !important;
        color: #64748b !important;
      }

      .faq-number {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: #f8f4e9;
        border: 1px solid #e4cf9f;
        display: grid;
        place-items: center;
        font-size: 10px;
        font-weight: 800;
        color: #8e6c31;
      }

      .faq-plus {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #f0f3f6;
        color: #6d7b8b;
        display: grid;
        place-items: center;
        font-size: 13px;
        font-weight: 500;
      }

      .faq-answer {
        padding: 0 42px 10px;
        font-size: 11px;
        line-height: 1.6;
        color: #8a95a2;
      }

      .contact-input {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #dce4eb;
        background: #fff;
        color: #243b53;
        border-radius: 4px;
        outline: none;
        font-size: 11px;
        margin-bottom: 10px;
        padding: 4px 7px;
        font-family: inherit;
      }

      .contact-input::placeholder {
        color: #8a96a3;
        opacity: 1;
      }

      .contact-input:focus {
        border-color: #d5a542;
        box-shadow: 0 0 0 2px rgba(213,165,66,.12);
      }

      .contact-textarea {
        height: 42px;
        resize: none;
        padding-top: 7px;
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .faq-main-grid {
          grid-template-columns: 1.35fr .85fr !important;
        }

        .faq-top-header h2 {
          font-size: 25px !important;
        }

        .expert-contact {
          position: static !important;
          margin: 12px auto 0 !important;
          width: fit-content !important;
        }

        .faq-top-header {
          margin-bottom: 18px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 760px) {

        .faq-contact-section {
          padding: 22px 14px 16px !important;
        }

        .faq-top-header h2 {
          font-size: 23px !important;
        }

        .faq-main-grid {
          grid-template-columns: 1fr !important;
          gap: 15px !important;
        }

        .contact-form-card {
          order: 2;
        }

        .faq-list {
          order: 1;
        }

        .expert-contact {
          min-width: 155px !important;
        }

        .faq-features {
          grid-template-columns: repeat(2, 1fr) !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 500px) {

        .faq-contact-section {
          padding: 19px 11px 14px !important;
          border-radius: 13px !important;
        }

        .faq-top-header h2 {
          font-size: 21px !important;
        }

        .faq-top-header p {
          font-size: 8.5px !important;
        }

        .faq-top-header {
          margin-bottom: 15px !important;
        }

        .expert-contact {
          transform: scale(.94);
          transform-origin: center;
        }

        .faq-item summary {
          grid-template-columns: 26px minmax(0,1fr) 23px !important;
          gap: 7px !important;
          padding: 7px 8px !important;
        }

        .faq-item summary > span:nth-child(2) {
          font-size: 8px !important;
          line-height: 1.35 !important;
        }

        .faq-answer {
          padding: 0 38px 9px !important;
          font-size: 6.5px !important;
        }

        .faq-features {
          grid-template-columns: 1fr 1fr !important;
        }

        .faq-features > div {
          border-right: 1px solid #e7ebef !important;
          border-bottom: 1px solid #e7ebef !important;
        }

        .contact-form-card {
          padding: 13px !important;
        }

      }


      /* ==========================================
         VERY SMALL MOBILE
      ========================================== */

      @media (max-width: 360px) {

        .faq-top-header h2 {
          font-size: 19px !important;
        }

        .expert-contact {
          min-width: 145px !important;
        }

        .contact-form-card h3 {
          font-size: 17px !important;
        }

        .faq-features {
          grid-template-columns: 1fr !important;
        }

        .faq-features > div {
          border-right: none !important;
        }

      }

    `}
  </style>

</div>
      {/* =========================================================
    MASTER PLAN
========================================================= */}

<div
  id="masterplan"
  className="masterplan-section"
  style={{
    background: '#fff',
    border: '1px solid #eef0f3',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    boxSizing: 'border-box',
    overflow: 'hidden'
  }}
>

  {/* ===== PREMIUM HEADING ===== */}

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5
    }}
  >
    <span
      style={{
        width: 30,
        height: 1,
        background: '#c5a15a',
        display: 'block'
      }}
    />

    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 2,
        color: '#a17b39'
      }}
    >
      PROJECT PLANNING
    </span>
  </div>


  {/* TITLE */}

  <h2
    style={{
      margin: 0,
      fontSize: 29,
      lineHeight: 1.15,
      fontWeight: 800,
      color: '#173b63',
      letterSpacing: '-0.6px'
    }}
  >
    Master Plan
  </h2>


  {/* BLUE UNDERLINE */}

  <div
    style={{
      width: 48,
      height: 3,
      background: '#28658e',
      borderRadius: 3,
      marginTop: 9
    }}
  />


  {/* DESCRIPTION */}

  <p
    style={{
      fontSize: 14,
      color: '#6b7280',
      marginTop: 10,
      marginBottom: 0
    }}
  >
    Thoughtfully planned low-density layout maximizing views,
    ventilation and privacy.
  </p>


  {/* =======================================================
      MASTER PLAN IMAGE
  ======================================================= */}

  <div
    className="masterplan-image-box"
    style={{
      height: 320,
      background: '#f7fafc',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      marginTop: 14,
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }}
  >

    {/* IMAGE */}

    <img
      src={p.image}
      alt="master plan"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.18,
        display: 'block'
      }}
    />


    {/* OVERLAY */}

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.72))'
      }}
    />


    {/* CENTER CONTENT */}

    <div
      className="masterplan-content"
      style={{
        position: 'absolute',
        zIndex: 2,
        textAlign: 'center',
        padding: 20,
        maxWidth: 500
      }}
    >

      {/* ICON */}

      <div
        style={{
          width: 48,
          height: 48,
          margin: '0 auto 10px',
          borderRadius: '50%',
          background: '#fff',
          border: '1px solid #dce7ee',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 5px 15px rgba(20,55,85,.08)'
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#28658e"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3h18v18H3z" />
          <path d="M3 9h18" />
          <path d="M9 3v18" />
          <path d="M15 9v12" />
        </svg>
      </div>


      {/* TITLE */}

      <div
        style={{
          fontWeight: 800,
          fontSize: 18,
          color: '#173b63'
        }}
      >
        Master Plan – {p.title}
      </div>


      {/* DETAILS */}

      <div
        style={{
          fontSize: 11,
          color: '#6b7280',
          marginTop: 5
        }}
      >
        {p.landArea || '3.42 Acres'} • {towers} • Ultra-Luxury Planning
      </div>


      {/* BUTTON */}

      <button
        type="button"
        onClick={() => setShowEnquiry(true)}
        style={{
          marginTop: 13,
          background:
            'linear-gradient(90deg, #b9852e, #d4a94d)',
          color: '#fff',
          border: 'none',
          padding: '9px 18px',
          borderRadius: 20,
          fontWeight: 800,
          fontSize: 10,
          cursor: 'pointer',
          boxShadow: '0 5px 14px rgba(180,130,45,.18)'
        }}
      >
        Download Master Plan →
      </button>

    </div>

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      .masterplan-section {
        width: 100%;
        box-sizing: border-box;
      }

      .masterplan-image-box {
        transition: box-shadow .25s ease;
      }

      .masterplan-image-box:hover {
        box-shadow: 0 8px 24px rgba(20,55,85,.08);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 800px) {

        .masterplan-section h2 {
          font-size: 25px !important;
        }

        .masterplan-image-box {
          height: 280px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 550px) {

        .masterplan-section {
          padding: 18px 14px !important;
          border-radius: 14px !important;
        }

        .masterplan-section h2 {
          font-size: 23px !important;
        }

        .masterplan-image-box {
          height: 250px !important;
          border-radius: 12px !important;
        }

        .masterplan-content {
          padding: 15px !important;
        }

        .masterplan-content > div:nth-child(2) {
          font-size: 15px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 380px) {

        .masterplan-section {
          padding: 16px 12px !important;
        }

        .masterplan-section h2 {
          font-size: 21px !important;
        }

        .masterplan-image-box {
          height: 220px !important;
        }

        .masterplan-content > div:nth-child(2) {
          font-size: 14px !important;
        }

        .masterplan-content > div:nth-child(3) {
          font-size: 9px !important;
        }

      }

    `}
  </style>

</div>

        {/* Developer */}
        {/* <div id="developer" style={{ background: '#fff', border: '1px solid #eef0f3', borderRadius: 16, padding: 20, marginTop: 16 }}>
          <h2 style={{ fontWeight: 800, fontSize: 29, color: '#111' }}>About Developer</h2>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 12, background: '#f9fafb', padding: 14, borderRadius: 12, border: '1px solid #eee' }}>
            <img src={logo} alt={p.developer} style={{ height: 40, background: '#fff', padding: '6px 10px', borderRadius: 6, border: '1px solid #eee' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{p.developer || 'Premium Developer'}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>Trusted developer with 15+ years, 20+ delivered projects, 10K+ happy families. RERA registered & on-time delivery.</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 12, textAlign: 'center' }} className="dev-stats">
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: brandColor }}>25+</div>
              <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Years Experience</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: brandColor }}>50+</div>
              <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Projects Delivered</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: brandColor }}>10K+</div>
              <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600 }}>Happy Families</div>
            </div>
          </div>
        </div> */}
<DeveloperSection /> 
        {/* =========================================================
    RELATED / SIMILAR PROJECTS
========================================================= */}

<div
  id="related"
  className="related-section"
  style={{
    marginTop: 20,
    paddingBottom: 20,
    boxSizing: 'border-box',
  }}
>

  {/* =======================================================
      PREMIUM HEADING
  ======================================================= */}

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5,
    }}
  >
    <span
      style={{
        width: 30,
        height: 1,
        background: '#c5a15a',
        display: 'block',
      }}
    />

    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 2,
        color: '#a17b39',
      }}
    >
      EXPLORE MORE
    </span>
  </div>


  {/* TITLE */}

  <h3
    style={{
      margin: 0,
      fontWeight: 800,
      fontSize: 29,
      lineHeight: 1.15,
      color: '#173b63',
      letterSpacing: '-0.6px',
    }}
  >
    Similar{" "}
    <span style={{ color: '#a87529' }}>
      Projects
    </span>
  </h3>


  {/* BLUE UNDERLINE */}

  <div
    style={{
      width: 48,
      height: 3,
      background: '#28658e',
      borderRadius: 3,
      marginTop: 9,
    }}
  />


  {/* =======================================================
      RELATED PROJECTS GRID
  ======================================================= */}

  <div
    className="related-grid"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      marginTop: 16,
    }}
  >

    {related.map(r => (

      <Link
        key={r.id}
        to={`/property/${r.id}`}
        className="related-card hw-similar-card"
        style={{
          background: '#fff',
          border: '1px solid #e4eaf0',
          borderRadius: 13,
          overflow: 'hidden',
          textDecoration: 'none',
          display: 'block',
          boxSizing: 'border-box',
        }}
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="related-image hw-similar-image"
          style={{
            width: '100%',
            aspectRatio: '1.45',
            overflow: 'hidden',
            background: '#f2f5f7',
          }}
        >
          <img
            src={r.image}
            alt={r.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          style={{
            padding: '11px 11px 12px',
          }}
        >

          {/* PROJECT TITLE */}

          <div
            style={{
              fontWeight: 800,
              fontSize: 12,
              lineHeight: 1.3,
              color: '#173b63',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {r.title}
          </div>


          {/* PRICE */}

          <div
            style={{
              fontWeight: 800,
              fontSize: 11,
              marginTop: 5,
              color: brandColor,
            }}
          >
            {r.priceRange}
          </div>


          {/* LOCATION */}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 9.5,
              color: '#6b7280',
              marginTop: 4,
            }}
          >

            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7d8b98"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            {r.location.split(',')[0]}

          </div>

        </div>

      </Link>

    ))}

  </div>


  {/* =======================================================
      RESPONSIVE CSS
  ======================================================= */}

  <style>
    {`

      .related-section {
        width: 100%;
        box-sizing: border-box;
      }

      .related-card {
        transition:
          transform .25s ease,
          box-shadow .25s ease,
          border-color .25s ease;
      }

      .related-card:hover {
        transform: translateY(-3px);
        border-color: #d5e1e9 !important;
        box-shadow: 0 10px 24px rgba(20,55,85,.09);
      }

      .related-image img {
        transition: transform .4s ease;
      }

      .related-card:hover .related-image img {
        transform: scale(1.04);
      }


      /* ==========================================
         TABLET
      ========================================== */

      @media (max-width: 1000px) {

        .related-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 12px !important;
        }

        .related-section h3 {
          font-size: 25px !important;
        }

      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 760px) {

        .related-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 10px !important;
        }

        .related-section h3 {
          font-size: 23px !important;
        }

        .related-card > div:last-child {
          padding: 9px !important;
        }

      }


      /* ==========================================
         SMALL MOBILE
      ========================================== */

      @media (max-width: 450px) {

        .related-section {
          padding-bottom: 70px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }

        .related-section h3 {
          font-size: 21px !important;
        }

        .related-card {
          border-radius: 10px !important;
        }

        .related-card > div:last-child {
          padding: 8px !important;
        }

        .related-card > div:last-child > div:first-child {
          font-size: 10px !important;
        }

        .related-card > div:last-child > div:nth-child(2) {
          font-size: 9.5px !important;
        }

        .related-card > div:last-child > div:nth-child(3) {
          font-size: 8.5px !important;
        }

      }

    `}
  </style>

</div>
      </div>
{/* =========================================================
    DISCLAIMER + FOOTER
========================================================= */}

<div
  className="property-footer-wrapper"
  style={{
    width: "calc(100% - 40px)",
    margin: "16px 20px 70px",
    boxSizing: "border-box",
  }}
>

  {/* =======================================================
      DISCLAIMER
  ======================================================= */}

  <div
    id="disclaimer"
    className="disclaimer-section"
    style={{
      background: "#f8fbff",
      border: "1px solid #dce8f4",
      borderRadius: 14,
      padding: "18px 22px",
      width: "100%",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
    }}
  >

    {/* Background Corner Shape */}

    <div
      style={{
        position: "absolute",
        right: -20,
        top: -40,
        width: 120,
        height: 150,
        background:
          "linear-gradient(135deg, transparent 28%, #edf5ff 28%, #e2efff 72%, transparent 72%)",
        opacity: 0.9,
        pointerEvents: "none",
      }}
    />

    {/* Disclaimer Content */}

    <div
      className="disclaimer-inner"
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: 18,
        boxSizing: "border-box",
      }}
    >

      {/* ===================================================
          LEFT DISCLAIMER
      =================================================== */}

      <div
        className="disclaimer-left"
        style={{
          width: 115,
          minWidth: 115,
          paddingRight: 18,
          borderRight: "1px solid #d9e3ed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >

        {/* Icon */}

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#e4f1ff",
            display: "grid",
            placeItems: "center",
            color: "#397caf",
            marginBottom: 7,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h6" />
          </svg>
        </div>


        {/* Title */}

        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 1,
            color: "#285578",
            textAlign: "center",
          }}
        >
          DISCLAIMER
        </div>


        {/* Blue Line */}

        <div
          style={{
            width: 27,
            height: 2,
            borderRadius: 5,
            background: "#3d8bc7",
            marginTop: 6,
          }}
        />

      </div>


      {/* ===================================================
          DISCLAIMER TEXT
      =================================================== */}

      <div
        className="disclaimer-content"
        style={{
          flex: 1,
          minWidth: 0,
          paddingRight: 25,
          boxSizing: "border-box",
        }}
      >

        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.65,
            color: "#657386",
          }}
        >
          The information provided on this project page is shared
          only for general awareness and user understanding. It does
          not represent any offer, commitment, warranty, or endorsement.
          Project details are gathered from publicly available sources
          such as State RERA websites, official builder portals, and
          documents shared by authorized channel partners. The platform
          presents this information in a simplified format to help users
          with research and comparison.
        </p>

        <p
          style={{
            margin: "4px 0 0",
            fontSize: 14,
            lineHeight: 1.65,
            color: "#657386",
          }}
        >
          It does not own or control the content. Buyers are strongly
          advised to verify all project details, approvals, pricing,
          and terms directly with the builder or promoter before making
          any purchase decision.
        </p>

      </div>

    </div>

  </div>


  {/* =======================================================
      FOOTER
  ======================================================= */}

  <footer
    className="property-footer"
    style={{
      width: "100%",
      background: "#fff",
      borderTop: "1px solid #e8edf2",
      padding: "13px 4px 12px",
      boxSizing: "border-box",
    }}
  >

    <div
      className="footer-inner"
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 20,
        boxSizing: "border-box",
      }}
    >

      {/* =================================================
          COPYRIGHT
      ================================================= */}

      <div
        className="footer-copyright"
        style={{
          fontSize: 10,
          color: "#8b96a3",
          letterSpacing: 1,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        © 2026. M3M BRABUS RESIDENCES
      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav
        className="footer-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 21,
        }}
      >

        <a href="#home">
          HOME
        </a>

        <a href="#privacy">
          PRIVACY POLICY
        </a>

        <a href="#terms">
          TERMS & CONDITIONS
        </a>

        <a href="#disclaimer">
          DISCLAIMER
        </a>

        <a href="#blog">
          BLOG
        </a>

      </nav>


      {/* =================================================
          SOCIAL ICONS
      ================================================= */}

      <div
        className="footer-social"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 8,
        }}
      >

        {/* Facebook */}

        <a
          href="#"
          aria-label="Facebook"
          className="social-icon"
        >
          f
        </a>


        {/* Instagram */}

        <a
          href="#"
          aria-label="Instagram"
          className="social-icon"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>


        {/* LinkedIn */}

        <a
          href="#"
          aria-label="LinkedIn"
          className="social-icon"
        >
          in
        </a>


        {/* YouTube */}

        <a
          href="#"
          aria-label="YouTube"
          className="social-icon"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
          </svg>
        </a>

      </div>

    </div>


    {/* ===================================================
        FOOTER CSS
    =================================================== */}

    <style>
      {`

        /* ==========================================
           MAIN WRAPPER
        ========================================== */

        .property-footer-wrapper {
          width: calc(100% - 40px) !important;
          margin-left: 20px !important;
          margin-right: 20px !important;
          margin-top: 16px !important;
          box-sizing: border-box !important;
        }


        /* ==========================================
           DISCLAIMER
        ========================================== */

        .property-footer-wrapper .disclaimer-section {
          width: 100% !important;
          max-width:96%;
          margin-left:20px;
          box-sizing: border-box !important;
        }


        /* ==========================================
           FOOTER
        ========================================== */

        .property-footer-wrapper .property-footer {
          width: 100% !important;
           max-width:96%;
          margin-left:20px;
          box-sizing: border-box !important;
        }


        /* ==========================================
           NAVIGATION
        ========================================== */

        .footer-nav a {
          text-decoration: none;
          color: #52677d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .7px;
          white-space: nowrap;
          transition: color .2s ease;
        }

        .footer-nav a:hover {
          color: #b07c25;
        }


        /* ==========================================
           SOCIAL ICON
        ========================================== */

        .social-icon {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #eef4f8;
          color: #345b7b;
          display: grid;
          place-items: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition:
            background .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .social-icon:hover {
          background: #dfeaf2;
          color: #173f62;
          transform: translateY(-1px);
        }


        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .property-footer-wrapper {
            width: calc(100% - 32px) !important;
            margin-left: 16px !important;
            margin-right: 16px !important;
          }

          .footer-inner {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .footer-copyright {
            text-align: center;
          }

          .footer-nav {
            flex-wrap: wrap !important;
            gap: 14px !important;
          }

          .footer-social {
            justify-content: center !important;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .property-footer-wrapper {
            width: calc(100% - 24px) !important;
            margin-left: 12px !important;
            margin-right: 12px !important;
            margin-top: 16px !important;
          }

          .disclaimer-section {
            padding: 16px 14px !important;
            border-radius: 14px !important;
            
          }

          .disclaimer-inner {
            gap: 12px !important;
          }

          .disclaimer-left {
            width: 80px !important;
            min-width: 80px !important;
            padding-right: 10px !important;
          }

          .disclaimer-content {
            padding-right: 0 !important;
          }

          .disclaimer-content p {
            font-size: 8px !important;
            line-height: 1.6 !important;
          }

          .property-footer {
            padding: 14px 4px !important;
          }

          .footer-nav {
            gap: 11px !important;
          }

          .footer-nav a {
            font-size: 6.5px !important;
          }

          .footer-copyright {
            font-size: 6.5px !important;
          }

        }


        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 430px) {

          .property-footer-wrapper {
            width: calc(100% - 20px) !important;
            margin-left: 10px !important;
            margin-right: 10px !important;
          }

          .disclaimer-section {
            padding: 14px 11px !important;
          }

          .disclaimer-left {
            width: 70px !important;
            min-width: 70px !important;
            padding-right: 8px !important;
          }

          .disclaimer-left > div:first-child {
            width: 32px !important;
            height: 32px !important;
          }

          .disclaimer-left > div:nth-child(2) {
            font-size: 7px !important;
          }

          .disclaimer-content p {
            font-size: 7.5px !important;
          }

          .footer-nav {
            gap: 8px 11px !important;
          }

          .footer-nav a {
            font-size: 6px !important;
          }

          .footer-copyright {
            font-size: 6px !important;
          }

          .social-icon {
            width: 21px !important;
            height: 21px !important;
          }

        }


        /* ==========================================
           VERY SMALL MOBILE
        ========================================== */

        @media (max-width: 350px) {

          .property-footer-wrapper {
            width: calc(100% - 16px) !important;
            margin-left: 8px !important;
            margin-right: 8px !important;
          }

          .disclaimer-inner {
            gap: 8px !important;
          }

          .disclaimer-left {
            width: 62px !important;
            min-width: 62px !important;
          }

          .disclaimer-content p {
            font-size: 7px !important;
          }

          .footer-nav {
            gap: 7px !important;
          }

        }

      `}
    </style>

  </footer>

</div>
      <style>{`

      /* =========================================================
         HOMWISOR TYPOGRAPHY + PROPERTY DETAIL RESPONSIVE FIX
      ========================================================= */
      .property-detail-page,
      .property-detail-page * {
        font-family: "Manrope", Arial, sans-serif;
        box-sizing: border-box;
      }

      .property-detail-page {
        overflow-x: hidden;
      }

      /* Desktop typography - larger and clearer */
      /* =========================================================
         DESKTOP HERO - CLEAN 2 COLUMN LAYOUT
         Left = property information
         Right = enquiry form
      ========================================================= */
      .property-hero {
        min-height: 520px !important;
      }

      .property-hero-inner {
        width: 100% !important;
        max-width: 1280px !important;
        min-height: 520px !important;
        grid-template-columns: minmax(0, 1fr) 400px !important;
        gap: 42px !important;
        padding: 48px 24px !important;
      }

      .property-hero-inner > div:first-child {
        width: 100%;
        max-width: 570px;
        justify-self: start;
        position: relative;
        z-index: 2;
      }

      .property-hero-inner > div:first-child > div:first-child {
        min-width: 0 !important;
        width: min(100%, 500px) !important;
        padding: 18px 20px !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:first-child {
        font-size: 12px !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:nth-child(2) {
        font-size: 28px !important;
        line-height: 1.15 !important;
      }

      .property-hero-inner > div:first-child > div:first-child > div:nth-child(3) {
        font-size: 14px !important;
      }

      .property-hero-inner > div:first-child > div:nth-child(2) {
        width: min(100%, 500px) !important;
        max-width: 500px !important;
      }

      .property-hero .hero-number {
        left: 66% !important;
        top: 50% !important;
        font-size: 420px !important;
        letter-spacing: -18px !important;
        z-index: 0 !important;
      }

      .property-hero-inner > div:first-child > div:nth-child(2) > div {
        font-size: 14px !important;
      }

      .property-hero-form {
        width: 100%;
        max-width: 440px;
        justify-self: end;
      }

      .property-hero-form h3 {
        font-size: 21px !important;
      }

      .property-hero-form > p {
        font-size: 11px !important;
      }

      .property-hero-form label {
        font-size: 11px !important;
      }

      .property-hero-form input,
      .property-hero-form select {
        font-size: 13px !important;
        height: 44px !important;
      }

      .property-hero-form button {
        font-size: 13px !important;
        min-height: 44px;
      }

      /* Similar Projects - Home page visual language */
      .related-section .hw-similar-card {
        border: 1px solid #e2e2e2 !important;
        border-radius: 9px !important;
        background: #fff !important;
        box-shadow: 0 2px 9px rgba(0,0,0,.045) !important;
        overflow: hidden !important;
      }

      .related-section .hw-similar-card:hover {
        transform: translateY(-3px);
        border-color: rgba(212,175,55,.55) !important;
        box-shadow: 0 10px 25px rgba(0,0,0,.10) !important;
      }

      .related-section .hw-similar-image {
        aspect-ratio: auto !important;
        height: 165px !important;
        position: relative;
      }

      .related-section .hw-similar-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block;
      }

      .related-section .hw-similar-card > div:last-child {
        padding: 11px 10px 10px !important;
      }

      .related-section .hw-similar-card > div:last-child > div:first-child {
        color: #111827 !important;
        font-size: 15px !important;
        line-height: 1.35 !important;
        font-weight: 800 !important;
      }

      .related-section .hw-similar-card > div:last-child > div:nth-child(2) {
        color: #b48722 !important;
        font-size: 15px !important;
        font-weight: 900 !important;
      }

      .related-section .hw-similar-card > div:last-child > div:nth-child(3) {
        color: #707070 !important;
        font-size: 12px !important;
      }

      @media (max-width: 760px) {
        .property-hero {
          min-height: auto !important;
        }

        .property-hero-inner {
          min-height: auto !important;
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }

        .property-hero-inner > div:first-child {
          max-width: none !important;
        }

        .property-hero-form {
          max-width: 520px !important;
          justify-self: center !important;
        }

        .hero-number {
          left: 50% !important;
          font-size: 180px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }

      @media (min-width: 761px) and (max-width: 1050px) {
        .property-hero-inner {
          grid-template-columns: minmax(0, 1fr) 350px !important;
          gap: 24px !important;
          padding: 38px 20px !important;
        }

        .property-hero-inner > div:first-child {
          max-width: 520px !important;
        }

        .property-hero-inner > div:first-child > div:first-child {
          width: 100% !important;
        }

        .property-hero-inner > div:first-child > div:nth-child(2) {
          width: 100% !important;
        }

        .property-hero-form {
          max-width: 350px !important;
        }

        .property-hero .hero-number {
          left: 62% !important;
          font-size: 300px !important;
        }
      }

      @media (max-width: 700px) {
        .property-hero-inner {
          padding: 24px 12px !important;
        }

        .property-hero-inner > div:first-child > div:first-child {
          min-width: 0 !important;
          width: 100% !important;
          padding: 14px 15px !important;
        }

        .property-hero-inner > div:first-child > div:first-child > div:nth-child(2) {
          font-size: 21px !important;
        }

        .property-hero-inner > div:first-child > div:nth-child(2) {
          max-width: none !important;
          width: 100% !important;
        }

        .property-hero-form {
          max-width: none !important;
          padding: 16px !important;
          border-radius: 13px !important;
        }

        .property-hero-form h3 {
          font-size: 18px !important;
        }

        .related-grid {
          gap: 9px !important;
        }

        .related-section .hw-similar-image {
          height: 135px !important;
        }

        .related-section .hw-similar-card > div:last-child {
          padding: 9px 8px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:first-child {
          font-size: 13px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:nth-child(2) {
          font-size: 14px !important;
        }

        .related-section .hw-similar-card > div:last-child > div:nth-child(3) {
          font-size: 11px !important;
        }
      }

      @media (max-width: 480px) {
        .hero-number {
          font-size: 100px !important;
        }

        .property-hero-inner {
          padding: 20px 10px !important;
        }

        .property-hero-form {
          padding: 14px !important;
        }

        .related-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 8px !important;
        }

        .related-section .hw-similar-image {
          height: 120px !important;
        }
      }
      `}</style>

      {/* Bottom Sticky Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 45, background: '#fff', borderTop: '1px solid #e5e7eb', boxShadow: '0 -8px 30px rgba(0,0,0,.08)', padding: '10px 16px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <img src={p.image} alt={p.title} style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', border: '1px solid #eee', flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#111' }}>{p.title}</div>
              <div style={{ fontWeight: 700, fontSize: 12, color: brandColor }}>{p.priceRange || p.price}* Onwards</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: 24, fontWeight: 700, fontSize: 13, color: '#374151', cursor: 'pointer' }} className="hide-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Brochure
            </button>
            <button onClick={() => setShowEnquiry(true)} style={{ display: 'flex', alignItems: 'center', gap: 7, background: brandColor, color: '#fff', padding: '10px 20px', borderRadius: 24, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              ENQUIRE NOW
            </button>
            <a href="https://wa.me/919811750130" target="_blank" rel="noreferrer" style={{ width: 44, height: 44, borderRadius: '50%', background: '#25D366', display: 'grid', placeItems: 'center', boxShadow: '0 4px 14px rgba(37,211,102,.35)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', display: 'grid', placeItems: 'center', zIndex: 60, padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 20, width: '100%', maxWidth: 420, position: 'relative' }}>
            <button onClick={() => setShowEnquiry(false)} style={{ position: 'absolute', top: 12, right: 12, width: 30, height: 30, borderRadius: '50%', background: '#f3f4f6', border: 'none', cursor: 'pointer' }}>✕</button>
            <h3 style={{ fontWeight: 800, fontSize: 18}}>Enquire About {p.title}</h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>Get best deals & site visit – expert callback in 30 mins</p>
            {sent && <div style={{ marginTop: 12, background: '#ecfdf5', color: '#065f46', padding: '10px 12px', borderRadius: 8, fontWeight: 600, fontSize: 13, border: '1px solid #a7f3d0' }}>✓ Enquiry sent! Our team will contact you shortly.</div>}
            <form onSubmit={handleEnquiry} style={{ display: 'grid', gap: 10, marginTop: 14 }}>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" style={{ height: 42, borderRadius: 10, border: '1px solid #e5e7eb', padding: '0 12px', fontSize: 13, outline: 'none' }} />
              <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" style={{ height: 42, borderRadius: 10, border: '1px solid #e5e7eb', padding: '0 12px', fontSize: 13, outline: 'none' }} />
              <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" style={{ height: 42, borderRadius: 10, border: '1px solid #e5e7eb', padding: '0 12px', fontSize: 13, outline: 'none' }} />
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message" rows={2} style={{ borderRadius: 10, border: '1px solid #e5e7eb', padding: '10px 12px', fontSize: 13, outline: 'none', resize: 'none' }} />
              <button type="submit" style={{ height: 44, background: brandColor, color: '#fff', border: 'none', borderRadius: 10, fontWeight: 800, cursor: 'pointer' }}>Send Enquiry</button>
            </form>
          </div>
        </div>
      )}

      
      <style>{`
        @media(max-width: 960px){
          .hero-number{ font-size:180px !important; left:50% !important; }
          .highlights-grid{ grid-template-columns: 1fr !important; }
          .stats4{ grid-template-columns: repeat(2,1fr) !important; }
          .amenities-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .gallery-grid{ grid-template-columns: 1fr 1fr !important; }
          .loc-grid{ grid-template-columns: 1fr !important; }
          .related-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .dev-nav{ display:none !important; }
          .hide-mobile{ display:none !important; }
        }
        @media(max-width: 640px){
          .gallery-grid{ grid-template-columns: 1fr !important; }
          .related-grid{ grid-template-columns: 1fr !important; }
          .hide-small{ display:none !important; }
        }
      `}</style>

      {/* Final responsive overrides */}
      <style>{`
        .property-detail-page .related-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }

        @media (max-width: 900px) {
          .property-detail-page .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          .property-detail-page .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 8px !important;
          }

          .property-detail-page .related-card {
            min-width: 0 !important;
          }

          .property-detail-page .related-image {
            height: 120px !important;
            aspect-ratio: auto !important;
          }
        }

        @media (max-width: 380px) {
          .property-detail-page .related-grid {
            gap: 7px !important;
          }

          .property-detail-page .related-image {
            height: 105px !important;
          }
        }
      `}</style>
    </div>
  )
}
