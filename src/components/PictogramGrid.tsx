"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const COLS = 10;
const TOTAL = 100;

export default function PictogramGrid({ percent }: { percent: number }) {
  const prefersReducedMotion = useReducedMotion();
  const filledCount = Math.round((percent / 100) * TOTAL);
  const squares = Array.from({ length: TOTAL }, (_, i) => i < filledCount);

  return (
    <motion.div
      className="grid gap-[3px] w-fit"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        staggerChildren: prefersReducedMotion ? 0 : 0.006,
      }}
    >
      {squares.map((filled, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.4 },
            visible: prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`w-[7px] h-[7px] sm:w-2.5 sm:h-2.5 rounded-[2px] ${
            filled ? "bg-red-500" : "bg-black/10"
          }`}
        />
      ))}
    </motion.div>
  );
}
