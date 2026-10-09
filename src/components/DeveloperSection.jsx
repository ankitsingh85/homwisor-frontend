import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoOf, initials, developerUrl, propertiesOf, cityOf } from "../data/developers";

const SHOW = 12; // tiles before "View all"

const toDeveloper = (builder, properties) => {
  const listed = propertiesOf(builder, properties);
  return {
    id: builder.id || builder.name,
    name: builder.name,
    logo: logoOf(builder),
    // admin's project count, else how many are listed on HomWisor
    count: builder.count || parseInt(builder.projects, 10) || listed.length,
    listed,
    link: developerUrl(builder),
  };
};

function Logo({ developer }) {
  const [broken, setBroken] = useState(false);
  if (!developer.logo || broken) return <span className="hwdk-mono">{initials(developer.name)}</span>;
  return <img src={developer.logo} alt={`${developer.name} logo`} loading="lazy" onError={() => setBroken(true)} />;
}

export default function DeveloperSection({ builders = [], properties = [], content = {} }) {
  const [showAll, setShowAll] = useState(false);
  const developers = builders.map((b) => toDeveloper(b, properties));
  if (!developers.length) return null;

  const tiles = showAll ? developers : developers.slice(0, SHOW);
  const totalProjects = developers.reduce((s, d) => s + d.count, 0);
  const live = developers.reduce((s, d) => s + d.listed.length, 0);
  const cities = new Set(developers.flatMap((d) => d.listed.map(cityOf)).filter(Boolean)).size;

  // numbers band: set in Admin → Developers, else worked out from the data
  const autoStats = [
    [`${developers.length}+`, "Developers"],
    totalProjects > 0 && [`${totalProjects}+`, "Projects"],
    live > 0 && [live, "Live Listings"],
    cities > 0 && [cities, cities === 1 ? "City" : "Cities"],
  ].filter(Boolean);
  const stats = Array.isArray(content?.stats) && content.stats.length ? content.stats.map((x) => [x.value, x.label]) : autoStats;
  const heading = content?.heading?.trim() || "Top Property Developers";
  const highlight = content?.highlight?.trim() || (content?.heading?.trim() ? "" : "Developers");
  const hi = highlight ? heading.lastIndexOf(highlight) : -1;

  return (
    <section className="hwdk" id="developers">
      <div className="hwdk-glow" aria-hidden="true" />
      <div className="hwdk-wrap">
        <header className="hwdk-head">
          <div className="hwdk-eyebrow"><span />{content?.eyebrow?.trim() || "TRUSTED NAMES"}<span /></div>
          <h2>{hi < 0 ? heading : <>{heading.slice(0, hi)}<em>{highlight}</em>{heading.slice(hi + highlight.length)}</>}</h2>
          <p>{content?.description?.trim() || "Partnering with India's most trusted builders to bring you the best properties."}</p>
        </header>

        <div className="hwdk-grid">
          {tiles.map((d) => (
            <Link key={d.id} to={d.link} className="hwdk-tile" aria-label={`View ${d.name} projects`}>
              <span className={`hwdk-plate${d.logo ? "" : " mono"}`}><Logo developer={d} /></span>
              <strong>{d.name}</strong>
              <span className="hwdk-count">
                {d.count > 0 ? `${d.count} ${d.count === 1 ? "Project" : "Projects"}` : "View projects"}
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          ))}
        </div>

        {developers.length > SHOW && (
          <div className="hwdk-more">
            <button type="button" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show fewer" : `View all ${developers.length} developers`}
            </button>
          </div>
        )}

      </div>

      <div className="hwdk-statsband">
        <div className="hwdk-wrap hwdk-stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <b>{value}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hwdk {
          position: relative; overflow: hidden; isolation: isolate;
          padding: 88px 0 0;
          background:
            radial-gradient(700px 320px at 50% -60px, rgba(212,175,55,.22), transparent 70%),
            linear-gradient(180deg, #0b0b0b 0%, #111 100%);
          color: #fff;
        }
        /* fine gold grid texture */
        .hwdk::before {
          content: ""; position: absolute; inset: 0; z-index: -1; opacity: .5;
          background-image:
            linear-gradient(rgba(212,175,55,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,.06) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
        }
        .hwdk-glow { position: absolute; z-index: -1; right: -160px; bottom: -160px; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(circle, rgba(212,175,55,.14), transparent 65%); }
        .hwdk-wrap { width: min(1240px, calc(100% - 48px)); margin: 0 auto; }

        /* heading */
        .hwdk-head { text-align: center; max-width: 720px; margin: 0 auto 50px; }
        .hwdk-eyebrow { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 16px; color: #E8C766; font-size: 12px; font-weight: 800; letter-spacing: 3.5px; }
        .hwdk-eyebrow span { width: 34px; height: 1.5px; background: linear-gradient(90deg, transparent, #D4AF37); }
        .hwdk-eyebrow span:last-child { transform: scaleX(-1); }
        .hwdk-head h2 { margin: 0 0 14px; font-size: clamp(32px, 4vw, 54px); line-height: 1.05; font-weight: 800; letter-spacing: -1.2px; color: #fff; }
        .hwdk-head h2 em {
          font-style: normal;
          background: linear-gradient(135deg, #F3DC8E 0%, #D4AF37 45%, #9A7418 100%);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
        }
        .hwdk-head p { margin: 0; color: rgba(255,255,255,.62); font-size: 16px; line-height: 1.65; }

        /* tiles */
        .hwdk-grid { --cols: 6; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .hwdk-grid > .hwdk-tile { width: calc((100% - (var(--cols) - 1) * 16px) / var(--cols)); }
        .hwdk-tile {
          position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px;
          padding: 22px 14px 18px; border-radius: 18px; text-decoration: none; text-align: center;
          background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015));
          border: 1px solid rgba(212,175,55,.22);
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .hwdk-tile:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
          background: linear-gradient(180deg, rgba(212,175,55,.12), rgba(212,175,55,.02));
          box-shadow: 0 18px 40px rgba(0,0,0,.45), 0 0 0 1px rgba(212,175,55,.35), 0 0 30px rgba(212,175,55,.15);
        }
        .hwdk-plate {
          width: 100%; height: 76px; padding: 12px 16px; border-radius: 12px;
          display: grid; place-items: center; background: #fff;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,.04);
        }
        .hwdk-plate { overflow: hidden; }
        .hwdk-plate img { width: auto; height: auto; max-width: 100%; max-height: 52px; object-fit: contain; display: block; }
        .hwdk-plate.mono { background: transparent; box-shadow: none; padding: 0; overflow: visible; }
        .hwdk-mono {
          width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center;
          background: #0b0b0b; color: #E8C766; font-size: 17px; font-weight: 800; letter-spacing: 1.5px;
          box-shadow: 0 0 0 2px #D4AF37;
        }
        .hwdk-tile strong { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; min-height: 2.6em; display: grid; place-items: center; }
        .hwdk-count { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700; color: #E8C766; letter-spacing: .3px; }
        .hwdk-count svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; transition: transform .3s; }
        .hwdk-tile:hover .hwdk-count svg { transform: translateX(4px); }

        .hwdk-more { display: flex; justify-content: center; margin-top: 28px; }
        .hwdk-more button {
          height: 48px; padding: 0 28px; border-radius: 999px; cursor: pointer; font-family: inherit;
          border: 1px solid #D4AF37; background: transparent; color: #E8C766;
          font-size: 13px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
          transition: background .25s, color .25s;
        }
        .hwdk-more button:hover { background: linear-gradient(135deg, #E8C766, #D4AF37 50%, #9A7418); color: #111; }

        /* stats strip */
        .hwdk-statsband { position: relative; margin-top: 72px; background: #fff; border-bottom: 1px solid #efe9d8; }
        .hwdk-statsband::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 3px; background: linear-gradient(90deg, #9A7418, #E8C766 50%, #9A7418); }
        .hwdk-stats { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; }
        .hwdk-stats div { padding: 40px 12px 42px; text-align: center; }
        .hwdk-stats div + div { border-left: 1px solid #efe9d8; }
        .hwdk-stats b {
          display: block; font-size: clamp(32px, 3.4vw, 46px); font-weight: 800; line-height: 1; letter-spacing: -1px;
          background: linear-gradient(135deg, #D4AF37, #9A7418 60%, #7a5a10);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
        }
        .hwdk-stats small { display: block; margin-top: 10px; font-size: 12px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; color: #0b0b0b; }

        @media (max-width: 1100px) {
          .hwdk-grid { --cols: 4; }
        }
        @media (max-width: 760px) {
          .hwdk { padding-top: 60px; }
          .hwdk-wrap { width: calc(100% - 32px); }
          .hwdk-head { margin-bottom: 34px; }
          .hwdk-head p { font-size: 14.5px; }
          .hwdk-grid { --cols: 2; gap: 12px; }
          .hwdk-grid > .hwdk-tile { width: calc((100% - 12px) / 2); }
          .hwdk-tile { padding: 16px 10px 14px; gap: 10px; border-radius: 16px; }
          .hwdk-plate { height: 62px; padding: 10px 12px; }
          .hwdk-plate img { max-height: 42px; }
          .hwdk-tile strong { font-size: 14px; }
          .hwdk-statsband { margin-top: 48px; }
          .hwdk-stats { grid-auto-flow: row; grid-template-columns: 1fr 1fr; }
          .hwdk-stats div { padding: 24px 8px 26px; }
          .hwdk-stats div:nth-child(odd) { border-left: none; }
          .hwdk-stats div:nth-child(n+3) { border-top: 1px solid #efe9d8; }
        }
      `}</style>
    </section>
  );
}
