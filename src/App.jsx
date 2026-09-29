import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import PropertyDetail from './pages/PropertyDetail'
import Snaps from './pages/Snaps'
import Contact from './pages/Contact'
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'
import Blog from './pages/Blog'
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from "./pages/TermsAndConditions";
import { isLoggedIn, getToken } from './utils/auth'

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
        <Route path="/property/:id" element={<PropertyDetail/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<BlogDetail />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route
  path="/terms-and-conditions"
  element={<TermsAndConditions />}
/>
        <Route path="/property-snaps" element={<Snaps/>}/>
        <Route path="/snaps" element={<Navigate to="/property-snaps" replace/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<Protected><Dashboard/></Protected>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
