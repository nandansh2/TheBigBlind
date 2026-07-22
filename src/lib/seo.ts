import type { Metadata } from "next";

export const SITE_URL = "https://thebigblind.club";

/**
 * Share image. Declaring `openGraph` on a page replaces the inherited object,
 * which drops the `opengraph-image` file convention — so every page must pass
 * this through explicitly.
 */
export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "The Big Blind — The Right Table. The Right People. The Right Bets.",
};

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
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
