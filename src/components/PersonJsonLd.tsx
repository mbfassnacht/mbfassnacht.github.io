import { avatarPath, person, siteUrl, workExperience } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.username,
  url: `${siteUrl}/`,
  image: `${siteUrl}${avatarPath}`,
  email: `mailto:${person.email}`,
  jobTitle: "Engineering Manager",
  description: `Engineering Manager and Staff Software Engineer with ${workExperience} years of experience building web, mobile and backend products in TypeScript, including production AI (LLM agents and MCP servers).`,
  worksFor: {
    "@type": "Organization",
    name: "Taxfix",
    url: "https://taxfix.de",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Heilbronn",
    addressCountry: "DE",
  },
  nationality: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Uruguay" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Católica del Uruguay",
  },
  knowsLanguage: ["es", "en", "de"],
  knowsAbout: [
    "Engineering Management",
    "Technical Leadership",
    "Software Architecture",
    "Event-driven Architecture",
    "Microservices",
    "Domain-Driven Design",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Go",
    "React",
    "React Native",
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "LLM Agents",
    "Model Context Protocol (MCP)",
    "AI-assisted Software Development",
    "Fintech",
  ],
  sameAs: [person.linkedin, person.github, person.npm],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are static strings from this repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
