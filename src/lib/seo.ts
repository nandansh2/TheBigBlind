import type { Metadata } from "next";

export const SITE_URL = "https://thebigblind.club";

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph and Twitter
 * cards, all derived from a single title/description/path.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path beginning with "/" — used for canonical + og:url. */
  path: string;
}): Metadata {
  const fullTitle = `${title} · The Big Blind`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "The Big Blind",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
