import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { SectionTitle } from "@/components/Shared";
import { ADDRESS, HOURS, MAPS_URL, PHONE_1, PHONE_2, WA_GENERAL, waLink } from "@/data";

export const metadata: Metadata = {
  title: "Contact Us | Ambition Classes, Purnea",
  description:
    "Contact Ambition Classes, Purnea — Navratan Hata, NH-31, Ford Company Chowk. Call 9771347243 or 9031251134, 7:30 AM to 7:00 PM.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Contact</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Visit Us or Call Us</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <div className="rounded-2xl border border-line p-5">
              <h2 className="font-bold text-navy">Address</h2>
              <p className="mt-1 text-[15px] text-muted">{ADDRESS}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center rounded-full bg-navy px-5 font-bold text-white">
                Get directions →
              </a>
            </div>
            <div className="rounded-2xl border border-line p-5">
              <h2 className="font-bold text-navy">Phone</h2>
              <p className="mt-1 text-[15px] text-muted">
                <a className="font-bold text-navy underline" href={`tel:+91${PHONE_1}`}>{PHONE_1}</a>
                {" · "}
                <a className="font-bold text-navy underline" href={`tel:+91${PHONE_2}`}>{PHONE_2}</a>
              </p>
              <p className="mt-1 text-[15px] text-muted">{HOURS}</p>
              <a href={waLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center rounded-full bg-[#157347] px-5 font-bold text-white">
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <SectionTitle title="Send an enquiry" sub="Fill the form — a pre-filled WhatsApp message will open. Tap Send to reach us." />
            <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-line sm:p-6">
              <LeadForm source="contact" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
