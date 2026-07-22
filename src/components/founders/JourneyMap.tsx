"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Glyph, type GlyphName } from "@/components/primitives/Glyph";
import { EASE_EXPO } from "@/lib/motion";

type Node = {
  glyph: GlyphName;
  label: string;
  heading: string;
  sub: string;
  items: string[];
};

const NODES: Node[] = [
  {
    glyph: "spade",
    label: "Founder",
    heading: "You are building. We are listening.",
    sub: "The moment you join, the room starts working for you.",
    items: [
      "Podcast episode",
      "Govt. accelerator and incubation",
      "Venture building support",
      "Mentorship",
      "Verified vendor access",
      "Villa retreat access",
    ],
  },
  {
    glyph: "lozenge",
    label: "Funding Ready",
    heading: "Before you pitch, we prepare you.",
    sub: "The gap between a great founder and a funded one is almost always preparation.",
    items: [
      "Funding readiness preparation",
      "Pitch positioning and narrative",
      "Investor readiness sessions",
      "PR amplification ahead of raise",
      "Strategic vendor support",
      "Villa retreat access",
    ],
  },
  {
    glyph: "heart",
    label: "Funding",
    heading: "The room opens the right doors.",
    sub: "Your introduction is curated. Your credibility is established.",
    items: [
      "Warm investor introductions",
      "Curated deal flow via DealFlowHub",
      "Elite Society investor access",
      "Demo day and showcase access",
      "Funding through our network",
      "Mentorship through the raise",
    ],
  },
  {
    glyph: "star",
    label: "Post Funding",
    heading: "The raise was the beginning, not the goal.",
    sub: "We stay in the room with you.",
    items: [
      "Media amplification and branding",
      "Elite Society peer network",
      "PR — international, national, state",
      "High-level investor relationships",
      "International villa retreats",
      "National villa retreats complimentary",
    ],
  },
];

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-bone-muted">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-silver/70"
            aria-hidden
          />
          <span className="leading-snug">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function JourneyMap() {
  const [active, setActive] = useState(0);
  const node = NODES[active];

  return (
    <div>
      {/* Node track */}
      <div className="no-scrollbar -mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
        <div className="relative flex min-w-[520px] items-start justify-between md:min-w-0">
          {/* connecting line */}
          <span
            className="absolute left-6 right-6 top-7 h-px bg-silver-line"
            aria-hidden
          />
          {NODES.map((n, i) => {
            const on = i === active;
            return (
              <button
                key={n.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className="group relative z-10 flex w-32 flex-col items-center gap-4"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-full border transition-all duration-300 ease-expo ${
                    on
                      ? "border-silver bg-ink-700 shadow-[0_0_30px_-6px_rgba(255,61,104,0.4)]"
                      : "border-silver-line bg-ink-800 group-hover:border-silver/60"
                  }`}
                >
                  <Glyph
                    name={n.glyph}
                    size={24}
                    tone={n.glyph === "heart" ? "pink" : "silver"}
                    className={on ? "opacity-100" : "opacity-55"}
                  />
                </span>
                <span
                  className={`text-center font-mono text-[0.62rem] uppercase tracking-label transition-colors duration-300 ${
                    on ? "text-bone" : "text-silver-dim"
                  }`}
                >
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content panel */}
      <div className="mt-14 min-h-[300px] md:mt-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_EXPO }}
            className="glass rounded-[10px] p-8 md:p-12"
          >
            <h3 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
              {node.heading}
            </h3>
            <p className="mt-4 max-w-2xl italic text-bone-muted md:text-lg">
              {node.sub}
            </p>
            <div className="my-8 hairline" />
            <ItemList items={node.items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
