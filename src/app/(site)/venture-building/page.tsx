import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";
import { Section, Breadcrumb } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Glyph } from "@/components/primitives/Glyph";
import { ScrollText, type Line } from "@/components/scroll/ScrollText";
import { SpotlightText } from "@/components/primitives/SpotlightText";
import { CTASection } from "@/components/shared/CTASection";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Venture Builder — Our Programme",
  description:
    "Building businesses that investors believe in. The Big Blind Venture Builder validates, designs, builds, and prepares founders to become investment-ready — then introduces them to the right investors.",
  path: "/venture-building",
});

/* ------------------------------------------------------------------ *
 * Content — refined from the Venture Builder brief. Prices, product
 * names, and deliverables are kept exactly as provided.
 * ------------------------------------------------------------------ */

const PHILOSOPHY: Line[] = [
  { text: "every founder begins with a vision.", tone: "ghost" },
  { text: "every investor begins with questions.", tone: "ghost" },
  { text: "" },
  { text: "the distance between them decides who gets funded.", tone: "solid" },
  { text: "" },
  { text: "we exist to close that distance.", tone: "large" },
];

const CLARITY = [
  "What problem they are solving",
  "Whether customers truly need the solution",
  "How investors evaluate startups",
  "How to build a scalable business model",
  "What financial metrics matter",
  "How to communicate their vision",
  "How to approach fundraising strategically",
];

type Phase = {
  n: string;
  name: string;
  tag: string;
  intro: string;
  items: string[];
  outcome: string;
};

const PHASES: Phase[] = [
  {
    n: "01",
    name: "Discover",
    tag: "Validate before you build",
    intro: "We begin by understanding",
    items: [
      "Founder Vision",
      "Problem Statement",
      "Customer Pain Points",
      "Market Opportunity",
      "Customer Validation",
      "Competition",
      "Product-Market Fit",
      "Industry Landscape",
    ],
    outcome: "A business solving the right problem for the right market.",
  },
  {
    n: "02",
    name: "Design",
    tag: "Build a scalable business",
    intro: "Together we develop",
    items: [
      "Business Model",
      "Revenue Model",
      "Pricing Strategy",
      "Go-To-Market Strategy",
      "Customer Acquisition Plan",
      "Value Proposition",
      "TAM / SAM / SOM",
      "Competitive Positioning",
    ],
    outcome: "A scalable and commercially viable business.",
  },
  {
    n: "03",
    name: "Build",
    tag: "Create an investor-ready company",
    intro: "This stage includes",
    items: [
      "Investor Pitch Deck",
      "Financial Forecast",
      "Unit Economics",
      "Revenue Model",
      "Investment Requirement",
      "Use of Funds",
      "Growth Roadmap",
      "Business Milestones",
    ],
    outcome: "Everything an investor expects before taking the first meeting.",
  },
  {
    n: "04",
    name: "Validate",
    tag: "Think like an investor",
    intro:
      "Before fundraising begins, we challenge the business. Through expert reviews we refine",
    items: [
      "Pitch Delivery",
      "Founder Communication",
      "Business Strategy",
      "Investment Readiness",
      "Gap Analysis",
      "Due Diligence Preparation",
    ],
    outcome: "A confident founder backed by a stronger business.",
  },
  {
    n: "05",
    name: "Connect",
    tag: "Enter The Big Blind ecosystem",
    intro: "Once investment-ready, founders gain access to",
    items: [
      "Curated Investors",
      "Industry Mentors",
      "Strategic Advisors",
      "Banking Partners",
      "Legal Partners",
      "Branding Partners",
      "Technology Partners",
      "Enterprise Introductions",
      "Business Opportunities",
    ],
    outcome:
      "We don't introduce founders to every investor. We introduce them to the right investors.",
  },
];

type Product = {
  name: string;
  price: string;
  term?: string;
  tagline: string;
  sub: string;
  listLabel: string;
  items: string[];
};

const PRODUCTS: Product[] = [
  {
    name: "Investor Pitch Studio™",
    price: "₹65,000",
    tagline: "Transform your business into a compelling investment story.",
    sub: "For founders who need a professionally structured investor pitch deck.",
    listLabel: "Deliverables",
    items: [
      "Investor Pitch Deck",
      "Storytelling Framework",
      "Market Research",
      "TAM / SAM / SOM",
      "Business Model",
      "GTM Strategy",
      "Competition Analysis",
      "Investment Ask",
      "Premium Design",
    ],
  },
  {
    name: "Financial Intelligence Suite™",
    price: "₹85,000",
    tagline: "Numbers that inspire investor confidence.",
    sub: "For startups requiring institutional-grade financial planning.",
    listLabel: "Deliverables",
    items: [
      "Financial Forecast (3–5 Years)",
      "Revenue Projections",
      "Unit Economics",
      "Cash Flow",
      "CAC & LTV",
      "Break-even Analysis",
      "Gross Margins",
      "Funding Requirement",
      "Financial Assumptions",
    ],
  },
  {
    name: "Venture Catalyst Programme™",
    price: "₹65,000",
    term: "Two Months",
    tagline: "Refine. Validate. Prepare.",
    sub: "For founders who already have a pitch deck and financial model but need strategic refinement before fundraising.",
    listLabel: "Includes",
    items: [
      "Business Validation",
      "Product-Market Fit Review",
      "GTM Optimisation",
      "Investor Perspective",
      "Founder Coaching",
      "Pitch Practice",
      "Mentor Sessions",
      "Fundraising Readiness",
    ],
  },
];

