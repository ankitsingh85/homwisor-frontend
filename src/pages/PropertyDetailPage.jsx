import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../utils/api";
import { AmenityIcon, DEFAULT_AMENITIES } from "../data/amenities";
import { placeOf, findLocality, findCity } from "../data/locations";
import "./propertyDetail.css";
import { propertyUrl } from "../utils/slug";
import { applyMeta, propertyMeta } from "../utils/seo";
import { typesOf } from "../utils/propertySearch";
import { belongsTo, propertiesOf, developerUrl } from "../data/developers";
import LeadPopup from "../components/LeadPopup";

// Contact numbers used across the site
const PHONE = "9090101401";
const PHONE_DISPLAY = "+91 9090 101 401";
const WHATSAPP = "919090101401";

/* ---------------------------------------------------------------
   Small helpers
--------------------------------------------------------------- */
const I = {
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.6" /></>,
  building: <><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4" /></>,
  area: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 20 20 4M14 4h6v6" /></>,
  diamond: <><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M12 21 8 9l4-6 4 6-4 12" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  arrowR: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  arrowL: <><path d="M19 12H5M11 6l-6 6 6 6" /></>,
  play: <><path d="m9 7 8 5-8 5z" fill="currentColor" stroke="none" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
  mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16" /></>,
  minus: <><path d="M5 12h14" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  star: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
  bulb: <><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" /></>,
  leaf: <><path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14Z" /><path d="M5 19 13 11" /></>,
  people: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 13.8c2.1.8 3.5 3 3.5 5.7" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>,
  key: <><circle cx="8" cy="15" r="4" /><path d="m10.8 12.2 8.7-8.7M16 6l3 3" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 13v4M8 21h8M10 17h4" /></>,
  home: <><path d="m3 11 9-7 9 7M5 10v10h14V10" /></>,
};
const Icon = ({ n, size = 20, sw = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>
);
const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
);

// Page colours from the property's brand colour (set in admin). Near-black brands keep the black + gold look.
const hexRgb = (hex = "") => {
  let h = String(hex).trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9a-f]{6}$/i.test(h)) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};
const mix = (rgb, to, t) => `rgb(${rgb.map((v, i) => Math.round(v + (to[i] - v) * t)).join(",")})`;
const brandTheme = (hex) => {
  const rgb = hexRgb(hex);
  if (!rgb) return {};
  const lum = rgb.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; })
    .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
  if (lum < 0.02) return { "--pd-brand": hex, "--pd-deep": mix(rgb, [0, 0, 0], 0.2), "--pd-cta-bg": "var(--pd-grad)", "--pd-cta-fg": "#111" };
  const W = [255, 255, 255], K = [0, 0, 0];
  return {
    "--pd-brand": hex,
    "--pd-deep": mix(rgb, K, 0.35),
    "--pd-accent": lum > 0.3 ? mix(rgb, K, 0.45) : hex,
    "--pd-on": mix(rgb, W, 0.72),
    "--pd-on-brand": lum > 0.45 ? "#111" : "#fff",
    "--pd-soft": mix(rgb, W, 0.93),
    "--pd-line2": mix(rgb, W, 0.75),
    "--pd-tint": mix(rgb, W, 0.965),
    "--pd-glow": `rgba(${rgb.join(",")},.28)`,
    "--pd-grad": `linear-gradient(135deg, ${mix(rgb, W, 0.3)}, ${hex} 55%, ${mix(rgb, K, 0.3)})`,
    "--pd-cta-bg": "#fff",
    "--pd-cta-fg": hex,
  };
};

const pad2 = (n) => String(n).padStart(2, "0");
const firstWord = (s = "") => String(s).trim().split(/\s+/)[0].toLowerCase();
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// "Sector 58, Golf Course Extension Road, Gurugram" → "Sector 58"
const sectorOf = (p) =>
  String(p.location || "").split(",").map((s) => s.trim()).find((part) => part && !findLocality(part) && !findCity(part)) || "";

// "3 Towers – 110 Units" → ["3 Towers", "110 Units"]
const splitTowers = (t = "") => {
  const parts = String(t).split(/[–—\-|,]/).map((s) => s.trim()).filter(Boolean);
  return [parts[0] || "", parts[1] || ""];
};

