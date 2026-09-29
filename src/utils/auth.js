// Admin session helpers — the JWT lives in localStorage and expires after 1 day

const TOKEN_KEY = 'admin_token'
const ADMIN_KEY = 'admin_user'

const decode = (token) => {
  try {
    const part = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(atob(part))
  } catch {
    return null
  }
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

// Milliseconds until the token expires (0 if missing/expired)
export const tokenTimeLeft = (token = getToken()) => {
  const payload = token && decode(token)
  return payload?.exp ? Math.max(0, payload.exp * 1000 - Date.now()) : 0
}

export const isLoggedIn = () => tokenTimeLeft() > 0

export const getAdmin = () => {
  try { return JSON.parse(localStorage.getItem(ADMIN_KEY)) } catch { return null }
}

export const setSession = (token, admin) => {
  localStorage.setItem(TOKEN_KEY, token)
  if (admin) localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
}

export const setAdmin = (admin) => localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))

export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(ADMIN_KEY)
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Mirrors the backend password rules for instant feedback
export const passwordProblem = (password, email = '') => {
  const name = email.split('@')[0]
  if (password.length < 8) return 'At least 8 characters'
  if (!/[a-z]/i.test(password) || !/\d/.test(password)) return 'Use both letters and numbers'
  if (name.length >= 3 && password.toLowerCase().includes(name.toLowerCase())) return 'Must not contain your email name'
  return null
}
