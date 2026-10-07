import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/api";
import { blogDate, readTime } from "../data/blog";
import { blogUrl } from "../utils/slug";
import { applyMeta } from "../utils/seo";
import "./blogDetail.css";


const sectionId = (heading, i) =>
  `s${i + 1}-${String(heading || "section").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 50)}`;

/* ---------------------------------------------------------------
   Article text → blocks. Written in the admin as plain text:
     blank line           new paragraph
     - item               bullet list
     1. Title — text      numbered checks
     > text               "Good to know" box   (> Label: text  sets the label)
     a | b  (2+ lines)    table, first line is the header
     **bold**             bold
--------------------------------------------------------------- */
const inline = (text, keyBase = "") =>
  String(text).split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    /^\*\*[^*]+\*\*$/.test(part) ? <strong key={keyBase + i}>{part.slice(2, -2)}</strong> : part
  );

function parseBlocks(text = "") {
  return String(text).replace(/\r\n/g, "\n").split(/\n\s*\n/).map((chunk) => {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    if (!lines.length) return null;
    if (lines.every((l) => /^[-•*]\s+/.test(l))) return { type: "ul", items: lines.map((l) => l.replace(/^[-•*]\s+/, "")) };
    if (lines.every((l) => /^\d+[.)]\s+/.test(l))) {
      return {
        type: "steps",
        items: lines.map((l) => {
          const body = l.replace(/^\d+[.)]\s+/, "");
          const m = body.match(/^(.+?)\s+[—–-]\s+(.+)$/);
          return m ? { title: m[1], text: m[2] } : { title: body, text: "" };
        }),
      };
    }
    if (lines.every((l) => l.startsWith(">"))) {
      const body = lines.map((l) => l.replace(/^>\s?/, "")).join(" ");
      const m = body.match(/^([A-Za-z][\w\s]{1,24}):\s+(.+)$/);
      return { type: "note", label: m ? m[1] : "Good to know", text: m ? m[2] : body };
    }
    if (lines.length >= 2 && lines.every((l) => l.includes("|"))) {
      const rows = lines
        .filter((l) => !/^\|?\s*:?-{2,}/.test(l)) // skip markdown "---|---" rows
        .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
      return { type: "table", head: rows[0], rows: rows.slice(1) };
    }
    return { type: "p", text: lines.join(" ") };
  }).filter(Boolean);
}

