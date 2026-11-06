import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* The Big Blind design system — primitives.
   Each wraps the system's exact tbb- markup. Do not restyle inline; extend tbb.css with tokens. */

export type SuitName = "diamond" | "spade" | "heart" | "club";

const SUIT_PATHS: Record<SuitName, ReactNode> = {
  diamond: <rect x="24" y="20" width="52" height="52" rx="5" />,
  spade: (
    <>
      <rect x="24" y="20" width="52" height="26" rx="5" />
      <rect x="24" y="20" width="26" height="52" rx="5" />
      <rect x="56" y="52" width="14" height="14" rx="3" />
    </>
  ),
  heart: (
    <>
      <rect x="50" y="20" width="26" height="52" rx="5" />
      <rect x="24" y="46" width="52" height="26" rx="5" />
    </>
  ),
  club: (
    <>
      <rect x="24" y="20" width="24" height="24" rx="4" />
      <rect x="52" y="20" width="24" height="24" rx="4" />
      <rect x="24" y="48" width="24" height="24" rx="4" />
      <rect x="58" y="54" width="14" height="14" rx="3" />
    </>
  ),
};

/** A suit glyph built from tiles. `red` forces Blind Red; otherwise it inherits currentColor. */
export function Suit({
  name,
  red = false,
  className = "",
}: {
  name: SuitName;
  red?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`tbb-suit${red ? " tbb-suit--red" : ""}${className ? ` ${className}` : ""}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <g transform="rotate(45 50 46)" fill="currentColor">
        {SUIT_PATHS[name]}
      </g>
    </svg>
  );
}

/** The circled directional arrow, the only directional icon in the system. */
export function Arrow() {
  return (
    <span className="tbb-arrow">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

/** The interim four-tile mark plus spaced caps. */
export function Wordmark({ showText = true }: { showText?: boolean }) {
  return (
    <span className="tbb-wordmark">
      <svg viewBox="0 0 100 100" width="22" height="22" aria-hidden="true">
        <g transform="rotate(45 50 50)">
          <rect className="t-red" x="22" y="22" width="26" height="26" rx="4" />
          <rect className="t-ink" x="52" y="22" width="26" height="26" rx="4" />
          <rect className="t-ink" x="22" y="52" width="26" height="26" rx="4" />
          <rect className="t-ink" x="52" y="52" width="26" height="26" rx="4" />
        </g>
      </svg>
      {showText && <span className="tbb-wordmark__text">The Big Blind</span>}
    </span>
  );
}

type ButtonVariant = "blind" | "ink" | "outline" | "glass" | "ghost";

function btnClass(variant: ButtonVariant, size?: "sm", block?: boolean, extra?: string) {
  return [
    "tbb-btn",
    `tbb-btn--${variant}`,
    size === "sm" ? "tbb-btn--sm" : "",
    block ? "tbb-btn--block" : "",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Internal link styled as a button. */
export function ButtonLink({
  href,
  variant = "blind",
  size,
  block,
  withArrow = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  size?: "sm";
  block?: boolean;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        className={btnClass(variant, size, block, className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={btnClass(variant, size, block, className)} {...rest}>
      {content}
    </Link>
  );
}

type ChipTone = "default" | "plain" | "blind" | "solid" | "fill" | "glass" | "on-dark" | "on-red";

/** A mono-label chip with the rotated-tile bullet (hidden on `plain`). */
export function Chip({
  tone = "default",
  className = "",
  children,
}: {
  tone?: ChipTone;
  className?: string;
  children: ReactNode;
}) {
  const toneClass = tone === "default" ? "" : ` tbb-chip--${tone}`;
  return <span className={`tbb-chip${toneClass}${className ? ` ${className}` : ""}`}>{children}</span>;
}

/** Outlined (or solid) focal numeral with a label and optional body. */
export function Stat({
  value,
  label,
  body,
  solid = false,
}: {
  value: ReactNode;
  label: ReactNode;
  body?: ReactNode;
  solid?: boolean;
}) {
  return (
    <div className="tbb-stat">
      <p className={`tbb-stat__num${solid ? " tbb-stat__num--solid" : ""}`}>{value}</p>
      <p className="tbb-stat__label">{label}</p>
      {body && <p className="tbb-stat__body">{body}</p>}
    </div>
  );
}

/** Mono uppercase eyebrow/label. */
export function Label({ className = "", children }: { className?: string; children: ReactNode }) {
  return <span className={`tbb-label${className ? ` ${className}` : ""}`}>{children}</span>;
}

/** Page frame max-width container. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`tbb-container${className ? ` ${className}` : ""}`}>{children}</div>;
}

/** Vertical-rhythm section with an optional anchor id. */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`tbb-section${className ? ` ${className}` : ""}`}>
      <Container>{children}</Container>
    </section>
  );
}
