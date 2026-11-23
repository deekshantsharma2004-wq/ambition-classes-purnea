"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryPhoto = { src: string; alt: string; caption: string };

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setActive((a) => (a === null ? a : (a - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            className="group overflow-hidden rounded-2xl border border-line bg-mist text-left transition hover:-translate-y-1 hover:shadow-lg"
            aria-label={`View photo: ${p.caption}`}
          >
            <span className="relative block aspect-[4/3] w-full overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition group-hover:scale-105"
              />
            </span>
            <span className="block px-3 py-2 text-sm font-semibold text-navy">{p.caption}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].caption}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-h-[80vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          </div>
          <p className="mt-3 text-center font-semibold text-white">{photos[active].caption}</p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => setActive((active - 1 + photos.length) % photos.length)}
              className="rounded-full bg-white px-5 py-3 font-bold text-navy"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="rounded-full bg-gold px-5 py-3 font-bold text-navy"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => setActive((active + 1) % photos.length)}
              className="rounded-full bg-white px-5 py-3 font-bold text-navy"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
