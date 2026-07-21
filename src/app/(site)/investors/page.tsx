import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AudiencePage, type AudienceData } from "@/components/shared/AudiencePage";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Investors",
  description:
    "The believers who back people before outcomes. Here, the right founders find you before they find anyone else.",
  path: "/investors",
});

const data: AudienceData = {
  suit: "heart",
  title: "Investors",
  declaration: "The believers who back people before outcomes.",
  sub: "You move first. You see what others miss. You back a founder before the narrative is ready and before the numbers are clean. The Big Blind was built for people who think the way you do. Here, the right founders find you before they find anyone else.",
  offerings: [
    {
      icon: "chart",
      title: "Curated Deal Flow",
      body: "Founders prepared and made funding-ready through our ecosystem before they reach you. Not cold outreach. A warm room.",
    },
    {
      icon: "shield",
      title: "Due Diligence and Compliance",
      body: "Every startup screened through DealFlowHub's AI compliance and diligence framework. You see the quality candidates, not the noise.",
    },
    {
      icon: "microphone",
      title: "Podcast Feature and Media",
      body: "Your investment philosophy and perspective, on The Big Blind. Reaching the founders and co-investors who should know who you are.",
    },
    {
      icon: "eye",
      title: "Ongoing Visibility",
      body: "Continued presence in The Big Blind's content and conversations as the ecosystem grows. The room gets bigger. Your presence in it compounds.",
    },
  ],
  elite: {
    headline: "A private circle built on trust and shared standards.",
    body: "A membership circle of investors, angels, and fund managers who choose carefully who they share a room with. The conversations that happen here do not happen in open rooms.",
  },
  cta: {
    line1: "The right founders are waiting to find you.",
    line2: "Take your seat at the table.",
    button: "Reach Out to Us",
    href: ROUTES.reachOut,
  },
};

export default function InvestorsPage() {
  return <AudiencePage data={data} />;
}
