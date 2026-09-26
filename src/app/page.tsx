import Hero from "@/components/Hero";
import DescriptionCanvas from "@/components/DescriptionCanvas";
import TechStack from "@/components/TechStack";
import ProjectsPreview from "@/components/ProjectsPreview";
import AboutPreview from "@/components/AboutPreview";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import PersonJsonLd from "@/components/PersonJsonLd";

export default function HomePage() {
  return (
    <main className="app container-fluid" id="landing">
      <PersonJsonLd />
      <ScrollToTop />
      <Hero />
      <DescriptionCanvas />
      <TechStack />
      <ProjectsPreview />
      <AboutPreview />
      <Contact />
    </main>
  );
}
