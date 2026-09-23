import axios from 'axios'

// VITE_API_URL may be given with or without the trailing /api — normalise it
const envUrl = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
const baseURL = envUrl ? (envUrl.endsWith('/api') ? envUrl : envUrl + '/api') : '/api'

const API = axios.create({
  baseURL,
  timeout: 60000 // Render free tier can take ~50s to wake up
})

API.interceptors.request.use(cfg=>{
  const token = localStorage.getItem('admin_token')
  if(token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

export default API
