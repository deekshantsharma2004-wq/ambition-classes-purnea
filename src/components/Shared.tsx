import Link from "next/link";
import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import Reveal from "./Reveal";
import { MAPS_URL, PHONE_1, WA_GENERAL, waLink } from "@/data";

export function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-8 max-w-2xl">
      {kicker && <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">{kicker}</p>}
      <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">{title}</h2>
      <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

/** The four quick actions used on Home — each does something real. */
export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <a
        href={`tel:+91${PHONE_1}`}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy font-bold text-white transition hover:-translate-y-0.5"
      >
        <Phone size={18} aria-hidden /> Call
      </a>
      <a
        href={waLink(WA_GENERAL)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#157347] font-bold text-white transition hover:-translate-y-0.5"
      >
        <MessageCircle size={18} aria-hidden /> WhatsApp
      </a>
      <Link
        href="/admission"
        className="flex min-h-12 items-center justify-center rounded-full bg-gold font-bold text-navy transition hover:-translate-y-0.5"
      >
        See a Real Class First
      </Link>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy font-bold text-navy transition hover:-translate-y-0.5"
      >
        <MapPin size={18} aria-hidden /> Directions
      </a>
    </div>
  );
}

export function TrustStrip() {
  const stats = [
    { big: "23 Years", small: "Serving Purnea since 2003" },
    { big: "4 Courses", small: "JEE · NEET · Boards · Foundation" },
    { big: "3.8", small: "Google rating (87+ reviews)", star: true, href: "/reviews" },
    { big: "Hostel", small: "Separate for boys & girls" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => {
        const inner = (
          <>
            <p className="flex items-center justify-center gap-1 text-xl font-extrabold text-navy sm:text-2xl">
              {s.big}
              {(s as { star?: boolean }).star && <Star size={20} className="fill-gold text-gold" aria-hidden />}
            </p>
            <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">{s.small}</p>
          </>
        );
        return (s as { href?: string }).href ? (
          <Link key={s.big} href={(s as { href: string }).href} className="block bg-mist px-4 py-5 text-center transition hover:bg-white">
            {inner}
          </Link>
        ) : (
          <div key={s.big} className="bg-mist px-4 py-5 text-center">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
