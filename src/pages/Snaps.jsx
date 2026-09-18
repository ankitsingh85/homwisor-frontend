import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/api'

export default function Snaps(){
  const [snaps, setSnaps] = useState([])
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [loading, setLoading] = useState(true)
  const videoRef = useRef(null)

  useEffect(()=>{
    API.get('/snaps').then(r=> { setSnaps(r.data); setLoading(false)}).catch(()=> setLoading(false))
  },[])

  useEffect(()=>{
    if(videoRef.current){
      if(playing) videoRef.current.play().catch(()=>{})
      else videoRef.current.pause()
    }
  },[playing, idx])

  useEffect(()=>{
    const onKey = (e)=>{
      if(e.key==='ArrowDown') next()
      if(e.key==='ArrowUp') prev()
      if(e.key===' ') { e.preventDefault(); setPlaying(p=>!p)}
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  })

  const s = snaps[idx]
  const total = snaps.length

  const next = ()=> setIdx(i=> (i+1)%total)
  const prev = ()=> setIdx(i=> (i-1+total)%total)

  if(loading) return <div style={{minHeight:'100vh', background:'#0a0a0a', display:'grid', placeItems:'center', color:'#fff'}}>Loading snaps...</div>
  if(!s) return <div style={{minHeight:'100vh', background:'#0a0a0a', display:'grid', placeItems:'center', color:'#fff'}}>No snaps found. Add via Admin Panel.</div>

  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', overflow:'hidden'}}>
      {/* Minimal header for snaps page - back to home */}
      <div style={{height:48, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 16px', borderBottom:'1px solid rgba(255,255,255,.08)', background:'#0a0a0a', position:'sticky', top:0, zIndex:10}}>
        <Link to="/" style={{display:'flex', alignItems:'center', gap:8, color:'#fff', fontWeight:800, fontSize:14}}>
          <span style={{width:28,height:28, background:'#d8232a', borderRadius:6, display:'grid', placeItems:'center', fontWeight:900, fontSize:12}}>100</span>
          acress.com
          <span style={{fontWeight:400, opacity:.6, fontSize:12, marginLeft:4}}>/ property-snaps</span>
        </Link>
        <Link to="/" style={{width:34,height:34, borderRadius:'50%', background:'rgba(255,255,255,.08)', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,.12)'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </Link>
      </div>

      <div style={{maxWidth:1100, margin:'0 auto', padding:'14px', display:'grid', gridTemplateColumns:'420px 420px', gap:18, justifyContent:'center', alignItems:'start'}} className="snaps-layout">

        {/* LEFT - Video Player (Vertical Reels style) */}
        <div style={{position:'relative', background:'#000', borderRadius:20, overflow:'hidden', aspectRatio:'9/16', maxHeight:'78vh', border:'1px solid rgba(255,255,255,.08)', boxShadow:'0 20px 60px rgba(0,0,0,.6)'}} className="video-box">
          {/* Video */}
          <video
            ref={videoRef}
            key={s.id}
            src={s.videoUrl}
            poster={s.image || s.thumbnail}
            muted={muted}
            loop
            playsInline
            autoPlay
            style={{width:'100%', height:'100%', objectFit:'cover'}}
            onClick={()=> setPlaying(!playing)}
          />

          {/* Top bar */}
          <div style={{position:'absolute', top:0, left:0, right:0, padding:12, background:'linear-gradient(to bottom, rgba(0,0,0,.55) 0%, transparent 100%)', display:'flex', alignItems:'center', gap:10}}>
            <div style={{width:32,height:32, borderRadius:'50%', background:'#fff', display:'grid', placeItems:'center', flexShrink:0, border:'2px solid rgba(255,255,255,.9)'}}>
              <span style={{fontWeight:900, fontSize:11, color:'#d8232a'}}>100</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontWeight:700, fontSize:13, lineHeight:1.1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', color:'#fff'}}>{s.title}</div>
              <div style={{fontSize:11, opacity:.8, color:'#fff'}}>HomWisor</div>
            </div>
            <button onClick={()=> setMuted(!muted)} style={{width:34,height:34, borderRadius:'50%', background: muted? 'rgba(0,0,0,.5)':'rgba(255,255,255,.9)', border:'1px solid rgba(255,255,255,.2)', display:'grid', placeItems:'center', color: muted? '#fff':'#111', cursor:'pointer', backdropFilter:'blur(6px)'}}>
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              ):(
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              )}
            </button>
          </div>

          {/* Center overlay text like SC */}
          <div style={{position:'absolute', top:'38%', left:0, right:0, textAlign:'center', pointerEvents:'none'}}>
            <div style={{fontSize:10, letterSpacing:1.5, opacity:.9, color:'#fff', fontWeight:600, textShadow:'0 2px 10px rgba(0,0,0,.6)'}}>WHERE</div>
            <div style={{fontSize:22, fontWeight:800, letterSpacing:0.5, color:'#fff', textShadow:'0 4px 20px rgba(0,0,0,.7)', marginTop:2, fontFamily:"'Playfair Display', serif"}}>SPACIOUS LIVING</div>
            <div style={{width:40, height:1.5, background:'#fff', margin:'6px auto', opacity:.8}}></div>
            <div style={{fontSize:9, letterSpacing:2, opacity:.85, color:'#fff'}}>{s.badge || 'LUXURY EDITION'}</div>
          </div>

          {/* Center play/pause */}
          <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center', pointerEvents:'none'}}>
            {!playing && (
              <div style={{width:64,height:64, borderRadius:'50%', background:'rgba(0,0,0,.45)', backdropFilter:'blur(8px)', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,.2)'}}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.14v14l11-7z"/></svg>
              </div>
            )}
            <button onClick={()=> setPlaying(!playing)} style={{position:'absolute', inset:0, background:'transparent', border:'none', cursor:'pointer', pointerEvents:'auto'}} aria-label="play"></button>
          </div>

          {/* Left/Right nav for desktop */}
          <button onClick={prev} style={{position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', width:36,height:36, borderRadius:'50%', background:'rgba(0,0,0,.45)', border:'1px solid rgba(255,255,255,.15)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer', backdropFilter:'blur(6px)'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={next} style={{position:'absolute', right:10, top:'50%', transform:'translateY(-50%)', width:36,height:36, borderRadius:'50%', background:'rgba(0,0,0,.45)', border:'1px solid rgba(255,255,255,.15)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer', backdropFilter:'blur(6px)'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Bottom bar */}
          <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'10px 12px', background:'linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.2) 60%, transparent 100%)'}}>
            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
              <button style={{width:28,height:28, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.2)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={()=> setPlaying(!playing)} style={{width:40,height:40, borderRadius:'50%', background:'rgba(255,255,255,.9)', border:'none', display:'grid', placeItems:'center', cursor:'pointer'}}>
                {playing ? <svg width="16" height="16" viewBox="0 0 24 24" fill="#111"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="#111"><path d="M8 5.14v14l11-7z"/></svg>}
              </button>
              <button style={{width:28,height:28, borderRadius:'50%', background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.2)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </button>
              <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:8}}>
                <button style={{width:28,height:28, borderRadius:'50%', background:'rgba(255,255,255,.15)', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,.2)', color:'#fff'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                </button>
              </div>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div style={{flex:1, background:'rgba(0,0,0,.35)', border:'1px solid rgba(255,255,255,.12)', borderRadius:12, padding:8, display:'flex', alignItems:'center', gap:8}}>
                <img src={s.thumbnail || s.image} alt="thumb" style={{width:42,height:32, borderRadius:6, objectFit:'cover', border:'1px solid rgba(255,255,255,.2)'}}/>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:11, fontWeight:600, lineHeight:1.2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>Welcome to a {s.title.slice(0,28)}...</div>
                  <div style={{fontSize:10, opacity:.7}}>Where spacious living • {s.location}</div>
                </div>
              </div>
              <a href={`tel:${s.phone.replace(/\s/g,'')}`} style={{background:'#d8232a', color:'#fff', padding:'8px 12px', borderRadius:20, fontWeight:800, fontSize:11, display:'flex', alignItems:'center', gap:6, whiteSpace:'nowrap', textDecoration:'none'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5 12.91 19.79 19.79 0 0 1 2.07 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72c.12 1.05.4 2.07.82 3.03a2 2 0 0 1-.57 2.1l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.57c.96.42 1.98.7 3.03.82A2 2 0 0 1 22 16.92z"/></svg>
                {s.phone}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - Info Panel (white card) */}
        <div style={{display:'flex', flexDirection:'column', gap:10, maxHeight:'78vh', overflowY:'auto'}} className="scrollbar-hide">
          {/* Navigation */}
          <div style={{background:'#1a1a1a', border:'1px solid rgba(255,255,255,.08)', borderRadius:16, padding:14, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>
              <div style={{fontSize:10, fontWeight:700, letterSpacing:1, color:'rgba(255,255,255,.5)'}}>NAVIGATION</div>
              <div style={{fontWeight:800, fontSize:22, marginTop:2}}>{idx+1}<span style={{opacity:.35, fontWeight:600}}>/{total}</span></div>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button onClick={prev} disabled={total<=1} style={{width:44,height:44, borderRadius:12, background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.08)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer', opacity: idx===0?.6:1}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M18 15l-6-6-6 6"/></svg>
              </button>
              <button onClick={next} disabled={total<=1} style={{width:44,height:44, borderRadius:12, background:'#2a2a2a', border:'1px solid rgba(255,255,255,.12)', display:'grid', placeItems:'center', color:'#fff', cursor:'pointer', boxShadow:'0 4px 12px rgba(0,0,0,.2)'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            </div>
          </div>

          <div style={{background:'#f8f9fb', borderRadius:20, padding:16, color:'#111', boxShadow:'0 20px 60px rgba(0,0,0,.25)', border:'1px solid #eef0f3'}}>
            {/* High Demand */}
            <div style={{background:'#fef2f2', border:'1px solid #fecaca', borderRadius:12, padding:10, display:'flex', gap:8, alignItems:'flex-start'}}>
              <span style={{color:'#dc2626', marginTop:1}}>⚡</span>
              <span style={{fontSize:12, fontWeight:600, color:'#991b1b', lineHeight:1.4}}>{s.demandText}</span>
            </div>

            {/* Active buyers */}
            <div style={{background:'#fefce8', border:'1px solid #fde68a', borderRadius:12, padding:10, display:'flex', gap:8, alignItems:'center', marginTop:8}}>
              <span style={{width:8,height:8, background:'#22c55e', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 0 4px rgba(34,197,94,.15)'}}></span>
              <span style={{fontSize:12, fontWeight:700, color:'#92400e'}}>{s.activeBuyers} active buyers viewing this project right now</span>
            </div>

            {/* Project Overview */}
            <div style={{marginTop:14}}>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:.6, color:'#6b7280'}}>PROJECT OVERVIEW</div>
              <div style={{background:'#f3f4f6', border:'1px solid #e5e7eb', borderRadius:12, padding:12, marginTop:8}}>
                <div style={{fontSize:13, lineHeight:1.5, color:'#374151', fontStyle:'italic'}}>"{s.description}"</div>
              </div>
            </div>

            {/* Micro-Market Location */}
            <div style={{background:'#f9fafb', border:'1px solid #eef0f3', borderRadius:12, padding:12, display:'flex', gap:10, alignItems:'center', marginTop:10}}>
              <div style={{width:36,height:36, borderRadius:10, background:'#fff', border:'1px solid #eee', display:'grid', placeItems:'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={{fontSize:10, fontWeight:700, letterSpacing:.6, color:'#6b7280'}}>MICRO-MARKET LOCATION</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:1}}>{s.microMarket || s.location}</div>
              </div>
            </div>

            {/* Investment/Price */}
            <div style={{background:'#f9fafb', border:'1px solid #eef0f3', borderRadius:12, padding:12, display:'flex', gap:10, alignItems:'center', marginTop:10}}>
              <div style={{width:36,height:36, borderRadius:10, background:'#fff', border:'1px solid #eee', display:'grid', placeItems:'center', color:'#059669'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8"><path d="M3 21h18"/><path d="M3 7v14"/><path d="M9 21V7"/><path d="M15 21V7"/><path d="M21 7V21"/><path d="M3 7l9-4 9 4"/><path d="M9 7h6"/></svg>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:10, fontWeight:700, letterSpacing:.6, color:'#6b7280'}}>INVESTMENT/PRICE</div>
                <div style={{fontWeight:700, fontSize:13, marginTop:1}}>{s.price}</div>
              </div>
              <button style={{width:32,height:32, borderRadius:10, background:'#fff', border:'1px solid #e5e7eb', display:'grid', placeItems:'center', cursor:'pointer'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 7-6 11-6 11S6 15 6 8z"/><path d="M10 21h4"/><path d="M12 17v4"/></svg>
              </button>
            </div>

            {/* Investor Matrix Tool */}
            <div style={{background:'#0f1e2e', borderRadius:14, padding:12, marginTop:12, color:'#fff'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:6, fontWeight:700, fontSize:11, letterSpacing:.4}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  INVESTOR MATRIX TOOL
                </div>
                <span style={{fontSize:10, fontWeight:700, background:'rgba(56,189,248,.15)', color:'#38bdf8', padding:'3px 7px', borderRadius:20, border:'1px solid rgba(56,189,248,.25)'}}>◉ Verified ROI</span>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:12, borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:12}}>
                <div>
                  <div style={{fontSize:10, opacity:.6}}>Est. Monthly Rental</div>
                  <div style={{fontWeight:800, fontSize:13, marginTop:2}}>{s.monthlyRental}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:10, opacity:.6}}>Annualized ROI Yield</div>
                  <div style={{fontWeight:800, fontSize:13, marginTop:2, color:'#22c55e'}}>~ {s.roi}</div>
                </div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:12}}>
                <a href={`tel:${s.phone.replace(/\s/g,'')}`} style={{height:36, background:'#d8232a', color:'#fff', borderRadius:10, display:'grid', placeItems:'center', fontWeight:700, fontSize:12, textDecoration:'none'}}>Call Now</a>
                <Link to={`/property/${s.id.replace('snap','p') || ''}`} style={{height:36, background:'#fff', color:'#111', borderRadius:10, display:'grid', placeItems:'center', fontWeight:700, fontSize:12, textDecoration:'none'}}>View Details</Link>
              </div>
            </div>

            {/* Thumbnails row for quick navigation */}
            <div style={{display:'flex', gap:8, marginTop:12, overflowX:'auto'}} className="scrollbar-hide">
              {snaps.map((snap,i)=>(
                <button key={snap.id} onClick={()=> setIdx(i)} style={{flexShrink:0, width:64, height:44, borderRadius:8, overflow:'hidden', border: i===idx? '2px solid #d8232a':'1px solid #e5e7eb', opacity: i===idx?1:.6, cursor:'pointer', position:'relative', padding:0}}>
                  <img src={snap.thumbnail || snap.image} alt={snap.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  {i===idx && <span style={{position:'absolute', inset:0, background:'rgba(216,35,42,.15)', borderRadius:6}}></span>}
                </button>
              ))}
            </div>
          </div>

          <div style={{textAlign:'center', fontSize:11, opacity:.5, paddingBottom:10}}>Swipe up/down or use arrow keys • {total} Snaps • Auto-play • Fully dynamic from Admin</div>
        </div>
      </div>

      <style>{`
        @media(max-width: 960px){
          .snaps-layout{ grid-template-columns: 1fr !important; max-width: 500px !important; }
          .video-box{ max-height: 64vh !important; }
        }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>
    </div>
  )
}
