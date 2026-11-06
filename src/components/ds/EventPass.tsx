import { Suit, Label, type SuitName } from "./primitives";

/* EventPass: the glass pass card, used as a ticket for an event. Links out to the
   LinkedIn post. Rendered inside the tilted events rail (see site.css). */
export function EventPass({
  href,
  code,
  sub,
  dateLines,
  metaLabel,
  metaValue,
  suit = "spade",
  variant = "paper",
}: {
  href: string;
  code: string;
  sub: string;
  dateLines: string[]; // e.g. ["22", "08", "2026"]
  metaLabel: string;
  metaValue: string;
  suit?: SuitName;
  variant?: "paper" | "blind" | "ember" | "outline";
  suitRed?: boolean;
}) {
  return (
    <a className="tbb-glass event-pass tbb-lift" href={href} target="_blank" rel="noopener noreferrer">
      <div className={`tbb-glass__inset tbb-glass__inset--${variant}`}>
        <div>
          <p className="tbb-glass__code">{code}</p>
          <div className="tbb-glass__sub">{sub}</div>
        </div>
        <div className="tbb-glass__nums">
          {dateLines.map((d, i) => (
            <span key={i}>
              {d}
              {i < dateLines.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
      <div className="tbb-glass__meta">
        <div className="tbb-col" style={{ gap: 4 }}>
          <Label>{metaLabel}</Label>
          <Label className="event-pass__value">{metaValue}</Label>
        </div>
        <span className="tbb-glass__chipmark" style={{ fontSize: 14 }}>
          <Suit name={suit} red />
        </span>
      </div>
    </a>
  );
}
