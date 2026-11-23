"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { MAPS_URL, PHONE_1, PHONE_2 } from "@/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/results", label: "Results" },
  { href: "/facilities", label: "Facilities" },
  { href: "/fees", label: "Fees" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center gap-2" aria-label="Ambition Classes, Purnea — home">
          <Image
            src="/images/logo2.png"
            alt="Ambition — School of Science Pvt. Ltd., Purnea"
            width={150}
            height={59}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className={`flex min-h-11 items-center rounded-full px-3 text-[15px] font-semibold transition ${
                pathname === n.href
                  ? "bg-mist text-navy"
                  : "text-ink hover:bg-mist hover:text-navy"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${PHONE_1}`}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-0.5 xl:flex"
          >
            <Phone size={16} aria-hidden /> Call {PHONE_1.slice(0, 5)} {PHONE_1.slice(5)}
          </a>
          <Link
            href="/admission"
            className="flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-0.5"
          >
            Try One Class Free
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 xl:hidden" aria-label="Mobile navigation">
          <ul className="grid gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl px-3 font-semibold ${
                    pathname === n.href ? "bg-mist text-navy" : "text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:+91${PHONE_1}`}
                className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-gold px-2 text-center text-sm font-bold text-navy"
              >
                <Phone size={16} aria-hidden /> Call {PHONE_1.slice(0, 5)} {PHONE_1.slice(5)}
              </a>
              <a
                href={`tel:+91${PHONE_2}`}
                className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-gold px-2 text-center text-sm font-bold text-navy"
              >
                <Phone size={16} aria-hidden /> Call {PHONE_2.slice(0, 5)} {PHONE_2.slice(5)}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex min-h-12 items-center justify-center rounded-full border border-navy font-bold text-navy"
              >
                Directions
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
