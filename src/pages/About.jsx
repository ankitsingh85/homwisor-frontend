import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import leader1 from "../images/test1.png";
import leader2 from "../images/test2.png";
import leader3 from "../images/test3.png";
import leader4 from "../images/test4.png";

const GOLD = "#D4AF37";
const GOLD_DARK = "#9A7418";
const BLACK = "#090909";
const CREAM = "#F7F5EF";

const leaderImages = [leader1, leader2, leader3, leader4];

const values = [
  ["01", "Integrity", "We build relationships through honest guidance and responsible advice."],
  ["02", "Accountability", "We stay involved and take responsibility throughout the property journey."],
  ["03", "Professionalism", "Experienced, informed and focused on delivering a smooth experience."],
  ["04", "Customer First", "Your requirements, priorities and long-term goals remain at the centre."],
  ["05", "Transparency", "Clear communication and straightforward property guidance at every step."],
  ["06", "Improvement", "We continuously improve our market knowledge and client experience."],
];

const leaders = [
  {
    name: "Mr. Brejendra Singh",
    role: "Founder & CEO",
    text: "A real estate veteran with 15+ years of expertise, known for deep market knowledge and investment insights.",
  },
  {
    name: "Mr. Birendra Patel",
    role: "Founder & CMO",
    text: "Brings over 13 years of distinguished real estate experience with a strong focus on market intelligence.",
  },
  {
    name: "Mr. Lokendra Singh",
    role: "Manager",
    text: "Brings deep knowledge of Gurgaon micro-markets with a strong market understanding and client-focused approach.",
  },
  {
    name: "Mr. Mukul Yadav",
    role: "Manager",
    text: "A dedicated real estate consultant focused on helping clients find the right investment opportunities.",
  },
];

const blogs = [
  {
    date: "JUL 30, 2026",
    category: "REAL ESTATE NEWS",
    title: "Moti Nagar Metro Station on Delhi Metro Blue Line",
    text: "Explore connectivity, location advantages and the role of the Blue Line in West Delhi real estate.",
  },
  {
    date: "JUL 29, 2026",
    category: "REAL ESTATE NEWS",
    title: "BPTP Downtown 66 Phase 2 Is Here",
    text: "A look at the new phase and what buyers should know about the Gurgaon development.",
  },
  {
    date: "JUL 28, 2026",
    category: "REAL ESTATE NEWS",
    title: "Sector 49 Gurgaon: Real Estate Prices & Metro Expansion",
    text: "Understand the locality, connectivity and changing real estate landscape of Sector 49 Gurgaon.",
  },
];

