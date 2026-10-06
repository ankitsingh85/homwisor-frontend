import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/api";
import { blogDate, paragraphs, readTime } from "../data/blog";

import { blogUrl } from "../utils/slug";
const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const CREAM = "#F7F5EF";

// set <title> and the meta description for this article
const setMeta = (title, description) => {
  document.title = title;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) { tag = document.createElement("meta"); tag.name = "description"; document.head.appendChild(tag); }
  tag.content = description || "";
};

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [all, setAll] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | missing

  useEffect(() => {
    if (post && post.slug === slug) return; // just switched an old address to the current one
    let alive = true;
    setStatus("loading");
    window.scrollTo(0, 0);
    API.get(`/blogs/${encodeURIComponent(slug)}`)
      .then((r) => {
        if (!alive) return;
        setPost(r.data); setStatus("ok");
        // opened by an old address → show the current one
        if (r.data?.slug && r.data.slug !== slug) navigate(blogUrl(r.data), { replace: true });
      })
      .catch(() => alive && setStatus("missing"));
    API.get("/blogs").then((r) => alive && setAll(r.data || [])).catch(() => {});
    return () => { alive = false; };
  }, [slug]);

  useEffect(() => {
    if (post) setMeta(`${post.seoTitle || post.title} | HomWisor`, post.seoDescription || post.excerpt);
  }, [post]);

  if (status === "loading") {
    return (
      <div className="blog-detail-page">
        <Header />
        <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "140px 20px 80px", color: "#6b6450", fontWeight: 600 }}>
          Loading article…
        </main>
        <style>{`.blog-detail-page { min-height: 100vh; background: ${CREAM}; }`}</style>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-detail-page">
        <Header />

        <main className="blog-not-found">
          <div className="blog-detail-container">
            <div className="blog-detail-eyebrow">HOMWISOR INSIGHTS</div>

            <h1>Page Not Found</h1>

            <p>
              The page you are looking for does not exist or may have been
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

  // same category first, then the newest of the rest
  const others = all.filter((item) => item.slug !== post.slug);
  const relatedPosts = [
    ...others.filter((item) => item.category === post.category),
    ...others.filter((item) => item.category !== post.category),
  ].slice(0, 4);
  const date = blogDate(post.publishedAt);

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
              <span>{date}</span>
              <span className="meta-dot">•</span>
              <span>{readTime(post)} MIN READ</span>
              <span className="meta-dot">•</span>
              <span>{(post.author || "HomWisor Insights").toUpperCase()}</span>
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

              {(post.content || []).map((section, index) => (
                <div className="article-section" key={index}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {paragraphs(section.text).map((text, i) => <p key={i}>{text}</p>)}
                  {section.image && (
                    <figure className="article-figure">
                      <img src={section.image} alt={section.heading || post.title} loading="lazy" />
                    </figure>
                  )}
                </div>
              ))}

              {post.tags?.length > 0 && (
                <div className="article-tags">
                  {post.tags.map((t) => <span key={t}>#{t}</span>)}
                </div>
              )}

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
                  <strong>{date}</strong>
                </div>

                <div className="sidebar-row">
                  <span>Author</span>
                  <strong>{post.author || "HomWisor Insights"}</strong>
                </div>

                <div className="sidebar-row">
                  <span>Reading time</span>
                  <strong>{readTime(post)} min</strong>
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
        {relatedPosts.length > 0 && (
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
                  to={blogUrl(item)}
                  className="related-card"
                  key={item.id || item.slug}
                >
                  <div className="related-image">
                    <img src={item.image} alt={item.title} />
                    <span>{item.category}</span>
                  </div>

                  <div className="related-content">
                    <small>{blogDate(item.publishedAt)}</small>

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
        )}
      </main>

      <Footer />

      <style>{`
        .article-section p + p { margin-top: 14px; }
        .article-figure { margin: 22px 0 6px; border-radius: 16px; overflow: hidden; background: #eee; }
        .article-figure img { width: 100%; display: block; max-height: 520px; object-fit: cover; }
        .article-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .article-tags span { padding: 6px 12px; border-radius: 999px; background: #fff; border: 1px solid #ebe4cf; color: ${GOLD_DARK}; font-size: 12px; font-weight: 700; }
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