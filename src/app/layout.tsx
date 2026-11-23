import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ambitionclassespurnea.in"),
  alternates: { canonical: "/" },
  title: {
    default: "Ambition Classes, Purnea — IIT-JEE | NEET | +2 Boards Coaching Since 2003",
    template: "%s | Ambition Classes, Purnea",
  },
  description:
    "Ambition Classes, Purnea — IIT-JEE, NEET and +2 Boards coaching since 2003. Separate hostel for boys and girls, library, AC campus. Book a free demo class on WhatsApp.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ambition Classes, Purnea",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Ambition Classes, Purnea — IIT-JEE, NEET and +2 Boards coaching since 2003" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambition Classes, Purnea — IIT-JEE | NEET | +2 Boards Coaching Since 2003",
    description:
      "Ambition Classes, Purnea — IIT-JEE, NEET and +2 Boards coaching since 2003. Separate hostel for boys and girls, library, AC campus. Book a free demo class on WhatsApp.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://ambitionclassespurnea.in/#org",
              name: "Ambition Classes, Purnea",
              alternateName: "Ambition School of Science Pvt. Ltd.",
              url: "https://ambitionclassespurnea.in/",
              foundingDate: "2003-07-20",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Navratan Hata, NH-31, Ford Company Chowk",
                addressLocality: "Purnea",
                addressRegion: "Bihar",
                postalCode: "854301",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 25.777863, longitude: 87.480034 },
              openingHours: "Mo-Su 07:30-19:00",
              contactPoint: [
                { "@type": "ContactPoint", telephone: "+91-9771347243", contactType: "admissions", areaServed: "IN-BR", availableLanguage: ["en", "hi"] },
                { "@type": "ContactPoint", telephone: "+91-9031251134", contactType: "admissions", areaServed: "IN-BR", availableLanguage: ["en", "hi"] },
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "3.8", bestRating: "5", worstRating: "1" },
              areaServed: ["Purnea"],
            }),
          }}
        />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1 !important;transform:none !important;}`}</style>
          <p style={{ background: "#f5b301", color: "#0b2a5b", padding: "12px 16px", textAlign: "center", fontWeight: 700 }}>
            JavaScript is off, so forms on this site will not work. Please call us directly: 97713 47243 or 90312 51134.
          </p>
        </noscript>
        <Header />
        <main id="main" className="flex-1 pb-[72px] md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
