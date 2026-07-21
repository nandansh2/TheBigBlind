import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebigblind.club"),
  title: "The Big Blind",
  description:
    "The Big Blind is a venture-building ecosystem built around one principle: the right conversation, with the right people, at the right time, changes everything.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased bg-black text-white">
        <noscript>
          <style>{`.js-anim { opacity: 1 !important; filter: none !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