// YouTube / Vimeo / mp4 → something embeddable
const videoEmbed = (url = "") => {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return { type: "iframe", src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return { type: "iframe", src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };
  return { type: "video", src: url };
};

/* ---------------------------------------------------------------
   Image slider (Overview + Highlights)
--------------------------------------------------------------- */
function ShapeSlider({ images, tagline, taglineSub, auto = true }) {
  const [i, setI] = useState(0);
  const n = images.length;
  useEffect(() => {
    if (!auto || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [auto, n]);
  if (!n) return null;
  const go = (d) => setI((x) => (x + d + n) % n);
  return (
    <div className="pd-shape">
      <span className="pd-shape-accent" aria-hidden="true" />
      <div className="pd-shape-frame">
        {images.map((src, k) => (
          <img key={src + k} src={src} alt="" className={k === i ? "on" : ""} loading={k === 0 ? "eager" : "lazy"} />
        ))}
        <span className="pd-shape-shade" aria-hidden="true" />
        {tagline && (
          <div className="pd-shape-tag">
            <strong>{tagline}</strong>
            <i aria-hidden="true" />
            {taglineSub && <small>{taglineSub}</small>}
          </div>
        )}
        {n > 1 && (
          <div className="pd-shape-ctrl">
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo"><Icon n="arrowL" size={18} /></button>
            <span>{pad2(i + 1)} / {pad2(n)}</span>
            <button type="button" onClick={() => go(1)} aria-label="Next photo"><Icon n="arrowR" size={18} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

function Eyebrow({ children, center }) {
  return <div className={`pd-eyebrow${center ? " center" : ""}`}>{children}</div>;
}

/* ---------------------------------------------------------------
   Enquiry form (used in the sidebar card and the popup)
--------------------------------------------------------------- */
function EnquiryForm({ property, source, dark, compact, onDone }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setErr("Please enter your name");
    if (!/^\+?[\d\s-]{10,15}$/.test(f.phone.trim())) return setErr("Please enter a valid mobile number");
    setErr(""); setState("sending");
    try {
      await API.post("/enquiries", {
        name: f.name.trim(),
        phone: f.phone.trim(),
        email: f.email.trim(),
        property: property?.title + (source ? ` — ${source}` : ""),
        message: f.message.trim() || source || "Enquiry from property page",
        source: "property",
        page: window.location.pathname,
      });
      setState("sent");
      onDone?.();
    } catch (e2) {
      setState("error");
      setErr(e2?.response?.data?.error || "Could not send right now. Please call us instead.");
    }
  };
  if (state === "sent") {
    return (
      <div className={`pd-form-done${dark ? " dark" : ""}`}>
        <Icon n="check" size={34} />
        <strong>Thank you, {f.name.split(" ")[0]}!</strong>
        <span>Our property expert will call you shortly.</span>
      </div>
    );
  }
  return (
    <form className={`pd-form${dark ? " dark" : ""}`} onSubmit={submit} noValidate>
      <label className="pd-input"><Icon n="user" size={17} /><input value={f.name} onChange={set("name")} placeholder="Full Name" autoComplete="name" /></label>
      <label className="pd-input"><Icon n="mobile" size={17} /><input value={f.phone} onChange={set("phone")} placeholder="Mobile Number" inputMode="tel" autoComplete="tel" /></label>
      {!compact && <label className="pd-input"><Icon n="mail" size={17} /><input value={f.email} onChange={set("email")} placeholder="Email Address (Optional)" inputMode="email" autoComplete="email" /></label>}
      {!compact && <label className="pd-input area"><Icon n="chat" size={17} /><textarea value={f.message} onChange={set("message")} placeholder="Your Message (Optional)" rows={3} /></label>}
      {err && <div className="pd-form-err">{err}</div>}
      <button type="submit" className="pd-btn gold block" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : <>REQUEST CALLBACK <Icon n="arrowR" size={16} /></>}
      </button>
      <div className="pd-form-safe"><Icon n="lock" size={13} /> Your information is safe with us.</div>
    </form>
  );
}

// Hero "Get in Touch with us." card
const CODES = ["+91", "+971", "+1", "+44", "+65", "+61"];
function HeroForm({ property }) {
  const [f, setF] = useState({ name: "", code: "+91", phone: "", agree: true });
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setErr("Please enter your name");
    if (!/^[\d\s-]{7,14}$/.test(f.phone.trim())) return setErr("Please enter a valid mobile number");
    if (!f.agree) return setErr("Please allow us to contact you");
    setErr(""); setState("sending");
    try {
      await API.post("/enquiries", { name: f.name.trim(), phone: `${f.code} ${f.phone.trim()}`, email: "", property: property.title, message: "Enquiry from property page (top form)", source: "property", page: window.location.pathname });
      setState("sent");
    } catch {
      setState("idle"); setErr("Could not send right now. Please call us instead.");
    }
  };
  if (state === "sent") {
    return (
      <div className="pd-form-done">
        <Icon n="check" size={34} />
        <strong>Thank you, {f.name.split(" ")[0]}!</strong>
        <span>Our property expert will call you shortly.</span>
      </div>
    );
  }
  return (
    <form className="pd-hform" onSubmit={submit} noValidate>
      <label>FULL NAME<input value={f.name} onChange={set("name")} placeholder="Enter your name" autoComplete="name" /></label>
      <label>MOBILE NUMBER
        <span className="pd-hform-phone">
          <select value={f.code} onChange={set("code")} aria-label="Country code">{CODES.map((c) => <option key={c}>{c}</option>)}</select>
          <input value={f.phone} onChange={set("phone")} placeholder="Enter mobile number" inputMode="tel" autoComplete="tel-national" />
        </span>
      </label>
      <label className="pd-hform-check"><input type="checkbox" checked={f.agree} onChange={set("agree")} /> I authorize company representatives to Call, SMS, Email or WhatsApp me.</label>
      {err && <div className="pd-form-err">{err}</div>}
      <button type="submit" disabled={state === "sending"}>{state === "sending" ? "SENDING…" : "SUBMIT"}</button>
    </form>
  );
}

function Modal({ open, onClose, children, wide, dark }) {
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="pd-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className={`pd-modal-box${wide ? " wide" : ""}${dark ? " dark" : ""}`} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="pd-modal-x" onClick={onClose} aria-label="Close"><Icon n="close" /></button>
        {children}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Page
--------------------------------------------------------------- */
const NAV = [
  ["overview", "Overview"], ["pricing", "Price"], ["plans", "Floor Plans"], ["highlights", "Highlights"], ["amenities", "Amenities"],
  ["gallery", "Gallery"], ["location", "Location"], ["about", "Developer"], ["faqs", "FAQs"],
];

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [p, setP] = useState(null);
  const [all, setAll] = useState([]);
  const [builders, setBuilders] = useState([]); // Admin → Developers (for "more projects by …")
  useEffect(() => { API.get("/builders").then((r) => setBuilders(r.data || [])).catch(() => {}); }, []);
  const [status, setStatus] = useState("loading");
  const [readMore, setReadMore] = useState(false);
  const [modal, setModal] = useState(null); // { kind: 'enquiry'|'video'|'gallery', ... }
  const [openFaq, setOpenFaq] = useState(0);
  const [active, setActive] = useState("overview");
  const [logoBroken, setLogoBroken] = useState(false);

  useEffect(() => {
    // already showing this property (we just switched the address bar to its slug)
    if (p && (p.slug === id || p.id === id)) return;
    let alive = true;
    setStatus("loading"); setReadMore(false); setOpenFaq(0); setLogoBroken(false);
    window.scrollTo(0, 0);
    Promise.all([API.get(`/properties/${encodeURIComponent(id)}`), API.get("/properties").catch(() => ({ data: [] }))])
      .then(([one, list]) => {
        if (!alive) return;
        setP(one.data); setAll(list.data || []); setStatus("ok");
        // opened by id or an old slug → show the current slug in the address bar
        if (one.data?.slug && one.data.slug !== id) navigate(`/property/${one.data.slug}${window.location.search}${window.location.hash}`, { replace: true });
      })
      .catch(() => alive && setStatus("missing"));
    return () => { alive = false; };
  }, [id]);

  // meta title / description from the admin (Property → SEO), else built from the details
  useEffect(() => {
    if (!p) return;
    const meta = propertyMeta(p);
    return applyMeta({ ...meta, image: p.image, url: window.location.origin + propertyUrl(p), type: "website" });
  }, [p]);

  // highlight the section in view
  useEffect(() => {
    if (status !== "ok") return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([key]) => { const el = document.getElementById(key); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [status, p]);

  const d = useMemo(() => {
    if (!p) return null;
    const place = placeOf(p);
    const images = [...new Set([p.image, ...(p.gallery || [])].filter(Boolean))];
    const words = String(p.title || "").trim().split(/\s+/);
    const titleA = words.length > 1 ? words.slice(0, -1).join(" ") : words[0];
    const titleB = words.length > 1 ? words[words.length - 1] : "";
    const developer = p.developer || "the developer";
    const sector = sectorOf(p) || place.locality;
    const [towersA, towersB] = splitTowers(p.towers);

    const overview = p.overview?.trim() ||
      `${p.title} is a ${(p.propertyTypeDetail || p.type || "residential").toLowerCase()} project by ${developer}, located at ${p.location}. ` +
      `It offers ${p.bhk || "premium"} ${["Commercial", "Retail", "SCO"].includes(p.type) ? "spaces" : "residences"} priced ${p.priceRange || p.price || "on request"}` +
      `${p.possession ? `, with possession expected by ${p.possession}` : ""}. ` +
      `Thoughtfully planned with world-class amenities and excellent connectivity, it is one of the most sought-after addresses in ${place.locality || place.city || "the city"}.`;

    const facts = [
      sector && { icon: "pin", value: sector, label: place.city || place.locality || "Location" },
      towersA && { icon: "building", value: towersA, label: towersB || "Towers" },
      p.landArea && { icon: "area", value: p.landArea, label: "Land Area" },
      { icon: "diamond", value: p.propertyTypeDetail || p.type || "Residences", label: p.bhk || "Configuration" },
      p.possession && !p.landArea && { icon: "calendar", value: p.possession, label: "Possession" },
    ].filter(Boolean).slice(0, 4);

    const bhks = [...String(p.bhk || "").matchAll(/\d+/g)].map((m) => m[0]);
    const pricing = (p.pricing || []).filter((r) => r.type || r.size || r.price).length
      ? p.pricing
      : (bhks.length ? bhks.map((b) => ({ type: `${b} BHK`, size: "On request", price: "On request" })) : [{ type: p.bhk || p.type, size: "On request", price: p.priceRange || p.price || "On request" }]);

    const highlights = (p.highlights || []).filter(Boolean).length ? p.highlights.filter(Boolean) : [
      `Prime address at ${p.location}`,
      `${p.bhk || "Premium"} ${p.type ? p.type.toLowerCase() + "s" : "homes"} by ${developer}`,
      p.landArea ? `Spread across ${p.landArea}${p.towers ? ` with ${p.towers}` : ""}` : "Thoughtfully planned low-density layout",
      p.rera !== false ? "RERA registered project with transparent pricing" : "Transparent pricing and documentation",
    ];

    const amenities = (p.amenities || []).length ? p.amenities : DEFAULT_AMENITIES;
    const captions = p.galleryCaptions || [];
    // admin photos with captions; the cover joins in when there are only a few
    const gallery = (p.gallery || []).map((src, k) => ({ src, caption: captions[k] || "" })).filter((g) => g.src);
    if (gallery.length < 5 && p.image && !gallery.some((g) => g.src === p.image)) gallery.unshift({ src: p.image, caption: "" });

    const devKey = firstWord(p.developer);
    // only projects by the same developer (Admin → Developers names/aliases, else the same first word)
    const builder = builders.find((b) => belongsTo(b, p));
    const sameDev = (builder ? propertiesOf(builder, all) : devKey ? all.filter((x) => firstWord(x.developer) === devKey) : []).filter((x) => x.id !== p.id);
    // "Similar Projects" used to show any property in the same homepage section, i.e. other
    // developers. Related projects are the same developer's, already shown in "Iconic Projects
    // by …" above — so this list stays empty and the section is hidden.
    const similar = [];
    const iconic = sameDev; // nothing related → the section is hidden
    const developerLink = builder ? developerUrl(builder) : `/search?q=${encodeURIComponent(devKey || "")}`;

    const about = p.about || {};
    const aboutHeading = about.heading?.trim() || `About ${p.developer || "the Developer"}`;
    const aboutDesc = about.description?.trim() ||
      `${p.developer || "The developer"} is known for its commitment to quality, innovation and a customer-centric approach. ` +
      `With landmark projects${sameDev.length ? ` such as ${sameDev.slice(0, 3).map((x) => x.title).join(", ")}` : ""}, it continues to set new benchmarks in design, construction and lifestyle across ${place.city || "the region"}.`;

    const faqs = (p.faqs || []).filter((q) => q.question).length ? p.faqs.filter((q) => q.question) : [
      { question: `What is the exact location of ${p.title}?`, answer: `${p.title} is located at ${p.location}, with excellent connectivity to key landmarks, offices and schools.` },
      { question: `What is the expected possession date for ${p.title}?`, answer: p.possession ? `Possession is expected by ${p.possession}. Our team can share the latest construction updates.` : `Our team will share the latest possession timeline and construction updates on request.` },
      { question: `How can I verify the RERA approval status of ${p.title}?`, answer: p.rera !== false ? `${p.title} is a RERA registered project. Our experts can share the RERA number and help you verify it on the state RERA website.` : `Please contact our team for the latest approval details.` },
      { question: `Who is the developer of ${p.title}?`, answer: `${p.title} is developed by ${p.developer || "a reputed developer"}.` },
      { question: `What types of units are available in ${p.title}?`, answer: `${p.title} offers ${p.bhk || "multiple configurations"}${p.priceRange ? `, priced ${p.priceRange}` : ""}.` },
    ];

    return {
      place, images, titleA, titleB, overview, facts, pricing, highlights, amenities, gallery, iconic, similar,
      aboutHeading, aboutDesc, aboutSub: about.subheading?.trim() || "Building a Better Tomorrow",
      aboutImage: about.image || images[1] || images[0], aboutStats: (about.stats || []).filter((x) => x.value || x.label),
      faqs, sameDev: sameDev.length > 0, developerLink,
    };
  }, [p, all, builders]);

  if (status === "loading") {
    return <div className="pd-loading"><span className="pd-spin" /> Loading property…</div>;
  }
  if (status === "missing" || !p || !d) {
    return (
      <>
        <div className="pd-loading"><div><h2>Property not found</h2><p>It may have been removed.</p><Link className="pd-btn dark" to="/search">Browse properties</Link></div></div>
      </>
    );
  }

  const enquire = (source) => setModal({ kind: "enquiry", source });
  // Floor & Site Plans — Admin → Property → step 7
  const plans = (p.floorPlans || []).filter(Boolean).map((src, k) => ({ src, caption: p.floorPlanCaptions?.[k] || "" }));
  const brochureUrl = p.brochure ? `${p.brochure}${p.brochure.includes("?") ? "&" : "?"}download=1` : "";
  const BrochureLink = ({ className, children }) => brochureUrl
    ? <a className={className} href={brochureUrl} download target="_blank" rel="noreferrer">{children}</a>
    : <button type="button" className={className} onClick={() => enquire("Brochure request")}>{children}</button>;
  const jump = (key) => { const el = document.getElementById(key); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 66, behavior: "smooth" }); };
  const aboutWords = d.aboutHeading.split(/\s+/);

  const heroFacts = [
    ["Property Type", p.propertyTypeDetail || typesOf(p).join(" · ")],
    ["About Project", p.towers || p.bhk],
    ["Land Area", p.landArea || (p.towers ? p.bhk : "")],
  ].filter(([, v]) => v);

  return (
    <div className="pd-page" style={brandTheme(p.brandColor)}>

      {/* sticky brand bar: developer logo + sections */}
      <div className="pd-bar">
        <div className="pd-wrap pd-bar-inner">
          {p.logo && !/via\.placeholder\.com|dummyimage\.com/.test(p.logo) && !logoBroken && (
            <span className="pd-bar-logo"><img src={p.logo} alt={p.developer || p.title} onError={() => setLogoBroken(true)} /></span>
          )}
          <div className="pd-bar-title">
            <strong>{p.title}</strong>
            <span>{p.priceRange || p.price}</span>
          </div>
          <nav className="pd-bar-nav">
            {NAV.filter(([key]) => key !== "plans" || plans.length > 0).map(([key, label]) => (
              <button key={key} type="button" className={active === key ? "on" : ""} onClick={() => jump(key)}>{label}</button>
            ))}
          </nav>
          <button type="button" className="pd-btn gold sm" onClick={() => enquire("Enquire now")}>Enquire Now</button>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section className="pd-hero">
        {d.images[0] && <img className="pd-hero-bg" src={d.images[0]} alt={p.title} />}
        <span className="pd-hero-shade" aria-hidden="true" />
        <div className="pd-wrap pd-hero-inner">
          <div className="pd-hero-info">
            <div className="pd-glass pd-hero-name">
              <span className="pd-hero-eyebrow">{(p.propertyTypeDetail || typesOf(p).join(" · ") || "Residential").toUpperCase()}</span>
              <h1>{p.title}</h1>
              <p>{p.location}</p>
            </div>
            <div className="pd-glass pd-hero-facts">
              {heroFacts.length > 0 && (
                <div className="pd-hero-grid">
                  {heroFacts.map(([k, v]) => <div key={k}><small>{k.toUpperCase()}</small><strong>{v}</strong></div>)}
                </div>
              )}
              <div className="pd-hero-bottom">
                {/* Area → Possession → Price — Admin → Property → Project details */}
                <div className="pd-hero-mini"><small>AREA</small><strong>{p.area || "On request"}</strong></div>
                <div className="pd-hero-mini"><small>POSSESSION</small><strong>{p.possession || "On request"}</strong></div>
                <div className="pd-hero-price">
                  <small>STARTING FROM</small>
                  <strong>{p.price || p.priceRange || "Price on request"}{(p.price || p.priceRange) ? "*" : ""}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-hero-card">
            <h2>Get in Touch with us.</h2>
            <p>ENTER YOUR DETAILS BELOW TO PROCEED</p>
            <HeroForm property={p} />
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section id="overview" className="pd-section pd-overview">
        <div className="pd-wrap pd-split">
          <div className="pd-copy">
            <Eyebrow>OVERVIEW</Eyebrow>
            <h2 className="pd-title">
              <span>{d.titleA}</span>
              {d.titleB && <span className="gold">{d.titleB}</span>}
            </h2>
            <p className={`pd-desc${readMore ? " open" : ""}`}>{d.overview}</p>
            {d.overview.length > 260 && (
              <button type="button" className="pd-readmore" onClick={() => setReadMore((v) => !v)}>
                {readMore ? "Read Less" : "Read More"} <Icon n="arrowR" size={16} />
              </button>
            )}
            <div className="pd-facts" style={{ "--pd-facts": Math.max(d.facts.length, 2) }}>
              {d.facts.map((f) => (
                <div key={f.icon + f.value} className="pd-fact">
                  <span className="pd-fact-ic"><Icon n={f.icon} size={20} /></span>
                  <span><strong>{f.value}</strong><small>{f.label}</small></span>
                </div>
              ))}
            </div>
            <div className="pd-price-line">
              <span>Starting from</span>
              <strong>{p.price || p.priceRange || "Price on request"}</strong>
              {p.rera !== false && <em>✓ RERA</em>}
            </div>
            <div className="pd-actions">
              <BrochureLink className="pd-btn dark">{brochureUrl ? "DOWNLOAD BROCHURE" : "REQUEST BROCHURE"} <Icon n={brochureUrl ? "download" : "arrowR"} size={16} /></BrochureLink>
              {p.videoUrl && (
                <button type="button" className="pd-video-btn" onClick={() => setModal({ kind: "video" })}>
                  <span><Icon n="play" size={18} /></span> WATCH VIDEO
                </button>
              )}
            </div>
          </div>
          <ShapeSlider images={d.images} tagline={p.tagline || "A New Icon Rises"} taglineSub={p.taglineSub || "Luxury living beyond compare"} />
        </div>
      </section>

      {/* ============ SPACE & PRICING ============ */}
      <section id="pricing" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-head center">
            <Eyebrow center>SPACE &amp; PRICING</Eyebrow>
            <h2>{p.title} <span className="gold">Price</span></h2>
            <p>Unit sizes and prices — talk to our expert for the latest offers and availability.</p>
          </div>
          <div className="pd-table">
            <div className="pd-tr head"><span>Unit Type</span><span>Size</span><span>Price</span><span>Payment Plan</span><span /></div>
            {d.pricing.map((r, k) => (
              <div key={k} className="pd-tr">
                <span className="strong"><Icon n="home" size={17} /> {r.type || "—"}</span>
                <span>{r.size || "On request"}</span>
                <span className="gold">{r.price || "On request"}</span>
                {/* Admin → Property → step 6 */}
                <span className="pd-plan-cell">{r.paymentPlan || "On request"}</span>
                <span><button type="button" className="pd-btn outline xs" onClick={() => enquire(`Price details: ${r.type}`)}>Get Details</button></span>
              </div>
            ))}
          </div>
          <div className="pd-center-actions">
            <button type="button" className="pd-btn dark" onClick={() => enquire("Price list request")}>GET COMPLETE PRICE LIST <Icon n="arrowR" size={16} /></button>
            <a className="pd-call-pill" href={`tel:${PHONE}`}><Icon n="phone" size={16} /> Speak with an expert <b>{PHONE_DISPLAY}</b></a>
          </div>
        </div>
      </section>

      {/* ============ FLOOR & SITE PLANS ============ */}
      {plans.length > 0 && (
        <section id="plans" className="pd-section tint">
          <div className="pd-wrap">
            <div className="pd-head center">
              <Eyebrow center>LAYOUTS</Eyebrow>
              <h2>Floor &amp; <span className="gold">Site Plan</span></h2>
              {p.floorPlanNote && <p>{p.floorPlanNote}</p>}
            </div>
            <div className={`pd-plans n${Math.min(plans.length, 4)}`}>
              {plans.map((pl, k) => (
                <button type="button" key={pl.src + k} className="pd-plan" onClick={() => setModal({ kind: "plans", index: k })}>
                  <span className="pd-plan-img"><img src={pl.src} alt={pl.caption || `${p.title} plan ${k + 1}`} loading="lazy" /><i>View plan</i></span>
                  <span className="pd-plan-cap">{pl.caption || `Plan ${k + 1}`}</span>
                </button>
              ))}
            </div>
            <div className="pd-center-actions">
              <button type="button" className="pd-btn dark" onClick={() => enquire("Floor plan request")}>GET ALL FLOOR PLANS <Icon n="arrowR" size={16} /></button>
            </div>
          </div>
        </section>
      )}

      {/* ============ HIGHLIGHTS ============ */}
      <section id="highlights" className="pd-section tint">
        <div className="pd-wrap pd-split">
          <div className="pd-copy">
            <Eyebrow>EXPLORE FEATURES</Eyebrow>
            <h2 className="pd-h2-line">Project Highlights</h2>
            <div className="pd-hl-list">
              {d.highlights.map((h, k) => (
                <div key={k} className="pd-hl"><span className="pd-hl-ic"><Icon n="check" size={18} /></span><span>{h}</span></div>
              ))}
            </div>
          </div>
          <ShapeSlider images={[...d.images].reverse()} tagline="A New Way of Living" taglineSub={p.taglineSub || "Luxury living beyond compare"} />
        </div>
      </section>

      {/* ============ AMENITIES ============ */}
      <section id="amenities" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-head center">
            <Eyebrow center>LUXURY LIFESTYLE</Eyebrow>
            <h2>World-class <span className="gold">Amenities</span></h2>
            <p>Curated for luxury, wellness and community living.</p>
          </div>
          <div className="pd-amenities">
            {d.amenities.map((a) => (
              <div key={a} className="pd-amenity"><span><AmenityIcon name={a} size={26} /></span><strong>{a}</strong></div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="pd-section soft">
        <div className="pd-wrap">
          <div className="pd-head center">
            <Eyebrow center>GALLERY</Eyebrow>
            <h2 className="serif">{p.title} <span className="gold">Gallery</span></h2>
            <p>A glimpse into a world of unmatched luxury, design and lifestyle.</p>
          </div>
          <div className={`pd-bento n${Math.min(d.gallery.length, 5)}`}>
            {d.gallery.slice(0, 5).map((g, k) => (
              <button type="button" key={g.src + k} className={`pd-bento-item i${k}`} onClick={() => setModal({ kind: "gallery", index: k })}>
                <img src={g.src} alt={g.caption || `${p.title} photo ${k + 1}`} loading="lazy" />
                {g.caption && <span className="pd-cap">{g.caption}<i aria-hidden="true" /></span>}
              </button>
            ))}
          </div>
          {d.gallery.length > 0 && (
            <div className="pd-center-actions">
              <button type="button" className="pd-btn dark" onClick={() => setModal({ kind: "gallery", index: 0 })}>VIEW FULL GALLERY <Icon n="arrowR" size={16} /></button>
            </div>
          )}
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section id="location" className="pd-section">
        <div className="pd-wrap pd-loc">
          <div className="pd-copy">
            <Eyebrow>LOCATION</Eyebrow>
            <h2 className="pd-h2">Prime <span className="gold">Address</span></h2>
            <p className="pd-desc open">{p.title} is located at {p.location}{d.place.locality ? `, one of the most sought-after micro-markets in ${d.place.city || "the city"}` : ""}.</p>
            <div className="pd-loc-card">
              <span className="pd-fact-ic"><Icon n="pin" size={20} /></span>
              <span><strong>{p.location}</strong><small>{[d.place.locality, d.place.city].filter(Boolean).join(" · ")}</small></span>
            </div>
            <a className="pd-btn outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.title}, ${p.location}`)}`} target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS <Icon n="arrowR" size={16} /></a>
          </div>
          <div className="pd-map">
            <iframe title={`${p.title} location map`} src={`https://maps.google.com/maps?q=${encodeURIComponent(p.location || p.title)}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT DEVELOPER ============ */}
      <section id="about" className="pd-section">
        <div className="pd-wrap pd-split about">
          <div className="pd-copy">
            <Eyebrow>PROJECT EXCELLENCE</Eyebrow>
            <h2 className="pd-h2">
              {aboutWords[0]} <span className="gold">{aboutWords.slice(1).join(" ")}</span>
            </h2>
            <div className="pd-about-sub">{d.aboutSub}</div>
            <p className="pd-desc open">{d.aboutDesc}</p>
            {d.aboutStats.length > 0 && (
              <div className="pd-stats">
                {d.aboutStats.map((s, k) => (
                  <div key={k} className="pd-stat">
                    <span className="pd-stat-ic"><Icon n={["chart", "key", "people", "trophy"][k % 4]} size={22} /></span>
                    <span><strong>{s.value}</strong><small>{s.label}</small></span>
                  </div>
                ))}
              </div>
            )}
            <div className="pd-features">
              {[["award", "Quality Construction"], ["bulb", "Innovative Designs"], ["leaf", "Sustainable Development"], ["people", "Customer Centric Approach"]].map(([ic, t]) => (
                <div key={t} className="pd-feature"><span><Icon n={ic} size={20} /></span>{t}</div>
              ))}
            </div>
          </div>
          <div className="pd-about-visual">
            <img src={d.aboutImage} alt={d.aboutHeading} loading="lazy" />
            <span className="pd-about-shade" aria-hidden="true" />
            <div className="pd-about-quote"><i aria-hidden="true" />SPACES<br />THAT INSPIRE<br />A BRIGHTER<br />TOMORROW</div>
            <div className="pd-about-bar">
              <span><Icon n="home" size={18} /> Iconic Developments</span>
              <span><Icon n="leaf" size={18} /> Greener Communities</span>
              <span><Icon n="people" size={18} /> A Better Tomorrow</span>
            </div>
          </div>
        </div>

        {d.iconic.length > 0 && (
          <div className="pd-iconic">
            <div className="pd-wrap">
              <div className="pd-iconic-head">
                <div>
                  <Eyebrow>{d.sameDev ? "OUR SIGNATURE DEVELOPMENTS" : "MORE PROJECTS"}</Eyebrow>
                  <h2 className="pd-h2">{d.sameDev ? <>Iconic Projects <span className="gold">by {p.developer}</span></> : <>Explore More <span className="gold">Projects</span></>}</h2>
                </div>
                <Link className="pd-btn outline sm" to={d.developerLink}>VIEW ALL PROJECTS <Icon n="arrowR" size={15} /></Link>
              </div>
              <IconicRow items={d.iconic} />
            </div>
          </div>
        )}
      </section>

      {/* ============ FAQ + GET IN TOUCH ============ */}
      <section id="faqs" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-head center">
            <Eyebrow center>CONCIERGE SUPPORT</Eyebrow>
            <h2>Everything You <span className="gold">Need to Know</span></h2>
            <p>Get answers to the most common questions about {p.title}.<br />Our team is here to help you at every step of your journey.</p>
            <a className="pd-expert" href={`tel:${PHONE}`}>
              <span className="pd-expert-ic"><Icon n="phone" size={20} /></span>
              <span><small>TALK TO OUR EXPERT</small><strong>{PHONE_DISPLAY}</strong><em>AVAILABLE NOW</em></span>
            </a>
          </div>
          <div className="pd-faq-grid">
            <div>
              <div className="pd-faqs">
                {d.faqs.map((q, k) => (
                  <div key={k} className={`pd-faq${openFaq === k ? " open" : ""}`}>
                    <button type="button" onClick={() => setOpenFaq(openFaq === k ? -1 : k)} aria-expanded={openFaq === k}>
                      <span className="pd-faq-no">{pad2(k + 1)}</span>
                      <span className="pd-faq-q">{q.question}</span>
                      <span className="pd-faq-tog"><Icon n={openFaq === k ? "minus" : "plus"} size={16} sw={2} /></span>
                    </button>
                    {openFaq === k && q.answer && <p>{q.answer}</p>}
                  </div>
                ))}
              </div>
              <div className="pd-perks">
                {[["headset", "Dedicated", "Relationship Manager"], ["doc", "Latest Project", "Updates"], ["calendar", "Site Visit", "Assistance"], ["star", "Exclusive Offers", "& Pricing Details"]].map(([ic, a, b]) => (
                  <div key={a} className="pd-perk"><span><Icon n={ic} size={20} /></span><small>{a}<br />{b}</small></div>
                ))}
              </div>
            </div>
            <div className="pd-touch">
              <Eyebrow>GET IN TOUCH</Eyebrow>
              <h3>Get in Touch with <span className="gold">Us.</span></h3>
              <p>Fill in your details and our team will get back to you shortly.</p>
              <EnquiryForm property={p} source="Get in touch" dark />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIMILAR ============ */}
      {d.similar.length > 0 && (
        <section className="pd-section tint">
          <div className="pd-wrap">
            <div className="pd-iconic-head">
              <div>
                <Eyebrow>EXPLORE MORE</Eyebrow>
                <h2 className="pd-h2">Similar <span className="gold">Projects</span></h2>
              </div>
            </div>
            <div className="pd-similar">
              {d.similar.map((s) => (
                <Link key={s.id} to={propertyUrl(s)} className="pd-sim">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div><strong>{s.title}</strong><span className="gold">{s.priceRange || s.price}</span><small><Icon n="pin" size={13} /> {s.location}</small></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}


      <LeadPopup key={p.id} context={p.title} />

      {/* bottom dock: brochure / enquire / WhatsApp */}
      <div className="pd-dock">
        <div className="pd-wrap pd-dock-inner">
          <div className="pd-dock-prop">
            {d.images[0] && <img src={d.images[0]} alt="" />}
            <span><strong>{p.title}</strong><small>{(p.price || p.priceRange) ? `${p.price || p.priceRange}* Onwards` : "Price on request"}</small></span>
          </div>
          <div className="pd-dock-actions">
            <BrochureLink className="pd-dock-brochure"><Icon n="download" size={20} /><span>Brochure</span></BrochureLink>
            <button type="button" className="pd-dock-enquire" onClick={() => enquire("Enquire now")}><Icon n="mail" size={18} /><span>ENQUIRE NOW</span></button>
            <a className="pd-dock-wa" href={waLink(`Hi, I am interested in ${p.title}. Please share more details.`)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WaIcon /></a>
          </div>
        </div>
      </div>

      {/* popups */}
      <Modal open={modal?.kind === "enquiry"} onClose={() => setModal(null)} dark>
        <div className="pd-modal-head">
          <Eyebrow>{modal?.source?.toUpperCase() || "ENQUIRE"}</Eyebrow>
          <h3>{p.title}</h3>
          <p>Share your details and our expert will call you back.</p>
        </div>
        <EnquiryForm key={modal?.source} property={p} source={modal?.source} dark />
      </Modal>

      <Modal open={modal?.kind === "video"} onClose={() => setModal(null)} wide>
        {p.videoUrl && (() => { const v = videoEmbed(p.videoUrl); return v.type === "iframe"
          ? <div className="pd-video"><iframe src={v.src} title={`${p.title} video`} allow="autoplay; encrypted-media; fullscreen" allowFullScreen /></div>
          : <div className="pd-video"><video src={v.src} controls autoPlay playsInline /></div>; })()}
      </Modal>

      {modal?.kind === "plans" && (
        <Lightbox items={plans} start={modal.index || 0} title={`${p.title} — Floor & Site Plan`} onClose={() => setModal(null)} />
      )}

      {modal?.kind === "gallery" && (
        <Lightbox items={d.gallery} start={modal.index || 0} title={p.title} onClose={() => setModal(null)} />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   Iconic projects row (scrolls sideways with arrows)
--------------------------------------------------------------- */
function IconicRow({ items }) {
  const [el, setEl] = useState(null);
  const scroll = (d) => el?.scrollBy({ left: d * (el.clientWidth * 0.8), behavior: "smooth" });
  return (
    <div className="pd-iconic-row-wrap">
      <button type="button" className="pd-round left" onClick={() => scroll(-1)} aria-label="Previous"><Icon n="arrowL" size={18} /></button>
      <div className="pd-iconic-row" ref={setEl}>
        {items.map((x) => (
          <Link key={x.id} to={propertyUrl(x)} className="pd-iconic-card">
            <img src={x.image} alt={x.title} loading="lazy" />
            <div>
              <span><strong>{x.title}</strong><small><Icon n="pin" size={13} /> {sectorOf(x) || placeOf(x).locality}, {placeOf(x).city}</small></span>
              <em><Icon n="arrowR" size={16} /></em>
            </div>
          </Link>
        ))}
      </div>
      <button type="button" className="pd-round right" onClick={() => scroll(1)} aria-label="Next"><Icon n="arrowR" size={18} /></button>
    </div>
  );
}

/* ---------------------------------------------------------------
   Full-screen gallery
--------------------------------------------------------------- */
function Lightbox({ items, start, title, onClose }) {
  const [i, setI] = useState(start);
  const n = items.length;
  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((x) => (x + 1) % n);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + n) % n);
    };
    document.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [n, onClose]);
  const it = items[i];
  return (
    <div className="pd-lightbox" role="dialog" aria-modal="true" aria-label={`${title} gallery`}>
      <button type="button" className="pd-lb-x" onClick={onClose} aria-label="Close"><Icon n="close" size={22} /></button>
      <div className="pd-lb-stage">
        <button type="button" className="pd-round" onClick={() => setI((x) => (x - 1 + n) % n)} aria-label="Previous"><Icon n="arrowL" size={20} /></button>
        <figure>
          <img src={it.src} alt={it.caption || title} />
          <figcaption><span>{it.caption || title}</span><b>{pad2(i + 1)} / {pad2(n)}</b></figcaption>
        </figure>
        <button type="button" className="pd-round" onClick={() => setI((x) => (x + 1) % n)} aria-label="Next"><Icon n="arrowR" size={20} /></button>
      </div>
      <div className="pd-lb-thumbs">
        {items.map((g, k) => (
          <button key={g.src + k} type="button" className={k === i ? "on" : ""} onClick={() => setI(k)}><img src={g.src} alt="" loading="lazy" /></button>
        ))}
      </div>
    </div>
  );
}
