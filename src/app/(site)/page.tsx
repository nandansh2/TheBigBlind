import { SITE } from "@/lib/constants";
import { FIRMS, logoSlug } from "@/lib/network";
import { Section, Label, ButtonLink, Chip } from "@/components/ds/primitives";
import { BlockCard, MediaTile, BlockArt } from "@/components/ds/cards";
import { FlipCard } from "@/components/ds/FlipCard";
import { FolderCard } from "@/components/ds/FolderCard";
import { EventPass } from "@/components/ds/EventPass";

/* Home — The Big Blind design system (phase 1, enriched).
   Claim + flip card, the programme ladder, the portfolio, the events, the network,
   the room, advisors, podcast, the ask. */

// Startups we are currently backing. Folder tiles; decks and one-pagers to follow.
const G1 = "radial-gradient(40% 60% at 70% 30%, rgba(255,255,255,.3), rgba(255,255,255,0) 70%), linear-gradient(140deg, var(--night) 0%, var(--ember) 65%, var(--blind-strong) 100%)";
const G2 = "radial-gradient(40% 60% at 30% 30%, rgba(255,255,255,.28), rgba(255,255,255,0) 70%), linear-gradient(150deg, var(--ember-deep) 0%, var(--ember) 55%, var(--blind-strong) 100%)";
const G3 = "radial-gradient(45% 60% at 60% 35%, rgba(255,255,255,.26), rgba(255,255,255,0) 70%), linear-gradient(120deg, var(--night) 0%, #2a1118 55%, var(--ember) 100%)";

const PORTFOLIO = [
  { tag: "FinOps", title: "BokiAI", sub: "Finance operations, automated", g: G1 },
  { tag: "Audience intelligence", title: "GoAvo AI", sub: "Audience intelligence OS", g: G2 },
  { tag: "Supply chain", title: "Vissthaar", sub: "Supply chain for rural kiranas", g: G3 },
  { tag: "Consumer medtech", title: "Warden AI", sub: "Medicine tracking and reminders", g: G1 },
  { tag: "MSME fintech", title: "NavDhan", sub: "Working capital, by Kubar Labs", g: G2 },
  { tag: "AI sales", title: "FrontStoreAI", sub: "Sales engine for Shopify stores", g: G3 },
  { tag: "Travel tech", title: "NxVoy", sub: "An OS for the whole trip", g: G1 },
  { tag: "Agentic AI", title: "Vyntra AI", sub: "Simulation for engineering teams", g: G2 },
];

// Events. The four done link to their post-event LinkedIn posts, the two upcoming to
// their announcement posts.
const EVENTS = [
  { code: "FP1", sub: "Founders Pitch, Bengaluru", dateLines: ["22", "08", "26"], metaLabel: "9 investors", metaValue: "$500M", suit: "spade", variant: "paper", href: "https://lnkd.in/p/gBFFP-rA" },
  { code: "FRH", sub: "Founders Room, Hyderabad", dateLines: ["05", "09", "26"], metaLabel: "Curated room", metaValue: "Early stage", suit: "diamond", variant: "ember", href: "https://lnkd.in/p/gySqUWzs" },
  { code: "FRB", sub: "Founders Room, Bengaluru", dateLines: ["10", "10", "26"], metaLabel: "Incubex HSR", metaValue: "Early stage", suit: "diamond", variant: "paper", href: "https://lnkd.in/p/gQArg_dd" },
  { code: "FR2", sub: "Founders Room, Hyd 02", dateLines: ["24", "10", "26"], metaLabel: "Curated room", metaValue: "Early stage", suit: "diamond", variant: "ember", href: "https://lnkd.in/p/gRivSuXk" },
  { code: "GOA", sub: "Founders Room, Goa yacht", dateLines: ["21", "11", "26"], metaLabel: "Yacht edition", metaValue: "Upcoming", suit: "heart", variant: "blind", href: "https://lnkd.in/p/gjCaM3na" },
] as const;

// Advisors. Names, firms, confirmed LinkedIn profiles and headshots (user-provided).
const ADVISORS = [
  { name: "Chandra Goyal", firm: "KRG Ventures, UK", img: "/advisors/chandra-goyal.jpg", href: "https://www.linkedin.com/in/chandra-goyal-38a53719/" },
  { name: "Shrihari", firm: "Kairos CoLabs, Chennai", img: "/advisors/shrihari.jpg", href: "https://www.linkedin.com/in/shrihari-a-48a595293/" },
  { name: "Madhurita Gupta", firm: "Goa Angel Network", img: "/advisors/madhurita-gupta.jpg", href: "https://www.linkedin.com/in/dr-madhurita-gupta-6a73bb103/" },
  { name: "Ashish Khetan", firm: "Benzai10 · Indigram Labs", img: "/advisors/ashish-khetan.jpg", href: "https://www.linkedin.com/in/ashish-khetan-80a5982/" },
  { name: "Arvind Subramaniam", firm: "Enlighten Capital, Chennai", img: "/advisors/arvind-subramaniam.jpg", href: "https://www.linkedin.com/in/arvindsubramaniam/" },
  { name: "Srinivas Kotta", firm: "Angel investor, Hyderabad", img: "/advisors/srinivas-kotta.jpg", href: "https://www.linkedin.com/in/srinivaskotta/" },
];

