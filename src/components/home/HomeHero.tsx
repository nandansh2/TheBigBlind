"use client";

import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";

/** Glass corner card used for the hero's two primary actions. */
function CornerCard({
  href,
  eyebrow,
  title,
  delay,
}: {
  href: string;
  eyebrow: string;
  title: string;
  delay: string;
}) {
  return (
    <Link
      href={href}
      style={{ animationDelay: delay }}
      className="glass glass-hover group rise flex w-full max-w-[20rem] items-center gap-4 rounded-[10px] px-6 py-4 text-left md:w-auto md:max-w-none"
    >
      <span className="flex flex-col">
        <span className="font-mono text-[0.62rem] uppercase tracking-label text-silver-dim">
          {eyebrow}
        </span>
        <span className="mt-1 max-w-[13rem] font-display text-lg leading-tight text-bone">
          {title}
        </span>
      </span>
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-silver-line text-bone transition-transform duration-500 ease-expo group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

/**
 * Hero. All entrance motion is CSS (`.rise`) rather than JS, so the copy is
 * readable even if scripts never run — see the fail-open contract in globals.css.
 */
export function HomeHero() {
  return (
    <section className="relative flex flex-col overflow-hidden md:min-h-[100dvh]">
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
      <div className="content-px relative z-10 flex w-full flex-col items-center justify-center pt-32 pb-4 text-center md:flex-1 md:pt-0 md:pb-0">
        <p className="eyebrow rise">Founders · Investors · VCs · Institutions</p>

        <h1
          style={{
            textShadow: "0 2px 44px rgba(0,0,0,0.55)",
            animationDelay: "0.1s",
          }}
          className="rise mt-8 max-w-[14ch] font-display text-[3.2rem] font-medium leading-[0.96] tracking-[-0.02em] text-bone sm:text-6xl md:text-[5.4rem] lg:text-[6.6rem]"
        >
          The problem isn&rsquo;t the idea.{" "}
          <span className="italic">It&rsquo;s the room.</span>
        </h1>

        <p
          style={{
            textShadow: "0 1px 24px rgba(0,0,0,0.8)",
            animationDelay: "0.28s",
          }}
          className="rise mt-9 max-w-xl text-base leading-relaxed text-bone/90 md:text-lg"
        >
          The Big Blind is a venture-building ecosystem built around one
          principle: the right conversation, with the right people, at the right
          time, changes everything.
        </p>
      </div>

      {/* Action cards — programme (left) and application (right) on desktop;
          centred and stacked between the hero and the next section on mobile. */}
      <div className="relative z-10 mt-8 mb-12 flex w-full flex-col items-center gap-4 px-6 md:absolute md:inset-x-10 md:bottom-10 md:mb-0 md:mt-0 md:w-auto md:flex-row md:items-end md:justify-between md:gap-0 md:px-0">
        <CornerCard
          href="/venture-building"
          eyebrow="the programme"
          title="Our Venture Building Programme"
          delay="0.42s"
        />
        <CornerCard
          href="/reach-out#apply"
          eyebrow="by application only"
          title="apply to join the waitlist"
          delay="0.5s"
        />
      </div>

      {/* subtle centre scroll cue — desktop only; on mobile the cards sit here */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:flex">
        <span
          style={{ animationDelay: "1.1s" }}
          className="rise h-10 w-px bg-gradient-to-b from-silver/60 to-transparent opacity-40"
        />
      </div>
    </section>
  );
}
