import type { Metadata } from "next";
import { Section, Label } from "@/components/ds/primitives";
import { EmberCard } from "@/components/ds/cards";
import { ReachOutForm } from "@/components/ds/ReachOutForm";

export const metadata: Metadata = {
  title: "Reach Out — The Big Blind",
  description:
    "Tell us what brought you here. We review every submission personally and respond only when the fit is right.",
};

export default function ReachOutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>Reach out to us</Label>
        </div>
        <div style={{ maxWidth: "var(--measure)", marginTop: "var(--space-6)" }}>
          <h1 className="tbb-headline tbb-display-xl">Tell us what brought you here.</h1>
          <p className="tbb-lead" style={{ marginTop: "var(--space-8)", color: "var(--ink-muted)" }}>
            Every conversation starts somewhere. Choose the path that fits and tell us a little about who you are. We
            review every submission personally and respond only when the fit is right.
          </p>
        </div>
      </Section>

      {/* Before you apply */}
      <Section>
        <EmberCard
          fluid
          className="ember-wide"
          top={<Label>Before you apply</Label>}
          statement="Access to The Big Blind is paid. Then it is vetted."
          foot="You are applying for a seat at a curated table where every member has been reviewed and accepted deliberately. The fee is not a barrier — it is a signal that you are serious."
        />
      </Section>

      {/* Form */}
      <Section>
        <ReachOutForm />
      </Section>
    </>
  );
}
