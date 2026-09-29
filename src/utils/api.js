import axios from 'axios'
import { getToken, clearSession } from './auth'

// VITE_API_URL may be given with or without the trailing /api — normalise it
const envUrl = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
const baseURL = envUrl ? (envUrl.endsWith('/api') ? envUrl : envUrl + '/api') : '/api'

const API = axios.create({
  baseURL,
  timeout: 60000 // Render free tier can take ~50s to wake up
})

API.interceptors.request.use(cfg=>{
  const token = getToken()
  if(token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

// Expired / revoked session on an admin page → back to the login screen
API.interceptors.response.use(
  res => res,
  err => {
    const onAdminPage = window.location.pathname.startsWith('/admin/')
    const isLogin = err.config?.url?.includes('/admin/login')
    if(err.response?.status === 401 && onAdminPage && !isLogin){
      clearSession()
      const reason = err.response.data?.code === 'TOKEN_EXPIRED' ? 'expired' : 'signedout'
      window.location.replace(`/admin?session=${reason}`)
    }
    return Promise.reject(err)
  }
)

export default API