function Blocks({ text }) {
  return parseBlocks(text).map((b, i) => {
    if (b.type === "ul") return <ul key={i} className="bd-ul">{b.items.map((t, j) => <li key={j}>{inline(t, j)}</li>)}</ul>;
    if (b.type === "steps") {
      return (
        <ol key={i} className="bd-steps">
          {b.items.map((s, j) => (
            <li key={j}>
              <span className="bd-step-no">{j + 1}</span>
              <div><strong>{inline(s.title)}</strong>{s.text && <p>{inline(s.text)}</p>}</div>
            </li>
          ))}
        </ol>
      );
    }
    if (b.type === "note") return <aside key={i} className="bd-note"><small>{b.label}</small><p>{inline(b.text)}</p></aside>;
    if (b.type === "table") {
      return (
        <div key={i} className="bd-table-wrap">
          <table className="bd-table">
            <thead><tr>{b.head.map((h, j) => <th key={j}>{inline(h)}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, j) => <tr key={j}>{b.head.map((_, k) => <td key={k}>{inline(r[k] || "")}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }
    return <p key={i}>{inline(b.text)}</p>;
  });
}

/* ---------------------------------------------------------------
   Share buttons
--------------------------------------------------------------- */
function Share({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;
  const links = [
    ["WhatsApp", `https://wa.me/?text=${enc(`${title} ${url}`)}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`],
    ["X", `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`],
  ];
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard blocked */ }
  };
  return (
    <div className="bd-share">
      <span className="bd-share-label">SHARE</span>
      {links.map(([name, href]) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={name === "X" ? "round" : ""} aria-label={`Share on ${name}`}>{name}</a>
      ))}
      <a className="round" href={`mailto:?subject=${enc(title)}&body=${enc(url)}`} aria-label="Share by email">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      </a>
      <button type="button" className="round" onClick={copy} aria-label="Copy link" title={copied ? "Link copied" : "Copy link"}>
        {copied
          ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
          : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>}
      </button>
    </div>
  );
}

/* ---------------------------------------------------------------
   "Talk to an advisor" callback form
--------------------------------------------------------------- */
function AdvisorForm({ post }) {
  const [f, setF] = useState({ name: "", phone: "" });
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setErr("Please enter your name");
    if (!/^\+?[\d\s-]{10,15}$/.test(f.phone.trim())) return setErr("Please enter a valid 10-digit mobile number");
    setErr(""); setState("sending");
    try {
      await API.post("/enquiries", { name: f.name.trim(), phone: f.phone.trim(), email: "", property: `Blog: ${post.title}`, message: "Call back request from a blog article", source: "blog", page: window.location.pathname });
      setState("sent");
    } catch {
      setState("idle"); setErr("Could not send right now. Please try again.");
    }
  };
  return (
    <div className="bd-advisor">
      <small>TALK TO AN ADVISOR</small>
      <h3>Planning your next property?</h3>
      <p>Leave your number and a HomWisor advisor will call you back with current prices and floor plans.</p>
      {state === "sent" ? (
        <div className="bd-advisor-done">✓ Thank you, {f.name.split(" ")[0]}! We'll call you shortly.</div>
      ) : (
        <form onSubmit={submit} noValidate>
          <label>Full name<input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Your name" autoComplete="name" /></label>
          <label>Mobile number<input value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" /></label>
          {err && <div className="bd-advisor-err">{err}</div>}
          <button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Request a call back"}</button>
          <span className="bd-advisor-fine">By submitting, you agree to be contacted by HomWisor about this enquiry.</span>
        </form>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   Page
--------------------------------------------------------------- */
export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [all, setAll] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | missing
  const [active, setActive] = useState("");

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
    if (!post) return;
    // meta title / description from the admin (Blog → SEO), else the title and summary
    return applyMeta({
      title: post.seoTitle?.trim() || `${post.title} | HomWisor`,
      description: post.seoDescription?.trim() || post.excerpt || "",
      image: post.image,
      url: window.location.origin + blogUrl(post),
      type: "article",
    });
  }, [post]);

  // Rich-text body (admin editor): give each main heading an id for "In this guide".
  // The HTML was cleaned by the server when it was saved.
  const body = useMemo(() => {
    if (!post?.body) return null;
    const doc = new DOMParser().parseFromString(`<div>${post.body}</div>`, "text/html");
    const root = doc.body.firstElementChild;
    const headings = [...root.querySelectorAll("h2")].filter((h) => h.textContent.trim());
    headings.forEach((h, i) => { h.id = sectionId(h.textContent.trim(), i); });
    root.querySelectorAll("img").forEach((img) => img.setAttribute("loading", "lazy"));
    root.querySelectorAll("span.ql-ui, span:empty").forEach((el) => el.remove()); // editor-only markers
    return { html: root.innerHTML, toc: headings.map((h) => ({ heading: h.textContent.trim(), anchor: h.id })) };
  }, [post]);

  // older articles: sections of plain text
  const sections = useMemo(
    () => (post?.body ? [] : post?.content || []).map((s, i) => ({ ...s, anchor: sectionId(s.heading, i) })),
    [post]
  );
  const toc = body ? body.toc : sections.filter((s) => s.heading);

  // highlight the section being read in "In this guide"
  useEffect(() => {
    if (status !== "ok") return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    toc.forEach((s) => { const el = document.getElementById(s.anchor); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [status, toc]);

  if (status === "loading") {
    return (
      <div className="bd-page">
        <Header />
        <main className="bd-state"><span className="bd-spin" /> Loading article…</main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bd-page">
        <Header />
        <main className="bd-state">
          <div>
            <span className="bd-pill">HOMWISOR INSIGHTS</span>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist or may have been moved.</p>
            <Link to="/blog" className="bd-back">← Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // same category first, then the newest of the rest
  const others = all.filter((item) => item.slug !== post.slug);
  const related = [
    ...others.filter((item) => item.category === post.category),
    ...others.filter((item) => item.category !== post.category),
  ].slice(0, 3);
  const author = post.author || "HomWisor Insights";
  const jump = (e, anchor) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
  };

  return (
    <div className="bd-page">
      <Header />

      <main className="bd-wrap">
        {/* ---------- heading ---------- */}
        <header className="bd-head">
          <Link to={`/blog?category=${encodeURIComponent(post.category || "")}`} className="bd-pill">{(post.category || "Insights").toUpperCase()}</Link>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="bd-dek">{post.excerpt}</p>}
        </header>

        <div className="bd-byline">
            <div className="bd-author">
              <span className="bd-avatar">{author.trim()[0]?.toUpperCase() || "H"}</span>
              <div>
                <span>By <strong>{author}</strong></span>
                <small>{blogDate(post.publishedAt).replace(/^(\w)(\w+)/, (_, a, b) => a + b.toLowerCase())}<i>•</i>{readTime(post)} min read</small>
              </div>
            </div>
            <Share title={post.title} />
        </div>

        {/* ---------- banner ---------- */}
        {post.image && (
          <figure className="bd-banner">
            <img src={post.image} alt={post.title} />
          </figure>
        )}

        {/* ---------- article + sidebar ---------- */}
        <div className="bd-layout">
          <article className="bd-article">
            {body && <div className="bd-body" dangerouslySetInnerHTML={{ __html: body.html }} />}
            {sections.map((s, i) => (
              <section key={s.anchor} id={s.anchor} className="bd-section">
                {s.heading && <h2>{s.heading}</h2>}
                <div className={i === 0 ? "bd-text bd-lead" : "bd-text"}><Blocks text={s.text} /></div>
                {s.image && (
                  <figure className="bd-figure"><img src={s.image} alt={s.heading || post.title} loading="lazy" /></figure>
                )}
              </section>
            ))}

            {post.tags?.length > 0 && (
              <div className="bd-tags">{post.tags.map((t) => <span key={t}>#{t}</span>)}</div>
            )}

            <p className="bd-fine">*Prices and details are as advertised and subject to change. Confirm current prices, plans and approvals with the developer before you book.</p>
          </article>

          <aside className="bd-side">
            {toc.length > 1 && (
              <nav className="bd-toc" aria-label="In this guide">
                <small>IN THIS GUIDE</small>
                <ol>
                  {toc.map((s, i) => (
                    <li key={s.anchor} className={active === s.anchor ? "on" : ""}>
                      <a href={`#${s.anchor}`} onClick={(e) => jump(e, s.anchor)}><b>{i + 1}</b>{s.heading}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <AdvisorForm post={post} />
          </aside>
        </div>

        {/* ---------- keep reading ---------- */}
        {related.length > 0 && (
          <section className="bd-more">
            <div className="bd-more-head">
              <h2>Keep reading</h2>
              <Link to="/blog">All articles <span>→</span></Link>
            </div>
            <div className="bd-more-grid">
              {related.map((item) => (
                <Link key={item.id || item.slug} to={blogUrl(item)} className="bd-card">
                  <span className="bd-card-img"><img src={item.image} alt="" loading="lazy" /></span>
                  <small>{(item.category || "").toUpperCase()}</small>
                  <strong>{item.title}</strong>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
