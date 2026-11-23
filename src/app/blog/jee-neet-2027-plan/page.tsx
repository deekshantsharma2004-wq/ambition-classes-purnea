import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "JEE/NEET 2027: Class XI se shuruaat — poora saal ka plan",
  description:
    "Class XI se JEE ya NEET ki taiyaari ka plan — pehle saal base, dusre saal revision aur test. Worksheet, practice, test aur doubt-clearing ka system.",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Blog · 24 November 2026</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          JEE/NEET 2027: Class XI se shuruaat — poora saal ka plan
        </h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-muted">
        <Reveal><p>Class XI se JEE ya NEET ki taiyaari shuru karna sabse achha faisla hai — do saal ka time milta hai, aur base majboot banta hai. Plan simple hai: pehla saal base, dusra saal revision aur test.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">Pehla saal (Class XI): base banao</h2><p>Physics, Chemistry aur Maths ya Biology — har chapter ke basic concept pehle clear karo. Worksheet se poora syllabus karo, har topic ke baad practice questions karo. Jo chapter samajh na aaye, use doubt session me poochho — agle chapter par jaane se pehle.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">Dusra saal (Class XII): revision + test</h2><p>Class XII me naya syllabus bhi hai aur Class XI ka revision bhi. Hafta me test do, har test ke baad detailed solution padho, aur galti wale topics ko dobara karo. Boards aur entrance — dono ki taiyaari saath chalti hai.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">Roz ka system</h2><p>Har din: class → usi din ke notes revise karo → practice questions karo → doubt likh kar rakho. Ek din bhi backlog mat banao — backlog hi sabse bada dushman hai.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">Test se daro mat</h2><p>Test ka matlab rank nahi, kamzori dhoondhna hai. Har test ke baad ye dekho — kaunsa topic galat hua, aur kyun. Wahi topic agle hafte ki practice me pehle aana chahiye.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">Dropper ho to kya karein</h2><p>Agar Class XII pass kar chuke ho, to Nucleus batch me ek saal ka plan banta hai — poora syllabus revision, roz practice, aur hafte me test. Dropper saal me discipline hi sab kuch hai.</p></Reveal>
        <Reveal><p>Ambition Classes, Purnea me Foundation course (Class XI–XII) aur Nucleus course (XII pass) isi plan par chalte hain — worksheet, practice, weekly test aur doubt-clearing. Free demo class lekar dekho, phir faisla karo.</p></Reveal>
      </div>
      <Reveal className="mt-8">
        <div className="rounded-2xl bg-navy p-6 text-white">
          <p className="font-bold">Free demo class book karein</p>
          <p className="mt-1 text-white/85">Foundation ya Nucleus — apna course chunein.</p>
          <Link href="/admission" className="mt-4 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-bold text-navy">
            Book a Free Demo →
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
