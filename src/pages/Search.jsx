import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import API from '../utils/api'
import Header from '../components/Header'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

export default function Search(){
  const [params, setParams] = useSearchParams()
  const [properties, setProperties] = useState([])
  const [filtered, setFiltered] = useState([])
  const [q, setQ] = useState(params.get('q')||'')
  const [type, setType] = useState(params.get('type')||'')
  const [loc, setLoc] = useState(params.get('location')||'')
  const [cat, setCat] = useState(params.get('category')||'')
  const [budget, setBudget] = useState('')

  useEffect(()=>{
    API.get('/properties').then(r=> setProperties(r.data))
  },[])

  useEffect(()=>{
    let res = [...properties]
    const searchQ = params.get('q') || q
    const t = params.get('type') || type
    const l = params.get('location') || loc
    const c = params.get('category') || cat
    if(searchQ) res = res.filter(p=> p.title.toLowerCase().includes(searchQ.toLowerCase()) || p.location.toLowerCase().includes(searchQ.toLowerCase()))
    if(t && t!=='All') res = res.filter(p=> p.type.toLowerCase().includes(t.toLowerCase()) || p.bhk.toLowerCase().includes(t.toLowerCase()))
    if(l) res = res.filter(p=> p.location.toLowerCase().includes(l.toLowerCase()))
    if(c) res = res.filter(p=> p.category===c)
    if(budget){
      // simple budget filter not strict
    }
    setFiltered(res)
  }, [properties, params, q, type, loc, cat, budget])

  const apply = ()=>{
    const p = new URLSearchParams()
    if(q) p.set('q', q)
    if(type) p.set('type', type)
    if(loc) p.set('location', loc)
    if(cat) p.set('category', cat)
    setParams(p)
  }
  const clear = ()=>{
    setQ(''); setType(''); setLoc(''); setCat(''); setBudget(''); setParams({})
  }

  return (
    <div style={{background:'#f8fafc', minHeight:'100vh'}}>
      <Header/>
      <div className="container" style={{padding:'18px 16px'}}>
        {/* breadcrumb */}
        <div style={{fontSize:12, color:'#6b7280', display:'flex', gap:6, alignItems:'center'}}>
          <Link to="/" style={{color:'#6b7280'}}>Home</Link>
          <span>›</span>
          <span style={{color:'#111', fontWeight:600}}>Projects in Gurugram</span>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'280px 1fr', gap:18, marginTop:14}} className="search-layout">
          {/* Filter sidebar */}
          <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:16, height:'fit-content', position:'sticky', top:110}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
              <h3 style={{fontWeight:800, fontSize:14}}>Filters</h3>
              <button onClick={clear} style={{fontSize:12, fontWeight:600, color:'#d8232a', background:'none', border:'none', cursor:'pointer'}}>Clear All</button>
            </div>

            <div style={{display:'grid', gap:14}}>
              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>SEARCH</label>
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Project, Builder..." style={{width:'100%', marginTop:6, height:38, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', fontSize:13, outline:'none'}}/>
              </div>

              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>PROPERTY TYPE</label>
                <select value={type} onChange={e=>setType(e.target.value)} style={{width:'100%', marginTop:6, height:38, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', fontSize:13, background:'#fff'}}>
                  <option value="">All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Builder Floor</option>
                  <option>Plots</option>
                  <option>Commercial</option>
                  <option>Farmhouse</option>
                </select>
              </div>

              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>LOCATION</label>
                <select value={loc} onChange={e=>setLoc(e.target.value)} style={{width:'100%', marginTop:6, height:38, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', fontSize:13, background:'#fff'}}>
                  <option value="">All Gurugram</option>
                  <option>Golf Course Road</option>
                  <option>Golf Course Extension Road</option>
                  <option>Sohna Road</option>
                  <option>Dwarka Expressway</option>
                  <option>New Gurgaon</option>
                  <option>Southern Peripheral Road</option>
                </select>
              </div>

              <div>
                <label style={{fontSize:11, fontWeight:700, letterSpacing:.5, color:'#374151'}}>CATEGORY</label>
                <div style={{display:'grid', gap:6, marginTop:8}}>
                  {[
                    {id:'', label:'All Projects'},
                    {id:'recommended', label:'Recommended'},
                    {id:'trending', label:'Trending'},
                    {id:'upcoming', label:'Upcoming'},
                    {id:'newlaunch', label:'New Launch'}
                  ].map(o=>(
                    <label key={o.id} style={{display:'flex', alignItems:'center', gap:8, fontSize:13, cursor:'pointer'}}>
                      <input type="radio" name="cat" checked={cat===o.id} onChange={()=>setCat(o.id)} />
                      {o.label}
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={apply} style={{height:40, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer', marginTop:4}}>Apply Filters</button>
              {filtered.length>0 && <div style={{textAlign:'center', fontSize:12, color:'#6b7280'}}>{filtered.length} properties found</div>}
            </div>

            {/* contact card */}
            <div style={{marginTop:16, background:'#111', color:'#fff', borderRadius:12, padding:14}}>
              <div style={{fontWeight:800, fontSize:13}}>Need Expert Help?</div>
              <div style={{fontSize:12, opacity:.75, marginTop:4, lineHeight:1.4}}>Our property experts will help you find the perfect home.</div>
              <a href="tel:8500900100" style={{display:'block', marginTop:10, background:'#d8232a', color:'#fff', textAlign:'center', padding:'8px 0', borderRadius:8, fontWeight:700, fontSize:12}}>Call 8500 900 100</a>
            </div>
          </div>

          {/* results */}
          <div>
            <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:14, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
              <div>
                <h1 style={{fontSize:18, fontWeight:800, color:'#111'}}>Properties in Gurugram</h1>
                <p style={{fontSize:12, color:'#6b7280', marginTop:2}}>Showing {filtered.length} results • Luxury Residences & Investment Opportunities</p>
              </div>
              <select onChange={e=>{
                let sorted=[...filtered]
                if(e.target.value==='price-low') sorted.sort((a,b)=> parseFloat(a.price.replace(/[^0-9.]/g,'')) - parseFloat(b.price.replace(/[^0-9.]/g,'')))
                if(e.target.value==='price-high') sorted.sort((a,b)=> parseFloat(b.price.replace(/[^0-9.]/g,'')) - parseFloat(a.price.replace(/[^0-9.]/g,'')))
                setFiltered(sorted)
              }} style={{height:36, border:'1px solid #e5e7eb', borderRadius:8, padding:'0 10px', fontSize:13, background:'#fff'}}>
                <option value="">Sort by: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filtered.length===0 ? (
              <div style={{background:'#fff', border:'1px solid #eee', borderRadius:14, padding:40, textAlign:'center', marginTop:14}}>
                <div style={{fontSize:48, opacity:.3}}>🏢</div>
                <div style={{fontWeight:700, marginTop:8}}>No properties found</div>
                <div style={{fontSize:13, color:'#6b7280', marginTop:4}}>Try adjusting your filters or search query</div>
                <button onClick={clear} style={{marginTop:14, background:'#d8232a', color:'#fff', border:'none', padding:'10px 18px', borderRadius:8, fontWeight:700, cursor:'pointer'}}>Clear Filters</button>
              </div>
            ) : (
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginTop:14}} className="results-grid">
                {filtered.map(p=> <PropertyCard key={p.id} p={p}/>)}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
      <style>{`
        @media(max-width: 960px){
          .search-layout{ grid-template-columns: 1fr !important; }
          .results-grid{ grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width: 640px){
          .results-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
