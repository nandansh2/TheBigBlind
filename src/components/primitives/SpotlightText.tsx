"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Cursor-activated text. The copy rests dim; a soft light tracks the cursor and
 * "develops" the words it passes over to full white. Falls back to fully legible
 * text for touch / reduced-motion / keyboard users (no dependence on the effect).
 */
export function SpotlightText({
  children,
  as: Tag = "p",
  className = "",
  radius = 240,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", `${mx}px`);
          el.style.setProperty("--my", `${my}px`);
          raf = 0;
        });
      }
    };
    const onLeave = () => {
      el.style.setProperty("--mx", `-9999px`);
      el.style.setProperty("--my", `-9999px`);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  const mask = `radial-gradient(${radius}px circle at var(--mx, -9999px) var(--my, -9999px), #000 0%, #000 30%, transparent 68%)`;

  return (
    <div ref={ref} className="relative">
      {/* Base — dim but legible on its own (accessibility floor). */}
      <Tag className={`${className} ${enabled ? "text-bone/35" : "text-bone"}`}>
        {children}
      </Tag>
      {/* Bright develop layer, revealed only under the cursor light. */}
      {enabled && (
        <Tag
          aria-hidden="true"
          className={`${className} absolute inset-0 text-white`}
          style={{
            WebkitMaskImage: mask,
            maskImage: mask,
          }}
        >
          {children}
        </Tag>
      )}
    </div>
  );
}
