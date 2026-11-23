import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";
import { SectionTitle } from "@/components/Shared";

export const metadata: Metadata = {
  title: "About Us — Coaching Since 2003",
  alternates: { canonical: "/about" },
  description:
    "Ambition School of Competitive Education was established on 20th July 2003. Purnea centre since 2009. Director Mr. Amit Kumar Sinha.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">About us</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">About Ambition Classes, Purnea</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Ambition School of Competitive Education was established on 20th July, 2003
          with the vision to provide quality education to talented students of Bihar
          and Jharkhand at affordable cost. A healthy academic environment under expert
          guidance was created. In 2009, the Purnea Centre came into existence and
          within a short span, it showed extraordinary growth.
        </p>
      </Reveal>

      {/* DIRECTOR — the only place director.jpg appears on the whole site */}
      <section className="mt-10">
        <SectionTitle kicker="Director" title="Meet the Director" />
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-line bg-mist p-6 sm:grid-cols-[240px_1fr] sm:p-8">
            <Image
              src="/images/director.jpg"
              alt="Mr. Amit Kumar Sinha, Director, Ambition Classes, Purnea"
              width={421}
              height={515}
              className="aspect-[421/515] w-full max-w-[240px] rounded-2xl object-cover"
            />
            <div>
              <h2 className="text-2xl font-extrabold text-navy">Mr. Amit Kumar Sinha</h2>
              <p className="font-semibold text-gold-dark">Director, Ambition Classes, Purnea</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Students are encouraged to work on complex scientific problems through
                interactive classes and doubt-clearing sessions. Regular practice
                papers, exams and answer evaluations help students judge their academic
                performance and improve continuously.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-12">
        <SectionTitle kicker="How we teach" title="Our teaching method" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Worksheets, full syllabus", d: "The entire course module is designed in the form of worksheets which cover the complete syllabus in detail." },
            { t: "Concepts + problem-solving", d: "Our major focus is to clear basic concepts and develop problem-solving skills." },
            { t: "Regular tests", d: "Regular tests with detailed solutions help students succeed not only in board exams but also in competitive examinations." },
            { t: "Doubt-clearing sessions", d: "Regular doubt-clearing sessions and detailed solutions after every test." },
          ].map((f) => (
            <Reveal key={f.t}>
              <div className="h-full rounded-2xl border border-line p-5">
                <h3 className="font-bold text-navy">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <ul className="grid gap-2 text-[15px] text-muted sm:grid-cols-2">
            {["Classroom teaching by experts", "Regular doubt-clearing classes", "Topic-wise question sheet distribution", "Well maintained & peaceful classrooms"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={18} className="shrink-0 text-[#157347]" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { t: "Our Mission", d: "To deliver high-quality education that builds strong academic foundations and prepares students for board and competitive examinations with confidence." },
          { t: "Our Vision", d: "To become the most trusted and result-oriented institute in Bihar by nurturing talent, discipline and innovation in education." },
          { t: "Our Values", d: "Integrity, commitment, discipline, student-centric learning and continuous improvement form the core values of Ambition." },
        ].map((v) => (
          <Reveal key={v.t}>
            <div className="h-full rounded-2xl bg-navy p-6 text-white">
              <h3 className="text-lg font-bold text-gold">{v.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/85">{v.d}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
