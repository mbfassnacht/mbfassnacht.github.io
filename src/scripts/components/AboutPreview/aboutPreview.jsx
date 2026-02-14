require("../../../styles/components/AboutPreview/aboutPreview.scss");

import React, { useRef } from "react";
import TweenMax from "gsap";
import About from "../About/About.jsx";
var model = require("./aboutPreview-model");

function AboutPreview() {
  const dividerRef = useRef(null);
  const aboutRef = useRef(null);

  function handleMouseEnter() {
    TweenMax.to(dividerRef.current, 0.4, { width: "60%" });
  }

  function handleMouseLeave() {
    TweenMax.to(dividerRef.current, 0.4, { width: "10%" });
  }

  function handleMouseDown() {
    aboutRef.current.show();
  }

  return (
    <div className="about-preview">
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        <span className="title">{model.title}</span>
        <div className="divider" ref={dividerRef}></div>
      </div>
      <About ref={aboutRef}></About>
    </div>
  );
}

export default AboutPreview;
