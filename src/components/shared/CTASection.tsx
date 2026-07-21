import { Section } from "@/components/primitives/Section";
import { ButtonLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { Glyph } from "@/components/primitives/Glyph";
import { Magnetic } from "@/components/primitives/Magnetic";

/** Closing CTA block shared by the audience pages. */
export function CTASection({
  line1,
  line2,
  button,
  href,
}: {
  line1: string;
  line2: string;
  button: string;
  href: string;
}) {
  return (
    <Section className="section-py">
      <Reveal className="relative overflow-hidden rounded-[10px] silver-border px-8 py-20 text-center md:px-16 md:py-28">
        <Glyph
          name="spade"
          size={40}
          tone="silver"
          className="mx-auto mb-8 opacity-40"
        />
        <h2 className="font-display text-3xl leading-tight text-bone md:text-5xl">
          {line1}
        </h2>
        <p className="mt-3 font-display text-2xl italic text-bone-faint md:text-4xl">
          {line2}
        </p>
        <div className="mt-12">
          <Magnetic strength={0.4}>
            <ButtonLink href={href} variant="primary">
              {button} →
            </ButtonLink>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
