import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { GalleryCarousel } from "@/components/partners/GalleryCarousel";
import { CTASection } from "@/components/shared/CTASection";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Partners and Collaborations",
  description:
    "The room is only as strong as who is in it. Our partners were chosen deliberately. These are not sponsorships. They are commitments.",
  path: "/partners",
});

const STRATEGIC = [
  {
    name: "DealFlowHub",
    body: "AI-powered due diligence and compliance screening for every startup in our pipeline. The backbone of our diligence layer.",
    link: "https://dealflowhub.ai",
    linkLabel: "dealflowhub.ai",
  },
  {
    name: "Global Chamber Goa",
    body: "Global trade networks and government frameworks across Goa. The foundation of our government access and incubation partnerships.",
  },
  {
    name: "COGGE",
    body: "Confederation of Global Goan Entrepreneurs. Regional ecosystem access and community infrastructure across industry and government.",
  },
  {
    name: "KRG Ventures",
    body: "Venture funding network and strategic capital connections. Direct access to institutional investor relationships.",
  },
];

const BENZAI = {
  name: "Benzai10",
  body: "Early-stage innovation and startup ecosystem support. Complementary to every stage of the founder journey.",
};

const TRUSTED = [
  { name: "Antler", body: "Global venture builder and early-stage investor." },
  { name: "Blume Ventures", body: "India-focused early stage venture capital." },
  { name: "CapitalCORN", body: "Angel network and early-stage capital access." },
];

function PartnerCard({
  name,
  body,
  link,
  linkLabel,
}: {
  name: string;
  body: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <article className="glass glass-hover flex h-full flex-col rounded-[8px] p-8 md:p-9">
      <h3 className="font-display text-2xl text-bone md:text-3xl">{name}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-bone-muted">{body}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-label text-silver transition-colors hover:text-bone"
        >
          {linkLabel} <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <Reveal>
          <p className="label mb-8 text-silver">Partners and Collaborations</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            The room is only as strong as who is in it.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-readable leading-relaxed text-bone-muted md:text-lg">
            Our partners were chosen deliberately. Every relationship here exists
            because it makes the ecosystem stronger, the diligence sharper, and
            the introductions more valuable. These are not sponsorships. They are
            commitments.
          </p>
        </Reveal>
      </Section>

      {/* Strategic Partners */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-12 text-silver">Strategic Partners</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {STRATEGIC.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <PartnerCard {...p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5">
          <PartnerCard {...BENZAI} />
        </Reveal>
      </Section>

      {/* Trusted Network */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-12 text-silver">Trusted Network</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TRUSTED.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <PartnerCard {...p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">In the Room</p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone md:text-5xl">
            The circles we move in speak for themselves.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-bone-muted md:text-lg">
            A few of the conversations that have shaped what The Big Blind is
            becoming. The rooms we have been in are part of what we bring to your
            table.
          </p>
        </Reveal>
        <div className="mt-14">
          <GalleryCarousel />
        </div>
      </Section>

      {/* Extended network callout */}
      <Section className="pb-16 md:pb-24">
        <Reveal>
          <article className="silver-border flex flex-col gap-10 rounded-[10px] p-8 md:flex-row md:items-center md:gap-16 md:p-14">
            <div className="shrink-0">
              <p className="font-display text-6xl leading-none md:text-8xl">
                <span className="metal-silver">200+</span>
              </p>
              <p className="mt-4 max-w-[16rem] font-mono text-[0.72rem] uppercase leading-relaxed tracking-label text-silver-dim">
                Extended network and partners across the ecosystem.
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-bone-muted">
              Beyond these named partnerships, The Big Blind operates within a
              growing network of founders, investors, and ecosystem builders.
              Every episode expands it further.
            </p>
          </article>
        </Reveal>
      </Section>

      {/* CTA */}
      <CTASection
        line1="If you believe in what we are building"
        line2="we would like to know who you are."
        button="Explore Partnership"
        href={ROUTES.reachOut}
      />
    </>
  );
}
