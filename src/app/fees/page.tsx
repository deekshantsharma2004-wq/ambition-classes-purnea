import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { WA_GENERAL, waLink } from "@/data";

export const metadata: Metadata = {
  title: "Fees | Ambition Classes, Purnea",
  description:
    "Fee details for Ambition Classes, Purnea are shared on enquiry. No fee for a demo class. Instalments and scholarships on enquiry.",
};

export default function Fees() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Fees</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Fee — shared on enquiry</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          We do not publish a fee list on the website, because the fee depends on
          the course and the batch. Call or WhatsApp us and we will tell you the
          fee for your course, along with instalment and scholarship details.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "No fee for a demo class", d: "Attend a real class first, then decide. A demo class is always free." },
          { t: "Instalments on enquiry", d: "Ask us about paying the fee in instalments for your course." },
          { t: "Scholarship on enquiry", d: "Merit-based scholarship details are shared when you enquire." },
        ].map((f) => (
          <Reveal key={f.t}>
            <div className="h-full rounded-2xl border border-line p-5">
              <h2 className="font-bold text-navy">{f.t}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="flex flex-col gap-3 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">Ask for your course fee on WhatsApp — the message is already typed for you.</p>
          <a href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer" className="flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gold px-6 font-bold text-navy">
            Ask on WhatsApp
          </a>
        </div>
        <p className="mt-4 text-center">
          <Link href="/refund" className="font-semibold text-navy underline">Read our refund policy →</Link>
        </p>
      </Reveal>
    </div>
  );
}
