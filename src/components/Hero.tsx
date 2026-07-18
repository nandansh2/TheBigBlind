"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import GlassCard from "./GlassCard";
import { useReducedMotion } from "@/lib/useReducedMotion";

function HeadlineLine({
  children,
  delay,
  metallic,
  prefersReducedMotion,
}: {
  children: React.ReactNode;
  delay: number;
  metallic?: boolean;
  prefersReducedMotion: boolean;
}) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block ${metallic ? "metallic-text" : ""}`}
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : { y: "110%", opacity: 0, filter: "blur(8px)" }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { y: "0%", opacity: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [hovering, setHovering] = useState(false);

  const rawGlowX = useMotionValue(0);
  const rawGlowY = useMotionValue(0);
  const glowX = useSpring(rawGlowX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(rawGlowY, { stiffness: 80, damping: 20 });

  const { scrollYProgress: exitProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const exitEased = useTransform(exitProgress, [0, 0.4], [0, 1]);
  const bottomRadius = useTransform(exitEased, [0, 1], [0, 40]);
  const insetWidth = useTransform(exitEased, [0, 1], ["100%", "90%"]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawGlowX.set(e.clientX - rect.left);
    rawGlowY.set(e.clientY - rect.top);
  }

  return (
    <div className="bg-off-white">
      <motion.section
        id="top"
        ref={heroRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        className="relative bg-black min-h-[100svh] overflow-hidden flex flex-col items-center justify-center px-6 pt-32 pb-40 sm:pb-56 mx-auto"
        style={
          prefersReducedMotion
            ? {}
            : {
                width: insetWidth,
                borderBottomLeftRadius: bottomRadius,
                borderBottomRightRadius: bottomRadius,
              }
        }
      >
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              left: glowX,
              top: glowY,
              width: 600,
              height: 600,
              x: "-50%",
              y: "-50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
              opacity: hovering ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div
            className="eyebrow flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-6"
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            Founders &middot; Investors &middot; VCs &middot; Institutions
          </motion.div>

          <h1 className="font-sans font-extrabold text-white leading-[0.98] tracking-[-0.035em] text-[clamp(38px,7vw,84px)]">
            <HeadlineLine
              delay={0.15}
              prefersReducedMotion={prefersReducedMotion}
            >
              The problem
            </HeadlineLine>
            <HeadlineLine
              delay={0.32}
              prefersReducedMotion={prefersReducedMotion}
            >
              isn&apos;t the idea.
            </HeadlineLine>
            <HeadlineLine
              delay={0.49}
              metallic
              prefersReducedMotion={prefersReducedMotion}
            >
              It&apos;s the room.
            </HeadlineLine>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, filter: "blur(6px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            The Big Blind is a venture-building ecosystem built around one
            principle: the right conversation, with the right people, at the
            right time, changes everything.
          </motion.p>

          <motion.a
            href="#waitlist"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-7 py-3.5 text-sm sm:text-base transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Apply Now to Join Waitlist &#8595;
          </motion.a>
        </div>

        <GlassCard containerRef={heroRef} />

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: prefersReducedMotion ? 1 : 0.7 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow text-[10px]">Scroll</span>
          <span className="w-px h-8 bg-white/40 scroll-cue-line origin-top" />
        </motion.div>
      </motion.section>
    </div>
  );
}
