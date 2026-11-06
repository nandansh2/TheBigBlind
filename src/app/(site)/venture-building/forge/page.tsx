import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, ButtonLink, Chip, Arrow } from "@/components/ds/primitives";
import { EdgeCard } from "@/components/ds/EdgeCard";

export const metadata: Metadata = {
  title: "Forge — The Big Blind Venture Builder",
  description:
    "An eight week engagement to build a clearer business, test the model in the market, and prepare for better investor conversations. ₹1,50,000 + GST.",
};

/* Forge explainer. Built from the FORGE program structure. Flow: claim -> what you
   walk away with -> the eight week sequence (edge-tab blocks) -> what we work on ->
   materials -> how we work together -> fee + honest framing -> ecosystem -> CTA. */

const SPECS = [
  { value: <>~8<span className="spec__unit">weeks</span></>, label: "Engagement" },
  { value: <>₹1.5<span className="spec__unit">L + GST</span></>, label: "Programme fee" },
  { value: <>1<span className="spec__unit">/ week</span></>, label: "Working session" },
  { value: <>4<span className="spec__unit">reviews</span></>, label: "Weeks 2 · 4 · 6 · 8" },
];

const OUTCOMES = [
  "A clear customer, problem, value proposition and business-model decision.",
  "A prioritised improvement plan with owners and evidence of what changed.",
  "A tested growth approach and a scorecard of real results, including what did not work.",
  "A consistent pitch deck, financial model and organised due-diligence pack.",
  "A justified decision on investor outreach and the next phase of building.",
];

const PHASES = [
  {
    section: "Weeks 1 · 2",
    title: "Clarify and choose",
    body: "Diagnose the business, set a baseline and clarify the target customer. Compare business-model options and identify the gaps investors will question.",
    meta: "Milestone — agree the model hypothesis, baseline and workplan.",
    variant: "night" as const,
  },
  {
    section: "Weeks 3 · 4",
    title: "Fix and test",
    body: "Close the highest-priority gaps and launch focused customer, pricing, sales and growth experiments. Review early results and decide what to change.",
    meta: "Milestone — experiments completed or tracked, results documented.",
    variant: "paper" as const,
  },
  {
    section: "Weeks 5 · 6",
    title: "Execute and strengthen",
    body: "Repeat what works, stop what doesn't, and sharpen the operating process. Track growth and economics against the agreed baseline.",
    meta: "Milestone — show what improved, what didn't, and why, with evidence.",
    variant: "paper" as const,
  },
  {
    section: "Weeks 7 · 8",
    title: "Review and connect",
    body: "Assess progress, business quality and readiness. Where it fits, agree a relevant investor or partner shortlist and prepare the introductions.",
    meta: "Milestone — an explicit proceed, defer or refocus decision.",
    variant: "blind" as const,
  },
];

const GAPS = [
  { head: "Unclear customer or problem", work: "Narrow the priority customer and test the problem and offer.", out: "Problem statement, customer evidence, positioning." },
  { head: "Unproven business model", work: "Compare plausible models, pricing and routes to market.", out: "Model decision, assumptions and economics to test." },
  { head: "Weak or inconsistent growth", work: "Find the bottleneck and run focused experiments.", out: "Growth backlog, experiment results, weekly scorecard." },
  { head: "Investor concerns", work: "Review the business through an investor lens and prioritise fixes.", out: "Gap register with impact, owner, action, evidence." },
  { head: "Inconsistent fundraising story", work: "Align claims with operating and financial evidence.", out: "Deck and model that tell the same story." },
  { head: "Missing diligence material", work: "Organise records and make omissions visible.", out: "Data-room index, document tracker, open-issues list." },
];

const MATERIALS = [
  { name: "Pitch deck", desc: "An editable deck across problem, customer, solution, market, model, traction and plan. Claims separate actual results from hypotheses and forecasts." },
  { name: "Financial model", desc: "A driver-based model linking revenue assumptions, costs, hiring, cash needs and key economics, with actuals kept apart from forecasts and scenarios." },
  { name: "Due-diligence readiness", desc: "An organised data-room index and tracker across company, financial, commercial, product and IP records. Missing items are flagged, not hidden." },
  { name: "Business evidence pack", desc: "A model note, gap register, growth scorecard, experiment log and investor Q&A — a traceable basis for the story and the open risks." },
];

