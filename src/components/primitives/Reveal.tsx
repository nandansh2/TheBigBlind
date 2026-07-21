"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_EXPO } from "@/lib/motion";

/**
 * Restrained entrance reveal — used sparingly (checklist: "motion that whispers").
 * translateY + opacity only (GPU-friendly). Respects reduced motion via Framer.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  // Reduced motion: render final state immediately (Framer opacity tweens
  // otherwise bypass the CSS prefers-reduced-motion override).
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}
