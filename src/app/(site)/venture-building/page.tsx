import type { Metadata } from "next";
import { Section, Label, ButtonLink, Chip } from "@/components/ds/primitives";
import { BlockCard, BlockArt } from "@/components/ds/cards";

export const metadata: Metadata = {
  title: "The Venture Builder — Forge and Ascend",
  description:
    "We build businesses investors believe in. Forge builds the business; Ascend takes it to Series A. One firm, two stages, one network behind both.",
};

const DELIVERABLES = [
  { name: "A pitch deck", desc: "That separates actual results from hypothesis and forecast." },
  { name: "A financial model", desc: "Driver-based, with actuals kept apart from scenarios." },
  { name: "An indexed data room", desc: "Organised records, with gaps flagged, not hidden." },
  { name: "The right introductions", desc: "Warm, relevant and made only when readiness supports them." },
];

export default function VentureBuildingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>The Big Blind Venture Builder</Label>
        </div>
        <div style={{ maxWidth: "var(--measure)", marginTop: "var(--space-6)" }}>
          <h1 className="tbb-headline tbb-display-xl">
            We build businesses
            <span className="tbb-accent">investors believe in.</span>
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>One firm, two programmes, one ladder.</b> Forge builds the business and tests the model. Ascend takes a
            proven company to a Series A it can run. The same network stands behind both.
          </p>
        </div>
      </Section>

      {/* The two programmes */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Choose your stage</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Two programmes. One ladder.</h2>
        </div>
        <div className="tbb-cards tbb-cards--2">
          <BlockCard
            href="/venture-building/forge"
            variant="night"
            title="Forge"
            body="An 8 week sprint to a clearer business, a tested model and materials investors take seriously."
            chip={<Chip tone="on-dark">Early stage · ₹1.5L</Chip>}
            art={BlockArt.lattice}
          />
          <BlockCard
            href="/venture-building/ascend"
            variant="blind"
            title="Ascend"
            body="A 6 month Series A readiness programme, co-delivered with Kairos CoLabs. Metrics, narrative, data room, then the room of investors."
            chip={<Chip tone="on-red">Series A · ₹7.5L</Chip>}
            art={BlockArt.diamonds}
          />
        </div>
      </Section>

      {/* What both build */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>What both build</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The same discipline, at every stage.</h2>
          <p className="tbb-lead">Honest materials, built alongside the business — never a substitute for progress.</p>
        </div>
        <div className="deliv-grid">
          {DELIVERABLES.map((d) => (
            <div key={d.name} className="deliv">
              <p className="deliv__name">
                <span className="deliv__dot" />
                {d.name}
              </p>
              <p className="deliv__desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Start a conversation</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">Tell us what you are building.</h2>
          <p className="tbb-lead">We will tell you which programme it belongs in.</p>
          <div className="home-hero__cta" style={{ marginTop: "var(--space-6)" }}>
            <ButtonLink href="/venture-building/forge" variant="ink" withArrow>
              Start with Forge
            </ButtonLink>
            <ButtonLink href="/reach-out" variant="blind" withArrow>
              Reach out to us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
