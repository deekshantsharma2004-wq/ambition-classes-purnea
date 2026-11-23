export const PHONE_1 = "9771347243";
export const PHONE_2 = "9031251134";
export const PHONE_1_DISPLAY = "97713 47243";
export const PHONE_2_DISPLAY = "90312 51134";
/** Every WhatsApp link must carry a pre-filled message — never a blank chat. */
export function waLink(message: string) {
  return `https://wa.me/919771347243?text=${encodeURIComponent(message)}`;
}
export const WA_GENERAL =
  "Namaste, mujhe Ambition Classes Purnea me admission ke baare me jaankari chahiye.";
export function waCourse(course: string) {
  return waLink(
    `Namaste, mujhe ${course} ke baare me jaankari chahiye — fee, batch timing aur demo class.`,
  );
}
export const WHATSAPP = waLink(WA_GENERAL);
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=25.777863%2C87.480034";
export const ADDRESS =
  "Navratan Hata, NH-31, Ford Company Chowk, Purnea, Bihar 854301";
export const HOURS = "7:30 AM – 7:00 PM, all 7 days";
export const HINDI_LINE =
  "सर्वश्रेष्ठ शिक्षा व्यवस्था एवं अनुशासित वातावरण के संकल्प के साथ बिहार में 23 वर्षों से";

export const COURSES = [
  {
    slug: "foundation",
    name: "Foundation Course",
    tag: "Class X / XI / XII",
    exam: "IIT-JEE / NEET",
    href: "/courses/foundation",
    promise:
      "Strong base in Physics, Chemistry, Maths and Biology — so Class XI and XII never feel rushed.",
    who: "Students of Class X, XI and XII",
    duration: "2-year programme (Class XI–XII)",
  },
  {
    slug: "nucleus",
    name: "Nucleus Course",
    tag: "XII Pass",
    exam: "IIT-JEE / NEET",
    href: "/courses",
    promise:
      "A focused dropper year: full syllabus revision, daily practice and weekly tests.",
    who: "Students who have passed Class XII",
    duration: "1-year programme",
  },
  {
    slug: "target",
    name: "Target Course",
    tag: "XII / I.Sc",
    exam: "Medical / IIT",
    href: "/courses",
    promise:
      "Board exam and entrance exam preparation together — no separate coaching needed.",
    who: "Class XII / I.Sc students",
    duration: "1-year programme",
  },
  {
    slug: "pre-foundation",
    name: "Pre-Foundation",
    tag: "Class IX & X",
    exam: "NTSE / Olympiad",
    href: "/courses/foundation",
    promise:
      "Early start in science and maths, with NTSE and Olympiad practice built in.",
    who: "Students of Class IX and X",
    duration: "2-year programme (Class IX–X)",
  },
];

export const FACULTY = [
  {
    name: "Er. H. Lal",
    subject: "Physics",
    detail: "Physics, Patna",
    img: "/images/teachers/hlal.jpg",
  },
  {
    name: "Er. Vijay Kumar",
    subject: "Physics",
    detail: "Physics, Patna",
    img: "/images/teachers/vijay.jpg",
  },
  {
    name: "Er. P. Santosh",
    subject: "Physics",
    detail: "Physics, Patna",
    img: "/images/teachers/santosh.jpg",
  },
  {
    name: "Sandeep Jha",
    subject: "Mathematics",
    detail: "Ex-Faculty, Guwahati",
    img: "/images/teachers/sandeep.jpg",
  },
];

export const RESULTS = [
  {
    name: "Pooja Lavali",
    result: "NEET",
    img: "/images/students/puja.jpg",
  },
  {
    name: "Romi Sah",
    result: "Integrated M.Sc. Chemistry, SVNIT Surat (Batch of 2026)",
    img: "/images/students/romi.jpg",
  },
  {
    name: "Rajeev Ranjan",
    result: "IIT – Roorkee",
    img: "/images/students/rajeev.jpg",
  },
  {
    name: "Pallavi Kumari",
    result: "95.00% in Boards",
    img: "/images/students/pallavikumari.jpg",
  },
];

export type Lead = {
  name: string;
  phone: string;
  cls: string;
  course: string;
  guardian: string;
  date: string;
  status: string;
};

export const LEAD_KEY = "ambition-leads-v1";

export function loadLeads(): Lead[] {
  try {
    return JSON.parse(localStorage.getItem(LEAD_KEY) || "[]") as Lead[];
  } catch {
    return [];
  }
}

export function saveLead(lead: Lead) {
  const leads = loadLeads();
  const thirtyMinAgo = Date.now() - 30 * 60 * 1000;
  const dup = leads.find(
    (l) => l.phone === lead.phone && new Date(l.date).getTime() > thirtyMinAgo,
  );
  if (dup) return false;
  leads.unshift(lead);
  localStorage.setItem(LEAD_KEY, JSON.stringify(leads.slice(0, 200)));
  return true;
}
