import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16 text-center sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Page not found</h1>
      <p className="mt-3 text-muted">
        This page does not exist on the Ambition Classes, Purnea website.
      </p>
      <Link href="/" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-navy px-6 font-bold text-white">
        Go to Home →
      </Link>
    </div>
  );
}
