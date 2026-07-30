// Site-wide constants — from brief Section 8. Do not alter copy.

export const SITE = {
  name: "The Big Blind",
  tagline: "The Right Table. The Right People. The Right Bets.",
  email: "dealer@thebigblind.club",
  phone: "+91 90354 62042",
  instagram: "https://instagram.com/the_big_blind_",
  instagramHandle: "@the_big_blind_",
  youtube: "https://youtube.com/@BigBlindPod",
  linkedin: "https://linkedin.com/company/the-big-blind/",
  host1: "Nandan Shetty",
  host2: "Rohit Salveru",
  formspree: "https://formspree.io/f/xpqvdaol",
} as const;

export type Suit = "spade" | "heart" | "diamond" | "club";

export const ROUTES = {
  home: "/",
  vision: "/vision",
  founders: "/founders",
  investors: "/investors",
  ventureCapital: "/venture-capital",
  financialInstitutions: "/financial-institutions",
  partners: "/partners",
  reachOut: "/reach-out",
  ventureBuilding: "/venture-building",
} as const;

// "Where We Come In" audience segments — used in the menu grid and elsewhere.
export const SEGMENTS: {
  suit: Suit;
  label: string;
  href: string;
}[] = [
  { suit: "spade", label: "Founders", href: ROUTES.founders },
  { suit: "heart", label: "Investors", href: ROUTES.investors },
  { suit: "diamond", label: "Venture Capital", href: ROUTES.ventureCapital },
  { suit: "club", label: "Financial Institutions", href: ROUTES.financialInstitutions },
];
