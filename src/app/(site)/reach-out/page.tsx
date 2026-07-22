import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { Icon } from "@/components/primitives/Icon";
import { ReachOut } from "@/components/reachout/ReachOut";

export const metadata: Metadata = pageMeta({
  title: "Reach Out to Us",
  description:
    "Tell us what brought you here. We review every submission personally and respond only when the fit is right.",
  path: "/reach-out",
});

export default function ReachOutPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      {/* Hero */}
      <Section className="pt-36 pb-16 md:pt-48 md:pb-20">
        <Reveal>
          <p className="label mb-8 text-silver">Reach Out to Us</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-bone md:text-7xl">
            Tell us what brought you here.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-readable leading-relaxed text-bone-muted md:text-lg">
            Every conversation starts somewhere. Choose the path that fits and
            tell us a little about who you are. We review every submission
            personally and respond only when the fit is right.
          </p>
        </Reveal>
      </Section>

      {/* Paid and vetted notice */}
      <Section className="pb-4">
        <Reveal>
          <article className="silver-border rounded-[10px] p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[6px] border border-silver-line text-silver">
                <Icon name="lock" size={24} />
              </div>
              <div>
                <p className="label mb-5 text-silver">Before You Apply</p>
                <h2 className="font-display text-2xl leading-snug text-bone md:text-4xl">
                  Access to The Big Blind community is paid.
                  <br />
                  <span className="italic text-bone-muted">Then it is vetted.</span>
                </h2>
                <p className="mt-6 max-w-prose leading-relaxed text-bone-muted">
                  You are not joining a free network. You are applying for a seat
                  at a curated table where every member has been reviewed,
                  accepted deliberately, and held to the same standard. The fee is
                  not a barrier. It is a signal that you are serious. Submitting
                  this form is the beginning of that process. If the fit is right,
                  the conversation begins.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* Path selector + form (client, reads ?path=) */}
      <ReachOut initialPath={typeof searchParams?.path === "string" ? searchParams.path : undefined} />
    </>
  );
}
