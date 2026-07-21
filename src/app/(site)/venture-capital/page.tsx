import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AudiencePage, type AudienceData } from "@/components/shared/AudiencePage";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Venture Capital",
  description:
    "Capital that moves with precision finds its best opportunities here. A pipeline built on diligence, founders built on preparation.",
  path: "/venture-capital",
});

const data: AudienceData = {
  suit: "diamond",
  title: "Venture Capital",
  declaration: "Capital that moves with precision finds its best opportunities here.",
  sub: "You are not just writing cheques. You are shaping what gets built, who builds it, and how fast it scales. The Big Blind gives you a pipeline built on diligence, founders built on preparation, and a community built on trust.",
  offerings: [
    {
      icon: "chart",
      title: "Structured Startup Pipeline",
      body: "Founders who have moved through our ecosystem, been prepared for funding, and arrived with context. Not volume. Precision.",
    },
    {
      icon: "shield",
      title: "Governance-Level Diligence",
      body: "DealFlowHub's AI framework handles compliance and due diligence before a startup enters your consideration. A stronger baseline from the start.",
    },
    {
      icon: "microphone",
      title: "Podcast and Thought Leadership",
      body: "Your fund's perspective, on The Big Blind. Reaching the founders you want to meet before they are in everyone else's deal flow.",
    },
    {
      icon: "eye",
      title: "Cross-Ecosystem Visibility",
      body: "Every founder we work with, every episode we produce, every introduction we make adds to your presence in the rooms that matter.",
    },
  ],
  elite: {
    headline: "A high-trust circle where the real conversations happen.",
    body: "A membership circle of VCs, investors, and institutional players built on mutual standards and selective access. The conversations that do not happen in open markets.",
  },
  cta: {
    line1: "The pipeline you have been looking for",
    line2: "is already being built.",
    button: "Join the Table",
    href: ROUTES.reachOut,
  },
};

export default function VentureCapitalPage() {
  return <AudiencePage data={data} />;
}
