import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PullQuote from "@/components/PullQuote";
import Solution from "@/components/Solution";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
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
