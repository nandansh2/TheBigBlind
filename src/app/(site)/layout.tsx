import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./styles/tokens.css";
import "./styles/tbb.css";
import "./styles/site.css";
import { Nav } from "@/components/ds/Nav";
import { Footer } from "@/components/ds/Footer";
import { SITE } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/seo";

// The Big Blind design system type families, mapped to the system's --font-* variables.
// Inter light carries the display sizes; IBM Plex Mono the labels; Fraunces italic the rare quote.
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebigblind.club"),
  title: {
    default: "The Big Blind — Right people. Same room.",
    template: "%s · The Big Blind",
  },
  description:
    "The Big Blind is a venture-building firm. We build businesses investors believe in, and connect founders to the capital and network that get them there.",
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
    title: "The Big Blind — Right people. Same room.",
    description:
      "A venture-building firm. We build businesses investors believe in, from first pitch to first cheque.",
    url: "/",
    siteName: "The Big Blind",
    locale: "en_IN",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Blind",
    description: "A venture-building firm. Right people. Same room.",
    images: [OG_IMAGE.url],
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
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
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
                "A venture-building firm connecting founders, investors, VCs and financial institutions.",
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
