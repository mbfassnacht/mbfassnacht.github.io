require("../../../styles/components/Project/project.scss");

import React, { useRef, useEffect } from "react";
import { TweenMax, Expo } from "gsap";

function Project(props) {
  const containerRef = useRef(null);
  const hoverContainerRef = useRef(null);
  const nameRef = useRef(null);
  const clientRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);
  const overlayShown = useRef(false);
  const isAnimating = useRef(false);
  const requestedAnimateOut = useRef(false);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth <= 800) {
        containerRef.current.style.width = "";
      } else {
        containerRef.current.style.width =
          containerRef.current.parentNode.clientWidth / 2;
      }
    }

    window.addEventListener("resize", handleResize, true);
    handleResize();

    return function () {
      window.removeEventListener("resize", handleResize, true);
    };
  }, []);

  function getAnimateArray() {
    return [
      nameRef.current,
      clientRef.current,
      descriptionRef.current,
      skillsRef.current,
    ];
  }

  function getReverseAnimateArray() {
    return [
      skillsRef.current,
      descriptionRef.current,
      clientRef.current,
      nameRef.current,
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
      TweenMax.staggerFromTo(
        getAnimateArray(),
        0.4,
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, ease: Expo.easeOut },
        0.2,
        function () {
          isAnimating.current = false;
          overlayShown.current = true;
          if (requestedAnimateOut.current) {
            handleMouseLeave();
          }
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

      TweenMax.staggerFromTo(
        getReverseAnimateArray(),
        0.4,
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: 15, ease: Expo.easeOut },
        0.2,
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
    <div
      className="project"
      ref={containerRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content-container">
        <div className="image-container">
          <img className="image" src={props.image}></img>
        </div>
        <div className="hover-container" ref={hoverContainerRef}>
          <div className="project-name" ref={nameRef}>
            {props.name}
          </div>
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
    </div>
  );
}

export default Project;