export default function ForgePage() {
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
            <Label>Forge · Early stage</Label>
          </div>
        </div>
        <div style={{ maxWidth: "var(--measure)" }}>
          <h1 className="tbb-headline tbb-display-xl" style={{ marginTop: "var(--space-6)" }}>
            Build a business
            <span className="tbb-accent">investors take seriously.</span>
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>Forge is an eight week engagement.</b> We work alongside you to clarify the opportunity,
            choose the strongest model on the evidence, close the gaps investors will question, and run a
            focused growth plan. The deck, financial model and diligence pack build in parallel.
          </p>
          <div className="home-hero__cta">
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Apply to Forge
            </ButtonLink>
            <ButtonLink href="/venture-building/ascend" variant="outline" withArrow>
              See Ascend
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

      {/* What you walk away with */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The intended outcome</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">What you walk away with.</h2>
          <p className="tbb-lead">
            Judged against an agreed baseline and stage-appropriate milestones, not a generic promise of funding.
          </p>
        </div>
        <ul className="gap-grid" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {OUTCOMES.map((o, i) => (
            <li key={i} className="deliv">
              <p className="deliv__name">
                <span className="deliv__dot" />
                {`0${i + 1}`}
              </p>
              <p className="deliv__desc">{o}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* The eight week sequence — edge-tab blocks */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The sequence</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Eight weeks, four moves.</h2>
          <p className="tbb-lead">
            A suggested sequence, not a fixed promise. Deck, financial and diligence work runs through every phase.
          </p>
        </div>
        <div className="edge-grid">
          {PHASES.map((p, i) => (
            <EdgeCard key={p.title} section={p.section} title={p.title} meta={p.meta} variant={p.variant} step={i}>
              <p>{p.body}</p>
            </EdgeCard>
          ))}
        </div>
        <p className="tbb-lead" style={{ marginTop: "var(--space-8)", color: "var(--ink-muted)" }}>
          Completing eight weeks does not automatically mean a business is ready to raise. Introductions, when they
          fit, come after — subject to readiness, recipient interest and a separate agreement on scope.
        </p>
      </Section>

      {/* What we work on */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>What we work on</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">We start from your gaps.</h2>
          <p className="tbb-lead">
            Each agreed fix has an owner, a due date and a visible test of completion. What cannot be closed in eight
            weeks is recorded openly, not dressed up as resolved.
          </p>
        </div>
        <div className="gap-grid">
          {GAPS.map((g) => (
            <div key={g.head} className="gap-card">
              <p className="gap-card__head">{g.head}</p>
              <p className="gap-card__work">{g.work}</p>
              <p className="gap-card__out">{g.out}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Materials */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Built in parallel</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The materials, as the business learns.</h2>
          <p className="tbb-lead">Editable, consistent and honest about what is actual, hypothesis and forecast.</p>
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

      {/* How we work together */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>How we work together</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Hands-on, with clear roles.</h2>
        </div>
        <div className="split-2">
          <div className="gap-card">
            <p className="gap-card__head">The Big Blind</p>
            <p className="gap-card__work">
              Diagnose the business, challenge assumptions, prioritise fixes, structure experiments and review the
              evidence. Prepare the deck, financials and diligence materials, and pursue suitable warm introductions
              once progress and readiness support them.
            </p>
          </div>
          <div className="gap-card">
            <p className="gap-card__head">The founder</p>
            <p className="gap-card__work">
              Own the business decisions and execution. Make the time, speak with customers, run the agreed actions and
              keep the tracker current. Provide accurate information, disclose material risks, and approve every
              recipient before anything is shared.
            </p>
          </div>
        </div>
        <p className="tbb-lead" style={{ marginTop: "var(--space-6)", color: "var(--ink-muted)" }}>
          A weekly working session, a shared action and metrics tracker, async review between sessions, and phase-end
          reviews at weeks 2, 4, 6 and 8. Session length and cadence are agreed at kickoff.
        </p>
      </Section>

      {/* Fee + diligence — the reference edge-tab pair */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Terms</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The commitment, stated plainly.</h2>
        </div>
        <div className="edge-grid edge-grid--pair">
          <EdgeCard section="Readiness" title="Data room and diligence" variant="paper" step={2}>
            <p>
              An indexed data room and tracker, built as the business is. Preparation is not an audit, valuation or
              legal opinion; specialist review may still be needed.
            </p>
          </EdgeCard>
          <EdgeCard
            section="Programme fee"
            title={
              <>
                ₹1,50,000 <span style={{ opacity: 0.7, fontSize: "0.6em" }}>+ GST</span>
              </>
            }
            variant="blind"
            step={3}
            meta="Scope, dates and terms confirmed before work begins."
          >
            <p>
              Hands-on business-building and readiness support. It does not guarantee revenue, funding, terms,
              introductions or meetings — investors and partners decide independently.
            </p>
          </EdgeCard>
        </div>
      </Section>

      {/* Ecosystem */}
      <Section>
        <div className="section-head" style={{ marginBottom: "var(--space-8)" }}>
          <div className="section-head__eyebrow">
            <Label>The wider ecosystem</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Relationships that open relevant rooms.</h2>
          <p className="tbb-lead">
            India-focused, with founder, investor and ecosystem relationships here and internationally. Selected
            relationships include Anthill Ventures, T-Hub, Kairos CoLabs and haf.vc. Introductions are case-specific and
            do not imply investment commitments.
          </p>
        </div>
        <div className="tbb-row">
          {["Anthill Ventures", "T-Hub", "Kairos CoLabs", "haf.vc"].map((n) => (
            <Chip key={n} tone="plain">
              {n}
            </Chip>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>The next step</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">Start with a baseline and a plan.</h2>
          <p className="tbb-lead">
            Agree the starting point, the priority outcomes and the cadence. Then we begin.
          </p>
          <div className="home-hero__cta" style={{ marginTop: "var(--space-6)" }}>
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Apply to Forge
            </ButtonLink>
            <ButtonLink href="/venture-building/ascend" variant="outline" withArrow>
              Next: Ascend
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
