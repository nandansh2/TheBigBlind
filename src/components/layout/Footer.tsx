import { SITE } from "@/lib/constants";
import { Icon } from "@/components/primitives/Icon";

export function Footer() {
  return (
    <footer className="content-px border-t border-silver-line py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-base text-bone-muted md:text-lg">
          {SITE.tagline}
        </p>
        <div className="flex flex-col gap-1.5 font-mono text-[0.72rem] uppercase tracking-label text-silver-dim md:items-end">
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-bone"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-bone"
          >
            {SITE.instagramHandle}
          </a>
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-bone"
          >
            <Icon name="microphone" size={13} />
            <span>Podcast</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
