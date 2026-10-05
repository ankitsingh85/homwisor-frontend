import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local backend for /api (and uploaded images). Override with VITE_PROXY_TARGET if needed.
const API_TARGET = process.env.VITE_PROXY_TARGET || 'http://localhost:5000'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    headers: { 'X-Frame-Options': 'ALLOWALL' },
    proxy: {
      '/api': { target: API_TARGET, changeOrigin: true },
      '/uploads': { target: API_TARGET, changeOrigin: true }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5173
  }
})
