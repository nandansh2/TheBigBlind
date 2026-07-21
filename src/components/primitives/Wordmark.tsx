import Link from "next/link";
import { Glyph } from "./Glyph";

/** THE BIG ♠ BLIND — logo wordmark. Spade is the custom SVG mark. */
export function Wordmark({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="The Big Blind — home"
      className={`group inline-flex items-center gap-2 font-mono uppercase tracking-[0.3em] text-[0.82rem] text-bone transition-opacity duration-300 hover:opacity-80 ${className}`}
    >
      <span>The Big</span>
      <Glyph
        name="spade"
        size={15}
        tone="silver"
        className="translate-y-[1px] transition-transform duration-500 ease-expo group-hover:-translate-y-[1px]"
      />
      <span>Blind</span>
    </Link>
  );
}
