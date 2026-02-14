require("../../../styles/components/Hero/hero.scss");

import React, { useRef, useEffect } from "react";
import { TweenMax, Power2 } from "gsap";
import Arrow from "../Arrow/arrow.jsx";

var model = require("./hero-model");

function Hero() {
  const nameRef = useRef(null);
  const jobRef = useRef(null);

  useEffect(function () {
    TweenMax.fromTo(
      nameRef.current,
      0.4,
      { autoAlpha: 0, y: 50 },
      { delay: 0.4, autoAlpha: 1, y: 0, ease: Power2.easeOut },
    );
    TweenMax.fromTo(
      jobRef.current,
      0.4,
      { autoAlpha: 0, y: 50 },
      { delay: 0.6, autoAlpha: 1, y: 0, ease: Power2.easeOut },
    );
  }, []);

  return (
    <div id="hero">
      <div className="background-image"></div>
      <div className="container">
        <h2 className="title-text name" ref={nameRef}>
          {model.name}
        </h2>
        <h3 className="title-text job" ref={jobRef}>
          {model.job}
        </h3>
      </div>
      <Arrow></Arrow>
    </div>
  );
}

export default Hero;
