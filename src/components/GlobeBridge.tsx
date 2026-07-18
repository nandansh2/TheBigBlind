"use client";

import { motion } from "framer-motion";
import Globe from "./Globe";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function GlobeBridge() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[-110px] sm:top-[-160px] lg:top-[-190px] z-20"
      style={{ x: "-50%" }}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.85 }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, scale: 1 }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full bg-white/[0.08] blur-3xl"
        />
        <Globe />
      </div>
    </motion.div>
  );
}
