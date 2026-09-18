import { useState, useEffect } from 'react'

export default function Hero({ banners=[] }){
  const [idx, setIdx] = useState(0)
  const hero = banners.length ? banners : [
    { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=650&fit=crop", title:"Godrej Verano - Sector 63A", developer:"GODREJ PROPERTIES" },
    { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=650&fit=crop", title:"BPTP Downtown 66", developer:"BPTP LIMITED" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=650&fit=crop", title:"M3M Brabus Residences", developer:"M3M GROUP" }
  ]

  useEffect(()=>{
    const t = setInterval(()=> setIdx(i=> (i+1)%hero.length), 4000)
    return ()=> clearInterval(t)
  }, [hero.length])

  return (
    <div style={{position:'relative', background:'#000', overflow:'hidden'}}>
      <div style={{position:'relative', height:'420px', overflow:'hidden'}} className="hero-height">
        {hero.map((b,i)=>(
          <div key={i} style={{
            position:'absolute', inset:0,
            opacity: i===idx?1:0,
            transform: i===idx? 'scale(1)':'scale(1.03)',
            transition:'all .8s ease',
            pointerEvents: i===idx? 'auto':'none'
          }}>
            <img src={b.image} alt={b.title} style={{width:'100%', height:'100%', objectFit:'cover', opacity:.9}}/>
            <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.25) 100%)'}}/>
            <div style={{position:'absolute', left:'5%', bottom:'18%', maxWidth:560, color:'#fff'}}>
              <div style={{display:'inline-block', background:'rgba(255,255,255,.95)', color:'#111', fontWeight:800, fontSize:11, letterSpacing:.8, padding:'6px 10px', borderRadius:4, marginBottom:12}}>
                {b.developer || 'FEATURED PROJECT'}
              </div>
              <h1 style={{fontFamily:"'Playfair Display', serif", fontSize:'34px', lineHeight:1.1, fontWeight:700, textShadow:'0 4px 24px rgba(0,0,0,.5)', marginBottom:10}}>
                {b.title}
              </h1>
              <p style={{fontSize:14, opacity:.9, marginBottom:16}}>Experience luxury living at Golf Course Extension Road</p>
              <button style={{background:'#d8232a', color:'#fff', border:'none', padding:'10px 22px', borderRadius:24, fontWeight:700, fontSize:13, cursor:'pointer', display:'flex', alignItems:'center', gap:8}}>
                Explore Now <span>→</span>
              </button>
            </div>
          </div>
        ))}

        {/* arrows */}
        <button onClick={()=> setIdx(i=> (i-1+hero.length)%hero.length)} style={{position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.9)', border:'none', display:'grid', placeItems:'center', cursor:'pointer', boxShadow:'0 4px 12px rgba(0,0,0,.2)'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={()=> setIdx(i=> (i+1)%hero.length)} style={{position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.9)', border:'none', display:'grid', placeItems:'center', cursor:'pointer', boxShadow:'0 4px 12px rgba(0,0,0,.2)'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* dots */}
        <div style={{position:'absolute', bottom:18, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8}}>
          {hero.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} style={{width: i===idx?28:8, height:8, borderRadius:8, border:'none', background: i===idx?'#d8232a':'rgba(255,255,255,.7)', cursor:'pointer', transition:'all .3s'}}/>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .hero-height{ height: 340px !important; }
          .hero-height h1{ font-size:22px !important; }
        }
        @media(min-width:1280px){
          .hero-height{ height: 460px !important; }
        }
      `}</style>
    </div>
  )
}
