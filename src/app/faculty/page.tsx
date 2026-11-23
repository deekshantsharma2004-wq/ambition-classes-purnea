import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FACULTY } from "@/data";

export const metadata: Metadata = {
  title: "Faculty | Ambition Classes, Purnea",
  description:
    "Meet the teachers of Ambition Classes, Purnea — Er. H. Lal, Er. Vijay Kumar, Er. P. Santosh (Physics) and Sandeep Jha (Mathematics).",
};

export default function Faculty() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Faculty</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Our Teachers</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Classroom teaching by experts. These are the four teachers listed by the
          institute. As new teachers join, this list is updated — we do not add
          names without confirmation.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FACULTY.map((f) => (
          <Reveal key={f.name}>
            <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="relative block aspect-[4/5] w-full overflow-hidden bg-mist">
                <Image src={f.img} alt={`${f.name}, ${f.subject} teacher at Ambition Classes, Purnea`} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover object-top" />
              </span>
              <div className="p-4 text-center">
                <h2 className="font-bold text-navy">{f.name}</h2>
                <p className="font-extrabold text-gold-dark">{f.subject}</p>
                <p className="text-sm text-muted">{f.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="rounded-2xl bg-mist p-5 text-[15px] leading-relaxed text-muted">
          Chemistry and Biology teachers are not listed here yet — the institute has
          not published their names. Ask us on WhatsApp or call, and we will tell
          you the current faculty for your course.
        </p>
      </Reveal>
    </div>
  );
}
