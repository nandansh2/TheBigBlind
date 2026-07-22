"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type Line = {
  text: string;
  /** ghost = soft connective copy · solid = ignites to full white · large = thesis line */
  tone?: "ghost" | "solid" | "large";
};

/**
 * Scroll-activated text, word by word. The whole block is bound to scroll
 * progress, and each word owns a slice of that progress — so words develop from
 * near-black to their resting brightness as you scroll down, and fall back as
 * you scroll up. Driven by position, not one-shot triggers, so it is fully
 * reversible.
 */
function Word({
  word,
  progress,
  range,
  target,
  reduce,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  target: number;
  reduce: boolean | null;
}) {
  const opacity = useTransform(progress, range, [0.1, target]);
  // Fail-open: the server renders words at full readable opacity. The ghost
  // state is only applied once JS is running to drive the scroll animation,
  // so a broken script leaves readable copy rather than near-invisible text.
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);

  return (
    <motion.span
      className="mr-[0.26em] inline-block"
      style={reduce || !live ? { opacity: target } : { opacity }}
    >
      {word}
    </motion.span>
  );
}

const SIZES: Record<string, string> = {
  large:
    "text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.08] tracking-[-0.01em] text-white",
  solid:
    "text-2xl sm:text-3xl md:text-[2.5rem] font-display font-medium leading-[1.2] tracking-[-0.01em] text-white",
  ghost:
    "text-xl sm:text-2xl md:text-[1.9rem] font-display font-normal leading-[1.35] text-bone",
};

// How many word-slices a single word takes to develop. Higher = softer band of
// words mid-transition at any moment.
const OVERLAP = 3;

export function ScrollText({
  lines,
  className = "",
}: {
  lines: Line[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const totalWords = lines.reduce(
    (n, l) => n + (l.text ? l.text.split(" ").length : 0),
    0
  );

  let cursor = 0;

  return (
    // `relative` is required — framer needs a non-static container to compute
    // the scroll offset correctly.
    <div ref={ref} className={`relative flex flex-col gap-7 md:gap-9 ${className}`}>
      {lines.map((line, i) => {
        if (!line.text) {
          return <div key={i} className="h-2 md:h-6" aria-hidden="true" />;
        }
        const tone = line.tone ?? "ghost";
        const target = tone === "ghost" ? 0.62 : 1;
        const words = line.text.split(" ");
        const start = cursor;
        cursor += words.length;

        return (
          <p key={i} className={`${SIZES[tone]} text-balance`}>
            {words.map((w, wi) => {
              const idx = start + wi;
              return (
                <Word
                  key={wi}
                  word={w}
                  progress={scrollYProgress}
                  reduce={reduce}
                  target={target}
                  range={[
                    idx / totalWords,
                    Math.min(1, (idx + OVERLAP) / totalWords),
                  ]}
                />
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
