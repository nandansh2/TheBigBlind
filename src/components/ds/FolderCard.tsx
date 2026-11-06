import Link from "next/link";
import type { ReactNode } from "react";

/* FolderCard: number-led / name-led tile with a bezel and a media sheet.
   Used here for the podcast, editions, and the startups we back. */
export function FolderCard({
  href,
  media,
  tag,
  title,
  sub,
  footBig,
  footSmall,
  footCount,
  className = "",
}: {
  href?: string;
  media?: string; // CSS background for the media area
  tag?: ReactNode; // over the media, top-right
  title: ReactNode;
  sub?: ReactNode;
  footBig?: ReactNode;
  footSmall?: ReactNode;
  footCount?: ReactNode;
  className?: string;
}) {
  const cls = `tbb-folder tbb-lift${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      <div className="tbb-folder__media" style={media ? { background: media } : undefined} />
      {tag && <div className="tbb-folder__tag">{tag}</div>}
      <div className="tbb-folder__sheet">
        <p className="tbb-folder__title">{title}</p>
        {sub && <p className="tbb-folder__sub">{sub}</p>}
        {(footBig || footCount) && (
          <div className="tbb-folder__foot">
            <span className="tbb-folder__big">
              {footBig}
              {footSmall && <small>{footSmall}</small>}
            </span>
            {footCount && <span className="tbb-folder__count">{footCount}</span>}
          </div>
        )}
      </div>
    </>
  );
  if (!href) return <div className={cls}>{inner}</div>;
  const external = href.startsWith("http") || href.startsWith("#");
  return external ? (
    <a className={cls} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
