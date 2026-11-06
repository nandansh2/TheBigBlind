import type { Metadata } from "next";
import { Section, Label } from "@/components/ds/primitives";

export const metadata: Metadata = {
  title: "Our Vision — The Big Blind",
  description:
    "People are the foundation of every business that has ever been built. We exist to make sure the right people find each other.",
};

const MANIFESTO: { text: string; tone: "ghost" | "solid" | "large" }[] = [
  { text: "Every company that ever changed the world did it through people.", tone: "ghost" },
  { text: "Someone who believed before it was proven.", tone: "solid" },
  { text: "Someone who backed a founder before it was safe.", tone: "solid" },
  { text: "Someone who made the right introduction, at exactly the right moment.", tone: "solid" },
  { text: "The technology changes. The markets shift. The methods evolve.", tone: "ghost" },
  { text: "The fundamental never does.", tone: "solid" },
  { text: "People are the foundation of every business that has ever been built.", tone: "ghost" },
  { text: "We exist to make sure the right people find each other.", tone: "large" },
];

const IMPACT = [
  { title: "We compress time.", body: "The gap between the right idea and the right investor has historically been years. We measure it in conversations." },
  { title: "We reduce costly mistakes.", body: "The expensive mistakes founders make in their critical months are almost always downstream of isolation. The right mentor changes the outcome." },
  { title: "We move capital where it belongs.", body: "Investors miss great opportunities because the deal never crossed their desk the right way. We make sure it does." },
];

export default function VisionPage() {
  return (
    <>
      {/* Manifesto */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>Our vision</Label>
        </div>
        <div className="manifesto">
          {MANIFESTO.map((l, i) =>
            l.tone === "large" ? (
              <p key={i} className="tbb-headline tbb-display-m manifesto__large">
                {l.text}
              </p>
            ) : (
              <p key={i} className={`manifesto__line manifesto__line--${l.tone}`}>
                {l.text}
              </p>
            )
          )}
        </div>
      </Section>

      {/* Business impact */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Business impact</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Most of the right conversations never happen.</h2>
          <p className="tbb-lead">Not because the people don&rsquo;t exist. Because they were never in the same room.</p>
        </div>
        <div className="gap-grid">
          {IMPACT.map((c, i) => (
            <div key={c.title} className="gap-card">
              <span className="tbb-num" style={{ color: "var(--blind)", font: "300 24px/1 var(--font-sans)" }}>
                {`0${i + 1}`}
              </span>
              <p className="gap-card__head" style={{ marginTop: "var(--space-3)" }}>
                {c.title}
              </p>
              <p className="gap-card__work">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social impact */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Social impact</Label>
          </div>
          <blockquote className="tbb-headline tbb-display-m" style={{ margin: 0 }}>
            A room that only works for the people who can afford to enter it is not a room worth building.
          </blockquote>
        </div>
        <div className="split-2">
          <div className="gap-card">
            <Label>The sustainability seat</Label>
            <p className="gap-card__head" style={{ marginTop: "var(--space-4)" }}>
              Each cycle, we reserve complimentary access for founders building in spaces that matter.
            </p>
            <p className="gap-card__work">
              Climate. Health. Education. Social infrastructure. These companies do not pay to enter the room. They earn
              it.
            </p>
          </div>
          <div className="gap-card">
            <Label>Our NGO commitment</Label>
            <p className="gap-card__head" style={{ marginTop: "var(--space-4)" }}>
              A fixed percentage of our revenue goes to a curated set of NGOs working on problems the market alone
              cannot solve.
            </p>
            <p className="gap-card__work">Not one-off donations. Standing commitments. Named publicly. Held accountable.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
