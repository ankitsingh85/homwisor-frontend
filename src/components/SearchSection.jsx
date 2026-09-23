import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("Apartment");

  const [type, setType] = useState("");

  const [location, setLocation] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const tabs = [
    {
      name: "Apartment",
      value: "Apartment",
      icon: "▦",
    },
    {
      name: "Villa",
      value: "Villa",
      icon: "⌂",
    },
    {
      name: "Farmhouse",
      value: "Farmhouse",
      icon: "⌂",
    },
    {
      name: "Commercial",
      value: "Commercial",
      icon: "▥",
    },
    {
      name: "Branded",
      value: "Branded",
      icon: "✪",
    },
    {
      name: "Luxury",
      value: "Luxury",
      icon: "◇",
    },
    {
      name: "Plots / Land",
      value: "Plots / Land",
      icon: "△",
    },
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (activeTab) {
      params.set("type", activeTab);
    }

    if (type) {
      params.set("propertyType", type);
    }

    if (location) {
      params.set("location", location);
    }

    if (budget) {
      params.set("budget", budget);
    }

    navigate(
      `/search?${params.toString()}`
    );
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.value);
    setType(tab.value);
  };

  return (
    <section className="hw-search-section">

      <div className="hw-search-container">

        {/* TABS */}

        <div className="hw-search-tabs">

          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              className={`hw-search-tab ${
                activeTab === tab.value
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleTabClick(tab)
              }
            >

              <span className="hw-tab-icon">
                {tab.icon}
              </span>

              <span>
                {tab.name}
              </span>

            </button>
          ))}

        </div>


        {/* SEARCH FIELDS */}

        <div className="hw-search-fields">

          {/* LOCATION */}

          <div className="hw-search-field">

            <span className="hw-search-icon">

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="M20 20l-4-4" />

              </svg>

            </span>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              placeholder="Search city, locality or project..."
            />

          </div>


          {/* BUDGET */}

          <div className="hw-search-field">

            <span className="hw-search-icon">
              ₹
            </span>

            <select
              value={budget}
              onChange={(e) =>
                setBudget(e.target.value)
              }
            >

              <option value="">
                Budget
              </option>

              <option value="Under 1 Cr">
                Under ₹1 Cr
              </option>

              <option value="1 Cr - 4 Cr">
                ₹1 Cr - ₹4 Cr
              </option>

              <option value="4 Cr - 8 Cr">
                ₹4 Cr - ₹8 Cr
              </option>

              <option value="8 Cr - 12 Cr">
                ₹8 Cr - ₹12 Cr
              </option>

              <option value="12 Cr - 16 Cr">
                ₹12 Cr - ₹16 Cr
              </option>

              <option value="16 Cr Onwards">
                ₹16 Cr Onwards
              </option>

            </select>

            <span className="hw-select-arrow">
              ↓
            </span>

          </div>


          {/* PROPERTY TYPE */}

          <div className="hw-search-field">

            <span className="hw-search-icon">

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="1"
                />

                <path d="M8 8h8" />
                <path d="M8 12h8" />
                <path d="M8 16h5" />

              </svg>

            </span>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >

              <option value="">
                Property Type
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Farmhouse">
                Farmhouse
              </option>

              <option value="Builder Floor">
                Builder Floor
              </option>

              <option value="Commercial">
                Commercial
              </option>

              <option value="Plots / Land">
                Plots / Land
              </option>

            </select>

            <span className="hw-select-arrow">
              ↓
            </span>

          </div>


          {/* SEARCH */}

          <button
            type="button"
            className="hw-search-button"
            onClick={handleSearch}
          >

            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <path d="M20 20l-4-4" />

            </svg>

            <span>
              Search Properties
            </span>

          </button>

        </div>

      </div>


      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        );

        .hw-search-section {

          position: relative;

          z-index: 60;

          width: 100%;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

        }


        .hw-search-container {

          width: calc(100% - 80px);
          max-width: 850px;
          margin: 0 auto;
         height:160px;
         padding-top:20px;
          overflow: hidden;

          border:
            1px solid
            rgba(216,170,66,.42);

          border-radius: 12px;

          background: #ffffff;

          box-shadow: 0 10px 28px rgba(17, 24, 39, 0.07);

          backdrop-filter: none;

        }


        /* =========================
           TABS
        ========================= */

        .hw-search-tabs {

          display: flex;

          align-items: center;

          gap: 3px;

          min-height: 55px;

          padding:
            7px 10px;

          overflow-x: auto;

          scrollbar-width: none;

          border-bottom: 1px solid #eee8d8;

        }


        .hw-search-tabs::-webkit-scrollbar {
          display: none;
        }


        .hw-search-tab {

          height: 39px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          padding:
            0 17px;

          border: 1px solid #f6d36b;

          border-radius: 7px;

          background: transparent;

          color:
            rgba(17, 17, 17, 0.72);

          font-family: inherit;

          font-size: 11px;

          font-weight: 600;

          white-space: nowrap;

          cursor: pointer;

          transition: .2s ease;

        }


        .hw-search-tab:hover {

          color: #050505;

          background: #faf9f5;

        }


        .hw-search-tab.active {

          color: #ffffff;

          background: #b9943a;

          font-weight: 800;

        }


        .hw-tab-icon {

          color: #d9ad42;

          font-size: 16px;

          line-height: 1;

        }


        .hw-search-tab.active
        .hw-tab-icon {

          color: #ffffff;

        }


        /* =========================
           SEARCH FIELDS
        ========================= */

        .hw-search-fields {

          display: grid;

          grid-template-columns:
            1.45fr
            .90fr
            .95fr
            1fr;

          gap: 10px;

          padding: 10px;

        }


        .hw-search-field {

          position: relative;

          height: 46px;

          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            0 13px;

          border:
            1px solid
            rgba(216,170,66,.70);

          border-radius: 7px;

          background: #ffffff;

          color:
            rgba(12, 12, 12, 0.82);

          transition: .2s ease;

        }


        .hw-search-field:focus-within {

          border-color:
            rgba(216,170,66,.70);

        }


        .hw-search-icon {

          flex-shrink: 0;

          width: 19px;

          height: 19px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #d9ad42;

          font-size: 16px;

          font-weight: 700;

        }


        .hw-search-field input,
        .hw-search-field select {

          width: 100%;

          height: 100%;

          min-width: 0;

          border: none;

          outline: none;

          background: transparent;

          color:
            rgba(8, 8, 8, 0.88);

          font-family: inherit;

          font-size: 11px;

          font-weight: 500;

        }


        .hw-search-field input::placeholder {

          color:
            rgba(12, 12, 12, 0.58);

        }


        .hw-search-field select {

          appearance: none;

          -webkit-appearance: none;

          padding-right: 22px;

          cursor: pointer;

        }


        .hw-search-field select option {

          background: #111;

          color: #fff;

        }


        .hw-select-arrow {

          position: absolute;

          right: 12px;

          top: 50%;

          transform:
            translateY(-50%);

          color: #d9ad42;

          font-size: 13px;

          pointer-events: none;

        }


        /* =========================
           SEARCH BUTTON
        ========================= */

        .hw-search-button {

          height: 46px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding:
            0 22px;

          border: none;

          border-radius: 7px;

          background: #b9943a;

          color: #ffffff;

          font-family: inherit;

          font-size: 11px;

          font-weight: 800;

          white-space: nowrap;

          cursor: pointer;

          transition: .2s ease;

        }


        .hw-search-button:hover {

          transform:
            translateY(-1px);

          box-shadow: 0 6px 20px rgba(185,148,58,.22);

        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1200px) and (min-width: 901px) {
          .hw-search-container {
            width: calc(100% - 48px);
            max-width: 1100px;
          }
        }

        @media (max-width: 900px) {

          .hw-search-fields {

            grid-template-columns:
              1fr 1fr;

          }


          .hw-search-button {

            grid-column:
              span 2;

          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .hw-search-container {

            border-radius: 10px;

          }


          .hw-search-tabs {

            min-height: 50px;

          }


          .hw-search-tab {

            height: 36px;

            padding:
              0 13px;

            font-size: 10px;

          }


          .hw-search-fields {

            grid-template-columns:
              1fr;

            gap: 8px;

          }


          .hw-search-field {

            height: 43px;

          }


          .hw-search-button {

            grid-column: auto;

            height: 43px;

            width: 100%;

          }

        }
          /* =========================================================
   MOBILE SEARCH
========================================================= */

@media (max-width: 768px) {

  .hw-search-section {

    position: relative;

    z-index: 60;

    width: 100%;

    padding: 6px 8px 8px;

    margin: 0;

    background: #ffffff;
  }


  .hw-search-container {

    width: 100%;
    max-width: none;
    margin: 0;

    border: none !important;

    border-radius: 0 !important;

    background: #fff !important;

    box-shadow: none !important;

    backdrop-filter: none !important;

    overflow: visible;
  }


  /* =========================================
     TABS
  ========================================= */

  .hw-search-tabs {

    display: flex;

    align-items: center;

    width: 100%;

    height: 38px;

    min-height: 38px;

    gap: 0;

    padding: 0;

    border: none !important;

    overflow-x: auto;

    scrollbar-width: none;
  }


  .hw-search-tabs::-webkit-scrollbar {

    display: none;
  }


  .hw-search-tab {

    flex: 0 0 62px;

    width: 62px;

    height: 38px;

    padding: 0 3px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 2px;

    border: none;

    border-radius: 0;

    background: transparent;

    color: #666;

    font-family:
      "Manrope",
      Arial,
      sans-serif;

    font-size: 7px;

    font-weight: 600;

    line-height: 1;

    white-space: nowrap;

    cursor: pointer;
  }


  .hw-search-tab.active {

    color: #D4AF37;

    background: transparent;

    font-weight: 800;
  }


  .hw-tab-icon {

    color: #888;

    font-size: 13px;

    line-height: 1;
  }


  .hw-search-tab.active
  .hw-tab-icon {

    color: #D4AF37;
  }


  /* =========================================
     SEARCH FIELDS
  ========================================= */

  .hw-search-fields {

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      38px;

    gap: 6px;

    padding: 6px 0 0;

    width: 100%;
  }


  /* LOCATION */

  .hw-search-field {

    position: relative;

    height: 34px;

    display: flex;

    align-items: center;

    gap: 7px;

    padding: 0 9px;

    border:
      1px solid
      #dedede;

    border-radius: 5px;

    background: #ffffff;

    color: #555;

    box-shadow: none;
  }


  /* HIDE BUDGET */

  .hw-search-fields
  .hw-search-field:nth-child(2) {

    display: none;
  }


  /* HIDE PROPERTY TYPE */

  .hw-search-fields
  .hw-search-field:nth-child(3) {

    display: none;
  }


  .hw-search-icon {

    flex-shrink: 0;

    width: 15px;

    height: 15px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #D4AF37;

    font-size: 13px;
  }


  .hw-search-field input {

    width: 100%;

    height: 100%;

    min-width: 0;

    border: none;

    outline: none;

    background: transparent;

    color: #333;

    font-family:
      "Manrope",
      Arial,
      sans-serif;

    font-size: 9px;

    font-weight: 500;
  }


  .hw-search-field input::placeholder {

    color: #999;
  }


  /* =========================================
     SEARCH BUTTON
  ========================================= */

  .hw-search-button {

    width: 38px;

    height: 34px;

    padding: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 0;

    border: none;

    border-radius: 5px;

    background: #b9943a;

    color: #ffffff;

    font-size: 0;

    box-shadow: none;

    cursor: pointer;
  }


  .hw-search-button span {

    display: none;
  }


  .hw-search-button svg {

    width: 15px;

    height: 15px;
  }
}


/* =========================================================
   SMALL MOBILE SEARCH
========================================================= */

@media (max-width: 480px) {

  .hw-search-section {

    padding:
      5px
      7px
      7px;
  }


  .hw-search-tabs {

    height: 36px;

    min-height: 36px;
  }


  .hw-search-tab {

    flex-basis: 60px;

    width: 60px;

    height: 36px;

    font-size: 6.5px;
  }


  .hw-tab-icon {

    font-size: 12px;
  }


  .hw-search-fields {

    grid-template-columns:
      minmax(0, 1fr)
      36px;

    gap: 5px;

    padding-top: 5px;
  }


  .hw-search-field {

    height: 33px;

    padding: 0 8px;
  }


  .hw-search-field input {

    font-size: 8.5px;
  }


  .hw-search-button {

    width: 36px;

    height: 33px;
  }


  .hw-search-button svg {

    width: 14px;

    height: 14px;
  }
}

      `}</style>

    </section>
  );
}