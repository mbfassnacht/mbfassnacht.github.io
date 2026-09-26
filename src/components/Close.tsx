"use client";

import "@/styles/components/Close/close.scss";

import { useImperativeHandle, useRef, type Ref } from "react";
import { TweenMax, Expo } from "gsap";

export interface CloseHandle {
  animateIn: () => void;
  animateOut: () => void;
}

interface CloseProps {
  ref?: Ref<CloseHandle>;
  onClicked?: () => void;
}

export default function Close({ ref, onClicked }: CloseProps) {
  const containerRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, function () {
    return {
      animateIn: function () {
        TweenMax.to(containerRef.current, 0.4, {
          delay: 0.4,
          autoAlpha: 1,
          ease: Expo.easeOut,
        });
      },
      animateOut: function () {
        TweenMax.to(containerRef.current, 0.4, {
          delay: 0.4,
          autoAlpha: 0,
          ease: Expo.easeOut,
        });
      },
    };
  });

  function handleMouseEnter() {
    TweenMax.to(containerRef.current, 0.4, {
      rotation: "90",
      ease: Expo.easeOut,
    });
  }

  function handleMouseLeave() {
    TweenMax.to(containerRef.current, 0.4, {
      rotation: "-90",
      ease: Expo.easeOut,
    });
  }

  return (
    <button
      type="button"
      className="close"
      aria-label="Close"
      ref={containerRef}
      onMouseDown={onClicked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg viewBox="0 0 512 512" aria-hidden="true">
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>
    </button>
  );
}
