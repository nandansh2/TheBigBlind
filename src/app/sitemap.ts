import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/vision", priority: 0.9, freq: "monthly" },
    { path: "/founders", priority: 0.9, freq: "monthly" },
    { path: "/investors", priority: 0.9, freq: "monthly" },
    { path: "/venture-capital", priority: 0.9, freq: "monthly" },
    { path: "/financial-institutions", priority: 0.9, freq: "monthly" },
    { path: "/partners", priority: 0.8, freq: "monthly" },
    { path: "/reach-out", priority: 0.8, freq: "monthly" },
    { path: "/waitlist", priority: 0.7, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
