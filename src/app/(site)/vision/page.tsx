import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Section, Eyebrow } from "@/components/primitives/Section";
import { ScrollText, type Line } from "@/components/scroll/ScrollText";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightText } from "@/components/primitives/SpotlightText";

export const metadata: Metadata = pageMeta({
  title: "Our Vision",
  description:
    "People are the foundation of every business that has ever been built. We exist to make sure the right people find each other.",
  path: "/vision",
});

const OPENING: Line[] = [
  { text: "every company that ever changed the world did it through people.", tone: "ghost" },
  { text: "" },
  { text: "someone who believed before it was proven.", tone: "solid" },
  { text: "someone who backed a founder before it was safe.", tone: "solid" },
  { text: "someone who made the right introduction", tone: "solid" },
  { text: "at exactly the right moment.", tone: "solid" },
  { text: "" },
  { text: "the technology changes.", tone: "ghost" },
  { text: "the markets shift.", tone: "ghost" },
  { text: "the methods evolve.", tone: "ghost" },
  { text: "" },
  { text: "the fundamental never does.", tone: "solid" },
  { text: "" },
  { text: "people are the foundation of every business that has ever been built.", tone: "ghost" },
  { text: "" },
  { text: "we exist to make sure the right people find each other.", tone: "large" },
];

const BUSINESS = [
  {
    title: "We compress time.",
    body: "The gap between the right idea and the right investor has historically been years. We measure it in conversations.",
  },
  {
    title: "We reduce costly mistakes.",
    body: "The expensive mistakes founders make in their critical months are almost always downstream of isolation. The right mentor changes the outcome.",
  },
  {
    title: "We move capital where it belongs.",
    body: "Investors miss great opportunities because the deal never crossed their desk the right way. We make sure it does.",
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Section 1 — scroll-activated opening */}
      <Section className="py-36 md:py-52">
        <div className="mx-auto max-w-prose">
          <Eyebrow className="mb-16 md:mb-24">Our Vision</Eyebrow>
          <ScrollText lines={OPENING} />
        </div>
      </Section>

      {/* Section 2 — Business Impact */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-6 text-silver">Business Impact</p>
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone md:text-6xl">
            Most of the right conversations never happen.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-bone-muted md:text-xl">
            Not because the people don&rsquo;t exist. Because they were never in
            the same room.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {BUSINESS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="glass glass-hover flex h-full flex-col rounded-[8px] p-8 md:p-9">
                <span className="mb-6 font-mono text-xs text-silver-dim">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-bone">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-bone-muted">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 3 — Social Impact */}
      <Section className="section-py border-t border-silver-line">
        <Reveal>
          <p className="label mb-10 text-silver">Social Impact</p>
          <SpotlightText
            as="blockquote"
            radius={300}
            className="max-w-4xl font-display text-3xl italic leading-snug md:text-5xl md:leading-[1.15]"
          >
            &ldquo;A room that only works for the people who can afford to enter
            it is not a room worth building.&rdquo;
          </SpotlightText>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <article className="silver-border h-full rounded-[8px] p-8 md:p-10">
              <p className="label mb-5 text-silver">The Sustainability Seat</p>
              <h3 className="font-display text-2xl leading-snug text-bone md:text-3xl">
                Each cycle, we reserve a basket of complimentary access for
                founders building in spaces that matter.
              </h3>
              <p className="mt-5 leading-relaxed text-bone-muted">
                Climate. Health. Education. Social infrastructure. These
                companies do not pay to enter the room. They earn it.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="silver-border h-full rounded-[8px] p-8 md:p-10">
              <p className="label mb-5 text-silver">Our NGO Commitment</p>
              <h3 className="font-display text-2xl leading-snug text-bone md:text-3xl">
                A fixed percentage of our revenue goes to a curated set of NGOs
                working on problems the market alone cannot solve.
              </h3>
              <p className="mt-5 leading-relaxed text-bone-muted">
                Not one-off donations. Standing commitments. Named publicly. Held
                accountable.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
