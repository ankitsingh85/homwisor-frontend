import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const CREAM = "#F7F5EF";

export default function TermsAndConditions() {
  return (
    <div className="terms-page">
      <Header />

      {/* HERO */}
      <section className="terms-hero">
        <div className="terms-hero-glow" />
        <div className="terms-hero-circle" />

        <div className="terms-hero-content">
          <span className="terms-eyebrow">HOMWISOR CONSULTANTS PVT. LTD.</span>

          <h1>
            Terms & <span>Conditions.</span>
          </h1>

          <p>
            Please read these terms carefully before using the Homwisor
            website, property listings, enquiry services and real estate
            consultation services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="terms-main">
        <div className="terms-layout">

          {/* SIDEBAR */}
          <aside className="terms-sidebar">
            <div className="terms-sidebar-card">
              <span>ON THIS PAGE</span>
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#about">About Homwisor</a>
              <a href="#use">Use of Website</a>
              <a href="#listings">Property Listings</a>
              <a href="#enquiries">Enquiries & Communication</a>
              <a href="#accuracy">Information Accuracy</a>
              <a href="#transactions">Property Transactions</a>
              <a href="#intellectual">Intellectual Property</a>
              <a href="#third-party">Third-Party Services</a>
              <a href="#liability">Limitation of Liability</a>
              <a href="#privacy">Privacy</a>
              <a href="#changes">Changes to Terms</a>
              <a href="#contact">Contact Us</a>
            </div>
          </aside>

          {/* TERMS */}
          <article className="terms-content">

            <div className="terms-intro" id="acceptance">
              <span className="section-label">LEGAL INFORMATION</span>
              <h2>Terms & Conditions</h2>
              <p className="updated">Last updated: September 24, 2026</p>

              <p>
                These Terms and Conditions ("Terms") govern your access to and
                use of the Homwisor website and related services operated by
                Homwisor Consultant Private Limited ("Homwisor", "we", "us",
                or "our").
              </p>

              <p>
                By accessing or using this website, submitting an enquiry,
                requesting a property consultation, contacting our team, or
                otherwise using our services, you acknowledge that you have
                read and understood these Terms and agree to be bound by them.
              </p>
            </div>

            <section id="about">
              <h3>1. About Homwisor</h3>
              <p>
                Homwisor is a Gurugram-based real estate platform and agency
                that helps property buyers, sellers, tenants and landlords
                connect and transact with greater confidence. Our services
                include property search and listings, buyer and seller
                facilitation, market guidance and real estate advisory.
              </p>
              <p>
                Homwisor's public company information states that the business
                operates as Homwisor Consultant Private Limited and is
                registered as a real estate agent with the Haryana Real Estate
                Regulatory Authority (HARERA), Gurugram.
              </p>
            </section>

            <section id="use">
              <h3>2. Use of the Website</h3>
              <p>
                You agree to use the website only for lawful purposes and in
                a manner that does not interfere with the operation,
                security, availability or integrity of the website.
              </p>

              <ul>
                <li>
                  You must provide accurate information when submitting forms
                  or enquiries.
                </li>
                <li>
                  You must not use the website for fraudulent, misleading or
                  unlawful activities.
                </li>
                <li>
                  You must not attempt to gain unauthorized access to any
                  system, account, database or website functionality.
                </li>
                <li>
                  You must not copy, scrape, reproduce or commercially exploit
                  website content without permission.
                </li>
              </ul>
            </section>

            <section id="listings">
              <h3>3. Property Listings & Information</h3>
              <p>
                Property listings may include information such as project
                names, locations, prices, sizes, configurations, availability,
                amenities, photographs and other property-related details.
              </p>
              <p>
                Property information may be supplied or updated by developers,
                owners, agents or other relevant sources. Prices,
                availability, specifications, offers and other project
                details may change without prior notice.
              </p>
              <p>
                A listing or enquiry on Homwisor does not by itself constitute
                an offer, reservation, allotment, sale agreement or guarantee
                of availability.
              </p>
            </section>

            <section id="enquiries">
              <h3>4. Property Enquiries & Communication</h3>
              <p>
                When you submit an enquiry, you authorize Homwisor and
                relevant property or service representatives to contact you
                regarding the enquiry through phone, email, WhatsApp or other
                appropriate communication channels.
              </p>
              <p>
                You are responsible for ensuring that the contact information
                provided by you is correct and belongs to you or that you are
                otherwise authorized to provide it.
              </p>
            </section>

            <section id="accuracy">
              <h3>5. Accuracy of Information</h3>
              <p>
                Homwisor aims to provide useful and current property
                information, but information on the website may contain
                errors, omissions, outdated details or information supplied by
                third parties.
              </p>
              <p>
                Users should independently verify material information,
                including title, approvals, RERA registration, pricing,
                availability, specifications, payment schedules, possession
                timelines and other transaction-related details before making
                a decision.
              </p>
            </section>

            <section id="transactions">
              <h3>6. Property Transactions</h3>
              <p>
                Homwisor may facilitate introductions, property visits,
                communication and other real estate assistance. Unless
                expressly agreed otherwise in writing, Homwisor is not the
                seller, developer, owner or legal representative of every
                property displayed on the website.
              </p>
              <p>
                Any purchase, sale, lease, booking, allotment or other
                property transaction is subject to separate documentation and
                agreements between the relevant parties.
              </p>
              <p>
                Users should obtain independent legal, financial and tax
                advice where appropriate before entering into a property
                transaction.
              </p>
            </section>

            <section id="rera">
              <h3>7. Regulatory & RERA Information</h3>
              <p>
                Homwisor's public company information identifies the business
                as a HARERA-registered real estate agent and states that it
                facilitates transactions in accordance with the Real Estate
                (Regulation and Development) Act, 2016 and applicable Haryana
                rules.
              </p>
              <p>
                Users should independently verify the current registration
                status and the RERA registration of any relevant real estate
                project before proceeding with a transaction.
              </p>
            </section>

            <section id="intellectual">
              <h3>8. Intellectual Property</h3>
              <p>
                Unless otherwise stated, the website's design, branding,
                logos, text, graphics, photographs, layout, software and
                other original materials are owned by or licensed to
                Homwisor.
              </p>
              <p>
                You may view and use the website for personal and legitimate
                property-related purposes. You may not reproduce, distribute,
                modify, publish, sell or commercially exploit website
                materials without prior written permission.
              </p>
            </section>

            <section id="third-party">
              <h3>9. Third-Party Websites & Services</h3>
              <p>
                The website may contain links, integrations or references to
                third-party websites, developers, property owners, service
                providers, payment providers, maps, social platforms or other
                external services.
              </p>
              <p>
                Third-party services are governed by their own terms and
                policies. Homwisor is not responsible for the independent
                operation, availability, content or privacy practices of
                third-party websites and services.
              </p>
            </section>

            <section id="liability">
              <h3>10. Disclaimer & Limitation of Liability</h3>
              <p>
                The website and its information are provided for general
                property-search, information and consultation purposes.
                Homwisor does not guarantee that the website or every piece of
                information will always be complete, current, uninterrupted
                or error-free.
              </p>
              <p>
                To the extent permitted by applicable law, Homwisor will not
                be responsible for losses arising solely from reliance on
                unverified property information, third-party information,
                changes in property availability or pricing, transaction
                decisions, website interruptions, or events beyond its
                reasonable control.
              </p>
            </section>

            <section id="privacy">
              <h3>11. Privacy</h3>
              <p>
                Your use of the website may involve the collection and
                processing of personal information. Please review our
                <a className="inline-link" href="/privacy-policy">
                  {" "}Privacy Policy
                </a>
                {" "}for information about how personal data may be collected,
                used, stored and handled.
              </p>
            </section>

            <section id="changes">
              <h3>12. Changes to These Terms</h3>
              <p>
                Homwisor may update these Terms from time to time to reflect
                changes to the website, services, business practices or
                applicable legal requirements.
              </p>
              <p>
                Updated Terms will be published on this page with a revised
                "Last updated" date. Your continued use of the website after
                an update constitutes acceptance of the revised Terms to the
                extent permitted by applicable law.
              </p>
            </section>

            <section id="contact" className="terms-contact-box">
              <span className="section-label">CONTACT US</span>
              <h3>Questions about these Terms?</h3>
              <p>
                If you have questions about these Terms and Conditions or
                Homwisor's services, please contact the company using the
                information below.
              </p>

              <div className="terms-contact-grid">
                <a href="mailto:homwisor@gmail.com">
                  <small>EMAIL</small>
                  homwisor@gmail.com
                </a>

                <a href="tel:9090101401">
                  <small>PHONE</small>
                  +91 9090 101 401
                </a>

                <div>
                  <small>REGISTERED OFFICE</small>
                  Unit No. 704, 7th Floor, ILD Trade Centre,
                  Sohna Road, Village Tikri, Sector-47,
                  Gurugram, Haryana – 122018
                </div>
              </div>
            </section>

            <div className="terms-note">
              <strong>Important:</strong> This page is a website terms
              template prepared from Homwisor's publicly available company
              information and the requested website context. It should be
              reviewed by the company's legal counsel and aligned with its
              actual contracts, services, policies and applicable laws before
              publication.
            </div>

          </article>
        </div>
      </main>

      <Footer />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .terms-page {
          min-height: 100vh;
          background: ${CREAM};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .terms-page,
        .terms-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        /* HERO */
        .terms-hero {
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

        .terms-hero::before {
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

        .terms-hero::after {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: -180px;
          bottom: -220px;
          background: rgba(212,175,55,.06);
        }

        .terms-hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          right: 7%;
          top: -80px;
          border-radius: 50%;
          background: rgba(212,175,55,.08);
          filter: blur(80px);
        }

        .terms-hero-circle {
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          bottom: -300px;
          border: 1px solid rgba(212,175,55,.28);
          border-radius: 50%;
        }

        .terms-hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 120px 20px 70px;
        }

        .terms-eyebrow,
        .section-label {
          display: inline-block;
          color: ${GOLD};
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .terms-hero h1 {
          margin: 15px 0 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .terms-hero h1 span {
          color: ${GOLD};
        }

        .terms-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.8;
        }

        /* MAIN */
        .terms-main {
          padding: 70px 20px;
          background: #fff;
        }

        .terms-layout {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          gap: 55px;
          align-items: start;
        }

        /* SIDEBAR */
        .terms-sidebar {
          position: sticky;
          top: 105px;
        }

        .terms-sidebar-card {
          padding: 24px 20px;
          border: 1px solid #e8e2d5;
          border-radius: 15px;
          background: ${CREAM};
        }

        .terms-sidebar-card > span {
          display: block;
          margin-bottom: 15px;
          color: ${GOLD_DARK};
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .terms-sidebar-card a {
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

        .terms-sidebar-card a:last-child {
          border-bottom: 0;
        }

        .terms-sidebar-card a:hover {
          color: ${GOLD_DARK};
          padding-left: 4px;
        }

        /* CONTENT */
        .terms-content {
          min-width: 0;
          max-width: 800px;
        }

        .terms-intro {
          padding-bottom: 30px;
          border-bottom: 1px solid #e7e1d6;
        }

        .terms-intro h2 {
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

        .terms-content section:not(.terms-contact-box) {
          padding: 31px 0;
          border-bottom: 1px solid #eeeae2;
          scroll-margin-top: 100px;
        }

        .terms-content h3 {
          margin: 0 0 13px;
          color: #111;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: -.4px;
        }

        .terms-content p,
        .terms-content li {
          color: #656565;
          font-size: 13px;
          line-height: 1.9;
        }

        .terms-content p {
          margin: 0 0 13px;
        }

        .terms-content p:last-child {
          margin-bottom: 0;
        }

        .terms-content ul {
          margin: 8px 0 0;
          padding-left: 20px;
        }

        .terms-content li {
          padding: 3px 0;
        }

        .inline-link {
          color: ${GOLD_DARK};
          font-weight: 800;
          text-decoration: none;
        }

        .inline-link:hover {
          color: #111;
        }

        /* CONTACT */
        .terms-contact-box {
          margin-top: 30px;
          padding: 30px;
          border: 1px solid #e6ddca;
          border-radius: 18px;
          background: ${CREAM};
          scroll-margin-top: 100px;
        }

        .terms-contact-box h3 {
          margin: 9px 0 8px;
          font-size: 25px;
        }

        .terms-contact-box > p {
          max-width: 650px;
          margin-bottom: 22px;
        }

        .terms-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.4fr;
          gap: 10px;
        }

        .terms-contact-grid a,
        .terms-contact-grid div {
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

        .terms-contact-grid a:hover {
          border-color: ${GOLD};
        }

        .terms-contact-grid small {
          display: block;
          margin-bottom: 5px;
          color: ${GOLD_DARK};
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .terms-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid ${GOLD};
          background: #faf8f2;
          color: #777;
          font-size: 10px;
          line-height: 1.7;
        }

        .terms-note strong {
          color: #333;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .terms-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .terms-sidebar {
            position: static;
          }

          .terms-sidebar-card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .terms-sidebar-card > span {
            grid-column: 1 / -1;
          }

          .terms-sidebar-card a {
            border-bottom: 1px solid #e9e3d7;
          }

          .terms-contact-grid {
            grid-template-columns: 1fr 1fr;
          }

          .terms-contact-grid div {
            grid-column: 1 / -1;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .terms-hero {
            min-height: 390px;
          }

          .terms-hero-content {
            padding: 110px 18px 55px;
          }

          .terms-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .terms-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .terms-main {
            padding: 42px 16px;
          }

          .terms-sidebar-card {
            grid-template-columns: 1fr 1fr;
            padding: 18px 15px;
          }

          .terms-content h3 {
            font-size: 18px;
          }

          .terms-content p,
          .terms-content li {
            font-size: 12px;
            line-height: 1.8;
          }

          .terms-intro h2 {
            font-size: 32px;
          }

          .terms-contact-box {
            padding: 22px 17px;
          }

          .terms-contact-grid {
            grid-template-columns: 1fr;
          }

          .terms-contact-grid div {
            grid-column: auto;
          }
        }

        @media (max-width: 420px) {
          .terms-hero h1 {
            font-size: 38px;
          }

          .terms-sidebar-card {
            grid-template-columns: 1fr;
          }

          .terms-sidebar-card a {
            font-size: 9.5px;
          }
        }
      `}</style>
    </div>
  );
}
