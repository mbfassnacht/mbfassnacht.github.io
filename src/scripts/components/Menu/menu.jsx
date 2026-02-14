require("../../../styles/components/Menu/menu.scss");

import React, { useRef, useEffect } from "react";
import TweenMax from "gsap";
import { Link } from "react-router-dom";
import Close from "../Close/close.jsx";

var model = require("./menu-model");

function Menu() {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const opened = useRef(false);
  const isAnimating = useRef(false);
  const requestedClose = useRef(false);
  const linksRef = useRef(null);
  const contactTitleRef = useRef(null);

  useEffect(function () {
    var navigationLinks =
      containerRef.current.getElementsByClassName("navigation-link");
    for (var i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", close);
    }

    return function () {
      for (var i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].removeEventListener("click", close);
      }
    };
  }, []);

  function open() {
    if (!opened.current && !isAnimating.current) {
      isAnimating.current = true;
      var links = containerRef.current.getElementsByClassName("link");

      TweenMax.fromTo(
        menuRef.current,
        0.2,
        { width: 0 },
        {
          width: 300,
          onComplete: function () {
            TweenMax.staggerTo(links, 0.2, { autoAlpha: 1 }, 0.1, function () {
              opened.current = true;
              isAnimating.current = false;
              if (requestedClose.current) {
                close();
              }
            });
          },
        },
      );

      closeRef.current.animateIn();

      TweenMax.fromTo(
        contactTitleRef.current,
        0.2,
        { autoAlpha: 0 },
        { delay: 0.6, autoAlpha: 1 },
      );
    }
  }

  function close() {
    if (opened.current && !isAnimating.current) {
      isAnimating.current = true;
      requestedClose.current = false;
      var links = containerRef.current.getElementsByClassName("link");

      TweenMax.fromTo(
        contactTitleRef.current,
        0.2,
        { autoAlpha: 1 },
        { delay: 0.4, autoAlpha: 0 },
      );
      TweenMax.staggerTo(links, 0.2, { autoAlpha: 0 }, 0.1);
      TweenMax.to(menuRef.current, 0.2, {
        delay: 1.4,
        width: 0,
        onComplete: function () {
          opened.current = false;
          isAnimating.current = false;
        },
      });
      closeRef.current.animateOut();
    } else {
      requestedClose.current = true;
    }
  }

  function handleOpenerClick() {
    if (!opened.current) {
      open();
    }
  }

  return (
    <div className="menu" ref={containerRef}>
      <div ref={openerRef} className="opener" onClick={handleOpenerClick}>
        {model.title}
      </div>
      <div ref={menuRef} className="real-menu">
        <div className="close-icon">
          <Close ref={closeRef} onClicked={close}></Close>
        </div>
        <div className="list">
          {model.links.map(function (object, i) {
            return (
              <div className="link navigation-link" key={i}>
                <Link onClick={close} to={object.to}>
                  {object.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="contact-container">
          <div className="contact-title" ref={contactTitleRef}>
            {model.contact.title}
          </div>
          <div className="contact-list">
            {model.contact.links.map(function (object, i) {
              return (
                <div key={i} className="link">
                  <a href={object.href} className="link" target="_blank">
                    <p className="link-name">{object.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
