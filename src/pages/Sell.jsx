import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/api";
import { applyMeta } from "../utils/seo";
import "./sell.css";

const TYPES = ["Apartment", "Villa", "Builder Floor", "Plot", "Penthouse", "Commercial / Office", "Shop / SCO"];
const LOCATIONS = ["Southern Peripheral Road", "Dwarka Expressway", "Sohna Road", "New Gurugram", "Golf Course Road", "Golf Course Extension Road", "Other"];
const EMPTY = { name: "", phone: "", email: "", type: "", location: "", project: "", config: "", area: "", price: "", message: "", website: "" };

// /sell — owners list their property; saved in Admin → Enquiries and emailed to leads@
export default function Sell() {
  const [f, setF] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  useEffect(() => applyMeta({
    title: "Sell Your Property in Gurugram | HomWisor",
    description: "List your apartment, villa, plot or commercial property with HomWisor. Get a free valuation and verified buyers.",
    url: window.location.origin + "/sell",
  }), []);

  const submit = async (e) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setError("Please enter your name");
    if (!/^\+?[\d\s-]{10,15}$/.test(f.phone.trim())) return setError("Please enter a valid 10-digit mobile number");
    if (!f.type) return setError("Please choose the property type");
    if (!f.location) return setError("Please choose the location");
    setError(""); setStatus("sending");
    const details = [
      `Property type: ${f.type}`,
      `Location: ${f.location}`,
      f.project && `Project / society: ${f.project}`,
      f.config && `Configuration: ${f.config}`,
      f.area && `Size: ${f.area}`,
      f.price && `Expected price: ${f.price}`,
      f.message && `Notes: ${f.message}`,
    ].filter(Boolean).join("\n");
    try {
      await API.post("/enquiries", {
        name: f.name.trim(), phone: f.phone.trim(), email: f.email.trim(),
        subject: "Sell property",
        property: `Sell: ${f.type} in ${f.location}${f.project ? ` (${f.project})` : ""}`,
        message: details,
        source: "sell", page: "/sell", website: f.website,
      });
      setStatus("sent"); setF(EMPTY);
    } catch (err) {
      setStatus("idle");
      setError(err?.response?.data?.error || "Could not send right now. Please call us instead.");
    }
  };

  return (
    <div className="sl-page">
      <Header />

      <section className="sl-hero">
        <div className="sl-wrap sl-grid">
          <div className="sl-copy">
            <span className="sl-eyebrow">SELL WITH HOMWISOR</span>
            <h1>Sell your property <span>faster, at the right price.</span></h1>
            <p>Share a few details and our property expert will call you with a free valuation and a plan to reach verified buyers.</p>
            <ul className="sl-points">
              <li><b>1</b><div><strong>Free valuation</strong><small>Based on recent deals in your locality</small></div></li>
              <li><b>2</b><div><strong>Verified buyers</strong><small>Serious, pre-qualified enquiries only</small></div></li>
              <li><b>3</b><div><strong>End-to-end support</strong><small>Paperwork, negotiation and registration</small></div></li>
            </ul>
          </div>

          <div className="sl-card">
            {status === "sent" ? (
              <div className="sl-done">
                <span>✓</span>
                <h2>Thank you!</h2>
                <p>Your property details have been sent. Our expert will call you shortly.</p>
                <button type="button" onClick={() => setStatus("idle")}>List another property</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2>List your property</h2>
                <p className="sl-sub">Takes less than a minute</p>

                <div className="sl-fields">
                  <label>Full name *<input value={f.name} onChange={set("name")} placeholder="Your name" autoComplete="name" /></label>
                  <label>Mobile number *<input value={f.phone} onChange={set("phone")} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" /></label>
                  <label className="full">Email<input value={f.email} onChange={set("email")} placeholder="Optional" inputMode="email" autoComplete="email" /></label>
                  <label>Property type *
                    <select value={f.type} onChange={set("type")}>
                      <option value="">Select type</option>
                      {TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label>Location *
                    <select value={f.location} onChange={set("location")}>
                      <option value="">Select location</option>
                      {LOCATIONS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>
                  <label className="full">Project / society name<input value={f.project} onChange={set("project")} placeholder="e.g. DLF The Crest, Sector 54" /></label>
                  <label>Configuration<input value={f.config} onChange={set("config")} placeholder="e.g. 3 BHK" /></label>
                  <label>Size<input value={f.area} onChange={set("area")} placeholder="e.g. 1,850 sq.ft." /></label>
                  <label className="full">Expected price<input value={f.price} onChange={set("price")} placeholder="e.g. ₹2.5 Cr" /></label>
                  <label className="full">Anything else?<textarea value={f.message} onChange={set("message")} rows={3} placeholder="Floor, facing, furnishing, possession…" /></label>
                  {/* hidden spam trap — people never fill this */}
                  <input className="sl-trap" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} aria-hidden="true" />
                </div>

                {error && <div className="sl-err" role="alert">{error}</div>}
                <button type="submit" className="sl-submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Get a free valuation →"}</button>
                <span className="sl-fine">By submitting, you agree to be contacted by HomWisor about your property.</span>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
