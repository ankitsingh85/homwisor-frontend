import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import API from "../utils/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const BLACK = "#090909";

export default function Search() {
  const [params, setParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [q, setQ] = useState(params.get("q") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [loc, setLoc] = useState(params.get("location") || "");
  const [cat, setCat] = useState(params.get("category") || "");
  const [budget, setBudget] = useState("");

  /* =====================================================
     FETCH PROPERTIES
  ===================================================== */

  useEffect(() => {
    API.get("/properties")
      .then((r) => {
        setProperties(Array.isArray(r.data) ? r.data : []);
      })
      .catch(() => {
        setProperties([]);
      });
  }, []);

  /* =====================================================
     FILTER PROPERTIES
  ===================================================== */

  useEffect(() => {
    let res = [...properties];

    const searchQ = params.get("q") || q;
    const t = params.get("type") || type;
    const l = params.get("location") || loc;
    const c = params.get("category") || cat;

    if (searchQ) {
      const search = searchQ.toLowerCase();

      res = res.filter((p) => {
        const title = String(p?.title || "").toLowerCase();
        const location = String(
          p?.location || p?.locality || ""
        ).toLowerCase();

        return (
          title.includes(search) ||
          location.includes(search)
        );
      });
    }

    if (t && t !== "All") {
      const typeSearch = t.toLowerCase();

      res = res.filter((p) => {
        const propertyType = String(
          p?.type || p?.propertyType || ""
        ).toLowerCase();

        const bhk = String(p?.bhk || "").toLowerCase();

        return (
          propertyType.includes(typeSearch) ||
          bhk.includes(typeSearch)
        );
      });
    }

    if (l) {
      const locationSearch = l.toLowerCase();

      res = res.filter((p) => {
        const location = String(
          p?.location || p?.locality || ""
        ).toLowerCase();

        return location.includes(locationSearch);
      });
    }

    if (c) {
      res = res.filter(
        (p) =>
          String(p?.category || "").toLowerCase() ===
          c.toLowerCase()
      );
    }

    if (budget) {
      // Budget filter can be added later.
    }

    setFiltered(res);
  }, [
    properties,
    params,
    q,
    type,
    loc,
    cat,
    budget,
  ]);

  /* =====================================================
     APPLY FILTERS
  ===================================================== */

  const apply = () => {
    const p = new URLSearchParams();

    if (q) p.set("q", q);
    if (type) p.set("type", type);
    if (loc) p.set("location", loc);
    if (cat) p.set("category", cat);

    setParams(p);
  };

  /* =====================================================
     CLEAR FILTERS
  ===================================================== */

  const clear = () => {
    setQ("");
    setType("");
    setLoc("");
    setCat("");
    setBudget("");
    setParams({});
  };

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
     PRICE SORT
  ===================================================== */

  const getPriceNumber = (property) => {
    const value =
      property?.priceRange ||
      property?.price ||
      "0";

    const cleaned = String(value)
      .replace(/,/g, "")
      .replace(/[^0-9.]/g, "");

    return parseFloat(cleaned) || 0;
  };

  const sortProperties = (value) => {
    const sorted = [...filtered];

    if (value === "price-low") {
      sorted.sort(
        (a, b) =>
          getPriceNumber(a) -
          getPriceNumber(b)
      );
    }

    if (value === "price-high") {
      sorted.sort(
        (a, b) =>
          getPriceNumber(b) -
          getPriceNumber(a)
      );
    }

    setFiltered(sorted);
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
            Projects in Gurugram
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
                  onChange={(e) =>
                    setQ(e.target.value)
                  }
                  placeholder="Project, Builder..."
                />
              </div>

              {/* PROPERTY TYPE */}

              <div className="filter-field">
                <label>
                  PROPERTY TYPE
                </label>

                <select
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                >
                  <option value="">
                    All Types
                  </option>

                  <option>
                    Apartment
                  </option>

                  <option>
                    Villa
                  </option>

                  <option>
                    Builder Floor
                  </option>

                  <option>
                    Plots
                  </option>

                  <option>
                    Commercial
                  </option>

                  <option>
                    Farmhouse
                  </option>
                </select>
              </div>

              {/* LOCATION */}

              <div className="filter-field">
                <label>
                  LOCATION
                </label>

                <select
                  value={loc}
                  onChange={(e) =>
                    setLoc(e.target.value)
                  }
                >
                  <option value="">
                    All Gurugram
                  </option>

                  <option>
                    Golf Course Road
                  </option>

                  <option>
                    Golf Course Extension Road
                  </option>

                  <option>
                    Sohna Road
                  </option>

                  <option>
                    Dwarka Expressway
                  </option>

                  <option>
                    New Gurgaon
                  </option>

                  <option>
                    Southern Peripheral Road
                  </option>
                </select>
              </div>

              {/* CATEGORY */}

              <div className="filter-field">
                <label>
                  CATEGORY
                </label>

                <div className="category-options">

                  {[
                    {
                      id: "",
                      label: "All Projects",
                    },
                    {
                      id: "recommended",
                      label: "Recommended",
                    },
                    {
                      id: "trending",
                      label: "Trending",
                    },
                    {
                      id: "upcoming",
                      label: "Upcoming",
                    },
                    {
                      id: "newlaunch",
                      label: "New Launch",
                    },
                  ].map((o) => (
                    <label
                      key={o.id}
                      className="category-option"
                    >
                      <input
                        type="radio"
                        name="cat"
                        checked={
                          cat === o.id
                        }
                        onChange={() =>
                          setCat(o.id)
                        }
                      />

                      <span>
                        {o.label}
                      </span>
                    </label>
                  ))}

                </div>
              </div>

              {/* APPLY */}

              <button
                className="apply-filter-btn"
                onClick={apply}
              >
                Apply Filters
              </button>

              {filtered.length > 0 && (
                <div className="property-count">
                  {filtered.length} properties found
                </div>
              )}

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
                href="tel:8500900100"
                className="expert-call"
              >
                Call 8500 900 100
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
                <h1>
                  Properties in Gurugram
                </h1>

                <p>
                  Showing {filtered.length} results
                  {" "}•{" "}
                  Luxury Residences &
                  Investment Opportunities
                </p>
              </div>

              <select
                onChange={(e) =>
                  sortProperties(
                    e.target.value
                  )
                }
                className="sort-select"
              >
                <option value="">
                  Sort by: Recommended
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>
              </select>

            </div>

            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {filtered.length === 0 ? (

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
          color: #111;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
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
          padding: 92px 0 60px;
        }

        /* =====================================================
           BREADCRUMB
        ===================================================== */

        .search-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          font-size: 12px;
          color: #777;
        }

        .search-breadcrumb a {
          color: #777;
          text-decoration: none;
          transition: .2s ease;
        }

        .search-breadcrumb a:hover {
          color: ${GOLD_DARK};
        }

        .search-breadcrumb span:last-child {
          color: #222;
          font-weight: 700;
        }

        /* =====================================================
           MAIN LAYOUT
        ===================================================== */

        .search-layout {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        /* =====================================================
           FILTER SIDEBAR
        ===================================================== */

        .filter-sidebar {
          background: #fff;
          border: 1px solid #e7e4dc;
          border-radius: 18px;
          padding: 20px;
          position: sticky;
          top: 100px;
          box-shadow:
            0 8px 30px rgba(0,0,0,.04);
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }

        .filter-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
          color: #111;
        }

        .filter-header button {
          border: none;
          background: transparent;
          color: ${GOLD_DARK};
          font-size: 11px;
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
          font-weight: 800;
          letter-spacing: 1px;
          color: #555;
          margin-bottom: 7px;
        }

        .filter-field input,
        .filter-field select {
          width: 100%;
          height: 42px;
          border: 1px solid #e4e4e4;
          border-radius: 10px;
          background: #fff;
          padding: 0 12px;
          font-family: inherit;
          font-size: 12px;
          color: #222;
          outline: none;
          transition: .2s ease;
        }

        .filter-field input:focus,
        .filter-field select:focus {
          border-color: ${GOLD};
          box-shadow:
            0 0 0 3px rgba(212,175,55,.10);
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
          color: #555;
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
          color: #fff;
          font-family: inherit;
          font-size: 12px;
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
          color: #777;
        }

        /* =====================================================
           EXPERT CARD
        ===================================================== */

        .expert-card {
          margin-top: 20px;
          padding: 18px;
          border-radius: 15px;
          background:
            linear-gradient(
              145deg,
              #111,
              #242424
            );
          color: #fff;
        }

        .expert-title {
          font-size: 14px;
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
          color: #111;
          text-align: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition: .2s ease;
        }

        .expert-call:hover {
          background: #fff;
        }

        /* =====================================================
           RESULTS HEADER
        ===================================================== */

        .results-header {
          min-height: 78px;
          padding: 16px 18px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
        }

        .results-header h1 {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 850;
          color: #111;
          letter-spacing: -.4px;
        }

        .results-header p {
          margin: 5px 0 0;
          color: #777;
          font-size: 11px;
        }

        .sort-select {
          height: 39px;
          min-width: 190px;
          border: 1px solid #e2e2e2;
          border-radius: 9px;
          padding: 0 11px;
          background: #fff;
          font-family: inherit;
          font-size: 11px;
          color: #333;
          outline: none;
        }

        /* =====================================================
           RESULTS GRID
        ===================================================== */

        .results-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        /* =====================================================
           PROPERTY CARD
        ===================================================== */

        .search-property-card {
          display: block;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          color: inherit;
          text-decoration: none;
          box-shadow:
            0 8px 28px rgba(0,0,0,.045);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .search-property-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212,175,55,.45);
          box-shadow:
            0 18px 42px rgba(0,0,0,.10);
        }

        /* =====================================================
           CARD IMAGE
        ===================================================== */

        .search-property-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #eee;
        }

        .search-property-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition:
            transform .55s ease;
        }

        .search-property-card:hover
        .search-property-image img {
          transform: scale(1.045);
        }

        .search-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.10) 0%,
              transparent 42%,
              rgba(0,0,0,.48) 100%
            );
          pointer-events: none;
        }

        /* =====================================================
           RERA
        ===================================================== */

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
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .4px;
          box-shadow:
            0 4px 12px rgba(0,0,0,.16);
        }

        .search-rera b {
          font-size: 10px;
        }

        /* =====================================================
           BHK BADGE
        ===================================================== */

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
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .search-property-content {
          padding: 16px 16px 15px;
        }

        .search-property-content h3 {
          margin: 0;
          min-height: 20px;
          color: #111;
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
          font-weight: 900;
        }

        /* =====================================================
           LOCATION
        ===================================================== */

        .search-card-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 9px;
          color: #777;
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

        /* =====================================================
           META
        ===================================================== */

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
          color: #555;
          font-size: 9px;
          font-weight: 650;
        }

        .search-card-meta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: #888;
        }

        .search-card-meta span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* =====================================================
           WHATSAPP
        ===================================================== */

        .search-card-whatsapp {
          width: 100%;
          height: 36px;
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 8px;
          background: #138a42;
          color: #fff;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          transition: .25s ease;
        }

        .search-card-whatsapp svg {
          width: 15px;
          height: 15px;
        }

        .search-card-whatsapp:hover {
          background: #0d7034;
          transform: translateY(-1px);
        }

        /* =====================================================
           EMPTY STATE
        ===================================================== */

        .empty-state {
          margin-top: 18px;
          padding: 70px 30px;
          border: 1px solid #e7e4dc;
          border-radius: 17px;
          background: #fff;
          text-align: center;
        }

        .empty-icon {
          font-size: 45px;
          opacity: .35;
        }

        .empty-title {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 800;
        }

        .empty-text {
          margin-top: 5px;
          font-size: 12px;
          color: #777;
        }

        .empty-btn {
          margin-top: 17px;
          padding: 10px 20px;
          border: none;
          border-radius: 9px;
          background: ${BLACK};
          color: #fff;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .search-container {
            width: min(100% - 30px, 1100px);
          }

          .search-layout {
            grid-template-columns: 245px minmax(0, 1fr);
            gap: 17px;
          }

          .results-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .search-property-image {
            height: 230px;
          }

        }

        /* =====================================================
           TABLET
        ===================================================== */

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
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .filter-field:first-child {
            grid-column: 1 / -1;
          }

          .category-options {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .apply-filter-btn,
          .property-count {
            grid-column: 1 / -1;
          }

          .expert-card {
            display: none;
          }

          .results-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

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

          .search-card-whatsapp {
            height: 32px;
            margin-top: 9px;
            gap: 5px;
            font-size: 8.5px;
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

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

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

      `}</style>
    </div>
  );
}