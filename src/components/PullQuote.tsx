"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function PullQuote() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const { scrollYProgress: entranceProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const entranceEased = useTransform(entranceProgress, [0, 0.4], [0, 1]);
  const topRadius = useTransform(entranceEased, [0, 1], [40, 0]);
  const insetWidth = useTransform(entranceEased, [0, 1], ["90%", "100%"]);

  return (
    <div className="bg-off-white">
      <motion.section
        ref={sectionRef}
        className="bg-black py-28 sm:py-40 px-6 flex flex-col items-center text-center mx-auto"
        style={
          prefersReducedMotion
            ? {}
            : {
                width: insetWidth,
                borderTopLeftRadius: topRadius,
                borderTopRightRadius: topRadius,
              }
        }
      >
        <motion.p
          className="font-serif italic text-white max-w-3xl text-[clamp(24px,4vw,42px)] leading-snug"
          style={prefersReducedMotion ? {} : { opacity, scale, filter }}
        >
          &ldquo;The founders who make it are not always the smartest in the
          room. They are the ones who found the right room.&rdquo;
        </motion.p>

        <p className="mt-10 max-w-2xl text-gray text-base sm:text-lg leading-relaxed">
          Most founders spend their most critical months building in
          isolation, not knowing which investors are relevant to their stage,
          not having access to mentors who have seen this exact problem
          before. By the time they find the right people,{" "}
          <span className="text-white font-medium">
            the expensive mistakes are already made.
          </span>
        </p>

        {/* TODO: host credibility line, pending copy */}
      </motion.section>
    </div>
  );
}
