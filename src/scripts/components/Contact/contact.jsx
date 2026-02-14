require("../../../styles/components/Contact/contact.scss");

import React, { useRef } from "react";
import { TweenMax, Expo } from "gsap";

var model = require("./contact-model");

function Contact() {
  const dividerRef = useRef(null);

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
    <div id="contact" className="section contact">
      <h2 className="title">{model.title}</h2>
      <div className="divider" ref={dividerRef}></div>

      <ul className="socials container-fluid">
        {model.socials.map(function (object, i) {
          return (
            <li key={i}>
              <a
                href={object.href}
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="img-container">
                  <img src={object.img}></img>
                </div>
                <p className="link-name">{object.title}</p>
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
    </div>
  );
}

export default Contact;
