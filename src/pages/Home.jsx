import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/api'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

const GOLD = '#D4AF37'
const GOLD_DARK = '#B9943A'
const BLACK = '#0A0A0A'

export default function Home(){
  const [banners, setBanners] = useState({hero:[], small:[]})
  const [properties, setProperties] = useState([])
  const [locations, setLocations] = useState([])
  const [offers, setOffers] = useState([])
  const [builders, setBuilders] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      try{
        const [b, p, l, o, bd, tm] = await Promise.all([
          API.get('/banners'),
          API.get('/properties'),
          API.get('/locations'),
          API.get('/offers'),
          API.get('/builders').catch(()=>({data:[]})),
          API.get('/testimonials').catch(()=>({data:[]}))
        ])
        setBanners(b.data)
        setProperties(p.data)
        setLocations(l.data)
        setOffers(o.data)
        setBuilders(bd.data||[])
        setTestimonials(tm.data||[])
      }catch(e){
        console.error(e)
      }finally{ setLoading(false)}
    }
    load()
  },[])

  const recommended = properties.filter(p=>p.category==='recommended').slice(0,4)
  const trending = properties.filter(p=>p.category==='trending').slice(0,4)
  const luxury = properties.filter(p=>['₹19','₹28','₹16','₹5.2'].some(v=>p.priceRange.includes(v)) || p.category==='trending').slice(0,4)
  // For exact screenshot order: Oberoi, Experion, Max Estate, BPTP
  const luxuryExact = [
    properties.find(p=>p.title.includes('Oberoi Three Sixty')) || properties.find(p=>p.title.includes('BPTP')) || luxury[0],
    properties.find(p=>p.title.includes('Experion One 42')) || luxury[1],
    properties.find(p=>p.title.includes('Max Estate 59')) || luxury[2],
    properties.find(p=>p.title.includes('BPTP DownTown')) || luxury[3],
  ].filter(Boolean).slice(0,4)

  const commercial = properties.filter(p=>p.category==='commercial').slice(0,4)
  const sco = properties.filter(p=>p.category==='sco').slice(0,4)
  const upcoming = properties.filter(p=>p.category==='upcoming').slice(0,4)
  const newlaunch = properties.filter(p=>p.category==='newlaunch').slice(0,4)

  if(loading) return <div style={{minHeight:'100vh', display:'grid', placeItems:'center', background:'#fff'}}>
    <div style={{textAlign:'center'}}>
      <div style={{width:48,height:48, border:'3px solid #eee', borderTopColor:GOLD, borderRadius:'50%', animation:'spin 1s linear infinite', margin:'0 auto 12px'}}/>
      <div style={{fontWeight:600, color:'#6b7280'}}>Loading HomWisor luxury...</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  </div>

  // Fallbacks if backend not yet has commercial/sco (use first 4)
  const commercialDisplay = commercial.length>=4 ? commercial : properties.slice(4,8)
  const scoDisplay = sco.length>=4 ? sco : properties.slice(8,12)
  const luxuryDisplay = luxuryExact.length>=4 ? luxuryExact : trending

  const budgetBuckets = [
    { label:'Under ₹1 Cr', sub:'View Projects', count:'320+ Properties', img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop', link:'/search?budget=under1' },
    { label:'₹1 Crore - ₹5 Crore', sub:'View Projects', count:'980+ Properties', img:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=280&fit=crop', link:'/search?budget=1-5' },
    { label:'₹5 Crore - ₹10 Crore', sub:'View Projects', count:'760+ Properties', img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=280&fit=crop', link:'/search?budget=5-10' },
    { label:'₹10 Crore - ₹20 Crore', sub:'View Projects', count:'410+ Properties', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=280&fit=crop', link:'/search?budget=10-20' },
    { label:'₹20 Crore+', sub:'View Projects', count:'180+ Properties', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=280&fit=crop', link:'/search?budget=20plus' },
  ]

  const bhkData = [
    { name:'Studio', sub:'Apartment', place:'in Gurugram', count:'320+ Properties', dark:false, img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop' },
    { name:'1 BHK', sub:'in Gurugram', count:'980+ Properties', dark:false, img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=500&fit=crop' },
    { name:'2 BHK', sub:'in Gurugram', count:'1,450+ Properties', dark:false, img:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=500&fit=crop' },
    { name:'3 BHK', sub:'in Gurugram', count:'760+ Properties', dark:false, img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop' },
    { name:'4 BHK', sub:'in Gurugram', count:'410+ Properties', dark:false, img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop' },
    { name:'5 BHK', sub:'in Gurugram', count:'180+ Properties', dark:false, img:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop' },
    { name:'Penthouse', sub:'in Gurugram', count:'95+ Properties', dark:true, img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop' },
  ]

  const buildersFallback = builders.length? builders : [
    { id:'b1', name:'DLF Homes', logo:'https://via.placeholder.com/140x70/0B2B4A/FFFFFF?text=DLF', projects:'17 Projects' },
    { id:'b2', name:'M3M India', logo:'https://via.placeholder.com/140x70/1e3a5f/FFFFFF?text=M3M', projects:'41 Projects' },
    { id:'b3', name:'Oberoi Realty', logo:'https://via.placeholder.com/140x70/1a1a1a/D4AF37?text=OBEROI', projects:'1 Project' },
    { id:'b4', name:'MVN Infrastructure', logo:'https://via.placeholder.com/140x70/0A1931/D4AF37?text=MVN', projects:'2 Projects' },
    { id:'b5', name:'Godrej Properties', logo:'https://via.placeholder.com/140x70/ffffff/0B2B4A?text=GODREJ', projects:'25 Projects' },
    { id:'b6', name:'BPTP Limited', logo:'https://via.placeholder.com/140x70/111111/ffffff?text=BPTP', projects:'13 Projects' },
    { id:'b7', name:'Trump Towers', logo:'https://via.placeholder.com/140x70/0A0A0A/D4AF37?text=TRUMP', projects:'3 Projects' },
    { id:'b8', name:'Kreeva', logo:'https://via.placeholder.com/140x70/fff8e1/D4AF37?text=KREEVA', projects:'2 Projects' },
  ]

  const testimonialsFallback = testimonials.length? testimonials : [
    { id:'t1', name:'Aayush Gupta', initials:'AG', color:'#F59E0B', platform:'Google', verified:true, rating:5, text:'Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person.' },
    { id:'t2', name:'Soumya', initials:'SO', color:'#E9D5FF', textColor:'#6B21A8', platform:'Google', verified:true, rating:5, text:'Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn\'t waste my time with random options and only showed m...' },
    { id:'t3', name:'Amit Kumar', initials:'AK', color:'#D6D3D1', textColor:'#44403C', platform:'Google', verified:true, rating:5, text:'HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional.' },
    { id:'t4', name:'Neha Gupta', initials:'NG', color:'#10B981', platform:'Google', verified:true, rating:5, text:'Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns.' },
  ]

  return (
    <div style={{background:'#fcfcfc'}}>
      <Header/>
      <Hero banners={banners.hero}/>
      <SearchSection/>

      {/* Small banners */}
      <div className="container" style={{padding:'18px 16px 0'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12}} className="small-grid">
          {banners.small.map(b=>(
            <a key={b.id} href={b.link} style={{borderRadius:12, overflow:'hidden', border:'1px solid #eee', background:'#fff', display:'block'}}>
              <img src={b.image} alt={b.title} style={{width:'100%', aspectRatio:'1.85', objectFit:'cover'}}/>
              <div style={{padding:'8px 10px', fontWeight:700, fontSize:12, color:'#111', textAlign:'center'}}>{b.title}</div>
            </a>
          ))}
        </div>
      </div>

      {/* 100ACRESS PRIVATE COLLECTION replica → HomWisor Private Collection with HomWisor gold */}
      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{
          background:'linear-gradient(135deg, #FFFBF0 0%, #FFF5E6 45%, #FFF 100%)',
          border:'1px solid #FDE68A',
          borderLeft:`4px solid ${GOLD}`,
          borderRadius:16,
          padding:'28px 24px',
          display:'grid',
          gridTemplateColumns:'1.15fr 0.95fr',
          gap:20,
          position:'relative',
          overflow:'hidden',
          boxShadow:'0 8px 30px rgba(212,175,55,.12)'
        }} className="branded-grid">
          <div style={{position:'absolute', right:-20, top:-30, width:180, height:180, background:`radial-gradient(circle, rgba(212,175,55,.12) 0%, transparent 70%)`, pointerEvents:'none'}}/>
          <div>
            <div style={{display:'inline-block', background:'#FFF', border:'1px solid #FDE68A', color:'#92400E', fontWeight:700, fontSize:10, letterSpacing:.8, padding:'5px 10px', borderRadius:20}}>HOMWISOR PRIVATE COLLECTION</div>
            <h2 style={{fontSize:28, fontWeight:800, lineHeight:1.15, color:'#0F172A', marginTop:12, fontFamily:"'Inter', sans-serif"}}>
              Where <span style={{color:GOLD_DARK}}>Branded Residences</span> Meets Architectural Masterpieces
            </h2>
            <p style={{fontSize:13, color:'#475569', marginTop:12, lineHeight:1.7}}>
              Indulge in our curated selection of signature branded residences. Crafted in collaboration with world-class fashion houses and legendary hoteliers to deliver a life of unmatched sophistication, bespoke concierge services, and timeless value.
            </p>
            <div style={{display:'flex', gap:18, marginTop:16, fontSize:12, fontWeight:600, color:'#334155'}}>
              <div style={{display:'flex', alignItems:'center', gap:8}}><span style={{width:6,height:6, borderRadius:'50%', background:GOLD}}/> Concierge & Valet Services</div>
              <div style={{display:'flex', alignItems:'center', gap:8}}><span style={{width:6,height:6, borderRadius:'50%', background:GOLD}}/> Fully RERA Verified Properties</div>
            </div>
            <div style={{display:'flex', gap:10, marginTop:18}}>
              <Link to="/search" style={{background:BLACK, color:GOLD, padding:'10px 18px', borderRadius:8, fontWeight:800, fontSize:12, border:`1px solid ${GOLD}`}}>EXPLORE RESIDENCES</Link>
              <Link to="/search" style={{background:'#fff', color:GOLD_DARK, border:`1px solid ${GOLD}`, padding:'10px 18px', borderRadius:8, fontWeight:700, fontSize:12}}>GET INSTANT CALLBACK</Link>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 140px', gap:12, alignItems:'center'}}>
            <div style={{position:'relative', borderRadius:14, overflow:'hidden', border:'1px solid #FDE68A', background:'#fff', boxShadow:'0 8px 24px rgba(0,0,0,.08)'}}>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=420&fit=crop" alt="Branded" style={{width:'100%', height:210, objectFit:'cover'}}/>
              <div style={{position:'absolute', bottom:10, left:10, right:10, background:'rgba(255,255,255,.95)', backdropFilter:'blur(8px)', borderRadius:10, padding:'10px 12px', display:'flex', alignItems:'center', justifyContent:'space-between', border:'1px solid rgba(212,175,55,.25)'}}>
                <div>
                  <div style={{fontSize:10, fontWeight:800, color:GOLD_DARK, letterSpacing:.6}}>BRANDED RESIDENCES</div>
                  <div style={{fontWeight:800, fontSize:13, color:'#111'}}>M3M Brabus Residences</div>
                </div>
                <span style={{background:GOLD, color:'#000', fontSize:10, fontWeight:800, padding:'4px 8px', borderRadius:6}}>EOI OPEN</span>
              </div>
            </div>
            <div style={{borderRadius:12, overflow:'hidden', height:230, background:'#000', border:`1px solid ${GOLD}`, position:'relative'}}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=600&fit=crop" alt="Brabus Tower" style={{width:'100%', height:'100%', objectFit:'cover', opacity:.9}}/>
              <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,.85) 20%, transparent 60%)'}}/>
              <div style={{position:'absolute', bottom:10, left:8, right:8, color:'#fff', textAlign:'center'}}>
                <div style={{fontWeight:800, fontSize:10, color:GOLD, letterSpacing:1}}>M&M</div>
                <div style={{fontWeight:900, fontSize:16, color:GOLD, letterSpacing:.5, textShadow:'0 1px 3px rgba(0,0,0,.5)'}}>BRABUS</div>
                <div style={{fontSize:7, letterSpacing:1.5, opacity:.8}}>RESIDENCES</div>
                <div style={{fontSize:7, color:'rgba(255,255,255,.6)', marginTop:6}}>POWER. PRESTIGE. PERFECTION.</div>
                <div style={{fontSize:8, marginTop:8, fontStyle:'italic', color:GOLD}}>Coming to</div>
                <div style={{fontSize:8, letterSpacing:1, color:'#fff'}}>SECTOR 58, GURGAON</div>
                <div style={{marginTop:8, background:`linear-gradient(90deg, ${GOLD}, #B9943A)`, color:'#000', fontSize:8, fontWeight:800, padding:'4px 6px', borderRadius:6, display:'inline-block'}}>4 & 5 BHK • STARTING FROM ₹20 CR*</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Luxury Projects in IN */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:24, fontWeight:800, color:'#0F172A', letterSpacing:-.5}}>Top Luxury Projects in IN</h2>
          <Link to="/search" style={{fontWeight:700, fontSize:13, color:GOLD_DARK, display:'flex', alignItems:'center', gap:4}}>View All Projects <span>↗</span></Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {luxuryDisplay.map((p,i)=>(
            <Link key={p.id} to={`/property/${p.id}`} style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:14, overflow:'hidden', display:'block'}}>
              <div style={{position:'relative', height:180, overflow:'hidden', background:'#000'}}>
                <img src={p.image} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{position:'absolute', top:10, left:10, background:'#fff', color:'#111', fontSize:10, fontWeight:700, padding:'5px 8px', borderRadius:20, display:'flex', alignItems:'center', gap:5, border:'1px solid #e5e7eb'}}>
                  <span style={{color:'#16a34a'}}>✓</span> RERA
                </div>
                <button onClick={(e)=>{e.preventDefault()}} style={{position:'absolute', top:10, right:10, width:30,height:30, borderRadius:'50%', background:'rgba(255,255,255,.9)', border:'none', display:'grid', placeItems:'center', cursor:'pointer'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                {i===1 && <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,.25)', display:'grid', placeItems:'center'}}>
                  <div style={{textAlign:'center', color:'#fff'}}>
                    <div style={{fontWeight:900, fontSize:28, letterSpacing:1, display:'flex', alignItems:'baseline', justifyContent:'center', gap:2}}><span style={{fontWeight:300, fontSize:14}}>ONE</span><span style={{color:GOLD, fontSize:32}}>42</span><span style={{marginLeft:4, fontSize:10, fontWeight:600, letterSpacing:1}}>GOLF COURSE ROAD</span></div>
                    <div style={{fontSize:9, letterSpacing:1.2, opacity:.8, marginTop:4}}>AN ADDRESS THAT CHOOSES YOU</div>
                  </div>
                </div>}
              </div>
              <div style={{padding:'12px 12px 10px'}}>
                <div style={{fontWeight:700, fontSize:14, color:'#0F172A', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.title}</div>
                <div style={{fontWeight:800, color:GOLD_DARK, fontSize:16, marginTop:4}}>{p.priceRange}</div>
                <div style={{fontSize:11, color:'#6b7280', marginTop:6, display:'flex', alignItems:'center', gap:4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {p.location.split(',').slice(0,2).join(',')}
                </div>
                <div style={{marginTop:10, background:'#ECFDF5', color:'#065f46', fontWeight:700, fontSize:11, padding:'8px 0', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', gap:6, border:'1px solid #D1FAE5'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#10B981"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01z"/></svg>
                  WhatsApp
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Budget Projects */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <h2 style={{fontSize:20, fontWeight:800, color:'#0F172A', marginBottom:12}}>Top Budget Projects</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:12, overflowX:'auto', paddingBottom:4}} className="budget-grid">
          {budgetBuckets.map(b=>(
            <Link key={b.label} to={b.link} style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden', display:'block', minWidth:160}}>
              <div style={{padding:'14px 14px 10px', minHeight:110}}>
                <div style={{fontWeight:800, fontSize:15, color:'#0F172A', lineHeight:1.1}}>{b.label}</div>
                <div style={{fontSize:12, color:GOLD_DARK, fontWeight:600, marginTop:4, display:'flex', alignItems:'center', gap:4}}>View Projects <span>›</span></div>
              </div>
              <img src={b.img} alt={b.label} style={{width:'100%', height:70, objectFit:'cover', display:'block'}}/>
            </Link>
          ))}
        </div>
      </section>

      {/* Commercial Projects in Delhi NCR */}
      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:20, fontWeight:800, color:'#0F172A'}}>Commercial Projects in Delhi NCR</h2>
          <Link to="/search?type=Commercial" style={{fontWeight:700, fontSize:13, color:GOLD_DARK, display:'flex', alignItems:'center', gap:4}}>View All Projects <span>↗</span></Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {commercialDisplay.map(p=>(
            <Link key={p.id} to={`/property/${p.id}`} style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:14, overflow:'hidden', display:'block'}}>
              <div style={{position:'relative', height:170, background:'#000'}}>
                <img src={p.image} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{position:'absolute', top:10, left:10, background:'#fff', color:'#111', fontSize:10, fontWeight:700, padding:'4px 8px', borderRadius:20, display:'flex', alignItems:'center', gap:4}}> <span style={{color:'#16a34a'}}>✓</span> RERA</div>
                <div style={{position:'absolute', top:10, right:10, width:28,height:28, borderRadius:'50%', background:'rgba(255,255,255,.9)', display:'grid', placeItems:'center'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                {p.title.includes('Vedatam') && <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,.35)', color:'#fff', textAlign:'center', padding:10}}>
                  <div><div style={{fontSize:11, letterSpacing:1, opacity:.9}}>FORECAST, FOOTFALL.</div><div style={{fontWeight:800, fontSize:14, color:GOLD}}>VEDATAM</div></div>
                </div>}
              </div>
              <div style={{padding:'12px 12px 10px'}}>
                <div style={{fontWeight:700, fontSize:13, color:'#0F172A', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SCO Projects in Gurugram */}
      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:20, fontWeight:800, color:'#0F172A'}}>SCO Projects in Gurugram</h2>
          <Link to="/search?category=sco" style={{fontWeight:700, fontSize:13, color:GOLD_DARK}}>View All Projects <span>↗</span></Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr) 150px', gap:14, alignItems:'start'}} className="sco-grid">
          <div style={{display:'contents'}} className="sco-cards">
            {scoDisplay.map(p=>(
              <Link key={p.id} to={`/property/${p.id}`} style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:14, overflow:'hidden', display:'block'}}>
                <div style={{position:'relative', height:150, background:'#000'}}>
                  <img src={p.image} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  <div style={{position:'absolute', top:8, left:8, background:'#fff', fontSize:10, fontWeight:700, padding:'4px 7px', borderRadius:20, display:'flex', alignItems:'center', gap:3}}><span style={{color:'#16a34a'}}>✓</span> RERA</div>
                  <div style={{position:'absolute', top:8, right:8, width:26,height:26, borderRadius:'50%', background:'rgba(255,255,255,.9)', display:'grid', placeItems:'center'}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </div>
                  {p.title.includes('EBD') && <div style={{position:'absolute', top:8, left:'50%', transform:'translateX(-50%)', color:'#fff', fontWeight:700, fontSize:10, letterSpacing:1, background:'rgba(0,0,0,.35)', padding:'2px 6px', borderRadius:4}}>SHOP.MEET.RELAX</div>}
                </div>
                <div style={{padding:'10px 10px 8px'}}>
                  <div style={{fontWeight:700, fontSize:13, color:'#0F172A'}}>{p.title}</div>
                  <div style={{fontWeight:800, color:GOLD_DARK, fontSize:13, marginTop:3}}>{p.priceRange}</div>
                  <div style={{fontSize:11, color:'#6b7280', marginTop:4, display:'flex', alignItems:'center', gap:4}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {p.location.split(',')[0]}, {p.location.split(',')[1]}
                  </div>
                  <div style={{marginTop:8, background:'#ECFDF5', color:'#065f46', fontWeight:700, fontSize:11, padding:'6px 0', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', gap:5, border:'1px solid #D1FAE5'}}> <svg width="12" height="12" viewBox="0 0 24 24" fill="#10B981"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01z"/></svg> WhatsApp</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{borderRadius:14, overflow:'hidden', height:286, background:'linear-gradient(180deg, #1a0a3a 0%, #4a1a6a 40%, #FF6B35 70%, #1a1a2e 100%)', border:`1px solid ${GOLD}`, position:'relative', display:'block'}} className="verano-banner">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=600&fit=crop" alt="Verano" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.25}}/>
            <div style={{position:'relative', padding:'14px 10px', textAlign:'center', color:'#fff', display:'flex', flexDirection:'column', height:'100%', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:9, fontWeight:700, letterSpacing:1, display:'flex', alignItems:'center', justifyContent:'center', gap:4}}><span style={{width:18,height:18, borderRadius:'50%', background:'#fff', color:'#1a1a1a', display:'grid', placeItems:'center', fontSize:8, fontWeight:900}}>G</span> GODREJ PROPERTIES</div>
                <div style={{fontWeight:900, fontSize:22, color:GOLD, marginTop:6, letterSpacing:1, lineHeight:1}}>VERANO</div>
                <div style={{fontSize:9, letterSpacing:1, marginTop:4, display:'flex', alignItems:'center', justifyContent:'center', gap:4}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> SECTOR 63A</div>
                <div style={{fontSize:9, letterSpacing:1.5, color:'rgba(255,255,255,.7)'}}>GURUGRAM</div>
              </div>
              <div>
                <div style={{fontWeight:800, fontSize:13, color:'#fff', lineHeight:1.2}}>RESIDENCE INSPIRED<br/>BY MIAMI</div>
              </div>
              <div style={{display:'flex', justifyContent:'center', gap:4}}>
                <span style={{width:16,height:6, borderRadius:10, background:GOLD}}/><span style={{width:6,height:6, borderRadius:'50%', background:'rgba(255,255,255,.5)'}}/><span style={{width:6,height:6, borderRadius:'50%', background:'rgba(255,255,255,.5)'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Trends & Insights */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <h2 style={{fontSize:20, fontWeight:800, color:'#0F172A', marginBottom:12}}>Price Trends & Insights</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}} className="insights-grid">
          {[
            { title:'Price Trends', badge:'MARKET RATES & GROWTH', desc:'Find property rates & price trends of top l...', icon:'↗' },
            { title:'City Insights', badge:'LOCATION & INFRA ANALYSIS', desc:'Get to know top cities, sector connectivity ...', icon:'◎' },
            { title:'Housing Research', badge:'REPORTS & EXPERT VIEWS', desc:'Comprehensive housing market analysis, yi...', icon:'⌕' },
          ].map(c=>(
            <div key={c.title} style={{background:'#FFF8F8', border:'1px solid #FDE8E8', borderRadius:12, padding:'14px 14px', display:'flex', alignItems:'center', gap:12}}>
              <div style={{width:36,height:36, borderRadius:8, background:BLACK, color:GOLD, display:'grid', placeItems:'center', fontWeight:800, fontSize:14, flexShrink:0, border:`1px solid ${GOLD}`}}>{c.icon==='↗'?'↗':c.icon==='◎'?'◎':'⌕'}</div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontWeight:700, fontSize:13, color:'#0F172A'}}>{c.title}</div>
                <div style={{display:'inline-block', background:'#FFE4E6', color:'#991B1B', fontSize:9, fontWeight:800, letterSpacing:.5, padding:'2px 6px', borderRadius:4, marginTop:2}}>{c.badge}</div>
                <div style={{fontSize:11, color:'#6b7280', marginTop:4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.desc}</div>
              </div>
              <div style={{width:26,height:26, borderRadius:'50%', background:'#fff', border:'1px solid #e5e7eb', display:'grid', placeItems:'center', flexShrink:0}}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Builders */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:22, fontWeight:800, color:'#0F172A', letterSpacing:-.3}}>Popular Builders</h2>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <Link to="/search" style={{fontWeight:700, fontSize:13, color:GOLD_DARK}}>View All <span>↗</span></Link>
            <div style={{display:'flex', gap:6}}>
              <button style={{width:28,height:28, borderRadius:'50%', border:'1px solid #e5e7eb', background:'#fff', display:'grid', placeItems:'center'}}>‹</button>
              <button style={{width:28,height:28, borderRadius:'50%', border:'1px solid #e5e7eb', background:'#fff', display:'grid', placeItems:'center'}}>›</button>
            </div>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12}} className="builders-grid">
          {buildersFallback.slice(0,8).map(b=>(
            <div key={b.id} style={{background:'#fff', border:'1px solid #eef2f7', borderRadius:12, padding:12, display:'flex', alignItems:'center', gap:12}}>
              <img src={b.logo} alt={b.name} style={{width:72,height:44, objectFit:'contain', background:'#fff', borderRadius:8, border:'1px solid #f3f4f6', padding:4}}/>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontWeight:800, fontSize:13, color:'#0F172A', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{b.name}</div>
                <div style={{display:'inline-block', background:'#F1F5F9', color:'#475569', fontSize:11, fontWeight:600, padding:'2px 7px', borderRadius:10, marginTop:4}}>⊞ {b.projects}</div>
                <div style={{fontSize:11, color:'#94a3b8', fontWeight:700, marginTop:4, display:'flex', alignItems:'center', gap:4}}>EXPLORE <span style={{color:GOLD}}>→</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Which BHK suits your lifestyle best? */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <h2 style={{fontSize:18, fontWeight:800, color:'#0F172A', marginBottom:12}}>Which BHK suits your lifestyle best?</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:10, overflowX:'auto', paddingBottom:6}} className="bhk-grid">
          {bhkData.map(b=>(
            <Link key={b.name} to={`/search?bhk=${encodeURIComponent(b.name)}`} style={{
              borderRadius:12, overflow:'hidden', border:'1px solid #e5e7eb', background:b.dark?BLACK:'#fff',
              display:'block', minWidth:125, position:'relative'
            }}>
              <div style={{padding:'10px 10px 6px', color: b.dark? '#fff':'#0F172A'}}>
                <div style={{fontWeight:800, fontSize:16, lineHeight:1}}>{b.name}</div>
                <div style={{fontSize:11, fontWeight:600, color: b.dark? 'rgba(255,255,255,.7)' : '#475569'}}>{b.sub}</div>
                <div style={{fontSize:10, color: b.dark? 'rgba(255,255,255,.5)': '#6b7280'}}>{b.place||''}</div>
                <div style={{fontSize:9, color: b.dark? 'rgba(255,255,255,.4)': '#94a3b8', marginTop:3}}>{b.count}</div>
              </div>
              <img src={b.img} alt={b.name} style={{width:'100%', height:110, objectFit:'cover', display:'block'}}/>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose HomWisor.com */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <div style={{background:'linear-gradient(180deg, #FFFBF0 0%, #FFF 100%)', border:'1px solid #FDE68A', borderRadius:16, padding:'28px 20px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', left:10, top:20, opacity:.2, color:GOLD, fontSize:18}}>⁙⁙⁙</div>
          <div style={{position:'absolute', right:10, top:20, opacity:.2, color:GOLD, fontSize:18}}>⁙⁙⁙</div>
          <div style={{textAlign:'center'}}>
            <h2 style={{fontSize:26, fontWeight:800, color:'#0F172A'}}>Why Choose <span style={{color:GOLD_DARK}}>HomWisor.com</span></h2>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginTop:8}}>
              <span style={{width:24,height:2, background:'#E5E7EB'}}/><span style={{width:8,height:8, borderRadius:'50%', background:GOLD}}/><span style={{width:24,height:2, background:'#E5E7EB'}}/>
            </div>
            <p style={{fontSize:12, color:'#475569', marginTop:8, maxWidth:560, marginLeft:'auto', marginRight:'auto', lineHeight:1.6}}>
              India's trusted real estate portal for verified properties, direct builder pricing, and complete end-to-end guidance.
            </p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginTop:18}} className="why-grid">
            {[
              { title:'100% Verified Listings', desc:'Every property listing undergoes rigorous physical and legal verification to guarantee genuine photos, accurate pricing and title ownership without fake listings.', icon:'🛡️' },
              { title:'Direct Builder Rates', desc:'We connect you directly with top-tier developers, ensuring transparent deal structures, best price guarantees, and zero hidden brokerage charges.', icon:'🏷️' },
              { title:'Free Guided Site Visits', desc:'Schedule doorstep property site visits guided by experienced real estate specialists who provide personalized advice tailored to your budge...', icon:'👥' },
            ].map((c,i)=>(
              <div key={c.title} style={{background:'#fff', border:'1px solid #f3f4f6', borderTop:`3px solid ${GOLD}`, borderRadius:12, padding:'18px 14px', textAlign:'center', position:'relative', overflow:'hidden'}}>
                <div style={{width:36,height:36, borderRadius:'50%', background:'#FFF7ED', border:'1px solid #FDE68A', display:'grid', placeItems:'center', margin:'0 auto', color:GOLD_DARK, fontSize:16}}>{c.icon}</div>
                <div style={{fontWeight:800, fontSize:13, color:'#0F172A', marginTop:10}}>{c.title}</div>
                <div style={{width:32,height:2, background:GOLD, margin:'8px auto'}}/>
                <div style={{fontSize:11, color:'#6b7280', lineHeight:1.6}}>{c.desc}</div>
                <div style={{position:'absolute', right:8, bottom:0, fontSize:44, fontWeight:900, color:'rgba(212,175,55,.08)', lineHeight:1}}>{String(i+1).padStart(2,'0')}</div>
              </div>
            ))}
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:1, background:'#FDE68A', border:'1px solid #FDE68A', borderRadius:12, overflow:'hidden', marginTop:14}} className="stats-5">
            {[
              { v:'25K+', l:'Verified Properties', icon:'🏢' },
              { v:'10K+', l:'Happy Customers', icon:'👥' },
              { v:'500+', l:'Top Developers', icon:'🏢' },
              { v:'50+', l:'Cities Covered', icon:'📍' },
              { v:'24x7', l:'Expert Support', icon:'🎧' },
            ].map(s=>(
              <div key={s.l} style={{background:'#fff', padding:'12px 10px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', gap:8}}>
                <span style={{color:GOLD, fontSize:14}}>{s.icon}</span>
                <div style={{textAlign:'left'}}>
                  <div style={{fontWeight:800, fontSize:14, color:'#0F172A', lineHeight:1}}>{s.v}</div>
                  <div style={{fontSize:10, color:'#6b7280'}}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <h2 style={{fontSize:22, fontWeight:800, color:'#0F172A'}}>Customer <span style={{color:GOLD_DARK}}>Testimonials</span></h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:12}} className="testi-grid">
          {testimonialsFallback.slice(0,4).map(t=>(
            <div key={t.id} style={{background:'#fff', border:'1px solid #f3f4f6', borderRadius:12, padding:14, boxShadow:'0 2px 8px rgba(0,0,0,.04)'}}>
              <div style={{display:'flex', alignItems:'center', gap:10}}>
                <div style={{width:32,height:32, borderRadius:'50%', background:t.color, color: t.textColor||'#fff', display:'grid', placeItems:'center', fontWeight:800, fontSize:11, flexShrink:0, border:'1px solid #e5e7eb'}}>{t.initials}</div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontWeight:700, fontSize:12, color:'#0F172A', display:'flex', alignItems:'center', gap:4}}>{t.name} <span style={{color:'#22c55e', fontSize:10}}>✔</span></div>
                  <div style={{fontSize:10, color:'#6b7280', letterSpacing:.3}}>VERIFIED BUYER</div>
                </div>
                <div style={{fontWeight:700, fontSize:10, color:'#4285F4'}}>Google</div>
              </div>
              <div style={{display:'flex', gap:2, marginTop:8, color:'#F59E0B', fontSize:10}}>★★★★★</div>
              <div style={{fontSize:11, color:'#475569', lineHeight:1.6, marginTop:8, fontStyle:'italic'}}>"{t.text}"</div>
              <div style={{marginTop:10, textAlign:'right'}}>
                <span style={{fontSize:11, color:GOLD_DARK, fontWeight:700}}>Read more</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:14}}>
          <a href="#" style={{fontWeight:700, fontSize:13, color:'#0F172A', display:'inline-flex', alignItems:'center', gap:6}}>See more reviews <span>↗</span></a>
        </div>
      </section>

      {/* Existing Recommended/Trending etc moved after - keep for dynamic */}
      <section className="container" style={{padding:'32px 16px 0'}}>
        <div style={{display:'flex', alignItems:'end', justifyContent:'space-between', marginBottom:12}}>
          <div>
            <h2 style={{fontSize:22, fontWeight:800, lineHeight:1.1, color:'#111'}}>HomWisor Recommended</h2>
            <p style={{fontSize:12, color:'#6b7280', marginTop:6}}>Handpicked premium properties for luxury living</p>
          </div>
          <Link to="/search?category=recommended" style={{fontWeight:700, fontSize:13, color:GOLD_DARK}} className="view-all">View All →</Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {recommended.map(p=> <PropertyCard key={p.id} p={p} featured/>)}
        </div>
      </section>

      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:20, fontWeight:800, color:'#111'}}>Trending Projects in Gurugram</h2>
          <Link to="/search?category=trending" style={{fontWeight:700, fontSize:12, color:'#fff', background:BLACK, padding:'7px 12px', borderRadius:20, border:`1px solid ${GOLD}`}}>View All Projects</Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {trending.map(p=> <PropertyCard key={p.id} p={p}/>)}
        </div>
      </section>

      {/* Prime Locations */}
      <section className="container" style={{padding:'28px 16px 0'}}>
        <h2 style={{fontSize:20, fontWeight:800, color:'#111', marginBottom:6}}>Gurugram's Prime Location</h2>
        <p style={{fontSize:12, color:'#6b7280', marginBottom:12}}>Explore properties in the most sought-after locations</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:12}} className="grid-6">
          {locations.map(l=>(
            <Link key={l.id} to={`/search?location=${encodeURIComponent(l.name)}`} style={{position:'relative', borderRadius:14, overflow:'hidden', aspectRatio:'1.05', background:'#000', display:'block', border:'1px solid #eee'}}>
              <img src={l.image} alt={l.name} style={{width:'100%', height:'100%', objectFit:'cover', opacity:.9}}/>
              <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,.7) 15%, transparent 65%)'}}/>
              <div style={{position:'absolute', bottom:0, left:0, right:0, padding:10, color:'#fff'}}>
                <div style={{fontWeight:700, fontSize:11, lineHeight:1.2}}>{l.name}</div>
                <div style={{fontSize:10, opacity:.85, marginTop:2}}>{l.count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:20, fontWeight:800, color:'#111'}}>Upcoming Projects in Gurugram</h2>
          <Link to="/search?category=upcoming" style={{fontWeight:700, fontSize:12, color:'#fff', background:BLACK, padding:'7px 12px', borderRadius:20, border:`1px solid ${GOLD}`}}>View All Projects</Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {upcoming.map(p=> <PropertyCard key={p.id} p={p}/>)}
        </div>
      </section>

      <section className="container" style={{padding:'28px 16px 0'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{fontSize:20, fontWeight:800, color:'#111'}}>New Launch Projects in Gurugram</h2>
          <Link to="/search?category=newlaunch" style={{fontWeight:700, fontSize:12, color:'#fff', background:BLACK, padding:'7px 12px', borderRadius:20, border:`1px solid ${GOLD}`}}>View All Projects</Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}} className="grid-4">
          {newlaunch.map(p=> <PropertyCard key={p.id} p={p}/>)}
        </div>
      </section>

      {/* Festival Offer */}
      <section style={{marginTop:32, background:'#fff', borderTop:'1px solid #eee', borderBottom:'1px solid #eee'}}>
        <div className="container" style={{padding:'26px 16px'}}>
          <div style={{textAlign:'center', marginBottom:18}}>
            <div style={{display:'inline-block', background:'#FFF7ED', color:'#92400e', fontWeight:700, fontSize:11, letterSpacing:.6, padding:'6px 12px', borderRadius:20, border:'1px solid #FDE68A'}}>EXCLUSIVE FESTIVAL EDITION 2026</div>
            <h2 style={{fontSize:20, fontWeight:800, marginTop:10, color:'#111'}}>Best Festival Offer in 2026 - Limited Period Luxury Deals</h2>
            <Link to="/search" style={{display:'inline-block', marginTop:10, fontWeight:700, fontSize:13, color:GOLD_DARK}}>View All Festival Offers →</Link>
          </div>

          <div style={{background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a1a05 100%)', borderRadius:16, padding:20, color:'#fff', position:'relative', overflow:'hidden', border:`1px solid ${GOLD}`}}>
            <div style={{display:'grid', gridTemplateColumns:'1.1fr 1.6fr', gap:20, alignItems:'center'}} className="festival-grid">
              <div>
                <div style={{fontSize:11, fontWeight:800, letterSpacing:1, color:GOLD}}>FESTIVAL LUXURY OFFER 2026</div>
                <h3 style={{fontSize:24, fontWeight:800, lineHeight:1.15, marginTop:6, fontFamily:"'Playfair Display', serif"}}>Grand Festival Offer in 2026</h3>
                <p style={{fontSize:13, opacity:.85, marginTop:8, lineHeight:1.5}}>Unlock ultra-luxury residences with exclusive festive perks.</p>
                <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginTop:16}}>
                  <div style={{background:'rgba(255,255,255,.08)', border:'1px solid rgba(212,175,55,.25)', borderRadius:12, padding:10, textAlign:'center'}}>
                    <div style={{fontSize:18}}>🪙</div>
                    <div style={{fontWeight:800, fontSize:12, marginTop:4, color:GOLD}}>50g Gold Coin</div>
                    <div style={{fontSize:11, opacity:.7}}>On Booking</div>
                  </div>
                  <div style={{background:'rgba(255,255,255,.08)', border:'1px solid rgba(212,175,55,.25)', borderRadius:12, padding:10, textAlign:'center'}}>
                    <div style={{fontSize:18}}>🏷️</div>
                    <div style={{fontWeight:800, fontSize:12, marginTop:4, color:GOLD}}>0% Stamp Duty</div>
                    <div style={{fontSize:11, opacity:.7}}>Guaranteed</div>
                  </div>
                  <div style={{background:'rgba(255,255,255,.08)', border:'1px solid rgba(212,175,55,.25)', borderRadius:12, padding:10, textAlign:'center'}}>
                    <div style={{fontSize:18}}>🏦</div>
                    <div style={{fontWeight:800, fontSize:12, marginTop:4, color:GOLD}}>No EMI Till</div>
                    <div style={{fontSize:11, opacity:.7}}>Possession</div>
                  </div>
                </div>
                <button style={{marginTop:16, background:GOLD, color:'#000', border:'none', padding:'12px 20px', borderRadius:10, fontWeight:800, fontSize:13, cursor:'pointer', width:'100%'}}>Claim Festive Deal →</button>
              </div>

              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10}} className="offer-grid">
                {offers.slice(0,6).map(o=>(
                  <div key={o.id} style={{background:'#fff', borderRadius:12, overflow:'hidden', color:'#111'}}>
                    <div style={{position:'relative', aspectRatio:'1.25', overflow:'hidden'}}>
                      <img src={o.image} alt={o.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                      <div style={{position:'absolute', top:8, left:8, background:GOLD, color:'#000', fontSize:9, fontWeight:800, padding:'4px 6px', borderRadius:6, letterSpacing:.4}}>{o.badge}</div>
                    </div>
                    <div style={{padding:'10px 10px 12px'}}>
                      <div style={{fontWeight:800, fontSize:12, lineHeight:1.25, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', minHeight:30}}>{o.title}</div>
                      <div style={{fontWeight:800, color:GOLD_DARK, fontSize:13, marginTop:4}}>{o.price}<span style={{fontWeight:500, color:'#6b7280', fontSize:11}}> *</span></div>
                      <div style={{fontSize:11, color:'#6b7280', marginTop:2, display:'flex', alignItems:'center', gap:4}}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/></svg>
                        {o.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container" style={{padding:'22px 16px'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, background:'#fff', border:`1px solid ${GOLD}`, borderRadius:14, padding:16}} className="stats-grid">
          <div style={{textAlign:'center', padding:'8px 0'}}>
            <div style={{fontWeight:800, fontSize:22, color:'#111'}}>500+</div>
            <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>Premium Projects</div>
          </div>
          <div style={{textAlign:'center', padding:'8px 0', borderLeft:'1px solid #f3e8d0', borderRight:'1px solid #f3e8d0'}}>
            <div style={{fontWeight:800, fontSize:22, color:'#111'}}>50K+</div>
            <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>Happy Families</div>
          </div>
          <div style={{textAlign:'center', padding:'8px 0'}}>
            <div style={{fontWeight:800, fontSize:22, color:'#111'}}>15+</div>
            <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>Years Experience</div>
          </div>
          <div style={{textAlign:'center', padding:'8px 0', borderLeft:'1px solid #f3e8d0'}}>
            <div style={{fontWeight:800, fontSize:22, color:'#111'}}>4.8★</div>
            <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>Customer Rating</div>
          </div>
        </div>
      </div>

      <Footer/>

      <style>{`
        @media(max-width: 1100px){
          .grid-4{ grid-template-columns: repeat(2,1fr) !important; }
          .grid-6{ grid-template-columns: repeat(3,1fr) !important; }
          .small-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .festival-grid{ grid-template-columns: 1fr !important; }
          .builders-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .why-grid{ grid-template-columns: 1fr !important; }
          .insights-grid{ grid-template-columns: 1fr !important; }
          .testi-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .branded-grid{ grid-template-columns: 1fr !important; }
          .sco-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .verano-banner{ display:none !important; }
        }
        @media(max-width: 640px){
          .grid-4{ grid-template-columns: 1fr !important; }
          .grid-6{ grid-template-columns: repeat(2,1fr) !important; }
          .offer-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .stats-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .small-grid{ grid-template-columns: 1fr 1fr !important; }
          .budget-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .bhk-grid{ grid-template-columns: repeat(3,1fr) !important; }
          .testi-grid{ grid-template-columns: 1fr !important; }
          .sco-grid{ grid-template-columns: 1fr !important; }
          .stats-5{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
