import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import API from "../utils/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CITIES, localitiesOf } from "../data/locations";
import {
  readFilters,
  applyFilters,
  resultsTitle,
  parseBudget,
  budgetLabel,
  BUDGETS,
  STATUSES,
} from "../utils/propertySearch";

// Filter keys written to the URL (the URL is the single source of truth)
const KEYS = ["q", "city", "locality", "type", "budget", "bhk", "status", "category", "sort"];

const TYPE_OPTIONS = [
  { group: "Residential", items: [["Apartment", "Apartment"], ["Villa", "Villa"], ["Builder Floor", "Builder Floor"], ["Penthouse", "Penthouse"], ["Plots", "Plots"], ["Farmhouse", "Farmhouse"]] },
  { group: "Commercial", items: [["Commercial", "All Commercial"], ["Retail", "Retail / Shops"], ["SCO", "SCO Plots"]] },
  { group: "Collections", items: [["Luxury", "Luxury Homes"], ["Branded", "Branded Residences"]] },
];
const CATEGORY_OPTIONS = [
  ["", "All Projects"], ["trending", "Trending"], ["upcoming", "Upcoming"],
  ["newlaunch", "New Launch"], ["branded", "Branded"], ["luxury", "Luxury"], ["commercial", "Commercial"], ["sco", "SCO"],
];
const BHK_OPTIONS = ["Studio", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
const label = (pairs, v) => pairs.find(([k]) => k === v)?.[1] || v;

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const BLACK = "#090909";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [offerTitles, setOfferTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = readFilters(params);
  const [q, setQ] = useState(filters.q);

  /* =====================================================
     FETCH PROPERTIES (+ offers for "festival" links)
  ===================================================== */

  useEffect(() => {
    Promise.all([
      API.get("/properties"),
      API.get("/offers").catch(() => ({ data: [] })),
    ])
      .then(([p, o]) => {
        setProperties(Array.isArray(p.data) ? p.data : []);
        setOfferTitles((o.data || []).map((x) => x.title).filter(Boolean));
      })
      .catch(() => setProperties([]))
      .finally(() => setLoading(false));
  }, []);

  /* =====================================================
     FILTER + SORT (recomputed whenever the URL changes)
  ===================================================== */

  const filtered = useMemo(
    () => applyFilters(properties, filters, { offerTitles }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [properties, offerTitles, params.toString()]
  );

  // Change one filter → rewrite the URL with clean keys
  const setFilter = (key, value) => {
    const next = { ...filters, [key]: value };
    if (key === "city") next.locality = "";
    const out = new URLSearchParams();
    KEYS.forEach((k) => next[k] && out.set(k, next[k]));
    setParams(out, { replace: true });
  };

  // Typing in the search box filters after a short pause
  useEffect(() => {
    const t = setTimeout(() => {
      if (q.trim() !== filters.q) setFilter("q", q.trim());
    }, 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  // Keep the box in sync when the URL changes from elsewhere (navbar, links)
  useEffect(() => {
    setQ(filters.q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get("q"), params.get("location")]);

  const clear = () => {
    setQ("");
    setParams({}, { replace: true });
  };

  // Chips for every active filter
  const chips = [
    filters.q && ["q", `“${filters.q}”`],
    filters.city && ["city", filters.city],
    filters.locality && ["locality", filters.locality],
    filters.type && ["type", filters.type.replace(/-/g, " ")],
    filters.budget && ["budget", budgetLabel(parseBudget(filters.budget)) || filters.budget],
    filters.bhk && ["bhk", filters.bhk],
    filters.status && ["status", filters.status.replace(/-/g, " ")],
    filters.category && ["category", label(CATEGORY_OPTIONS, filters.category)],
  ].filter(Boolean);

  const place = filters.locality || filters.city || "Gurugram";
  const typeKnown = TYPE_OPTIONS.some((g) => g.items.some(([v]) => v === filters.type));
  const budgetKnown = BUDGETS.some((b) => b.value === filters.budget);
  const statusKnown = STATUSES.includes(filters.status);
  const localityChoices = filters.city
    ? [{ city: filters.city, localities: localitiesOf(filters.city) }]
    : CITIES;

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const whatsappNumber = "919999999999";

  const getWhatsAppUrl = (property) => {
    const title =
      property?.title ||
      property?.name ||
      "this property";

    const message = encodeURIComponent(
      `Hi, I am interested in ${title}. Please share more details.`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  /* =====================================================
     PROPERTY CARD
  ===================================================== */

  const PropertyCard = ({ property, index }) => {
    const propertyId =
      property?.id ||
      property?._id ||
      index;

    const image =
      property?.image ||
      property?.thumbnail ||
      property?.images?.[0] ||
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85";

    const title =
      property?.title ||
      property?.name ||
      "Premium Property";

    const price =
      property?.priceRange ||
      property?.price ||
      "Price on Request";

    const location =
      property?.location ||
      property?.locality ||
      "Gurugram";

    const bhk =
      property?.bhk ||
      "3 & 4 BHK";

    const area =
      property?.area ||
      property?.size ||
      "2,500+ Sq.Ft.";

    const propertyType =
      property?.propertyType ||
      property?.type ||
      "";

    return (
      <Link
        to={`/property/${propertyId}`}
        className="search-property-card"
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="search-property-image">
          <img
            src={image}
            alt={title}
            loading="lazy"
          />

          <div className="search-image-overlay" />

          {/* RERA */}

          {property?.rera !== false && (
            <div className="search-rera-group">
              <span className="search-rera">
                <b>✓</b>
                RERA
              </span>
            </div>
          )}

          {/* BHK BADGE */}

          <div className="search-bhk-badge">
            {bhk}

            {bhk &&
            propertyType
              ? ` • ${propertyType}`
              : ""}
          </div>
        </div>

        {/* =================================================
            CARD CONTENT
        ================================================= */}

        <div className="search-property-content">

          {/* TITLE */}

          <h3>{title}</h3>

          {/* PRICE */}

          <div className="search-card-price">
            {price}
          </div>

          {/* LOCATION */}

          <div className="search-card-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

              <circle
                cx="12"
                cy="10"
                r="2.5"
              />
            </svg>

            <span>{location}</span>
          </div>

          {/* META */}

          <div className="search-card-meta">

            {/* BHK */}

            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M3 11h18" />

                <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />

                <path d="M4 19v-8" />

                <path d="M20 19v-8" />

                <path d="M4 15h16" />
              </svg>

              <span>{bhk}</span>
            </div>

            {/* AREA */}

            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 4h6" />
                <path d="M4 4v6" />

                <path d="M20 20h-6" />
                <path d="M20 20v-6" />

                <path d="M4 20h6" />
                <path d="M4 20v-6" />

                <path d="M20 4h-6" />
                <path d="M20 4v6" />
              </svg>

              <span>{area}</span>
            </div>

          </div>

          {/* WHATSAPP */}

          <a
            href={getWhatsAppUrl(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="search-card-whatsapp"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>

            <span>WhatsApp</span>
          </a>

        </div>
      </Link>
    );
  };

  return (
    <div className="search-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="search-container">

        {/* BREADCRUMB */}

        <div className="search-breadcrumb">
          <Link to="/">Home</Link>

          <span>›</span>

          <span>
            Projects in {place}
          </span>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="search-layout">

          {/* =================================================
              FILTER SIDEBAR
          ================================================= */}

          <aside className="filter-sidebar">

            <div className="filter-header">
              <h3>Filters</h3>

              <button
                onClick={clear}
              >
                Clear All
              </button>
            </div>

            <div className="filter-fields">

              {/* SEARCH */}
              <div className="filter-field">
                <label>SEARCH</label>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Project, builder, sector…"
                />
              </div>

              {/* CITY */}
              <div className="filter-field">
                <label>CITY</label>
                <select value={filters.city} onChange={(e) => setFilter("city", e.target.value)}>
                  <option value="">All Cities</option>
                  {CITIES.map((c) => <option key={c.city} value={c.city}>{c.city}</option>)}
                </select>
              </div>

              {/* LOCALITY */}
              <div className="filter-field">
                <label>LOCALITY</label>
                <select value={filters.locality} onChange={(e) => setFilter("locality", e.target.value)}>
                  <option value="">{filters.city ? `All of ${filters.city}` : "All Localities"}</option>
                  {localityChoices.map((c) => (
                    <optgroup key={c.city} label={c.city}>
                      {c.localities.map((l) => <option key={l.slug} value={l.name}>{l.name}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* PROPERTY TYPE */}
              <div className="filter-field">
                <label>PROPERTY TYPE</label>
                <select value={filters.type} onChange={(e) => setFilter("type", e.target.value)}>
                  <option value="">All Types</option>
                  {!typeKnown && filters.type && <option value={filters.type}>{filters.type.replace(/-/g, " ")}</option>}
                  {TYPE_OPTIONS.map((g) => (
                    <optgroup key={g.group} label={g.group}>
                      {g.items.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* BUDGET */}
              <div className="filter-field">
                <label>BUDGET</label>
                <select value={filters.budget} onChange={(e) => setFilter("budget", e.target.value)}>
                  <option value="">Any Budget</option>
                  {!budgetKnown && filters.budget && <option value={filters.budget}>{budgetLabel(parseBudget(filters.budget)) || filters.budget}</option>}
                  {BUDGETS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>

              {/* BHK */}
              <div className="filter-field">
                <label>BEDROOMS</label>
                <div className="bhk-pills">
                  {BHK_OPTIONS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={filters.bhk.toLowerCase() === b.toLowerCase() ? "active" : ""}
                      onClick={() => setFilter("bhk", filters.bhk.toLowerCase() === b.toLowerCase() ? "" : b)}
                    >
                      {b.replace(" BHK", "")}{b === "Studio" ? "" : " BHK"}
                    </button>
                  ))}
                </div>
              </div>

              {/* STATUS */}
              <div className="filter-field">
                <label>PROJECT STATUS</label>
                <select value={filters.status} onChange={(e) => setFilter("status", e.target.value)}>
                  <option value="">Any Status</option>
                  {!statusKnown && filters.status && <option value={filters.status}>{filters.status.replace(/-/g, " ")}</option>}
                  {STATUSES.map((st) => <option key={st} value={st}>{st}</option>)}
                </select>
              </div>

              {/* CATEGORY */}
              <div className="filter-field">
                <label>CATEGORY</label>
                <div className="category-options">
                  {!CATEGORY_OPTIONS.some(([v]) => v === filters.category) && (
                    <label className="category-option">
                      <input type="radio" name="cat" checked readOnly />
                      <span>{filters.category}</span>
                    </label>
                  )}
                  {CATEGORY_OPTIONS.map(([id, text]) => (
                    <label key={id || "all"} className="category-option">
                      <input
                        type="radio"
                        name="cat"
                        checked={filters.category === id}
                        onChange={() => setFilter("category", id)}
                      />
                      <span>{text}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="property-count">
                {loading ? "Loading…" : `${filtered.length} properties found`}
              </div>

            </div>

            {/* =================================================
                CONTACT CARD
            ================================================= */}

            <div className="expert-card">

              <div className="expert-title">
                Need Expert Help?
              </div>

              <div className="expert-text">
                Our property experts will
                help you find the perfect
                home.
              </div>

              <a
                href="tel:9090101401"
                className="expert-call"
              >
                Call +91 9090 101 401
              </a>

            </div>

          </aside>

          {/* =================================================
              RESULTS
          ================================================= */}

          <main className="results-area">

            {/* RESULTS HEADER */}

            <div className="results-header">

              <div>
                <h1>{resultsTitle(filters)}</h1>
                <p>
                  {loading ? "Loading properties…" : `Showing ${filtered.length} result${filtered.length === 1 ? "" : "s"}`}
                  {" "}•{" "}
                  Luxury Residences &amp; Investment Opportunities
                </p>
              </div>

              <select
                value={filters.sort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="sort-select"
              >
                <option value="">Sort by: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>

            </div>

            {chips.length > 0 && (
              <div className="active-filters">
                {chips.map(([key, text]) => (
                  <button key={key} type="button" className="active-chip" onClick={() => { if (key === "q") setQ(""); setFilter(key, ""); }}>
                    {text} <span aria-hidden="true">✕</span>
                  </button>
                ))}
                <button type="button" className="active-clear" onClick={clear}>Clear all</button>
              </div>
            )}

            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {loading ? (

              <div className="empty-state">
                <div className="empty-title">Loading properties…</div>
                <div className="empty-text">The server may take a few seconds to wake up.</div>
              </div>

            ) : filtered.length === 0 ? (

              <div className="empty-state">

                <div className="empty-icon">
                  🏢
                </div>

                <div className="empty-title">
                  No properties found
                </div>

                <div className="empty-text">
                  Try adjusting your filters
                  or search query
                </div>

                <button
                  onClick={clear}
                  className="empty-btn"
                >
                  Clear Filters
                </button>

              </div>

            ) : (

              /* =================================================
                 PROPERTY GRID
              ================================================= */

              <div className="results-grid">

                {filtered.map(
                  (property, index) => (
                    <PropertyCard
                      key={
                        property?.id ||
                        property?._id ||
                        index
                      }
                      property={property}
                      index={index}
                    />
                  )
                )}

              </div>

            )}

          </main>

        </div>

      </div>

      <Footer />

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .search-page {
          min-height: 100vh;
          background: #f7f7f5;
          color: #111111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .search-page,
        .search-page *,
        .search-page input,
        .search-page select,
        .search-page button,
        .search-page textarea {
          font-family: "Manrope", "Inter", Arial, sans-serif !important;
        }

        .search-container {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 92px 0 0px;
        }

        .search-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          font-size: 12px;
          line-height: 1.4;
          color: #777777;
        }

        .search-breadcrumb a {
          color: #777777;
          text-decoration: none;
          transition: .2s ease;
        }

        .search-breadcrumb a:hover {
          color: ${GOLD_DARK};
        }

        .search-breadcrumb span:last-child {
          color: #222222;
          font-weight: 700;
        }

        .search-layout {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .filter-sidebar {
          background: #ffffff;
          border: 1px solid #e7e4dc;
          border-radius: 18px;
          padding: 20px;
          position: sticky;
          top: 100px;
          box-shadow: 0 8px 30px rgba(0,0,0,.04);
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid #eeeeee;
        }

        .filter-header h3 {
          margin: 0;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 800;
          color: #111111;
        }

        .filter-header button {
          border: none;
          background: transparent;
          color: ${GOLD_DARK};
          font-size: 11px;
          line-height: 1.3;
          font-weight: 800;
          cursor: pointer;
        }

        .filter-fields {
          display: grid;
          gap: 17px;
          margin-top: 18px;
        }

        .filter-field {
          display: flex;
          flex-direction: column;
        }

        .filter-field > label {
          font-size: 10px;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: 1px;
          color: #555555;
          margin-bottom: 7px;
        }

        .filter-field input,
        .filter-field select {
          width: 100%;
          height: 42px;
          border: 1px solid #e4e4e4;
          border-radius: 10px;
          background: #ffffff;
          padding: 0 12px;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.2;
          color: #222222;
          outline: none;
          transition: .2s ease;
        }

        .filter-field input:focus,
        .filter-field select:focus {
          border-color: ${GOLD};
          box-shadow: 0 0 0 3px rgba(212,175,55,.10);
        }

        .category-options {
          display: grid;
          gap: 9px;
        }

        .category-option {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #555555;
          cursor: pointer;
        }

        .category-option input {
          width: 15px;
          height: 15px;
          accent-color: ${GOLD_DARK};
        }

        .apply-filter-btn {
          width: 100%;
          height: 43px;
          border: none;
          border-radius: 10px;
          background: ${BLACK};
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .apply-filter-btn:hover {
          background: ${GOLD_DARK};
          transform: translateY(-1px);
        }

        .property-count {
          text-align: center;
          font-size: 11px;
          line-height: 1.4;
          color: #777777;
        }

        .expert-card {
          margin-top: 20px;
          padding: 18px;
          border-radius: 15px;
          background: linear-gradient(145deg, #111111, #242424);
          color: #ffffff;
        }

        .expert-title {
          font-size: 14px;
          line-height: 1.35;
          font-weight: 800;
        }

        .expert-text {
          margin-top: 6px;
          font-size: 11px;
          line-height: 1.6;
          color: rgba(255,255,255,.68);
        }

        .expert-call {
          display: block;
          margin-top: 14px;
          padding: 10px;
          border-radius: 9px;
          background: ${GOLD};
          color: #111111;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;
          transition: .2s ease;
        }

        .expert-call:hover {
          background: #ffffff;
        }

        .results-header {
          min-height: 78px;
          padding: 16px 18px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
        }

        .results-header h1 {
          margin: 0;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 850;
          color: #111111;
          letter-spacing: -.4px;
        }

        .results-header p {
          margin: 5px 0 0;
          color: #777777;
          font-size: 11px;
          line-height: 1.5;
        }

        .sort-select {
          height: 39px;
          min-width: 190px;
          border: 1px solid #e2e2e2;
          border-radius: 9px;
          padding: 0 11px;
          background: #ffffff;
          font-family: inherit;
          font-size: 11px;
          line-height: 1.2;
          color: #333333;
          outline: none;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        .search-property-card {
          display: block;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0,0,0,.045);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .search-property-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212,175,55,.45);
          box-shadow: 0 18px 42px rgba(0,0,0,.10);
        }

        .search-property-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #eeeeee;
        }

        .search-property-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .55s ease;
        }

        .search-property-card:hover .search-property-image img {
          transform: scale(1.045);
        }

        .search-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,.10) 0%,
            transparent 42%,
            rgba(0,0,0,.48) 100%
          );
          pointer-events: none;
        }

        .search-rera-group {
          position: absolute;
          top: 13px;
          left: 13px;
          z-index: 2;
        }

        .search-rera {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 9px;
          border-radius: 6px;
          background: #138a42;
          color: #ffffff;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: .4px;
          box-shadow: 0 4px 12px rgba(0,0,0,.16);
        }

        .search-rera b {
          font-size: 10px;
        }

        .search-bhk-badge {
          position: absolute;
          right: 13px;
          bottom: 13px;
          z-index: 2;
          max-width: calc(100% - 26px);
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,.30);
          border-radius: 7px;
          background: rgba(0,0,0,.68);
          backdrop-filter: blur(7px);
          color: #ffffff;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-property-content {
          padding: 16px 16px 15px;
        }

        .search-property-content h3 {
          margin: 0;
          min-height: 20px;
          color: #111111;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 850;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .search-card-price {
          margin-top: 7px;
          color: ${GOLD_DARK};
          font-size: 14px;
          line-height: 1.3;
          font-weight: 900;
        }

        .search-card-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 9px;
          color: #777777;
          font-size: 10px;
          line-height: 1.4;
        }

        .search-card-location svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: ${GOLD_DARK};
        }

        .search-card-location span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .search-card-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 13px;
          padding-top: 12px;
          border-top: 1px solid #eeeeee;
        }

        .search-card-meta > div {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555555;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 650;
        }

        .search-card-meta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: #888888;
        }

        .search-card-meta span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* =================================================
           WHATSAPP BUTTON - UPDATED
           Screenshot style:
           light green background,
           thin green border,
           green icon/text
        ================================================= */

        .search-card-whatsapp {
          width: 100%;
          height: 36px;
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 6px;
          border: 1px solid #bfe8cf;
          background: #eefaf3;
          color: #18b965;
          text-decoration: none;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          transition: .25s ease;
          box-sizing: border-box;
        }

        .search-card-whatsapp svg {
          width: 15px;
          height: 15px;
        }

        .search-card-whatsapp:hover {
          background: #e2f7ea;
          border-color: #a8dfbf;
          color: #129c55;
          transform: translateY(-1px);
        }

        .empty-state {
          margin-top: 18px;
          padding: 70px 30px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #ffffff;
          text-align: center;
        }

        .empty-icon {
          font-size: 45px;
          line-height: 1;
          opacity: .35;
        }

        .empty-title {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 800;
        }

        .empty-text {
          margin-top: 5px;
          font-size: 12px;
          line-height: 1.5;
          color: #777777;
        }

        .empty-btn {
          margin-top: 17px;
          padding: 10px 20px;
          border: none;
          border-radius: 9px;
          background: ${BLACK};
          color: #ffffff;
          font-family: inherit;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 800;
          cursor: pointer;
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1200px) {

          .search-container {
            width: min(100% - 30px, 1100px);
          }

          .search-layout {
            grid-template-columns: 245px minmax(0, 1fr);
            gap: 17px;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .search-property-image {
            height: 230px;
          }

        }

        /* =================================================
           TABLET / SMALL LAPTOP
        ================================================= */

        @media (max-width: 960px) {

          .search-container {
            width: calc(100% - 28px);
            padding-top: 88px;
          }

          .search-layout {
            grid-template-columns: 1fr;
          }

          .filter-sidebar {
            position: relative;
            top: auto;
          }

          .filter-fields {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .filter-field:first-child {
            grid-column: 1 / -1;
          }

          .category-options {
            grid-template-columns: repeat(2, 1fr);
          }

          .apply-filter-btn,
          .property-count {
            grid-column: 1 / -1;
          }

          .expert-card {
            display: none;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 640px) {

          .search-container {
            width: calc(100% - 20px);
            padding-top: 80px;
            padding-bottom: 35px;
          }

          .search-breadcrumb {
            margin-bottom: 13px;
            font-size: 10px;
          }

          .filter-sidebar {
            padding: 15px;
            border-radius: 14px;
          }

          .filter-fields {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .filter-field:first-child {
            grid-column: auto;
          }

          .category-options {
            grid-template-columns: 1fr;
          }

          .results-header {
            padding: 14px;
            border-radius: 14px;
          }

          .results-header h1 {
            font-size: 17px;
          }

          .results-header p {
            font-size: 10px;
          }

          .sort-select {
            width: 100%;
          }

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .search-property-image {
            height: 150px;
          }

          .search-property-content {
            padding: 11px;
          }

          .search-property-content h3 {
            font-size: 12px;
            line-height: 1.3;
            min-height: 31px;
          }

          .search-card-price {
            margin-top: 5px;
            font-size: 12px;
          }

          .search-card-location {
            margin-top: 6px;
            font-size: 8.5px;
          }

          .search-card-meta {
            gap: 6px;
            margin-top: 9px;
            padding-top: 9px;
          }

          .search-card-meta > div {
            gap: 4px;
            font-size: 8px;
          }

          .search-card-meta svg {
            width: 13px;
            height: 13px;
          }

          /* MOBILE WHATSAPP */

          .search-card-whatsapp {
            height: 32px;
            margin-top: 9px;
            gap: 5px;
            font-size: 8.5px;
            border-radius: 5px;
          }

          .search-card-whatsapp svg {
            width: 13px;
            height: 13px;
          }

          .search-rera-group {
            top: 8px;
            left: 8px;
          }

          .search-rera {
            padding: 4px 6px;
            font-size: 7px;
          }

          .search-bhk-badge {
            right: 8px;
            bottom: 8px;
            max-width: calc(100% - 16px);
            padding: 5px 7px;
            font-size: 7px;
          }

        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {

          .results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .search-property-image {
            height: 125px;
          }

          .search-property-content {
            padding: 9px;
          }

          .search-property-content h3 {
            font-size: 11px;
          }

          .search-card-price {
            font-size: 11px;
          }

          .search-card-location {
            font-size: 8px;
          }

          .search-card-meta {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .search-card-whatsapp {
            font-size: 8px;
          }

        }


        /* ---- filter additions ---- */
        .filter-field optgroup { font-weight: 800; color: #777; }

        .bhk-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .bhk-pills button {
          height: 32px; padding: 0 11px; border-radius: 20px;
          border: 1px solid #e4e4e4; background: #fff; color: #333;
          font-size: 11px; font-weight: 700; cursor: pointer; transition: .2s ease;
        }
        .bhk-pills button:hover { border-color: ${GOLD}; }
        .bhk-pills button.active { background: ${BLACK}; border-color: ${BLACK}; color: ${GOLD}; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; align-items: center; }
        .active-chip {
          display: inline-flex; align-items: center; gap: 7px;
          height: 32px; padding: 0 12px; border-radius: 20px;
          border: 1px solid #ecdfb0; background: #fffaeb; color: #5c4a12;
          font-size: 11.5px; font-weight: 700; cursor: pointer; text-transform: capitalize;
        }
        .active-chip span { font-size: 10px; color: ${GOLD_DARK}; }
        .active-chip:hover { border-color: ${GOLD}; }
        .active-clear { border: none; background: none; color: ${GOLD_DARK}; font-size: 11.5px; font-weight: 800; cursor: pointer; }
      `}</style>

    </div>
  );
}