import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../utils/api'

export default function AdminLogin(){
  const [form,setForm]=useState({username:'admin', password:'admin123'})
  const [err,setErr]=useState('')
  const [loading,setLoading]=useState(false)
  const nav=useNavigate()

  const submit=async(e)=>{
    e.preventDefault()
    setLoading(true); setErr('')
    try{
      const r=await API.post('/admin/login', form)
      localStorage.setItem('admin_token', r.data.token)
      nav('/admin/dashboard')
    }catch(e){
      setErr(e.response?.data?.error || 'Login failed')
    }finally{setLoading(false)}
  }

  return (
    <div style={{minHeight:'100vh', display:'grid', placeItems:'center', background:'#0a0a0a', padding:16}}>
      <div style={{width:'100%', maxWidth:420, background:'#fff', borderRadius:16, padding:24, boxShadow:'0 20px 60px rgba(0,0,0,.4)'}}>
        <div style={{textAlign:'center', marginBottom:18}}>
          <div style={{width:48,height:48, background:'#d8232a', borderRadius:10, display:'grid', placeItems:'center', margin:'0 auto', fontWeight:800, color:'#fff', fontSize:18}}>HW</div>
          <h1 style={{fontWeight:800, fontSize:18, marginTop:10}}>Admin Panel</h1>
          <p style={{fontSize:13, color:'#6b7280', marginTop:4}}>HomWisor.com - Dynamic CMS</p>
          <div style={{marginTop:10, background:'#fef2f2', border:'1px solid #fecaca', color:'#991b1b', padding:'8px 10px', borderRadius:8, fontSize:12}}>
            Demo: <strong>admin</strong> / <strong>admin123</strong>
          </div>
        </div>

        {err && <div style={{background:'#fef2f2', color:'#991b1b', padding:'10px 12px', borderRadius:8, fontSize:13, marginBottom:12, border:'1px solid #fecaca'}}>{err}</div>}

        <form onSubmit={submit} style={{display:'grid', gap:12}}>
          <div>
            <label style={{fontSize:12, fontWeight:700, color:'#374151'}}>Username</label>
            <input value={form.username} onChange={e=>setForm({...form, username:e.target.value})} style={{width:'100%', marginTop:6, height:42, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', fontSize:14, outline:'none'}} placeholder="admin"/>
          </div>
          <div>
            <label style={{fontSize:12, fontWeight:700, color:'#374151'}}>Password</label>
            <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} style={{width:'100%', marginTop:6, height:42, border:'1px solid #e5e7eb', borderRadius:10, padding:'0 12px', fontSize:14, outline:'none'}} placeholder="••••••••"/>
          </div>
          <button disabled={loading} style={{height:44, background:'#111', color:'#fff', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer', opacity: loading?.5:1}}>
            {loading?'Signing in...':'Sign In →'}
          </button>
        </form>

        <div style={{textAlign:'center', marginTop:14}}>
          <a href="/" style={{fontSize:13, color:'#6b7280'}}>← Back to Website</a>
        </div>
      </div>
    </div>
  )
}
