import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
  description: "Terms of use for Ambition Classes, Purnea: details are given in good faith, admission is completed at the institute, results shown are published results.",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-extrabold text-navy">Terms of Use</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
          <p>This website belongs to Ambition Classes, Purnea (Ambition School of Science Pvt. Ltd.). The information on this website — courses, faculty, results, facilities and fees — is given in good faith from the institute&apos;s own records. Course details, batches and fees may change; the institute will confirm the current details when you enquire.</p>
          <p>Results shown on this website are the institute&apos;s published results only.</p>
          <p>Photos of teachers and students on this website are published with the institute&apos;s records. If you are shown in a photo and want it removed, contact the institute.</p>
          <p>Demo class enquiries made through this website are answered by the institute by phone or WhatsApp. Filling a form does not by itself complete an admission — admission is completed at the institute.</p>
        </div>
      </Reveal>
    </div>
  );
}
