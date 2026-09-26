"use client";

import "@/styles/components/Arrow/arrow.scss";

import { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import ScrollManager from "scroll-manager";
import { arrow as model } from "@/content/arrow";

export default function Arrow() {
  const containerRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollerRef = useRef<ScrollManager | null>(null);

  useEffect(function () {
    scrollerRef.current = new ScrollManager();
    TweenMax.to(containerRef.current, 0.4, { delay: 0.8, autoAlpha: 1 });
  }, []);

  function handleClick() {
    scrollerRef.current?.scrollTo({
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
    <button
      type="button"
      id="arrow"
      className="white circle-button"
      aria-label="Scroll down"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img className="image-arrow" ref={imageRef} src={model.arrow} alt="" />
    </button>
  );
}