const testimonials = [
  {
    quote: "The team understood our requirements, guided us throughout the process and helped us find a better-fit property and location.",
    name: "Sharat M. Airani",
    company: "Hindustan Unilever",
  },
  {
    quote: "The Gurgaon market knowledge, responsiveness and professional support made our home-buying journey smooth and hassle-free.",
    name: "Ashutosh Sharma",
    company: "TATA Consumers Pvt. Ltd.",
  },
  {
    quote: "Their transparent communication and client-focused guidance made the entire process comfortable from the initial stage to possession.",
    name: "Ashok Yende",
    company: "Reliance Industries",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Header />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-grid" />
        <div className="about-container about-hero-inner">
          <div className="about-kicker">TRUSTED REAL ESTATE CONSULTANTS</div>
          <h1>
            Real Estate,
            <br />
            <span>Guided With Wisdom.</span>
          </h1>
          <p>
            Since 2016, we’ve guided families and investors toward the perfect
            homes, premium office spaces, and smart real estate opportunities
            across Gurgaon and Delhi NCR.
          </p>
          <div className="about-hero-actions">
            <a href="/contact/" className="about-btn about-btn-gold">Talk to an Expert</a>
            {/* <a href="/properties/" className="about-btn about-btn-light">Explore Properties</a> */}
          </div>
          {/* <div className="hero-scroll-label">SCROLL TO DISCOVER <span>↓</span></div> */}
        </div>
      </section>

      {/* STATS */}
      {/* <section className="about-stats-wrap">
        <div className="about-container about-stats">
          <div><strong>2016</strong><span>Established</span></div>
          <div><strong>1,600+</strong><span>Residential Projects</span></div>
          <div><strong>900+</strong><span>Commercial Projects</span></div>
          <div><strong>NCR</strong><span>Market Focus</span></div>
        </div>
      </section> */}

      {/* WHO WE ARE */}
      <section className="about-section about-who">
        <div className="about-container about-two-col">
          <div className="about-real-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88"
              alt="Premium modern home interior"
            />
            <div className="image-overlay-card">
              <span>EST. 2016</span>
              <strong>Homwisor</strong>
              <small>Real Estate Consultants</small>
            </div>
            <div className="image-corner-number">01</div>
          </div>

          <div className="about-copy">
            <div className="about-eyebrow">WHO WE ARE</div>
            <h2>Property is more than a transaction.</h2>
            <p>
              Homwisor Consultant believes that buying a property is more than
              just a transaction — it is a life-changing decision connected to
              dreams, security and future growth.
            </p>
            <p>
              Built on the vision of combining the comfort of a dream home with
              the wisdom of expert real estate guidance, Homwisor helps clients
              navigate property opportunities with clarity and confidence.
            </p>
            <div className="about-points">
              <div><b>✓</b> Expert property guidance</div>
              <div><b>✓</b> Market-focused recommendations</div>
              <div><b>✓</b> Residential & commercial expertise</div>
              <div><b>✓</b> Support throughout the journey</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section about-values">
        <div className="about-container">
          <div className="about-heading-center">
            <div className="about-eyebrow">OUR CORE VALUES</div>
            <h2>Principles that shape <span>Homwisor.</span></h2>
            <p>Integrity, accountability, professionalism and a customer-first approach at every step.</p>
          </div>
          <div className="values-grid">
            {values.map(([num, title, text]) => (
              <article className="value-card" key={title}>
                <div className="value-top"><span>{num}</span><i>↗</i></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-section about-leaders">
        <div className="about-container">
          <div className="about-heading-row">
            <div>
              <div className="about-eyebrow">OUR TEAM</div>
              <h2>Visionary <span>Real Estate Leaders</span></h2>
            </div>
            <p>Experienced professionals bringing market knowledge and client-focused real estate guidance.</p>
          </div>

          <div className="leaders-grid">
            {leaders.map((person, index) => (
              <article className="leader-card" key={person.name}>
                <div className="leader-image-wrap">
                  <img src={leaderImages[index]} alt={`${person.name} professional portrait`} />
                  <div className="leader-number">0{index + 1}</div>
                </div>
                <div className="leader-content">
                  <div className="leader-role">{person.role}</div>
                  <h3>{person.name}</h3>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="about-section about-news">
        <div className="about-container">
          <div className="about-heading-row">
            <div>
              <div className="about-eyebrow">READ FROM OUR BLOGS & NEWS</div>
              <h2>Insights for <span>smarter decisions.</span></h2>
            </div>
            <a href="/blog/" className="news-link">View All Articles <span>↗</span></a>
          </div>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.title}>
                <div className="blog-image">
                  <img
                    src={`https://images.unsplash.com/photo-${blog.title.includes("Moti") ? "1477959858617-67f85cf4f1df" :
                        blog.title.includes("BPTP") ? "1564013799919-ab600027ffc6" :
                          "1560518883-ce09059eeffa"
                      }?auto=format&fit=crop&w=900&q=82`}
                    alt="Real estate news"
                  />
                  <span>{blog.category}</span>
                </div>
                <div className="blog-content">
                  <small>{blog.date}</small>
                  <h3>{blog.title}</h3>
                  <p>{blog.text}</p>
                  <a href="/blog/">Read Article <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="about-section about-testimonials">
        <div className="about-container">
          <div className="about-heading-center">
            <div className="about-eyebrow">TESTIMONIALS</div>
            <h2>Our Happy <span>Customers.</span></h2>
            <p>Real experiences from clients who trusted Homwisor with their property journey.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="quote-mark">“</div>
                <p>{item.quote}</p>
                <div className="testimonial-person">
                  <div className="testimonial-initial">{item.name.charAt(0)}</div>
                  <div><strong>{item.name}</strong><span>{item.company}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div>
            <div className="about-eyebrow light">MAKE THE RIGHT MOVE</div>
            <h2>Looking for the right property in NCR?</h2>
            <p>Speak with the Homwisor team for property guidance tailored to your requirements.</p>
          </div>
          <a href="/contact/" className="about-btn about-btn-gold">Connect With Us</a>
        </div>
      </section> */}

      <Footer />

      <style>{`
        * { box-sizing: border-box; }
        .about-page { min-height: 100vh; background: ${CREAM}; color:#111; font-family:"Manrope","Inter",Arial,sans-serif; overflow:hidden; }
        .about-page,.about-page * { font-family:"Manrope","Inter",Arial,sans-serif; }
        .about-container { width:min(1180px,calc(100% - 40px)); margin:0 auto; }

        .about-hero {
          min-height:430px;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          text-align:center;
          background:
            radial-gradient(circle at 82% 28%, rgba(212,175,55,.16), transparent 30%),
            linear-gradient(135deg, #050505 0%, #0d0d0d 55%, #1a160d 100%);
          color:#fff;
        }
        .about-hero:after {
          content:"";
          position:absolute;
          width:580px;
          height:580px;
          right:-180px;
          bottom:-260px;
          border:1px solid rgba(212,175,55,.34);
          border-radius:50%;
          box-shadow:0 0 0 65px rgba(212,175,55,.045),0 0 0 130px rgba(212,175,55,.025);
        }
        .about-hero-glow {
          position:absolute;
          width:500px;
          height:500px;
          right:10%;
          top:8%;
          border-radius:50%;
          background:rgba(212,175,55,.08);
          filter:blur(85px);
        }
        .about-hero-grid { display:none; }
        .about-hero-inner {
          position:relative;
          z-index:2;
          width:100%;
          padding:120px 20px 70px;
          text-align:center;
        }
        .about-kicker,.about-eyebrow {
          color:${GOLD};
          font-size:10px;
          font-weight:900;
          letter-spacing:2px;
        }
        .about-hero h1 {
          max-width:760px;
          margin:15px auto 0;
          color:#fff;
          font-size:clamp(38px,5vw,64px);
          line-height:1.08;
          font-weight:850;
          letter-spacing:-2px;
        }
        .about-hero h1 span {
          color:${GOLD};
          display:block;
        }
        .about-hero p {
          max-width:600px;
          margin:20px auto 0;
          color:rgba(255,255,255,.72);
          font-size:14px;
          line-height:1.8;
        }
        .about-hero-actions { display:none; }
        .about-btn { min-height:48px; padding:0 24px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; text-decoration:none; font-size:12px; font-weight:800; transition:.25s ease; }
        .about-btn-gold { background:${GOLD}; color:#111; }
        .about-btn-gold:hover { background:#e6c454; transform:translateY(-2px); }
        .about-btn-light { border:1px solid rgba(255,255,255,.28); color:#fff; background:rgba(255,255,255,.05); }
        .about-btn-light:hover { background:#fff; color:#111; }
        .hero-scroll-label { margin-top:80px; color:rgba(255,255,255,.4); font-size:9px; letter-spacing:2px; font-weight:800; }
        .hero-scroll-label span { color:${GOLD}; font-size:15px; margin-left:8px; }

        .about-stats-wrap { position:relative; z-index:5; margin-top:-55px; }
        .about-stats { display:grid; grid-template-columns:repeat(4,1fr); background:#fff; border:1px solid #e7e0cf; border-radius:18px; box-shadow:0 18px 50px rgba(0,0,0,.08); overflow:hidden; }
        .about-stats div { padding:27px 25px; border-right:1px solid #eee8dc; }
        .about-stats div:last-child { border-right:0; }
        .about-stats strong { display:block; font-size:30px; font-weight:900; color:${BLACK}; }
        .about-stats span { display:block; margin-top:5px; color:#777; font-size:11px; font-weight:700; }

        .about-section { padding:52px 0; }
        .about-who { background:#fff; }
        .about-two-col { display:grid; grid-template-columns:.95fr 1.05fr; gap:55px; align-items:center; }
        .about-real-image { height:470px; position:relative; border-radius:24px; overflow:hidden; background:#111; box-shadow:0 28px 65px rgba(0,0,0,.14); }
        .about-real-image img { width:100%; height:100%; object-fit:cover; display:block; }
        .about-real-image:after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.58),transparent 55%); }
        .image-overlay-card { position:absolute; z-index:2; left:26px; bottom:26px; color:#fff; }
        .image-overlay-card span { display:block; color:${GOLD}; font-size:10px; letter-spacing:2px; font-weight:800; }
        .image-overlay-card strong { display:block; margin-top:5px; font-size:28px; font-weight:900; }
        .image-overlay-card small { display:block; margin-top:2px; color:rgba(255,255,255,.72); font-size:11px; }
        .image-corner-number { position:absolute; z-index:2; right:24px; top:20px; color:rgba(255,255,255,.75); font-size:12px; font-weight:900; letter-spacing:2px; }
        .about-copy h2,.about-heading-center h2,.about-heading-row h2 { margin:13px 0 18px; color:#111; font-size:36px; line-height:1.03; letter-spacing:-2.3px; font-weight:900; }
        .about-copy h2 { max-width:620px; }
        .about-copy p { max-width:650px; margin:0 0 15px; color:#626262; font-size:14px; line-height:1.9; }
        .about-points { display:grid; grid-template-columns:1fr 1fr; gap:13px 20px; margin-top:28px; }
        .about-points div { color:#333; font-size:12px; font-weight:750; }
        .about-points b { color:${GOLD_DARK}; margin-right:7px; }

        .about-values { background:${CREAM}; }
        .about-heading-center { max-width:760px; margin:0 auto 32px; text-align:center; }
        .about-heading-center h2 { margin-bottom:12px; }
        .about-heading-center h2 span,.about-heading-row h2 span { color:${GOLD_DARK}; }
        .about-heading-center p,.about-heading-row > p { margin:0; color:#777; font-size:13px; line-height:1.75; }
        .values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .value-card { min-height:205px; padding:25px; border:1px solid #e4dccb; border-radius:16px; background:#fff; transition:.25s ease; }
        .value-card:hover { transform:translateY(-5px); border-color:rgba(212,175,55,.65); box-shadow:0 18px 40px rgba(0,0,0,.07); }
        .value-top { display:flex; align-items:center; justify-content:space-between; }
        .value-top span { color:${GOLD_DARK}; font-size:11px; font-weight:900; letter-spacing:1px; }
        .value-top i { color:#c6c0b4; font-style:normal; font-size:17px; }
        .value-card h3 { margin:38px 0 8px; font-size:19px; color:#111; }
        .value-card p { margin:0; color:#777; font-size:11.5px; line-height:1.7; }

        .about-leaders { background:#fff; }
        .about-heading-row { display:flex; align-items:end; justify-content:space-between; gap:40px; margin-bottom:32px; }
        .about-heading-row h2 { max-width:720px; margin-bottom:0; }
        .about-heading-row > p { max-width:330px; padding-bottom:4px; }
        .leaders-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .leader-card { border:1px solid #e9e5dc; border-radius:18px; background:#fff; overflow:hidden; transition:.25s ease; }
        .leader-card:hover { transform:translateY(-5px); box-shadow:0 20px 45px rgba(0,0,0,.08); }
        .leader-image-wrap { height:310px; position:relative; background:#e9e5dc; overflow:hidden; }
        .leader-image-wrap img { width:100%; height:100%; display:block; object-fit:cover; filter:saturate(.88); transition:.4s ease; }
        .leader-card:hover .leader-image-wrap img { transform:scale(1.04); }
        .leader-image-wrap:after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.25),transparent 55%); pointer-events:none; }
        .leader-number { position:absolute; z-index:2; right:16px; top:15px; color:#fff; font-size:24px; font-weight:900; text-shadow:0 2px 10px rgba(0,0,0,.3); }
        .leader-content { padding:21px 19px 23px; }
        .leader-role { color:${GOLD_DARK}; font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:1.4px; }
        .leader-card h3 { margin:7px 0 7px; font-size:15px; color:#111; }
        .leader-card p { margin:0; color:#777; font-size:11px; line-height:1.7; }

        .about-news { background:${CREAM}; }
        .news-link { flex:0 0 auto; color:#111; font-size:11px; font-weight:800; text-decoration:none; border-bottom:1px solid ${GOLD}; padding-bottom:6px; }
        .news-link span { color:${GOLD_DARK}; margin-left:6px; }
        .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .blog-card { background:#fff; border:1px solid #e4dccb; border-radius:17px; overflow:hidden; transition:.25s ease; }
        .blog-card:hover { transform:translateY(-4px); box-shadow:0 18px 42px rgba(0,0,0,.08); }
        .blog-image { height:230px; position:relative; overflow:hidden; background:#ddd; }
        .blog-image img { width:100%; height:100%; object-fit:cover; display:block; transition:.4s ease; }
        .blog-card:hover .blog-image img { transform:scale(1.04); }
        .blog-image span { position:absolute; left:15px; top:15px; padding:7px 9px; background:rgba(0,0,0,.72); color:${GOLD}; font-size:8px; font-weight:800; letter-spacing:1px; }
        .blog-content { padding:22px; }
        .blog-content small { color:${GOLD_DARK}; font-size:9px; font-weight:800; letter-spacing:1.5px; }
        .blog-content h3 { margin:11px 0 9px; color:#111; font-size:18px; line-height:1.25; }
        .blog-content p { margin:0; color:#777; font-size:11px; line-height:1.7; }
        .blog-content a { display:inline-block; margin-top:17px; color:#111; text-decoration:none; font-size:10px; font-weight:800; }
        .blog-content a span { color:${GOLD_DARK}; margin-left:5px; }

        .about-testimonials { background:#fff; }
        .testimonial-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .testimonial-card { position:relative; padding:30px 25px 25px; border:1px solid #e8e3d9; border-radius:17px; background:#fff; }
        .quote-mark { color:${GOLD}; font-family:Georgia,serif !important; font-size:56px; line-height:.6; }
        .testimonial-card > p { margin:20px 0 25px; color:#555; font-size:12px; line-height:1.85; }
        .testimonial-person { display:flex; align-items:center; gap:11px; border-top:1px solid #eee9df; padding-top:17px; }
        .testimonial-initial { width:38px; height:38px; border-radius:50%; display:grid; place-items:center; background:#111; color:${GOLD}; font-size:13px; font-weight:900; }
        .testimonial-person strong { display:block; color:#111; font-size:11px; }
        .testimonial-person span { display:block; margin-top:3px; color:#888; font-size:9px; }

        .about-cta { padding:42px 0; background:#0b0b0b; color:#fff; }
        .about-cta-inner { display:flex; align-items:center; justify-content:space-between; gap:35px; }
        .about-cta .about-eyebrow.light { color:${GOLD}; }
        .about-cta h2 { margin:10px 0 8px; font-size:36px; line-height:1.08; letter-spacing:-1.5px; }
        .about-cta p { margin:0; color:rgba(255,255,255,.65); font-size:13px; }

        @media (max-width:1000px) {
          .about-hero h1 { font-size:36px; }
          .about-two-col { gap:45px; }
          .leaders-grid { grid-template-columns:repeat(2,1fr); }
          .leader-image-wrap { height:360px; }
        }
        @media (max-width:760px) {
          .about-container { width:min(100% - 24px,1180px); }
          .about-hero { min-height:390px; }
          .about-hero-inner { padding:110px 18px 55px; }
          .about-hero h1 { font-size:38px; line-height:1.08; letter-spacing:-1px; }
          .about-hero p { font-size:12px; line-height:1.7; }
          .hero-scroll-label { margin-top:30px; }
          .about-stats-wrap { margin-top:-28px; }
          .about-stats { grid-template-columns:repeat(2,1fr); }
          .about-stats div { padding:19px 15px; border-right:1px solid #eee8dc; border-bottom:1px solid #eee8dc; }
          .about-stats div:nth-child(2),.about-stats div:nth-child(4) { border-right:0; }
          .about-stats div:nth-child(3),.about-stats div:nth-child(4) { border-bottom:0; }
          .about-stats strong { font-size:23px; }
          .about-section { padding:38px 0; }
          .about-two-col { grid-template-columns:1fr; gap:28px; }
          .about-real-image { height:330px; border-radius:19px; }
          .about-copy h2,.about-heading-center h2,.about-heading-row h2 { font-size:36px; letter-spacing:-1.2px; }
          .about-copy p { font-size:12px; }
          .about-points { grid-template-columns:1fr; }
          .values-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .value-card { min-height:190px; padding:19px; }
          .value-card h3 { margin-top:28px; font-size:16px; }
          .value-card p { font-size:10.5px; }
          .about-heading-row { align-items:flex-start; flex-direction:column; gap:18px; margin-bottom:32px; }
          .about-heading-row > p { max-width:100%; }
          .leaders-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .leader-image-wrap { height:240px; }
          .leader-content { padding:16px 14px 18px; }
          .leader-card h3 { font-size:13px; }
          .leader-card p { font-size:10px; }
          .blog-grid { grid-template-columns:1fr; gap:12px; }
          .blog-image { height:220px; }
          .testimonial-grid { grid-template-columns:1fr; gap:12px; }
          .about-cta-inner { flex-direction:column; align-items:flex-start; }
          .about-cta .about-btn { width:100%; }
        }
        @media (max-width:520px) {
          .about-container { width:min(100% - 20px,1180px); }
          .about-hero { min-height:390px; }
          .about-hero-inner { padding:110px 18px 55px; }
          .about-kicker { font-size:8px; letter-spacing:1.5px; }
          .about-hero p { max-width:100%; font-size:12px; line-height:1.7; }
          .about-stats-wrap { margin-top:-18px; }
          .about-stats div { padding:15px 10px; }
          .about-stats span { font-size:8px; }
          .about-section { padding:32px 0; }
          .about-heading-center { margin-bottom:28px; }
          .about-copy h2,.about-heading-center h2,.about-heading-row h2 { font-size:36px; letter-spacing:-1.2px; margin:9px 0 13px; }
          .about-eyebrow { font-size:8px; letter-spacing:1.5px; }
          .about-real-image { height:270px; }
          .image-overlay-card { left:17px; bottom:17px; }
          .image-overlay-card strong { font-size:21px; }
          .about-points { gap:9px; margin-top:20px; }
          .values-grid { gap:8px; }
          .value-card { min-height:165px; padding:15px; border-radius:12px; }
          .value-card h3 { margin-top:23px; font-size:14px; }
          .value-card p { font-size:9.5px; line-height:1.55; }
          .leaders-grid { gap:8px; }
          .leader-image-wrap { height:185px; }
          .leader-content { padding:12px 10px 14px; }
          .blog-content { padding:17px; }
          .testimonial-card { padding:22px 18px 19px; }
          .about-cta { padding:42px 0; }
        }
        @media (max-width:420px) {
          .about-hero h1 { font-size:38px; letter-spacing:-1px; }
          .about-hero-actions { flex-direction:column; }
          .about-hero-actions .about-btn { width:100%; }
          .about-real-image { height:260px; }
          .values-grid,.leaders-grid { grid-template-columns:1fr 1fr; }
          .leader-image-wrap { height:190px; }
          .leader-content { padding:13px 11px 15px; }
          .leader-card h3 { font-size:11.5px; }
          .leader-role { font-size:7.5px; }
          .leader-card p { font-size:9px; line-height:1.55; }
        }
      `}</style>
    </div>
  );
}
