import { Icon, type IconName } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";

export type Offering = {
  icon: IconName;
  title: string;
  body: string;
};

export function OfferingsGrid({ items }: { items: Offering[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((o, i) => (
        <Reveal key={o.title} delay={i * 0.06}>
          <article className="glass glass-hover h-full rounded-[8px] p-8 md:p-10">
            <div className="mb-7 grid h-11 w-11 place-items-center rounded-[6px] border border-silver-line text-silver">
              <Icon name={o.icon} size={22} />
            </div>
            <h3 className="font-display text-2xl text-bone">{o.title}</h3>
            <p className="mt-4 max-w-readable leading-relaxed text-bone-muted">
              {o.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function EliteSuitsCard({
  headline,
  body,
}: {
  headline: string;
  body: string;
}) {
  return (
    <Reveal className="mt-5">
      <article className="silver-border rounded-[8px] p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[6px] border border-silver-line text-silver">
            <Icon name="crown" size={24} />
          </div>
          <div>
            <p className="label mb-4 text-silver">Elite Suits Club</p>
            <h3 className="font-display text-2xl text-bone md:text-3xl">
              {headline}
            </h3>
            <p className="mt-4 max-w-prose leading-relaxed text-bone-muted">
              {body}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
