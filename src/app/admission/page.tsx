import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { SectionTitle } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Admission — Book a Free Demo Class | Ambition Classes, Purnea",
  description:
    "Admission is open at Ambition Classes, Purnea. Book a free demo class in three steps: enquire, visit, join.",
};

export default function Admission() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Admission</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Admission open — new batch</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { s: "1", t: "Book a free demo", d: "Fill the form below or message us on WhatsApp. Your enquiry reaches us when you tap Send in WhatsApp." },
          { s: "2", t: "Visit the campus", d: "Come to Navratan Hata, NH-31, Ford Company Chowk, Purnea. Meet the teachers, see the classrooms and the hostel." },
          { s: "3", t: "Take admission", d: "Choose your course and batch. Fee details are shared on enquiry." },
        ].map((st) => (
          <Reveal key={st.s}>
            <div className="h-full rounded-2xl border border-line p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-lg font-extrabold text-navy">{st.s}</span>
              <h2 className="mt-3 font-bold text-navy">{st.t}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{st.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <section className="mt-10">
        <SectionTitle title="Book your free demo class" sub="Fill the form — a pre-filled WhatsApp message will open. Tap Send in WhatsApp to reach us." />
        <Reveal>
          <div className="max-w-2xl rounded-3xl bg-white p-5 shadow-lg ring-1 ring-line sm:p-6">
            <LeadForm source="admission" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
