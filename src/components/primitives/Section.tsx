import type { ReactNode } from "react";

/** Consistent page section wrapper with content max-width and vertical rhythm. */
export function Section({
  children,
  className = "",
  id,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`content-px ${className}`}>
      <div className={`mx-auto ${wide ? "max-w-content" : "max-w-content"}`}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`eyebrow ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
}

export function Breadcrumb({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="hairline max-w-10" />
      <span className="label text-silver">{children}</span>
    </div>
  );
}
