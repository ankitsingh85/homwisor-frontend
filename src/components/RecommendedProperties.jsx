import React from "react";

const properties = [
  {
    title: "DLF Privana North",
    subtitle: "Luxury Apartments",
    location: "Sector 76, Golf Course Extension Road, Gurugram",
    bhk: "3, 4 BHK",
    area: "2,500 - 5,000 Sq.Ft.",
    price: "₹ 18.50 Cr",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "M3M Crown",
    subtitle: "Ultra Luxury Residences",
    location: "Sector 111, Dwarka Expressway, Gurugram",
    bhk: "3, 4 BHK",
    area: "3,000 - 5,000 Sq.Ft.",
    price: "₹ 20.00 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Emaar Palm Grove",
    subtitle: "Premium Villas",
    location: "Sector 102, Dwarka Expressway, Gurugram",
    bhk: "4, 5 BHK",
    area: "5,000+ Sq.Ft.",
    price: "₹ 25.00 Cr",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Godrej Green Estate",
    subtitle: "Premium Plots & Land",
    location: "Sector 150, Noida",
    bhk: "Residential Plots",
    area: "180 - 500 Sq.Yds.",
    price: "₹ 5.91 Cr",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function RecommendedProperties() {
  return (
    <section className="hw-recommended-section">

      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="hw-recommended-header">

        <div className="hw-recommended-brand">
          <span className="hw-recommended-line"></span>

          <span className="hw-recommended-label">
            HOMWISOR
          </span>

          <span className="hw-recommended-line reverse"></span>
        </div>

        <h2>
          Recommended Properties
        </h2>

        <p>
          Discover premium properties handpicked by HomWisor
          for luxury living and exceptional investment returns
        </p>

      </div>


      {/* =========================================
          PROPERTY CARDS
      ========================================= */}

      <div className="hw-recommended-grid">

        {properties.map((property, index) => (

          <article
            className="hw-recommended-card"
            key={index}
          >

            {/* IMAGE */}

            <div className="hw-recommended-image">

              <img
                src={property.image}
                alt={property.title}
              />

              <div className="hw-image-gradient"></div>

              <span className="hw-founder-badge">
                FOUNDER CHOICE
              </span>

            </div>


            {/* CONTENT */}

            <div className="hw-recommended-content">

              <h3>
                {property.title}
              </h3>

              <div className="hw-property-subtitle">
                {property.subtitle}
              </div>


              {/* LOCATION */}

              <div className="hw-property-location">

                <span className="hw-location-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                    />
                  </svg>
                </span>

                <span>
                  {property.location}
                </span>

              </div>


              {/* DETAILS */}

              <div className="hw-property-details">

                <span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16" />
                    <path d="M3 21h18" />
                    <path d="M7 7h2M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2" />
                  </svg>

                  {property.bhk}

                </span>


                <span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                    />

                    <path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5" />
                  </svg>

                  {property.area}

                </span>

              </div>


              {/* BOTTOM */}

              <div className="hw-property-bottom">

                <div className="hw-price-box">

                  <div className="hw-property-price">
                    {property.price}
                  </div>

                  <div className="hw-property-emi">
                    Onwards
                  </div>

                </div>


                <button
                  className="hw-view-button"
                  type="button"
                >
                  <span>
                    View Details
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
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =========================================
          VIEW ALL
      ========================================= */}

      <div className="hw-recommended-footer">

        <button
          className="hw-view-all"
          type="button"
        >
          <span>
            View All Recommended Properties
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

        </button>

      </div>


      {/* =========================================
          STYLES
      ========================================= */}

      <style>{`

        /* =========================================
           SECTION
        ========================================= */

        .hw-recommended-section {
          width: 100%;
          max-width: 1320px;

          margin: 0 auto;

          padding: 70px 28px 60px;

          background: #fff;

          box-sizing: border-box;

          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }


        /* =========================================
           HEADER
        ========================================= */

        .hw-recommended-header {
          width: 100%;

          text-align: center;

          margin-bottom: 38px;
        }


        .hw-recommended-brand {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 11px;

          margin-bottom: 8px;
        }


        .hw-recommended-label {
          color: #b58a25;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 4px;

          line-height: 1;
        }


        .hw-recommended-line {
          width: 42px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #d4af37
            );
        }


        .hw-recommended-line.reverse {
          background:
            linear-gradient(
              90deg,
              #d4af37,
              transparent
            );
        }


        .hw-recommended-header h2 {
          margin: 0;

          color: #171717;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 40px;

          font-weight: 600;

          line-height: 1.15;

          letter-spacing: -.8px;
        }


        .hw-recommended-header p {
          max-width: 700px;

          margin: 12px auto 0;

          color: #777;

          font-size: 13px;

          line-height: 1.7;

          font-weight: 500;
        }


        /* =========================================
           GRID
        ========================================= */

        .hw-recommended-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }


        /* =========================================
           CARD
        ========================================= */

        .hw-recommended-card {
          position: relative;

          min-width: 0;

          overflow: hidden;

          background: #fff;

          border:
            1px solid #e9e2d3;

          border-radius: 15px;

          box-shadow:
            0 7px 24px
            rgba(0, 0, 0, .055);

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }


        .hw-recommended-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(212, 175, 55, .65);

          box-shadow:
            0 20px 45px
            rgba(0, 0, 0, .12);
        }


        /* =========================================
           IMAGE
        ========================================= */

        .hw-recommended-image {
          position: relative;

          width: 100%;

          height: 215px;

          overflow: hidden;

          background: #eee;
        }


        .hw-recommended-image img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          transition:
            transform .65s ease;
        }


        .hw-recommended-card:hover
        .hw-recommended-image img {
          transform: scale(1.07);
        }


        .hw-image-gradient {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,.25),
              transparent 50%
            );
        }


        /* =========================================
           BADGE
        ========================================= */

        .hw-founder-badge {
          position: absolute;

          z-index: 5;

          top: 12px;
          left: 12px;

          padding:
            6px 11px;

          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              #d8b13e,
              #b88b20
            );

          color: #fff;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .5px;

          box-shadow:
            0 4px 12px
            rgba(0,0,0,.2);
        }


        /* =========================================
           CONTENT
        ========================================= */

        .hw-recommended-content {
          padding:
            17px 17px 16px;
        }


        .hw-recommended-content h3 {
          margin: 0;

          color: #171717;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 18px;

          line-height: 1.25;

          font-weight: 800;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        .hw-property-subtitle {
          margin-top: 5px;

          color: #b58a25;

          font-size: 12px;

          line-height: 1.4;

          font-weight: 700;
        }


        /* =========================================
           LOCATION
        ========================================= */

        .hw-property-location {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          margin-top: 12px;

          min-height: 34px;

          color: #6f6f6f;

          font-size: 10px;

          line-height: 1.5;

          font-weight: 500;
        }


        .hw-location-icon {
          flex-shrink: 0;

          width: 15px;
          height: 15px;

          color: #c49a2c;
        }


        .hw-location-icon svg {
          display: block;

          width: 100%;
          height: 100%;
        }


        /* =========================================
           DETAILS
        ========================================= */

        .hw-property-details {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 12px;

          padding-top: 11px;

          border-top:
            1px solid #eeeae1;
        }


        .hw-property-details span {
          display: flex;

          align-items: center;

          gap: 6px;

          color: #686868;

          font-size: 10px;

          line-height: 1.3;

          font-weight: 600;

          white-space: nowrap;
        }


        .hw-property-details svg {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          color: #b78a20;
        }


        /* =========================================
           BOTTOM
        ========================================= */

        .hw-property-bottom {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 15px;
        }


        .hw-price-box {
          min-width: 0;
        }


        .hw-property-price {
          color: #a97914;

          font-size: 18px;

          line-height: 1.1;

          font-weight: 900;

          white-space: nowrap;
        }


        .hw-property-emi {
          margin-top: 3px;

          color: #888;

          font-size: 9px;

          font-weight: 600;
        }


        /* =========================================
           VIEW BUTTON
        ========================================= */

        .hw-view-button {
          margin-left: auto;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          min-width: 98px;

          padding:
            9px 11px;

          border:
            1px solid #d4af37;

          border-radius: 7px;

          background: #fff;

          color: #9a741e;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 9px;

          font-weight: 800;

          cursor: pointer;

          transition:
            background .25s ease,
            color .25s ease,
            transform .25s ease;
        }


        .hw-view-button svg {
          width: 13px;
          height: 13px;

          transition:
            transform .25s ease;
        }


        .hw-view-button:hover {
          background: #d4af37;

          color: #fff;

          transform: translateY(-1px);
        }


        .hw-view-button:hover svg {
          transform:
            translateX(3px);
        }


        /* =========================================
           VIEW ALL
        ========================================= */

        .hw-recommended-footer {
          display: flex;

          justify-content: center;

          margin-top: 38px;
        }


        .hw-view-all {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding:
            12px 23px;

          border:
            1px solid #d4af37;

          border-radius: 30px;

          background: #fff;

          color: #9a741e;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 11px;

          font-weight: 800;

          cursor: pointer;

          transition:
            all .25s ease;
        }


        .hw-view-all svg {
          width: 15px;
          height: 15px;

          transition:
            transform .25s ease;
        }


        .hw-view-all:hover {
          background: #d4af37;

          color: #fff;

          box-shadow:
            0 8px 22px
            rgba(212,175,55,.25);
        }


        .hw-view-all:hover svg {
          transform:
            translateX(3px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {

          .hw-recommended-section {
            padding:
              55px 20px 45px;
          }


          .hw-recommended-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }


          .hw-recommended-header h2 {
            font-size: 35px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .hw-recommended-section {
            padding:
              42px 14px 38px;
          }


          .hw-recommended-header {
            margin-bottom: 25px;
          }


          .hw-recommended-brand {
            gap: 7px;
          }


          .hw-recommended-label {
            font-size: 9px;

            letter-spacing: 3px;
          }


          .hw-recommended-line {
            width: 25px;
          }


          .hw-recommended-header h2 {
            font-size: 29px;

            line-height: 1.15;
          }


          .hw-recommended-header p {
            max-width: 350px;

            margin-top: 9px;

            font-size: 11px;

            line-height: 1.65;
          }


          /* horizontal cards */

          .hw-recommended-grid {
            display: flex;

            gap: 13px;

            overflow-x: auto;

            padding:
              3px 2px 12px;

            scroll-snap-type:
              x mandatory;

            scrollbar-width: none;
          }


          .hw-recommended-grid::-webkit-scrollbar {
            display: none;
          }


          .hw-recommended-card {
            flex:
              0 0 290px;

            scroll-snap-align: start;

            border-radius: 14px;
          }


          .hw-recommended-image {
            height: 180px;
          }


          .hw-recommended-content {
            padding:
              16px 15px;
          }


          .hw-recommended-content h3 {
            font-size: 17px;
          }


          .hw-property-subtitle {
            font-size: 11px;
          }


          .hw-property-location {
            font-size: 9px;

            min-height: 32px;
          }


          .hw-property-details {
            gap: 10px;
          }


          .hw-property-details span {
            font-size: 9px;
          }


          .hw-property-details svg {
            width: 13px;
            height: 13px;
          }


          .hw-property-price {
            font-size: 17px;
          }


          .hw-view-button {
            min-width: 88px;

            padding:
              8px 9px;

            font-size: 8px;
          }


          .hw-view-button svg {
            width: 11px;
            height: 11px;
          }


          .hw-recommended-footer {
            margin-top: 25px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .hw-recommended-section {
            padding-left: 10px;
            padding-right: 10px;
          }


          .hw-recommended-header h2 {
            font-size: 27px;
          }


          .hw-recommended-card {
            flex-basis: 275px;
          }


          .hw-recommended-image {
            height: 170px;
          }


          .hw-property-price {
            font-size: 16px;
          }

        }

      `}</style>

    </section>
  );
}