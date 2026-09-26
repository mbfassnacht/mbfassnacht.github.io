"use client";

import "@/styles/components/Hero/hero.scss";

import { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";
import Arrow from "./Arrow";
import { hero as model } from "@/content/hero";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const jobRef = useRef<HTMLParagraphElement>(null);

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
    <header id="hero">
      <div className="background-image"></div>
      <div className="container">
        <h1 className="title-text name" ref={nameRef}>
          {model.name}
        </h1>
        <p className="title-text job" ref={jobRef}>
          {model.job}
        </p>
      </div>
      <Arrow />
    </header>
  );
}
