"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import SpadeMark from "./SpadeMark";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = lastY.current;
    if (current < 80) {
      setHidden(false);
    } else if (current > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = current;
  });

  return (
    <motion.header
      className="fixed top-5 left-1/2 z-[90] w-[92%] max-w-[560px]"
      initial={{ x: "-50%", y: 0, opacity: 1 }}
      animate={{ x: "-50%", y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass-nav rounded-full flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5 sm:py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <SpadeMark className="w-5 h-5 text-white" />
          <span className="hidden min-[480px]:inline eyebrow text-[11px] text-white tracking-[0.14em]">
            THE BIG BLIND
          </span>
        </a>
        <a
          href="#waitlist"
          className="shrink-0 rounded-full bg-white text-black text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Apply Now
        </a>
      </nav>
    </motion.header>
  );
}
