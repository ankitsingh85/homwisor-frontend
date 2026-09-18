import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import PropertyDetail from './pages/PropertyDetail'
import Snaps from './pages/Snaps'
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'

function Protected({children}){
  const token = localStorage.getItem('admin_token')
  if(!token) return <Navigate to="/admin" replace/>
  return children
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/property/:id" element={<PropertyDetail/>}/>
        <Route path="/property-snaps" element={<Snaps/>}/>
        <Route path="/snaps" element={<Navigate to="/property-snaps" replace/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<Protected><Dashboard/></Protected>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}
