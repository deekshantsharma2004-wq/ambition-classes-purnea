import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { QuickActions, SectionTitle, TrustStrip } from "@/components/Shared";
import { COURSES, FACULTY, HINDI_LINE, RESULTS, WA_GENERAL, waLink } from "@/data";

export const metadata: Metadata = {
  title: "Ambition Classes, Purnea — IIT-JEE | NEET | +2 Boards Coaching Since 2003",
  description:
    "Ambition Classes, Purnea — IIT-JEE, NEET and +2 Boards coaching since 2003. Separate hostel for boys and girls, library, AC campus. Book a free demo class.",
};

const SYSTEM = [
  { step: "1", title: "Worksheet", text: "Full syllabus in worksheets — basic concepts first, then problem-solving." },
  { step: "2", title: "Practice", text: "Topic-wise question sheets and daily practice problems (DPP) after every class." },
  { step: "3", title: "Test", text: "Regular weekly tests with detailed solutions, so you always know where you stand." },
  { step: "4", title: "Doubt Clearing", text: "Doubt-clearing sessions with teachers who know every student by name." },
];

export default function Home() {
  return (
    <>
      {/* HERO — photo is p1.jpg, used only here */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-gold">{HINDI_LINE}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl sm:leading-[1.15]">
              IIT-JEE · NEET · +2 Boards — Purnea
            </h1>
            <p className="mt-3 text-lg font-bold text-gold">MOST TRUSTED INSTITUTE OF BIHAR</p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/85">
              Since 2003 · 23 years of teaching in Purnea. Expert teachers, regular
              tests, doubt-clearing sessions — and a separate hostel for boys and
              girls, so outstation students can study in peace.
            </p>
            <div className="mt-6">
              <QuickActions />
            </div>
          </Reveal>
          <Reveal className="relative">
            <Image
              src="/images/p1.jpg"
              alt="Students studying in a classroom at Ambition Classes, Purnea"
              width={502}
              height={548}
              priority
              fetchPriority="high"
              className="aspect-[502/548] w-full rounded-3xl object-cover shadow-2xl"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-navy shadow">
              Since 2003 · 23 Years
            </span>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
        <TrustStrip />
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6">
        <SectionTitle
          kicker="Courses"
          title="Choose your course"
          sub="Four courses, one system — worksheet, practice, test, doubt-clearing. Fee details are shared on enquiry."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {COURSES.map((c) => (
            <Reveal key={c.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">{c.tag}</p>
                <h3 className="mt-1 text-xl font-extrabold text-navy">{c.name}</h3>
                <p className="text-sm font-semibold text-muted">{c.exam}</p>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{c.promise}</p>
                <p className="mt-2 text-sm text-muted">{c.duration} · {c.who}</p>
                <div className="mt-4 flex gap-2">
                  <Link href={c.href} className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-navy font-bold text-white">
                    View course
                  </Link>
                  <a
                    href={waLink(`Namaste, mujhe ${c.name} course ke baare me jaankari chahiye — fee, batch timing aur demo class.`)}
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
      </section>

      {/* AMBITION SYSTEM — dark premium band */}
      <section className="bg-navy-dark py-12 text-white sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-gold">The Ambition System</p>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">How we teach — the same way, every batch</h2>
            <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SYSTEM.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-lg font-extrabold text-navy">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70">
            We do not promise a rank or a selection. We promise honest teaching, regular tests and
            doubt-clearing — the rest is the student&apos;s hard work.
          </p>
        </div>
      </section>

      {/* FACULTY PREVIEW — names only, photos live on /faculty */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <SectionTitle
          kicker="Faculty"
          title="Teachers who know every student"
          sub="Classroom teaching by experts. Meet the four teachers on the Faculty page."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f) => (
            <Reveal key={f.name}>
              <div className="rounded-2xl border border-line bg-mist p-5 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-extrabold text-white">
                  {f.name.replace("Er. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <h3 className="mt-3 font-bold text-navy">{f.name}</h3>
                <p className="text-sm font-semibold text-gold-dark">{f.subject}</p>
                <p className="text-sm text-muted">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/faculty" className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-bold text-white">
            Meet the faculty →
          </Link>
        </div>
      </section>

      {/* RESULTS PREVIEW — names only, photos live on /results */}
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionTitle
            kicker="Results"
            title="Our students, in their own words of hard work"
            sub="Four recent results from Ambition Classes, Purnea. Photos and details are on the Results page."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-line bg-white p-5 text-center">
                  <h3 className="font-bold text-navy">{r.name}</h3>
                  <p className="mt-1 font-extrabold text-gold-dark">{r.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/results" className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-bold text-white">
              See all results →
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES + OUTSTATION */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <SectionTitle
          kicker="Facilities"
          title="A campus built for studying — and staying"
          sub="Separate hostel for boys and girls, a quiet library, and spacious AC classrooms. Outstation students from Forbesganj, Araria and Katihar stay in our hostel."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { t: "Separate Hostel", d: "Boys' and girls' hostels, warden, caretakers and 24×7 security. Separate mess, clean rooms, hygienic food." },
            { t: "Library", d: "Reference books by renowned authors for every competitive subject, in a quiet, disciplined study hall." },
            { t: "Spacious Campus", d: "AC classrooms and modern infrastructure, with strict discipline and teachers who monitor every student." },
          ].map((f) => (
            <Reveal key={f.t}>
              <div className="h-full rounded-2xl border border-line p-5">
                <h3 className="text-lg font-bold text-navy">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/facilities" className="inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-bold text-white">
            See facilities with photos →
          </Link>
        </div>
      </section>

      {/* ADMISSION FORM — first on phone via order */}
      <section className="bg-navy py-12 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Book a free demo class</h2>
            <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
            <p className="mt-3 max-w-md leading-relaxed text-white/85">
              Fill the form and tap Send in WhatsApp — your enquiry reaches us only
              then. Or call us directly, 7:30 AM to 7:00 PM, all 7 days.
            </p>
            <p className="mt-4 text-lg font-bold">Admission open — new batch</p>
            <p className="text-white/80">Fee details are shared on enquiry. No fee for a demo class.</p>
            <a
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center rounded-full bg-[#157347] px-6 font-bold text-white"
            >
              Ask on WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-5 text-ink shadow-2xl sm:p-6">
              <LeadForm source="home" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <SectionTitle kicker="FAQ" title="Parents ask us" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { q: "What is the fee?", a: "Fee details are shared on enquiry — call or WhatsApp us. There is no fee for a demo class." },
            { q: "Is there a hostel?", a: "Yes — separate hostels for boys and girls, with a warden, caretakers and 24×7 security, and a separate mess." },
            { q: "Which classes do you teach?", a: "Class IX and X (Pre-Foundation), Class XI and XII (Foundation), XII pass (Nucleus), and XII / I.Sc (Target) — for IIT-JEE, NEET and +2 Boards." },
            { q: "How do I join?", a: "Book a free demo class from this page, visit the campus at Navratan Hata, NH-31, Ford Company Chowk, Purnea — and then take admission." },
          ].map((f) => (
            <Reveal key={f.q}>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 font-bold text-navy">
                  {f.q}
                  <span className="text-gold-dark text-xl" aria-hidden>+</span>
                </summary>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/faq" className="inline-flex min-h-12 items-center rounded-full border-2 border-navy px-6 font-bold text-navy">
            Read all FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
