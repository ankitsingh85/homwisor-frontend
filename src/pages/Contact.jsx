import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Our property expert will contact you shortly.");

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h1>
            Let's Find Your
            <span> Dream Property</span>
          </h1>

          <p>
            Have questions about a property or looking
            for your next investment? Our property experts
            are here to help.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT INFO */}

          <div className="contact-info">

            <span className="section-eyebrow">
              CONTACT US
            </span>

            <h2>
              We’re Here To
              <br />
              <span>Help You</span>
            </h2>

            <p className="contact-intro">
              Whether you're buying, selling or investing
              in real estate, our team is ready to assist
              you with expert guidance and personalized
              property solutions.
            </p>

            {/* INFO CARD */}

            <div className="info-list">

              {/* PHONE */}

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <div>
                  <span>Call Us</span>

                  <a href="tel:8500900100">
                    +91 8500 900 100
                  </a>
                </div>
              </div>

              {/* EMAIL */}

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <span>Email Us</span>

                  <a href="mailto:info@homwisor.com">
                    info@homwisor.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}

              <div className="info-item">
                <div className="info-icon">
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
                </div>

                <div>
                  <span>Our Office</span>

                  <p>
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>

              {/* WORKING HOURS */}

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                    />

                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <span>Working Hours</span>

                  <p>
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/918500900100"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.44-9.89 9.9-9.89a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              Chat With Us On WhatsApp
            </a>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-card">

            <div className="form-heading">
              <span>
                SEND US A MESSAGE
              </span>

              <h2>
                How Can We
                <strong> Help You?</strong>
              </h2>

              <p>
                Fill out the form below and our team
                will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                {/* NAME */}

                <div className="form-group">
                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="form-group">
                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

              </div>

              {/* EMAIL */}

              <div className="form-group">
                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* SUBJECT */}

              <div className="form-group">
                <label>
                  I'm Interested In
                </label>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select an option
                  </option>

                  <option>
                    Buying a Property
                  </option>

                  <option>
                    Selling a Property
                  </option>

                  <option>
                    Property Investment
                  </option>

                  <option>
                    Site Visit
                  </option>

                  <option>
                    General Enquiry
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="5"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="submit-btn"
              >
                <span>
                  Send Message
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

              <p className="form-note">
                Your information is safe with us.
                We never share your details with third
                parties.
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAP / CTA
      ===================================================== */}

      {/* <section className="contact-bottom">

        <div className="contact-bottom-inner">

          <div>
            <span className="section-eyebrow">
              LET'S CONNECT
            </span>

            <h2>
              Looking For Your
              <span> Dream Home?</span>
            </h2>

            <p>
              Talk to our property experts today and
              discover premium properties across Gurugram.
            </p>
          </div>

          <a
            href="tel:8500900100"
            className="bottom-call-btn"
          >
            Call Our Experts
          </a>

        </div>

      </section> */}

      <Footer />

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        .contact-page {
          background: #fff;
          color: #111;
          font-family:
            "Manrope",
            "Inter",
            Arial,
            sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(212,175,55,.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #050505 0%,
              #0d0d0d 55%,
              #1a160d 100%
            );
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -150px;
          top: -200px;
          background: rgba(212,175,55,.10);
          filter: blur(10px);
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,.03),
              transparent 55%
            );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .contact-eyebrow,
        .section-eyebrow {
          display: inline-block;
          color: ${GOLD};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .contact-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .contact-hero h1 span {
          color: ${GOLD};
        }

        .contact-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================================
           CONTACT SECTION
        ===================================================== */

        .contact-section {
          padding: 50px 20px 0px 20px;
          background: #fff;
        }

        .contact-container {
          width: min(1180px, 100%);
          margin: 0 auto;

          display: grid;
          grid-template-columns:
            minmax(0, .9fr)
            minmax(0, 1.1fr);

          gap: 75px;
          align-items: start;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .contact-info h2 {
          margin: 13px 0 0;
          color: #09172b;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .contact-info h2 span {
          color: ${GOLD_DARK};
        }

        .contact-intro {
          max-width: 500px;
          margin: 20px 0 0;
          color: #6d7076;
          font-size: 13px;
          line-height: 1.85;
        }

        /* =====================================================
           INFO LIST
        ===================================================== */

        .info-list {
          display: grid;
          gap: 20px;
          margin-top: 35px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;
          background: #f7f3e7;
          color: ${GOLD_DARK};
        }

        .info-icon svg {
          width: 21px;
          height: 21px;
        }

        .info-item > div:last-child {
          min-width: 0;
        }

        .info-item span {
          display: block;
          color: #969696;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .info-item a,
        .info-item p {
          display: block;
          margin: 4px 0 0;
          color: #172235;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
        }

        .info-item a:hover {
          color: ${GOLD_DARK};
        }

        /* =====================================================
           WHATSAPP
        ===================================================== */

        .contact-whatsapp {
          width: fit-content;
          margin-top: 32px;

          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 12px 18px;
          border-radius: 9px;

          background: #138a42;
          color: #fff;

          text-decoration: none;
          font-size: 11px;
          font-weight: 800;

          transition: .25s ease;
        }

        .contact-whatsapp svg {
          width: 17px;
          height: 17px;
        }

        .contact-whatsapp:hover {
          background: #0e7035;
          transform: translateY(-2px);
        }

        /* =====================================================
           FORM CARD
        ===================================================== */

        .contact-form-card {
          padding: 35px;
          border: 1px solid #e8e6df;
          border-radius: 22px;
          background: #fff;

          box-shadow:
            0 20px 60px rgba(10,20,40,.07);
        }

        .form-heading > span {
          color: ${GOLD_DARK};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .form-heading h2 {
          margin: 8px 0 0;
          color: #09172b;
          font-size: 27px;
          line-height: 1.25;
          font-weight: 800;
        }

        .form-heading h2 strong {
          color: ${GOLD_DARK};
        }

        .form-heading p {
          margin: 8px 0 25px;
          color: #777;
          font-size: 11px;
          line-height: 1.6;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form-card form {
          display: grid;
          gap: 17px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .form-group label {
          color: #333;
          font-size: 10px;
          font-weight: 800;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #e4e4e4;
          border-radius: 9px;
          outline: none;
          background: #fff;

          padding: 12px 13px;

          color: #222;
          font-family: inherit;
          font-size: 11px;

          transition: .2s ease;
        }

        .form-group input,
        .form-group select {
          height: 43px;
        }

        .form-group textarea {
          min-height: 115px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: ${GOLD};
          box-shadow:
            0 0 0 3px rgba(212,175,55,.10);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #aaa;
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .submit-btn {
          width: 100%;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: none;
          border-radius: 9px;

          background: #09172b;
          color: #fff;

          font-family: inherit;
          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
          transition: .25s ease;
        }

        .submit-btn svg {
          width: 16px;
          height: 16px;
        }

        .submit-btn:hover {
          background: ${GOLD_DARK};
          transform: translateY(-1px);
        }

        .form-note {
          margin: -4px 0 0;
          text-align: center;
          color: #999;
          font-size: 9px;
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .contact-bottom {
          padding: 70px 20px;
          background: #09172b;
        }

        .contact-bottom-inner {
          width: min(1100px, 100%);
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .contact-bottom h2 {
          margin: 10px 0 0;
          color: #fff;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 850;
        }

        .contact-bottom h2 span {
          color: ${GOLD};
        }

        .contact-bottom p {
          max-width: 570px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.62);
          font-size: 12px;
          line-height: 1.7;
        }

        .bottom-call-btn {
          flex-shrink: 0;

          padding: 13px 22px;
          border-radius: 9px;

          background: ${GOLD};
          color: #111;

          text-decoration: none;
          font-size: 11px;
          font-weight: 850;

          transition: .25s ease;
        }

        .bottom-call-btn:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .contact-container {
            grid-template-columns: 1fr;
            gap: 50px;
            max-width: 700px;
          }

          .contact-info {
            text-align: center;
          }

          .contact-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .info-list {
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .contact-whatsapp {
            margin-left: auto;
            margin-right: auto;
          }

          .contact-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .contact-hero {
            min-height: 390px;
          }

          .contact-hero-content {
            padding: 110px 18px 55px;
          }

          .contact-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .contact-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .contact-section {
            padding: 50px 20px 0px 20px;
          }

          .contact-info h2 {
            font-size: 34px;
          }

          .contact-intro {
            font-size: 12px;
          }

          .info-list {
            gap: 18px;
            margin-top: 28px;
          }

          .info-icon {
            width: 44px;
            height: 44px;
          }

          .contact-whatsapp {
            width: 100%;
            justify-content: center;
          }

          .contact-form-card {
            padding: 22px 17px;
            border-radius: 17px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-heading h2 {
            font-size: 24px;
          }

          .contact-bottom {
            padding: 55px 18px;
          }

          .contact-bottom h2 {
            font-size: 28px;
          }

          .bottom-call-btn {
            width: 100%;
            text-align: center;
          }

        }

      `}</style>
    </div>
  );
}
