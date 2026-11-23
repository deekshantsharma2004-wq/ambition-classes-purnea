"use client";

import { useEffect, useState } from "react";

/**
 * Current year, read in the browser after mount so the footer never goes
 * stale on 1 January. Next.js 16 blocks `new Date()` during prerendering,
 * so the read lives in useEffect; the initial value is only a first-paint
 * fallback and is corrected immediately on mount.
 */
export default function FooterYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span suppressHydrationWarning>{year}</span>;
}
