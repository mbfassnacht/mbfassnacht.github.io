"use client";

import "@/styles/components/Contact/contact.scss";

import { useRef } from "react";
import { TweenMax, Expo } from "gsap";
import { contact as model } from "@/content/contact";

export default function Contact() {
  const dividerRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    TweenMax.to(dividerRef.current, 0.4, {
      delay: 0.2,
      width: "25%",
      ease: Expo.easeOut,
    });
  }

  function handleMouseLeave() {
    TweenMax.to(dividerRef.current, 0.4, { width: "10%", ease: Expo.easeOut });
  }

  return (
    <footer id="contact" className="section contact">
      <h2 className="title">{model.title}</h2>
      <div className="divider" ref={dividerRef}></div>

      <ul className="socials container-fluid">
        {model.socials.map(function (social) {
          return (
            <li key={social.ref}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener me"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="img-container">
                  <img src={social.img} alt="" />
                </div>
                <p className="link-name">{social.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="quick-data">
        <p>{model.location}</p>
      </div>
      <div className="terms-container">
        <p>{model.terms}</p>
      </div>
    </footer>
  );
}
