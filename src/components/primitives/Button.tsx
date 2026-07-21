"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center gap-2.5 font-mono uppercase tracking-label text-[0.72rem] " +
  "rounded-full px-7 py-3.5 transition-all duration-300 ease-expo cursor-pointer " +
  "focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(255,61,104,0.5)]",
  ghost:
    "border border-silver-line text-bone hover:border-silver hover:bg-white/[0.04]",
};

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        <Inner>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <Inner>{children}</Inner>
    </Link>
  );
}

export function ButtonAction({
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: {
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <Inner>{children}</Inner>
    </button>
  );
}