const FLAGSHIP = {
  name: "The Big Blind Venture Builder™",
  badge: "Signature Programme",
  price: "₹1,50,000",
  term: "Two Months",
  tagline: "Our flagship engagement.",
  sub: "From idea validation to investor introductions, we become your venture-building partner.",
  items: [
    "Business Validation",
    "Market Research",
    "Product-Market Fit",
    "Business Model",
    "GTM Strategy",
    "Revenue Strategy",
    "TAM / SAM / SOM",
    "Investor Pitch Deck",
    "Financial Forecast",
    "Unit Economics",
    "Founder Coaching",
    "Expert Reviews",
    "Investor Readiness",
    "Mentor Access",
    "Business Introductions",
    "Investor Matching",
    "Curated Investor Meetings",
    "Post-Programme Ecosystem Access",
  ],
};

const WHO = [
  "Idea-stage founders",
  "Early-stage startups",
  "MVP-stage companies",
  "Revenue-generating startups preparing to raise",
  "First-time founders",
  "Businesses looking to scale strategically",
];

const DIFFERENTIATORS = [
  { most: "Most firms prepare documents.", we: "We prepare businesses." },
  {
    most: "Most accelerators provide group mentorship.",
    we: "We provide one-on-one venture building.",
  },
  { most: "Most consultants advise.", we: "We work alongside founders." },
  {
    most: "Most platforms connect startups with investors.",
    we: "We ensure founders deserve those introductions.",
  },
];

