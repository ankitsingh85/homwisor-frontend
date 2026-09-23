import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropertyCard from "./PropertyCard";

import s1 from "../images/s4.webp";
import s2 from "../images/s5.webp";
import s3 from "../images/s6.webp";
import './trendingProjects.css'

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const BLACK = "#090909";

export default function TrendingProjects({
  properties = [],
  locations = [],
  upcoming = [],
  newlaunch = [],
  offers = [],
}) {

  /* =====================================================
     FALLBACK TRENDING PROPERTIES
  ===================================================== */

  const fallbackProperties = [
    {
      id: 1,
      title: "M3M Brabus Residences",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹20 - 28 Cr",
      location: "Sector 58, Golf Course Extension Road",
      bhk: "4 & 5 BHK",
      area: "4,000+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 2,
      title: "DLF Privana North",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹18.50 Cr",
      location: "Sector 76, Golf Course Extension Road",
      bhk: "3 & 4 BHK",
      area: "2,500+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 3,
      title: "M3M Crown",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹28 - 65 Cr",
      location: "Sector 111, Dwarka Expressway",
      bhk: "3, 4 & 5 BHK",
      area: "3,000+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 4,
      title: "Emaar Palm Grove",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹25.00 Cr",
      location: "Sector 102, Dwarka Expressway",
      bhk: "4 & 5 BHK",
      area: "5,000+ Sq.Ft.",
      propertyType: "Villa",
      rera: true,
    },
    {
      id: 5,
      title: "M3M Crown Luxury",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹30 - 70 Cr",
      location: "Sector 111, Gurugram",
      bhk: "4 & 5 BHK",
      area: "4,500+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 6,
      title: "DLF The Arbour",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹17.50 Cr",
      location: "Sector 63, Gurugram",
      bhk: "4 BHK",
      area: "3,500+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 7,
      title: "M3M Golf Estate",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹19 - 45 Cr",
      location: "Sector 65, Gurugram",
      bhk: "3 & 4 BHK",
      area: "3,000+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
    {
      id: 8,
      title: "Emaar Digi Homes",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
      priceRange: "₹15.00 Cr",
      location: "Sector 62, Gurugram",
      bhk: "3 & 4 BHK",
      area: "2,800+ Sq.Ft.",
      propertyType: "Apartment",
      rera: true,
    },
  ];


  /* =====================================================
     PROPERTY DATA
  ===================================================== */

  const filteredProperties = Array.isArray(properties)
    ? properties
        .filter(
          (p) =>
            p.category === "trending" ||
            p.category === "recommended"
        )
        .slice(0, 8)
    : [];

  const displayProperties =
    filteredProperties.length >= 4
      ? filteredProperties
      : fallbackProperties;


  /* =====================================================
     BRANDED RESIDENCES DATA
     USE EXISTING API DATA ONLY
  ===================================================== */

  const luxuryProjects = Array.isArray(properties)
    ? properties.filter((p) =>
        ["₹19", "₹28", "₹16", "₹5.2"].some((v) =>
          String(p?.priceRange || "").includes(v)
        ) ||
        String(p?.category || "").toLowerCase() === "trending"
      )
    : [];

  /* Keep the same API-data selection/order already used in Home */
  const displayLuxuryProjects = [
    properties.find((p) =>
      String(p?.title || "").toLowerCase().includes("oberoi three sixty")
    ) ||
      properties.find((p) =>
        String(p?.title || "").toLowerCase().includes("bptp")
      ) ||
      luxuryProjects[0],

    properties.find((p) =>
      String(p?.title || "").toLowerCase().includes("experion one 42")
    ) || luxuryProjects[1],

    properties.find((p) =>
      String(p?.title || "").toLowerCase().includes("max estate 59")
    ) || luxuryProjects[2],

    properties.find((p) =>
      String(p?.title || "").toLowerCase().includes("bptp downtown")
    ) || luxuryProjects[3],
  ]
    .filter(Boolean)
    .slice(0, 4);

  /* =====================================================
     BRANDED FEATURE BANNER DATA
     Uses the same existing API property data.
  ===================================================== */

  const brandedBannerProject =
    displayLuxuryProjects[0] ||
    fallbackProperties.find((p) =>
      String(p?.title || "").toLowerCase().includes("brabus")
    ) ||
    fallbackProperties[0];


  /* =====================================================
     UPCOMING PROJECT DATA
  ===================================================== */

  const upcomingProjects =
    Array.isArray(upcoming) && upcoming.length
      ? upcoming
      : Array.isArray(properties)
        ? properties.filter(
            (p) =>
              String(p?.category || "").toLowerCase() === "upcoming" ||
              String(p?.status || "").toLowerCase() === "upcoming" ||
              String(p?.propertyStatus || "").toLowerCase() === "upcoming"
          )
        : [];


  /* =====================================================
     NEW LAUNCH PROJECT DATA
  ===================================================== */

  const newLaunchProjects =
    Array.isArray(newlaunch) && newlaunch.length
      ? newlaunch
      : Array.isArray(properties)
        ? properties.filter(
            (p) =>
              String(p?.category || "").toLowerCase() === "newlaunch" ||
              String(p?.category || "").toLowerCase() === "new-launch" ||
              String(p?.status || "").toLowerCase() === "newlaunch" ||
              String(p?.propertyStatus || "").toLowerCase() === "newlaunch"
          )
        : [];


  /* =====================================================
     SCO PROJECT DATA
     USE EXISTING API DATA ONLY
  ===================================================== */

  const scoDisplay = Array.isArray(properties)
    ? properties
        .filter(
          (p) =>
            String(p?.category || "").toLowerCase() === "sco"
        )
        .slice(0, 4)
    : [];


  /* =====================================================
     LOCATION FALLBACK
  ===================================================== */

  const fallbackLocations = [
    {
      id: 1,
      name: "Golf Course Road",
      count: "245+ Properties",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 2,
      name: "Golf Course Extension",
      count: "320+ Properties",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 3,
      name: "Dwarka Expressway",
      count: "410+ Properties",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 4,
      name: "MG Road",
      count: "180+ Properties",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 5,
      name: "Sohna Road",
      count: "275+ Properties",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 6,
      name: "New Gurgaon",
      count: "360+ Properties",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85",
    },
  ];

  const displayLocations =
    Array.isArray(locations) && locations.length
      ? locations.slice(0, 6)
      : fallbackLocations;


  /* =====================================================
     RIGHT AD SLIDER
  ===================================================== */

  const ads = [s1, s2, s3];

  const [activeAd, setActiveAd] = useState(0);


  useEffect(() => {

    if (ads.length <= 1) {
      return;
    }

    const timer = setInterval(() => {

      setActiveAd(
        (prev) => (prev + 1) % ads.length
      );

    }, 4500);

    return () => clearInterval(timer);

  }, [ads.length]);


  /* =====================================================
     WHATSAPP
  ===================================================== */

  const whatsappNumber = "919999999999";


  const getWhatsAppUrl = (property) => {

    const message = encodeURIComponent(
      `Hi, I am interested in ${property.title}. Please share more details.`
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };


  /* =====================================================
     TOP BUDGET PROJECTS
  ===================================================== */

  const budgetBuckets = [
    {
      label: "Under ₹1 Cr",
      sub: "Great homes within your budget",
      link: "/search?budget=under-1-cr",
      img: fallbackLocations[0]?.image || fallbackProperties[0]?.image,
      icon: "◇",
    },
    {
      label: "₹1 Cr – ₹5 Cr",
      sub: "Premium living with a smart investment",
      link: "/search?budget=1-5-cr",
      img: fallbackLocations[1]?.image || fallbackProperties[1]?.image,
      icon: "♢",
    },
    {
      label: "₹5 Crore – ₹10 Crore",
      sub: "Bigger spaces for a better lifestyle",
      link: "/search?budget=5-10-cr",
      img: fallbackLocations[2]?.image || fallbackProperties[2]?.image,
      icon: "♕",
    },
    {
      label: "₹10 Crore – ₹20 Crore",
      sub: "Exclusive homes for discerning buyers",
      link: "/search?budget=10-20-cr",
      img: fallbackLocations[3]?.image || fallbackProperties[3]?.image,
      icon: "♛",
    },
    {
      label: "₹20 Crore – ₹50 Crore",
      sub: "Ultra-luxury living redefined",
      link: "/search?budget=20-50-cr",
      img: fallbackLocations[4]?.image || fallbackProperties[4]?.image,
      icon: "▥",
    },
  ];

  return (
    <section className="hw-trending-section">

      <div className="hw-trending-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="hw-trending-header">

          <div className="hw-trending-heading">

            <div className="hw-trending-eyebrow">

              <span />

              HOMWISOR

            </div>


            <h2>
              Trending Projects in{" "}
              <span>Gurugram</span>
            </h2>


            <p>
              Handpicked premium projects for a better tomorrow
            </p>

          </div>


          <Link
            to="/search?category=trending"
            className="hw-trending-view-all"
          >

            <span>
              View All Projects
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>

          </Link>

        </div>


        {/* =================================================
            TWO COLUMN LAYOUT

            LEFT  = SCROLLING CONTENT
            RIGHT = STICKY SLIDER
        ================================================= */}

        <div className="hw-trending-layout">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="hw-trending-left">


            {/* =================================================
                TRENDING PROPERTIES
            ================================================= */}

            <div className="hw-trending-properties">

              {displayProperties
                .slice(0, 8)
                .map((property, index) => (

                  <Link
                    key={
                      property.id || index
                    }
                    to={`/property/${
                      property.id || index
                    }`}
                    className="hw-trending-card"
                  >


                    {/* IMAGE */}

                    <div className="hw-trending-image">

                      <img
                        src={property.image}
                        alt={property.title}
                        loading="lazy"
                      />

                      <div className="hw-image-overlay" />


                      {/* ONLY GREEN RERA */}

                      {property.rera !== false && (
                        <div className="hw-rera-group">

                          <span className="hw-rera-green">

                            <b>
                              ✓
                            </b>

                            RERA

                          </span>

                        </div>
                      )}


                      {/* BHK */}

                      <div className="hw-bhk-badge">

                        {property.bhk ||
                          "3 & 4 BHK"}

                        {property.bhk &&
                        property.propertyType
                          ? ` • ${property.propertyType}`
                          : ""}

                      </div>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="hw-trending-card-content">


                      <h3>
                        {property.title}
                      </h3>


                      <div className="hw-card-price">

                        {property.priceRange ||
                          "Price on Request"}

                      </div>


                      <div className="hw-card-location">

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


                        <span>
                          {property.location ||
                            "Gurugram"}
                        </span>

                      </div>


                      <div className="hw-card-meta">


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


                          <span>
                            {property.bhk ||
                              "3 & 4 BHK"}
                          </span>

                        </div>


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


                          <span>
                            {property.area ||
                              "2,500+ Sq.Ft."}
                          </span>

                        </div>

                      </div>


                      {/* WHATSAPP */}

                      <a
                        href={getWhatsAppUrl(
                          property
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hw-card-whatsapp"
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

                        <span>
                          WhatsApp
                        </span>

                      </a>

                    </div>

                  </Link>

                ))}

            </div>


           


           

            {/* =================================================
                PRIME LOCATIONS
            ================================================= */}

            <section className="hw-prime-locations">


              <div className="hw-subsection-header">

                <div>

                  <div className="hw-subsection-eyebrow">
                    PRIME LOCATIONS
                  </div>


                  <h2>
                    Gurugram's{" "}
                    <span>
                      Prime Locations
                    </span>
                  </h2>


                  <p>
                    Explore properties in the most
                    sought-after locations
                  </p>

                </div>

              </div>


              <div className="hw-location-grid">

                {displayLocations.map((location) => (

                  <Link
                    key={location.id}
                    to={`/search?location=${encodeURIComponent(
                      location.name
                    )}`}
                    className="hw-location-card"
                  >

                    <img
                      src={location.image}
                      alt={location.name}
                      loading="lazy"
                    />


                    <div className="hw-location-overlay" />


                    <div className="hw-location-content">

                      <div className="hw-location-name">
                        {location.name}
                      </div>

                      <div className="hw-location-count">
                        {location.count}
                      </div>

                    </div>

                  </Link>

                ))}

              </div>

            </section>


            {/* =================================================
                UPCOMING PROJECTS
            ================================================= */}

            <section className="hw-upcoming-projects">

              <div className="hw-upcoming-header">

                <div>

                  <div className="hw-subsection-eyebrow">
                    UPCOMING PROJECTS
                  </div>

                  <h2>
                    Upcoming Projects in <span>Gurugram</span>
                  </h2>

                  <p>
                    Discover the latest upcoming developments in Gurugram
                  </p>

                </div>

                <Link
                  to="/search?category=upcoming"
                  className="hw-upcoming-view-all"
                >
                  View All Projects

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

              </div>

              {/* SAME PROPERTY CARD DESIGN AS TRENDING PROJECTS */}
              <div className="hw-upcoming-grid hw-trending-properties">

                {upcomingProjects.length > 0 ? (
                  upcomingProjects.slice(0, 4).map((property, index) => (

                    <Link
                      key={property.id || property._id || `upcoming-${index}`}
                      to={`/property/${property.id || property._id || index}`}
                      className="hw-trending-card"
                    >

                      <div className="hw-trending-image">

                        <img
                          src={property.image}
                          alt={property.title || "Upcoming Project"}
                          loading="lazy"
                        />

                        <div className="hw-image-overlay" />

                        {property.rera !== false && (
                          <div className="hw-rera-group">
                            <span className="hw-rera-green">
                              <b>✓</b>
                              RERA
                            </span>
                          </div>
                        )}

                        <div className="hw-bhk-badge">
                          {property.bhk || "3 & 4 BHK"}
                          {property.bhk && property.propertyType
                            ? ` • ${property.propertyType}`
                            : ""}
                        </div>

                      </div>

                      <div className="hw-trending-card-content">

                        <h3>
                          {property.title || "Upcoming Project"}
                        </h3>

                        <div className="hw-card-price">
                          {property.priceRange || "Price on Request"}
                        </div>

                        <div className="hw-card-location">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>

                          <span>
                            {property.location || "Gurugram"}
                          </span>
                        </div>

                        <div className="hw-card-meta">

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
                            <span>
                              {property.bhk || "3 & 4 BHK"}
                            </span>
                          </div>

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
                            <span>
                              {property.area || "2,500+ Sq.Ft."}
                            </span>
                          </div>

                        </div>

                        <a
                          href={getWhatsAppUrl(property)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hw-card-whatsapp"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>

                      </div>

                    </Link>

                  ))
                ) : (
                  <div className="hw-upcoming-empty">
                    <strong>No upcoming projects found.</strong>
                  </div>
                )}

              </div>

            </section>


            {/* =================================================
                NEW LAUNCH PROJECTS
            ================================================= */}

            <section className="hw-upcoming-projects hw-newlaunch-projects">

              <div className="hw-upcoming-header">

                <div>

                  <div className="hw-subsection-eyebrow">
                    NEW LAUNCH PROJECTS
                  </div>

                  <h2>
                    New Launch Projects in <span>Gurugram</span>
                  </h2>

                  <p>
                    Explore the latest newly launched projects in Gurugram
                  </p>

                </div>

                <Link
                  to="/search?category=newlaunch"
                  className="hw-upcoming-view-all"
                >
                  View All Projects

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

              </div>


              {/* EXACT SAME CARD DESIGN AS TRENDING */}

              <div className="hw-upcoming-grid hw-trending-properties">

                {newLaunchProjects.length > 0 ? (

                  newLaunchProjects.slice(0, 4).map((property, index) => (

                    <Link
                      key={property.id || property._id || `newlaunch-${index}`}
                      to={`/property/${property.id || property._id || index}`}
                      className="hw-trending-card"
                    >

                      <div className="hw-trending-image">

                        <img
                          src={property.image}
                          alt={property.title || "New Launch Project"}
                          loading="lazy"
                        />

                        <div className="hw-image-overlay" />

                        {property.rera !== false && (
                          <div className="hw-rera-group">
                            <span className="hw-rera-green">
                              <b>✓</b>
                              RERA
                            </span>
                          </div>
                        )}

                        <div className="hw-bhk-badge">
                          {property.bhk || "3 & 4 BHK"}

                          {property.bhk && property.propertyType
                            ? ` • ${property.propertyType}`
                            : ""}
                        </div>

                      </div>


                      <div className="hw-trending-card-content">

                        <h3>
                          {property.title || "New Launch Project"}
                        </h3>

                        <div className="hw-card-price">
                          {property.priceRange || "Price on Request"}
                        </div>

                        <div className="hw-card-location">

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>

                          <span>
                            {property.location || "Gurugram"}
                          </span>

                        </div>


                        <div className="hw-card-meta">

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

                            <span>
                              {property.bhk || "3 & 4 BHK"}
                            </span>

                          </div>


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

                            <span>
                              {property.area || "2,500+ Sq.Ft."}
                            </span>

                          </div>

                        </div>


                        <a
                          href={getWhatsAppUrl(property)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hw-card-whatsapp"
                          onClick={(e) => e.stopPropagation()}
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

                  ))

                ) : (

                  <div className="hw-upcoming-empty">
                    <strong>No new launch projects found.</strong>
                  </div>

                )}

              </div>

            </section>


          


            {/* =================================================
                FESTIVAL OFFERS
                LEFT COLUMN ONLY
            ================================================= */}

            <section className="hw-festival-offers">

              <div className="hw-festival-header">

                <div className="hw-festival-title-wrap">

                  <div className="hw-festival-brand-line">
                    <span></span>
                    HOMWISOR
                    <span></span>
                  </div>

                  <h2>
                    Best Festival Offer in <span>2026</span>
                  </h2>

                  <p>
                    Exclusive deals on premium residences. Limited period offers,
                    unmatched value.
                  </p>

                </div>

                <Link
                  to="/search?category=festival"
                  className="hw-festival-view-all"
                >
                  View All Festival Offers
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

              </div>


              <div className="hw-festival-layout">

                {/* FESTIVAL BANNER */}

                <div className="hw-festival-banner">

                  <div className="hw-festival-banner-bg" />

                  <div className="hw-festival-banner-overlay" />

                  <div className="hw-festival-banner-content">

                    <div className="hw-festival-mini-badge">
                      FESTIVE EDITION 2026
                    </div>

                    <div className="hw-festival-banner-kicker">
                      FESTIVAL LUXURY
                    </div>

                    <h3>
                      Luxury
                      <br />
                      Homes.
                      <br />
                      Bigger
                      <br />
                      Celebrations.
                    </h3>

                    <p>
                      This festive season, unlock
                      exclusive offers on premium
                      residences across Gurugram.
                    </p>

                    <div className="hw-festival-perks">

                      <div>
                        <span>◆</span>
                        <b>Limited Period Deals</b>
                      </div>

                      <div>
                        <span>◆</span>
                        <b>Assured Appreciation</b>
                      </div>

                      <div>
                        <span>◆</span>
                        <b>Flexible Payment Plans</b>
                      </div>

                    </div>

                    <Link
                      to="/search?category=festival"
                      className="hw-festival-explore"
                    >
                      Explore Offers
                      <span>→</span>
                    </Link>

                  </div>

                  <div className="hw-festival-banner-brand">
                    HOMWISOR
                  </div>

                </div>


                {/* FESTIVAL PROPERTY CARDS */}

                <div className="hw-festival-grid">

                  {(Array.isArray(offers) && offers.length
                    ? offers
                    : fallbackProperties
                  )
                    .slice(0, 6)
                    .map((offer, index) => (

                      <Link
                        key={
                          offer.id ||
                          offer._id ||
                          `festival-${index}`
                        }
                        to={`/property/${
                          offer.id ||
                          offer._id ||
                          index
                        }`}
                        className="hw-festival-card"
                      >

                        <div className="hw-festival-card-image">

                          <img
                            src={
                              offer.image ||
                              offer.thumbnail ||
                              fallbackProperties[index % fallbackProperties.length].image
                            }
                            alt={
                              offer.title ||
                              offer.name ||
                              "Festival Offer"
                            }
                            loading="lazy"
                          />

                          <div className="hw-festival-card-badge">
                            {offer.badge || "EXCLUSIVE OFFER"}
                          </div>

                          <div className="hw-festival-card-arrow">
                            →
                          </div>

                        </div>

                        <div className="hw-festival-card-content">

                          <h3>
                            {offer.title ||
                              offer.name ||
                              "Premium Festival Offer"}
                          </h3>

                          <div className="hw-festival-card-price">
                            {offer.priceRange ||
                              offer.price ||
                              "Price on Request"}
                          </div>

                          <div className="hw-festival-card-location">

                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                              <circle cx="12" cy="10" r="2.5" />
                            </svg>

                            <span>
                              {offer.location ||
                                offer.locality ||
                                "Gurugram"}
                            </span>

                          </div>

                        </div>

                      </Link>

                    ))}

                </div>

              </div>

            </section>

           

            {/* =================================================
                TOP LUXURY PROJECTS
                SAME CARD DESIGN AS TRENDING PROJECTS
            ================================================= */}

            <section className="hw-luxury-projects">

              <div className="hw-upcoming-header hw-luxury-header">

                <div>

                  <div className="hw-subsection-eyebrow">
                    Branded Residences
                  </div>

                  <h2>
                    Branded Residences in <span>IN</span>
                  </h2>

                  <p>
                    Explore premium branded residences and landmark projects
                  </p>

                </div>

                <Link
                  to="/search?category=branded"
                  className="hw-upcoming-view-all"
                >
                  View All Projects

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>

                </Link>

              </div>

              <div className="hw-luxury-grid hw-trending-properties">

                {displayLuxuryProjects.map((property, index) => (

                  <Link
                    key={property.id || property._id || `luxury-${index}`}
                    to={`/property/${property.id || property._id || index}`}
                    className="hw-trending-card"
                  >

                    <div className="hw-trending-image">

                      <img
                        src={
                          property.image ||
                          property.thumbnail ||
                          fallbackProperties[index % fallbackProperties.length].image
                        }
                        alt={property.title || "Luxury Project"}
                        loading="lazy"
                      />

                      <div className="hw-image-overlay" />

                      {property.rera !== false && (
                        <div className="hw-rera-group">
                          <span className="hw-rera-green">
                            <b>✓</b>
                            RERA
                          </span>
                        </div>
                      )}

                      <div className="hw-bhk-badge">
                        {property.bhk || "3 & 4 BHK"}
                        {property.bhk && property.propertyType
                          ? ` • ${property.propertyType}`
                          : ""}
                      </div>

                    </div>

                    <div className="hw-trending-card-content">

                      <h3>
                        {property.title || "Luxury Project"}
                      </h3>

                      <div className="hw-card-price">
                        {property.priceRange ||
                          property.price ||
                          "Price on Request"}
                      </div>

                      <div className="hw-card-location">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>

                        <span>
                          {property.location || "Gurugram"}
                        </span>

                      </div>

                      <div className="hw-card-meta">

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

                          <span>
                            {property.bhk || "3 & 4 BHK"}
                          </span>

                        </div>

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

                          <span>
                            {property.area || "2,500+ Sq.Ft."}
                          </span>

                        </div>

                      </div>

                      <a
                        href={getWhatsAppUrl(property)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hw-card-whatsapp"
                        onClick={(e) => e.stopPropagation()}
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

                ))}

              </div>

            </section>

 {/* =================================================
                BRANDED RESIDENCES FEATURE BANNER
                PREMIUM DESIGN / SAME HOMWISOR STYLE
            ================================================= */}

            <section className="hw-branded-feature">
              <div className="hw-branded-feature-inner">

                <div className="hw-branded-glow" />

                <div className="hw-branded-copy">
                  <div className="hw-branded-label">
                    <span className="hw-branded-label-line" />
                    HOMWISOR PRIVATE COLLECTION
                    <span className="hw-branded-label-line" />
                  </div>

                  <h2>
                    Where <span>Branded Residences</span> Meets
                    <br />
                    Architectural Masterpieces
                  </h2>

                  <p>
                    Indulge in our curated selection of signature branded residences.
                    Crafted in collaboration with world-class fashion houses and
                    legendary hoteliers to deliver a life of unmatched sophistication,
                    bespoke concierge services, and timeless value.
                  </p>

                  <div className="hw-branded-points">
                    <div>
                      <span className="hw-branded-point-icon">◆</span>
                      <span>Concierge &amp; Valet Services</span>
                    </div>
                    <div>
                      <span className="hw-branded-point-icon">◆</span>
                      <span>Fully RERA Verified Properties</span>
                    </div>
                  </div>

                  <div className="hw-branded-actions">
                    <Link to="/search?category=branded" className="hw-branded-primary">
                      EXPLORE RESIDENCES <span>→</span>
                    </Link>
                    <Link to="/search?category=branded" className="hw-branded-secondary">
                      GET INSTANT CALLBACK
                    </Link>
                  </div>
                </div>

                <div className="hw-branded-visual">
                  <div className="hw-branded-main-image">
                    <img
                      src={
                        brandedBannerProject?.image ||
                        brandedBannerProject?.thumbnail ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=560&fit=crop"
                      }
                      alt={brandedBannerProject?.title || "Branded Residence"}
                    />

                    <div className="hw-branded-image-card">
                      <div>
                        <small>BRANDED RESIDENCES</small>
                        <strong>
                          {brandedBannerProject?.title || "M3M Brabus Residences"}
                        </strong>
                      </div>
                      <Link
                        to={`/property/${
                          brandedBannerProject?.id ||
                          brandedBannerProject?._id ||
                          "branded"
                        }`}
                      >
                        EXPLORE <span>→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="hw-branded-side-card">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=900&fit=crop"
                      alt="Luxury branded residence"
                    />
                    <div className="hw-branded-side-overlay" />
                    <div className="hw-branded-side-content">
                      <span>HOMWISOR</span>
                      <strong>BRABUS</strong>
                      <small>RESIDENCES</small>
                      <em>POWER. PRESTIGE. PERFECTION.</em>
                      <label>COMING TO</label>
                      <b>SECTOR 58, GURGAON</b>
                      <div>4 &amp; 5 BHK • STARTING FROM ₹20 CR*</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

             {/* =================================================
                TOP LUXURY PROJECTS
                SAME CARD DESIGN AS TRENDING PROJECTS
            ================================================= */}

            <section className="hw-luxury-projects">

              <div className="hw-upcoming-header hw-luxury-header">

                <div>

                  <div className="hw-subsection-eyebrow">
                    Top Luxury Projects
                  </div>

                  <h2>
                    Top Luxury Projects in <span>IN</span>
                  </h2>

                  <p>
                    Explore premium branded residences and landmark projects
                  </p>

                </div>

                <Link
                  to="/search?category=branded"
                  className="hw-upcoming-view-all"
                >
                  View All Projects

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>

                </Link>

              </div>

              <div className="hw-luxury-grid hw-trending-properties">

                {displayLuxuryProjects.map((property, index) => (

                  <Link
                    key={property.id || property._id || `luxury-${index}`}
                    to={`/property/${property.id || property._id || index}`}
                    className="hw-trending-card"
                  >

                    <div className="hw-trending-image">

                      <img
                        src={
                          property.image ||
                          property.thumbnail ||
                          fallbackProperties[index % fallbackProperties.length].image
                        }
                        alt={property.title || "Luxury Project"}
                        loading="lazy"
                      />

                      <div className="hw-image-overlay" />

                      {property.rera !== false && (
                        <div className="hw-rera-group">
                          <span className="hw-rera-green">
                            <b>✓</b>
                            RERA
                          </span>
                        </div>
                      )}

                      <div className="hw-bhk-badge">
                        {property.bhk || "3 & 4 BHK"}
                        {property.bhk && property.propertyType
                          ? ` • ${property.propertyType}`
                          : ""}
                      </div>

                    </div>

                    <div className="hw-trending-card-content">

                      <h3>
                        {property.title || "Luxury Project"}
                      </h3>

                      <div className="hw-card-price">
                        {property.priceRange ||
                          property.price ||
                          "Price on Request"}
                      </div>

                      <div className="hw-card-location">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>

                        <span>
                          {property.location || "Gurugram"}
                        </span>

                      </div>

                      <div className="hw-card-meta">

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

                          <span>
                            {property.bhk || "3 & 4 BHK"}
                          </span>

                        </div>

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

                          <span>
                            {property.area || "2,500+ Sq.Ft."}
                          </span>

                        </div>

                      </div>

                      <a
                        href={getWhatsAppUrl(property)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hw-card-whatsapp"
                        onClick={(e) => e.stopPropagation()}
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

                ))}

              </div>

            </section>

             {/* =================================================
                TOP BUDGET PROJECTS
            ================================================= */}

            <section className="hw-budget-section">
              <div className="hw-budget-header">
                <div className="hw-budget-heading">
                  <div className="hw-budget-eyebrow">
                    <span className="hw-budget-eyebrow-line" />
                    HOMWISOR
                  </div>

                  <h2>
                    Top Budget <span>Projects</span>
                  </h2>

                  <p>
                    Smart homes. Great value. A better tomorrow in Gurugram.
                  </p>
                </div>

                <Link
                  to="/search"
                  className="hw-budget-view-all"
                >
                  <span>View All Projects</span>
                  <span className="hw-budget-round-arrow">↗</span>
                  <span className="hw-budget-round-arrow">→</span>
                </Link>
              </div>

              <div className="hw-budget-grid">
                {budgetBuckets.map((b) => (
                  <Link
                    key={b.label}
                    to={b.link}
                    className="hw-budget-card"
                  >
                    <img
                      src={b.img}
                      alt={b.label}
                      loading="lazy"
                    />

                    <div className="hw-budget-card-overlay" />

                    <div className="hw-budget-icon">
                      {b.icon}
                    </div>

                    <div className="hw-budget-card-content">
                      <h3>{b.label}</h3>
                      <p>{b.sub}</p>
                    </div>

                    <span className="hw-budget-card-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>

              {/* =================================================
                SCO PROJECTS
                SAME DESIGN AS NEW LAUNCH PROJECTS
            ================================================= */}

            {scoDisplay.length > 0 && (
              <section className="hw-upcoming-projects hw-sco-projects">

                <div className="hw-upcoming-header">

                  <div>
                    <div className="hw-subsection-eyebrow">
                      SCO PROJECTS
                    </div>

                    <h2>
                      SCO Projects in <span>Gurugram</span>
                    </h2>

                    <p>
                      Explore premium SCO plots and commercial projects in Gurugram
                    </p>
                  </div>

                  <Link
                    to="/search?category=sco"
                    className="hw-upcoming-view-all"
                  >
                    View All Projects

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </Link>

                </div>

                <div className="hw-upcoming-grid hw-trending-properties">

                  {scoDisplay.map((property, index) => (
                    <Link
                      key={property.id || property._id || `sco-${index}`}
                      to={`/property/${property.id || property._id || index}`}
                      className="hw-trending-card"
                    >

                      <div className="hw-trending-image">
                        <img
                          src={property.image || property.thumbnail}
                          alt={property.title || "SCO Project"}
                          loading="lazy"
                        />

                        <div className="hw-image-overlay" />

                        {property.rera !== false && (
                          <div className="hw-rera-group">
                            <span className="hw-rera-green">
                              <b>✓</b> RERA
                            </span>
                          </div>
                        )}

                        <div className="hw-bhk-badge">
                          {property.propertyType || property.type || "SCO"}
                        </div>
                      </div>

                      <div className="hw-trending-card-content">
                        <h3>
                          {property.title || property.name || "SCO Project"}
                        </h3>

                        <div className="hw-card-price">
                          {property.priceRange || property.price || "Price on Request"}
                        </div>

                        <div className="hw-card-location">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                          <span>{property.location || property.locality || "Gurugram"}</span>
                        </div>

                        <div className="hw-card-meta">
                          <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                              <path d="M4 4h6" /><path d="M4 4v6" />
                              <path d="M20 20h-6" /><path d="M20 20v-6" />
                              <path d="M4 20h6" /><path d="M4 20v-6" />
                              <path d="M20 4h-6" /><path d="M20 4v6" />
                            </svg>
                            <span>{property.area || "SCO Plot"}</span>
                          </div>

                          <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                              <path d="M3 11h18" />
                              <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
                              <path d="M4 19v-8" /><path d="M20 19v-8" />
                              <path d="M4 15h16" />
                            </svg>
                            <span>{property.propertyType || "Commercial"}</span>
                          </div>
                        </div>

                        <a
                          href={getWhatsAppUrl(property)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hw-card-whatsapp"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>

                      </div>
                    </Link>
                  ))}

                </div>

              </section>
            )}
          </div>


          {/* =================================================
              RIGHT STICKY SLIDER
          ================================================= */}

          <aside className="hw-trending-ad">

            <div className="hw-ad-slider">


              {ads.map((ad, index) => (

                <img
                  key={index}
                  src={ad}
                  alt="Homwisor Advertisement"
                  className={
                    index === activeAd
                      ? "active"
                      : ""
                  }
                />

              ))}


             

              <div className="hw-ad-dots">

                {ads.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    aria-label={`Advertisement ${index + 1}`}
                    className={
                      index === activeAd
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveAd(index)
                    }
                  />

                ))}

              </div>

            </div>

          </aside>

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

    </section>
  );
}
