"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, PenLine, Phone } from "lucide-react";
import { PHONE_1, WHATSAPP } from "@/data";

/** Mobile-only sticky bar. Never rendered on /admin or on any unknown route (404). */
const KNOWN_PATHS = new Set([
  "/",
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
]);

export default function StickyBar() {
  const pathname = usePathname();
  // Never show on the staff admin page or on a not-found page.
  if (pathname === "/admin" || !KNOWN_PATHS.has(pathname ?? "")) return null;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white shadow-[0_-4px_16px_rgba(11,42,91,0.12)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={`tel:+91${PHONE_1}`}
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-r border-navy/20 bg-gold text-xs font-bold text-navy"
      >
        <Phone size={20} aria-hidden /> Call
      </a>
      <Link
        href="/admission"
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-gold text-xs font-bold text-navy"
      >
        <PenLine size={20} aria-hidden /> Free Demo
      </Link>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-bold text-[#157347]"
      >
        <MessageCircle size={20} aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
