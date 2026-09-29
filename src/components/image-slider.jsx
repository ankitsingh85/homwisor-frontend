import { useEffect, useState } from "react";

import s1 from "../images/s1.webp";
import s2 from "../images/s2.webp";
import s3 from "../images/s3.webp";

export default function PremiumAutoSlider({ banners = [] }) {

  const fallbackSlides = [
    {
      image: s1,
    },
    {
      image: s2,
    },
    {
      image: s3,
    },
  ];

  const slides = banners.length ? banners : fallbackSlides;

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hw-image-slider">

      <div className="hw-image-slider-track">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hw-image-slide ${
              index === active ? "is-active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt="Property Banner"
            />
          </div>
        ))}

      </div>

      <style>{`

        .hw-image-slider {
          width: 100%;
          max-width: 850px;
          height: 160px;
          margin: 0 auto;
          padding: 0;
          margin-top:120px;
          position: relative;
          overflow: hidden;
          background: #fff;
          border-radius:10px;
        }

        .hw-image-slider-track {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hw-image-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;

          opacity: 0;
          visibility: hidden;

          transform: scale(1.02);

          transition:
            opacity 0.8s ease,
            transform 5s ease,
            visibility 0.8s ease;
        }

        .hw-image-slide.is-active {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }

        .hw-image-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 1000px) {
          .hw-image-slider {
            max-width: 94%;
            height: 170px;
          }
        }

        @media (max-width: 768px) {
          .hw-image-slider {
            width: 100%;
            max-width: 100%;
            height: 150px;
            display:none;
          }

          .hw-image-slider-track,
          .hw-image-slide,
          .hw-image-slide img {
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .hw-image-slider {
            height: 125px;
            display:none;
          }

          .hw-image-slider-track,
          .hw-image-slide,
          .hw-image-slide img {
            height: 125px;
          }
        }

      `}</style>

    </section>
  );
}