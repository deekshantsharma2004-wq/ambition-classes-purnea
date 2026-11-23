import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: { canonical: "/faq" },
  description:
    "Frequently asked questions about Ambition Classes, Purnea — fees, hostel, courses, admission, demo class.",
};

const FAQS = [
  { q: "What is the fee?", a: "Fee details are shared on enquiry — call 9771347243 or message us on WhatsApp. There is no fee for a demo class." },
  { q: "Is there a hostel?", a: "Yes — separate hostels for boys and girls, with a warden, caretakers and 24×7 security, and a separate mess. Hostel fee is shared on enquiry." },
  { q: "Which classes and courses do you teach?", a: "Class IX and X (Pre-Foundation, NTSE/Olympiad), Class XI and XII (Foundation), XII pass (Nucleus), and XII / I.Sc (Target) — for IIT-JEE, NEET and +2 Boards." },
  { q: "How do I join?", a: "Book a free demo class from this website, visit the campus at Navratan Hata, NH-31, Ford Company Chowk, Purnea — and then take admission." },
  { q: "Do you give a refund if I leave mid-course?", a: "Yes — if you leave mid-course, the fee for the remaining period is refunded pro-rata within 10 days. Hostel and mess fees are also refunded pro-rata. The fee is never increased mid-course. See the Refund Policy page." },
  { q: "What are the batch timings?", a: "Batch timings are shared on enquiry — morning and evening batches run. Call or WhatsApp us for the current batch." },
  { q: "Do you promise a rank or selection?", a: "No. We promise honest teaching, regular tests and doubt-clearing. A rank or selection is the result of the student's hard work." },
  { q: "Where is the institute?", a: "Navratan Hata, NH-31, Ford Company Chowk, Purnea, Bihar 854301. Open 7:30 AM to 7:00 PM, all 7 days." },
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">FAQ</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Frequently Asked Questions</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {FAQS.map((f) => (
          <Reveal key={f.q}>
            <details className="group h-full rounded-2xl border border-line bg-white p-5 open:shadow-md">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 font-bold text-navy">
                {f.q}
                <span className="text-xl text-gold-dark" aria-hidden>+</span>
              </summary>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
