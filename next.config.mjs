/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Static investor deck lives in /public/our_deck — preserve these routes.
      { source: "/our_deck", destination: "/our_deck/index.html" },
      { source: "/our_deck/", destination: "/our_deck/index.html" },
    ];
  },
};

export default nextConfig;
