import type { ReactNode } from "react";

/* EdgeCard: a section-marker block with the stacked edge tabs stepping off the right
   edge, as in the business-card / proposal reference ("Data room structure", "Success
   fee and terms"). Used to carry the main flow of a programme explainer. The tab steps
   down the edge as sections progress (pass `step`). Text clears the tab via tbb-has-tabs-right. */
export function EdgeCard({
  section,
  title,
  children,
  meta,
  variant = "paper",
  step = 0,
}: {
  section: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  meta?: ReactNode;
  variant?: "paper" | "blind" | "night";
  step?: number;
}) {
  // The tab walks down the edge as the section index grows.
  const top = 24 + Math.min(step, 5) * 20;
  return (
    <div className={`edge-card edge-card--${variant} tbb-has-tabs-right tbb-lift`}>
      <span className="tbb-label edge-card__section">{section}</span>
      <p className="edge-card__title">{title}</p>
      {children && <div className="edge-card__body">{children}</div>}
      {meta && <p className="edge-card__meta">{meta}</p>}
      <div className="tbb-edge-tabs tbb-edge-tabs--right" style={{ top }}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
