"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Stage = {
  pill: string;
  label: string;
  headline: string;
  sub: string;
  items: string[];
};

const STAGES: Stage[] = [
  {
    pill: "Ideation and Early Stage",
    label: "Ideation and Early Stage",
    headline: "You are building before anyone else believes it.",
    sub: "We believe it now.",
    items: [
      "Podcast episode",
      "Govt. accelerator and incubation",
      "Venture building support",
      "Mentorship",
      "Verified vendor access",
      "PR — national and state",
      "Funding readiness preparation",
      "Villa retreat access",
      "Funding through our network",
    ],
  },
  {
    pill: "Growth Stage",
    label: "Growth Stage",
    headline: "You have proven the idea.",
    sub: "Now you need to scale the right way.",
    items: [
      "Podcast and media amplification",
      "PR — national and state",
      "Elite Society peer access",
      "Funding and investor introductions",
      "Venture building partnership",
      "Mentorship",
      "Villa retreat complimentary",
      "Discounted vendor network",
      "Curated hiring pool via college partners",
    ],
  },
  {
    pill: "Late Growth",
    label: "Late Growth",
    headline: "You are not just raising anymore.",
    sub: "You are building something that lasts.",
    items: [
      "Podcast and personal branding",
      "PR — international, national, state",
      "Network partner introductions",
      "High-level investor relationships",
      "Elite Society events",
      "International villa retreats",
      "National villa retreats complimentary",
    ],
  },
];

export function StageSelector() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Pills */}
      <div className="flex flex-wrap gap-3">
        {STAGES.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.pill}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`pill border ${
                on
                  ? "border-transparent bg-bone text-ink"
                  : "border-silver-line text-silver hover:border-silver hover:text-bone"
              }`}
            >
              {s.pill}
            </button>
          );
        })}
      </div>

      {/* Cross-fading card */}
      <div className="mt-10 min-h-[320px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="silver-border rounded-[10px] p-8 md:p-12"
          >
            <p className="label mb-6 text-silver">{stage.label}</p>
            <h3 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
              {stage.headline}
            </h3>
            <p className="mt-3 font-display text-xl italic text-bone-faint md:text-2xl">
              {stage.sub}
            </p>
            <div className="my-8 hairline" />
            <ul className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
              {stage.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-bone-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-silver/70"
                    aria-hidden
                  />
                  <span className="leading-snug">{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
