import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PullQuote from "@/components/PullQuote";
import Solution from "@/components/Solution";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Join the Waitlist · The Big Blind",
  description:
    "The Big Blind is a venture-building ecosystem built around one principle: the right conversation, with the right people, at the right time, changes everything. Join the waitlist.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Join the Waitlist · The Big Blind",
    description:
      "A venture-building ecosystem built around one principle: the right conversation, with the right people, at the right time, changes everything.",
    url: "/waitlist",
    siteName: "The Big Blind",
    locale: "en_IN",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist · The Big Blind",
    description:
      "A venture-building ecosystem built around one principle: the right conversation, with the right people, at the right time.",
    images: [OG_IMAGE.url],
  },
};

export default function WaitlistPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <PullQuote />
        <Solution />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
