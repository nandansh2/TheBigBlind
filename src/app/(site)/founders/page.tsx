import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Section, Breadcrumb } from "@/components/primitives/Section";
import { Glyph } from "@/components/primitives/Glyph";
import { Reveal } from "@/components/primitives/Reveal";
import { JourneyMap } from "@/components/founders/JourneyMap";
import { StageSelector } from "@/components/founders/StageSelector";
import { SpotlightText } from "@/components/primitives/SpotlightText";
import { CTASection } from "@/components/shared/CTASection";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Founders",
  description:
    "The best seat in the house is reserved for founders. Whatever stage you are at, there is a place for you here.",
  path: "/founders",
});

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <Reveal>
          <Breadcrumb>Where We Come In</Breadcrumb>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center gap-5">
            <Glyph name="spade" size={52} tone="silver" />
            <h1 className="font-display text-5xl text-bone md:text-7xl">Founders</h1>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-3xl font-display text-3xl italic leading-snug text-bone md:text-4xl">
            The best seat in the house is reserved for founders.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-8 max-w-readable leading-relaxed text-bone-muted md:text-lg">
            We built this room for builders. The ones who start from nothing,
            carry the risk, and create the value the entire ecosystem depends on.
            Whatever stage you are at, there is a place for you here.
          </p>
        </Reveal>
      </Section>

      {/* The Journey */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-12 text-silver">The Journey</p>
        </Reveal>
        <JourneyMap />
      </Section>

      {/* Stage selector */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">What Stage Are You At?</p>
          <p className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
            Select your stage and see exactly how we step in.
          </p>
        </Reveal>
        <div className="mt-12">
          <StageSelector />
        </div>
      </Section>

      {/* Acceptance policy */}
      <Section className="section-py border-t border-silver-line">
        <Reveal className="mx-auto max-w-prose text-center">
          <p className="label mb-8 text-silver">Acceptance Policy</p>
          <SpotlightText
            as="h2"
            radius={260}
            className="font-display text-4xl leading-tight md:text-5xl"
          >
            We do not accept all applications.
          </SpotlightText>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone-muted">
            Every founder who applies is reviewed. We look at who is building,
            what they are building, and who they are building it for. Acceptance
            is not guaranteed. It is earned.
          </p>
        </Reveal>
      </Section>

      {/* CTA */}
      <CTASection
        line1="The right seat is waiting."
        line2="If you are the right founder."
        button="Reach Out to Us"
        href={ROUTES.reachOut}
      />
    </>
  );
}
