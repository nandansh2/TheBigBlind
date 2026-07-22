"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

// useLayoutEffect on the client (applies the hidden state before paint, so
// there is no flash of content), useEffect on the server to avoid React's
// SSR warning.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scroll reveal — fail-open by design.
 *
 * The server renders a plain, fully visible element. Only once JS runs does it
 * opt in to the hidden state and animate back in, via CSS transitions driven by
 * an IntersectionObserver. No animation library sits between the reader and the
 * content, so a broken or missing script can never blank the page.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: leave the element in its visible resting state.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    el.style.setProperty("--reveal-y", `${y}px`);
    el.style.setProperty("--reveal-delay", `${delay}s`);
    el.dataset.reveal = "pending";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            if (once) io.disconnect();
          } else if (!once) {
            el.dataset.reveal = "pending";
          }
        }
      },
      { rootMargin: "-12% 0px -12% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
