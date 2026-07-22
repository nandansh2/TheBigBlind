"use client";

import { Section, Eyebrow } from "@/components/primitives/Section";
import { ScrollText, type Line } from "@/components/scroll/ScrollText";
import { useMenu } from "@/components/nav/MenuContext";
import { Reveal } from "@/components/primitives/Reveal";

const LINES: Line[] = [
  { text: "there are founders who never meet the right investor.", tone: "ghost" },
  { text: "investors who never see the right deal.", tone: "ghost" },
  { text: "capital sitting on the sideline.", tone: "ghost" },
  { text: "conversations that were never had.", tone: "ghost" },
  { text: "" },
  { text: "the cost of the wrong room is everything.", tone: "solid" },
  { text: "" },
  { text: "the right introduction, at the right moment,", tone: "ghost" },
  { text: "with the right people, changes outcomes.", tone: "ghost" },
  { text: "we have seen it happen.", tone: "ghost" },
  { text: "" },
  { text: "The Big Blind is that room.", tone: "solid" },
  { text: "" },
  { text: "founders. investors. venture capital.", tone: "ghost" },
  { text: "financial institutions.", tone: "ghost" },
  { text: "one curated table.", tone: "ghost" },
  { text: "every conversation deliberate.", tone: "ghost" },
  { text: "every introduction earned.", tone: "ghost" },
  { text: "" },
  { text: "not everyone gets in.", tone: "large" },
];

function FindTableButton() {
  const { openMenu } = useMenu();
  return (
    <Reveal className="mt-14">
      <button
        type="button"
        onClick={openMenu}
        className="btn-silver group inline-flex items-center gap-3 rounded-full px-9 py-4 font-mono text-[0.74rem] uppercase tracking-label"
      >
        Find your table
        <span
          aria-hidden
          className="transition-transform duration-500 ease-expo group-hover:translate-x-1"
        >
          →
        </span>
      </button>
    </Reveal>
  );
}

export function HomeScroll() {
  return (
    <Section id="room" className="py-32 md:py-48">
      <div className="mx-auto max-w-prose">
        <Eyebrow align="center" className="mb-16 md:mb-24">
          Not Every Room Is Worth Entering.
        </Eyebrow>
        <ScrollText lines={LINES} />
        <FindTableButton />
      </div>
    </Section>
  );
}
