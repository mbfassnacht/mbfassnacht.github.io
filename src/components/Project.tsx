"use client";

import "@/styles/components/Project/project.scss";

import { useRef } from "react";
import { TweenMax, Expo } from "gsap";
import type { Project as ProjectData } from "@/content/projects";

export default function Project(props: ProjectData) {
  const hoverContainerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const overlayShown = useRef(false);
  const isAnimating = useRef(false);
  const requestedAnimateOut = useRef(false);

  function getAnimateArray() {
    return [
      nameRef.current,
      clientRef.current,
      descriptionRef.current,
      skillsRef.current,
    ];
  }

  function handleClick() {
    if (overlayShown.current) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }
  }

  function handleMouseEnter() {
    if (!isAnimating.current) {
      isAnimating.current = true;

      TweenMax.to(hoverContainerRef.current, 0.4, {
        autoAlpha: 1,
        ease: Expo.easeOut,
      });
      TweenMax.fromTo(
        getAnimateArray(),
        { autoAlpha: 0, y: 15 },
        {
          duration: 0.4,
          autoAlpha: 1,
          y: 0,
          ease: Expo.easeOut,
          stagger: 0.2,
          onComplete: function () {
            isAnimating.current = false;
            overlayShown.current = true;
            if (requestedAnimateOut.current) {
              handleMouseLeave();
            }
          },
        },
      );
    }
  }

  function handleMouseMove() {
    if (!overlayShown.current) {
      handleMouseEnter();
    }
  }

  function handleMouseLeave() {
    if (!isAnimating.current) {
      isAnimating.current = true;
      requestedAnimateOut.current = false;

      TweenMax.fromTo(
        getAnimateArray().reverse(),
        { autoAlpha: 1, y: 0 },
        {
          duration: 0.4,
          autoAlpha: 0,
          y: 15,
          ease: Expo.easeOut,
          stagger: 0.2,
        },
      );
      TweenMax.to(hoverContainerRef.current, 0.4, {
        delay: 0.6,
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: function () {
          isAnimating.current = false;
          overlayShown.current = false;
        },
      });
    } else {
      requestedAnimateOut.current = true;
    }
  }

  return (
    <article
      className="project"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content-container">
        <div className="image-container">
          <img
            className="image"
            src={props.image}
            alt={`${props.name} project for ${props.client}`}
            loading="lazy"
          />
        </div>
        <div className="hover-container" ref={hoverContainerRef}>
          <h2 className="project-name" ref={nameRef}>
            {props.name}
          </h2>
          <div className="project-client" ref={clientRef}>
            A project for {props.client}
          </div>
          <div className="project-description" ref={descriptionRef}>
            {props.description}
          </div>
          <div className="project-skills" ref={skillsRef}>
            <span className="techno-title">Technologies: </span>
            {props.technologies}
          </div>
        </div>
      </div>
    </article>
  );
}
