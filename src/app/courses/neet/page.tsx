import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { SectionTitle } from "@/components/Shared";
import { waCourse } from "@/data";

export const metadata: Metadata = {
  title: "NEET (Medical) Coaching | Ambition Classes, Purnea",
  description:
    "NEET-UG coaching in Purnea — Foundation, Nucleus and Target courses for medical aspirants. Fee on enquiry, free demo class.",
};

export default function Neet() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">NEET-UG · Medical</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">NEET Coaching in Purnea</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Physics, Chemistry and Biology — taught from the basics, with worksheets,
          weekly tests and doubt-clearing. Three batches for NEET students:
          Foundation (Class XI–XII), Nucleus (XII pass) and Target (Class XII / I.Sc).
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "Foundation", d: "Class X / XI / XII — 2-year programme. Builds the base in Physics, Chemistry and Biology." },
          { t: "Nucleus", d: "XII pass — 1-year dropper programme. Full syllabus revision with daily practice." },
          { t: "Target", d: "Class XII / I.Sc — 1-year programme. Boards and NEET preparation together." },
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
        <SectionTitle title="Book a free demo class" sub="See a real NEET class before you join. Fee details are shared on enquiry." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-line sm:p-6">
              <LeadForm source="neet" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              <a href={waCourse("NEET")} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-[#157347] font-bold text-white">
                Ask about NEET on WhatsApp
              </a>
              <p className="rounded-2xl bg-mist p-5 text-[15px] leading-relaxed text-muted">
                What the course covers: full syllabus in worksheets, topic-wise
                question sheets, regular tests with detailed solutions, and
                doubt-clearing sessions after every test.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
