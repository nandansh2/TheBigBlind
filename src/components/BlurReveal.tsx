"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const TAGS = {
  div: motion.create("div"),
  p: motion.create("p"),
  h2: motion.create("h2"),
} as const;

type Tag = keyof typeof TAGS;

type BlurRevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
};

export default function BlurReveal({
  children,
  as = "div",
  className = "",
  delay = 0,
}: BlurRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = TAGS[as];

  return (
    <MotionTag
      className={`js-anim ${className}`}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, filter: "blur(12px)", scale: 0.96, y: 24 }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }
      }
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.9,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
