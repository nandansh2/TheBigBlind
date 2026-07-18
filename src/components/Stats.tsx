"use client";

import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import PictogramGrid from "./PictogramGrid";
import { useReducedMotion } from "@/lib/useReducedMotion";

const STATS = [
  {
    number: "90%",
    percent: 90,
    caption:
      "of Indian startups fail within five years. Not because the ideas were weak. Because the founders were in the wrong rooms.",
    source: "IBM Institute for Business Value & Oxford Economics",
  },
  {
    number: "18%",
    percent: 18,
    caption:
      "of first-time founders succeed. The gap between them and the rest is not intelligence or work ethic. It is access to the right advisors at the right stage.",
    source: "Growth List, 2026",
  },
  {
    number: "70%",
    percent: 70,
    caption:
      "run out of capital. This is the final symptom, not the root cause. The real cause is always upstream: wrong network, wrong timing, wrong room.",
    source: "CB Insights, 2024",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col items-start text-left"
      initial={
        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }
      }
      whileInView={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <PictogramGrid percent={stat.percent} />
      <div className="mt-6 font-sans font-extrabold tracking-[-0.03em] text-black text-[clamp(40px,6vw,64px)] leading-none">
        {stat.number}
      </div>
      <p className="mt-3 text-gray-dim text-sm sm:text-base leading-relaxed">
        {stat.caption}
      </p>
      <p className="eyebrow mt-4 text-black/40 text-[10px] sm:text-xs">
        {stat.source}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-off-white text-black py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <BlurReveal
          as="p"
          className="eyebrow text-black/50 text-xs sm:text-sm mb-12 sm:mb-16"
        >
          What the data says
        </BlurReveal>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 sm:gap-10">
          {STATS.map((stat, i) => (
            <StatCard key={stat.number} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
