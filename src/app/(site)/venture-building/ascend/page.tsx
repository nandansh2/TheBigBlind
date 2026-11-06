import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, ButtonLink, Chip, Arrow } from "@/components/ds/primitives";
import { EdgeCard } from "@/components/ds/EdgeCard";

export const metadata: Metadata = {
  title: "Ascend — Series A readiness, with Kairos CoLabs",
  description:
    "A six month Series A readiness programme covering metrics, narrative, financial planning and governance, then investor engagement. Delivered with Kairos CoLabs. ₹7,50,000 + GST.",
};

/* Ascend explainer. Built from the ASCEND programme overview (co-delivered with Kairos
   CoLabs). Flow: claim -> founder fit -> the six month journey (edge-tab blocks) ->
   fundraising materials -> investor access -> how to join -> fee + honest framing -> CTA. */

const SPECS = [
  { value: <>6<span className="spec__unit">months</span></>, label: "Structured programme" },
  { value: <>12<span className="spec__unit">founders</span></>, label: "Maximum per cohort" },
  { value: <>Rolling</>, label: "Admissions" },
  { value: <>₹7.5<span className="spec__unit">L + GST</span></>, label: "Programme fee" },
];

const PHASES = [
  {
    section: "Months 1 · 2 — Spark",
    title: "Assess and plan",
    body: "Assess metrics, governance, narrative and team structure. Identify the gaps and build a 90-day plan to close them.",
    variant: "night" as const,
  },
  {
    section: "Months 2 · 3 — Refine",
    title: "Economics and narrative",
    body: "Review unit economics and sharpen the investment narrative. Develop the investor deck and the three-year financial model.",
    variant: "paper" as const,
  },
  {
    section: "Months 3 · 4 — Build",
    title: "Data room and targets",
    body: "Organise the data room and address governance and compliance gaps. Build a target investor list and a CRM to manage outreach.",
    variant: "paper" as const,
  },
  {
    section: "Months 4 · 5 — Connect",
    title: "Into the room",
    body: "Pursue relevant warm introductions and exploratory investor conversations. Refine the pitch using live feedback.",
    variant: "paper" as const,
  },
  {
    section: "Months 5 · 6 — Ascend",
    title: "Run the raise",
    body: "Support a coordinated, parallel fundraising process, term-sheet discussions and closing activities where relevant.",
    variant: "blind" as const,
  },
];

const MATERIALS = [
  { name: "Investor deck", desc: "12 to 18 slides, with a clear investment narrative and a defined fundraising ask." },
  { name: "Financial model", desc: "A three-year projection, monthly for Year 1, with clear assumptions and scenarios." },
  { name: "Indexed data room", desc: "Financial, legal, IP and contract records, organised and ready for diligence." },
  { name: "Investor outreach kit", desc: "A one-page investor summary, a target investor list and a CRM to run the process." },
];

const STEPS = [
  { name: "Speak to The Big Blind", desc: "Express your interest in Ascend." },
  { name: "Share your current materials", desc: "Send your investor deck and the previous six months of key metrics." },
  { name: "Join a 30-minute screening call", desc: "Review readiness, timing and fit with the Ascend team." },
  { name: "Selection and onboarding", desc: "Selected founders receive orientation and begin the work." },
];

