import React, { useRef } from "react";
import dlfLogo from "../images/dlf.avif";
import godrejLogo from "../images/godrej.avif";
import experionLogo from "../images/experion.avif";
import m3mLogo from "../images/m3m.avif";
import maxLogo from "../images/max.avif";

const developers = [
  {
    name: "DLF",
    logo: dlfLogo,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    projects: "50+ Projects",
    location: "Gurugram | Delhi NCR",
  },
  {
    name: godrejLogo,
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=Godrej+Properties",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    projects: "40+ Projects",
    location: "Mumbai | Pune | NCR",
  },
  {
    name: experionLogo,
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=PRESTIGE+GROUP",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    projects: "35+ Projects",
    location: "Bangalore | Hyderabad",
  },
  {
    name: "Lodha",
    logo: m3mLogo,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    projects: "35+ Projects",
    location: "Mumbai | Thane",
  },
  {
    name: "Sobha",
    logo: maxLogo,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    projects: "25+ Projects",
    location: "Bangalore | NCR",
  },
  {
    name: "Brigade",
    logo: "https://dummyimage.com/220x90/ffffff/111111&text=BRIGADE",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
    projects: "20+ Projects",
    location: "Bangalore | Chennai",
  },
];

export default function DeveloperSection() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 390 : -390,
      behavior: "smooth",
    });
  };

  return (
    <section className="hw-developer-section">
      <div className="hw-developer-wrap">
        <div className="hw-developer-heading">
          <div className="hw-developer-label">
            <span className="line" />
            TRUSTED NAMES
            <span className="line" />
          </div>

          <h2>
            Top Property <span>Developers</span>
          </h2>

          <p>
            Partnering with India&apos;s most trusted builders to bring you the
            best properties.
          </p>
        </div>

        <div className="hw-developer-slider-wrap">
          <button
            type="button"
            className="hw-developer-arrow hw-developer-prev"
            onClick={() => scrollSlider("prev")}
            aria-label="Previous developers"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5 7.5 12l7 7" />
            </svg>
          </button>

          <div className="hw-developer-slider" ref={sliderRef}>
            {developers.map((developer) => (
              <article
                className="hw-developer-card"
                key={developer.name}
              >
                <div className="hw-developer-logo">
                  <img
                    src={developer.logo}
                    alt={`${developer.name} logo`}
                    loading="lazy"
                  />
                </div>

                <div className="hw-developer-image">
                  <img
                    src={developer.image}
                    alt={`${developer.name} property`}
                    loading="lazy"
                  />
                </div>

                <div className="hw-developer-info">
                  <h3>{developer.projects}</h3>

                  <div className="hw-developer-location">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                    <span>{developer.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="hw-developer-arrow hw-developer-next"
            onClick={() => scrollSlider("next")}
            aria-label="Next developers"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9.5 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="hw-developer-action">
          <button type="button">
            View All Developers
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="hw-developer-dots" aria-hidden="true">
          <span className="active" />
          <span />
        </div>
      </div>

      

      <style>{`
        .hw-developer-section {
          position: relative;
          width: 100%;
          min-height: 0;
          overflow: hidden;
          padding: 42px 0 10px;
          background: #ffffff;
          font-family: "Manrope", Arial, sans-serif;
          color: #111827;
          box-sizing: border-box;
        }

        .hw-developer-section *,
        .hw-developer-section *::before,
        .hw-developer-section *::after {
          box-sizing: border-box;
        }

        .hw-developer-wrap {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .hw-developer-heading {
          margin: 0 auto 22px;
          padding: 0 20px;
          text-align: center;
        }

        .hw-developer-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 13px;
          color: #9a7418;
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .hw-developer-label .line {
          width: 34px;
          height: 1px;
          background: #d4af37;
        }

        .hw-developer-heading h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.4px;
        }

        .hw-developer-heading h2 span {
          color: #b9943a;
        }

        .hw-developer-heading p {
          max-width: 650px;
          margin: 12px auto 0;
          color: #212122;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 500;
        }

        .hw-developer-slider-wrap {
          position: relative;
          width: 100%;
        }

        .hw-developer-slider {
          display: flex;
          gap: 16px;
          width: 100%;
          padding: 0 42px 10px;
          overflow-x: auto;
          overflow-y: visible;
          scroll-behavior: smooth;
          scrollbar-width: none;
          scroll-snap-type: x proximity;
        }

        .hw-developer-slider::-webkit-scrollbar {
          display: none;
        }

        .hw-developer-card {
          flex: 0 0 calc((100% - 80px) / 6);
          min-width: 190px;
          height: 320px;
          overflow: hidden;
          scroll-snap-align: start;
          border: 1px solid #eee8d8;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 7px 24px rgba(17, 24, 39, .055);
          transition:
            transform .28s ease,
            box-shadow .28s ease,
            border-color .28s ease;
        }

        .hw-developer-card:hover {
          transform: translateY(-5px);
          border-color: rgba(185, 148, 58, .55);
          box-shadow: 0 17px 38px rgba(17, 24, 39, .10);
        }

        .hw-developer-logo {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px 9px;
          background: #ffffff;
        }

        .hw-developer-logo img {
          display: block;
          width: 82%;
          height: 62px;
          object-fit: contain;
        }

        .hw-developer-image {
          width: calc(100% - 18px);
          height: 150px;
          margin: 0 9px;
          overflow: hidden;
          border-radius: 9px;
          background: #f5f5f2;
        }

        .hw-developer-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform .45s ease;
        }

        .hw-developer-card:hover .hw-developer-image img {
          transform: scale(1.045);
        }

        .hw-developer-info {
          padding: 14px 15px 13px;
        }

        .hw-developer-info h3 {
          margin: 0 0 6px;
          color: #111827;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 800;
        }

        .hw-developer-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #737b8c;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 500;
          white-space: nowrap;
        }

        .hw-developer-location svg {
          flex: 0 0 16px;
          width: 16px;
          height: 16px;
          fill: none;
          stroke: #b9943a;
          stroke-width: 1.8;
        }

        .hw-developer-arrow {
          display: none;
          position: absolute;
          top: 166px;
          z-index: 5;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee8d8;
          border-radius: 50%;
          background: #ffffff;
          color: #8d6b1d;
          box-shadow: 0 8px 25px rgba(17, 24, 39, .12);
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, color .2s ease, background .2s ease;
        }

        .hw-developer-arrow:hover {
          color: #ffffff;
          background: #b9943a;
          border-color: #b9943a;
          transform: scale(1.05);
          box-shadow: 0 10px 28px rgba(185, 148, 58, .24);
        }

        .hw-developer-arrow svg {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.9;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hw-developer-prev {
          left: 10px;
          display: none;
        }

        .hw-developer-next {
          right: 10px;
          display:none;
        }

        .hw-developer-action {
          position: relative;
          z-index: 4;
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .hw-developer-action button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          min-width: 205px;
          height: 45px;
          padding: 0 22px;
          border: 1px solid #b9943a;
          border-radius: 20px;
          background:white ;
          color: #b9943a;
          font-family: inherit;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 9px 22px rgba(185, 148, 58, .20);
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .hw-developer-action button:hover {
          background: #9a7418;
          color:white;
          transform: translateY(-2px);
          box-shadow: 0 13px 28px rgba(154, 116, 24, .24);
        }

        .hw-developer-action svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hw-developer-dots {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 10px;
        }

        .hw-developer-dots span {
          width: 27px;
          height: 3px;
          border-radius: 10px;
          background: #e8dfc8;
        }

        .hw-developer-dots span.active {
          background: #b9943a;
        }

        .hw-city-silhouette {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          height: 145px;
          overflow: hidden;
          opacity: .48;
          background:
            radial-gradient(ellipse at 12% 100%, rgba(241, 235, 218, .80) 0 8%, transparent 8.3%),
            radial-gradient(ellipse at 28% 100%, rgba(241, 235, 218, .80) 0 9%, transparent 9.3%),
            radial-gradient(ellipse at 51% 100%, rgba(241, 235, 218, .80) 0 8%, transparent 8.3%),
            radial-gradient(ellipse at 76% 100%, rgba(241, 235, 218, .80) 0 9%, transparent 9.3%);
          pointer-events: none;
        }

        .hw-city-silhouette::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #eee8d8;
        }

        .hw-city-silhouette .building {
          position: absolute;
          bottom: 0;
          display: block;
          width: 42px;
          border-radius: 2px 2px 0 0;
          background: linear-gradient(180deg, #eee8d8, #f7f4ec);
        }

       

        @media (max-width: 1250px) {
          .hw-developer-wrap {
            max-width: 1120px;
          }

          .hw-developer-card {
            flex-basis: calc((100% - 80px) / 6);
          }

          .hw-developer-slider {
            padding-left: 36px;
            padding-right: 36px;
          }

          .hw-developer-prev {
            left: 6px;
          }

          .hw-developer-next {
            right: 6px;
          }
        }

        @media (max-width: 900px) {
          .hw-developer-section {
            min-height: 0;
            padding-top: 60px;
          }

          .hw-developer-wrap {
            max-width: 100%;
          }

          .hw-developer-heading h2 {
            font-size: 38px;
          }

          .hw-developer-heading p {
            font-size: 14px;
          }

          .hw-developer-card {
            flex-basis: calc((100% - 80px) / 6);
            height: 320px;
          }

          .hw-developer-logo {
            height: 100px;
          }

          .hw-developer-logo img {
            height: 58px;
          }

          .hw-developer-image {
            height: 205px;
          }

          .hw-developer-arrow {
            top: 155px;
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 650px) {
          .hw-developer-section {
            min-height: 0;
            padding: 28px 0 8px;
          }

          .hw-developer-heading {
            margin-bottom: 16px;
          }

          .hw-developer-label {
            gap: 7px;
            font-size: 9px;
            letter-spacing: 2px;
          }

          .hw-developer-label .line {
            width: 24px;
          }

          .hw-developer-heading h2 {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -1px;
            font-weight: 800;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-heading p {
            max-width: 380px;
            margin-top: 11px;
            padding: 0 10px;
            font-size: 13px;
            line-height: 1.6;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-slider {
            gap: 8px;
            padding: 0 10px 10px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .hw-developer-card {
            flex: 0 0 calc((100% - 8px) / 2);
            min-width: calc((100% - 8px) / 2);
            height: 330px;
          }

          .hw-developer-logo {
            height: 95px;
          }

          .hw-developer-logo img {
            height: 58px;
          }

          .hw-developer-image {
            height: 195px;
          }

          .hw-developer-info {
            padding: 13px 14px;
          }

          .hw-developer-info h3 {
            font-size: 15px;
            line-height: 1.25;
            font-weight: 800;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-location {
            font-size: 11px;
            line-height: 1.35;
            font-weight: 500;
            font-family: "Manrope", Arial, sans-serif;
          }

          .hw-developer-location svg {
            width: 15px;
            height: 15px;
          }

          .hw-developer-arrow {
            display: flex;
            top: 150px;
            width: 40px;
            height: 40px;
          }

          .hw-developer-arrow svg {
            width: 19px;
            height: 19px;
          }

          .hw-developer-prev {
            left: 4px;
          }

          .hw-developer-next {
            right: 4px;
          }

          .hw-developer-action {
            margin-top: 10px;
          }

          .hw-developer-action button {
            min-width: 190px;
            height: 44px;
            padding: 0 18px;
            font-size: 13px;
            border-radius: 8px;
          }

          .hw-developer-action svg {
            width: 17px;
            height: 17px;
          }

          .hw-developer-dots {
            margin-top: 14px;
          }

          .hw-developer-dots span {
            width: 23px;
            height: 3px;
          }

          .hw-city-silhouette {
            height: 105px;
          }
        }

      `}</style>
    </section>
  );
}
