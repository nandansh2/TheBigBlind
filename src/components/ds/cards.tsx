import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./primitives";

/* The Big Blind design system — card families (BlockCard, EmberCard, MediaTile). */

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");
}

/** Solid navigation / programme pillar. One blind variant per viewport. */
export function BlockCard({
  href,
  title,
  body,
  variant = "night",
  chip,
  art,
  className = "",
}: {
  href: string;
  title: ReactNode;
  body: ReactNode;
  variant?: "blind" | "night" | "paper";
  chip?: ReactNode;
  art?: ReactNode;
  className?: string;
}) {
  const cls = `tbb-block tbb-block--${variant} tbb-lift${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      <h3 className="tbb-block__title">
        {title} <Arrow />
      </h3>
      <p className="tbb-block__body">{body}</p>
      {(chip || art) && (
        <div className="tbb-block__bottom">
          {chip ?? <span />}
          {art}
        </div>
      )}
    </>
  );
  return isExternal(href) ? (
    <a className={cls} href={href}>
      {inner}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

/** Ember-gradient statement card. The red focal element of its section. */
export function EmberCard({
  statement,
  foot,
  top,
  fluid = false,
  className = "",
}: {
  statement: ReactNode;
  foot?: ReactNode;
  top?: ReactNode;
  fluid?: boolean;
  className?: string;
}) {
  return (
    <div className={`tbb-ember${fluid ? " tbb-ember--fluid" : ""}${className ? ` ${className}` : ""}`}>
      <div className="tbb-ember__top">{top}</div>
      <div className="tbb-ember__inner">
        <p className="tbb-ember__statement">{statement}</p>
      </div>
      <div className="tbb-ember__foot">{foot}</div>
    </div>
  );
}

type Ratio = "4x3" | "1x1" | "9x16" | "16x9";

/** Photo-led tile. Text sits over a scrim; the image never carries text directly. */
export function MediaTile({
  href,
  img,
  imgStyle,
  alt = "",
  ratio = "4x3",
  headChip,
  title,
  desc,
  foot,
  className = "",
}: {
  href?: string;
  img?: string;
  imgStyle?: React.CSSProperties;
  alt?: string;
  ratio?: Ratio;
  headChip?: ReactNode;
  title: ReactNode;
  desc?: ReactNode;
  foot?: ReactNode;
  className?: string;
}) {
  const ratioClass = ratio === "4x3" ? "" : ` tbb-media--${ratio}`;
  const cls = `tbb-media${ratioClass}${className ? ` ${className}` : ""}`;
  const media = img ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="tbb-media__img" src={img} alt={alt} loading="lazy" />
  ) : (
    <div className="tbb-media__img" style={imgStyle} aria-hidden="true" />
  );
  const body = (
    <>
      {media}
      {headChip && <div className="tbb-media__head">{headChip}</div>}
      <div className="tbb-media__body">
        <h3 className="tbb-media__title">
          {title}
          {href && <Arrow />}
        </h3>
        {desc && <p className="tbb-media__desc">{desc}</p>}
        {foot && <span className="tbb-media__foot">{foot}</span>}
      </div>
    </>
  );
  if (!href) return <div className={cls}>{body}</div>;
  return isExternal(href) ? (
    <a className={cls} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {body}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {body}
    </Link>
  );
}

/** Line-art motifs for block-card bottoms, drawn from tiles (stroke-art). */
export const BlockArt = {
  diamonds: (
    <svg className="tbb-block__art" viewBox="0 0 170 170" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <polygon points="112,24 158,70 112,116 66,70" strokeLinejoin="round" />
      <polyline points="66,70 66,80 112,126 158,80 158,70" strokeLinejoin="round" opacity="0.6" />
      <line x1="112" y1="116" x2="112" y2="126" opacity="0.6" />
      <polygon points="92,58 126,92 92,126 58,92" strokeLinejoin="round" />
      <polyline points="58,92 58,102 92,136 126,102 126,92" strokeLinejoin="round" opacity="0.6" />
      <line x1="92" y1="126" x2="92" y2="136" opacity="0.6" />
      <polygon points="74,88 98,112 74,136 50,112" strokeLinejoin="round" />
      <polyline points="50,112 50,122 74,146 98,122 98,112" strokeLinejoin="round" opacity="0.6" />
      <line x1="74" y1="136" x2="74" y2="146" opacity="0.6" />
      <polygon points="58,115 73,130 58,145 43,130" strokeLinejoin="round" />
      <polyline points="43,130 43,140 58,155 73,140 73,130" strokeLinejoin="round" opacity="0.6" />
      <line x1="58" y1="145" x2="58" y2="155" opacity="0.6" />
    </svg>
  ),
  lattice: (
    <svg className="tbb-block__art" viewBox="0 0 170 170" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" aria-hidden="true">
      <polygon points="85,4 111,30 85,56 59,30" opacity="1" />
      <polygon points="95,14 121,40 95,66 69,40" opacity="0.28" />
      <polygon points="120,39 146,65 120,91 94,65" opacity="1" />
      <polygon points="130,49 156,75 130,101 104,75" opacity="0.28" />
      <polygon points="50,39 76,65 50,91 24,65" opacity="1" />
      <polygon points="60,49 86,75 60,101 34,75" opacity="0.28" />
      <polygon points="85,86 99,100 85,114 71,100" opacity="0.6" />
      <polygon points="95,96 109,110 95,124 81,110" opacity="0.28" />
    </svg>
  ),
};
