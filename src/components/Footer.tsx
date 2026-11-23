import Link from "next/link";
import FooterYear from "./FooterYear";
import { ADDRESS, HOURS, MAPS_URL, PHONE_1, PHONE_2, WHATSAPP } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-navy-dark text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-extrabold">Ambition Classes, Purnea</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Ambition School of Science Pvt. Ltd. — IIT-JEE, NEET and +2 Boards
            coaching in Purnea since 2003.
          </p>
          <p className="mt-3 text-sm text-white/75">{ADDRESS}</p>
          <p className="mt-1 text-sm text-white/75">{HOURS}</p>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="underline" href={`tel:+91${PHONE_1}`}>
                Call {PHONE_1}
              </a>
            </li>
            <li>
              <a className="underline" href={`tel:+91${PHONE_2}`}>
                Call {PHONE_2}
              </a>
            </li>
            <li>
              <a className="underline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <a className="underline" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Get directions on Google Maps
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Quick links</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[
              ["/courses", "Courses"],
              ["/faculty", "Faculty"],
              ["/results", "Results"],
              ["/facilities", "Facilities"],
              ["/fees", "Fees"],
              ["/admission", "Admission"],
              ["/faq", "FAQ"],
              ["/blog", "Blog"],
              ["/reviews", "Reviews"],
              ["/privacy", "Privacy"],
              ["/terms", "Terms"],
              ["/refund", "Refund Policy"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link className="underline" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">
        © <FooterYear /> Ambition Classes, Purnea. Serving Purnea since 2003.
      </div>
    </footer>
  );
}
