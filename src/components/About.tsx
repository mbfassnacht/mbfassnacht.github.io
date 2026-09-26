"use client";

import "@/styles/components/About/about.scss";

import { useImperativeHandle, useRef, type Ref } from "react";
import { TweenMax } from "gsap";
import Close, { type CloseHandle } from "./Close";
import { about as model } from "@/content/about";

export interface AboutHandle {
  show: () => void;
  hide: () => void;
}

export default function About({ ref }: { ref?: Ref<AboutHandle> }) {
  const containerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<CloseHandle>(null);

  function hide() {
    TweenMax.to(containerRef.current, 0.4, { autoAlpha: 0, zIndex: -100 });
    TweenMax.set(document.body, { overflow: "auto" });
    closeRef.current?.animateOut();
  }

  function show() {
    TweenMax.to(containerRef.current, 0.4, { autoAlpha: 1, zIndex: 10000 });
    TweenMax.set(document.body, { overflow: "hidden" });
    closeRef.current?.animateIn();
  }

  useImperativeHandle(ref, function () {
    return { show, hide };
  });

  return (
    <section className="about" ref={containerRef} aria-labelledby="about-title">
      <div className="close-icon">
        <Close ref={closeRef} onClicked={hide} />
      </div>
      <div className="scroll-container">
        <h2 className="title" id="about-title">
          {model.title}
        </h2>
        <div className="description">
          {model.description.map(function (text, i) {
            return <p key={i}>{text}</p>;
          })}
        </div>
        <div className="phrase-container">
          <div className="phrase">&quot;{model.phrase}&quot;</div>
          <div className="author">{model.author}</div>
        </div>
      </div>
    </section>
  );
}
