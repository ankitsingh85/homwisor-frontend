import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import PropertyDetail from './pages/PropertyDetailPage'
import Snaps from './pages/Snaps'
import Contact from './pages/Contact'
import AdminLogin from './admin/AdminLogin'
// admin dashboard (incl. the rich-text editor) loads only when an admin opens it
const Dashboard = lazy(() => import('./admin/Dashboard'))
import Blog from './pages/Blog'
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from "./pages/TermsAndConditions";
import { isLoggedIn, getToken } from './utils/auth'
import { blogUrl } from './utils/slug'

// Navbar menu links (/location/…, /budget/…, /status/…) open the Search page with that filter
function ToSearch({ param, preset }){
  const { slug } = useParams()
  const qs = new URLSearchParams(preset || {})
  if(param && slug) qs.set(param, slug)
  return <Navigate to={`/search?${qs.toString()}`} replace/>
}

// Old article links (/blog/<slug>) → the article's address at the top level
function OldBlogLink(){
  const { slug } = useParams()
  return <Navigate to={blogUrl(slug)} replace/>
}

function Protected({children}){
  // Stale tokens are cleared by the login page (no side effects during render)
  if(!isLoggedIn()) return <Navigate to={getToken() ? '/admin?session=expired' : '/admin'} replace/>
  return children
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/location/:slug" element={<ToSearch param="location"/>}/>
        <Route path="/budget/:slug" element={<ToSearch param="budget"/>}/>
        <Route path="/property-type/:slug" element={<ToSearch param="type"/>}/>
        <Route path="/commercial/:slug" element={<ToSearch param="type"/>}/>
        <Route path="/status/:slug" element={<ToSearch param="status"/>}/>
        <Route path="/residential-projects" element={<ToSearch preset={{ type: 'residential' }}/>}/>
        <Route path="/commercial-projects" element={<ToSearch preset={{ type: 'commercial' }}/>}/>
        <Route path="/property/:id" element={<PropertyDetail/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<OldBlogLink />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route
  path="/terms-and-conditions"
  element={<TermsAndConditions />}
/>
        <Route path="/property-snaps" element={<Snaps/>}/>
        <Route path="/snaps" element={<Navigate to="/property-snaps" replace/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<Protected><Suspense fallback={<div style={{ minHeight: '100vh', background: '#0b0b0b' }} />}><Dashboard/></Suspense></Protected>}/>
        <Route path="/contact" element={<Contact />} />
        {/* Blog articles: homwisor.com/<slug> — fixed pages above always win */}
        <Route path="/:slug" element={<BlogDetail />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
