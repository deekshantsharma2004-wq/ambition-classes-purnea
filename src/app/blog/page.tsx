import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog | Ambition Classes, Purnea",
  description:
    "Guides for parents and students in Purnea — how to choose a coaching institute, and how to plan JEE/NEET 2027 from Class XI.",
};

const POSTS = [
  {
    slug: "choosing-coaching-purnea",
    title: "Purnea me coaching kaise chunein — parents ke liye 10 sawal",
    excerpt:
      "Fee, teacher, test, hostel — admission se pehle ye 10 sawal har coaching se poochhein. Koi bhi institute jo inke jawab na de, usse savdhaan rahein.",
    date: "24 November 2026",
  },
  {
    slug: "jee-neet-2027-plan",
    title: "JEE/NEET 2027: Class XI se shuruaat — poora saal ka plan",
    excerpt:
      "Class XI se JEE ya NEET ki taiyaari kaise shuru karein — pehle saal me base, dusre saal me revision aur test. Koi shortcut nahi, sirf system.",
    date: "24 November 2026",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Blog</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Guides for Parents &amp; Students</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {POSTS.map((p) => (
          <Reveal key={p.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-line p-6">
              <p className="text-sm font-semibold text-muted">{p.date}</p>
              <h2 className="mt-2 text-xl font-extrabold text-navy">{p.title}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-navy px-5 font-bold text-white self-start">
                Read the guide →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
