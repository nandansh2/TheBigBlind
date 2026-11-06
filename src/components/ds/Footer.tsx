import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Wordmark, Label, Suit } from "./primitives";

type Col = { heading: string; links: { label: string; href: string; external?: boolean }[] };

const COLS: Col[] = [
  {
    heading: "Programmes",
    links: [
      { label: "The Venture Builder", href: "/venture-building" },
      { label: "Forge", href: "/venture-building" },
      { label: "Ascend", href: "/venture-building" },
    ],
  },
  {
    heading: "Who we work with",
    links: [
      { label: "Founders", href: "/founders" },
      { label: "Investors", href: "/investors" },
      { label: "Network", href: "/partners" },
    ],
  },
  {
    heading: "The firm",
    links: [
      { label: "Vision", href: "/vision" },
      { label: "Reach out", href: "/reach-out" },
      { label: "Podcast", href: SITE.youtube, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="tbb-container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Wordmark />
            <p className="tbb-lead" style={{ marginTop: "var(--space-4)" }}>
              <b>Right people. Same room.</b> We build businesses investors believe in, and connect them
              to the capital that gets them there.
            </p>
          </div>
          <div className="site-footer__cols">
            {COLS.map((col) => (
              <nav key={col.heading} className="site-footer__col" aria-label={col.heading}>
                <Label>{col.heading}</Label>
                {col.links.map((l) =>
                  l.external ? (
                    <a key={l.label} className="site-footer__link" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} className="site-footer__link" href={l.href}>
                      {l.label}
                    </Link>
                  ),
                )}
              </nav>
            ))}
          </div>
        </div>

        <div className="site-footer__base">
          <span className="tbb-label">
            &copy; {new Date().getFullYear()} The Big Blind
          </span>
          <span className="site-footer__suits" aria-hidden="true">
            <Suit name="spade" />
            <Suit name="heart" red />
            <Suit name="diamond" red />
            <Suit name="club" />
          </span>
          <span className="tbb-label">
            <a className="site-footer__link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
