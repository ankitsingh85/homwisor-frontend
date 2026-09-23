import { useEffect, useState } from "react";

export default function Hero({ banners = [] }) {
  const [idx, setIdx] = useState(0);

  const hero = banners.length
    ? banners
    : [
        {
          image:
            "../images/bn2.png",
        },
        {
          image:
            "../images/bn2.png",
        },
        {
          image:
            "../images/bn1.png",
        },
      ];

  useEffect(() => {
    if (hero.length <= 1) return;

    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % hero.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hero.length]);

  const nextSlide = () => {
    setIdx((prev) => (prev + 1) % hero.length);
  };

  const prevSlide = () => {
    setIdx(
      (prev) =>
        (prev - 1 + hero.length) % hero.length
    );
  };

  return (
    <section className="hw-hero">

      {/* BACKGROUND */}

      <div className="hw-slides">

        {hero.map((banner, index) => (
          <div
            key={index}
            className={`hw-slide ${
              index === idx
                ? "hw-slide-active"
                : ""
            }`}
          >
            <img
              src={banner.image}
              alt="Premium Property"
            />


          </div>
        ))}

      </div>


      {/* ARROWS */}

      {hero.length > 1 && (
        <>
          <button
            type="button"
            className="hw-arrow hw-arrow-left"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            className="hw-arrow hw-arrow-right"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}


      {/* DOTS */}

      {/* {hero.length > 1 && (
        <div className="hw-dots">

          {hero.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setIdx(index)}
              className={
                index === idx
                  ? "hw-dot hw-dot-active"
                  : "hw-dot"
              }
              aria-label={`Slide ${index + 1}`}
            />
          ))}

        </div>
      )} */}


      <style>{`

       @import url(
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap'
);


/* =========================================================
   GLOBAL
========================================================= */

* {
  box-sizing: border-box;
}


/* =========================================================
   HERO
========================================================= */

.hw-hero {

  position: relative;

  width: 100%;

  height: 430px;

  overflow: visible;

  background: #080808;

  color: #fff;

  font-family:
    "Manrope",
    Arial,
    sans-serif;
}


/* =========================================================
   SLIDER
========================================================= */

.hw-slides {

  position: absolute;

  inset: 0;

  width: 100%;

  height: 100%;

  overflow: hidden;
}


.hw-slide {

  position: absolute;

  inset: 0;

  width: 100%;

  height: 100%;

  opacity: 0;

  transform: scale(1.04);

  transition:
    opacity 1s ease,
    transform 5s ease;
}


.hw-slide-active {

  opacity: 1;

  transform: scale(1);
}


.hw-slide img {

  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;
}


/* =========================================================
   IMAGE OVERLAY
========================================================= */

.hw-image-overlay {
  display: none;

}


.hw-bottom-overlay {
  display: none;

}


/* =========================================================
   HERO CONTENT
========================================================= */

.hw-hero-content {
  display: none;

}


.hw-hero-left {

  width: 100%;

  max-width: 700px;
}


/* =========================================================
   EYEBROW
========================================================= */

.hw-eyebrow {

  display: flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 12px;

  color:
    rgba(255,255,255,.75);

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 1.6px;
}


.hw-eyebrow b {

  color: #d9ad42;
}


/* =========================================================
   TITLE
========================================================= */

.hw-title {

  margin: 0;

  color: #fff;

  font-family:
    "Playfair Display",
    Georgia,
    serif;

  font-size: 64px;

  line-height: .98;

  font-weight: 600;

  letter-spacing: -1.8px;

  text-shadow:
    0 5px 25px
    rgba(0,0,0,.60);
}


.hw-title em {

  color: #d9ad42;

  font-style: italic;

  font-weight: 500;
}


/* =========================================================
   DESCRIPTION
========================================================= */

.hw-description {

  margin: 13px 0 0;

  color:
    rgba(255,255,255,.84);

  font-size: 14px;

  line-height: 1.5;
}


/* =========================================================
   BENEFITS
========================================================= */

.hw-benefits {

  display: flex;

  align-items: center;

  gap: 24px;

  margin-top: 15px;
}


.hw-benefit {

  display: flex;

  align-items: center;

  gap: 6px;

  color:
    rgba(255,255,255,.92);

  font-size: 11px;

  font-weight: 500;
}


.hw-benefit-icon {

  color: #d9ad42;

  font-size: 16px;
}


/* =========================================================
   SIDE CONTENT
========================================================= */

.hw-side-content {

  width: 90px;

  margin-right: 0;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  color:
    rgba(255,255,255,.72);

  font-size: 8px;

  font-weight: 500;

  line-height: 1.55;

  letter-spacing: 1px;
}


.hw-side-a {

  color: #d9ad42;

  font-family:
    "Playfair Display",
    Georgia,
    serif;

  font-size: 14px;
}


.hw-side-line {

  width: 28px;

  height: 1px;

  margin-top: 6px;

  background: #d9ad42;
}


/* =========================================================
   FEATURES
========================================================= */

.hw-features {
  display: none;

}


.hw-feature {

  min-width: 0;

  display: flex;

  align-items: center;

  gap: 9px;

  padding: 0 14px;
}


.hw-feature-icon {

  width: 36px;

  height: 36px;

  min-width: 36px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #d9ad42;

  border:
    1px solid
    rgba(217,173,66,.80);

  border-radius: 50%;

  background:
    rgba(0,0,0,.20);
}


.hw-feature-info {

  min-width: 0;
}


.hw-feature-info h4 {

  margin: 0 0 3px;

  color: #fff;

  font-size: 12px;

  font-weight: 700;

  line-height: 1.2;

  white-space: nowrap;
}


.hw-feature-info p {

  margin: 0;

  color:
    rgba(255,255,255,.56);

  font-size: 10px;

  line-height: 1.35;

  white-space: nowrap;
}


.hw-feature-divider {

  width: 1px;

  height: 34px;

  background:
    rgba(255,255,255,.18);
}


/* =========================================================
   ARROWS
========================================================= */

.hw-arrow {

  position: absolute;

  z-index: 20;

  top: 50%;

  width: 38px;

  height: 38px;

  padding: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  transform:
    translateY(-50%);

  border:
    1px solid
    rgba(255,255,255,.35);

  border-radius: 50%;

  background:
    rgba(0,0,0,.28);

  color: #fff;

  font-size: 30px;

  cursor: pointer;

  transition: .25s ease;
}


.hw-arrow:hover {

  color: #111;

  background: #d9ad42;

  border-color: #d9ad42;
}


.hw-arrow-left {

  left: 13px;
}


.hw-arrow-right {

  right: 13px;
}


/* =========================================================
   DOTS
========================================================= */

.hw-dots {

  position: absolute;

  z-index: 20;

  left: 50%;

  bottom: 80px;

  transform:
    translateX(-50%);

  display: flex;

  align-items: center;

  gap: 5px;
}


.hw-dot {

  width: 6px;

  height: 6px;

  padding: 0;

  border: none;

  border-radius: 20px;

  background:
    rgba(255,255,255,.55);

  cursor: pointer;
}


.hw-dot-active {

  width: 21px;

  background: #d9ad42;
}


/* =========================================================
   LARGE DESKTOP
========================================================= */

@media (min-width: 1400px) {

  .hw-hero {

    height: 570px;
  }

  .hw-title {

    font-size: 64px;
  }

  .hw-description {

    font-size: 13px;
  }

  .hw-feature-info h4 {

    font-size: 10px;
  }

  .hw-feature-info p {

    font-size: 7px;
  }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

  .hw-hero-content {

    width: calc(100% - 80px);

  }

  .hw-features {

    width: calc(100% - 80px);

  }

  .hw-title {

    font-size: 48px;
  }

  .hw-feature {

    padding: 0 7px;
  }

  .hw-feature-icon {

    width: 31px;

    height: 31px;

    min-width: 31px;
  }

  .hw-feature-info h4 {

    font-size: 8px;
  }

  .hw-feature-info p {

    font-size: 5.5px;
  }
}


/* =========================================================
   MOBILE
   IMAGE ONLY
========================================================= */

@media (max-width: 768px) {

  .hw-hero-content {

    width: 100%;

    margin: 0;

  }

  .hw-features {

    width: 100%;

    left: 0;

    transform: none;

  }

  .hw-hero {

    position: relative;

    width: 100%;

    height: 205px !important;

    min-height: 205px !important;

    margin: 0 !important;

    padding: 0 !important;

    overflow: hidden !important;

    background: #111;
  }


  /* SLIDER */

  .hw-slides {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 205px !important;

    overflow: hidden;
  }


  .hw-slide {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 205px !important;

    opacity: 0;

    transform: scale(1.02);

    transition:
      opacity .8s ease,
      transform 5s ease;
  }


  .hw-slide-active {

    opacity: 1;

    transform: scale(1);
  }


  .hw-slide img {

    width: 100%;

    height: 205px !important;

    display: block;

    object-fit: cover !important;

    object-position: center !important;
  }


  /* MOBILE IMAGE OVERLAY */

  .hw-image-overlay {

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        180deg,
        rgba(0,0,0,.02),
        rgba(0,0,0,.12)
      ) !important;
  }


  .hw-bottom-overlay {

    display: none !important;
  }


  /* HIDE DESKTOP CONTENT */

  .hw-hero-content {

    display: none !important;
  }


  /* HIDE FEATURES */

  .hw-features {

    display: none !important;
  }


  /* HIDE ARROWS */

  .hw-arrow {

    display: none !important;
  }


  /* HIDE DOTS */

  .hw-dots {

    display: none !important;
  }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 480px) {

  .hw-hero {

    height: 200px !important;

    min-height: 200px !important;

    margin: 0 !important;
  }


  .hw-slides {

    height: 200px !important;
  }


  .hw-slide {

    height: 200px !important;
  }


  .hw-slide img {

    height: 200px !important;

    object-fit: cover !important;

    object-position: center !important;
  }
}

      `}</style>
    </section>
  );
}