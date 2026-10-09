import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import API from "../utils/api";
import { applyMeta } from "../utils/seo";
import { logoOf, initials, developerUrl, propertiesOf, cityOf } from "../data/developers";
import { typesOf } from "../utils/propertySearch";
import "./developerPage.css";

// /developer/<slug> — developer profile + every property of theirs on HomWisor
export default function DeveloperPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [dev, setDev] = useState(null);
  const [all, setAll] = useState([]);
  const [others, setOthers] = useState([]);
  const [status, setStatus] = useState("loading");
  const [type, setType] = useState("All");
  const [logoBroken, setLogoBroken] = useState(false);

  useEffect(() => {
    let alive = true;
    setStatus("loading"); setType("All"); setLogoBroken(false);
    window.scrollTo(0, 0);
    Promise.all([
      API.get(`/builders/${encodeURIComponent(slug)}`),
      API.get("/properties").catch(() => ({ data: [] })),
      API.get("/builders").catch(() => ({ data: [] })),
    ])
      .then(([d, p, b]) => {
        if (!alive) return;
        setDev(d.data); setAll(p.data || []); setOthers((b.data || []).filter((x) => x.id !== d.data.id)); setStatus("ok");
        if (d.data.slug && d.data.slug !== slug) navigate(developerUrl(d.data), { replace: true });
      })
      .catch(() => alive && setStatus("missing"));
    return () => { alive = false; };
  }, [slug]);

  const listed = useMemo(() => (dev ? propertiesOf(dev, all) : []), [dev, all]);
  const types = useMemo(() => ["All", ...new Set(listed.flatMap(typesOf))], [listed]);
  const shown = type === "All" ? listed : listed.filter((p) => typesOf(p).includes(type));
  const cities = [...new Set(listed.map(cityOf).filter(Boolean))];

  useEffect(() => {
    if (!dev) return;
    return applyMeta({
      title: `${dev.name} Projects in Gurugram | HomWisor`,
      description: dev.subtext || `Explore ${listed.length || ""} ${dev.name} projects on HomWisor — prices, floor plans, amenities and RERA details.`.replace(/\s+/g, " "),
      image: logoOf(dev),
      url: window.location.origin + developerUrl(dev),
    });
  }, [dev, listed.length]);

  if (status === "loading") return (<><Header /><div className="dv-state"><span className="dv-spin" /> Loading developer…</div></>);
  if (!dev) {
    return (
      <><Header />
        <div className="dv-state"><div><h1>Developer not found</h1><p>It may have been removed.</p><Link to="/" className="dv-btn">Back to home</Link></div></div>
        <Footer /></>
    );
  }

  const logo = logoOf(dev);
  const total = dev.count || parseInt(dev.projects, 10) || 0;

  return (
    <div className="dv-page">
      <Header />

      <section className="dv-hero">
        <div className="dv-wrap">
          <nav className="dv-crumbs"><Link to="/">Home</Link><span>›</span><Link to="/#developers">Developers</Link><span>›</span>{dev.name}</nav>
          <div className="dv-hero-inner">
            <div className="dv-logo">
              {logo && !logoBroken ? <img src={logo} alt={`${dev.name} logo`} onError={() => setLogoBroken(true)} /> : <span>{initials(dev.name)}</span>}
            </div>
            <div className="dv-intro">
              <span className="dv-eyebrow">PROPERTY DEVELOPER</span>
              <h1>{dev.name}</h1>
              {dev.subtext && <p className="dv-tag">{dev.subtext}</p>}
              <div className="dv-stats">
                {total > 0 && <div><b>{total}</b><small>Total projects</small></div>}
                <div><b>{listed.length}</b><small>On HomWisor</small></div>
                {cities.length > 0 && <div><b>{cities.length}</b><small>{cities.length === 1 ? "City" : "Cities"}</small></div>}
                {dev.established && <div><b>{dev.established}</b><small>Established</small></div>}
              </div>
            </div>
          </div>
          {dev.description && <p className="dv-about">{dev.description}</p>}
          {dev.website && /^https?:\/\//.test(dev.website) && (
            <a className="dv-site" href={dev.website} target="_blank" rel="noopener noreferrer">Official website ↗</a>
          )}
        </div>
      </section>

      <section className="dv-list">
        <div className="dv-wrap">
          <div className="dv-list-head">
            <h2>{dev.name} <span>Projects</span></h2>
            {types.length > 2 && (
              <div className="dv-filters">
                {types.map((t) => (
                  <button key={t} type="button" className={t === type ? "on" : ""} onClick={() => setType(t)}>
                    {t} <em>{t === "All" ? listed.length : listed.filter((p) => typesOf(p).includes(t)).length}</em>
                  </button>
                ))}
              </div>
            )}
          </div>

          {shown.length > 0 ? (
            <div className="dv-grid">{shown.map((p) => <PropertyCard key={p.id} p={p} />)}</div>
          ) : (
            <div className="dv-empty">
              <strong>No {dev.name} projects listed yet.</strong>
              <p>Our experts can still share prices and availability for {dev.name} projects.</p>
              <Link to="/contact" className="dv-btn">Talk to an expert</Link>
            </div>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="dv-others">
          <div className="dv-wrap">
            <h2>Other <span>Developers</span></h2>
            <div className="dv-chips">
              {others.map((o) => <Link key={o.id} to={developerUrl(o)}>{o.name}</Link>)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
