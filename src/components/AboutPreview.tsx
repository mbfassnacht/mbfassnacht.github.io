"use client";

import "@/styles/components/AboutPreview/aboutPreview.scss";

import { useRef } from "react";
import { TweenMax } from "gsap";
import About, { type AboutHandle } from "./About";
import { aboutPreview as model } from "@/content/aboutPreview";

export default function AboutPreview() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<AboutHandle>(null);

  function handleMouseEnter() {
    TweenMax.to(dividerRef.current, 0.4, { width: "60%" });
  }

  function handleMouseLeave() {
    TweenMax.to(dividerRef.current, 0.4, { width: "10%" });
  }

  function handleMouseDown() {
    aboutRef.current?.show();
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
      <About ref={aboutRef} />
    </div>
  );
}
