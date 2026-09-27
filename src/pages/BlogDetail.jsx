import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const CREAM = "#F7F5EF";

const posts = [
  {
    category: "Real Estate News",
    date: "JUL 30, 2026",
    title: "Moti Nagar Metro Station on Delhi Metro Blue Line",
    excerpt:
      "Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "Moti Nagar Metro Station and Connectivity",
        text: "Moti Nagar Metro Station is an important connectivity point on Delhi Metro’s Blue Line. Its location provides convenient access to several residential and commercial areas across West Delhi.",
      },
      {
        heading: "Why Connectivity Matters for Real Estate",
        text: "Metro connectivity is one of the major factors considered by homebuyers and property investors. Areas with convenient access to public transportation can provide easier daily commuting and better accessibility to important parts of the city.",
      },
      {
        heading: "Real Estate Around Moti Nagar",
        text: "The Moti Nagar area has a mix of residential and commercial developments. Its proximity to established markets, offices, educational institutions and transportation infrastructure makes the locality an important part of West Delhi’s real estate landscape.",
      },
      {
        heading: "Blue Line Advantage",
        text: "The Delhi Metro Blue Line connects several important parts of Delhi NCR. For residents, this connectivity can reduce dependence on private transportation and make regular travel more convenient.",
      },
    ],
  },

  {
    category: "Gurgaon",
    date: "JUL 29, 2026",
    title: "BPTP Downtown 66 Phase 2 Is Here",
    excerpt:
      "A closer look at the new phase and what buyers should know about the Gurgaon development.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "BPTP Downtown 66 Phase 2",
        text: "BPTP Downtown 66 Phase 2 introduces another residential development opportunity in Gurgaon. The project is positioned for buyers looking at residential options in the growing Gurgaon market.",
      },
      {
        heading: "Location and Connectivity",
        text: "Location and connectivity remain important considerations for anyone evaluating a property in Gurgaon. Access to major roads, commercial districts and everyday amenities can influence the convenience of a residential development.",
      },
      {
        heading: "What Buyers Should Consider",
        text: "Before making a property decision, buyers should evaluate the project location, available amenities, developer information, pricing, approvals and future infrastructure around the development.",
      },
    ],
  },

  {
    category: "Delhi NCR",
    date: "JUL 28, 2026",
    title: "Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",
    excerpt:
      "Understand locality, connectivity and the changing real estate landscape of Sector 49 Gurgaon.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "Sector 49 Gurgaon",
        text: "Sector 49 is an established residential locality in Gurgaon with access to residential communities, commercial spaces and daily conveniences.",
      },
      {
        heading: "Connectivity and Infrastructure",
        text: "Connectivity is an important factor when evaluating Sector 49. Road infrastructure and access to major parts of Gurgaon can influence both end-user convenience and property demand.",
      },
      {
        heading: "Property Buying Considerations",
        text: "Homebuyers should compare property types, location, amenities, developer background, pricing and connectivity before selecting a property in the area.",
      },
    ],
  },

  {
    category: "Investment",
    date: "JUL 26, 2026",
    title: "How to Choose the Right Property Investment in NCR",
    excerpt:
      "Key factors to consider before investing in residential or commercial property across NCR.",
    image:
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "Start With Your Investment Objective",
        text: "The first step in selecting a property investment is understanding your objective. Different buyers may prioritize rental income, long-term appreciation, personal use or portfolio diversification.",
      },
      {
        heading: "Location Is Important",
        text: "Location can influence accessibility, demand and the surrounding development environment. Buyers should consider connectivity, employment hubs, social infrastructure and upcoming infrastructure.",
      },
      {
        heading: "Evaluate the Property Carefully",
        text: "Before investing, review the property configuration, developer information, approvals, pricing, maintenance costs and surrounding infrastructure.",
      },
      {
        heading: "Compare Multiple Options",
        text: "Comparing multiple properties on location, price, specifications and future development can help buyers understand the differences between available investment opportunities.",
      },
    ],
  },

  {
    category: "Property Guide",
    date: "JUL 24, 2026",
    title: "5 Things to Check Before Buying a Property",
    excerpt:
      "A practical checklist covering location, approvals, developer background, pricing and future connectivity.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "1. Location",
        text: "Check the property's location and its accessibility to roads, public transportation, schools, hospitals, offices and everyday amenities.",
      },
      {
        heading: "2. Approvals and Documentation",
        text: "Review the relevant property documentation and approvals before making a purchase decision.",
      },
      {
        heading: "3. Developer Background",
        text: "Research the developer, previous projects and available project information to understand the development history.",
      },
      {
        heading: "4. Pricing",
        text: "Compare the property's price with similar properties in the surrounding area. Also consider additional costs associated with purchasing and maintaining the property.",
      },
      {
        heading: "5. Future Connectivity",
        text: "Consider planned infrastructure and connectivity improvements around the property and understand how they may affect accessibility.",
      },
    ],
  },

  {
    category: "Gurgaon",
    date: "JUL 22, 2026",
    title: "Why New Gurgaon Continues to Attract Homebuyers",
    excerpt:
      "Explore infrastructure, connectivity and residential development shaping New Gurgaon.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    content: [
      {
        heading: "Growth of New Gurgaon",
        text: "New Gurgaon has developed into an important residential growth area with expanding residential communities and supporting infrastructure.",
      },
      {
        heading: "Infrastructure and Connectivity",
        text: "Connectivity to major roads, employment areas and other parts of Gurgaon is an important factor for homebuyers evaluating properties in New Gurgaon.",
      },
      {
        heading: "Residential Development",
        text: "The area offers different residential options and continues to see development of housing communities and supporting facilities.",
      },
      {
        heading: "Things Homebuyers Should Check",
        text: "Homebuyers should evaluate the exact location, connectivity, developer details, project specifications, amenities, pricing and surrounding infrastructure before selecting a property.",
      },
    ],
  },
];

