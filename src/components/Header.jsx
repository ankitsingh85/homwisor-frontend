import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-homwiser.png";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

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
    {
      label: "Resale",
      link: "/status/for-sale",
    },
   
    {
      label: "Contact",
      link: "/contact",
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
          scrolled ? "hw-header-scrolled" : ""
        }`}
      >
        <div className="hw-header-inner">

          {/* LOGO */}

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

          {/* SCROLL SEARCH - hidden on hero, visible after scroll */}
          <div className="hw-scroll-search">
            <div className="hw-location-select">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 10.5C20 16 12 21 12 21S4 16 4 10.5a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7"/>
                <circle cx="12" cy="10.5" r="2.4" stroke="currentColor" strokeWidth="1.7"/>
              </svg>
              <select defaultValue="Gurugram" aria-label="Select city">
                <option>Gurugram</option>
                <option>Noida</option>
                <option>New Delhi</option>
                <option>Faridabad</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <div className="hw-search-box">
              <input
                type="text"
                placeholder="Search projects, localities..."
                aria-label="Search projects and localities"
              />
              <button type="button" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.4" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* DESKTOP NAV */}

          <nav className="hw-nav">

            {menuItems.map((item) => {
              const hasDropdown =
                item.type === "simple" ||
                item.type === "mega";

              return (
                <div
                  key={item.label}
                  className={`hw-nav-item ${
                    ["Project Status", "Cities", "Resale"].includes(item.label)
                      ? `hw-scroll-menu-item hw-scroll-${item.label.toLowerCase().replace(/\s+/g, "-")}`
                      : "hw-scroll-menu-hide"
                  }`}
                  onMouseEnter={() =>
                    hasDropdown &&
                    setOpenDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    hasDropdown &&
                    setOpenDropdown(null)
                  }
                >

                  {hasDropdown ? (
                    <button
                      className="hw-nav-link hw-nav-dropdown-button"
                      onClick={() =>
                        toggleDropdown(item.label)
                      }
                    >
                      <span>{item.label}</span>

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

                  {/* SIMPLE DROPDOWN */}

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

                  {/* MEGA DROPDOWN */}

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
                                group.children.map((child) => (
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

          {/* RIGHT ACTIONS */}

          <div className="hw-header-actions">

            <button
              type="button"
              className="hw-menu-button"
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
            >

              {mobileMenu ? (
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </svg>
              )}

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

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

                      {openDropdown ===
                        item.label && (
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
                                group.children.map((child) => (
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

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        );

        /* ===============================================
           HEADER
        =============================================== */

       .hw-header {
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;

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

  transition: .3s ease;
}

        .hw-header-scrolled {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,.98);
          backdrop-filter: blur(14px);
          box-shadow: 0 5px 25px rgba(0,0,0,.12);
          border-bottom: 1px solid rgba(0,0,0,.08);
        }

        /* Search is shown only after scrolling */
        .hw-scroll-search {
          display: none;
          align-items: center;
          gap: 8px;
          flex: 0 1 390px;
          min-width: 280px;
          margin-left: 4px;
        }

        .hw-header-scrolled .hw-scroll-search {
          display: flex;
        }

        /* ===============================================
           SCROLL HEADER MENU
           Top: full menu
           Scroll: ONLY Project Status, Cities, Resale
        =============================================== */
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
          box-sizing: border-box;
          box-shadow: 0 1px 2px rgba(0,0,0,.03);
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .hw-location-select:hover {
          border-color: #c9cdd2;
          box-shadow: 0 2px 8px rgba(0,0,0,.06);
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

        .hw-header-scrolled .hw-nav-link {
          color: #252525;
          text-shadow: none;
        }

        .hw-header-scrolled .hw-nav-link:hover {
          color: #b78b2c;
        }

        .hw-header-scrolled .hw-user-button {
          color: #252525;
          border-color: #cfcfcf;
          background: #fff;
        }

        /* Account + hamburger stay visible on scroll */
        .hw-header-scrolled .hw-header-actions {
          display: flex !important;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          flex-shrink: 0;
        }

        .hw-header-scrolled .hw-user-button {
          width: 36px;
          height: 36px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          color: #252525;
          border: 1px solid #cfcfcf;
          border-radius: 50%;
          background: #fff;
        }

        .hw-header-scrolled .hw-menu-button {
          width: 36px;
          height: 36px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          color: #252525;
          border: 0;
          background: transparent;
        }

        /* ===============================================
           HEADER INNER
        =============================================== */

        .hw-header-inner {
          height: 72px;

          width: 100%;

          padding:
            0 48px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;
        }

        /* ===============================================
           LOGO
        =============================================== */

        .hw-logo {
          width: 190px;

          height: 100%;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          text-decoration: none;
        }

        .hw-logo-image {
          width: 175px;

          max-height: 65px;

          height: auto;

          object-fit: contain;

          object-position: left center;

          display: block;
        }

        /* ===============================================
           NAV - RIGHT SIDE
        =============================================== */

        .hw-nav {
          height: 100%;

          flex: 1;

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

        /* ===============================================
           DROPDOWN
        =============================================== */

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

        /* ===============================================
           SIMPLE DROPDOWN
        =============================================== */

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

        /* ===============================================
           MEGA DROPDOWN
        =============================================== */

        .hw-mega-dropdown {
          width: 900px;

          max-width:
            calc(100vw - 40px);

          padding: 24px;
        }

        /* Cities mega menu: keep the complete panel inside the viewport */
        .hw-nav-item.hw-scroll-cities .hw-mega-dropdown {
          left: auto;
          right: 0;
          transform: none;
          width: min(900px, calc(100vw - 30px));
          max-width: calc(100vw - 30px);
        }

        .hw-nav-item.hw-scroll-cities:hover .hw-mega-dropdown,
        .hw-nav-item.hw-scroll-cities .hw-mega-dropdown {
          transform: none;
        }

        @keyframes hwCitiesDropdown {
          from {
            opacity: 0;
            transform: translateY(-7px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hw-nav-item.hw-scroll-cities .hw-mega-dropdown {
          animation: hwCitiesDropdown .18s ease;
        }

        .hw-mega-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap:
            24px 32px;
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

        /* ===============================================
           RIGHT ACTIONS
        =============================================== */

        .hw-header-actions {
          width: 90px;

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
        }

        .hw-user-button:hover {
          color: #d8aa42;

          border-color: #d8aa42;
        }

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
        }

        .hw-menu-button:hover {
          color: #d8aa42;
        }

        /* ===============================================
           MOBILE MENU
        =============================================== */

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

        /* ===============================================
           TABLET
        =============================================== */

        @media (max-width: 1200px) {

          .hw-header-scrolled .hw-scroll-search {
            flex-basis: 300px;
            min-width: 220px;
          }

          .hw-header-inner {
            padding:
              0 30px;
          }

          .hw-logo {
            width: 165px;
          }

          .hw-logo-image {
            width: 150px;

            max-height: 58px;
          }

          .hw-nav {
            gap: 15px;

            padding-right: 10px;
          }

          .hw-nav-link {
            font-size: 11px;

            gap: 4px;
          }

          .hw-mega-dropdown {
            width: min(760px, calc(100vw - 30px));
            max-width: calc(100vw - 30px);
          }

          .hw-nav-item.hw-scroll-cities .hw-mega-dropdown {
            right: 0;
            left: auto;
            width: min(760px, calc(100vw - 30px));
          }

          .hw-group-title {
            font-size: 12px;
          }

          .hw-dropdown-child {
            font-size: 10px;
          }
        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 768px) {

          .hw-header {
            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,.62),
                transparent
              );
          }

          .hw-header-scrolled {
            background: rgba(255,255,255,.98);
            box-shadow: 0 5px 25px rgba(0,0,0,.12);
          }

          .hw-header-inner {
            height: 68px;

            padding:
              0 18px;
          }

          .hw-logo {
            width: auto;
          }

          .hw-logo-image {
            width: 145px;

            max-height: 52px;
          }

          .hw-nav {
            display: none;
          }

          .hw-scroll-search {
            display: none !important;
          }

          .hw-header-scrolled .hw-scroll-search {
            display: none !important;
          }

          .hw-header-actions {
            width: auto;

            gap: 10px;
          }

          .hw-user-button {
            width: 34px;

            height: 34px;
          }

          .hw-menu-button {
            width: 36px;

            height: 36px;
          }

          .hw-mobile-menu {
            display: block;
          }
        }

        /* ===============================================
           SMALL MOBILE
        =============================================== */

        @media (max-width: 480px) {

          .hw-header-inner {
            height: 64px;

            padding:
              0 14px;
              background-color:black;
              
          }
              

          .hw-logo-image {
            width: 135px;

            max-height: 48px;
          }

          .hw-mobile-menu {
            padding-left: 15px;

            padding-right: 15px;
          }

          .hw-mobile-main {
            font-size: 13px;
          }

          .hw-mobile-group {
            font-size: 11px;
          }

          .hw-mobile-child {
            font-size: 10px;
          }
        }
          

      `}</style>
    </>
  );
}