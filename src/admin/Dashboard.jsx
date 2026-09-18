import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../utils/api'

export default function Dashboard(){
  const [stats,setStats]=useState(null)
  const [props,setProps]=useState([])
  const [enqs,setEnqs]=useState([])
  const [banners,setBanners]=useState({hero:[], small:[]})
  const [locations,setLocations]=useState([])
  const [offers,setOffers]=useState([])
  const [snaps,setSnaps]=useState([])
  const [active,setActive]=useState('overview')
  const [editing,setEditing]=useState(null)
  const nav=useNavigate()

  const checkAuth=()=>{
    const t=localStorage.getItem('admin_token')
    if(!t) nav('/admin')
  }
  useEffect(()=>{ checkAuth(); load()},[])

  const load=async()=>{
    try{
      const [s,p,e,b,l,o,sn]=await Promise.all([
        API.get('/admin/stats').catch(()=>({data:{}})),
        API.get('/properties'),
        API.get('/enquiries').catch(()=>({data:[]})),
        API.get('/banners'),
        API.get('/locations'),
        API.get('/offers'),
        API.get('/snaps')
      ])
      setStats(s.data); setProps(p.data); setEnqs(e.data||[]); setBanners(b.data); setLocations(l.data); setOffers(o.data); setSnaps(sn.data||[])
    }catch(e){
      if(e.response?.status===401){ localStorage.removeItem('admin_token'); nav('/admin')}
    }
  }

  const logout=()=>{ localStorage.removeItem('admin_token'); nav('/admin')}

  // --- Property CRUD with exact size validation ---
  const emptyProp={title:'', price:'', priceRange:'', location:'', image:'', logo:'', brandColor:'#1e3a5f', developer:'', possession:'Dec 2032', landArea:'3.42 Acres', towers:'3 Tower – 110 Unit', propertyTypeDetail:'Residential Flats', highlights:'', gallery:'', category:'recommended', type:'Apartment', bhk:'3 BHK', tag:'Founder Choice', rera:true, status:'Trending'}
  const [form,setForm]=useState(emptyProp)
  const [imgError, setImgError]=useState('')
  const [logoError, setLogoError]=useState('')

  const validateImageSize = (url, reqW, reqH) => new Promise((resolve)=>{
    const img = new Image()
    img.onload = ()=> resolve({ok: img.naturalWidth===reqW && img.naturalHeight===reqH, w:img.naturalWidth, h:img.naturalHeight})
    img.onerror = ()=> resolve({ok:false, w:0,h:0, err:true})
    img.src = url
  })

  const saveProp=async(e)=>{
    e.preventDefault()
    setImgError(''); setLogoError('')
    // Validate main image must be 600x400
    if(form.image){
      const v = await validateImageSize(form.image, 600, 400)
      if(!v.ok){
        setImgError(`❌ Main Image must be exactly 600×400 pixels. Uploaded is ${v.w}×${v.h}. No other size allowed.`)
        return
      }
    }
    // Validate logo must be 200x80
    if(form.logo){
      const v = await validateImageSize(form.logo, 200, 80)
      if(!v.ok){
        setLogoError(`❌ Logo must be exactly 200×80 pixels. Uploaded is ${v.w}×${v.h}. No other size allowed.`)
        return
      }
    }
    // Parse highlights & gallery (comma or newline)
    const payload = {...form}
    payload.highlights = form.highlights ? form.highlights.split('\n').map(s=>s.trim()).filter(Boolean) : []
    payload.gallery = form.gallery ? form.gallery.split('\n').map(s=>s.trim()).filter(Boolean) : []
    try{
      if(editing) await API.put(`/properties/${editing}`, payload)
      else await API.post('/properties', payload)
      setEditing(null); setForm(emptyProp); load()
    }catch(e){ alert(e.message)}
  }
  const editProp=(p)=>{ 
    const f = {...p, highlights: (p.highlights||[]).join('\n'), gallery: (p.gallery||[]).join('\n')}
    setEditing(p.id); setForm({...emptyProp, ...f}); setActive('properties'); window.scrollTo(0,0)
  }
  const delProp=async(id)=>{ if(!confirm('Delete property?')) return; await API.delete(`/properties/${id}`); load()}

  // Banners
  const [bannerForm,setBannerForm]=useState({image:'', title:'', link:'#', developer:''})
  const [bannerType,setBannerType]=useState('hero')
  const saveBanner=async(e)=>{
    e.preventDefault()
    await API.post(`/banners/${bannerType}`, bannerForm)
    setBannerForm({image:'', title:'', link:'#', developer:''}); load()
  }
  const delBanner=async(type,id)=>{ if(!confirm('Delete?'))return; await API.delete(`/banners/${type}/${id}`); load()}

  // Locations
  const [locForm,setLocForm]=useState({name:'', image:'', count:''})
  const saveLoc=async(e)=>{
    e.preventDefault(); await API.post('/locations', locForm); setLocForm({name:'', image:'', count:''}); load()
  }
  const delLoc=async(id)=>{ if(!confirm('Delete?'))return; await API.delete(`/locations/${id}`); load()}

  // Offers
  const [offerForm,setOfferForm]=useState({title:'', price:'', location:'', image:'', badge:''})
  const saveOffer=async(e)=>{ e.preventDefault(); await API.post('/offers', offerForm); setOfferForm({title:'', price:'', location:'', image:'', badge:''}); load()}
  const delOffer=async(id)=>{ if(!confirm('Delete?'))return; await API.delete(`/offers/${id}`); load()}

  // Snaps
  const emptySnap = {title:'', developer:'', location:'', microMarket:'', price:'Contact for price', description:'', videoUrl:'', thumbnail:'', image:'', phone:'9811 750 740', demandText:'High Demand: 10 buyers enquired in last 24 hours', activeBuyers:24, monthlyRental:'₹85,000/mo', roi:'5.5%', badge:'LUXURY EDITION'}
  const [snapForm,setSnapForm]=useState(emptySnap)
  const [editingSnap,setEditingSnap]=useState(null)
  const saveSnap=async(e)=>{
    e.preventDefault()
    try{
      if(editingSnap) await API.put(`/snaps/${editingSnap}`, snapForm)
      else await API.post('/snaps', snapForm)
      setEditingSnap(null); setSnapForm(emptySnap); load()
    }catch(e){ alert(e.message)}
  }
  const editSnap=(s)=>{ setEditingSnap(s.id); setSnapForm({...s}); setActive('snaps'); window.scrollTo(0,0)}
  const delSnap=async(id)=>{ if(!confirm('Delete snap?'))return; await API.delete(`/snaps/${id}`); load()}

  const delEnq=async(id)=>{ await API.delete(`/enquiries/${id}`); load()}

  const reset=async()=>{ if(!confirm('Reset to default demo data?'))return; await API.post('/admin/reset'); load()}

  return (
    <div style={{minHeight:'100vh', background:'#f8fafc', display:'grid', gridTemplateColumns:'260px 1fr'}} className="dash-layout">
      {/* Sidebar */}
      <aside style={{background:'#0a0a0a', color:'#fff', padding:16, position:'sticky', top:0, height:'100vh', overflowY:'auto'}}>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
          <div style={{width:36,height:36, background:'#d8232a', borderRadius:8, display:'grid', placeItems:'center', fontWeight:800, fontSize:12}}>HW</div>
          <div>
            <div style={{fontWeight:800, fontSize:14, lineHeight:1}}>HomWisor Admin</div>
            <div style={{fontSize:11, opacity:.6}}>Dynamic CMS</div>
          </div>
        </div>

        <div style={{display:'grid', gap:6}}>
          {[
            {id:'overview', label:'Overview', icon:'📊'},
            {id:'properties', label:'Properties', icon:'🏠'},
            {id:'snaps', label:'Property Snaps', icon:'🎬'},
            {id:'banners', label:'Banners', icon:'🖼️'},
            {id:'locations', label:'Prime Locations', icon:'📍'},
            {id:'offers', label:'Festival Offers', icon:'🎉'},
            {id:'enquiries', label:'Enquiries', icon:'💬'},
          ].map(m=>(
            <button key={m.id} onClick={()=>setActive(m.id)} style={{
              textAlign:'left', padding:'10px 12px', borderRadius:10, border:'none',
              background: active===m.id?'#d8232a':'#1a1a1a',
              color:'#fff', fontWeight:600, fontSize:13, cursor:'pointer', display:'flex', gap:8, alignItems:'center'
            }}>
              <span>{m.icon}</span> {m.label}
              {m.id==='enquiries' && enqs.length>0 && <span style={{marginLeft:'auto', background:'#fff', color:'#d8232a', fontSize:11, fontWeight:800, padding:'2px 6px', borderRadius:20}}>{enqs.length}</span>}
              {m.id==='snaps' && <span style={{marginLeft:'auto', background:'rgba(255,255,255,.15)', color:'#fff', fontSize:11, fontWeight:700, padding:'2px 6px', borderRadius:20}}>{snaps.length}</span>}
            </button>
          ))}
        </div>

        <div style={{marginTop:14, display:'grid', gap:8}}>
          <Link to="/" style={{textAlign:'center', padding:'10px 0', background:'#1a1a1a', borderRadius:10, fontWeight:600, fontSize:13, color:'#fff'}}>← View Website</Link>
          <Link to="/property-snaps" style={{textAlign:'center', padding:'10px 0', background:'#d8232a', borderRadius:10, fontWeight:700, fontSize:13, color:'#fff'}}>▶ View Snaps</Link>
          <button onClick={reset} style={{padding:'10px 0', background:'#1a1a1a', border:'1px solid #333', borderRadius:10, fontWeight:600, fontSize:12, color:'#fff', cursor:'pointer'}}>↺ Reset Demo Data</button>
          <button onClick={logout} style={{padding:'10px 0', background:'#fff', color:'#111', border:'none', borderRadius:10, fontWeight:800, fontSize:13, cursor:'pointer'}}>Logout</button>
        </div>

        <div style={{marginTop:16, background:'#1a1a1a', border:'1px solid #222', borderRadius:10, padding:10}}>
          <div style={{fontWeight:700, fontSize:12}}>💡 New: Snaps</div>
          <div style={{fontSize:11, opacity:.7, marginTop:4, lineHeight:1.5}}>Snaps are vertical reels (like SC). Upload videoUrl + details → appears at /property-snaps instantly. Fully dynamic!</div>
        </div>
      </aside>

      {/* Main */}
      <main style={{padding:18, overflowX:'hidden'}}>
        {active==='overview' && (
          <div>
            <h1 style={{fontWeight:800, fontSize:20}}>Dashboard Overview</h1>
            <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>Welcome back! Your website is live and fully dynamic.</p>

            <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:16}} className="stat-grid">
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16}}>
                <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>TOTAL PROPERTIES</div>
                <div style={{fontWeight:800, fontSize:28, marginTop:6}}>{stats?.totalProperties ?? props.length}</div>
                <div style={{fontSize:11, color:'#16a34a', marginTop:4}}>● Live on website</div>
              </div>
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16}}>
                <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>TOTAL SNAPS</div>
                <div style={{fontWeight:800, fontSize:28, marginTop:6}}>{stats?.totalSnaps ?? snaps.length}</div>
                <div style={{fontSize:11, color:'#d8232a', marginTop:4}}>🎬 Video tours</div>
              </div>
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16}}>
                <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>ENQUIRIES</div>
                <div style={{fontWeight:800, fontSize:28, marginTop:6}}>{enqs.length}</div>
                <div style={{fontSize:11, color:'#d8232a', marginTop:4}}>{enqs.length>0?'New leads waiting': 'No new leads'}</div>
              </div>
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16}}>
                <div style={{fontSize:12, color:'#6b7280', fontWeight:600}}>FESTIVAL OFFERS</div>
                <div style={{fontWeight:800, fontSize:28, marginTop:6}}>{offers.length}</div>
                <div style={{fontSize:11, color:'#f59e0b', marginTop:4}}>Active offers</div>
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1.2fr .8fr', gap:14, marginTop:14}} className="overview-grid">
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:14}}>
                <div style={{fontWeight:800, fontSize:14}}>Recent Snaps</div>
                <div style={{display:'grid', gap:10, marginTop:12}}>
                  {snaps.slice(0,3).map(s=>(
                    <div key={s.id} style={{display:'flex', gap:10, alignItems:'center', padding:10, background:'#fef2f2', borderRadius:10, border:'1px solid #fecaca'}}>
                      <div style={{width:48,height:64, borderRadius:8, overflow:'hidden', background:'#000', flexShrink:0, position:'relative'}}>
                        <img src={s.thumbnail || s.image} alt={s.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                        <span style={{position:'absolute', inset:0, display:'grid', placeItems:'center', background:'rgba(0,0,0,.2)'}}>▶</span>
                      </div>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontWeight:700, fontSize:13, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{s.title}</div>
                        <div style={{fontSize:11, color:'#6b7280'}}>{s.location} • {s.activeBuyers} viewing</div>
                      </div>
                      <span style={{fontWeight:700, fontSize:11, background:'#d8232a', color:'#fff', padding:'4px 8px', borderRadius:20}}>🎬</span>
                    </div>
                  ))}
                  {snaps.length===0 && <div style={{textAlign:'center', padding:14, color:'#6b7280', fontSize:13}}>No snaps yet - add first snap</div>}
                </div>
                <button onClick={()=>setActive('snaps')} style={{marginTop:12, width:'100%', height:38, background:'#d8232a', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer'}}>Manage Snaps →</button>
              </div>

              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:14}}>
                <div style={{fontWeight:800, fontSize:14}}>Recent Properties</div>
                <div style={{display:'grid', gap:10, marginTop:12}}>
                  {props.slice(0,3).map(p=>(
                    <div key={p.id} style={{display:'flex', gap:10, alignItems:'center', padding:10, background:'#f9fafb', borderRadius:10, border:'1px solid #eee'}}>
                      <img src={p.image} alt={p.title} style={{width:56,height:44, objectFit:'cover', borderRadius:8}}/>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontWeight:700, fontSize:13, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.title}</div>
                        <div style={{fontSize:11, color:'#6b7280'}}>{p.location.split(',').slice(0,2).join(',')}</div>
                      </div>
                      <span style={{fontWeight:700, fontSize:12, background:'#111', color:'#fff', padding:'4px 8px', borderRadius:20}}>{p.price}</span>
                    </div>
                  ))}
                </div>
                <button onClick={()=>setActive('properties')} style={{marginTop:12, width:'100%', height:38, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer'}}>Manage Properties →</button>
              </div>
            </div>
          </div>
        )}

        {active==='properties' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Manage Properties <span style={{fontWeight:500, color:'#6b7280', fontSize:13}}>({props.length})</span></h2>
            <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>Create, edit, delete. Change <strong>Category</strong> to control which homepage section it appears in.</p>

            <form onSubmit={saveProp} style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, marginTop:14, display:'grid', gap:12}}>
              <div style={{fontWeight:800, fontSize:14}}>{editing? '✏️ Edit Property':'➕ Add New Property'}</div>
              <div style={{background:'#fef3c7', border:'1px solid #fde68a', borderRadius:10, padding:10, fontSize:12, lineHeight:1.5}}>
                <strong>⚠️ Exact Size Rules (Strict):</strong><br/>
                • <strong>Main Image:</strong> Must be <span style={{background:'#fff', padding:'1px 6px', borderRadius:4, fontWeight:800, border:'1px solid #e5e7eb'}}>600×400</span> (3:2) – no other size allowed.<br/>
                • <strong>Logo:</strong> Must be <span style={{background:'#fff', padding:'1px 6px', borderRadius:4, fontWeight:800, border:'1px solid #e5e7eb'}}>200×80</span> (5:2) PNG recommended – no other size allowed.<br/>
                • <strong>Gallery:</strong> Each <span style={{background:'#fff', padding:'1px 6px', borderRadius:4, fontWeight:800, border:'1px solid #e5e7eb'}}>800×500</span> (8:5) will be checked on save.<br/>
                <span style={{color:'#92400e'}}>Tip: Use URLs ending with `?w=600&h=400&fit=crop` for exact main image.</span>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}} className="form-grid">
                <input required value={form.title} onChange={e=>setForm({...form, title:e.target.value})} placeholder="Title e.g. M3M Brabus Residences" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={form.developer} onChange={e=>setForm({...form, developer:e.target.value})} placeholder="Developer e.g. M3M Group" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={form.price} onChange={e=>setForm({...form, price:e.target.value})} placeholder="Price e.g. ₹20 Cr*" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={form.priceRange} onChange={e=>setForm({...form, priceRange:e.target.value})} placeholder="Price Range e.g. ₹20 - 28 Cr" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={form.location} onChange={e=>setForm({...form, location:e.target.value})} placeholder="Location e.g. Sector 58, Gurugram" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <div style={{display:'flex', gap:8, alignItems:'center'}}>
                  <input type="color" value={form.brandColor} onChange={e=>setForm({...form, brandColor:e.target.value})} style={{width:44, height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:4, cursor:'pointer'}} title="Brand Color (matches logo as per SC)"/>
                  <span style={{fontSize:12, fontWeight:600, color:'#6b7280'}}>Brand Color → detail navbar</span>
                </div>
                <div style={{gridColumn:'span 2'}}>
                  <input required value={form.image} onChange={e=>setForm({...form, image:e.target.value})} placeholder="Main Image URL – REQUIRED 600×400 (e.g. https://images.unsplash.com/...?w=600&h=400&fit=crop)" style={{width:'100%', height:40, border: imgError? '1px solid #ef4444':'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                  {imgError && <div style={{color:'#dc2626', fontSize:11, fontWeight:700, marginTop:6, background:'#fef2f2', padding:'6px 8px', borderRadius:6, border:'1px solid #fecaca'}}>{imgError}</div>}
                  {!imgError && form.image && <div style={{fontSize:11, color:'#059669', marginTop:4}}>✓ Will validate 600×400 on save</div>}
                </div>
                <div style={{gridColumn:'span 2'}}>
                  <input required value={form.logo} onChange={e=>setForm({...form, logo:e.target.value})} placeholder="Logo URL – REQUIRED 200×80 (e.g. https://via.placeholder.com/200x80/1e3a5f/ffffff?text=M3M)" style={{width:'100%', height:40, border: logoError? '1px solid #ef4444':'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                  {logoError && <div style={{color:'#dc2626', fontSize:11, fontWeight:700, marginTop:6, background:'#fef2f2', padding:'6px 8px', borderRadius:6, border:'1px solid #fecaca'}}>{logoError}</div>}
                  {!logoError && form.logo && <div style={{fontSize:11, color:'#059669', marginTop:4}}>✓ Will validate 200×80 on save – also sets detail page navbar color</div>}
                </div>
                <select value={form.category} onChange={e=>setForm({...form, category:e.target.value})} style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', background:'#fff'}}>
                  <option value="recommended">Recommended (Founder Choice)</option>
                  <option value="trending">Trending</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="newlaunch">New Launch</option>
                </select>
                <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', background:'#fff'}}>
                  <option>Apartment</option><option>Villa</option><option>Builder Floor</option><option>Plots</option><option>Commercial</option><option>Farmhouse</option>
                </select>
                <input value={form.bhk} onChange={e=>setForm({...form, bhk:e.target.value})} placeholder="BHK e.g. 4 & 5 BHK" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={form.tag} onChange={e=>setForm({...form, tag:e.target.value})} placeholder="Tag e.g. Founder Choice / RERA" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <select value={form.status} onChange={e=>setForm({...form, status:e.target.value})} style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', background:'#fff'}}>
                  <option>Trending</option><option>Upcoming</option><option>New Launch</option><option>Ready to Move</option>
                </select>
                <input value={form.possession} onChange={e=>setForm({...form, possession:e.target.value})} placeholder="Possession e.g. Dec 2032" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={form.landArea} onChange={e=>setForm({...form, landArea:e.target.value})} placeholder="Land Area e.g. 3.42 Acres" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={form.towers} onChange={e=>setForm({...form, towers:e.target.value})} placeholder="Towers/Units e.g. 3 Tower – 110 Unit" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={form.propertyTypeDetail} onChange={e=>setForm({...form, propertyTypeDetail:e.target.value})} placeholder="Property Type Detail e.g. Residential Flats" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              </div>

              {/* Highlights - matches SC */}
              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>PROJECT HIGHLIGHTS – one per line (4 lines recommended as per SC)</label>
                <textarea value={form.highlights} onChange={e=>setForm({...form, highlights:e.target.value})} placeholder={`Two Apartments Per Floor but Feels Like One Home on Each Floor\nUltra-Luxury 4 & 5 BHK Residences - Spacious homes planned in sizes of approximately 5000 - 7000 SQ.FT\nLow-Density Development - Planned across around 30 acres with just 2 towers\nTwo Residences Per Core - A planning concept designed...`} rows={4} style={{width:'100%', marginTop:6, border:'1px solid #e5e7eb', borderRadius:10, padding:'10px 12px', fontSize:13, resize:'none'}}/>
                <div style={{fontSize:11, color:'#6b7280', marginTop:4}}>Exactly these appear in detail page “Project Highlights” section (checkmarks).</div>
              </div>

              {/* Gallery */}
              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>GALLERY IMAGE URLs – one per line (each must be 800×500, comma or newline)</label>
                <textarea value={form.gallery} onChange={e=>setForm({...form, gallery:e.target.value})} placeholder={"https://images.unsplash.com/...?w=800&h=500&fit=crop\nhttps://images.unsplash.com/...?w=800&h=500&fit=crop"} rows={2} style={{width:'100%', marginTop:6, border:'1px solid #e5e7eb', borderRadius:10, padding:'10px 12px', fontSize:13, resize:'none'}}/>
                <div style={{fontSize:11, color:'#6b7280', marginTop:4}}>Each gallery image should be 800×500. First image is fallback hero if needed.</div>
              </div>

              <div style={{display:'flex', gap:8}}>
                <button type="submit" style={{flex:1, height:42, background:'#d8232a', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>{editing? 'Update Property':'Add Property'}</button>
                {editing && <button type="button" onClick={()=>{setEditing(null); setForm(emptyProp); setImgError(''); setLogoError('')}} style={{height:42, padding:'0 18px', background:'#eee', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer'}}>Cancel</button>}
              </div>
              <div style={{display:'flex', gap:10, flexWrap:'wrap', alignItems:'center', background:'#f9fafb', padding:10, borderRadius:10, border:'1px solid #eee'}}>
                {form.logo && <div><div style={{fontSize:10, fontWeight:700, color:'#6b7280'}}>LOGO PREVIEW (200×80)</div><img src={form.logo} alt="logo preview" style={{height:32, maxWidth:120, objectFit:'contain', background:'#fff', padding:'4px 8px', borderRadius:6, border:'1px solid #eee', marginTop:4}}/></div>}
                {form.image && <div><div style={{fontSize:10, fontWeight:700, color:'#6b7280'}}>MAIN IMAGE PREVIEW (600×400)</div><img src={form.image} alt="preview" style={{width:180, height:120, objectFit:'cover', borderRadius:8, border:'1px solid #eee', marginTop:4}}/></div>}
                {form.brandColor && <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:8}}><span style={{fontSize:10, fontWeight:700, color:'#6b7280'}}>Navbar Color</span><span style={{width:32,height:32, borderRadius:8, background:form.brandColor, border:'1px solid #eee', display:'inline-block'}}></span></div>}
              </div>
            </form>

            <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12, marginTop:14}} className="prop-grid">
              {props.map(p=>(
                <div key={p.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:10, display:'flex', gap:10}}>
                  <div style={{display:'flex', flexDirection:'column', gap:6}}>
                    <img src={p.image} alt={p.title} style={{width:90,height:60, objectFit:'cover', borderRadius:8, border:'1px solid #eee'}}/>
                    {p.logo && <img src={p.logo} alt="logo" style={{width:90,height:24, objectFit:'contain', borderRadius:4, background:'#fff', border:'1px solid #eee', padding:'2px'}}/>}
                  </div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontWeight:700, fontSize:13, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.title}</div>
                    <div style={{fontSize:11, color:'#6b7280', display:'flex', gap:6, alignItems:'center'}}><span style={{width:10,height:10, borderRadius:'50%', background:p.brandColor||'#1e3a5f', display:'inline-block'}}></span>{p.developer || p.category} • {p.type} • {p.price}</div>
                    <div style={{fontSize:11, color:'#6b7280', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.location}</div>
                    <div style={{fontSize:10, color:'#9ca3af', marginTop:2}}>Img: 600×400 ✅ Logo: 200×80 ✅</div>
                    <div style={{display:'flex', gap:6, marginTop:6}}>
                      <button onClick={()=>editProp(p)} style={{fontSize:11, fontWeight:700, background:'#111', color:'#fff', border:'none', padding:'4px 8px', borderRadius:6, cursor:'pointer'}}>Edit</button>
                      <button onClick={()=>delProp(p.id)} style={{fontSize:11, fontWeight:700, background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'4px 8px', borderRadius:6, cursor:'pointer'}}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active==='snaps' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Manage Property Snaps 🎬 <span style={{fontWeight:500, color:'#6b7280', fontSize:13}}>({snaps.length} reels)</span></h2>
            <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>Vertical video reels like Instagram/TikTok - shown at <strong>/property-snaps</strong>. Upload videoUrl, thumbnail, and info cards.</p>

            <form onSubmit={saveSnap} style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, marginTop:14, display:'grid', gap:12}}>
              <div style={{fontWeight:800, fontSize:14, display:'flex', alignItems:'center', gap:8}}>
                {editingSnap? '✏️ Edit Snap':'➕ Add New Snap'}
                {editingSnap && <span style={{fontSize:11, color:'#6b7280', fontWeight:400}}>(editing {editingSnap})</span>}
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}} className="form-grid">
                <input required value={snapForm.title} onChange={e=>setSnapForm({...snapForm, title:e.target.value})} placeholder="Title e.g. Oberoi Realty 360 North" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.developer} onChange={e=>setSnapForm({...snapForm, developer:e.target.value})} placeholder="Developer e.g. Oberoi Realty" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={snapForm.videoUrl} onChange={e=>setSnapForm({...snapForm, videoUrl:e.target.value})} placeholder="Video URL (mp4) - e.g. https://videos.pexels.com/..." style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={snapForm.thumbnail} onChange={e=>setSnapForm({...snapForm, thumbnail:e.target.value})} placeholder="Thumbnail Image URL" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.image} onChange={e=>setSnapForm({...snapForm, image:e.target.value})} placeholder="Poster Image URL (fallback)" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.phone} onChange={e=>setSnapForm({...snapForm, phone:e.target.value})} placeholder="Phone e.g. 9811 750 740" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.location} onChange={e=>setSnapForm({...snapForm, location:e.target.value})} placeholder="Location e.g. Sector 66, Gurugram" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.microMarket} onChange={e=>setSnapForm({...snapForm, microMarket:e.target.value})} placeholder="Micro-Market e.g. Gurugram (N/A)" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.price} onChange={e=>setSnapForm({...snapForm, price:e.target.value})} placeholder="Price e.g. Contact for price / ₹5.20 Cr" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.badge} onChange={e=>setSnapForm({...snapForm, badge:e.target.value})} placeholder="Badge e.g. WHERE SPACIOUS LIVING" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <textarea value={snapForm.description} onChange={e=>setSnapForm({...snapForm, description:e.target.value})} placeholder="Project Overview - Experience luxury living..." rows={2} style={{gridColumn:'span 2', border:'1px solid #e5e7eb', borderRadius:10, padding:'10px 12px', resize:'none'}}/>
                <input value={snapForm.demandText} onChange={e=>setSnapForm({...snapForm, demandText:e.target.value})} placeholder="High Demand text" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input type="number" value={snapForm.activeBuyers} onChange={e=>setSnapForm({...snapForm, activeBuyers: parseInt(e.target.value)||0})} placeholder="Active Buyers (number)" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.monthlyRental} onChange={e=>setSnapForm({...snapForm, monthlyRental:e.target.value})} placeholder="Monthly Rental e.g. ₹85,000/mo" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input value={snapForm.roi} onChange={e=>setSnapForm({...snapForm, roi:e.target.value})} placeholder="ROI e.g. 5.5%" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              </div>
              <div style={{display:'flex', gap:8}}>
                <button type="submit" style={{flex:1, height:42, background:'#d8232a', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>{editingSnap? 'Update Snap':'Add Snap'}</button>
                {editingSnap && <button type="button" onClick={()=>{setEditingSnap(null); setSnapForm(emptySnap)}} style={{height:42, padding:'0 18px', background:'#eee', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer'}}>Cancel</button>}
              </div>
              {(snapForm.thumbnail || snapForm.videoUrl) && (
                <div style={{display:'flex', gap:10, alignItems:'center', background:'#f9fafb', padding:10, borderRadius:10, border:'1px solid #eee'}}>
                  {snapForm.thumbnail && <img src={snapForm.thumbnail} alt="preview" style={{width:80, height:110, objectFit:'cover', borderRadius:8, border:'1px solid #eee'}}/>}
                  <div style={{fontSize:11, color:'#6b7280', lineHeight:1.5}}>
                    <strong>Preview:</strong> Video will auto-play muted looping.<br/>
                    Thumbnail shown as poster until video loads.<br/>
                    <a href={snapForm.videoUrl} target="_blank" rel="noreferrer" style={{color:'#d8232a'}}>Test video link</a>
                  </div>
                </div>
              )}
            </form>

            <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12, marginTop:14}} className="prop-grid">
              {snaps.map(s=>(
                <div key={s.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:10, display:'flex', gap:10}}>
                  <div style={{width:74, height:100, borderRadius:8, overflow:'hidden', background:'#000', flexShrink:0, position:'relative'}}>
                    <img src={s.thumbnail || s.image} alt={s.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                    <span style={{position:'absolute', inset:0, display:'grid', placeItems:'center', background:'rgba(0,0,0,.25)', color:'#fff', fontSize:16}}>▶</span>
                  </div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontWeight:700, fontSize:13, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{s.title}</div>
                    <div style={{fontSize:11, color:'#6b7280'}}>{s.location} • {s.activeBuyers} viewing</div>
                    <div style={{fontSize:11, color:'#d8232a', fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{s.demandText}</div>
                    <div style={{display:'flex', gap:6, marginTop:6}}>
                      <button onClick={()=>editSnap(s)} style={{fontSize:11, fontWeight:700, background:'#111', color:'#fff', border:'none', padding:'4px 8px', borderRadius:6, cursor:'pointer'}}>Edit</button>
                      <button onClick={()=>delSnap(s.id)} style={{fontSize:11, fontWeight:700, background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'4px 8px', borderRadius:6, cursor:'pointer'}}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active==='banners' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Manage Banners</h2>
            <p style={{fontSize:13, color:'#6b7280'}}>Hero carousel (top large) and Small banners (4 cards below search)</p>

            <form onSubmit={saveBanner} style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, marginTop:14, display:'grid', gap:10}}>
              <div style={{fontWeight:800, fontSize:14}}>Add Banner</div>
              <div style={{display:'flex', gap:8}}>
                <button type="button" onClick={()=>setBannerType('hero')} style={{padding:'6px 14px', borderRadius:20, border:'none', fontWeight:700, fontSize:12, cursor:'pointer', background: bannerType==='hero'?'#111':'#eee', color: bannerType==='hero'?'#fff':'#111'}}>Hero (Large)</button>
                <button type="button" onClick={()=>setBannerType('small')} style={{padding:'6px 14px', borderRadius:20, border:'none', fontWeight:700, fontSize:12, cursor:'pointer', background: bannerType==='small'?'#111':'#eee', color: bannerType==='small'?'#fff':'#111'}}>Small (4 cards)</button>
              </div>
              <input required value={bannerForm.image} onChange={e=>setBannerForm({...bannerForm, image:e.target.value})} placeholder="Image URL" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              <input required value={bannerForm.title} onChange={e=>setBannerForm({...bannerForm, title:e.target.value})} placeholder="Title" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              {bannerType==='hero' && <input value={bannerForm.developer} onChange={e=>setBannerForm({...bannerForm, developer:e.target.value})} placeholder="Developer e.g. GODREJ PROPERTIES" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>}
              <input value={bannerForm.link} onChange={e=>setBannerForm({...bannerForm, link:e.target.value})} placeholder="Link (# or /search)" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              <button type="submit" style={{height:42, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>Add {bannerType} Banner</button>
            </form>

            <div style={{marginTop:16}}>
              <h3 style={{fontWeight:700, fontSize:13}}>Hero Banners ({banners.hero.length})</h3>
              <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10, marginTop:8}} className="banner-grid">
                {banners.hero.map(b=>(
                  <div key={b.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
                    <img src={b.image} alt={b.title} style={{width:'100%', height:120, objectFit:'cover'}}/>
                    <div style={{padding:10, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div><div style={{fontWeight:700, fontSize:12}}>{b.title}</div><div style={{fontSize:11, color:'#6b7280'}}>{b.developer}</div></div>
                      <button onClick={()=>delBanner('hero', b.id)} style={{background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, cursor:'pointer'}}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{fontWeight:700, fontSize:13, marginTop:16}}>Small Banners ({banners.small.length})</h3>
              <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:8}} className="small-b-grid">
                {banners.small.map(b=>(
                  <div key={b.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
                    <img src={b.image} alt={b.title} style={{width:'100%', height:80, objectFit:'cover'}}/>
                    <div style={{padding:8, fontWeight:600, fontSize:11}}>{b.title}</div>
                    <button onClick={()=>delBanner('small', b.id)} style={{margin:8, marginTop:0, background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'4px 8px', borderRadius:6, fontWeight:700, fontSize:11, cursor:'pointer', width:'calc(100% - 16px)'}}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {active==='locations' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Prime Locations</h2>
            <form onSubmit={saveLoc} style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, marginTop:14, display:'grid', gap:10}}>
              <input required value={locForm.name} onChange={e=>setLocForm({...locForm, name:e.target.value})} placeholder="Location Name e.g. Golf Course Road" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              <input required value={locForm.image} onChange={e=>setLocForm({...locForm, image:e.target.value})} placeholder="Image URL" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              <input required value={locForm.count} onChange={e=>setLocForm({...locForm, count:e.target.value})} placeholder="Count e.g. 142 Projects" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              <button type="submit" style={{height:42, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>Add Location</button>
            </form>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:14}} className="loc-grid">
              {locations.map(l=>(
                <div key={l.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
                  <img src={l.image} alt={l.name} style={{width:'100%', height:110, objectFit:'cover'}}/>
                  <div style={{padding:10}}>
                    <div style={{fontWeight:700, fontSize:13}}>{l.name}</div>
                    <div style={{fontSize:11, color:'#6b7280'}}>{l.count}</div>
                    <button onClick={()=>delLoc(l.id)} style={{marginTop:8, background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, cursor:'pointer', width:'100%'}}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active==='offers' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Festival Offers</h2>
            <form onSubmit={saveOffer} style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, marginTop:14, display:'grid', gap:10}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}} className="form-grid">
                <input required value={offerForm.title} onChange={e=>setOfferForm({...offerForm, title:e.target.value})} placeholder="Title e.g. BPTP DownTown 66" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={offerForm.price} onChange={e=>setOfferForm({...offerForm, price:e.target.value})} placeholder="Price e.g. ₹5.20 Cr" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={offerForm.location} onChange={e=>setOfferForm({...offerForm, location:e.target.value})} placeholder="Location e.g. Sector 66, Gurugram" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={offerForm.badge} onChange={e=>setOfferForm({...offerForm, badge:e.target.value})} placeholder="Badge e.g. NAVRATRI SPECIAL" style={{height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
                <input required value={offerForm.image} onChange={e=>setOfferForm({...offerForm, image:e.target.value})} placeholder="Image URL" style={{gridColumn:'span 2', height:40, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px'}}/>
              </div>
              <button type="submit" style={{height:42, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>Add Offer</button>
            </form>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:14}} className="offer-admin-grid">
              {offers.map(o=>(
                <div key={o.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
                  <img src={o.image} alt={o.title} style={{width:'100%', height:130, objectFit:'cover'}}/>
                  <div style={{padding:10}}>
                    <div style={{fontWeight:700, fontSize:12}}>{o.title}</div>
                    <div style={{fontSize:11, color:'#d8232a', fontWeight:700}}>{o.price} • {o.badge}</div>
                    <div style={{fontSize:11, color:'#6b7280'}}>{o.location}</div>
                    <button onClick={()=>delOffer(o.id)} style={{marginTop:8, background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, cursor:'pointer', width:'100%'}}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active==='enquiries' && (
          <div>
            <h2 style={{fontWeight:800, fontSize:18}}>Enquiries <span style={{color:'#6b7280', fontWeight:500}}>({enqs.length})</span></h2>
            <p style={{fontSize:13, color:'#6b7280'}}>Leads from property detail pages. Contact them quickly!</p>
            <div style={{display:'grid', gap:10, marginTop:14}}>
              {enqs.length===0 && <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:20, textAlign:'center', color:'#6b7280'}}>No enquiries yet.</div>}
              {enqs.map(e=>(
                <div key={e.id} style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12, alignItems:'flex-start'}}>
                  <div style={{width:36,height:36, borderRadius:'50%', background:'#d8232a', color:'#fff', display:'grid', placeItems:'center', fontWeight:800, fontSize:12, flexShrink:0}}>{e.name[0]}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700, fontSize:14}}>{e.name} <span style={{fontWeight:400, color:'#6b7280', fontSize:12}}>• {e.date}</span></div>
                    <div style={{fontSize:12, color:'#374151', marginTop:2}}>📞 {e.phone} {e.email && `• ✉️ ${e.email}`}</div>
                    <div style={{fontSize:12, color:'#d8232a', fontWeight:600, marginTop:4}}>Property: {e.property}</div>
                    <div style={{fontSize:13, color:'#4b5563', marginTop:6, background:'#f9fafb', padding:8, borderRadius:8, border:'1px solid #eee'}}>{e.message || 'No message'}</div>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:6}}>
                    <a href={`tel:${e.phone}`} style={{background:'#111', color:'#fff', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, textAlign:'center'}}>Call</a>
                    <a href={`https://wa.me/91${e.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" style={{background:'#25D366', color:'#fff', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, textAlign:'center'}}>WhatsApp</a>
                    <button onClick={()=>delEnq(e.id)} style={{background:'#fef2f2', color:'#991b1b', border:'1px solid #fecaca', padding:'6px 10px', borderRadius:8, fontWeight:700, fontSize:11, cursor:'pointer'}}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @media(max-width: 960px){
          .dash-layout{ grid-template-columns: 1fr !important; }
          .dash-layout aside{ position: relative !important; height:auto !important; }
          .stat-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .overview-grid{ grid-template-columns: 1fr !important; }
          .prop-grid{ grid-template-columns: 1fr !important; }
          .banner-grid{ grid-template-columns: 1fr !important; }
          .small-b-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .loc-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .offer-admin-grid{ grid-template-columns: repeat(2,1fr) !important; }
          .tip-grid{ grid-template-columns: 1fr !important; }
          .form-grid{ grid-template-columns: 1fr !important; }
          .form-grid input, .form-grid textarea{ grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  )
}
