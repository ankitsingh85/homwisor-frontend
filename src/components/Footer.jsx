import { Link } from 'react-router-dom'
const GOLD = '#D4AF37'
export default function Footer(){
  return (
    <footer style={{marginTop:40}}>
      {/* Dream Property Banner - as per screenshot, HomWisor palette black→gold */}
      <div style={{background: 'linear-gradient(130deg, #000000 0%, #2a1a05 40%, #D4AF37 100%)', borderTop:`3px solid ${GOLD}`, borderBottom:'1px solid rgba(0,0,0,.1)'}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 16px', gap:16, flexWrap:'wrap'}}>
          <div style={{display:'flex', alignItems:'center', gap:14}}>
            <div style={{width:44,height:44, borderRadius:12, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.25)', display:'grid', placeItems:'center', backdropFilter:'blur(8px)'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <div style={{fontWeight:800, fontSize:22, color:'#fff', lineHeight:1.1}}>Looking for Your Dream Property?</div>
              <div style={{fontSize:13, color:'rgba(255,255,255,.85)', marginTop:2}}>Experts online now · Response within 5 minutes</div>
            </div>
          </div>
          <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
            <a href="tel:918500900100" style={{display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#111', padding:'10px 18px', borderRadius:10, fontWeight:800, fontSize:13, boxShadow:'0 4px 14px rgba(0,0,0,.2)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now
            </a>
            <a href="https://wa.me/918500900100" target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.12)', color:'#fff', border:'1px solid rgba(255,255,255,.35)', padding:'10px 16px', borderRadius:10, fontWeight:700, fontSize:13, backdropFilter:'blur(6px)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.15 6.45 2.15 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.02-5.14-2.87-7.01zm-7.01 15.23h-.01c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.68-8.24 8.21-8.24 2.19 0 4.25.85 5.79 2.4a8.215 8.215 0 0 1 2.41 5.83c0 4.55-3.68 8.24-8.21 8.24zm6.91-6.17c-.38-.19-2.24-1.11-2.59-1.23-.35-.13-.61-.19-.87.19s-1 1.23-1.22 1.49-.44.29-.82.1c-.38-.19-1.61-.59-3.06-1.89-1.13-1.01-1.89-2.26-2.11-2.64-.22-.38-.02-.59.17-.78.17-.17.38-.44.57-.66.19-.22.25-.38.38-.64.13-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.19-2.88-.31-.74-.63-.64-.87-.66l-.74-.01c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.65 4.06 6.62 5.69.93.4 1.65.64 2.21.82.93.29 1.78.25 2.45.15.75-.11 2.24-.92 2.56-1.81.32-.89.32-1.65.22-1.81-.09-.16-.35-.25-.73-.44z"/></svg>
              WhatsApp
            </a>
            <a href="#contact" style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.12)', color:'#fff', border:'1px solid rgba(255,255,255,.35)', padding:'10px 16px', borderRadius:10, fontWeight:700, fontSize:13}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
              Schedule Visit
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer - HomWisor black with gold, structure as per screenshot */}
      <div style={{background:'#0A0A0A', color:'rgba(255,255,255,.75)', borderTop:'1px solid #1a1a1a'}}>
        <div className="container" style={{padding:'36px 16px 18px'}}>
          <div style={{display:'grid', gridTemplateColumns:'1.4fr .9fr 1fr 1fr 1.1fr .95fr', gap:24}} className="footer-grid">
            {/* Logo col */}
            <div>
              <div style={{display:'flex', alignItems:'center', gap:6}}>
                <span style={{fontWeight:900, color:'#fff', fontSize:28, letterSpacing:-1.5, lineHeight:1}}><span style={{color:GOLD}}>Hom</span>Wisor<span style={{fontWeight:400, fontSize:14, color:'rgba(255,255,255,.7)', marginLeft:2}}>.com</span></span>
              </div>
              <div style={{fontSize:11, color:GOLD, letterSpacing:1.5, fontWeight:600, marginTop:2}}>Rishto Ki Shuruwat</div>
              <div style={{height:1, background:'linear-gradient(90deg, rgba(212,175,55,.4), transparent)', margin:'14px 0'}}/>
              <p style={{fontSize:13, lineHeight:1.65, color:'rgba(255,255,255,.65)'}}>
                India's leading luxury real estate platform. Buy, sell & invest in premium properties across India.
              </p>
              <div style={{display:'grid', gap:10, marginTop:16}}>
                <a href="tel:+918500900100" style={{display:'flex', alignItems:'center', gap:10, fontSize:13, color:'rgba(255,255,255,.85)'}}>
                  <span style={{width:28,height:28, borderRadius:'50%', background:'rgba(212,175,55,.15)', border:'1px solid rgba(212,175,55,.3)', display:'grid', placeItems:'center', color:GOLD, flexShrink:0}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  +91 8500 900 100
                </a>
                <a href="mailto:support@homwisor.com" style={{display:'flex', alignItems:'center', gap:10, fontSize:13, color:'rgba(255,255,255,.85)'}}>
                  <span style={{width:28,height:28, borderRadius:'50%', background:'rgba(212,175,55,.15)', border:'1px solid rgba(212,175,55,.3)', display:'grid', placeItems:'center', flexShrink:0}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.7"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  support@homwisor.com
                </a>
                <div style={{display:'flex', gap:10, fontSize:13, color:'rgba(255,255,255,.65)'}}>
                  <span style={{width:28,height:28, borderRadius:'50%', background:'rgba(212,175,55,.15)', border:'1px solid rgba(212,175,55,.3)', display:'grid', placeItems:'center', color:GOLD, flexShrink:0, marginTop:1}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.7"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span style={{lineHeight:1.5}}>Gurugram, Haryana<br/></span>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 style={{color:'#fff', fontWeight:800, fontSize:12, letterSpacing:1, marginBottom:14, borderBottom:`2px solid ${GOLD}`, display:'inline-block', paddingBottom:6}}>QUICK LINKS</h4>
              <div style={{display:'grid', gap:9, fontSize:13}}>
                <Link to="/" style={{color:'rgba(255,255,255,.7)'}}>Home</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>About Us</Link>
                <Link to="/search?type=Luxury" style={{color:'rgba(255,255,255,.7)'}}>Luxury Projects</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Branded Residences</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Blog</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Resale Properties</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Rental Properties</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Career with Us</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Testimonials</Link>
                <Link to="/search" style={{color:'rgba(255,255,255,.7)'}}>Contact</Link>
              </div>
            </div>

            {/* POPULAR CITIES */}
            <div>
              <h4 style={{color:'#fff', fontWeight:800, fontSize:12, letterSpacing:1, marginBottom:14, borderBottom:`2px solid ${GOLD}`, display:'inline-block', paddingBottom:6}}>POPULAR CITIES</h4>
              <div style={{display:'grid', gap:9, fontSize:13}}>
                <Link to="/search?location=Gurugram" style={{color:'rgba(255,255,255,.7)'}}>Flats in Gurugram</Link>
                <Link to="/search?location=Noida" style={{color:'rgba(255,255,255,.7)'}}>Flats in Noida</Link>
                <Link to="/search?location=Ayodhya" style={{color:'rgba(255,255,255,.7)'}}>Flats in Ayodhya</Link>
                <Link to="/search?location=Panipat" style={{color:'rgba(255,255,255,.7)'}}>Flats in Panipat</Link>
                <Link to="/search?location=Kasauli" style={{color:'rgba(255,255,255,.7)'}}>Flats in Kasauli</Link>
                <Link to="/search?location=Karnal" style={{color:'rgba(255,255,255,.7)'}}>Flats in Karnal</Link>
                <Link to="/search?location=Pushkar" style={{color:'rgba(255,255,255,.7)'}}>Flats in Pushkar</Link>
                <Link to="/search?location=Delhi" style={{color:'rgba(255,255,255,.7)'}}>Flats in Delhi</Link>
                <Link to="/search?location=Goa" style={{color:'rgba(255,255,255,.7)'}}>Flats in Goa</Link>
                <Link to="/search?location=Mumbai" style={{color:'rgba(255,255,255,.7)'}}>Flats in Mumbai</Link>
              </div>
            </div>

            {/* TOP DEVELOPERS */}
            <div>
              <h4 style={{color:'#fff', fontWeight:800, fontSize:12, letterSpacing:1, marginBottom:14, borderBottom:`2px solid ${GOLD}`, display:'inline-block', paddingBottom:6}}>TOP DEVELOPERS<span style={{fontWeight:400, color:GOLD, fontSize:11}}>(24)</span></h4>
              <div style={{display:'grid', gap:9, fontSize:13}}>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Godrej Properties</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>DLF Homes</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Emaar India</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Birla Estates</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Adani Realty</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Experion Developers</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Signature Global</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Sobha Developers</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Central Park</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Trump Towers</a>
              </div>
            </div>

            {/* PRIME LOCATIONS */}
            <div>
              <h4 style={{color:'#fff', fontWeight:800, fontSize:12, letterSpacing:1, marginBottom:14, borderBottom:`2px solid ${GOLD}`, display:'inline-block', paddingBottom:6}}>PRIME LOCATIONS</h4>
              <div style={{display:'grid', gap:9, fontSize:13}}>
                <Link to="/search?location=Sohna" style={{color:'rgba(255,255,255,.7)'}}>Projects on Sohna Road</Link>
                <Link to="/search?location=Golf" style={{color:'rgba(255,255,255,.7)'}}>Projects on Golf Course Road</Link>
                <Link to="/search?location=Dwarka" style={{color:'rgba(255,255,255,.7)'}}>Projects on Dwarka Expressway</Link>
                <Link to="/search?location=New Gurgaon" style={{color:'rgba(255,255,255,.7)'}}>Projects on New Gurgaon</Link>
                <Link to="/search?location=Southern" style={{color:'rgba(255,255,255,.7)'}}>Projects on Southern Peripheral Road</Link>
                <Link to="/search?location=Golf Extension" style={{color:'rgba(255,255,255,.7)'}}>Projects on Golf Course Extension</Link>
              </div>
            </div>

            {/* TOOLS & SERVICES */}
            <div>
              <h4 style={{color:'#fff', fontWeight:800, fontSize:12, letterSpacing:1, marginBottom:14, borderBottom:`2px solid ${GOLD}`, display:'inline-block', paddingBottom:6}}>TOOLS & SERVICES</h4>
              <div style={{display:'grid', gap:9, fontSize:13}}>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>EMI Calculator</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Privacy Policy</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Terms & Conditions</a>
                <a href="#" style={{color:'rgba(255,255,255,.7)'}}>Disclaimer</a>
                <Link to="/property-snaps" style={{color:GOLD, fontWeight:700}}>Property Snaps →</Link>
                <Link to="/admin" style={{color:'rgba(255,255,255,.5)', fontSize:12}}>Admin Panel</Link>
              </div>
            </div>
          </div>

          <div style={{borderTop:'1px solid #1a1a1a', marginTop:28, paddingTop:14, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, fontSize:12, color:'rgba(255,255,255,.45)'}}>
            <span>© 2026 HomWisor.com — Rishto Ki Shuruwat. All rights reserved. | RERA Registered • HomWisor palette: Black → <span style={{color:GOLD}}>Gold #D4AF37</span> (from homwisor.com)</span>
            <span style={{display:'flex', gap:10, alignItems:'center'}}>
              <span style={{width:28,height:28, borderRadius:'50%', background:'#1a1a1a', display:'grid', placeItems:'center', color:GOLD, fontWeight:700, fontSize:10, border:'1px solid rgba(212,175,55,.25)'}}>f</span>
              <span style={{width:28,height:28, borderRadius:'50%', background:'#1a1a1a', display:'grid', placeItems:'center', color:GOLD, fontWeight:700, fontSize:10, border:'1px solid rgba(212,175,55,.25)'}}>in</span>
              <span style={{width:28,height:28, borderRadius:'50%', background:'#1a1a1a', display:'grid', placeItems:'center', color:GOLD, fontWeight:700, fontSize:10, border:'1px solid rgba(212,175,55,.25)'}}>X</span>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){
          .footer-grid{ grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media(max-width:700px){
          .footer-grid{ grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:500px){
          .footer-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
