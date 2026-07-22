/** @type {import('next').NextConfig} */

// HTML must always be revalidated. Next.js defaults static pages to
// `s-maxage=31536000, stale-while-revalidate`, which assumes the CDN is purged
// on every deploy. Hostinger's CDN is not, so edges pinned stale HTML for days
// and served several different builds of the site at random — including the
// pre-migration one. Documents therefore opt out of shared caching entirely;
// only content-hashed build assets stay immutable.
const REVALIDATE = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, s-maxage=0, must-revalidate",
  },
];

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      // Build output is content-hashed — safe to cache forever.
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Every HTML document, including the homepage.
      { source: "/", headers: REVALIDATE },
      {
        // Everything except build output, static media and the standalone deck.
        source: "/:path((?!_next/|assets/|our_deck).*)",
        headers: REVALIDATE,
      },
    ];
  },

  async rewrites() {
    return [
      // Static investor deck lives in /public/our_deck — preserve these routes.
      { source: "/our_deck", destination: "/our_deck/index.html" },
      { source: "/our_deck/", destination: "/our_deck/index.html" },
    ];
  },
};

export default nextConfig;
