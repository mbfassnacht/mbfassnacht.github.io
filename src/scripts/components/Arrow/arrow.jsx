require("../../../styles/components/Arrow/arrow.scss");
import React, { useRef, useEffect } from "react";
import model from "./arrow-model";
import { TweenMax } from "gsap";
import ScrollManager from "scroll-manager";

function Arrow() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(function () {
    scrollerRef.current = new ScrollManager();
    TweenMax.to(containerRef.current, 0.4, { delay: 0.8, autoAlpha: 1 });
  }, []);

  function handleMouseDown() {
    scrollerRef.current.scrollTo({
      element: document.body,
      to: window.innerHeight,
      duration: 0.8,
      ease: "easeOutCubic",
    });
  }

  function handleMouseEnter() {
    TweenMax.to(imageRef.current, 0.4, { autoAlpha: 0.5 });
  }

  function handleMouseLeave() {
    TweenMax.to(imageRef.current, 0.4, { autoAlpha: 1 });
  }

  return (
    <div
      id="arrow"
      className="white circle-button"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseDown}
    >
      <img className="image-arrow" ref={imageRef} src={model.arrow} />
    </div>
  );
}

export default Arrow;
