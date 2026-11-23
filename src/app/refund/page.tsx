import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Refund Policy",
  alternates: { canonical: "/refund" },
  description:
    "Refund policy of Ambition Classes, Purnea — mid-course exit is refunded pro-rata within 10 days. Fee is never increased mid-course.",
};

export default function Refund() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-extrabold text-navy">Refund Policy</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
          <p><strong className="text-navy">Mid-course exit:</strong> If a student has paid the full fee and leaves the course mid-way, the fee for the remaining period is refunded on a pro-rata basis within 10 days of the request.</p>
          <p><strong className="text-navy">Hostel and mess:</strong> Hostel and mess fees are also refunded pro-rata for the remaining period, within 10 days.</p>
          <p><strong className="text-navy">No mid-course fee increase:</strong> Once a student has taken admission, the fee for that course is not increased during the course.</p>
          <p><strong className="text-navy">How to ask for a refund:</strong> Write to the institute office at Navratan Hata, NH-31, Ford Company Chowk, Purnea, or call 9771347243. The refund is made to the same person who paid the fee.</p>
          <p>These rules follow the Ministry of Education&apos;s Guidelines for Regulation of Coaching Centres (16 January 2024). If any part of this policy conflicts with the law in force, the law applies.</p>
        </div>
      </Reveal>
    </div>
  );
}