const PROOF = [
  { src: "/assets/gallery/tbb-x-capitalcorn.jpg", name: "The Big Blind x CapitalCORN" },
  { src: "/assets/gallery/raghav-chopra-antler.jpg", name: "Raghav Chopra, Antler" },
  { src: "/assets/gallery/shubham-jhuria-aeravti-ventures.jpg", name: "Shubham Jhuria, Aeravti Ventures" },
  { src: "/assets/gallery/tbb-x-benzai10.jpg", name: "The Big Blind x Benzai10" },
  { src: "/assets/gallery/vineet-neeraj-capitalcorn.jpg", name: "Vineet and Neeraj, CapitalCORN" },
  { src: "/assets/gallery/global-chambers-vibrant-goa.jpg", name: "Global Chamber, Vibrant Goa" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Section className="home-hero">
        <div className="section-head__eyebrow">
          <Label>The Big Blind Venture Builder</Label>
        </div>
        <div className="tbb-hero" style={{ marginTop: "var(--space-8)" }}>
          <div>
            <h1 className="tbb-headline tbb-display-xl">
              We build businesses
              <span className="tbb-accent">investors believe in.</span>
            </h1>
            <p className="tbb-lead" style={{ marginTop: "var(--space-8)" }}>
              <b>The Big Blind is a venture-building firm.</b> We back founders from first pitch to
              first cheque, and connect them to the capital and network that get them there.
            </p>
            <div className="home-hero__cta">
              <ButtonLink href="/venture-building" variant="ink" withArrow>
                Explore the programmes
              </ButtonLink>
            </div>
          </div>
          <div className="home-hero__card">
            <FlipCard />
            <ButtonLink href="/reach-out" variant="glass" withArrow>
              Enter the right room
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 2. The programme ladder */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The venture builder</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Two programmes. One ladder.</h2>
          <p className="tbb-lead">
            <b>Forge builds the business. Ascend takes it to Series A.</b> One firm, two stages, one
            network behind both.
          </p>
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
            body="A 6 month Series A readiness programme. Metrics, narrative and data room, then the room of investors."
            chip={<Chip tone="on-red">Series A · ₹7.5L</Chip>}
            art={BlockArt.diamonds}
          />
        </div>
      </Section>

      {/* 3. Events */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Rooms we have set</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Every pass, a room that happened.</h2>
          <p className="tbb-lead">
            <b>Four done, one coming.</b> Each pass opens the story on LinkedIn.
          </p>
        </div>
      </Section>
      <div className="events-rail">
        {EVENTS.map((e) => (
          <EventPass
            key={e.code}
            href={e.href}
            code={e.code}
            sub={e.sub}
            dateLines={[...e.dateLines]}
            metaLabel={e.metaLabel}
            metaValue={e.metaValue}
            suit={e.suit}
            variant={e.variant}
          />
        ))}
      </div>

      {/* 5. The network */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>The network</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">
            Associated with the world&rsquo;s leading VC firms and institutions.
          </h2>
          <p className="tbb-lead">
            <b>Investment firms and ecosystem partners,</b> from first cheque to Series A.
          </p>
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

      {/* 6. In the room */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>In the room</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The ecosystem, in person.</h2>
          <p className="tbb-lead">Founders, investors and partners from across the network.</p>
        </div>
        <div className="media-grid media-grid--3">
          {PROOF.map((p) => (
            <MediaTile key={p.src} img={p.src} alt={p.name} title={p.name} />
          ))}
        </div>
        <div style={{ marginTop: "var(--space-8)" }}>
          <ButtonLink href="/partners" variant="glass" withArrow>
            See the full network
          </ButtonLink>
        </div>
      </Section>

      {/* 7. Advisors */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Advisors</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">Backed by people who have done it.</h2>
          <p className="tbb-lead">Investors and founders from the network who stand with us.</p>
        </div>
        <div className="media-grid media-grid--3">
          {ADVISORS.map((a) => (
            <MediaTile
              key={a.name}
              href={a.href}
              img={a.img}
              alt={a.name}
              ratio="1x1"
              headChip={<Chip tone="glass">Advisor</Chip>}
              title={a.name}
              desc={a.firm}
              foot="LinkedIn"
            />
          ))}
        </div>
      </Section>

      {/* 8. Currently backing */}
      <Section>
        <div className="section-head">
          <div className="section-head__eyebrow">
            <Label>Currently backing</Label>
          </div>
          <h2 className="tbb-headline tbb-display-m">The companies in our hand.</h2>
          <p className="tbb-lead">Founders we are building alongside, right now.</p>
        </div>
        <div className="folder-grid">
          {PORTFOLIO.map((p) => (
            <FolderCard key={p.title} media={p.g} tag={p.tag} title={p.title} sub={p.sub} />
          ))}
        </div>
      </Section>

      {/* 9. Podcast */}
      <Section>
        <MediaTile
          href={SITE.youtube}
          ratio="16x9"
          imgStyle={{
            background:
              "radial-gradient(40% 60% at 25% 30%, var(--blind) 0%, rgba(242,34,77,0) 70%), linear-gradient(120deg, var(--ember-deep) 0%, var(--ember) 50%, #17120f 100%)",
          }}
          headChip={<Chip tone="glass">Podcast</Chip>}
          title="The Big Blind Podcast"
          desc="Founders and investors, in conversation. Watch on YouTube."
          foot="youtube.com/@BigBlindPod"
        />
      </Section>

      {/* 10. Closing */}
      <Section>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-head__eyebrow">
            <Label>Start a conversation</Label>
          </div>
          <h2 className="tbb-headline tbb-display-l">Where vision meets investment.</h2>
          <p className="tbb-lead">
            Tell us what you are building. We will tell you which room it belongs in.
          </p>
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
