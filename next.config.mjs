/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/our_deck", destination: "/our_deck/index.html" },
      { source: "/our_deck/", destination: "/our_deck/index.html" },
    ];
  },
};

export default nextConfig;
