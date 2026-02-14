require("normalize.css/normalize.css");
require("../../styles/App.scss");

import React, { useEffect } from "react";
import Hero from "../components/Hero/hero.jsx";
import DescriptionCanvas from "../components/DescriptionCanvas/descriptionCanvas.jsx";
import ProjectsPreview from "../components/ProjectsPreview/projectsPreview.jsx";
import AboutPreview from "../components/AboutPreview/aboutPreview.jsx";
import Contact from "../components/Contact/contact.jsx";
import TechStack from "../components/TechStack/techStack.jsx";
import ScrollManager from "scroll-manager";

function LandingPage() {
  useEffect(function () {
    var scroller = new ScrollManager();
    scroller.scrollTop({
      element: document.body,
      duration: 0.4,
      ease: "easeOutExpo",
    });
  }, []);

  return (
    <div className="app container-fluid" id="landing">
      <Hero></Hero>
      <DescriptionCanvas></DescriptionCanvas>
      <TechStack></TechStack>
      <ProjectsPreview></ProjectsPreview>
      <AboutPreview></AboutPreview>
      <Contact></Contact>
    </div>
  );
}

export default LandingPage;
