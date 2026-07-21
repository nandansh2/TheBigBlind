import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/components/nav/MenuContext";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { SITE } from "@/lib/constants";

// Display — Fraunces: a soft, high-personality luxury serif used with restraint
// (hero + literary scroll lines + titles only). Deliberately not a Didone.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body/UI — Manrope: clean geometric sans carrying the bulk of the text.
const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

// Utility — JetBrains Mono: small technical eyebrows and labels only.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebigblind.club"),
  title: {
    default: "The Big Blind — The Right Table. The Right People. The Right Bets.",
    template: "%s · The Big Blind",
  },
  description:
    "The Big Blind is a venture-building ecosystem connecting founders, investors, VCs, and financial institutions. One curated table. Every introduction earned.",
  keywords: [
    "venture building",
    "founders",
    "investors",
    "venture capital",
    "startup ecosystem",
    "The Big Blind",
  ],
  authors: [{ name: SITE.host1 }, { name: SITE.host2 }],
  creator: "The Big Blind",
  publisher: "The Big Blind",
  applicationName: "The Big Blind",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Big Blind — The Right Table. The Right People. The Right Bets.",
    description:
      "A venture-building ecosystem. One curated table. Every introduction earned. Not everyone gets in.",
    url: "/",
    siteName: "The Big Blind",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Blind",
    description:
      "A venture-building ecosystem. One curated table. Every introduction earned.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased">
        {/* Organization structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: "https://thebigblind.club",
              slogan: SITE.tagline,
              description:
                "A venture-building ecosystem connecting founders, investors, VCs, and financial institutions.",
              email: SITE.email,
              telephone: SITE.phone,
              founder: [
                { "@type": "Person", name: SITE.host1 },
                { "@type": "Person", name: SITE.host2 },
              ],
              sameAs: [SITE.instagram, SITE.youtube, SITE.linkedin],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-bone focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-label focus:text-ink"
        >
          Skip to content
        </a>
        <MenuProvider>
          <Navbar />
          <div id="main">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
