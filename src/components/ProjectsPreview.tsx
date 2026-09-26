"use client";

import "@/styles/components/ProjectsPreview/projectsPreview.scss";

import { useRef } from "react";
import Link from "next/link";
import { TweenMax } from "gsap";
import { projectsPreview as model } from "@/content/projectsPreview";

export default function ProjectsPreview() {
  const dividerRef = useRef<HTMLDivElement>(null);

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
        <Link href="/projects/" className="title">
          {model.title}
        </Link>
        <div className="divider" ref={dividerRef}></div>
      </div>
    </div>
  );
}
