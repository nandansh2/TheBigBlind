import { Section, Breadcrumb } from "@/components/primitives/Section";
import { Glyph } from "@/components/primitives/Glyph";
import { Reveal } from "@/components/primitives/Reveal";
import { OfferingsGrid, EliteSuitsCard, type Offering } from "./Offerings";
import { CTASection } from "./CTASection";
import type { Suit } from "@/lib/constants";

export type AudienceData = {
  suit: Suit;
  title: string;
  declaration: string;
  sub: string;
  offerings: Offering[];
  elite: { headline: string; body: string };
  cta: { line1: string; line2: string; button: string; href: string };
};

export function AudiencePage({ data }: { data: AudienceData }) {
  return (
    <>
      {/* Hero */}
      <Section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <Reveal>
          <Breadcrumb>Where We Come In</Breadcrumb>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center gap-5">
            <Glyph name={data.suit} size={52} />
            <h1 className="font-display text-5xl text-bone md:text-7xl">
              {data.title}
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-3xl font-display text-2xl italic leading-snug text-bone md:text-3xl">
            {data.declaration}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-8 max-w-readable leading-relaxed text-bone-muted md:text-lg">
            {data.sub}
          </p>
        </Reveal>
      </Section>

      {/* Offerings + Elite Suits */}
      <Section className="pb-16 md:pb-24">
        <OfferingsGrid items={data.offerings} />
        <EliteSuitsCard headline={data.elite.headline} body={data.elite.body} />
      </Section>

      <CTASection
        line1={data.cta.line1}
        line2={data.cta.line2}
        button={data.cta.button}
        href={data.cta.href}
      />
    </>
  );
}
