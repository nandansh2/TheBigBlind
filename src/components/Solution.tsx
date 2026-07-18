"use client";

import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import SpadeMark from "./SpadeMark";
import { useReducedMotion } from "@/lib/useReducedMotion";

const CARDS = [
  {
    suit: "spade",
    title: "Founders",
    items: [
      "Direct access to investors and VCs who are actively deploying capital",
      "Mentorship, funding readiness, and branding support at every stage",
      "Government incubation access, jobs circle, and Goa retreats",
    ],
  },
  {
    suit: "hearts-diamonds",
    title: "Investors & VCs",
    items: [
      "AI-powered due diligence via DealFlowHub before deals reach your desk",
      "Curated deal flow from vetted, funding-ready founders",
      "Elite Suits Club membership and thought leadership through the podcast",
    ],
  },
  {
    suit: "club",
    title: "Financial Institutions",
    items: [
      "Compliance-checked startup pipeline via DealFlowHub",
      "Partnership and collaboration opportunities across the ecosystem",
      "Elite Suits Club membership and media visibility",
    ],
  },
];

function SuitGlyph({ suit }: { suit: string }) {
  if (suit === "spade") {
    return <SpadeMark className="w-6 h-6 text-white" />;
  }
  if (suit === "hearts-diamonds") {
    return (
      <span className="text-2xl leading-none text-red-500">
        &hearts; &diams;
      </span>
    );
  }
  return <span className="text-2xl leading-none text-white">&clubs;</span>;
}

function PersonaCard({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isInvestors = card.suit === "hearts-diamonds";

  return (
    <div className="relative">
      {isInvestors && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-card opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(244,63,94,0.4) 0%, rgba(244,63,94,0) 70%)",
          }}
        />
      )}
      <motion.div
        className="relative bg-black rounded-card p-8 sm:p-9 [transform-style:preserve-3d]"
        style={{ perspective: 1000 }}
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 32, rotateX: 14 }
        }
        whileInView={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0, rotateX: 0 }
        }
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        whileHover={
          prefersReducedMotion ? {} : { y: -6, scale: 1.02, rotateX: 0 }
        }
        transition={{
          duration: 0.8,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="w-11 h-11 rounded-full border border-line-dark flex items-center justify-center mb-6">
          <SuitGlyph suit={card.suit} />
        </div>
        <h3 className="text-white font-sans font-bold text-xl tracking-[-0.02em] mb-5">
          {card.title}
        </h3>
        <motion.ul
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{
            staggerChildren: prefersReducedMotion ? 0 : 0.12,
            delayChildren: prefersReducedMotion ? 0 : index * 0.12 + 0.45,
          }}
        >
          {card.items.map((item) => (
            <motion.li
              key={item}
              className="text-white/70 text-sm sm:text-base leading-relaxed border-t border-line-dark pt-4"
              variants={{
                hidden: prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12 },
                visible: prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default function Solution() {
  return (
    <section className="bg-off-white text-black py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <BlurReveal
            as="p"
            className="eyebrow text-black/50 text-xs sm:text-sm mb-5"
          >
            The solution
          </BlurReveal>
          <BlurReveal
            as="h2"
            className="font-sans font-extrabold tracking-[-0.03em] text-black text-[clamp(30px,5vw,52px)] leading-[1.05]"
          >
            The Big Blind changes this.
          </BlurReveal>
          <BlurReveal
            as="p"
            delay={0.1}
            className="mt-6 text-gray-dim text-base sm:text-lg leading-relaxed"
          >
            We bring founders, investors, VCs, and financial institutions to
            one curated table. Every introduction is deliberate. Every
            conversation is designed to move something forward.
          </BlurReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <PersonaCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
