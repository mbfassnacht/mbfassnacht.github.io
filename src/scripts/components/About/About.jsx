require("../../../styles/components/About/about.scss");

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import TweenMax from "gsap";
import Close from "../Close/close.jsx";

var model = require("./about-model");

const About = forwardRef(function About(props, ref) {
  const containerRef = useRef(null);
  const closeRef = useRef(null);

  function hide() {
    TweenMax.to(containerRef.current, 0.4, { autoAlpha: 0, zIndex: -100 });
    TweenMax.set(document.body, { overflow: "auto" });
    closeRef.current.animateOut();
  }

  function show() {
    TweenMax.to(containerRef.current, 0.4, { autoAlpha: 1, zIndex: 10000 });
    TweenMax.set(document.body, { overflow: "hidden" });
    closeRef.current.animateIn();
  }

  useImperativeHandle(ref, function () {
    return { show: show, hide: hide };
  });

  return (
    <div className="about" ref={containerRef}>
      <div className="close-icon">
        <Close ref={closeRef} onClicked={hide}></Close>
      </div>
      <div className="scroll-container">
        <div className="title">{model.title}</div>
        <div className="description">
          {model.description.map(function (text, i) {
            return <p key={i}>{text}</p>;
          })}
        </div>
        <div className="phrase-container">
          <div className="phrase">"{model.phrase}"</div>
          <div className="author">{model.author}</div>
        </div>
      </div>
    </div>
  );
});

export default About;
