import { Section, Label, ButtonLink, Suit } from "@/components/ds/primitives";
import { EmberCard } from "@/components/ds/cards";
import type { Suit as SuitName } from "@/lib/constants";

export type Offering = { icon?: string; title: string; body: string };

export type AudienceData = {
  suit: SuitName;
  title: string;
  declaration: string;
  sub: string;
  offerings: Offering[];
  elite: { headline: string; body: string };
  cta: { line1: string; line2: string; button: string; href: string };
};

/* Audience landing (Investors / Venture Capital / Financial Institutions), on the
   design system. Hero claim + offerings grid + a single ember statement + CTA. */
export function AudiencePage({ data }: { data: AudienceData }) {
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
              <Suit name={data.suit} />
            </span>
            {data.title}
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>{data.declaration}</b>
          </p>
          <p className="tbb-lead" style={{ marginTop: "var(--space-5)", color: "var(--ink-muted)" }}>
            {data.sub}
          </p>
        </div>
      </Section>

      {/* Offerings */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>What you get</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">A room built around you.</h2>
        </div>
        <div className="deliv-grid">
          {data.offerings.map((o) => (
            <div key={o.title} className="deliv">
              <p className="deliv__name">
                <span className="deliv__dot" />
                {o.title}
              </p>
              <p className="deliv__desc">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Elite circle — the one ember statement */}
      <Section>
        <EmberCard
          top={<Label>By invitation</Label>}
          statement={data.elite.headline}
          foot={data.elite.body}
        />
      </Section>

      {/* CTA */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Take your seat</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">
            {data.cta.line1}
            <span className="tbb-accent">{data.cta.line2}</span>
          </h2>
          <div className="home-hero__cta" style={{ marginTop: "var(--space-6)" }}>
            <ButtonLink href={data.cta.href} variant="blind" withArrow>
              {data.cta.button}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
