import type { MetadataRoute } from "next";

const BASE = "https://ambitionclassespurnea.in";
const PAGES = [
  "",
  "/about",
  "/courses",
  "/courses/jee",
  "/courses/neet",
  "/courses/foundation",
  "/faculty",
  "/results",
  "/facilities",
  "/fees",
  "/admission",
  "/gallery",
  "/reviews",
  "/contact",
  "/faq",
  "/blog",
  "/blog/choosing-coaching-purnea",
  "/blog/jee-neet-2027-plan",
  "/privacy",
  "/terms",
  "/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is the build date — never a hardcoded date that goes stale.
  return PAGES.map((p) => ({ url: `${BASE}${p || "/"}`, lastModified: new Date() }));
}
