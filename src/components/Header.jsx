import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const GOLD = '#D4AF37'
const GOLD_DARK = '#B9943A'

export default function Header(){
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const handleSearch = (e)=>{
    e.preventDefault()
    if(q.trim()) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header style={{
      position:'sticky', top:0, zIndex:50, 
      background: 'linear-gradient(130deg, #000000 0%, #D4AF37 100%)',
      color:'#fff',
      boxShadow: scrolled? '0 4px 20px rgba(0,0,0,.25)':'0 2px 10px rgba(0,0,0,.1)',
      transition:'all .25s ease'
    }}>
      {/* Top bar - HomWisor gradient header */}
      <div className="container" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        height: scrolled? '56px':'64px', gap:16, transition:'height .25s ease'
      }}>
        {/* Left - HomWisor Logo - white/gold on black gradient */}
        <Link to="/" style={{display:'flex', alignItems:'center', gap:7, flexShrink:0}}>
          <div style={{display:'flex', alignItems:'flex-start', gap:1, lineHeight:1}}>
            <span style={{fontWeight:900, fontSize: scrolled? 30:33, letterSpacing:-1.5, lineHeight:0.85, color:'#fff', fontFamily:"'Inter', sans-serif", transition:'font-size .25s', textShadow:'0 1px 2px rgba(0,0,0,.2)'}}>Hom</span>
            <span style={{fontWeight:800, fontSize: scrolled? 30:33, letterSpacing:-1.2, lineHeight:0.85, color:GOLD}}>Wisor</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', marginLeft:4, lineHeight:1, marginTop:2}}>
            <span style={{fontWeight:700, fontSize:9, color:GOLD, letterSpacing:.5, display:'flex', alignItems:'center', gap:4}}>
              <span style={{fontSize:7, background:GOLD, color:'#000', padding:'1px 3px', borderRadius:3, fontWeight:800}}>NEW</span>
            </span>
            <span style={{fontSize:8, color:'rgba(255,255,255,.9)', letterSpacing:.3, marginTop:2, whiteSpace:'nowrap'}}>Rishto ki Shuruwat</span>
          </div>
        </Link>

        {/* Center - Gurugram + Search - white pill on dark */}
        <div style={{flex:1, maxWidth:560, display:'flex', alignItems:'center', gap:8}} className="header-center">
          <div style={{display:'flex', alignItems:'center', gap:6, background:'rgba(255,255,255,.95)', border:'1px solid rgba(255,255,255,.8)', padding:'7px 10px', borderRadius:8, fontWeight:600, fontSize:13, color:'#111', flexShrink:0}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Gurugram
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>

          <form onSubmit={handleSearch} style={{flex:1, display:'flex', alignItems:'center', background:'#fff', border:'1px solid #fff', borderRadius:8, overflow:'hidden', height:38, boxShadow:'0 2px 8px rgba(0,0,0,.15)'}} className="search-desktop">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects, localities..." style={{flex:1, height:'100%', border:'none', padding:'0 12px', fontSize:13, outline:'none', color:'#111'}}/>
            <button type="submit" style={{width:38, height:38, background:GOLD, border:'none', display:'grid', placeItems:'center', cursor:'pointer', flexShrink:0}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-3-3"/></svg>
            </button>
          </form>
        </div>

        {/* Right */}
        <div style={{display:'flex', alignItems:'center', gap:10, flexShrink:0}}>
          <Link to="/search" style={{display:'flex', alignItems:'center', gap:6, fontWeight:600, fontSize:13, color:'#fff', whiteSpace:'nowrap'}} className="hide-md">
            Location
            <span style={{background:GOLD, color:'#000', fontSize:8, fontWeight:800, padding:'1px 4px', borderRadius:10, letterSpacing:.3}}>NEW</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </Link>

          <Link to="/search" style={{width:30,height:30, display:'grid', placeItems:'center', borderRadius:'50%', border:'1px solid rgba(255,255,255,.4)', color:'#fff'}} className="hide-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </Link>

          {/* Snaps - gold on black */}
          <Link to="/property-snaps" style={{display:'flex', alignItems:'center', gap:6, background:'#fff', color:'#000', padding:'7px 14px', borderRadius:20, fontWeight:800, fontSize:13, whiteSpace:'nowrap', boxShadow:'0 2px 8px rgba(0,0,0,.2)'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={GOLD}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            Snaps
          </Link>

          <Link to="/admin" style={{width:30,height:30, display:'grid', placeItems:'center', color:'#fff', border:'1px solid rgba(255,255,255,.4)', borderRadius:'50%', background:'rgba(255,255,255,.1)'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>

          <button onClick={()=>setMobileMenu(!mobileMenu)} style={{width:36, height:36, display:'grid', placeItems:'center', color:'#000', background:'#fff', border:'none', borderRadius:8, cursor:'pointer', boxShadow:'0 2px 8px rgba(0,0,0,.15)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
              {mobileMenu ? <path d="M18 6L6 18M6 6l12 12"/> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom filter pills - white bar as per 100acress but with gold active */}
      <div style={{background:'#fff', borderTop:'1px solid #f3f4f6', overflowX:'auto'}} className="scrollbar-hide">
        <div className="container" style={{display:'flex', alignItems:'center', gap:6, height:42, fontSize:13, fontWeight:500, whiteSpace:'nowrap'}}>
          <Link to="/search" style={{color:GOLD_DARK, fontWeight:700, borderBottom:`2px solid ${GOLD}`, padding:'8px 10px'}}>Cities</Link>
          <Link to="/search?type=Apartment" style={{color:'#6b7280', padding:'8px 10px'}}>Apartments</Link>
          <Link to="/search?type=Branded" style={{color:'#6b7280', padding:'8px 10px'}}>Branded</Link>
          <Link to="/search?type=Luxury" style={{color:'#6b7280', padding:'8px 10px'}}>Luxury</Link>
          <Link to="/search?type=Commercial" style={{color:'#6b7280', padding:'8px 10px'}}>Commercial</Link>
          <Link to="/search?type=Rental" style={{color:'#6b7280', padding:'8px 10px'}}>Rental</Link>
          <Link to="/search?type=Villa" style={{color:'#6b7280', padding:'8px 10px'}}>Villas</Link>
          <Link to="/search?type=Plots" style={{color:'#6b7280', padding:'8px 10px'}}>Plots / Land</Link>
          <Link to="/search?type=Farmhouse" style={{color:'#6b7280', padding:'8px 10px'}}>Farmhouses</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div style={{background:'#fff', borderTop:'1px solid #e5e7eb', padding:16, boxShadow:'0 12px 30px rgba(0,0,0,.12)'}}>
          <form onSubmit={handleSearch} style={{marginBottom:12, display:'flex', gap:8}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects, localities..." style={{flex:1, height:42, border:'1px solid #e5e7eb', borderRadius:8, padding:'0 12px', fontSize:14, outline:'none'}}/>
            <button type="submit" style={{height:42, padding:'0 16px', background:GOLD, color:'#000', border:'none', borderRadius:8, fontWeight:800}}>Search</button>
          </form>
          <div style={{display:'grid', gap:8, fontSize:14}}>
            <Link to="/" onClick={()=>setMobileMenu(false)} style={{padding:'12px', background:'#f9fafb', borderRadius:8, border:'1px solid #eef0f3', color:'#111'}}>Home</Link>
            <Link to="/search" onClick={()=>setMobileMenu(false)} style={{padding:'12px', background:'#f9fafb', borderRadius:8, color:'#111'}}>All Projects</Link>
            <Link to="/property-snaps" onClick={()=>setMobileMenu(false)} style={{padding:'12px', background:GOLD, color:'#000', borderRadius:8, fontWeight:800, textAlign:'center'}}>▶ Snaps – Video Tours</Link>
            <Link to="/admin" onClick={()=>setMobileMenu(false)} style={{padding:'12px', background:'#000', color:GOLD, borderRadius:8, fontWeight:800, textAlign:'center'}}>Admin Panel</Link>
          </div>
          <div style={{marginTop:10, fontSize:11, color:'#6b7280', textAlign:'center'}}>HomWisor • Gurugram • info@homwisor.com</div>
        </div>
      )}

      <style>{`
        @media(max-width: 900px){
          .header-center{ display:none !important; }
          .hide-md{ display:none !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>
    </header>
  )
}
