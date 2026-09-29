import React, { useEffect, useRef } from "react";

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
  const sliderRef = useRef(null);

  /* ==========================================================
     MOBILE AUTO SLIDER
  ========================================================== */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let interval = null;

    const startAutoSlide = () => {
      clearInterval(interval);

      interval = setInterval(() => {
        if (window.innerWidth > 600) return;

        const cards = slider.querySelectorAll(
          ".hw-recommended-card"
        );

        if (!cards.length) return;

        const cardWidth =
          cards[0].getBoundingClientRect().width;

        const gap = 8;

        const moveDistance =
          (cardWidth + gap) * 2;

        const maxScroll =
          slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 5) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: moveDistance,
            behavior: "smooth",
          });
        }
      }, 3500);
    };

    startAutoSlide();

    const handleUserInteraction = () => {
      startAutoSlide();
    };

    slider.addEventListener(
      "touchend",
      handleUserInteraction,
      { passive: true }
    );

    slider.addEventListener(
      "pointerup",
      handleUserInteraction
    );

    return () => {
      clearInterval(interval);

      slider.removeEventListener(
        "touchend",
        handleUserInteraction
      );

      slider.removeEventListener(
        "pointerup",
        handleUserInteraction
      );
    };
  }, []);

  return (
    <section className="hw-recommended-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="hw-recommended-header">

        <div className="hw-recommended-brand">

          <span className="hw-recommended-line"></span>

          <span className="hw-recommended-label">
            HOMWISOR
          </span>

          <span className="hw-recommended-line reverse"></span>

        </div>

        <h2>
          Recommended <span>Properties</span>
        </h2>

        <p>
          Discover premium properties handpicked by HomWisor
          for luxury living and exceptional investment returns
        </p>

      </div>


      {/* =====================================================
          PROPERTY SLIDER
      ===================================================== */}

      <div
        className="hw-recommended-grid"
        ref={sliderRef}
      >

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
                loading="lazy"
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


              {/* PRICE */}

              <div className="hw-property-bottom">

                <div className="hw-price-box">

                  <div className="hw-property-price">
                    {property.price}
                  </div>

                  <div className="hw-property-emi">
                    Onwards
                  </div>

                </div>

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

                    <path
                      d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16"
                    />

                    <path d="M3 21h18" />

                    <path
                      d="M7 7h2M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2"
                    />

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

                    <path
                      d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5"
                    />

                  </svg>

                  {property.area}

                </span>

              </div>


              <button
                className="hw-recommended-whatsapp"
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.14 0C5.64 0 .35 5.29.35 11.79c0 2.08.54 4.11 1.57 5.9L.25 24l6.46-1.69a11.8 11.8 0 0 0 5.43 1.31h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.42-8.35ZM12.15 21.6h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.78 9.78 0 1 1 8.39 4.68Zm5.36-7.34c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
                </svg>

                <span>WhatsApp</span>
              </button>

            </div>

          </article>

        ))}

      </div>


      {/* =====================================================
          VIEW ALL
      ===================================================== */}

      {/* <div className="hw-recommended-footer">

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

      </div> */}


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .hw-recommended-section {
          width: 100%;
          max-width: 1320px;

          margin: 0 auto;

          padding: 40px 28px 0px;

          background: #ffffff;

          box-sizing: border-box;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          color: #111827;
        }


        .hw-recommended-section *,
        .hw-recommended-section *::before,
        .hw-recommended-section *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .hw-recommended-header {
          width: 100%;

          text-align: center;

          margin-bottom: 38px;
        }


        .hw-recommended-brand {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 11px;
        }


        .hw-recommended-label {
          color: #b9943a;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2.5px;

          line-height: 1;
        }


        .hw-recommended-line {
          width: 34px;

          height: 1px;

          background: #d4af37;
        }


        .hw-recommended-line.reverse {
          background: #d4af37;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .hw-recommended-header h2 {
          margin: 0;

          color: #111827;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 36px;

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -1.2px;
        }


        .hw-recommended-header h2 span {
          color: #b9943a;
        }


        .hw-recommended-header p {
          max-width: 650px;

          margin: 12px auto 0;

          color: #737b8c;

          font-size: 13px;

          line-height: 1.65;

          font-weight: 500;
        }


        /* =====================================================
           DESKTOP GRID
        ===================================================== */

        .hw-recommended-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;

          width: 100%;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .hw-recommended-card {
          position: relative;

          min-width: 0;

          overflow: hidden;

          background: #ffffff;

          border:
            1px solid #eee8d8;

          border-radius: 16px;

          box-shadow:
            0 7px 24px
            rgba(17, 24, 39, .055);

          transition:
            transform .28s ease,
            box-shadow .28s ease,
            border-color .28s ease;
        }


        .hw-recommended-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(185, 148, 58, .55);

          box-shadow:
            0 17px 38px
            rgba(17, 24, 39, .10);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .hw-recommended-image {
          position: relative;

          width: 100%;

          height: 215px;

          overflow: hidden;

          background: #f5f5f2;
        }


        .hw-recommended-image img {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center;

          transition:
            transform .45s ease;
        }


        .hw-recommended-card:hover
        .hw-recommended-image img {
          transform: scale(1.045);
        }


        /* =====================================================
           GRADIENT
        ===================================================== */

        .hw-image-gradient {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, .25),
              transparent 50%
            );
        }


        /* =====================================================
           BADGE
        ===================================================== */

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

          color: #ffffff;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .5px;

          box-shadow:
            0 4px 12px
            rgba(0, 0, 0, .20);
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .hw-recommended-content {
          padding:
            17px 16px 16px;
        }


        .hw-recommended-content h3 {
          margin: 0;

          color: #111827;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 18px;

          line-height: 1.3;

          font-weight: 800;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        .hw-property-subtitle {
          margin-top: 5px;

          color: #b9943a;

          font-size: 12px;

          line-height: 1.45;

          font-weight: 700;
        }


        /* =====================================================
           LOCATION
        ===================================================== */

        .hw-property-location {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          margin-top: 8px;

          min-height: 0;

          color: #737b8c;

          font-size: 11px;

          line-height: 1.5;

          font-weight: 500;
        }


        .hw-location-icon {
          flex-shrink: 0;

          width: 15px;

          height: 15px;

          color: #b9943a;
        }


        .hw-location-icon svg {
          display: block;

          width: 100%;

          height: 100%;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .hw-property-details {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 6px;

          padding-top: 0;

          border-top: none;
        }


        .hw-property-details span {
          display: flex;

          align-items: center;

          gap: 6px;

          color: #737b8c;

          font-size: 11px;

          line-height: 1.35;

          font-weight: 600;

          white-space: nowrap;
        }


        .hw-property-details svg {
          width: 15px;

          height: 15px;

          flex-shrink: 0;

          color: #b9943a;
        }


        /* =====================================================
           PRICE
        ===================================================== */

        .hw-property-bottom {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 8px;
        }


        .hw-price-box {
          min-width: 0;
        }


        .hw-property-price {
          color: #a97914;

          font-size: 19px;

          line-height: 1.15;

          font-weight: 900;

          white-space: nowrap;
        }


        .hw-property-emi {
          margin-top: 3px;

          color: #737b8c;

          font-size: 10px;

          font-weight: 600;
        }


        /* =====================================================
           VIEW DETAILS BUTTON
        ===================================================== */

        .hw-recommended-whatsapp {
          width: 100%;

          height: 30px;

          margin-top: 9px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          border: 1px solid #d7f1e2;

          border-radius: 5px;

          background: #eaf8f0;

          color: #25d366;

          font-family:
            "Manrope",
            Arial,
            sans-serif;

          font-size: 10px;

          font-weight: 800;

          cursor: pointer;

          white-space: nowrap;

          transition:
            background .2s ease,
            color .2s ease,
            border-color .2s ease;
        }


        .hw-recommended-whatsapp svg {
          width: 13px;

          height: 13px;

          flex-shrink: 0;
        }


        .hw-recommended-whatsapp:hover {
          background: #dff5e8;

          color: #1fb957;

          border-color: #c9ebd7;
        }


        /* =====================================================
           VIEW ALL
        ===================================================== */

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
            1px solid #b9943a;

          border-radius: 20px;

          background: #ffffff;

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
          background: #b9943a;

          color: #ffffff;

          box-shadow:
            0 8px 22px
            rgba(185, 148, 58, .25);
        }


        .hw-view-all:hover svg {
          transform:
            translateX(3px);
        }


        /* =====================================================
           TABLET
        ===================================================== */

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


        /* =====================================================
           MOBILE
           LEFT / RIGHT PADDING
           2 CARDS
           HORIZONTAL SLIDER
           AUTO SLIDE
        ===================================================== */

        @media (max-width: 600px) {

          .hw-recommended-section {
            width: 100%;

            padding:
              32px 10px 0px;

            background: #ffffff;
          }


          /* HEADER */

          .hw-recommended-header {
            padding-left: 0;

            padding-right: 0;

            margin-bottom: 25px;
          }


          .hw-recommended-brand {
            display: none;
          }


          .hw-recommended-label {
            font-size: 10px;

            letter-spacing: 2px;
          }


          .hw-recommended-line {
            width: 24px;
          }


          .hw-recommended-header h2 {

            font-size: 29px;

            line-height: 1.15;

            font-weight: 800;

            letter-spacing: -.7px;

            text-align: left;
          }


          .hw-recommended-header h2 span {
            color: #b9943a;
          }


          .hw-recommended-header p {
            display: none;
          }


          /* =================================================
             MOBILE SLIDER
             LEFT + RIGHT PADDING
          ================================================= */

          .hw-recommended-grid {

            display: flex;

            flex-wrap: nowrap;

            gap: 8px;

            width: 100%;

            overflow-x: auto;

            overflow-y: hidden;

            padding:
              3px 2px 12px;

            margin: 0;

            scroll-snap-type:
              x mandatory;

            scrollbar-width: none;

            -webkit-overflow-scrolling: touch;
          }


          .hw-recommended-grid::-webkit-scrollbar {
            display: none;
          }


          /* =================================================
             2 CARDS VISIBLE
          ================================================= */

          .hw-recommended-card {

            flex:
              0 0 calc(
                (100vw - 36px) / 2
              );

            width:
              calc(
                (100vw - 36px) / 2
              );

            min-width:
              calc(
                (100vw - 36px) / 2
              );

            scroll-snap-align: start;

            border-radius: 13px;

            box-shadow:
              0 6px 20px
              rgba(17, 24, 39, .055);
          }


          /* IMAGE */

          .hw-recommended-image {

            width: 100%;

            height: 145px;
          }


          /* CONTENT */

          .hw-recommended-content {

            padding:
              9px 9px 9px;
          }


          /* TITLE */

          .hw-recommended-content h3 {

            font-size: 12px;

            line-height: 1.2;

            font-weight: 800;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;
          }


          /* SUBTITLE */

          .hw-property-subtitle {
            display: none;
          }


          /* LOCATION */

          .hw-property-location {

            gap: 4px;

            margin-top: 4px;

            min-height: 0;

            font-size: 8px;

            line-height: 1.2;
          }


          .hw-location-icon {

            width: 13px;

            height: 13px;
          }


          /* DETAILS */

          .hw-property-details {

            gap: 7px;

            margin-top: 3px;

            padding-top: 0;

            border-top: none;
          }


          .hw-property-details span {

            gap: 4px;

            font-size: 10.5px;

            line-height: 1.35;

            overflow: hidden;

            white-space: nowrap;

            text-overflow: ellipsis;
          }


          .hw-property-details svg {

            width: 12px;

            height: 12px;
          }


          /* PRICE */

          .hw-property-bottom {

            gap: 5px;

            margin-top: 1px;

            align-items: flex-start;
          }


          .hw-property-price {

            font-size: 11px;

            line-height: 1.05;

            font-weight: 900;
          }


          .hw-property-emi {

            margin-top: 0;

            font-size: 7px;
          }

          .hw-recommended-whatsapp {

            height: 27px;

            margin-top: 5px;

            border-radius: 5px;

            font-size: 9px;

            gap: 4px;
          }


          .hw-recommended-whatsapp svg {

            width: 12px;

            height: 12px;
          }


          /* WHATSAPP BUTTON */

          .hw-recommended-whatsapp {
            width: 100%;
          }


          /* BADGE */

          .hw-founder-badge {

            top: 8px;

            left: 8px;

            padding:
              5px 7px;

            font-size: 9px;

            letter-spacing: .3px;
          }


          /* FOOTER */

          .hw-recommended-footer {

            margin-top: 22px;
          }


          .hw-view-all {

            padding:
              10px 17px;

            font-size: 12px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .hw-recommended-section {

            padding-left: 8px;

            padding-right: 8px;
          }


          .hw-recommended-header {

            padding-left: 0;

            padding-right: 0;
          }


          .hw-recommended-header h2 {

            font-size: 27px;

            text-align: left;
          }


          .hw-recommended-grid {

            gap: 7px;

            padding-left: 2px;

            padding-right: 2px;
          }


          .hw-recommended-card {

            flex:
              0 0 calc(
                (100vw - 30px) / 2
              );

            width:
              calc(
                (100vw - 30px) / 2
              );

            min-width:
              calc(
                (100vw - 30px) / 2
              );
          }


          .hw-recommended-image {

            height: 135px;
          }


          .hw-recommended-content {

            padding:
              11px 9px 12px;
          }


          .hw-recommended-content h3 {

            font-size: 14px;
          }


          .hw-property-subtitle {
            display: none;
          }


          .hw-property-location {

            margin-top: 3px;

            font-size: 7.5px;

            line-height: 1.15;
          }


          .hw-property-details {

            margin-top: 2px;

            padding-top: 0;

            border-top: none;
          }


          .hw-property-details span {

            font-size: 7.5px;
          }


          .hw-property-price {

            font-size: 11px;

            line-height: 1.15;
          }


          .hw-recommended-whatsapp {

            height: 26px;

            font-size: 8.5px;
          }

        }

      `}</style>

    </section>
  );
}