"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./primitives";

type NavLink = { label: string; href: string; external?: boolean };

// Phase 1 targets map to routes that exist today. They move to /programmes, /network
// in phase 2 as those pages are built.
const LINKS: NavLink[] = [
  { label: "Programmes", href: "/venture-building" },
  { label: "Founders", href: "/founders" },
  { label: "Investors", href: "/investors" },
  { label: "Network", href: "/partners" },
  { label: "Podcast", href: "https://youtube.com/@BigBlindPod", external: true },
];

const APPLY_HREF = "/reach-out";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string, external?: boolean) =>
    !external && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="tbb-container">
        <nav className="tbb-nav">
          <Link href="/" aria-label="The Big Blind, home" className="site-header__brand">
            <Wordmark />
          </Link>

          <div className="tbb-nav__links">
            {LINKS.map((l) =>
              l.external ? (
                <a key={l.label} className="tbb-nav__link" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  className="tbb-nav__link"
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>

          <div className="tbb-nav__actions">
            <Link className="tbb-btn tbb-btn--blind tbb-btn--sm" href={APPLY_HREF}>
              Apply
            </Link>
            <button
              className="tbb-nav__menu"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="site-menu" role="dialog" aria-label="Menu">
            {LINKS.map((l) =>
              l.external ? (
                <a key={l.label} className="site-menu__link" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  className="site-menu__link"
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </header>
  );
}
