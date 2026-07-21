import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AudiencePage, type AudienceData } from "@/components/shared/AudiencePage";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Financial Institutions",
  description:
    "The institutions that sustain what others build belong at this table. Compliance rigour and deal quality your institution demands.",
  path: "/financial-institutions",
});

const data: AudienceData = {
  suit: "club",
  title: "Financial Institutions",
  declaration: "The institutions that sustain what others build belong at this table.",
  sub: "You provide the financial backbone that turns early conviction into lasting enterprise. The Big Blind connects you to the ecosystem building what comes next in India, with the compliance rigour and deal quality your institution demands.",
  offerings: [
    {
      icon: "building",
      title: "Compliance-Checked Pipeline",
      body: "Structured access to startups that have passed AI-powered compliance and governance screening via DealFlowHub. Built for institutions that cannot afford shortcuts.",
    },
    {
      icon: "chart",
      title: "Curated Deal Flow",
      body: "Quality-filtered opportunities from across The Big Blind ecosystem. Every startup arrives with a diligence baseline already established.",
    },
    {
      icon: "handshake",
      title: "Partnership Opportunities",
      body: "Collaborative relationships with founders, investors, and VCs across a growing ecosystem spanning sectors and stages of growth.",
    },
    {
      icon: "microphone",
      title: "Institutional Media Presence",
      body: "Featured on The Big Blind as a forward-thinking institution building India's innovation backbone. A position that compounds with every episode and every introduction.",
    },
  ],
  elite: {
    headline: "A curated circle that upholds the same standards you do.",
    body: "A membership circle of investors, VCs, and institutional peers who share your commitment to quality. Access is by invitation only. Quality is not negotiable.",
  },
  cta: {
    line1: "The ecosystem building India's next chapter",
    line2: "has a seat reserved for you.",
    button: "Become a Partner",
    href: ROUTES.reachOut,
  },
};

export default function FinancialInstitutionsPage() {
  return <AudiencePage data={data} />;
}
