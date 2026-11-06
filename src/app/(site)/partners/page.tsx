import type { Metadata } from "next";
import { Section, Label, ButtonLink } from "@/components/ds/primitives";
import { FIRMS, STRATEGIC, logoSlug } from "@/lib/network";

export const metadata: Metadata = {
  title: "The Network — The Big Blind",
  description:
    "The room is only as strong as who is in it. Investment firms, institutions and ecosystem partners, from first cheque to Series A.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>The network</Label>
        </div>
        <div style={{ maxWidth: "var(--measure)", marginTop: "var(--space-6)" }}>
          <h1 className="tbb-headline tbb-display-xl">
            The room is only as strong as
            <span className="tbb-accent">who is in it.</span>
          </h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
            <b>These were chosen deliberately.</b> Investment firms, institutions and ecosystem partners who stand with
            founders from first cheque to Series A. Not sponsorships — commitments.
          </p>
        </div>
      </Section>

      {/* Strategic partners */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Strategic partners</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The deliberate relationships.</h2>
        </div>
        <div className="deliv-grid">
          {STRATEGIC.map((p) => (
            <div key={p.name} className="deliv">
              <p className="deliv__name">
                <span className="deliv__dot" />
                {p.name}
              </p>
              <p className="deliv__desc">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The full wall */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Investment firms and institutions</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Associated with the leading firms.</h2>
          <p className="tbb-lead">The investors and ecosystem partners in the room, from first cheque to Series A.</p>
        </div>
        <div className="logo-wall">
          {FIRMS.map((name) => (
            <div key={name} className="logo-cell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-cell__img" src={`/logos/${logoSlug(name)}.png`} alt={name} loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Join the room</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">Build the network with us.</h2>
          <p className="tbb-lead">Partners, institutions and organisations — tell us how you see it.</p>
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
