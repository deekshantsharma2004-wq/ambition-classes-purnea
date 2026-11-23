import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews | Ambition Classes, Purnea",
  description:
    "Ambition Classes, Purnea is rated 3.8 stars on Google from 87+ reviews. Read what parents and students say.",
};

export default function Reviews() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Reviews</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">What Parents Say</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Ambition Classes, Purnea is rated <strong>3.8 stars on Google</strong> from
          87+ reviews. We do not write our own testimonials on this page — the
          rating above is from the public Google listing. Search &ldquo;Ambition
          Classes Purnea&rdquo; on Google to read the reviews yourself.
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <div className="rounded-2xl bg-mist p-6 text-center">
          <p className="flex items-center justify-center gap-2 text-5xl font-extrabold text-navy">3.8 <Star size={40} className="fill-gold text-gold" aria-hidden /></p>
          <p className="mt-2 font-semibold text-muted">Google rating · 87+ reviews</p>
          <p className="mt-4 text-[15px] text-muted">
            Studied with us? Please leave an honest review on Google — it helps
            other parents in Purnea decide.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
