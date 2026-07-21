"use client";

import { motion } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { EASE_EXPO } from "@/lib/motion";

export function HomeHero() {
  const scrollToRoom = () => {
    document.getElementById("room")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      {/* Shader light-field background */}
      <div className="absolute inset-0">
        <ShaderAnimation className="h-full w-full" />
      </div>

      {/* Legibility overlays: radial darken + a soft band behind the text block */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 50% 45%, rgba(11,11,13,0.30) 0%, rgba(11,11,13,0.70) 55%, rgba(11,11,13,0.92) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[26%] h-[52%]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(11,11,13,0.55), transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      {/* Content */}
      <div className="content-px relative z-10 flex w-full flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO }}
          className="eyebrow"
        >
          Founders · Investors · VCs · Institutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE_EXPO }}
          style={{ textShadow: "0 2px 44px rgba(0,0,0,0.55)" }}
          className="mt-8 max-w-[14ch] font-display text-[3.2rem] font-medium leading-[0.96] tracking-[-0.02em] text-bone sm:text-6xl md:text-[5.4rem] lg:text-[6.6rem]"
        >
          The problem isn&rsquo;t the idea.{" "}
          <span className="italic">It&rsquo;s the room.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: EASE_EXPO }}
          style={{ textShadow: "0 1px 24px rgba(0,0,0,0.8)" }}
          className="mt-9 max-w-xl text-base leading-relaxed text-bone/90 md:text-lg"
        >
          The Big Blind is a venture-building ecosystem built around one
          principle: the right conversation, with the right people, at the right
          time, changes everything.
        </motion.p>
      </div>

      {/* Corner apply card (CRED-style), scrolls to the scroll section */}
      <motion.button
        type="button"
        onClick={scrollToRoom}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE_EXPO }}
        className="glass glass-hover group absolute bottom-8 right-6 z-10 flex items-center gap-4 rounded-[10px] px-6 py-4 text-left md:bottom-10 md:right-10"
      >
        <span className="flex flex-col">
          <span className="font-mono text-[0.62rem] uppercase tracking-label text-silver-dim">
            by application only
          </span>
          <span className="mt-1 font-display text-lg text-bone">
            apply to join the waitlist
          </span>
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-silver-line text-bone transition-transform duration-500 ease-expo group-hover:translate-y-0.5">
          ↓
        </span>
      </motion.button>

      {/* subtle centre scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="h-10 w-px bg-gradient-to-b from-silver/60 to-transparent"
        />
      </div>
    </section>
  );
}
