import type { Suit } from "@/lib/constants";

export type GlyphName = Suit | "lozenge" | "star";

const PATHS: Record<Exclude<GlyphName, never>, string> = {
  heart:
    "M12 21s-8.6-5.4-8.6-11.6A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.6 3.3C20.6 15.6 12 21 12 21Z",
  diamond: "M12 1.5 21.6 12 12 22.5 2.4 12z",
  spade:
    "M12 1.8C12 1.8 3.6 9.1 3.6 14.7c0 2.9 2 4.7 4.3 4.7 1.2 0 2.3-.5 3-1.5-.1 2.1-1.1 3.8-2.8 4.8v.9h7.8v-.9c-1.7-1-2.7-2.7-2.8-4.8.7 1 1.8 1.5 3 1.5 2.3 0 4.3-1.8 4.3-4.7C20.4 9.1 12 1.8 12 1.8Z",
  club:
    "M12 2.2a3.35 3.35 0 0 0-3.35 3.35c0 .82.3 1.57.8 2.16A3.35 3.35 0 1 0 7.4 13.7a3.35 3.35 0 0 0 2.83-1.57c-.1 2.1-1.05 3.87-2.63 4.9v1.8h8.8v-1.8c-1.58-1.03-2.53-2.8-2.63-4.9A3.35 3.35 0 0 0 16.6 13.7a3.35 3.35 0 1 0-2.05-5.99c.5-.59.8-1.34.8-2.16A3.35 3.35 0 0 0 12 2.2Z",
  // ◈ — white diamond containing a small black diamond
  lozenge: "M12 2 22 12 12 22 2 12z",
  // ★ — five-pointed star
  star: "M12 2.4l2.7 6.06 6.6.53-5.02 4.32 1.54 6.45L12 16.9l-5.82 3.36 1.54-6.45L2.7 9.49l6.6-.53z",
};

const PINK: GlyphName[] = ["heart", "diamond"];

export function Glyph({
  name,
  className = "",
  size = 24,
  tone,
}: {
  name: GlyphName;
  className?: string;
  size?: number;
  /** Override the automatic suit colour. */
  tone?: "pink" | "silver" | "current";
}) {
  const resolved = tone ?? (PINK.includes(name) ? "pink" : "silver");
  const color =
    resolved === "pink"
      ? "#FF3D68"
      : resolved === "silver"
        ? "#D8DBE0"
        : "currentColor";

  if (name === "lozenge") {
    // Outline diamond with a small solid diamond inside.
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        style={{ color }}
      >
        <path d={PATHS.lozenge} stroke="currentColor" strokeWidth={1.4} />
        <path d="M12 8.2 15.8 12 12 15.8 8.2 12z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={{ color }}
    >
      <path d={PATHS[name]} fill="currentColor" />
    </svg>
  );
}

/** The wordmark spade — inline, used inside "THE BIG ♠ BLIND". */
export function SpadeMark({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return <Glyph name="spade" size={size} className={className} tone="silver" />;
}
