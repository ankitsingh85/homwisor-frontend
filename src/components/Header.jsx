import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo-homwiser.png";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  const closeMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  /* =====================================================
     CITIES
  ===================================================== */

  const cities = [
    {
      label: "Gurugram",
      children: [
        {
          label: "Southern Peripheral Road (SPR)",
          link: "/location/southern-peripheral-road",
        },
        {
          label: "Dwarka Expressway",
          link: "/location/dwarka-expressway",
        },
        {
          label: "New Gurgaon",
          link: "/location/new-gurgaon",
        },
        {
          label: "Sohna Road",
          link: "/location/sohna-road",
        },
      ],
    },

    {
      label: "Noida",
      children: [
        {
          label: "Noida Expressway",
          link: "/location/noida-expressway",
        },
        {
          label: "Noida Extension",
          link: "/location/noida-extension",
        },
        {
          label: "Yamuna Expressway",
          link: "/location/yamuna-expressway",
        },
      ],
    },

    {
      label: "New Delhi",
      children: [
        {
          label: "Dwarka",
          link: "/location/dwarka",
        },
        {
          label: "South Delhi",
          link: "/location/south-delhi",
        },
        {
          label: "Central Delhi",
          link: "/location/central-delhi",
        },
      ],
    },

    {
      label: "Faridabad",
      children: [
        {
          label: "Greater Faridabad",
          link: "/location/greater-faridabad",
        },
        {
          label: "Mathura Road",
          link: "/location/mathura-road",
        },
        {
          label: "Suraj Kund",
          link: "/location/suraj-kund",
        },
      ],
    },

    {
      label: "Bengaluru",
      children: [
        {
          label: "North Bengaluru",
          link: "/location/north-bengaluru",
        },
        {
          label: "East Bengaluru",
          link: "/location/east-bengaluru",
        },
        {
          label: "Sarjapur Road (IT Corridor)",
          link: "/location/sarjapur-road",
        },
        {
          label: "South Bengaluru",
          link: "/location/south-bengaluru",
        },
        {
          label: "Hoskote & East Peripheral Belt",
          link: "/location/hoskote",
        },
      ],
    },

    {
      label: "Hyderabad",
      children: [
        {
          label: "North Hyderabad",
          link: "/location/north-hyderabad",
        },
        {
          label: "South Hyderabad",
          link: "/location/south-hyderabad",
        },
        {
          label: "East Hyderabad",
          link: "/location/east-hyderabad",
        },
        {
          label: "West Hyderabad",
          link: "/location/west-hyderabad",
        },
      ],
    },

    {
      label: "Mumbai",
      children: [
        {
          label: "South Mumbai",
          link: "/location/south-mumbai",
        },
        {
          label: "Navi Mumbai",
          link: "/location/navi-mumbai",
        },
        {
          label: "Panvel",
          link: "/location/panvel",
        },
        {
          label: "Central Mumbai",
          link: "/location/central-mumbai",
        },
        {
          label: "Kalyan",
          link: "/location/kalyan",
        },
      ],
    },

    {
      label: "Pune",
      children: [
        {
          label: "West Pune",
          link: "/location/west-pune",
        },
        {
          label: "East Pune",
          link: "/location/east-pune",
        },
        {
          label: "Punawale",
          link: "/location/punawale",
        },
        {
          label: "South East Pune",
          link: "/location/south-east-pune",
        },
      ],
    },
  ];

  /* =====================================================
     BUDGET
  ===================================================== */

  const budgets = [
    {
      label: "Under 1 Cr",
      link: "/budget/under-1-cr",
    },
    {
      label: "1 Cr – 4 Cr",
      link: "/budget/1-cr-4-cr",
    },
    {
      label: "4 Cr – 8 Cr",
      link: "/budget/4-cr-8-cr",
    },
    {
      label: "8 Cr – 12 Cr",
      link: "/budget/8-cr-12-cr",
    },
    {
      label: "12 Cr – 16 Cr",
      link: "/budget/12-cr-16-cr",
    },
    {
      label: "16 Cr Onwards",
      link: "/budget/16-cr-onwards",
    },
  ];

  /* =====================================================
     PROPERTY TYPE
  ===================================================== */

  const propertyTypes = [
    {
      label: "Residential Projects",
      children: [
        {
          label: "Apartment",
          link: "/residential-projects",
        },
        {
          label: "Luxury Villas",
          link: "/property-type/luxury-villas",
        },
        {
          label: "Independent Floors",
          link: "/property-type/independent-floors",
        },
        {
          label: "Pent House",
          link: "/property-type/pent-house",
        },
      ],
    },

    {
      label: "Commercial Projects",
      children: [
        {
          label: "Shops",
          link: "/commercial/shops",
        },
        {
          label: "Office Space",
          link: "/commercial/office-space",
        },
        {
          label: "Food Court",
          link: "/commercial/food-court",
        },
        {
          label: "Anchor Stores",
          link: "/commercial/anchor-stores",
        },
        {
          label: "Cinema & Entertainment",
          link: "/commercial/cinema-entertainment",
        },
      ],
    },

    {
      label: "SCO Plots",
      link: "/property-type/sco-plots",
    },

    {
      label: "Residential Plots",
      link: "/property-type/residential-plots",
    },
  ];

  /* =====================================================
     PROJECT STATUS
  ===================================================== */

  const projectStatuses = [
    {
      label: "Upcoming",
      link: "/status/upcoming",
    },
    {
      label: "New Launch",
      link: "/status/new-launch",
    },
    {
      label: "Under Construction",
      link: "/status/under-construction",
    },
    {
      label: "Ready To Move",
      link: "/status/ready-to-move",
    },
  ];

  /* =====================================================
     MENU ITEMS
  ===================================================== */

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },

    {
      label: "About",
      link: "about",
    },

    {
      label: "Budget",
      type: "simple",
      data: budgets,
    },

    {
      label: "Property Type",
      type: "mega",
      data: propertyTypes,
    },

    {
      label: "Project Status",
      type: "simple",
      data: projectStatuses,
    },

    {
      label: "Cities",
      type: "mega",
      data: cities,
    },

    // {
    //   label: "Resale",
    //   link: "/status/for-sale",
    // },

    {
      label: "Contact",
      link: "./Contact",
    },

    {
      label: "Blog",
      type: "simple",
      data: [
        {
          label: "Real Estate News",
          link: "/blog",
        },
      ],
    },
  ];

  return (
    <>
      <header
        className={`hw-header ${
          !isHomePage ? "hw-header-inner-page" : ""
        } ${
          scrolled ? "hw-header-scrolled" : ""
        }`}
      >

        <div className="hw-header-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="hw-logo"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Homwisor"
              className="hw-logo-image"
            />
          </Link>


          {/* =================================================
              SCROLL SEARCH
          ================================================= */}

          <div className="hw-scroll-search">

            <div className="hw-location-select">

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="12"
                  cy="10.5"
                  r="2.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>

              <select
                defaultValue="Gurugram"
                aria-label="Select city"
              >
                <option>Gurugram</option>
                <option>Noida</option>
                <option>New Delhi</option>
                <option>Faridabad</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>

              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

            </div>


            <div className="hw-search-box">

              <input
                type="text"
                placeholder="Search projects, localities..."
                aria-label="Search projects and localities"
              />

              <button
                type="button"
                aria-label="Search"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="10.8"
                    cy="10.8"
                    r="6.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="m16 16 4.2 4.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

            </div>

          </div>


          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="hw-nav">

            {menuItems.map((item) => {

              const hasDropdown =
                item.type === "simple" ||
                item.type === "mega";

              const scrollOnlyItem = [
                "Project Status",
                "Cities",
                "Resale",
              ].includes(item.label);

              return (
                <div
                  key={item.label}
                  className={`hw-nav-item ${
                    scrollOnlyItem
                      ? `hw-scroll-menu-item hw-scroll-${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      : "hw-scroll-menu-hide"
                  }`}

                  onMouseEnter={() => {
                    if (hasDropdown) {
                      setOpenDropdown(item.label);
                    }
                  }}

                  onMouseLeave={() => {
                    if (hasDropdown) {
                      setOpenDropdown(null);
                    }
                  }}
                >

                  {/* =================================================
                      NAV BUTTON / LINK
                  ================================================= */}

                  {hasDropdown ? (

                    <button
                      className="hw-nav-link hw-nav-dropdown-button"
                      onClick={() =>
                        toggleDropdown(item.label)
                      }
                    >

                      <span>
                        {item.label}
                      </span>

                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>

                    </button>

                  ) : (

                    <Link
                      to={item.link}
                      className="hw-nav-link"
                    >
                      {item.label}
                    </Link>

                  )}


                  {/* =================================================
                      SIMPLE DROPDOWN
                  ================================================= */}

                  {hasDropdown &&
                    item.type === "simple" &&
                    openDropdown === item.label && (

                      <div className="hw-dropdown hw-simple-dropdown">

                        {item.data.map((child) => (

                          <Link
                            key={child.label}
                            to={child.link}
                            className="hw-dropdown-link"
                          >
                            {child.label}
                          </Link>

                        ))}

                      </div>

                  )}


                  {/* =================================================
                      MEGA DROPDOWN
                  ================================================= */}

                  {hasDropdown &&
                    item.type === "mega" &&
                    openDropdown === item.label && (

                      <div className="hw-dropdown hw-mega-dropdown">

                        <div className="hw-mega-grid">

                          {item.data.map((group) => (

                            <div
                              className="hw-menu-group"
                              key={group.label}
                            >

                              {group.link ? (

                                <Link
                                  to={group.link}
                                  className="hw-group-title hw-direct-link"
                                >
                                  {group.label}
                                </Link>

                              ) : (

                                <div className="hw-group-title">
                                  {group.label}
                                </div>

                              )}


                              {group.children &&
                                group.children.map(
                                  (child) => (

                                    <Link
                                      key={child.label}
                                      to={child.link}
                                      className="hw-dropdown-child"
                                    >
                                      {child.label}
                                    </Link>

                                ))}

                            </div>

                          ))}

                        </div>

                      </div>

                  )}

                </div>
              );
            })}

          </nav>


          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="hw-header-actions">

            <Link
              to="/admin"
              className="hw-user-button"
              aria-label="Account"
            >

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >

                <circle
                  cx="12"
                  cy="7"
                  r="4"
                />

                <path
                  d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
                />

              </svg>

            </Link>


            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              className="hw-menu-button"
              onClick={() => setMobileMenu((prev) => !prev)}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </svg>
              )}
            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileMenu && (

          <div className="hw-mobile-menu">

            {menuItems.map((item) => {

              const hasDropdown =
                item.type === "simple" ||
                item.type === "mega";

              return (

                <div
                  key={item.label}
                  className="hw-mobile-item"
                >

                  {hasDropdown ? (

                    <>

                      <button
                        className="hw-mobile-main"
                        onClick={() =>
                          toggleDropdown(item.label)
                        }
                      >

                        <span>
                          {item.label}
                        </span>

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>

                      </button>


                      {openDropdown === item.label && (

                        <div className="hw-mobile-submenu">

                          {item.data.map((group) => (

                            <div key={group.label}>

                              {group.link ? (

                                <Link
                                  to={group.link}
                                  className="hw-mobile-group"
                                  onClick={closeMenu}
                                >
                                  {group.label}
                                </Link>

                              ) : (

                                <div className="hw-mobile-group">
                                  {group.label}
                                </div>

                              )}


                              {group.children &&
                                group.children.map(
                                  (child) => (

                                    <Link
                                      key={child.label}
                                      to={child.link}
                                      className="hw-mobile-child"
                                      onClick={closeMenu}
                                    >
                                      {child.label}
                                    </Link>

                                ))}

                            </div>

                          ))}

                        </div>

                      )}

                    </>

                  ) : (

                    <Link
                      to={item.link}
                      className="hw-mobile-main"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>

                  )}

                </div>

              );
            })}

          </div>

        )}

      </header>


      {/* =======================================================
          COMPLETE HEADER CSS
      ======================================================= */}

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        );


        /* =====================================================
           RESET
        ===================================================== */

        .hw-header,
        .hw-header *,
        .hw-header *::before,
        .hw-header *::after {
          box-sizing: border-box;
        }

        .hw-header button,
        .hw-header input,
        .hw-header select {
          font-family: inherit;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .hw-header {
          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;
          max-width: 100%;

          z-index: 99999;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.55),
              rgba(0,0,0,.15),
              transparent
            );

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          transition:
            background .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }


        /* =====================================================
           INNER PAGES
           BLACK HEADER FROM TOP
        ===================================================== */

        .hw-header-inner-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          background: #000 !important;
          backdrop-filter: blur(14px);
          box-shadow: 0 5px 25px rgba(0,0,0,.35);
          border-bottom: 1px solid rgba(255,255,255,.10);
        }

        .hw-header-inner-page .hw-nav-link {
          color: #fff;
          text-shadow: none;
        }

        .hw-header-inner-page .hw-nav-link:hover {
          color: #d8aa42;
        }

        .hw-header-inner-page .hw-user-button {
          color: #fff;
          border-color: rgba(255,255,255,.55);
          background: rgba(255,255,255,.08);
        }

        .hw-header-inner-page .hw-menu-button {
          color: #fff;
        }


        /* =====================================================
           SCROLLED HEADER
           BLACK BACKGROUND
        ===================================================== */

        .hw-header-scrolled {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;
          max-width: 100%;

          background: #000 !important;

          backdrop-filter: blur(14px);

          box-shadow:
            0 5px 25px rgba(0,0,0,.35);

          border-bottom:
            1px solid rgba(255,255,255,.10);
        }


        /* =====================================================
           HEADER INNER
        ===================================================== */

        .hw-header-inner {
          height: 72px;

          width: 100%;
          max-width: 100%;

          padding:
            0 48px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          box-sizing: border-box;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .hw-logo {
          width: 190px;

          height: 100%;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          text-decoration: none;

          min-width: 0;
        }

        .hw-logo-image {
          width: 175px;

          max-height: 65px;

          height: auto;

          object-fit: contain;

          object-position: left center;

          display: block;

          max-width: 100%;
        }


        /* =====================================================
           SCROLL SEARCH
        ===================================================== */

        .hw-scroll-search {
          display: none;

          align-items: center;

          gap: 8px;

          flex: 0 1 390px;

          min-width: 280px;

          margin-left: 4px;

          min-width: 0;
        }

        .hw-header-scrolled .hw-scroll-search {
          display: flex;
        }


        /* =====================================================
           LOCATION SELECT
        ===================================================== */

        .hw-location-select {
          position: relative;

          height: 40px;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 0 10px;

          background: #fff;

          border: 1px solid #dcdfe3;

          border-radius: 6px;

          color: #59616b;

          flex: 0 0 112px;

          min-width: 0;

          box-sizing: border-box;

          box-shadow:
            0 1px 2px rgba(0,0,0,.03);

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .hw-location-select:hover {
          border-color: #c9cdd2;

          box-shadow:
            0 2px 8px rgba(0,0,0,.06);
        }

        .hw-location-select select {
          width: 100%;

          min-width: 0;

          border: 0;

          outline: 0;

          background: transparent;

          color: #3f4650;

          font-family: inherit;

          font-size: 12px;

          font-weight: 600;

          appearance: none;

          cursor: pointer;
        }


        /* =====================================================
           SEARCH BOX
        ===================================================== */

        .hw-search-box {
          height: 40px;

          display: flex;

          align-items: center;

          flex: 1;

          min-width: 0;

          background: #fff;

          border: 1px solid #e3e3e3;

          border-radius: 6px;

          overflow: hidden;
        }

        .hw-search-box input {
          flex: 1;

          min-width: 0;

          width: 100%;

          height: 100%;

          padding: 0 11px;

          border: 0;

          outline: 0;

          background: transparent;

          color: #252525;

          font-family: inherit;

          font-size: 12px;
        }

        .hw-search-box input::placeholder {
          color: #9aa0a6;
        }

        .hw-search-box button {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border: 0;

          background: #a77c1d;

          color: #fff;

          cursor: pointer;
        }


        /* =====================================================
           DESKTOP NAV
        ===================================================== */

        .hw-nav {
          height: 100%;

          flex: 1;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 24px;

          padding-right: 20px;
        }

        .hw-nav-item {
          position: relative;

          height: 100%;

          display: flex;

          align-items: center;

          flex-shrink: 0;
        }

        .hw-nav-link {
          height: 100%;

          padding:
            0 3px;

          display: flex;

          align-items: center;

          gap: 6px;

          border: none;

          background: transparent;

          color:
            rgba(255,255,255,.96);

          text-decoration: none;

          font-size: 13px;

          font-weight: 600;

          white-space: nowrap;

          text-shadow:
            0 1px 6px
            rgba(0,0,0,.75);

          cursor: pointer;

          font-family: inherit;

          transition:
            color .2s ease;
        }

        .hw-nav-link:hover {
          color: #d8aa42;
        }

        .hw-nav-dropdown-button {
          outline: none;
        }


        /* =====================================================
           SCROLL MENU
        ===================================================== */

        .hw-header-scrolled .hw-scroll-menu-hide {
          display: none !important;
        }

        .hw-header-scrolled .hw-scroll-menu-item {
          display: flex !important;
        }

        .hw-header-scrolled .hw-scroll-project-status {
          order: 1;
        }

        .hw-header-scrolled .hw-scroll-cities {
          order: 2;
        }

        .hw-header-scrolled .hw-scroll-resale {
          order: 3;
        }


        /* =====================================================
           SCROLL NAV COLORS
        ===================================================== */

        .hw-header-scrolled .hw-nav-link {
          color: #fff;

          text-shadow: none;
        }

        .hw-header-scrolled .hw-nav-link:hover {
          color: #d8aa42;
        }


        /* =====================================================
           HEADER ACTIONS
        ===================================================== */

        .hw-header-actions {
          width: 10px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 12px;
        }

        .hw-user-button {
          width: 34px;

          height: 34px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #fff;

          border:
            1px solid
            rgba(255,255,255,.60);

          border-radius: 50%;

          background:
            rgba(0,0,0,.20);

          text-decoration: none;

          transition: .2s ease;

          flex-shrink: 0;
        }

        .hw-user-button:hover {
          color: #d8aa42;

          border-color: #d8aa42;
        }

        .hw-header-scrolled .hw-user-button {
          color: #fff;

          border-color:
            rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.08);
        }


        /* =====================================================
           MENU BUTTON
        ===================================================== */

        .hw-menu-button {
          width: 34px;

          height: 34px;

          padding: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #fff;

          border: none;

          background: transparent;

          cursor: pointer;

          transition: .2s ease;

          flex-shrink: 0;

          /* Hamburger is mobile-only */
          display: none;
        }

        .hw-menu-button:hover {
          color: #d8aa42;
        }

        .hw-header-scrolled .hw-menu-button {
          color: #fff;
        }


        /* =====================================================
           DROPDOWN
        ===================================================== */

        .hw-dropdown {
          position: absolute;

          top:
            calc(100% + 1px);

          left: 50%;

          transform:
            translateX(-50%);

          background:
            rgba(12,12,11,.98);

          border:
            1px solid
            rgba(214,170,66,.30);

          border-radius: 9px;

          box-shadow:
            0 15px 40px
            rgba(0,0,0,.45);

          backdrop-filter:
            blur(14px);

          z-index: 100000;

          animation:
            hwDropdown .18s ease;
        }

        @keyframes hwDropdown {

          from {
            opacity: 0;

            transform:
              translateX(-50%)
              translateY(-7px);
          }

          to {
            opacity: 1;

            transform:
              translateX(-50%)
              translateY(0);
          }

        }


        /* =====================================================
           SIMPLE DROPDOWN
        ===================================================== */

        .hw-simple-dropdown {
          min-width: 230px;

          padding: 10px;
        }

        .hw-dropdown-link {
          display: block;

          padding:
            11px 14px;

          color:
            rgba(255,255,255,.88);

          text-decoration: none;

          font-size: 12px;

          font-weight: 500;

          white-space: nowrap;

          border-radius: 6px;

          transition: .2s ease;
        }

        .hw-dropdown-link:hover {
          color: #d8aa42;

          background:
            rgba(214,170,66,.08);
        }


        /* =====================================================
           MEGA DROPDOWN
        ===================================================== */

        .hw-mega-dropdown {
          width: 900px;

          max-width:
            calc(100vw - 30px);

          padding: 24px;

          box-sizing: border-box;
        }


        /* =====================================================
           CITIES DROPDOWN
           KEEP INSIDE VIEWPORT
        ===================================================== */

        .hw-nav-item.hw-scroll-cities
          .hw-mega-dropdown {

          left: auto !important;

          right: 0 !important;

          transform: none !important;

          width:
            min(
              900px,
              calc(100vw - 30px)
            ) !important;

          max-width:
            calc(100vw - 30px) !important;

          box-sizing: border-box;
        }


        /* Cities animation */

        @keyframes hwCitiesDropdown {

          from {
            opacity: 0;

            transform:
              translateY(-7px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }

        .hw-nav-item.hw-scroll-cities
          .hw-mega-dropdown {

          animation:
            hwCitiesDropdown .18s ease;
        }


        /* =====================================================
           MEGA GRID
        ===================================================== */

        .hw-mega-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap:
            24px 32px;

          min-width: 0;
        }

        .hw-menu-group {
          min-width: 0;
        }

        .hw-group-title {
          margin-bottom: 9px;

          color: #d8aa42;

          font-size: 13px;

          font-weight: 800;

          line-height: 1.4;
        }

        .hw-direct-link {
          display: block;

          text-decoration: none;
        }

        .hw-dropdown-child {
          display: block;

          padding:
            5px 0;

          color:
            rgba(255,255,255,.76);

          font-size: 11px;

          font-weight: 500;

          line-height: 1.5;

          text-decoration: none;

          transition:
            color .2s ease;
        }

        .hw-dropdown-child:hover {
          color: #fff;
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .hw-mobile-menu {
          display: none;

          background:
            rgba(6,6,5,.98);

          backdrop-filter:
            blur(15px);

          border-top:
            1px solid
            rgba(255,255,255,.10);

          max-height:
            calc(100vh - 68px);

          overflow-y: auto;

          padding:
            10px 20px 24px;

          box-sizing: border-box;
        }

        .hw-mobile-item {
          border-bottom:
            1px solid
            rgba(255,255,255,.08);
        }

        .hw-mobile-main {
          width: 100%;

          min-height: 52px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            0 5px;

          color: #fff;

          background: transparent;

          border: none;

          text-decoration: none;

          font-family: inherit;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          text-align: left;
        }

        .hw-mobile-main:hover {
          color: #d8aa42;
        }

        .hw-mobile-submenu {
          padding:
            0 0 12px 12px;
        }

        .hw-mobile-group {
          display: block;

          padding:
            9px 5px;

          color: #d8aa42;

          font-size: 12px;

          font-weight: 700;

          text-decoration: none;
        }

        .hw-mobile-child {
          display: block;

          padding:
            7px 5px 7px 15px;

          color:
            rgba(255,255,255,.68);

          font-size: 11px;

          text-decoration: none;
        }

        .hw-mobile-child:hover {
          color: #fff;
        }


        /* =====================================================
           TABLET / SMALL DESKTOP
           769px - 1200px
        ===================================================== */

        @media (max-width: 1200px) and (min-width: 769px) {

          .hw-header-inner {
            padding:
              0 20px !important;

            gap:
              12px !important;
          }

          .hw-logo {
            width:
              145px !important;
          }

          .hw-logo-image {
            width:
              135px !important;

            max-height:
              58px !important;
          }

          .hw-header-scrolled
            .hw-scroll-search {

            flex:
              0 1 250px !important;

            min-width:
              190px !important;
          }

          .hw-nav {
            gap:
              10px !important;

            padding-right:
              5px !important;
          }

          .hw-nav-link {
            font-size:
              10px !important;

            gap:
              3px !important;
          }

          .hw-header-actions {
            width:
              70px !important;

            gap:
              7px !important;
          }

          /* =========================================
             CITIES DROPDOWN
          ========================================= */

          .hw-nav-item.hw-scroll-cities
            .hw-mega-dropdown {

            left:
              auto !important;

            right:
              0 !important;

            width:
              min(
                700px,
                calc(100vw - 24px)
              ) !important;

            max-width:
              calc(100vw - 24px) !important;

            padding:
              18px !important;
          }

          .hw-mega-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              ) !important;

            gap:
              18px 20px !important;
          }

          .hw-group-title {
            font-size:
              12px !important;
          }

          .hw-dropdown-child {
            font-size:
              10px !important;
          }

        }


        /* =====================================================
           VERY SMALL DESKTOP
           769px - 900px
        ===================================================== */

        @media (max-width: 900px) and (min-width: 769px) {

          .hw-header-inner {
            padding:
              0 14px !important;

            gap:
              8px !important;
          }

          .hw-logo {
            width:
              125px !important;
          }

          .hw-logo-image {
            width:
              120px !important;
          }

          .hw-header-scrolled
            .hw-scroll-search {

            flex:
              0 1 210px !important;

            min-width:
              165px !important;
          }

          .hw-nav {
            gap:
              6px !important;

            padding-right:
              3px !important;
          }

          .hw-nav-link {
            font-size:
              9px !important;

            padding:
              0 2px !important;

            gap:
              2px !important;
          }

          .hw-nav-link svg {
            width:
              8px !important;

            height:
              8px !important;
          }

          .hw-header-actions {
            width:
              62px !important;

            gap:
              5px !important;
          }

          .hw-user-button {
            width:
              30px !important;

            height:
              30px !important;
          }

          .hw-menu-button {
            width:
              30px !important;

            height:
              30px !important;
          }

          /* =========================================
             CITIES
          ========================================= */

          .hw-nav-item.hw-scroll-cities
            .hw-mega-dropdown {

            right:
              0 !important;

            left:
              auto !important;

            width:
              calc(100vw - 20px) !important;

            max-width:
              calc(100vw - 20px) !important;

            padding:
              16px !important;
          }

          .hw-mega-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              ) !important;

            gap:
              16px !important;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .hw-header {
            background: #000 !important;
          }

          /* Inner pages remain black before scroll */
          .hw-header-inner-page {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            background: #000 !important;
            box-shadow: 0 5px 25px rgba(0,0,0,.35);
            border-bottom: 1px solid rgba(255,255,255,.10);
          }

          .hw-header-scrolled {

            position:
              fixed !important;

            top:
              0 !important;

            left:
              0 !important;

            right:
              0 !important;

            width:
              100% !important;

            background:
              #000 !important;

            box-shadow:
              0 5px 25px
              rgba(0,0,0,.35);

            border-bottom:
              1px solid
              rgba(255,255,255,.10);
          }

          .hw-header-inner {

            height:
              68px;

            padding:
              0 18px;

            gap:
              10px;
          }

          .hw-logo {
            width:
              auto;

            min-width:
              0;
          }

          .hw-logo-image {

            width:
              145px;

            max-height:
              52px;
          }

          .hw-nav {
            display: none !important;
          }

          /* Mobile search is hidden before scroll and becomes sticky with the fixed header */
          .hw-scroll-search {
            display: none !important;
            flex: 1 1 auto !important;
            min-width: 0 !important;
            margin: 0 !important;
            gap: 0 !important;
          }

          .hw-header-scrolled .hw-scroll-search {
            display: flex !important;
          }

          .hw-header-scrolled .hw-location-select {
            display: none !important;
          }

          .hw-header-scrolled .hw-search-box {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            display: flex !important;
            flex: 1 1 auto !important;
            background: #fff !important;
            border: 1px solid #e3e3e3 !important;
            box-shadow: none !important;
            margin: 0 !important;
            overflow: hidden;
          }

          .hw-header-scrolled .hw-search-box button {
            width: 48px;
            height: 40px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            background: #a77c1d !important;
            color: #fff !important;
          }

          .hw-header-scrolled .hw-search-box button svg {
            width: 25px !important;
            height: 25px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .hw-header-scrolled .hw-header-inner {
            gap: 10px;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .hw-header-scrolled .hw-scroll-search {
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .hw-header-scrolled .hw-search-box input {
            background: #fff !important;
            color: #222 !important;
            font-size: 13px;
            padding: 0 13px;
          }

          .hw-header-scrolled .hw-search-box input::placeholder {
            color: #9aa0a6 !important;
          }

          /* On mobile scroll: only search field + search icon remain */
          .hw-header-scrolled .hw-logo {
            display: none !important;
          }

          .hw-header-scrolled .hw-header-actions {
            display: none !important;
          }

          .hw-header-actions {

            width:
              auto;

            gap:
              10px;
          }

          .hw-user-button {
            width: 34px;
            height: 34px;
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .hw-header-scrolled .hw-user-button {
            display: none !important;
          }

          .hw-menu-button {

            width:
              36px;

            height:
              36px;

            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .hw-mobile-menu {
            display:
              block;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .hw-header-inner {

            height:
              64px;

            padding:
              0 14px;

            background:
              transparent;
          }

          .hw-logo-image {

            width:
              135px;

            max-height:
              48px;
          }

          .hw-header-actions {
            gap: 5px;
          }

          .hw-mobile-search-button,
          .hw-menu-button {
            width: 32px;
            height: 32px;
          }

          .hw-mobile-search-button svg,
          .hw-menu-button svg {
            width: 20px;
            height: 20px;
          }

          .hw-mobile-menu {

            padding-left:
              15px;

            padding-right:
              15px;
          }

          .hw-mobile-main {

            font-size:
              13px;
          }

          .hw-mobile-group {

            font-size:
              11px;
          }

          .hw-mobile-child {

            font-size:
              10px;
          }

        }


        /* =====================================================
           EXTRA SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .hw-header-inner {
            padding:
              0 10px;
          }

          .hw-logo-image {
            width:
              125px;
          }

          .hw-user-button {
            width:
              32px;

            height:
              32px;
          }

          .hw-menu-button,
          .hw-mobile-search-button {
            width: 31px;
            height: 31px;
          }

        }


        /* =====================================================
           FINAL MOBILE SCROLL SEARCH OVERRIDE
        ===================================================== */

        @media (max-width: 768px) {

          .hw-header.hw-header-scrolled {
            background: #fff !important;
          }

          .hw-header.hw-header-scrolled .hw-header-inner {
            background: #fff !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 10px !important;
          }

          .hw-header.hw-header-scrolled .hw-scroll-search {
            display: flex !important;
            width: 100% !important;
            flex: 1 1 100% !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box {
            width: 100% !important;
            height: 44px !important;
            min-height: 44px !important;
            margin: 0 !important;
            background: #fff !important;
            border: 1px solid #d9d9d9 !important;
            border-radius: 8px !important;
            box-shadow: none !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box input {
            height: 44px !important;
            background: #fff !important;
            font-size: 13px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button {
            width: 52px !important;
            height: 44px !important;
            background: #a77c1d !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg {
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
            min-height: 28px !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg circle,
          .hw-header.hw-header-scrolled .hw-search-box button svg path {
            stroke-width: 2 !important;
          }

          .hw-header:not(.hw-header-scrolled) .hw-user-button svg {
            width: 23px !important;
            height: 23px !important;
          }

          .hw-header:not(.hw-header-scrolled) .hw-menu-button svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .hw-header.hw-header-scrolled .hw-header-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box {
            height: 44px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button {
            width: 52px !important;
            height: 44px !important;
          }

          .hw-header.hw-header-scrolled .hw-search-box button svg {
            width: 28px !important;
            height: 28px !important;
          }
        }

      `}</style>
    </>
  );
}