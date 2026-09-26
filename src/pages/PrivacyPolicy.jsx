import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const CREAM = "#F7F5EF";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Header />

      {/* HERO */}
      <section className="privacy-hero">
        <div className="privacy-hero-glow" />
        <div className="privacy-hero-circle" />

        <div className="privacy-hero-content">
          <span className="privacy-eyebrow">HOMWISOR CONSULTANTS PVT. LTD.</span>

          <h1>
            Privacy <span>Policy.</span>
          </h1>

          <p>
            Your privacy matters to us. Learn how Homwisor collects, uses,
            protects and manages information when you interact with our
            website and real estate services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="privacy-main">
        <div className="privacy-layout">

          {/* SIDEBAR */}
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar-card">
              <span>ON THIS PAGE</span>
              <a href="#introduction">Introduction</a>
              <a href="#information">Information We Collect</a>
              <a href="#use">How We Use Information</a>
              <a href="#sharing">Information Sharing</a>
              <a href="#cookies">Cookies & Tracking</a>
              <a href="#security">Data Security</a>
              <a href="#rights">Your Rights</a>
              <a href="#third-party">Third-Party Links</a>
              <a href="#children">Children's Privacy</a>
              <a href="#changes">Policy Changes</a>
              <a href="#contact">Contact Us</a>
            </div>
          </aside>

          {/* POLICY */}
          <article className="privacy-content">

            <div className="policy-intro" id="introduction">
              <span className="section-label">PRIVACY & DATA</span>
              <h2>Privacy Policy</h2>
              <p className="updated">Last updated: September 24, 2026</p>
              <p>
                Homwisor Consultants Pvt. Ltd. ("Homwisor", "we", "us", or
                "our") respects your privacy and is committed to protecting
                the personal information you share with us. This Privacy
                Policy explains how information may be collected, used,
                stored and disclosed when you visit our website, submit an
                enquiry, request a property consultation, or otherwise
                interact with our services.
              </p>
            </div>

            <section id="information">
              <h3>1. Information We Collect</h3>
              <p>
                Depending on how you interact with Homwisor, we may collect
                information that you voluntarily provide, including your
                name, phone number, email address, property requirements,
                location preferences, budget information and messages or
                enquiries submitted through our forms.
              </p>
              <p>
                We may also receive basic technical information such as
                browser type, device information, IP address, referring pages,
                pages visited and general website usage information.
              </p>
            </section>

            <section id="use">
              <h3>2. How We Use Your Information</h3>
              <p>We may use the information we collect to:</p>
              <ul>
                <li>Respond to property enquiries and requests.</li>
                <li>Provide property recommendations and consultation.</li>
                <li>Arrange site visits, callbacks or other requested services.</li>
                <li>Communicate with you about properties, services and enquiries.</li>
                <li>Improve our website, services and customer experience.</li>
                <li>Maintain website security and prevent misuse or fraud.</li>
                <li>Comply with applicable legal and regulatory requirements.</li>
              </ul>
            </section>

            <section id="sharing">
              <h3>3. Information Sharing & Disclosure</h3>
              <p>
                Homwisor does not sell personal information as a business
                practice. Information may be shared when reasonably required
                to provide a service you have requested, operate our website,
                work with relevant service providers, protect our legal
                interests, or comply with applicable law.
              </p>
              <p>
                Where a property enquiry requires communication with a
                developer, property owner, service provider or other relevant
                party, we may share the information necessary to respond to
                that enquiry.
              </p>
            </section>

            <section id="cookies">
              <h3>4. Cookies & Tracking Technologies</h3>
              <p>
                Our website may use cookies and similar technologies to
                remember preferences, understand website usage, measure
                performance and improve the user experience.
              </p>
              <p>
                You can control or disable cookies through your browser
                settings. Some website functionality may be affected when
                cookies are disabled.
              </p>
            </section>

            <section id="security">
              <h3>5. Data Security</h3>
              <p>
                We take reasonable administrative, technical and
                organizational measures to protect personal information from
                unauthorized access, misuse, alteration or disclosure.
              </p>
              <p>
                However, no method of transmission or electronic storage can
                be guaranteed to be completely secure. You should therefore
                avoid sending highly sensitive information through ordinary
                website forms unless specifically requested through a secure
                channel.
              </p>
            </section>

            <section id="rights">
              <h3>6. Your Privacy Rights</h3>
              <p>
                Subject to applicable law, you may request access to,
                correction of, or deletion of personal information that we
                hold about you. You may also ask us to stop or limit certain
                communications.
              </p>
              <p>
                To make a privacy-related request, contact us using the
                details provided below. We may need to verify your identity
                before completing a request.
              </p>
            </section>

            <section id="third-party">
              <h3>7. Third-Party Websites & Services</h3>
              <p>
                Our website may contain links to third-party websites,
                platforms or services. Those third parties operate under
                their own privacy policies and terms. Homwisor is not
                responsible for the privacy practices or content of external
                websites.
              </p>
            </section>

            <section id="children">
              <h3>8. Children's Privacy</h3>
              <p>
                Our services are intended for adults and property-related
                users. We do not knowingly request personal information from
                children for the purpose of providing real estate services.
              </p>
            </section>

            <section id="retention">
              <h3>9. Data Retention</h3>
              <p>
                We retain personal information for as long as reasonably
                necessary for the purposes described in this policy, to
                provide requested services, maintain business records,
                resolve disputes and meet applicable legal obligations.
              </p>
            </section>

            <section id="changes">
              <h3>10. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes to our services, website, legal requirements
                or privacy practices. The updated version will be published
                on this page with a revised "Last updated" date.
              </p>
            </section>

            <section id="contact" className="privacy-contact-box">
              <span className="section-label">CONTACT US</span>
              <h3>Questions about your privacy?</h3>
              <p>
                If you have questions, requests or concerns regarding this
                Privacy Policy or the way your information is handled, please
                contact Homwisor.
              </p>

              <div className="privacy-contact-grid">
                <a href="mailto:info@homwisor.com">
                  <small>EMAIL</small>
                  info@homwisor.com
                </a>

                <a href="tel:8500900100">
                  <small>PHONE</small>
                  +91 8500 900 100
                </a>

                <div>
                  <small>OFFICE</small>
                  Gurugram, Haryana, India
                </div>
              </div>
            </section>

            <div className="privacy-note">
              <strong>Important:</strong> This page is a website privacy
              policy template for Homwisor and should be reviewed and
              finalized according to the company's actual data practices,
              third-party tools, consent mechanisms and applicable laws.
            </div>

          </article>
        </div>
      </main>

      <Footer />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100vh;
          background: ${CREAM};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .privacy-page,
        .privacy-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .privacy-hero {
          min-height: 430px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;
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

        .privacy-hero::before {
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

        .privacy-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .privacy-hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          right: 7%;
          top: -80px;
          border-radius: 50%;
          background: rgba(212,175,55,.08);
          filter: blur(80px);
        }

        .privacy-hero-circle {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          bottom: -300px;
          border: 1px solid rgba(212,175,55,.28);
          border-radius: 50%;
        }

        .privacy-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .privacy-eyebrow,
        .section-label {
          display: inline-block;
          color: ${GOLD};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .privacy-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .privacy-hero h1 span {
          color: ${GOLD};
        }

        .privacy-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* MAIN */
        .privacy-main {
          padding: 70px 20px;
          background: #fff;
        }

        .privacy-layout {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          gap: 55px;
          align-items: start;
        }

        /* SIDEBAR */
        .privacy-sidebar {
          position: sticky;
          top: 105px;
        }

        .privacy-sidebar-card {
          padding: 24px 20px;
          border: 1px solid #e8e2d5;
          border-radius: 15px;
          background: ${CREAM};
        }

        .privacy-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${GOLD_DARK};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .privacy-sidebar-card a {
          display: block;
          padding: 9px 0;
          color: #555;
          border-bottom: 1px solid #e9e3d7;
          text-decoration: none;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          transition: .2s ease;
        }

        .privacy-sidebar-card a:last-child {
          border-bottom: 0;
        }

        .privacy-sidebar-card a:hover {
          color: ${GOLD_DARK};
          padding-left: 4px;
        }

        /* CONTENT */
        .privacy-content {
          min-width: 0;
          max-width: 800px;
        }

        .policy-intro {
          padding-bottom: 30px;
          border-bottom: 1px solid #e7e1d6;
        }

        .policy-intro h2 {
          margin: 10px 0 5px;
          color: #111;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .updated {
          margin: 0 0 20px;
          color: #999 !important;
          font-size: 10px !important;
        }

        .privacy-content section:not(.privacy-contact-box) {
          padding: 31px 0;
          border-bottom: 1px solid #eeeae2;
          scroll-margin-top: 100px;
        }

        .privacy-content h3 {
          margin: 0 0 13px;
          color: #111;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: -.4px;
        }

        .privacy-content p,
        .privacy-content li {
          color: #656565;
          font-size: 13px;
          line-height: 1.9;
        }

        .privacy-content p {
          margin: 0 0 13px;
        }

        .privacy-content p:last-child {
          margin-bottom: 0;
        }

        .privacy-content ul {
          margin: 8px 0 0;
          padding-left: 20px;
        }

        .privacy-content li {
          padding: 3px 0;
        }

        /* CONTACT */
        .privacy-contact-box {
          margin-top: 30px;
          padding: 30px;
          border: 1px solid #e6ddca;
          border-radius: 18px;
          background: ${CREAM};
          scroll-margin-top: 100px;
        }

        .privacy-contact-box h3 {
          margin: 9px 0 8px;
          font-size: 25px;
        }

        .privacy-contact-box > p {
          max-width: 650px;
          margin-bottom: 22px;
        }

        .privacy-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .privacy-contact-grid a,
        .privacy-contact-grid div {
          display: block;
          padding: 15px;
          border: 1px solid #e6dfd0;
          border-radius: 10px;
          background: #fff;
          color: #222;
          text-decoration: none;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.5;
        }

        .privacy-contact-grid a:hover {
          border-color: ${GOLD};
        }

        .privacy-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${GOLD_DARK};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .privacy-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${GOLD};
          background: #faf8f2;
          color: #777;
          font-size: 10px;
          line-height: 1.7;
        }

        .privacy-note strong {
          color: #333;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .privacy-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .privacy-sidebar {
            position: static;
          }

          .privacy-sidebar-card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .privacy-sidebar-card > span {
            grid-column: 1 / -1;
          }

          .privacy-sidebar-card a {
            border-bottom: 1px solid #e9e3d7;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .privacy-hero {
            min-height: 390px;
          }

          .privacy-hero-content {
            padding: 110px 18px 55px;
          }

          .privacy-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .privacy-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .privacy-main {
            padding: 42px 16px;
          }

          .privacy-sidebar-card {
            grid-template-columns: 1fr 1fr;
            padding: 18px 15px;
          }

          .privacy-content h3 {
            font-size: 18px;
          }

          .privacy-content p,
          .privacy-content li {
            font-size: 12px;
            line-height: 1.8;
          }

          .policy-intro h2 {
            font-size: 32px;
          }

          .privacy-contact-box {
            padding: 22px 17px;
          }

          .privacy-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .privacy-hero h1 {
            font-size: 38px;
          }

          .privacy-sidebar-card {
            grid-template-columns: 1fr;
          }

          .privacy-sidebar-card a {
            font-size: 9.5px;
          }
        }
      `}</style>
    </div>
  );
}
