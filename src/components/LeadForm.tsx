"use client";

import { useState, type FormEvent } from "react";
import { PHONE_1, saveLead } from "@/data";

const CLASSES = ["Class IX", "Class X", "Class XI", "Class XII", "XII Pass"];
const COURSES = [
  "Foundation Course",
  "Nucleus Course",
  "Target Course",
  "Pre-Foundation",
];

/**
 * Demo / enquiry form. There is no server in this build: on submit the
 * enquiry is saved to this device's demo log and a pre-filled WhatsApp
 * message opens. The enquiry reaches the institute ONLY when the visitor
 * taps Send in WhatsApp — the success copy says exactly that.
 */
export default function LeadForm({ source }: { source: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cls, setCls] = useState("");
  const [course, setCourse] = useState("");
  const [guardian, setGuardian] = useState("");
  const [consent, setConsent] = useState<"" | "parent" | "adult">("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [busy, setBusy] = useState(false);

  function cleanPhone(raw: string) {
    let p = raw.replace(/[^0-9]/g, "");
    if (p.length === 12 && p.startsWith("91")) p = p.slice(2);
    else if (p.length === 11 && p.startsWith("0")) p = p.slice(1);
    return p;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const p = cleanPhone(phone);
    if (name.trim().length < 2 || !/[A-Za-z]/.test(name)) {
      setError("Please enter the student's full name.");
      return;
    }
    if (!/^[6-9][0-9]{9}$/.test(p)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!cls || !course) {
      setError("Please select class and course.");
      return;
    }
    if (!consent) {
      setError("Please select who is filling this form.");
      return;
    }
    if (
      consent === "parent" &&
      (guardian.trim().length < 2 || !/[A-Za-z]/.test(guardian.trim()))
    ) {
      setError(
        "As the parent/guardian, please enter your name above — it is required for a student under 18.",
      );
      return;
    }
    setBusy(true);
    const msg =
      `Namaste, main ${name.trim()} hoon, Class ${cls}, Course ${course}. ` +
      `Mujhe Free Demo Class book karni hai. Phone: ${p}` +
      (guardian ? ` Parent/Guardian: ${guardian.trim()}.` : "");
    const url = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent(msg)}`;
    saveLead({
      name: name.trim(),
      phone: p,
      cls,
      course,
      guardian: guardian.trim(),
      date: new Date().toISOString(),
      status: "New",
    });
    setWaUrl(url);
    setDone(true);
    setBusy(false);
    const w = window.open(url, "_blank");
    if (!w) {
      // Popup blocked: the success panel below has a tap-to-open link.
      setError(
        "WhatsApp did not open automatically — please tap the button below.",
      );
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-mist p-5 sm:p-6">
        <h3 className="text-lg font-bold text-navy">Thank you, {name.trim()}!</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Your enquiry is saved on this device only. It reaches Ambition
          Classes <strong>only when you tap Send in WhatsApp</strong> — filling
          this form alone does not send it to the institute.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-[#157347] px-5 font-bold text-white transition hover:opacity-90"
        >
          Open WhatsApp and tap Send
        </a>
        <p className="mt-3 text-sm text-muted">
          Or call directly:{" "}
          <a className="font-bold text-navy underline" href={`tel:+91${PHONE_1}`}>
            97713 47243
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div>
        <label htmlFor={`name-${source}`} className="mb-1 block text-sm font-semibold text-navy">
          Student name
        </label>
        <input
          id={`name-${source}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student's full name"
          minLength={2}
          maxLength={60}
          autoComplete="name"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        />
      </div>
      <div>
        <label htmlFor={`phone-${source}`} className="mb-1 block text-sm font-semibold text-navy">
          Mobile number
        </label>
        <input
          id={`phone-${source}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit mobile number"
          type="tel"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={13}
          autoComplete="tel"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`cls-${source}`} className="mb-1 block text-sm font-semibold text-navy">
            Class
          </label>
          <select
            id={`cls-${source}`}
            value={cls}
            onChange={(e) => setCls(e.target.value)}
            className="w-full rounded-xl border border-line bg-white px-3 py-3 outline-none focus:border-navy"
          >
            <option value="">Select class</option>
            {CLASSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`course-${source}`} className="mb-1 block text-sm font-semibold text-navy">
            Course
          </label>
          <select
            id={`course-${source}`}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full rounded-xl border border-line bg-white px-3 py-3 outline-none focus:border-navy"
          >
            <option value="">Select course</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`guardian-${source}`} className="mb-1 block text-sm font-semibold text-navy">
          Parent / guardian name <span className="font-normal text-muted">(required if you selected parent/guardian above)</span>
        </label>
        <input
          id={`guardian-${source}`}
          value={guardian}
          onChange={(e) => setGuardian(e.target.value)}
          placeholder="Parent or guardian's name"
          maxLength={60}
          autoComplete="off"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        />
      </div>
      <fieldset>
        <legend className="mb-1 block text-sm font-semibold text-navy">
          Who is filling this form?
        </legend>
        <label className="flex items-start gap-2 text-sm leading-relaxed text-muted">
          <input
            type="radio"
            name={`consent-${source}`}
            value="parent"
            checked={consent === "parent"}
            onChange={() => setConsent("parent")}
            className="mt-1 h-5 w-5 shrink-0 accent-[#0b2a5b]"
          />
          I am the parent/guardian of the student. I agree the institute may
          call or message me about this enquiry.
        </label>
        <label className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted">
          <input
            type="radio"
            name={`consent-${source}`}
            value="adult"
            checked={consent === "adult"}
            onChange={() => setConsent("adult")}
            className="mt-1 h-5 w-5 shrink-0 accent-[#0b2a5b]"
          />
          I am the student and I am 18 years or older. I agree the institute
          may call or message me about this enquiry.
        </label>
      </fieldset>
      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-gold py-3.5 font-bold text-navy shadow transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
      >
        {busy ? "Please wait…" : "Book a Free Demo Class"}
      </button>
      <p className="text-center text-xs text-muted">
        No fee is charged for a demo class. Fee details are shared on enquiry.
      </p>
    </form>
  );
}
