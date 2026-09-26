import "@/styles/pages/projectsPage.scss";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main id="projects" className="app container-fluid">
      <h1 className="title">PAGE NOT FOUND</h1>
      <p style={{ textAlign: "center" }}>
        <Link href="/">Back to the homepage</Link>
      </p>
    </main>
  );
}
