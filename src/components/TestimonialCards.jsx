import React, { useState } from "react";

// Shown only if the testimonials can't be loaded from the server
export const FALLBACK_TESTIMONIALS = [
  { id: "t1", name: "Aayush Gupta", initials: "AG", color: "#F59E0B", platform: "Google", verified: true, rating: 5, text: "Rajesh ji is awesome. One place stop for all your real estate deals. Good natured, an honest and god fearing person." },
  { id: "t2", name: "Soumya", initials: "SO", color: "#E9D5FF", textColor: "#6B21A8", platform: "Google", verified: true, rating: 5, text: "Honestly, had a really smooth experience with HomWisor. The team was friendly and actually listened to what I needed. They didn't waste my time with random options." },
  { id: "t3", name: "Amit Kumar", initials: "AK", color: "#D6D3D1", textColor: "#44403C", platform: "Google", verified: true, rating: 5, text: "HomWisor made my home buying journey smooth and hassle-free. Their attention to detail and customer service is exceptional." },
  { id: "t4", name: "Neha Gupta", initials: "NG", color: "#10B981", platform: "Google", verified: true, rating: 5, text: "Very professional team with deep knowledge of the market. They helped me find the perfect investment property with great returns." },
];

const PLATFORM_MARK = {
  Google: { letter: "G", className: "google-g" },
  Facebook: { letter: "f", style: { background: "#1877F2", color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "inline-grid", placeItems: "center", fontWeight: 800 } },
  Justdial: { letter: "Jd", style: { color: "#F97316", fontWeight: 900 } },
  Website: { letter: "★", style: { color: "#9A7418" } },
};

const initialsOf = (name = "") => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function Avatar({ t }) {
  const [broken, setBroken] = useState(false);
  const style = { background: t.color || "#E5E7EB", color: t.textColor || "#475569", overflow: "hidden" };
  return (
    <div className="hw-testimonial-avatar" style={style}>
      {t.photo && !broken
        ? <img src={t.photo} alt={t.name} loading="lazy" onError={() => setBroken(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        : t.initials || initialsOf(t.name)}
    </div>
  );
}

/** The testimonial cards grid (uses the existing hw-testimonial-* styles). */
export default function TestimonialCards({ items, limit = 4 }) {
  const list = (items || []).slice(0, limit);
  if (!list.length) return null;

  return (
    <div className="hw-testimonial-grid">
      {list.map((t) => {
        const rating = Math.min(5, Math.max(1, Math.round(t.rating || 5)));
        const platform = t.platform || "Google";
        const mark = PLATFORM_MARK[platform];
        return (
          <article key={t.id} className="hw-testimonial-card">
            <div className="hw-testimonial-top">
              <div className="hw-review-icon" style={{ background: t.color || "#E5E7EB", color: t.textColor || "#64748B" }}>“</div>
              {platform !== "Other" && (
                <div className="hw-google">
                  <span className={mark?.className} style={mark?.style}>{mark?.letter}</span>
                  <span>{platform}</span>
                </div>
              )}
            </div>

            <div className="hw-testimonial-stars" aria-label={`${rating} out of 5 stars`}>
              {"★".repeat(rating)}
              {rating < 5 && <span style={{ color: "#E5E7EB" }}>{"★".repeat(5 - rating)}</span>}
            </div>

            <div className="hw-testimonial-review">"{t.text}"</div>

            <div className="hw-testimonial-user">
              <Avatar t={t} />
              <div className="hw-testimonial-user-info">
                <div className="hw-testimonial-name">{t.name}</div>
                {t.role
                  ? <div className="hw-testimonial-verified" style={{ textTransform: "none", letterSpacing: 0 }}>{t.role}</div>
                  : t.verified !== false && <div className="hw-testimonial-verified">VERIFIED BUYER</div>}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