export default function AscendPage() {
  return (
    <>
      {/* Hero */}
      <Section className="home-hero">
        <Link href="/venture-building" className="prog-back">
          <span className="prog-back__arrow">
            <Arrow />
          </span>
          The Venture Builder
        </Link>
        <div style={{ marginTop: "var(--space-6)" }}>
          <div className="section-head__eyebrow">
            <Label>Ascend · Series A · with Kairos CoLabs</Label>
          </div>
        </div>
        <div style={{ maxWidth: "var(--measure)" }}>
          <h1 className="tbb-headline tbb-display-xl" style={{ marginTop: "var(--space-6)" }}>
            Six months to a
            <span className="tbb-accent">Series A you can run.</span>
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>Ascend prepares founders for an institutional raise.</b> A structured process across metrics, narrative,
            financial planning and governance, followed by investor engagement and fundraising support. Launched and
            delivered in India by The Big Blind and Kairos CoLabs.
          </p>
          <div className="home-hero__cta">
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Start a fit conversation
            </ButtonLink>
            <ButtonLink href="/venture-building/forge" variant="outline" withArrow>
              See Forge
            </ButtonLink>
          </div>
        </div>
        <div className="spec-bar">
          {SPECS.map((s, i) => (
            <div key={i}>
              <p className="spec__value">{s.value}</p>
              <p className="spec__label">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder fit */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Founder fit</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Who Ascend is built for.</h2>
          <p className="tbb-lead">
            The core is Series A readiness. Later-stage fit is reviewed in screening, so the work matches your
            fundraising needs.
          </p>
        </div>
        <div className="split-2">
          <div className="gap-card">
            <p className="gap-card__head">Business profile</p>
            <p className="gap-card__work">
              India-based or India-focused, at pre-Series A and later stages. The traction guide is ₹1 Cr+ ARR or
              equivalent, considered in the context of the business model.
            </p>
          </div>
          <div className="gap-card">
            <p className="gap-card__head">Founder commitment</p>
            <p className="gap-card__work">
              Planning to raise within 6 to 12 months, with active founder participation and a willingness to work on
              the gaps identified through structured feedback.
            </p>
          </div>
        </div>
      </Section>

      {/* The six month journey — edge-tab blocks */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The six month journey</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Readiness, built in stages.</h2>
          <p className="tbb-lead">The phases overlap, so preparation and investor engagement move together.</p>
        </div>
        <div className="edge-grid">
          {PHASES.map((p, i) => (
            <EdgeCard key={p.title} section={p.section} title={p.title} variant={p.variant} step={i}>
              <p>{p.body}</p>
            </EdgeCard>
          ))}
        </div>
      </Section>

      {/* Fundraising materials */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Your fundraising materials</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">What you take into the room.</h2>
        </div>
        <div className="deliv-grid">
          {MATERIALS.map((m) => (
            <div key={m.name} className="deliv">
              <p className="deliv__name">
                <span className="deliv__dot" />
                {m.name}
              </p>
              <p className="deliv__desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investor access */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Investor access</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">A network, approached with a clear fit.</h2>
          <p className="tbb-lead">
            Kairos CoLabs reports a network of 150+ active Series A investors across India, Southeast Asia and global
            funds. Introductions are weighed on stage, sector, geography, portfolio fit, readiness and availability —
            and participation does not guarantee introductions, meetings, investment or any other outcome.
          </p>
        </div>
        <div className="tbb-row">
          <Chip tone="plain">India</Chip>
          <Chip tone="plain">Southeast Asia</Chip>
          <Chip tone="plain">Global funds</Chip>
        </div>
      </Section>

      {/* How to join */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>How to join</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Start with a fit conversation.</h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.name} className="step">
              <span className="step__n tbb-num">{`0${i + 1}`}</span>
              <p className="step__name">{s.name}</p>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fee — the reference edge-tab pair */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Terms</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The commitment, stated plainly.</h2>
        </div>
        <div className="edge-grid edge-grid--pair">
          <EdgeCard section="What it covers" title="A guided, parallel raise" variant="paper" step={2}>
            <p>
              Programme delivery, materials and investor-process support across six months. Fundraising and term-sheet
              support is not legal advice — seek independent legal and tax advice for your transaction.
            </p>
          </EdgeCard>
          <EdgeCard
            section="Programme fee"
            title={
              <>
                ₹7,50,000 <span style={{ opacity: 0.7, fontSize: "0.6em" }}>+ GST</span>
              </>
            }
            variant="blind"
            step={3}
            meta="Framework: Kairos CoLabs, Ascend programme, 2026."
          >
            <p>Twelve founders per cohort, rolling admissions. Fit, timing and readiness are confirmed in screening.</p>
          </EdgeCard>
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Next steps</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">Speak to The Big Blind to begin.</h2>
          <p className="tbb-lead">Share your deck and your last six months of metrics, and we will review the fit.</p>
          <div className="home-hero__cta" style={{ marginTop: "var(--space-6)" }}>
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Start a fit conversation
            </ButtonLink>
            <ButtonLink href="/venture-building/forge" variant="outline" withArrow>
              Back to Forge
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
