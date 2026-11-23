import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { SectionTitle } from "@/components/Shared";
import { waCourse } from "@/data";

export const metadata: Metadata = {
  title: "Foundation Course (Class IX–XII) | Ambition Classes, Purnea",
  description:
    "Foundation and Pre-Foundation courses in Purnea — Class IX and X for NTSE and Olympiad, Class XI and XII for IIT-JEE and NEET.",
};

export default function Foundation() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Foundation · Class IX–XII</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Foundation Course in Purnea</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Start early, start right. Pre-Foundation (Class IX &amp; X) prepares
          students for NTSE and Olympiads. Foundation (Class X / XI / XII)
          builds the base for IIT-JEE and NEET — so Class XI and XII never feel rushed.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          { t: "Pre-Foundation", d: "Class IX & X — NTSE / Olympiad. Science and maths from the basics, with olympiad practice built in." },
          { t: "Foundation", d: "Class X / XI / XII — IIT-JEE / NEET. Two-year programme with worksheets, tests and doubt-clearing." },
        ].map((b) => (
          <Reveal key={b.t}>
            <div className="h-full rounded-2xl border border-line p-5">
              <h2 className="font-bold text-navy">{b.t}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <section className="mt-10">
        <SectionTitle title="Book a free demo class" sub="See a real Foundation class before you join. Fee details are shared on enquiry." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-line sm:p-6">
              <LeadForm source="foundation" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              <a href={waCourse("Foundation Course")} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-[#157347] font-bold text-white">
                Ask about Foundation on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
