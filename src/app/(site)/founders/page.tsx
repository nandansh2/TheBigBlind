import type { Metadata } from "next";
import { Section, Label, ButtonLink, Chip, Suit } from "@/components/ds/primitives";
import { EdgeCard } from "@/components/ds/EdgeCard";

export const metadata: Metadata = {
  title: "Founders — The Big Blind",
  description:
    "The best seat in the house is reserved for founders. Whatever stage you are at, there is a place for you here.",
};

const JOURNEY = [
  {
    label: "Founder",
    heading: "You are building. We are listening.",
    sub: "The moment you join, the room starts working for you.",
    items: ["Podcast episode", "Govt. accelerator access", "Venture building support", "Mentorship", "Verified vendors", "Villa retreat access"],
    variant: "night" as const,
  },
  {
    label: "Funding ready",
    heading: "Before you pitch, we prepare you.",
    sub: "The gap between a great founder and a funded one is almost always preparation.",
    items: ["Funding readiness", "Pitch and narrative", "Investor readiness", "PR ahead of raise", "Vendor support", "Villa retreat access"],
    variant: "paper" as const,
  },
  {
    label: "Funding",
    heading: "The room opens the right doors.",
    sub: "Your introduction is curated. Your credibility is established.",
    items: ["Warm investor intros", "Curated deal flow", "Elite Society access", "Demo day access", "Funding through our network", "Mentorship through the raise"],
    variant: "paper" as const,
  },
  {
    label: "Post funding",
    heading: "The raise was the beginning, not the goal.",
    sub: "We stay in the room with you.",
    items: ["Media and branding", "Elite Society peers", "PR across geographies", "High-level investor ties", "International retreats", "National retreats complimentary"],
    variant: "blind" as const,
  },
];

const STAGES = [
  {
    label: "Ideation and early stage",
    headline: "You are building before anyone else believes it.",
    sub: "We believe it now.",
    items: ["Podcast episode", "Govt. accelerator and incubation", "Venture building support", "Mentorship", "Verified vendor access", "PR, national and state", "Funding readiness preparation", "Villa retreat access", "Funding through our network"],
  },
  {
    label: "Growth stage",
    headline: "You have proven the idea.",
    sub: "Now you need to scale the right way.",
    items: ["Podcast and media amplification", "PR, national and state", "Elite Society peer access", "Funding and investor introductions", "Venture building partnership", "Mentorship", "Villa retreat complimentary", "Discounted vendor network", "Curated hiring pool"],
  },
  {
    label: "Late growth",
    headline: "You are not just raising anymore.",
    sub: "You are building something that lasts.",
    items: ["Podcast and personal branding", "PR, international to state", "Network partner introductions", "High-level investor relationships", "Elite Society events", "International villa retreats", "National retreats complimentary"],
  },
];

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>Where we come in</Label>
        </div>
        <div style={{ maxWidth: "var(--measure)", marginTop: "var(--space-6)" }}>
          <h1 className="tbb-headline tbb-display-xl" style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7em", color: "var(--ink-muted)", display: "inline-flex" }}>
              <Suit name="spade" />
            </span>
            Founders
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>The best seat in the house is reserved for founders.</b>
          </p>
          <p className="tbb-lead" style={{ marginTop: "var(--space-5)", color: "var(--ink-muted)" }}>
            We built this room for builders — the ones who start from nothing, carry the risk, and create the value the
            whole ecosystem depends on. Whatever stage you are at, there is a place for you here.
          </p>
        </div>
      </Section>

      {/* The journey */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The journey</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The room works at every stage.</h2>
          <p className="tbb-lead">From the first conversation to long after the raise.</p>
        </div>
        <div className="edge-grid">
          {JOURNEY.map((n, i) => (
            <EdgeCard key={n.label} section={n.label} title={n.heading} variant={n.variant} step={i} meta={n.items.join(" · ")}>
              <p>{n.sub}</p>
            </EdgeCard>
          ))}
        </div>
      </Section>

      {/* Stages */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>What stage are you at?</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">See exactly how we step in.</h2>
        </div>
        <div className="tbb-stack" style={{ gap: "var(--space-6)" }}>
          {STAGES.map((s) => (
            <div key={s.label} className="gap-card">
              <Label>{s.label}</Label>
              <h3 className="gap-card__head" style={{ marginTop: "var(--space-4)", fontSize: "20px", lineHeight: "26px" }}>
                {s.headline} <span style={{ color: "var(--ink-muted)" }}>{s.sub}</span>
              </h3>
              <div className="tbb-row" style={{ marginTop: "var(--space-5)" }}>
                {s.items.map((it) => (
                  <Chip key={it} tone="plain">
                    {it}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Acceptance policy */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Acceptance policy</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">We do not accept all applications.</h2>
          <p className="tbb-lead">
            Every founder who applies is reviewed — who is building, what they are building, and who they are building it
            for. Acceptance is not guaranteed. It is earned.
          </p>
          <div className="home-hero__cta" style={{ marginTop: "var(--space-6)" }}>
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Reach out to us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
