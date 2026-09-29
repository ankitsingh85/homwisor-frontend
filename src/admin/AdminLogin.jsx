import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams, Link } from 'react-router-dom'
import API from '../utils/api'
import { setSession, isLoggedIn, clearSession, EMAIL_RE } from '../utils/auth'
import { Icon, PasswordInput, Spinner, Alert } from './ui'
import logo from '../images/logo-homwiser.png'
import './admin.css'

const SESSION_MESSAGES = {
  expired: 'Your session expired after 24 hours. Please sign in again.',
  signedout: 'You have been signed out. Please sign in again.',
  loggedout: 'You have signed out successfully.',
}

export default function AdminLogin(){
  const [form,setForm]=useState({email:'', password:''})
  const [err,setErr]=useState('')
  const [loading,setLoading]=useState(false)
  const [params]=useSearchParams()
  const nav=useNavigate()

  // Drop any expired/invalid token left behind
  useEffect(()=>{ if(!isLoggedIn()) clearSession() },[])

  if(isLoggedIn()) return <Navigate to="/admin/dashboard" replace/>

  const notice = SESSION_MESSAGES[params.get('session')]

  const submit=async(e)=>{
    e.preventDefault()
    const email=form.email.trim().toLowerCase()
    if(!email || !form.password){ setErr('Enter your email and password'); return }
    if(!EMAIL_RE.test(email)){ setErr('Enter a valid email address'); return }
    setLoading(true); setErr('')
    try{
      const r=await API.post('/admin/login', { email, password: form.password })
      setSession(r.data.token, r.data.admin)
      nav('/admin/dashboard', { replace: true })
    }catch(e){
      setErr(
        e.response?.data?.error ||
        (e.code === 'ECONNABORTED' ? 'The server took too long to respond. Please try again.' : 'Could not reach the server. Check your connection and try again.')
      )
      setForm(f=>({...f, password:''}))
    }finally{ setLoading(false) }
  }

  return (
    <div className="hwa hwa-login">
      <aside className="hwa-login-visual">
        <img src={logo} alt="HomWisor" className="hwa-login-logo"/>

        <div className="hwa-login-copy">
          <span className="hwa-eyebrow">Admin Console</span>
          <h1>Manage every listing, lead &amp; <span>launch</span> in one place.</h1>
          <p>Update properties, banners, offers and snaps — changes go live on HomWisor.com instantly.</p>
          <div className="hwa-login-points">
            <div><Icon.shield/> Secure JWT sessions</div>
            <div><Icon.clock/> Auto sign-out after 24h</div>
            <div><Icon.users/> Role-based access</div>
          </div>
        </div>
      </aside>

      <main className="hwa-login-panel">
        <div className="hwa-login-card">
          <img src={logo} alt="HomWisor" className="hwa-login-mobile-logo"/>
          <h2>Welcome back</h2>
          <p className="hwa-sub">Sign in to the HomWisor admin panel</p>

          {notice && !err && <Alert type={params.get('session')==='loggedout' ? 'success' : 'info'}>{notice}</Alert>}
          {err && <Alert>{err}</Alert>}

          <form onSubmit={submit} noValidate>
            <div className="hwa-field">
              <label htmlFor="hwa-email">Email address</label>
              <div className="hwa-input-wrap">
                <Icon.mail/>
                <input
                  id="hwa-email"
                  type="email"
                  inputMode="email"
                  className="hwa-input"
                  value={form.email}
                  onChange={e=>setForm({...form, email:e.target.value})}
                  placeholder="you@homwisor.com"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  autoFocus
                />
              </div>
            </div>

            <div className="hwa-field">
              <label htmlFor="hwa-password">Password</label>
              <PasswordInput id="hwa-password" value={form.password} onChange={v=>setForm({...form, password:v})} placeholder="Enter your password"/>
            </div>

            <button type="submit" className="hwa-btn hwa-btn-gold" disabled={loading} style={{marginTop:8}}>
              {loading ? <><Spinner/> Signing in…</> : 'Sign In'}
            </button>
          </form>

          <div className="hwa-login-foot">
            <Link to="/">← Back to website</Link>
            <span className="hwa-secure"><Icon.shield/> Authorised staff only</span>
          </div>
        </div>
      </main>
    </div>
  )
}
