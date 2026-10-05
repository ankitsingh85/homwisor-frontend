import { Link } from "react-router-dom";

// Wraps a banner in its link: site pages ("/property/p1") open in the app,
// full URLs open in a new tab, and no link ("" or "#") renders the banner as is.
export default function BannerLink({ link, label, className, children }) {
  const to = String(link || "").trim();
  if (!to || to === "#") return children;
  if (/^https?:\/\//i.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to.startsWith("/") ? to : `/${to}`} className={className} aria-label={label}>
      {children}
    </Link>
  );
}
