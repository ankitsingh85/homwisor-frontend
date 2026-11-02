import { useEffect, useState } from "react";
import API from "../utils/api";
import "./leadPopup.css";

// Enquiry popup — same fields as the Contact page form.
// Opens 5 seconds after the page loads (homepage, property list, property page).
// Once someone submits it, it stays away for 7 days; closing it only hides it
// until the next page load.

const SUBJECTS = ["Buying a Property", "Selling a Property", "Property Investment", "Site Visit", "General Enquiry"];
const DELAY_MS = 5000;
const DONE_KEY = "hw_lead_popup_sent";
const QUIET_DAYS = 7;
// small line icons for the fields
const Ic = ({ d }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>;
const ICONS = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>,
  chat: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 9h8M8 13h5" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><rect x="9.5" y="11" width="5" height="4" rx=".8" /><path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11" /></>,
  city: <path d="M3 21h18M5 21V9l4-2v14M9 21V5l5-2v18M14 21V9h5v12M16.5 12v1M16.5 15v1M11 8v1M11 11v1M11 14v1M7 11v1M7 14v1" />,
};

const EMPTY = { name: "", phone: "", email: "", subject: "", message: "", website: "" };

const recentlySent = () => {
  try {
    const t = Number(localStorage.getItem(DONE_KEY));
    return t && Date.now() - t < QUIET_DAYS * 864e5;
  } catch { return false; }
};

export default function LeadPopup({ context = "" }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  useEffect(() => {
    if (recentlySent()) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setError("Please enter your name");
    if (!/^\+?[\d\s-]{10,15}$/.test(f.phone.trim())) return setError("Please enter a valid mobile number");
    if (!f.subject) return setError("Please choose what you're interested in");
    setError(""); setStatus("sending");
    try {
      await API.post("/enquiries", {
        name: f.name.trim(), phone: f.phone.trim(), email: f.email.trim(),
        subject: f.subject,
        property: context ? `${f.subject} — ${context}` : f.subject,
        message: f.message.trim() || `${f.subject} (popup form)`,
        source: "popup", page: window.location.pathname, website: f.website,
      });
      setStatus("sent");
      try { localStorage.setItem(DONE_KEY, String(Date.now())); } catch { /* storage blocked */ }
    } catch (err) {
      setStatus("idle");
      setError(err?.response?.data?.error || "Could not send right now. Please call us instead.");
    }
  };

  return (
    <div className="lp-back" role="dialog" aria-modal="true" aria-label="Get in touch" onClick={() => setOpen(false)}>
      <div className="lp-box" onClick={(e) => e.stopPropagation()}>
        <i className="lp-corner lp-corner-tl" aria-hidden="true" /><i className="lp-corner lp-corner-br" aria-hidden="true" />
        <button type="button" className="lp-x" onClick={() => setOpen(false)} aria-label="Close">✕</button>

        {status === "sent" ? (
          <div className="lp-done">
            <span>✓</span>
            <h2>Thank you!</h2>
            <p>Our property expert will contact you shortly.</p>
            <button type="button" className="lp-submit" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <span className="lp-eyebrow">TALK TO AN EXPERT</span>
            <h2>Find Your <em>Dream Property</em></h2>
            <p className="lp-sub">Share your details and our property expert will call you back.</p>

            <div className="lp-grid">
              <label>Your Name
                <span className="lp-field"><Ic d={ICONS.user} /><input value={f.name} onChange={set("name")} placeholder="Enter your name" autoComplete="name" /></span>
              </label>
              <label>Phone Number
                <span className="lp-field"><Ic d={ICONS.phone} /><input value={f.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" inputMode="tel" autoComplete="tel" /></span>
              </label>
              <label>Email Address
                <span className="lp-field"><Ic d={ICONS.mail} /><input value={f.email} onChange={set("email")} placeholder="Enter your email" inputMode="email" autoComplete="email" /></span>
              </label>
              <label>I'm Interested In
                <span className="lp-field lp-select"><Ic d={ICONS.layers} />
                  <select value={f.subject} onChange={set("subject")}>
                    <option value="">Select an option</option>
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </span>
              </label>
              <label>Message
                <span className="lp-field lp-area"><Ic d={ICONS.chat} /><textarea value={f.message} onChange={set("message")} rows={3} placeholder="Tell us how we can help you..." /></span>
              </label>
              <input className="lp-trap" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} aria-hidden="true" />
            </div>

            <p className="lp-safe"><Ic d={ICONS.shield} /><i aria-hidden="true" />Your information is safe with us</p>
            {error && <div className="lp-err" role="alert">{error}</div>}
            <button type="submit" className="lp-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : <>Send Message <span aria-hidden="true">→</span></>}
            </button>
            <div className="lp-foot" aria-hidden="true"><i /><Ic d={ICONS.city} /><i /></div>
          </form>
        )}
      </div>
    </div>
  );
}
