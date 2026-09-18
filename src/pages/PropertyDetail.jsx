import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../utils/api'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PropertyDetail(){
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [related, setRelated] = useState([])
  const [form, setForm] = useState({name:'', phone:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [heroForm, setHeroForm] = useState({name:'', phone:''})
  const [heroSent, setHeroSent] = useState(false)

  useEffect(()=>{
    API.get(`/properties/${id}`).then(r=> setP(r.data)).catch(()=>{})
    API.get('/properties?limit=4').then(r=> setRelated(r.data.slice(0,4)))
    window.scrollTo(0,0)
  },[id])

  // Scroll spy for detail nav
  useEffect(()=>{
    if(!p) return
    const sections = ['overview','price','highlights','amenities','gallery','location','masterplan','developer']
    const observers = []
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setActiveTab(entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 })
    sections.forEach(s=>{
      const el = document.getElementById(s)
      if(el) observer.observe(el)
    })
    return ()=> observer.disconnect()
  },[p])

  const handleEnquiry = async (e)=>{
    e.preventDefault()
    try{
      await API.post('/enquiries', {...form, property: p.title})
      setSent(true)
      setTimeout(()=> setSent(false), 3000)
      setForm({name:'', phone:'', email:'', message:''})
      setShowEnquiry(false)
    }catch{}
  }

  const handleHeroSubmit = async (e)=>{
    e.preventDefault()
    try{
      await API.post('/enquiries', {name: heroForm.name, phone: heroForm.phone, property: p.title + ' - Hero Form', message: 'Hero form lead'})
      setHeroSent(true)
      setTimeout(()=> setHeroSent(false), 3000)
      setHeroForm({name:'', phone:''})
    }catch{}
  }

  const scrollTo = (sid)=>{
    document.getElementById(sid)?.scrollIntoView({behavior:'smooth', block:'start'})
    setActiveTab(sid)
  }

  if(!p) return <div style={{minHeight:'60vh', display:'grid', placeItems:'center'}}><div style={{width:36,height:36, border:'3px solid #eee', borderTopColor:'#d8232a', borderRadius:'50%', animation:'spin 1s linear infinite'}}/><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>

  const brandColor = p.brandColor || "#1e3a5f"
  const logo = p.logo || `https://via.placeholder.com/200x80/${brandColor.replace('#','')}/ffffff?text=${encodeURIComponent((p.developer||'PROPERTY').slice(0,6))}`
  const heroNumber = (p.title.match(/\d+/)?.[0]) || p.title.slice(0,2).toUpperCase()
  const possession = p.possession || "Dec 2032"
  const landArea = p.landArea || "3.42 Acres"
  const towers = p.towers || "3 Tower – 110 Unit"
  const propertyTypeDetail = p.propertyTypeDetail || p.type || "Residential Flats"
  const startingFrom = p.price || "₹20 Cr*"

  return (
    <div style={{background:'#f8f9fb'}}>
      <Header/>

      {/* Developer Navbar - sticky, updates on scroll */}
      <div style={{background: brandColor, color:'#fff', position:'sticky', top:64, zIndex:40, borderTop:'3px solid #ff8c00', boxShadow:'0 4px 20px rgba(0,0,0,.15)', transition:'all .2s'}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64, gap:12}}>
          <div style={{display:'flex', alignItems:'center', gap:14, minWidth:0}}>
            <div style={{background:'#fff', padding:'6px 14px', borderRadius:4, display:'flex', alignItems:'center', gap:8, height:42, flexShrink:0}}>
              <img src={logo} alt={p.developer || p.title} style={{height:28, maxWidth:110, objectFit:'contain'}} onError={(e)=> e.target.style.display='none'} />
            </div>
            <nav style={{display:'flex', alignItems:'center', gap:2, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', borderRadius:24, padding:4, overflowX:'auto'}} className="dev-nav scrollbar-hide">
              {[
                {id:'overview', label:'OVERVIEW'},
                {id:'price', label:'PRICE'},
                {id:'highlights', label:'HIGHLIGHTS'},
                {id:'amenities', label:'AMENITIES'},
                {id:'gallery', label:'GALLERY'},
                {id:'location', label:'LOCATION'},
                {id:'masterplan', label:'MASTER PLAN'},
                {id:'developer', label:'DEVELOPER'}
              ].map(tab=>(
                <button key={tab.id} onClick={()=> scrollTo(tab.id)} style={{
                  padding:'7px 12px', borderRadius:20, border:'none', fontWeight:700, fontSize:10.5, letterSpacing:.3, cursor:'pointer', whiteSpace:'nowrap',
                  background: activeTab===tab.id? '#fff':'transparent',
                  color: activeTab===tab.id? brandColor:'#fff',
                  opacity: activeTab===tab.id?1:.85, transition:'all .2s'
                }}>{tab.label}</button>
              ))}
            </nav>
          </div>

          <div style={{display:'flex', alignItems:'center', gap:10, flexShrink:0}}>
            <a href="https://wa.me/919811750130" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center', gap:7, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.25)', padding:'8px 14px', borderRadius:24, fontWeight:700, fontSize:12, color:'#fff', whiteSpace:'nowrap'}} className="hide-mobile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"/></svg>
              WHATSAPP
            </a>
            <a href="tel:9811750130" style={{display:'flex', alignItems:'center', gap:6, color:'#fff', fontWeight:800, fontSize:15, whiteSpace:'nowrap'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" className="hide-mobile"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"/></svg>
              9811750130
            </a>
          </div>
        </div>
      </div>

      {/* HERO - Black background with large number, as in Experion One 42 SC */}
      <div style={{background:'#0a0a0a', color:'#fff', position:'relative', overflow:'hidden', minHeight:460}}>
        {/* large watermark number */}
        <div style={{position:'absolute', left:'45%', top:'50%', transform:'translate(-50%,-50%)', fontSize:380, fontWeight:900, color:'rgba(210,140,90,.95)', lineHeight:1, opacity:.95, pointerEvents:'none', fontFamily:"'Inter', sans-serif", letterSpacing:-12, userSelect:'none'}} className="hero-number">{heroNumber}</div>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.2) 45%, rgba(0,0,0,.5) 100%)'}}></div>

        <div className="container" style={{position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'1.2fr 380px', gap:24, alignItems:'center', padding:'36px 16px'}}>
          {/* Left info cards */}
          <div>
            <div style={{background:'rgba(0,0,0,.55)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,.15)', borderRadius:12, padding:'14px 16px', display:'inline-block', minWidth:340}}>
              <div style={{fontSize:10, letterSpacing:1.5, color:'#38bdf8', fontWeight:700}}>RESIDENTIAL FLATS</div>
              <div style={{fontWeight:800, fontSize:22, marginTop:4, letterSpacing:-0.5}}>{p.title.toUpperCase()}</div>
              <div style={{fontSize:13, opacity:.9, marginTop:4, fontWeight:500}}>{p.location}</div>
            </div>

            <div style={{background:'rgba(0,0,0,.6)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,.12)', borderRadius:12, padding:14, marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, maxWidth:380}}>
              <div>
                <div style={{fontSize:10, letterSpacing:.6, color:'rgba(255,255,255,.6)', fontWeight:700}}>PROPERTY TYPE</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:4}}>{propertyTypeDetail}</div>
              </div>
              <div>
                <div style={{fontSize:10, letterSpacing:.6, color:'rgba(255,255,255,.6)', fontWeight:700}}>POSSESSION</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:4}}>{possession}</div>
              </div>
              <div>
                <div style={{fontSize:10, letterSpacing:.6, color:'rgba(255,255,255,.6)', fontWeight:700}}>ABOUT PROJECT</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:4}}>{towers}</div>
              </div>
              <div>
                <div style={{fontSize:10, letterSpacing:.6, color:'rgba(255,255,255,.6)', fontWeight:700}}>LAND AREA</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:4}}>{landArea}</div>
              </div>
              <div style={{gridColumn:'span 2', borderTop:'1px solid rgba(255,255,255,.1)', paddingTop:10, marginTop:4}}>
                <div style={{fontSize:10, letterSpacing:.6, color:'#38bdf8', fontWeight:700}}>STARTING FROM</div>
                <div style={{fontWeight:800, fontSize:16, marginTop:4, color:'#38bdf8'}}>{startingFrom}</div>
              </div>
            </div>
          </div>

          {/* Right form - Get in Touch */}
          <div style={{background:'#fff', borderRadius:16, padding:20, color:'#111', boxShadow:'0 20px 60px rgba(0,0,0,.3)', border:'1px solid #eef0f3'}}>
            <h3 style={{fontWeight:800, fontSize:18, color:'#111'}}>Get in Touch with us.</h3>
            <p style={{fontSize:11, letterSpacing:.5, color:'#6b7280', fontWeight:600, marginTop:4}}>ENTER YOUR DETAILS BELOW TO PROCEED</p>
            {heroSent && <div style={{marginTop:10, background:'#ecfdf5', color:'#065f46', padding:'8px 10px', borderRadius:8, fontSize:12, fontWeight:700, border:'1px solid #a7f3d0'}}>✓ Submitted! We'll call you shortly.</div>}
            <form onSubmit={handleHeroSubmit} style={{display:'grid', gap:12, marginTop:14}}>
              <div>
                <label style={{fontSize:11, fontWeight:700, color:'#374151'}}>FULL NAME</label>
                <input required value={heroForm.name} onChange={e=> setHeroForm({...heroForm, name:e.target.value})} placeholder="Enter your name" style={{width:'100%', marginTop:6, height:42, border:'1px solid #e5e7eb', borderRadius:8, padding:'0 12px', fontSize:13, outline:'none'}}/>
              </div>
              <div>
                <label style={{fontSize:11, fontWeight:700, color:'#374151'}}>MOBILE NUMBER</label>
                <div style={{display:'flex', gap:8, marginTop:6}}>
                  <select style={{height:42, border:'1px solid #e5e7eb', borderRadius:8, padding:'0 8px', fontSize:13, background:'#f9fafb'}}>
                    <option>+91</option>
                  </select>
                  <input required value={heroForm.phone} onChange={e=> setHeroForm({...heroForm, phone:e.target.value})} placeholder="Enter mobile number" style={{flex:1, height:42, border:'1px solid #e5e7eb', borderRadius:8, padding:'0 12px', fontSize:13, outline:'none'}}/>
                </div>
              </div>
              <label style={{display:'flex', gap:8, alignItems:'flex-start', fontSize:11, color:'#6b7280', lineHeight:1.4}}>
                <input type="checkbox" defaultChecked style={{marginTop:2}}/>
                I authorize company representatives to Call, SMS, Email or WhatsApp me.
              </label>
              <button type="submit" style={{height:42, background:'#9fb6c9', color:'#fff', border:'none', borderRadius:8, fontWeight:800, fontSize:13, letterSpacing:.5, cursor:'pointer'}}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container" style={{padding:'28px 16px 20px'}}>
        {/* Overview */}
        <div id="overview" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Overview</h2>
          <p style={{fontSize:13.5, lineHeight:1.7, color:'#4b5563', marginTop:8}}>
            Discover luxury living at <strong>{p.title}</strong> by {p.developer || 'Premium Developer'} located at {p.location}. This {p.bhk} {p.type.toLowerCase()} project offers premium configurations with world-class amenities, excellent connectivity and strong investment potential. RERA approved, it promises exceptional lifestyle and returns in the heart of Gurugram.
          </p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:16}} className="stats4">
            <div style={{background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:14, textAlign:'center'}}>
              <div style={{fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:.5}}>PRICE</div>
              <div style={{fontWeight:800, marginTop:4, color:brandColor}}>{p.price}</div>
              <div style={{fontSize:11, color:'#6b7280', marginTop:2}}>{p.priceRange}</div>
            </div>
            <div style={{background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:14, textAlign:'center'}}>
              <div style={{fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:.5}}>CONFIG</div>
              <div style={{fontWeight:800, marginTop:4}}>{p.bhk}</div>
              <div style={{fontSize:11, color:'#6b7280', marginTop:2}}>{p.type}</div>
            </div>
            <div style={{background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:14, textAlign:'center'}}>
              <div style={{fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:.5}}>STATUS</div>
              <div style={{fontWeight:800, marginTop:4, color:'#16a34a'}}>{p.status}</div>
              <div style={{fontSize:11, color:'#6b7280', marginTop:2}}>Ready</div>
            </div>
            <div style={{background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:14, textAlign:'center'}}>
              <div style={{fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:.5}}>RERA</div>
              <div style={{fontWeight:800, marginTop:4, color:'#16a34a'}}>{p.rera? 'Approved':'N/A'}</div>
              <div style={{fontSize:11, color:'#6b7280', marginTop:2}}>Verified</div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div id="price" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Price & Payment</h2>
          <div style={{display:'flex', gap:12, marginTop:12, flexWrap:'wrap'}}>
            <div style={{background:brandColor, color:'#fff', padding:'12px 18px', borderRadius:12}}>
              <div style={{fontSize:11, opacity:.8, fontWeight:600}}>STARTS FROM</div>
              <div style={{fontWeight:800, fontSize:18, marginTop:2}}>{p.priceRange}</div>
              <div style={{fontSize:11, opacity:.8, marginTop:2}}>{p.bhk} • Onwards</div>
            </div>
            <div style={{flex:1, background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:14}}>
              <div style={{fontWeight:700, fontSize:13}}>Exclusive Festival Offer Live</div>
              <div style={{fontSize:12, color:'#6b7280', marginTop:4}}>No stamp duty • Gold coin on booking • No EMI till possession</div>
              <button onClick={()=> setShowEnquiry(true)} style={{marginTop:10, background:'#d8232a', color:'#fff', border:'none', padding:'8px 16px', borderRadius:8, fontWeight:700, fontSize:12, cursor:'pointer'}}>Get Best Price →</button>
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div id="highlights" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <div style={{fontSize:11, fontWeight:700, letterSpacing:1.2, color:brandColor}}>EXPLORE FEATURES</div>
          <h2 style={{fontSize:24, fontWeight:800, color:'#111', marginTop:6}}>Project Highlights</h2>
          <div style={{width:50, height:3, background:brandColor, marginTop:10, borderRadius:2}}></div>
          <div style={{display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:24, alignItems:'center', marginTop:18}} className="highlights-grid">
            <div style={{borderRadius:16, overflow:'hidden', aspectRatio:'1.65', border:'1px solid #eef0f3', boxShadow:'0 12px 40px rgba(0,0,0,.08)'}}>
              <img src={p.image} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div style={{display:'grid', gap:12}}>
              {(p.highlights || [
                "Two Apartments Per Floor but Feels Like One Home on Each Floor",
                "Ultra-Luxury 4 & 5 BHK Residences - Spacious homes planned in sizes of approximately 5000 - 7000 SQ.FT",
                "Low-Density Development - Planned across around 30 acres with just 2 towers and approximately 240 residences.",
                "Two Residences Per Core - A planning concept designed to limit the number of homes sharing common access areas."
              ]).map((h,i)=>(
                <div key={i} style={{display:'flex', gap:12, alignItems:'flex-start', background:'#f9fafb', border:'1px solid #f0f2f5', borderRadius:12, padding:'12px 14px'}}>
                  <div style={{width:28,height:28, borderRadius:'50%', background:'#fff', border:'1px solid #e5e7eb', display:'grid', placeItems:'center', flexShrink:0}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span style={{fontSize:13, lineHeight:1.5, color:'#374151', fontWeight:500}}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div id="amenities" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Amenities</h2>
          <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>World-class amenities for an elevated lifestyle – curated for luxury, wellness and community.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:14}} className="amenities-grid">
            {[
              {icon:'🏊', label:'Swimming Pool'},
              {icon:'🏋️', label:'Gymnasium'},
              {icon:'🏠', label:'Club House'},
              {icon:'🛝', label:'Kids Play Area'},
              {icon:'🏃', label:'Jogging Track'},
              {icon:'🌳', label:'Landscaped Garden'},
              {icon:'🛡️', label:'24x7 Security'},
              {icon:'⚡', label:'Power Backup'},
              {icon:'🧘', label:'Yoga Deck'},
              {icon:'🎾', label:'Tennis Court'},
              {icon:'🅿️', label:'Covered Parking'},
              {icon:'☕', label:'Cafeteria'}
            ].map(a=>(
              <div key={a.label} style={{background:'#f9fafb', border:'1px solid #eef0f3', borderRadius:12, padding:14, textAlign:'center'}}>
                <div style={{fontSize:22}}>{a.icon}</div>
                <div style={{fontWeight:600, fontSize:12, marginTop:6, color:'#374151'}}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div id="gallery" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Gallery</h2>
          <div style={{display:'grid', gridTemplateColumns:`repeat(${Math.min((p.gallery||[p.image]).length,3)},1fr)`, gap:10, marginTop:12}} className="gallery-grid">
            {(p.gallery||[p.image, p.image]).slice(0,6).map((img,i)=>(
              <div key={i} style={{borderRadius:12, overflow:'hidden', aspectRatio:'1.6', border:'1px solid #eee'}}>
                <img src={img} alt={`gallery ${i}`} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div id="location" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Location Advantages</h2>
          <div style={{display:'flex', gap:8, alignItems:'center', marginTop:8, color:'#6b7280', fontSize:13}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {p.location}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:12}} className="loc-grid">
            <div style={{background:'#f9fafb', border:'1px solid #eee', borderRadius:12, padding:12}}>
              <div style={{fontWeight:700, fontSize:13}}>📍 Connectivity</div>
              <ul style={{fontSize:12, color:'#4b5563', marginTop:8, lineHeight:1.8, paddingLeft:16}}>
                <li>5 mins to Golf Course Road</li>
                <li>10 mins to NH-48 & Dwarka Expressway</li>
                <li>15 mins to IGI Airport</li>
                <li>Near top schools & hospitals</li>
              </ul>
            </div>
            <div style={{height:160, background:'linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)', borderRadius:12, display:'grid', placeItems:'center', border:'1px solid #e5e7eb', color:'#0369a1', fontWeight:700}}>
              📍 Map View – {p.location.split(',')[0]}
            </div>
          </div>
        </div>

        {/* Master Plan */}
        <div id="masterplan" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>Master Plan</h2>
          <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>Thoughtfully planned low-density layout maximizing views, ventilation and privacy.</p>
          <div style={{height:320, background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:12, marginTop:12, display:'grid', placeItems:'center', overflow:'hidden'}}>
            <img src={p.image} alt="master plan" style={{width:'100%', height:'100%', objectFit:'cover', opacity:.15}}/>
            <div style={{position:'absolute', textAlign:'center'}}>
              <div style={{fontWeight:800, fontSize:16, color:'#111'}}>Master Plan – {p.title}</div>
              <div style={{fontSize:12, color:'#6b7280', marginTop:4}}>{p.landArea || '3.42 Acres'} • {towers} • Ultra-Luxury Planning</div>
              <button style={{marginTop:12, background:brandColor, color:'#fff', border:'none', padding:'8px 16px', borderRadius:8, fontWeight:700, fontSize:12}}>Download Master Plan</button>
            </div>
          </div>
        </div>

        {/* Developer */}
        <div id="developer" style={{background:'#fff', border:'1px solid #eef0f3', borderRadius:16, padding:20, marginTop:16}}>
          <h2 style={{fontWeight:800, fontSize:18, color:'#111'}}>About Developer</h2>
          <div style={{display:'flex', gap:14, alignItems:'center', marginTop:12, background:'#f9fafb', padding:14, borderRadius:12, border:'1px solid #eee'}}>
            <img src={logo} alt={p.developer} style={{height:40, background:'#fff', padding:'6px 10px', borderRadius:6, border:'1px solid #eee'}}/>
            <div>
              <div style={{fontWeight:800, fontSize:15}}>{p.developer || 'Premium Developer'}</div>
              <div style={{fontSize:12, color:'#6b7280', marginTop:2}}>Trusted developer with 15+ years, 20+ delivered projects, 10K+ happy families. RERA registered & on-time delivery.</div>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginTop:12, textAlign:'center'}} className="dev-stats">
            <div style={{background:'#fff', border:'1px solid #eee', borderRadius:10, padding:12}}>
              <div style={{fontWeight:800, fontSize:18, color:brandColor}}>25+</div>
              <div style={{fontSize:11, color:'#6b7280', fontWeight:600}}>Years Experience</div>
            </div>
            <div style={{background:'#fff', border:'1px solid #eee', borderRadius:10, padding:12}}>
              <div style={{fontWeight:800, fontSize:18, color:brandColor}}>50+</div>
              <div style={{fontSize:11, color:'#6b7280', fontWeight:600}}>Projects Delivered</div>
            </div>
            <div style={{background:'#fff', border:'1px solid #eee', borderRadius:10, padding:12}}>
              <div style={{fontWeight:800, fontSize:18, color:brandColor}}>10K+</div>
              <div style={{fontSize:11, color:'#6b7280', fontWeight:600}}>Happy Families</div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{marginTop:20, paddingBottom:90}}>
          <h3 style={{fontWeight:800, fontSize:16}}>Similar Projects You May Like</h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginTop:12}} className="related-grid">
            {related.map(r=>(
              <Link key={r.id} to={`/property/${r.id}`} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
                <img src={r.image} alt={r.title} style={{width:'100%', aspectRatio:'1.45', objectFit:'cover'}}/>
                <div style={{padding:10}}>
                  <div style={{fontWeight:700, fontSize:13, lineHeight:1.25, color:'#111', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{r.title}</div>
                  <div style={{fontWeight:800, fontSize:12, marginTop:4, color:brandColor}}>{r.priceRange}</div>
                  <div style={{fontSize:11, color:'#6b7280', marginTop:2}}>{r.location.split(',')[0]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <div style={{position:'fixed', bottom:0, left:0, right:0, zIndex:45, background:'#fff', borderTop:'1px solid #e5e7eb', boxShadow:'0 -8px 30px rgba(0,0,0,.08)', padding:'10px 16px'}}>
        <div className="container" style={{display:'flex', alignItems:'center', gap:12, justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:10, minWidth:0}}>
            <img src={p.image} alt={p.title} style={{width:44,height:44, borderRadius:8, objectFit:'cover', border:'1px solid #eee', flexShrink:0}}/>
            <div style={{minWidth:0}}>
              <div style={{fontWeight:800, fontSize:14, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', color:'#111'}}>{p.title}</div>
              <div style={{fontWeight:700, fontSize:12, color:brandColor}}>{p.priceRange || p.price}* Onwards</div>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:10, flexShrink:0}}>
            <button style={{display:'flex', alignItems:'center', gap:7, background:'#fff', border:'1px solid #e5e7eb', padding:'10px 16px', borderRadius:24, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer'}} className="hide-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Brochure
            </button>
            <button onClick={()=> setShowEnquiry(true)} style={{display:'flex', alignItems:'center', gap:7, background:brandColor, color:'#fff', padding:'10px 20px', borderRadius:24, fontWeight:700, fontSize:13, border:'none', cursor:'pointer', boxShadow:'0 4px 14px rgba(0,0,0,.15)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              ENQUIRE NOW
            </button>
            <a href="https://wa.me/919811750130" target="_blank" rel="noreferrer" style={{width:44,height:44, borderRadius:'50%', background:'#25D366', display:'grid', placeItems:'center', boxShadow:'0 4px 14px rgba(37,211,102,.35)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,.6)', display:'grid', placeItems:'center', zIndex:60, padding:16}}>
          <div style={{background:'#fff', borderRadius:16, padding:20, width:'100%', maxWidth:420, position:'relative'}}>
            <button onClick={()=> setShowEnquiry(false)} style={{position:'absolute', top:12, right:12, width:30,height:30, borderRadius:'50%', background:'#f3f4f6', border:'none', cursor:'pointer'}}>✕</button>
            <h3 style={{fontWeight:800, fontSize:16}}>Enquire About {p.title}</h3>
            <p style={{fontSize:12, color:'#6b7280', marginTop:4}}>Get best deals & site visit – expert callback in 30 mins</p>
            {sent && <div style={{marginTop:12, background:'#ecfdf5', color:'#065f46', padding:'10px 12px', borderRadius:8, fontWeight:600, fontSize:13, border:'1px solid #a7f3d0'}}>✓ Enquiry sent! Our team will contact you shortly.</div>}
            <form onSubmit={handleEnquiry} style={{display:'grid', gap:10, marginTop:14}}>
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your Name *" style={{height:42, borderRadius:10, border:'1px solid #e5e7eb', padding:'0 12px', fontSize:13, outline:'none'}}/>
              <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone Number *" style={{height:42, borderRadius:10, border:'1px solid #e5e7eb', padding:'0 12px', fontSize:13, outline:'none'}}/>
              <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" style={{height:42, borderRadius:10, border:'1px solid #e5e7eb', padding:'0 12px', fontSize:13, outline:'none'}}/>
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" rows={2} style={{borderRadius:10, border:'1px solid #e5e7eb', padding:'10px 12px', fontSize:13, outline:'none', resize:'none'}}/>
              <button type="submit" style={{height:44, background:brandColor, color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>Send Enquiry</button>
            </form>
          </div>
        </div>
      )}

      <Footer/>
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
    </div>
  )
}
