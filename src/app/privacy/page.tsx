import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Ambition Classes, Purnea",
  description: "How Ambition Classes, Purnea handles enquiry information.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-extrabold text-navy">Privacy Policy</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
          <p>When you fill an enquiry form on this website, you share the student&apos;s name, mobile number, class and course. We use this information only to respond to your enquiry — to call you or message you about admission, demo class, fee and batches.</p>
          <p><strong className="text-navy">Children&apos;s information:</strong> Most of our students are under 18. An enquiry for a student under 18 must be made by a parent or guardian, or with a parent or guardian&apos;s consent. We use under-18 enquiry information only to respond to that enquiry. We do not track children, we do not show targeted advertising to children, and we do not sell any personal information.</p>
          <p><strong className="text-navy">Cookies and device storage:</strong> This website does not use tracking cookies, advertising pixels or analytics. The demo lead log on the staff admin page is stored only on that device (localStorage) — it is not sent to any server by this website. Your enquiry reaches the institute only when you tap Send in WhatsApp.</p>
          <p><strong className="text-navy">WhatsApp:</strong> If you tap a WhatsApp button, your message opens in WhatsApp, which is a separate service with its own privacy policy.</p>
          <p><strong className="text-navy">Contact:</strong> To ask us to delete your enquiry information, call 9771347243 or visit the institute at Navratan Hata, NH-31, Ford Company Chowk, Purnea.</p>
        </div>
      </Reveal>
    </div>
  );
}
