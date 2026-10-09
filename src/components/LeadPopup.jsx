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
            <h2>Find your <em>dream property</em></h2>
            <p className="lp-sub">Share your details and our property expert will call you back.</p>

            <div className="lp-grid">
              <label>Your Name<input value={f.name} onChange={set("name")} placeholder="Enter your name" autoComplete="name" /></label>
              <label>Phone Number<input value={f.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" inputMode="tel" autoComplete="tel" /></label>
              <label className="full">Email Address<input value={f.email} onChange={set("email")} placeholder="Enter your email" inputMode="email" autoComplete="email" /></label>
              <label className="full">I'm Interested In
                <select value={f.subject} onChange={set("subject")}>
                  <option value="">Select an option</option>
                  {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="full">Message<textarea value={f.message} onChange={set("message")} rows={2} placeholder="Tell us how we can help you..." /></label>
              <input className="lp-trap" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} aria-hidden="true" />
            </div>

            {error && <div className="lp-err" role="alert">{error}</div>}
            <button type="submit" className="lp-submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Message →"}</button>
          </form>
        )}
      </div>
    </div>
  );
}
