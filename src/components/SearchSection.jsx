import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchSection(){
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState('')

  const tabs = ['All','Apartments','Villas','Builder Floor','Plots / Land','Commercial','Farmhouse']

  const handleSearch = ()=>{
    const params = new URLSearchParams()
    if(type) params.set('type', type)
    if(location) params.set('location', location)
    if(activeTab !== 'All') params.set('type', activeTab)
    if(budget) params.set('search', budget)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <div style={{background:'#fff', borderBottom:'1px solid #eee', padding:'14px 0 18px'}}>
      <div className="container">
        {/* tabs - like HomWisor filter pills */}
        <div style={{display:'flex', gap:8, overflowX:'auto', paddingBottom:12}} className="scrollbar-hide">
          {tabs.map(t=>(
            <button key={t} onClick={()=>setActiveTab(t)} style={{
              whiteSpace:'nowrap', padding:'8px 16px', borderRadius:20, fontSize:12.5, fontWeight:600,
              border: activeTab===t? '1px solid #111':'1px solid #e5e7eb',
              background: activeTab===t? '#111':'#fff',
              color: activeTab===t? '#fff':'#374151',
              cursor:'pointer', transition:'all .2s'
            }}>{t}</button>
          ))}
          <div style={{marginLeft:'auto', display:'flex', gap:6, alignItems:'center', fontSize:12, color:'#6b7280'}}>
            <span style={{display:'none'}} className="hide-mobile">Cities</span>
          </div>
        </div>

        {/* Search bar big */}
        <div style={{
          display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr auto', gap:12,
          background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:14, padding:12, alignItems:'center'
        }} className="search-grid">

          <div style={{position:'relative'}}>
            <label style={{fontSize:10, fontWeight:700, letterSpacing:.6, color:'#6b7280', display:'block', marginBottom:4, marginLeft:4}}>PROPERTY TYPE</label>
            <div style={{position:'relative'}}>
              <select value={type} onChange={e=>setType(e.target.value)} style={{width:'100%', height:42, borderRadius:10, border:'1px solid #e5e7eb', background:'#fff', padding:'0 36px 0 12px', fontSize:13, fontWeight:500, appearance:'none', outline:'none', cursor:'pointer'}}>
                <option value="">Select property type</option>
                <option>Flat/Apartment</option>
                <option>Builder Floor</option>
                <option>Villa</option>
                <option>Residential Land</option>
                <option>Commercial</option>
                <option>Farmhouse</option>
              </select>
              <svg style={{position:'absolute', right:12, top:14, pointerEvents:'none'}} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>

          <div>
            <label style={{fontSize:10, fontWeight:700, letterSpacing:.6, color:'#6b7280', display:'block', marginBottom:4, marginLeft:4}}>LOCATION</label>
            <select value={location} onChange={e=>setLocation(e.target.value)} style={{width:'100%', height:42, borderRadius:10, border:'1px solid #e5e7eb', background:'#fff', padding:'0 36px 0 12px', fontSize:13, fontWeight:500, appearance:'none', outline:'none', cursor:'pointer'}}>
              <option value="">Select location</option>
              <option>Golf Course Road</option>
              <option>Golf Course Extension Road</option>
              <option>Sohna Road</option>
              <option>Dwarka Expressway</option>
              <option>New Gurgaon</option>
              <option>Southern Peripheral Road</option>
            </select>
          </div>

          <div>
            <label style={{fontSize:10, fontWeight:700, letterSpacing:.6, color:'#6b7280', display:'block', marginBottom:4, marginLeft:4}}>BUDGET / SEARCH</label>
            <input value={budget} onChange={e=>setBudget(e.target.value)} placeholder="Search Project, Builder..." style={{width:'100%', height:42, borderRadius:10, border:'1px solid #e5e7eb', background:'#fff', padding:'0 12px', fontSize:13, outline:'none'}}/>
          </div>

          <button onClick={handleSearch} style={{height:42, alignSelf:'end', background:'#d8232a', color:'#fff', border:'none', padding:'0 26px', borderRadius:10, fontWeight:700, fontSize:14, cursor:'pointer', display:'flex', alignItems:'center', gap:8, whiteSpace:'nowrap'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-3-3"/></svg>
            Search
          </button>
        </div>

        <div style={{display:'flex', gap:12, marginTop:10, fontSize:11, color:'#6b7280', flexWrap:'wrap'}}>
          <span>Popular Searches:</span>
          <span style={{color:'#d8232a', fontWeight:600, cursor:'pointer'}} onClick={()=>navigate('/search?type=Apartment')}>Flat/Apartment</span>
          <span>•</span>
          <span style={{color:'#d8232a', fontWeight:600, cursor:'pointer'}} onClick={()=>navigate('/search?type=Villa')}>Independent House/Villa</span>
          <span>•</span>
          <span style={{color:'#d8232a', fontWeight:600, cursor:'pointer'}} onClick={()=>navigate('/search?location=Gurugram')}>Projects in Gurugram</span>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .search-grid{ grid-template-columns:1fr !important; }
          .search-grid button{ width:100%; justify-content:center; }
        }
      `}</style>
    </div>
  )
}
