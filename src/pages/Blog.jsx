import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/api";
import { BLOG_CATEGORIES, blogDate } from "../data/blog";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const BLACK = "#090909";
const CREAM = "#F7F5EF";

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") || "All";
  const setActive = (c) => setParams(c === "All" ? {} : { category: c }, { replace: true });

  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let alive = true;
    API.get("/blogs")
      .then((r) => { if (alive) { setPosts(r.data || []); setStatus("ok"); } })
      .catch(() => alive && setStatus("error"));
    return () => { alive = false; };
  }, []);

  useEffect(() => { document.title = "Real Estate Insights | HomWisor Blog"; }, []);

  // the usual categories first, then any new ones the admin created
  const categories = useMemo(() => {
    const used = [...new Set(posts.map((p) => p.category).filter(Boolean))];
    return ["All", ...BLOG_CATEGORIES.filter((c) => used.includes(c)), ...used.filter((c) => !BLOG_CATEGORIES.includes(c))];
  }, [posts]);

  const featured = posts.find((p) => p.featured) || posts[0];
  const filteredPosts = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <div className="blog-page">
      <Header />

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />

        <div className="blog-container blog-hero-inner">
          <div className="blog-eyebrow">HOMWISOR INSIGHTS</div>

          <h1>
            Real Estate <span>Insights.</span>
          </h1>

          <p>
            Stay informed with property news, market insights, investment ideas
            and practical guides for Gurgaon and Delhi NCR.
          </p>
        </div>
      </section>

      <main>
        {/* FEATURED */}
        <section className="blog-section blog-featured">
          <div className="blog-container">
            <div className="blog-section-head">
              <div>
                <div className="blog-eyebrow dark">
                  FEATURED INSIGHT
                </div>

                <h2>
                  What’s happening in <span>NCR real estate.</span>
                </h2>
              </div>

              <a href="#all-articles" className="blog-view-link">
                View All Articles <span>↗</span>
              </a>
            </div>

            {status === "loading" && <div className="blog-state"><span className="blog-spin" /> Loading articles…</div>}
            {status === "error" && <div className="blog-state">Articles could not be loaded right now. Please refresh the page.</div>}
            {status === "ok" && !featured && <div className="blog-state">New articles are coming soon.</div>}

            {featured && (
            <article className="featured-card">
              <Link to={`/blog/${featured.slug}`} className="featured-image">
                <img
                  src={featured.image}
                  alt={featured.title}
                />

                <span>{featured.category}</span>
              </Link>

              <div className="featured-content">
                <small>{blogDate(featured.publishedAt)}</small>

                <h3>{featured.title}</h3>

                <p>{featured.excerpt}</p>

                <Link to={`/blog/${featured.slug}`}>
                  Read Article <span>→</span>
                </Link>
              </div>
            </article>
            )}
          </div>
        </section>

        {/* ALL ARTICLES */}
        <section
          className="blog-section blog-all"
          id="all-articles"
        >
          <div className="blog-container">
            <div className="blog-section-head compact">
              <div>
                <div className="blog-eyebrow dark">
                  LATEST ARTICLES
                </div>

                <h2>
                  Explore our <span>latest stories.</span>
                </h2>
              </div>
            </div>

            {/* CATEGORIES */}
            {posts.length > 0 && (
            <div className="category-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={active === category ? "active" : ""}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            )}

            {status === "ok" && posts.length > 0 && filteredPosts.length === 0 && (
              <div className="blog-state">No articles in “{active}” yet. <button type="button" onClick={() => setActive("All")}>Show all articles</button></div>
            )}

            {/* BLOG GRID */}
            <div className="blog-grid">
              {filteredPosts.map((post) => {
                const slug = post.slug;

                return (
                  <article
                    className="blog-card"
                    key={post.id || post.slug}
                  >
                    {/* IMAGE LINK */}
                    <Link
                      to={`/blog/${slug}`}
                      className="blog-card-image"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                      />

                      <span>{post.category}</span>
                    </Link>

                    <div className="blog-card-content">
                      <small>{blogDate(post.publishedAt)}</small>

                      <h3>{post.title}</h3>

                      <p>{post.excerpt}</p>

                      {/* READ ARTICLE LINK */}
                      <Link to={`/blog/${slug}`}>
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="blog-newsletter">
          <div className="blog-container newsletter-inner">
            <div>
              <div className="blog-eyebrow">
                STAY UPDATED
              </div>

              <h2>Get smarter property insights.</h2>

              <p>
                Follow Homwisor for useful real estate news, property guides
                and market updates.
              </p>
            </div>

            <Link
              to="/contact/"
              className="blog-btn"
            >
              Talk to an Expert
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .blog-state { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 160px; padding: 30px 16px; border: 1px dashed #e2dccb; border-radius: 18px; background: #fff; color: #6b6450; font-size: 14px; font-weight: 600; text-align: center; flex-wrap: wrap; }
        .blog-state button { border: none; background: none; color: ${GOLD_DARK}; font: inherit; font-weight: 800; cursor: pointer; text-decoration: underline; }
        .blog-spin { width: 20px; height: 20px; border: 2.5px solid #eee4c4; border-top-color: ${GOLD}; border-radius: 50%; animation: blog-spin .7s linear infinite; }
        @keyframes blog-spin { to { transform: rotate(360deg); } }
        a.featured-image { display: block; }
        * {
          box-sizing: border-box;
        }

        .blog-page {
          min-height: 100vh;
          background: ${CREAM};
          color: #111;
          font-family: "Manrope", "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .blog-page,
        .blog-page * {
          font-family: "Manrope", "Inter", Arial, sans-serif;
        }

        .blog-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blog-hero {
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #fff;

          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background: linear-gradient(
            90deg,
            rgba(5,20,38,.92) 0%,
            rgba(8,23,42,.72) 45%,
            rgba(5,18,34,.78) 100%
          );
        }

        .blog-hero:after,
        .blog-hero-glow {
          display: none;
        }

        .blog-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 120px 20px 70px;
          text-align: center;
        }

        .blog-eyebrow {
          color: ${GOLD};
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
        }

        .blog-eyebrow.dark {
          color: ${GOLD_DARK};
        }

        .blog-hero h1 {
          margin: 15px auto 0;
          max-width: 760px;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .blog-hero h1 span {
          color: ${GOLD};
          display: block;
        }

        .blog-hero p {
          max-width: 600px;
          margin: 20px auto 0;
          color: rgba(255,255,255,.78);
          font-size: 14px;
          line-height: 1.8;
        }

        .blog-section {
          padding: 52px 0;
        }

        .blog-featured {
          background: #fff;
        }

        .blog-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 28px;
        }

        .blog-section-head.compact {
          margin-bottom: 25px;
        }

        .blog-section-head h2 {
          margin: 9px 0 0;
          font-size: 36px;
          line-height: 1.08;
          letter-spacing: -1.6px;
          font-weight: 900;
          color: #111;
        }

        .blog-view-link {
          flex: 0 0 auto;
          color: #111;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          border-bottom: 1px solid ${GOLD};
          padding-bottom: 6px;
        }

        .blog-view-link span {
          color: ${GOLD_DARK};
          margin-left: 5px;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.12fr .88fr;
          min-height: 420px;
          border: 1px solid #e8e1d2;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
        }

        .featured-image {
          position: relative;
          min-height: 420px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.03);
        }

        .featured-image span,
        .blog-card-image span {
          position: absolute;
          left: 16px;
          top: 16px;
          padding: 7px 10px;
          background: rgba(0,0,0,.76);
          color: ${GOLD};
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 45px;
        }

        .featured-content small,
        .blog-card-content small {
          color: ${GOLD_DARK};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .featured-content h3 {
          margin: 13px 0 12px;
          color: #111;
          font-size: 30px;
          line-height: 1.16;
          letter-spacing: -.8px;
          font-weight: 900;
        }

        .featured-content p {
          margin: 0;
          color: #707070;
          font-size: 13px;
          line-height: 1.8;
        }

        .featured-content > a,
        .blog-card-content > a {
          display: inline-block;
          margin-top: 22px;
          width: fit-content;
          color: #111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
        }

        .featured-content > a span,
        .blog-card-content > a span {
          color: ${GOLD_DARK};
          margin-left: 5px;
        }

        .blog-all {
          background: ${CREAM};
        }

        .category-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .category-row button {
          border: 1px solid #ded7c8;
          background: #fff;
          color: #666;
          border-radius: 30px;
          padding: 9px 15px;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s ease;
        }

        .category-row button:hover,
        .category-row button.active {
          background: #111;
          border-color: #111;
          color: ${GOLD};
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .blog-card {
          overflow: hidden;
          border: 1px solid #e4dccb;
          border-radius: 17px;
          background: #fff;
          transition: .25s ease;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,.08);
        }

        .blog-card-image {
          height: 225px;
          position: relative;
          display: block;
          overflow: hidden;
          background: #ddd;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s ease;
        }

        .blog-card:hover .blog-card-image img {
          transform: scale(1.04);
        }

        .blog-card-content {
          padding: 21px;
        }

        .blog-card-content h3 {
          margin: 10px 0 8px;
          color: #111;
          font-size: 18px;
          line-height: 1.28;
          font-weight: 900;
        }

        .blog-card-content p {
          margin: 0;
          color: #777;
          font-size: 11px;
          line-height: 1.7;
        }

        .blog-newsletter {
          padding: 48px 0;
          background: #0b0b0b;
          color: #fff;
        }

        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .newsletter-inner h2 {
          margin: 9px 0 7px;
          font-size: 36px;
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 900;
        }

        .newsletter-inner p {
          margin: 0;
          color: rgba(255,255,255,.62);
          font-size: 12px;
        }

        .blog-btn {
          flex: 0 0 auto;
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          border-radius: 8px;
          background: ${GOLD};
          color: #111;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-image {
            min-height: 330px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .blog-container {
            width: min(100% - 24px, 1180px);
          }

          .blog-hero {
            min-height: 390px;
          }

          .blog-hero-inner {
            padding: 100px 18px 55px;
          }

          .blog-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .blog-section-head h2,
          .newsletter-inner h2 {
            font-size: 36px;
          }

          .blog-hero p {
            font-size: 12px;
            line-height: 1.7;
          }

          .blog-section {
            padding: 38px 0;
          }

          .blog-section-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 22px;
          }

          .featured-image {
            min-height: 260px;
          }

          .featured-content {
            padding: 25px 20px;
          }

          .featured-content h3 {
            font-size: 23px;
          }

          .blog-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .blog-card-image {
            height: 180px;
          }

          .blog-card-content {
            padding: 14px;
          }

          .blog-card-content h3 {
            font-size: 14px;
          }

          .blog-card-content p {
            font-size: 10px;
          }

          .newsletter-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .blog-btn {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .blog-container {
            width: min(100% - 20px, 1180px);
          }

          .blog-hero {
            min-height: 390px;
          }

          .blog-hero-inner {
            padding: 100px 18px 55px;
          }

          .blog-hero h1,
          .blog-section-head h2,
          .newsletter-inner h2 {
            font-size: 36px;
          }

          .blog-section {
            padding: 30px 0;
          }

          .featured-image {
            min-height: 220px;
          }

          .featured-content h3 {
            font-size: 21px;
          }

          .blog-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .blog-card {
            border-radius: 12px;
          }

          .blog-card-image {
            height: 145px;
          }

          .blog-card-image span {
            left: 8px;
            top: 8px;
            padding: 5px 6px;
            font-size: 6.5px;
          }

          .blog-card-content {
            padding: 11px;
          }

          .blog-card-content h3 {
            font-size: 12px;
            line-height: 1.3;
          }

          .blog-card-content p {
            font-size: 9px;
            line-height: 1.55;
          }

          .blog-card-content > a {
            margin-top: 13px;
            font-size: 9px;
          }

          .category-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
          }

          .category-row::-webkit-scrollbar {
            display: none;
          }

          .category-row button {
            flex: 0 0 auto;
            padding: 8px 12px;
          }

          .newsletter-inner h2 {
            letter-spacing: -1px;
          }
        }
      `}</style>
    </div>
  );
}