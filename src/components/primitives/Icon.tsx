import type { SVGProps } from "react";

export type IconName =
  | "chart"
  | "shield"
  | "microphone"
  | "eye"
  | "crown"
  | "building"
  | "handshake"
  | "lock";

const P: Record<IconName, JSX.Element> = {
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 20v-6" />
      <path d="M13 20V9" />
      <path d="M18 20v-9" />
      <path d="M7 11l4-4 3 2 4-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z" />
      <path d="M9.2 11.8l1.9 1.9 3.7-4" />
    </>
  ),
  microphone: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
      <path d="M9 21h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  crown: (
    <>
      <path d="M3 18l1.6-9 4.4 4L12 6l3 7 4.4-4L21 18z" />
      <path d="M3 18h18" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 21V9l8 2v10" />
      <path d="M4 21h18" />
      <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
    </>
  ),
  handshake: (
    <>
      <path d="M12 8l-2-1.6a2 2 0 0 0-2.3.1L3 10.5" />
      <path d="M3 10.5l3.5 3.5a1.6 1.6 0 0 0 2.3 0L11 12l3 3a1.6 1.6 0 0 0 2.3 0L21 10.5" />
      <path d="M21 10.5l-4.5-3.9a2 2 0 0 0-2.3-.1L12 8" />
      <path d="M9 16l1.5 1.5M12 15l1.5 1.5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2.5" />
    </>
  ),
};

export function Icon({
  name,
  size = 22,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {P[name]}
    </svg>
  );
}
