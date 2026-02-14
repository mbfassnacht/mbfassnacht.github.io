require("../../../styles/components/ProjectsPreview/projectsPreview.scss");

import React, { useRef } from "react";
import TweenMax from "gsap";
import { Link } from "react-router-dom";

var model = require("./projectsPreview-model");

function ProjectsPreview() {
  const dividerRef = useRef(null);

  function handleMouseEnter() {
    TweenMax.to(dividerRef.current, 0.4, { width: "60%" });
  }

  function handleMouseLeave() {
    TweenMax.to(dividerRef.current, 0.4, { width: "10%" });
  }

  return (
    <div className="projects-preview">
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="projects" className="title">
          {model.title}
        </Link>
        <div className="divider" ref={dividerRef}></div>
      </div>
    </div>
  );
}

export default ProjectsPreview;
