import "@/styles/pages/projectsPage.scss";

import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { ogImage, person } from "@/content/site";

const title = `Projects | ${person.name}`;
const description = `Selected projects by ${person.name}: Taxfix, Audi, Google, Facebook, NFL, Ford and more – from fintech products and AI features to award-winning interactive web experiences.`;

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects/" },
  // Page-level openGraph/twitter replace the layout's, so repeat the shared fields.
  openGraph: {
    type: "website",
    url: "/projects/",
    siteName: person.name,
    locale: "en_US",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function ProjectsPage() {
  return (
    <main id="projects" className="app container-fluid">
      <h1 className="title">PROJECTS</h1>
      <ProjectsGrid />
    </main>
  );
}
