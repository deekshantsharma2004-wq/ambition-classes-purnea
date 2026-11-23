import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Purnea me coaching kaise chunein — parents ke liye 10 sawal",
  description:
    "Admission se pehle har coaching se ye 10 sawal poochhein — fee, teacher, test, hostel aur refund ke baare me.",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Blog · 24 November 2026</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          Purnea me coaching kaise chunein — parents ke liye 10 sawal
        </h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
      </Reveal>
      <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-muted">
        <Reveal><p>Purnea me IIT-JEE aur NEET ki coaching dene wale kai institute hain. Poster aur bade-bade daave sabke ek jaise lagte hain. Admission lene se pehle, har institute se ye 10 sawal poochhein — aur jawab likh kar lein.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">1. Teacher kaun padhayega — naam se poochhein</h2><p>&ldquo;Best faculty&rdquo; ek daava hai, naam ek sach hai. Har subject ke teacher ka naam, subject aur experience poochhein. Agar institute naam nahi bata raha, to ye ek warning sign hai.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">2. Fee poori kitni hai — likh kar lein</h2><p>Kul fee, instalment, aur kya-kya usme shamil hai — ye sab likh kar lein. &ldquo;Baad me bata denge&rdquo; par admission mat lein. Demo class ki koi fee nahi honi chahiye.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">3. Test kitne hote hain — aur result kaise milta hai</h2><p>Hafte me kitne test hote hain? Answer key aur detailed solution milta hai ya nahi? Parents ko test ka result kaise bataya jata hai?</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">4. Doubt-clearing ka system kya hai</h2><p>Class ke baad doubt poochhne ka alag time hai ya nahi? Teacher har student ko jaanta hai ya sirf toppers ko?</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">5. Result — naam, saal aur course ke saath</h2><p>Topper ka naam, kis saal ka result hai, aur usne kaunsa course kiya tha — ye teen cheezein bina proof ke koi result nahi hai. Sirf photo wala poster kaafi nahi hai.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">6. Hostel hai to kaisa hai</h2><p>Ladke aur ladki ka hostel alag hai ya nahi? Warden hai ya nahi? Security 24×7 hai ya nahi? Mess alag hai ya nahi? Khana kaisa hai? Hostel dekh kar hi faisla karein.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">7. Batch size aur timing</h2><p>Ek batch me kitne students hote hain? Batch subah hai ya shaam? School ke time se takraata to nahi hai?</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">8. Refund policy likh kar lein</h2><p>Agar beech me chhodna pade to bachi hui fee wapas milti hai ya nahi, kitne din me? Ye policy website ya receipt par likhi honi chahiye.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">9. Demo class zaroor lein</h2><p>Bina demo class ke admission mat lein. Demo me dekhein — teacher samjha raha hai ya sirf bol raha hai, class me discipline hai ya nahi.</p></Reveal>
        <Reveal><h2 className="text-xl font-bold text-navy">10. Kya institute rank ka vaada kar raha hai?</h2><p>Agar koi institute selection ya rank ka vaada kar raha hai, to savdhaan rahein. Koi bhi imaandaar institute aisa vaada nahi karta — mehnat student ki hoti hai, teaching institute ki.</p></Reveal>
        <Reveal><p>Ambition Classes, Purnea me in 10 sawalon ke jawab aapko is website par milenge — teacher ke naam Faculty page par, result Results page par, hostel aur library Facilities page par, aur refund policy Refund page par. Jo sawal bacha ho, use WhatsApp par poochhein.</p></Reveal>
      </div>
      <Reveal className="mt-8">
        <div className="rounded-2xl bg-navy p-6 text-white">
          <p className="font-bold">Free demo class book karein</p>
          <p className="mt-1 text-white/85">Pehle class dekhein, phir faisla karein.</p>
          <Link href="/admission" className="mt-4 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-bold text-navy">
            Book a Free Demo →
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
