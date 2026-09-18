import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000
})

API.interceptors.request.use(cfg=>{
  const token = localStorage.getItem('admin_token')
  if(token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

export default API
