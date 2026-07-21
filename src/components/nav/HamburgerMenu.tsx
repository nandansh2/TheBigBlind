"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useMenu } from "./MenuContext";
import { Wordmark } from "@/components/primitives/Wordmark";
import { Glyph } from "@/components/primitives/Glyph";
import { ROUTES, SEGMENTS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/motion";

type Key = "vision" | "where" | "partners" | "reach";

const PARENTS: { key: Key; label: string; href?: string }[] = [
  { key: "vision", label: "Our Vision", href: ROUTES.vision },
  { key: "where", label: "Where We Come In" },
  { key: "partners", label: "Partners and Collaborations", href: ROUTES.partners },
  { key: "reach", label: "Reach Out to Us", href: ROUTES.reachOut },
];

const REACH_PATHS = [
  { label: "Podcast", path: "podcast" },
  { label: "Venture Building", path: "venture-building" },
  { label: "Collaboration Opportunities", path: "collaboration" },
];

// Framer variants for the staggered left column.
const listV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.12 } },
};
const itemV = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: EASE_EXPO } },
};

function RightPanel({ active, onNavigate }: { active: Key; onNavigate: () => void }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="min-h-[220px]"
      >
        {active === "where" && (
          <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
            {SEGMENTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={onNavigate}
                className="group flex items-center gap-4"
              >
                <Glyph name={s.suit} size={24} />
                <span className="font-mono text-[0.82rem] uppercase tracking-label text-silver transition-colors duration-300 ease-expo group-hover:text-bone">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        )}

        {active === "vision" && (
          <div className="max-w-md">
            <p className="font-display text-2xl leading-snug text-bone md:text-3xl">
              We exist to make sure the right people find each other.
            </p>
            <Link
              href={ROUTES.vision}
              onClick={onNavigate}
              className="mt-8 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-label text-silver transition-colors hover:text-bone"
            >
              Enter <span aria-hidden>→</span>
            </Link>
          </div>
        )}

        {active === "partners" && (
          <div className="max-w-md">
            <p className="font-display text-3xl text-bone md:text-4xl">
              <span className="metal-silver">200+</span>
            </p>
            <p className="mt-3 text-bone-muted">extended network and partners</p>
            <Link
              href={ROUTES.partners}
              onClick={onNavigate}
              className="mt-8 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-label text-silver transition-colors hover:text-bone"
            >
              View Partners <span aria-hidden>→</span>
            </Link>
          </div>
        )}

        {active === "reach" && (
          <div className="flex flex-col gap-7">
            {REACH_PATHS.map((r) => (
              <Link
                key={r.path}
                href={`${ROUTES.reachOut}?path=${r.path}`}
                onClick={onNavigate}
                className="group flex items-center gap-4"
              >
                <Glyph name="lozenge" size={16} tone="silver" />
                <span className="font-mono text-[0.8rem] uppercase tracking-label text-silver transition-colors duration-300 ease-expo group-hover:text-bone">
                  {r.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export function HamburgerMenu() {
  const { open, closeMenu } = useMenu();
  const [active, setActive] = useState<Key>("where");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: open ? 0.3 : 0.2, ease: "easeOut" }}
          onAnimationComplete={() => {
            // reset default active whenever it closes
            if (!open) setActive("where");
          }}
        >
          {/* Top bar */}
          <div className="content-px">
            <div className="mx-auto flex h-[68px] max-w-content items-center justify-between md:h-[76px]">
              <Wordmark onClick={closeMenu} />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="group grid h-11 w-11 place-items-center rounded-[6px] border border-silver-line transition-colors duration-300 ease-expo hover:border-silver"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-bone" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-bone" />
                </span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="content-px flex h-[calc(100dvh-68px)] items-center md:h-[calc(100dvh-76px)]">
            <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
              {/* Left — parents */}
              <motion.ul
                variants={listV}
                initial="hidden"
                animate="show"
                className="flex flex-col"
              >
                {PARENTS.map((p) => {
                  const isActive = active === p.key;
                  const rowClass = `group relative flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left transition-colors duration-300 ease-expo md:py-5 ${
                    isActive
                      ? "bg-gradient-to-r from-white/[0.07] via-white/[0.02] to-transparent"
                      : ""
                  }`;
                  // Constant size across states — only colour changes — so the
                  // label never reflows (e.g. Partners going 1→2 lines on hover).
                  const labelClass = `font-display leading-[1.05] text-[1.9rem] md:text-[2.3rem] transition-colors duration-300 ease-expo ${
                    isActive ? "text-bone" : "text-bone-faint hover:text-bone-muted"
                  }`;

                  const inner = (
                    <>
                      <span className={labelClass}>{p.label}</span>
                      <span
                        className={`font-mono text-xs transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-silver opacity-100"
                            : "-translate-x-2 opacity-0"
                        }`}
                        aria-hidden
                      >
                        →
                      </span>
                    </>
                  );

                  return (
                    <motion.li key={p.key} variants={itemV} className="relative">
                      {p.href ? (
                        <Link
                          href={p.href}
                          onClick={closeMenu}
                          onMouseEnter={() => setActive(p.key)}
                          onFocus={() => setActive(p.key)}
                          className={`relative ${rowClass}`}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActive(p.key)}
                          onMouseEnter={() => setActive(p.key)}
                          onFocus={() => setActive(p.key)}
                          className={`relative ${rowClass}`}
                        >
                          {inner}
                        </button>
                      )}
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Right — swapping panel */}
              <div className="md:pt-2">
                <RightPanel active={active} onNavigate={closeMenu} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
