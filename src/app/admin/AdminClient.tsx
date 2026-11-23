"use client";

import { useEffect, useState } from "react";
import { loadLeads, LEAD_KEY, type Lead } from "@/data";

/**
 * Staff admin — DEMO lead log only. Leads are stored in this device's
 * localStorage. This is NOT a CRM and NOT a server: a parent who submits
 * the form on their own phone does NOT appear here. Real CRM is Phase 2
 * (Google Sheet / server). Do not open this page on a shared computer.
 */
export default function AdminClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLeads(loadLeads());
    setLoaded(true);
  }, []);

  function update(i: number, patch: Partial<Lead>) {
    const next = leads.map((l, j) => (j === i ? { ...l, ...patch } : l));
    setLeads(next);
    localStorage.setItem(LEAD_KEY, JSON.stringify(next));
  }

  function remove(i: number) {
    if (!confirm("Delete this lead from this device?")) return;
    const next = leads.filter((_, j) => j !== i);
    setLeads(next);
    localStorage.setItem(LEAD_KEY, JSON.stringify(next));
  }

  function exportCsv() {
    const head = "Name,Phone,Class,Course,Parent/Guardian,Date,Status,FollowUp,Owner\n";
    const rows = leads
      .map((l) =>
        [l.name, l.phone, l.cls, l.course, l.guardian, l.date, l.status, (l as unknown as Record<string, string>).followUp || "", (l as unknown as Record<string, string>).owner || ""]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(","),
      )
      .join("\n");
    const blob = new Blob(["\uFEFF" + head + rows], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ambition-leads.csv";
    a.click();
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold text-navy">Staff Admin — Demo Lead Log</h1>
      <div className="mt-4 rounded-2xl border-2 border-amber-500 bg-amber-50 p-5 text-[15px] leading-relaxed">
        <strong>Read this first:</strong> This is a demo log on <strong>this device only</strong>.
        It is not a CRM and not a server. A parent who fills the form on their own
        phone will not appear here — their enquiry reaches the institute only when
        they tap Send in WhatsApp. Do not open this page on a shared or public
        computer. Real CRM with a Google Sheet is Phase 2.
      </div>

      <h2 className="mt-8 text-xl font-bold text-navy">How to update content</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-[15px] text-muted">
        <li>Edit the text in <code>src/data.ts</code> (phones, courses, faculty, results).</li>
        <li>Edit the matching page file under <code>src/app/</code> for the same change.</li>
        <li>Run <code>npm run build</code> — it must pass with 0 errors — then deploy.</li>
        <li>Phase 2 will replace this dual-edit step with one data file.</li>
      </ol>

      <h2 className="mt-8 text-xl font-bold text-navy">Lead pipeline</h2>
      <p className="mt-1 text-[15px] text-muted">
        New → Contacted → Demo Booked → Demo Attended → Admitted / Lost. Set a
        follow-up date and an owner for every lead.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={exportCsv} className="min-h-12 rounded-full bg-navy px-5 font-bold text-white">
          Download CSV
        </button>
        <button
          onClick={() => {
            if (confirm("Clear ALL leads on this device?")) {
              localStorage.removeItem(LEAD_KEY);
              setLeads([]);
            }
          }}
          className="min-h-12 rounded-full border-2 border-red-600 px-5 font-bold text-red-600"
        >
          Clear all leads
        </button>
      </div>

      {!loaded ? (
        <p className="mt-6 text-muted">Loading…</p>
      ) : leads.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-mist p-5 text-muted">
          No leads on this device yet. Leads submitted from this browser will appear here.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-mist">
              <tr>
                <th className="px-3 py-3">Name / Phone</th>
                <th className="px-3 py-3">Class · Course</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Follow-up</th>
                <th className="px-3 py-3">Owner</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="px-3 py-3">
                    <p className="font-bold text-navy">{l.name}</p>
                    <a className="text-navy underline" href={`tel:+91${l.phone}`}>{l.phone}</a>
                    <p className="text-xs text-muted">{new Date(l.date).toLocaleString("en-IN")}</p>
                    {l.guardian && <p className="text-xs text-muted">Guardian: {l.guardian}</p>}
                  </td>
                  <td className="px-3 py-3">{l.cls} · {l.course}</td>
                  <td className="px-3 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => update(i, { status: e.target.value })}
                      className="rounded-lg border border-line bg-white px-2 py-2"
                      aria-label={`Status for ${l.name}`}
                    >
                      {["New", "Contacted", "Demo Booked", "Demo Attended", "Admitted", "Lost"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="date"
                      value={(l as unknown as Record<string, string>).followUp || ""}
                      onChange={(e) => update(i, { followUp: e.target.value } as Partial<Lead>)}
                      className="rounded-lg border border-line bg-white px-2 py-2"
                      aria-label={`Follow-up date for ${l.name}`}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      value={(l as unknown as Record<string, string>).owner || ""}
                      onChange={(e) => update(i, { owner: e.target.value } as Partial<Lead>)}
                      placeholder="Owner"
                      className="w-24 rounded-lg border border-line bg-white px-2 py-2"
                      aria-label={`Owner for ${l.name}`}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/91${l.phone}?text=${encodeURIComponent(`Namaste ${l.name}, Ambition Classes Purnea se bol rahe hain. Aapki demo class ke baare me baat karni thi.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#157347] px-3 py-2 font-bold text-white"
                      >
                        WhatsApp
                      </a>
                      <button onClick={() => remove(i)} className="rounded-full border border-red-600 px-3 py-2 font-bold text-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
