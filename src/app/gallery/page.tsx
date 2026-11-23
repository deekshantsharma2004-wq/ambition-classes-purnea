import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GalleryGrid, { type GalleryPhoto } from "@/components/GalleryGrid";

/** Gallery: exactly 6 photos, as the user specified. No director, faculty or students here. */
const PHOTOS: GalleryPhoto[] = [
  { src: "/images/campus.jpg", alt: "Campus of Ambition Classes, Purnea", caption: "Campus" },
  { src: "/images/p1.jpg", alt: "Students in a classroom at Ambition Classes, Purnea", caption: "Classroom" },
  { src: "/images/hostel1.jpg", alt: "Hostel at Ambition Classes, Purnea", caption: "Hostel" },
  { src: "/images/hostel2.jpg", alt: "Hostel at Ambition Classes, Purnea, second view", caption: "Hostel" },
  { src: "/images/library.jpg", alt: "Library at Ambition Classes, Purnea", caption: "Library" },
  { src: "/images/admission.jpg", alt: "Admission open at Ambition Classes, Purnea", caption: "Admission" },
];

export const metadata: Metadata = {
  title: "Campus Photo Gallery",
  alternates: { canonical: "/gallery" },
  description: "Photos of the campus, classroom, hostel and library at Ambition Classes, Purnea — see where students study, stay and read in Purnea, Bihar.",
};

export default function Gallery() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-gold-dark">Gallery</p>
        <h1 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">Our Campus in Photos</h1>
        <span className="mt-3 block h-1 w-14 rounded bg-gold" aria-hidden />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
          Tap any photo to see it full-screen. All photos are from the institute
          itself — campus, classroom, hostel and library.
        </p>
      </Reveal>
      <div className="mt-8">
        <GalleryGrid photos={PHOTOS} />
      </div>
    </div>
  );
}