/* ------------------------------------------------------------------ *
 * Small building blocks
 * ------------------------------------------------------------------ */

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed text-bone-muted">
      <span
        aria-hidden
        className="mt-[0.35rem] text-[0.7rem] text-silver"
      >
        ◆
      </span>
      <span>{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */

export default function VentureBuildingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <Reveal>
          <Breadcrumb>Our Programme</Breadcrumb>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center gap-5">
            <Glyph name="diamond" size={46} tone="pink" />
            <p className="label text-silver">The Big Blind Venture Builder™</p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Building businesses that{" "}
            <span className="italic">investors believe in.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-8 max-w-readable leading-relaxed text-bone-muted md:text-lg">
            We partner with founders to validate ideas, challenge assumptions,
            refine business models, strengthen financials, and prepare companies
            to become investment-ready. This is not consulting. This is venture
            building.
          </p>
        </Reveal>
      </Section>

      {/* Philosophy — scroll-activated */}
      <Section className="border-t border-silver-line py-28 md:py-40">
        <div className="mx-auto max-w-prose">
          <p className="label mb-14 text-silver md:mb-20">
            The Big Blind Philosophy
          </p>
          <ScrollText lines={PHILOSOPHY} />
        </div>
      </Section>

      {/* Why Venture Building — the 90% stat leads */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-12 text-silver">Why Venture Building</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-14">
            <p className="font-display text-7xl leading-none md:text-9xl">
              <span className="metal-silver">90%</span>
            </p>
            <p className="max-w-xl font-display text-2xl leading-snug text-bone md:text-3xl">
              of startups don&rsquo;t fail because they have bad ideas. They fail
              because they lack clarity.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
          {CLARITY.map((c, i) => (
            <Reveal key={c} delay={(i % 2) * 0.06}>
              <div className="flex items-baseline gap-5 border-t border-silver-line py-5">
                <span className="font-mono text-xs text-silver-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-bone-muted">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="max-w-2xl font-display text-2xl leading-snug text-bone md:text-3xl">
            Most founders build for customers. Investors invest in businesses.
            <br />
            <span className="italic text-silver">Our role is to align both.</span>
          </p>
        </Reveal>
      </Section>

      {/* The Framework — centerpiece */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">The Framework™</p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone md:text-6xl">
            Five phases. From idea to the right introduction.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-bone-muted md:text-lg">
            The Big Blind Venture Builder Framework&trade; is a deliberate
            sequence. Every phase ends with a concrete outcome — nothing moves
            forward until the last thing is real.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-5">
          {PHASES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.04}>
              <article className="glass glass-hover rounded-[10px] p-8 md:p-11">
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-14">
                  {/* Left — phase identity */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-silver-dim">
                        Phase {p.n}
                      </span>
                      <span className="hairline flex-1" />
                    </div>
                    <h3 className="mt-5 font-display text-4xl text-bone md:text-5xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 font-display text-lg italic text-bone-muted">
                      {p.tag}
                    </p>
                    <div className="mt-8 rounded-[8px] border border-silver-line bg-ink-800/40 p-5">
                      <p className="label mb-2 text-silver-dim">Outcome</p>
                      <p className="leading-relaxed text-bone">{p.outcome}</p>
                    </div>
                  </div>

                  {/* Right — what happens */}
                  <div>
                    <p className="mb-6 leading-relaxed text-bone-muted">
                      {p.intro}:
                    </p>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                      {p.items.map((it) => (
                        <Check key={it}>{it}</Check>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">Our Venture Building Products</p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone md:text-6xl">
            Engage at the level you need.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-bone-muted md:text-lg">
            Take a single building block, or the full flagship engagement.
            Whichever you choose, the standard is the same.
          </p>
        </Reveal>

        {/* À-la-carte products */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRODUCTS.map((prod, i) => (
            <Reveal key={prod.name} delay={i * 0.06}>
              <article className="glass glass-hover flex h-full flex-col rounded-[10px] p-8 md:p-9">
                <h3 className="font-display text-2xl leading-snug text-bone">
                  {prod.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-3xl text-bone">
                    {prod.price}
                  </span>
                  {prod.term && (
                    <span className="font-mono text-[0.7rem] uppercase tracking-label text-silver-dim">
                      {prod.term}
                    </span>
                  )}
                </div>
                <p className="mt-6 font-display text-lg italic leading-snug text-silver">
                  {prod.tagline}
                </p>
                <p className="mt-3 leading-relaxed text-bone-muted">{prod.sub}</p>

                <div className="mt-8 border-t border-silver-line pt-6">
                  <p className="label mb-5 text-silver-dim">{prod.listLabel}</p>
                  <ul className="flex flex-col gap-3">
                    {prod.items.map((it) => (
                      <Check key={it}>{it}</Check>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Flagship — featured */}
        <Reveal className="mt-5">
          <article className="silver-border relative overflow-hidden rounded-[12px] p-8 md:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              {/* Identity */}
              <div className="lg:w-[38%]">
                <span className="pill">{FLAGSHIP.badge}</span>
                <h3 className="mt-6 font-display text-3xl leading-tight text-bone md:text-4xl">
                  {FLAGSHIP.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-5xl md:text-6xl">
                    <span className="metal-silver">{FLAGSHIP.price}</span>
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-label text-silver-dim">
                    {FLAGSHIP.term}
                  </span>
                </div>
                <p className="mt-6 font-display text-xl italic text-silver">
                  {FLAGSHIP.tagline}
                </p>
                <p className="mt-3 max-w-sm leading-relaxed text-bone-muted">
                  {FLAGSHIP.sub}
                </p>
              </div>

              {/* Full inclusion list */}
              <div className="lg:flex-1">
                <p className="label mb-6 text-silver">Includes Everything</p>
                <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {FLAGSHIP.items.map((it) => (
                    <Check key={it}>{it}</Check>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* Who should join */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">Who Should Join</p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone md:text-5xl">
            Built for founders who are serious about the raise.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {WHO.map((w, i) => (
            <Reveal key={w} delay={i * 0.05}>
              <span className="inline-flex items-center gap-3 rounded-full border border-silver-line px-5 py-3 text-bone-muted">
                <Glyph name="spade" size={14} tone="silver" />
                {w}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-12 text-silver">
            What Makes The Big Blind Different
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-silver-line bg-silver-line md:grid-cols-2">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.we} delay={(i % 2) * 0.06}>
              <div className="flex h-full flex-col justify-between gap-6 bg-ink p-8 md:p-10">
                <p className="leading-relaxed text-bone-faint">{d.most}</p>
                <p className="font-display text-2xl leading-snug text-bone md:text-3xl">
                  {d.we}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our Promise */}
      <Section className="section-py border-t border-silver-line">
        <Reveal className="mx-auto max-w-prose text-center">
          <p className="label mb-8 text-silver">Our Promise</p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-bone-muted">
            At the end of the programme, founders won&rsquo;t just have a pitch
            deck or a financial model. They&rsquo;ll have a business that has
            been validated, refined, challenged, strengthened, and positioned to
            confidently enter conversations with investors, strategic partners,
            and growth opportunities.
          </p>
          <div className="mt-12">
            <SpotlightText
              as="h2"
              radius={300}
              className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-5xl"
            >
              We don&rsquo;t build presentations. We build investment-ready
              companies.
            </SpotlightText>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <CTASection
        line1="Where vision meets investment."
        line2="Let us build the business investors believe in."
        button="Reach Out to Us"
        href={ROUTES.reachOut}
      />
    </>
  );
}
