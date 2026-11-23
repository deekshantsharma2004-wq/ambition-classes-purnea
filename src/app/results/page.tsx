import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { RESULTS } from "@/data";

export const metadata: Metadata = {
  title: "Results",
  alternates: { canonical: "/results" },
  description:
    "Results from Ambition Classes, Purnea — Pooja Lavali (NEET), Romi Sah (M.Sc. Chemistry, SVNIT Surat), Rajeev Ranjan (IIT-Roorkee), Pallavi Kumari (95%).",
};

export default function Results() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Results</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Our Brightest Minds</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          These are the results published by the institute. We show only what the
          institute has published — no rank or year is added without proof.
        </p>
      </Reveal>
      <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        {RESULTS.map((r) => (
          <Reveal key={r.name}>
            <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="relative block h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-mist lg:h-24 lg:w-24">
                <Image src={r.img} alt={`${r.name} — ${r.result}`} fill sizes="96px" className="object-cover object-top" />
              </span>
              <div className="min-w-0">
                <h2 className="font-bold text-navy">{r.name}</h2>
                <p className="font-extrabold text-gold-dark">{r.result}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="rounded-2xl bg-mist p-5 text-[15px] leading-relaxed text-muted">
          We do not promise a rank or a selection. Regular tests, doubt-clearing
          and honest teaching are what we promise — the rest is the student&apos;s
          hard work.
        </p>
      </Reveal>
    </div>
  );
}
