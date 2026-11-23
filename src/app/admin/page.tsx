import type { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Staff Admin — Demo Lead Log",
  alternates: { canonical: "/admin" },
  description: "Staff admin page for Ambition Classes, Purnea — a device-local demo lead log. Not a CRM, not sent to any server, and not indexed by search engines.",
  robots: { index: false, follow: false },
};

export default function Admin() {
  return <AdminClient />;
}
