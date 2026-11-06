// The partner network — single source of truth for the home wall and the partners page.

// Logo filenames in public/logos are the firm name sluggified.
export const logoSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Current partnerships (directory) plus Antler and Blume kept from the live site.
export const CURRENT_FIRMS = [
  "Antler",
  "Blume Ventures",
  "Invascent VC",
  "2AM VC",
  "Capital Con",
  "CredEnvy",
  "Sarathi Ventures",
  "Aeravti Ventures",
  "Anthill Ventures",
  "Kairos CoLabs",
  "Enlighten Capital",
  "Sunicon Ventures",
  "IRRETUS Ventures",
  "Venture East",
  "Momentum Ventures",
  "BIGGDA Ventures",
  "HAF.VC",
  "Dealflow Hub",
  "KRG Ventures",
  "Indigram Labs",
  "Benzaitein Fund",
  "MERISIS",
  "V-Hub",
  "T-Hub",
  "Bio Innovation Center",
  "Beej Network",
  "Venture Catalyst",
  "Atom XVII",
  "Goa Angels",
  "RBK Capital",
  "ZHA VC",
  "Succeed Indo-vations",
  "Carbon 6 Ventures",
  "Nuwa Capital",
  "VentureWolf",
];

// Prospective partnerships, folded into the wall without a label.
export const PROSPECTIVE_FIRMS = [
  "Beyond Seed Ventures",
  "Prime Ventures",
  "The Capital Room",
  "Leo Capital",
  "India Accelerator",
  "Redline Capital",
  "FAM Capital",
];

// The full wall, in order.
export const FIRMS = [...CURRENT_FIRMS, ...PROSPECTIVE_FIRMS];

// Strategic partners — the deliberate, named relationships (not a logo in the wall).
export const STRATEGIC = [
  { name: "DealFlowHub", body: "AI-powered due diligence and compliance screening for every startup in our pipeline. The backbone of our diligence layer." },
  { name: "Global Chamber Goa", body: "Global trade networks and government frameworks across Goa. The foundation of our government access and incubation partnerships." },
  { name: "COGGE", body: "Confederation of Global Goan Entrepreneurs. Regional ecosystem access and community infrastructure across industry and government." },
  { name: "VibrantGoa", body: "Regional media and community platform amplifying Goa's entrepreneurial ecosystem and cultural network." },
];
