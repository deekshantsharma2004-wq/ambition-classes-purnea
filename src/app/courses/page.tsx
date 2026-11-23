import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { COURSES, waCourse } from "@/data";

export const metadata: Metadata = {
  title: "Courses: JEE, NEET, Foundation",
  alternates: { canonical: "/courses" },
  description:
    "Foundation, Nucleus, Target and Pre-Foundation courses for IIT-JEE, NEET and +2 Boards in Purnea. Fee on enquiry, free demo class.",
};

export default function Courses() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Courses</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Courses at Ambition Classes, Purnea</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Every course follows the same system: worksheet, practice, weekly test and
          doubt-clearing. Fee details are shared on enquiry — book a free demo class
          to see the teaching first. Nucleus (XII pass) and Target (XII / I.Sc) both
          cover IIT-JEE and NEET — pick your exam when you book a demo class.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {COURSES.map((c) => (
          <Reveal key={c.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-line p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">{c.tag} · {c.exam}</p>
              <h2 className="mt-1 text-xl font-extrabold text-navy">{c.name}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{c.promise}</p>
              <p className="mt-2 text-sm text-muted">{c.duration} · {c.who}</p>
              <div className="mt-4 flex gap-2">
                <Link href={c.href} className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-navy font-bold text-white">
                  View course
                </Link>
                <a
                  href={waCourse(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-[#157347] font-bold text-[#157347]"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="rounded-2xl bg-mist p-5 text-[15px] leading-relaxed text-muted">
          Not sure which course fits? Book a free demo class — our counsellor will
          ask about your class and target exam and suggest the right batch.
          CUET guidance is also available on enquiry — ask on WhatsApp or at the
          demo class.
        </p>
      </Reveal>
    </div>
  );
}
