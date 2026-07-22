"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Subtle fade between routes (brief §5.2).
 *
 * Deliberately CSS-driven rather than JS-driven. The element's resting state is
 * fully visible and the keyframe only fades it IN, so if JS never runs — or the
 * animation library fails — the page is still readable. Page-level visibility
 * must never depend on an animation completing.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-in min-h-[60vh]">
      {children}
    </main>
  );
}
