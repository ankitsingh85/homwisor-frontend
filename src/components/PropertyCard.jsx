import { Link } from 'react-router-dom'

export default function PropertyCard({ p, featured=false }){
  return (
    <div className="card-hover" style={{
      background:'#fff', borderRadius:14, overflow:'hidden', border:'1px solid #eee',
      display:'flex', flexDirection:'column', position:'relative'
    }}>
      <Link to={`/property/${p.id}`} style={{position:'relative', display:'block', overflow:'hidden', aspectRatio:'1.45'}}>
        <img src={p.image} alt={p.title} style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform .5s'}} className="card-img"/>
        {/* top badges */}
        <div style={{position:'absolute', top:10, left:10, display:'flex', gap:6}}>
          {p.rera && <span style={{background:'#16a34a', color:'#fff', fontSize:10, fontWeight:800, letterSpacing:.5, padding:'4px 8px', borderRadius:6, display:'flex', alignItems:'center', gap:4}}>
            ✓ RERA
          </span>}
          {p.tag && !featured && <span style={{background: p.tag==='Founder Choice'?'#111':'#d8232a', color:'#fff', fontSize:10, fontWeight:700, padding:'4px 8px', borderRadius:6}}>{p.tag}</span>}
        </div>
        {featured && (
          <div style={{position:'absolute', top:10, left:10, background:'#ffcc00', color:'#111', fontSize:10, fontWeight:800, padding:'4px 8px', borderRadius:6, letterSpacing:.4}}>
            ★ Founder Choice
          </div>
        )}
        <div style={{position:'absolute', bottom:10, right:10, background:'rgba(0,0,0,.7)', color:'#fff', fontSize:11, fontWeight:600, padding:'4px 8px', borderRadius:20, backdropFilter:'blur(6px)'}}>
          {p.bhk} • {p.type}
        </div>
      </Link>

      <div style={{padding:'14px 14px 12px', flex:1, display:'flex', flexDirection:'column'}}>
        <Link to={`/property/${p.id}`} style={{fontWeight:700, fontSize:15, lineHeight:1.25, color:'#111', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', minHeight:38}}>
          {p.title}
        </Link>
        <div style={{fontWeight:800, fontSize:15, color:'#B9943A', marginTop:6}}>{p.priceRange || p.price}</div>
        <div style={{fontSize:12, color:'#6b7280', marginTop:4, display:'flex', gap:4, alignItems:'center'}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.location}</span>
        </div>

        <div style={{display:'flex', gap:8, marginTop:12}}>
          <a href={`https://wa.me/918500900100?text=Hi, I am interested in ${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" style={{flex:1, height:34, display:'grid', placeItems:'center', background:'#25D366', color:'#fff', borderRadius:8, fontWeight:700, fontSize:12, gap:6}}>
            <span style={{display:'flex', alignItems:'center', gap:6}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M19.1 4.9C16.9 2.7 13.9 1.5 10.8 1.5 4.9 1.5 .2 6.2 .2 12c0 1.9.5 3.7 1.4 5.3L0 24l6.9-1.8c1.5.8 3.2 1.2 4.9 1.2 5.9 0 10.6-4.7 10.6-10.6 0-2.8-1.1-5.5-3.3-7.9zm-8.3 15.6c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.8-3.9 8.7-8.7 8.7z"/></svg>
              WhatsApp
            </span>
          </a>
          <Link to={`/property/${p.id}`} style={{flex:1, height:34, display:'grid', placeItems:'center', background:'#0A0A0A', color:'#D4AF37', border:'1px solid #D4AF37', borderRadius:8, fontWeight:700, fontSize:12}}>
            View Details
          </Link>
        </div>
      </div>

      <style>{`
        .card-hover:hover .card-img{ transform: scale(1.05); }
      `}</style>
    </div>
  )
}