const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function BlogDetail() {
  const { slug } = useParams();

  const post = posts.find((item) => createSlug(item.title) === slug);

  if (!post) {
    return (
      <div className="blog-detail-page">
        <Header />

        <main className="blog-not-found">
          <div className="blog-detail-container">
            <div className="blog-detail-eyebrow">HOMWISOR INSIGHTS</div>

            <h1>Article Not Found</h1>

            <p>
              The article you are looking for does not exist or may have been
              moved.
            </p>

            <Link to="/blog" className="blog-back-btn">
              ← Back to Blog
            </Link>
          </div>
        </main>

        <Footer />

        <style>{`
          .blog-detail-page {
            min-height: 100vh;
            background: ${CREAM};
            color: #111;
            font-family: "Manrope", "Inter", Arial, sans-serif;
          }

          .blog-not-found {
            min-height: 65vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 120px 20px 80px;
          }

          .blog-detail-container {
            width: min(100% - 40px, 920px);
            margin: 0 auto;
          }

          .blog-detail-eyebrow {
            color: ${GOLD_DARK};
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2.4px;
          }

          .blog-not-found h1 {
            margin: 14px 0;
            font-size: clamp(38px, 6vw, 62px);
            font-weight: 900;
            letter-spacing: -2px;
          }

          .blog-not-found p {
            color: #777;
            font-size: 14px;
            line-height: 1.8;
          }

          .blog-back-btn {
            display: inline-flex;
            margin-top: 25px;
            padding: 13px 20px;
            border-radius: 8px;
            background: #111;
            color: ${GOLD};
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
          }

          @media (max-width: 600px) {
            .blog-detail-container {
              width: min(100% - 24px, 920px);
            }
          }
        `}</style>
      </div>
    );
  }

  const relatedPosts = posts
    .filter((item) => item.title !== post.title)
    .slice(0, 4);

  return (
    <div className="blog-detail-page">
      <Header />

      {/* HERO */}
      <section className="blog-detail-hero">
        <img
          src={post.image}
          alt={post.title}
          className="blog-detail-hero-image"
        />

        <div className="blog-detail-hero-overlay" />

        <div className="blog-detail-hero-content">
          <div className="blog-detail-container">

            <div className="blog-hero-top">
              <Link to="/blog" className="blog-back-link">
                ← Back to Insights
              </Link>

              <div className="blog-detail-category">
                {post.category}
              </div>
            </div>

            <h1>{post.title}</h1>

            <div className="blog-detail-meta">
              <span>{post.date}</span>
              <span className="meta-dot">•</span>
              <span>HOMWISOR INSIGHTS</span>
            </div>

          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <main>
        <section className="blog-detail-main">
          <div className="blog-detail-container article-layout">

            {/* CONTENT */}
            <article className="article-content">
              <p className="article-intro">{post.excerpt}</p>

              {post.content.map((section, index) => (
                <div className="article-section" key={index}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              ))}

              <div className="article-cta">
                <div>
                  <div className="article-cta-eyebrow">
                    HOMWISOR
                  </div>

                  <h3>
                    Looking for the right property?
                  </h3>

                  <p>
                    Talk to our property experts for assistance with your
                    property search.
                  </p>
                </div>

                <Link to="/contact/" className="article-cta-btn">
                  Talk to an Expert →
                </Link>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="article-sidebar">

              <div className="sidebar-card">
                <div className="sidebar-eyebrow">
                  ARTICLE DETAILS
                </div>

                <div className="sidebar-row">
                  <span>Category</span>
                  <strong>{post.category}</strong>
                </div>

                <div className="sidebar-row">
                  <span>Published</span>
                  <strong>{post.date}</strong>
                </div>

                <div className="sidebar-row">
                  <span>Publisher</span>
                  <strong>Homwisor</strong>
                </div>
              </div>

              <div className="sidebar-card sidebar-gold">
                <div className="sidebar-eyebrow">
                  HOMWISOR
                </div>

                <h3>
                  Explore more property insights.
                </h3>

                <p>
                  Discover real estate news, investment ideas and property
                  guides from Homwisor.
                </p>

                <Link to="/blog">
                  View All Articles →
                </Link>
              </div>

            </aside>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        <section className="related-section">
          <div className="blog-detail-container">

            <div className="related-heading">
              <div>
                <div className="blog-detail-eyebrow">
                  KEEP READING
                </div>

                <h2>
                  Related <span>insights.</span>
                </h2>
              </div>

              <Link to="/blog" className="related-view-all">
                View All Articles →
              </Link>
            </div>

            <div className="related-grid">
              {relatedPosts.map((item) => (
                <Link
                  to={`/blog/${createSlug(item.title)}`}
                  className="related-card"
                  key={item.title}
                >
                  <div className="related-image">
                    <img src={item.image} alt={item.title} />
                    <span>{item.category}</span>
                  </div>

                  <div className="related-content">
                    <small>{item.date}</small>

                    <h3>{item.title}</h3>

                    <p>{item.excerpt}</p>

                    <div className="related-read">
                      Read Article <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        * {
          box-sizing: border-box;
        }

        .blog-detail-page {
          min-height: 100vh;
          background: ${CREAM};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-detail-page,
        .blog-detail-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-detail-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .blog-detail-hero {
          position: relative;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #fff;
        }

        .blog-detail-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .blog-detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(5, 20, 38, .92) 0%,
            rgba(8, 23, 42, .72) 45%,
            rgba(5, 18, 34, .78) 100%
          );
        }

        .blog-detail-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 50px 0 0px;
        }

        .blog-hero-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .blog-back-link {
          display: inline-flex;
          margin: 0;
          color: rgba(255,255,255,.78);
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          transition: .2s ease;
        }

        .blog-back-link:hover {
          color: ${GOLD};
        }

        .blog-detail-category {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0,0,0,.55);
          border: 1px solid rgba(212,175,55,.35);
          color: ${GOLD};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .blog-detail-hero h1 {
          max-width: 900px;
          margin: 17px 0 18px;
          color: #fff;
          font-size: 60px;
          line-height: 1.04;
          letter-spacing: -2.6px;
          font-weight: 900;
        }

        .blog-detail-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.65);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .meta-dot {
          color: ${GOLD};
        }

        /* ARTICLE */

        .blog-detail-main {
          background: #fff;
          padding: 40px 0 40px;
        }

        .article-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 70px;
          align-items: start;
        }

        .article-content {
          max-width: 760px;
        }

        .article-intro {
          margin: 0 0 38px;
          color: #303030;
          font-size: 19px;
          line-height: 1.85;
          font-weight: 600;
        }

        .article-section {
          margin-bottom: 38px;
        }

        .article-section h2 {
          margin: 0 0 13px;
          color: #111;
          font-size: 28px;
          line-height: 1.2;
          letter-spacing: -1px;
          font-weight: 900;
        }

        .article-section p {
          margin: 0;
          color: #666;
          font-size: 14px;
          line-height: 1.95;
        }

        /* SIDEBAR */

        .article-sidebar {
          position: sticky;
          top: 100px;
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: fit-content;
        }

        .sidebar-card {
          padding: 25px;
          background: ${CREAM};
          border: 1px solid #e4dccb;
          border-radius: 15px;
        }

        .sidebar-eyebrow {
          margin-bottom: 18px;
          color: ${GOLD_DARK};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .sidebar-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 0;
          border-top: 1px solid #ded6c7;
        }

        .sidebar-row span {
          color: #888;
          font-size: 9px;
          font-weight: 700;
        }

        .sidebar-row strong {
          color: #111;
          font-size: 11px;
          font-weight: 800;
        }

        .sidebar-gold {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        .sidebar-gold .sidebar-eyebrow {
          color: ${GOLD};
        }

        .sidebar-gold h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 900;
        }

        .sidebar-gold p {
          margin: 0 0 18px;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.7;
        }

        .sidebar-gold a {
          color: ${GOLD};
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        /* CTA */

        .article-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 55px;
          padding: 30px;
          border-radius: 16px;
          background: #111;
          color: #fff;
        }

        .article-cta-eyebrow {
          margin-bottom: 8px;
          color: ${GOLD};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .article-cta h3 {
          margin: 0 0 7px;
          color: #fff;
          font-size: 23px;
          font-weight: 900;
        }

        .article-cta p {
          margin: 0;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.6;
        }

        .article-cta-btn {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 45px;
          padding: 0 19px;
          border-radius: 8px;
          background: ${GOLD};
          color: #111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* RELATED */

        .related-section {
          padding: 40px 0 0px;
          background: ${CREAM};
        }

        .related-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 28px;
        }

        .related-heading h2 {
          margin: 9px 0 0;
          color: #111;
          font-size: 38px;
          line-height: 1.08;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .related-heading h2 span {
          color: ${GOLD_DARK};
        }

        .blog-detail-eyebrow {
          color: ${GOLD_DARK};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .related-view-all {
          flex: 0 0 auto;
          color: #111;
          text-decoration: none;
          border-bottom: 1px solid ${GOLD};
          padding-bottom: 6px;
          font-size: 10px;
          font-weight: 800;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .related-card {
          display: block;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e4dccb;
          border-radius: 16px;
          text-decoration: none;
          transition: .25s ease;
        }

        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,.08);
        }

        .related-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .related-card:hover .related-image img {
          transform: scale(1.04);
        }

        .related-image span {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 7px 9px;
          background: rgba(0,0,0,.76);
          color: ${GOLD};
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .related-content {
          padding: 20px;
        }

        .related-content small {
          color: ${GOLD_DARK};
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .related-content h3 {
          margin: 9px 0 8px;
          color: #111;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 900;
        }

        .related-content p {
          margin: 0;
          color: #777;
          font-size: 11px;
          line-height: 1.7;
        }

        .related-read {
          margin-top: 17px;
          color: #111;
          font-size: 9px;
          font-weight: 800;
        }

        .related-read span {
          margin-left: 5px;
          color: ${GOLD_DARK};
        }

        /* TABLET */

        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .article-content {
            max-width: none;
          }

          .article-sidebar {
            position: static;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {
          .blog-detail-container {
            width: min(100% - 24px, 1180px);
          }

          .blog-detail-hero {
            min-height: 500px;
          }

          .blog-detail-hero-content {
            padding: 80px 0 45px;
          }

          .blog-hero-top {
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 22px;
          }

          .blog-detail-hero h1 {
            font-size: 40px;
            line-height: 1.08;
            letter-spacing: -1.3px;
          }

          .blog-detail-main {
            padding: 45px 0 55px;
          }

          .article-intro {
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 30px;
          }

          .article-section {
            margin-bottom: 30px;
          }

          .article-section h2 {
            font-size: 24px;
          }

          .article-section p {
            font-size: 13px;
            line-height: 1.85;
          }

          .article-sidebar {
            grid-template-columns: 1fr;
          }

          .article-cta {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 40px;
          }

          .article-cta-btn {
            width: 100%;
          }

          .related-section {
            padding: 45px 0 0px;
          }

          .related-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .related-heading h2 {
            font-size: 34px;
          }

          .related-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .related-image {
            height: 160px;
          }

          .related-content {
            padding: 13px;
          }

          .related-content h3 {
            font-size: 13px;
          }

          .related-content p {
            font-size: 9px;
          }
        }

        @media (max-width: 520px) {
          .blog-detail-container {
            width: min(100% - 20px, 1180px);
          }

          .blog-detail-hero {
            min-height: 470px;
          }

          .blog-detail-hero h1 {
            font-size: 35px;
          }

          .blog-detail-meta {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .related-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .related-image {
            height: 135px;
          }

          .related-content {
            padding: 11px;
          }

          .related-content h3 {
            font-size: 12px;
          }

          .related-content p {
            font-size: 9px;
            line-height: 1.55;
          }

          .related-read {
            font-size: 8px;
            margin-top: 11px;
          }
        }
      `}</style>
    </div>
  );
}