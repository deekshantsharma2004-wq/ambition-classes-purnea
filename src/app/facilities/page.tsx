import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SectionTitle } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Hostel, Library & Campus",
  alternates: { canonical: "/facilities" },
  description:
    "Separate hostel for boys and girls, library and spacious AC campus at Ambition Classes, Purnea.",
};

const FAC = [
  {
    id: "hostel",
    title: "Separate Hostel for Boys & Girls",
    img: "/images/hostel1.jpg",
    alt: "Hostel building at Ambition Classes, Purnea",
    text: "Ambition has separate hostel facilities for boys and girls. Each hostel has a Warden responsible for discipline, maintenance, allotment of rooms and overall management. Hostel staff includes caretakers, attendants and security personnel to ensure students' safety 24×7. Mess facilities are provided separately for boys and girls. Clean rooms, hygienic food and a disciplined environment ensure a comfortable stay for students.",
  },
  {
    id: "library",
    title: "Library",
    img: "/images/library.jpg",
    alt: "Library at Ambition Classes, Purnea",
    text: "Our rich library provides excellent academic support to students. It contains the best reference books written by renowned authors covering all competitive subjects. Students can study in a quiet, disciplined environment and enhance their conceptual understanding.",
  },
  {
    id: "campus",
    title: "Campus",
    img: "/images/campus.jpg",
    alt: "Campus of Ambition Classes, Purnea",
    text: "Our spacious campus is equipped with AC classrooms and modern infrastructure comparable to top hi-tech educational institutions. Strict discipline is maintained inside classrooms. Teachers closely monitor student behaviour to ensure a focused and productive learning environment.",
  },
];

export default function Facilities() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Facilities</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Hostel, Library &amp; Campus</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      {FAC.map((f, i) => (
        <section key={f.id} id={f.id} className="mt-10 scroll-mt-24">
          <Reveal>
            <div className={`grid items-center gap-6 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <span className="relative block aspect-[16/10] w-full overflow-hidden rounded-3xl bg-mist">
                <Image src={f.img} alt={f.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </span>
              <div>
                <SectionTitle title={f.title} />
                <p className="text-[15px] leading-relaxed text-muted">{f.text}</p>
              </div>
            </div>
          </Reveal>
        </section>
      ))}
      <Reveal className="mt-10">
        <div className="rounded-2xl border border-line bg-mist p-5">
          <h2 className="font-bold text-navy">Hostel rooms</h2>
          <div className="relative mt-3 block aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-2xl bg-mist">
            <Image src="/images/hostel2.jpg" alt="Second view of the hostel at Ambition Classes, Purnea" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <p className="mt-3 text-[15px] text-muted">
            Hostel fee is shared on enquiry — call or WhatsApp us.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
