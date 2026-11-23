import type { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Staff Admin — Demo Lead Log | Ambition Classes, Purnea",
  robots: { index: false, follow: false },
};

export default function Admin() {
  return <AdminClient />;
}
