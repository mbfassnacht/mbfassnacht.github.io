"use client";

import "@/styles/components/Menu/menu.scss";

import { useRef } from "react";
import Link from "next/link";
import { TweenMax } from "gsap";
import Close, { type CloseHandle } from "./Close";
import { menu as model } from "@/content/menu";

export default function Menu() {
  const containerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<CloseHandle>(null);
  const opened = useRef(false);
  const isAnimating = useRef(false);
  const requestedClose = useRef(false);
  const contactTitleRef = useRef<HTMLDivElement>(null);

  function getLinks() {
    return containerRef.current!.getElementsByClassName("link");
  }

  function open() {
    if (!opened.current && !isAnimating.current) {
      isAnimating.current = true;
      const links = getLinks();

      TweenMax.fromTo(
        menuRef.current,
        0.2,
        { width: 0 },
        {
          width: 300,
          onComplete: function () {
            TweenMax.to(links, {
              duration: 0.2,
              autoAlpha: 1,
              stagger: 0.1,
              onComplete: function () {
                opened.current = true;
                isAnimating.current = false;
                if (requestedClose.current) {
                  close();
                }
              },
            });
          },
        },
      );

      closeRef.current?.animateIn();

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
      const links = getLinks();

      TweenMax.fromTo(
        contactTitleRef.current,
        0.2,
        { autoAlpha: 1 },
        { delay: 0.4, autoAlpha: 0 },
      );
      TweenMax.to(links, { duration: 0.2, autoAlpha: 0, stagger: 0.1 });
      TweenMax.to(menuRef.current, 0.2, {
        delay: 1.4,
        width: 0,
        onComplete: function () {
          opened.current = false;
          isAnimating.current = false;
        },
      });
      closeRef.current?.animateOut();
    } else {
      requestedClose.current = true;
    }
  }

  return (
    <nav className="menu" ref={containerRef} aria-label="Main">
      <button type="button" className="opener" onClick={open}>
        {model.title}
      </button>
      <div ref={menuRef} className="real-menu">
        <div className="close-icon">
          <Close ref={closeRef} onClicked={close} />
        </div>
        <div className="list">
          {model.links.map(function (link) {
            return (
              <div className="link navigation-link" key={link.to}>
                <Link onClick={close} href={link.to}>
                  {link.title}
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
            {model.contact.links.map(function (link) {
              return (
                <div key={link.href} className="link">
                  <a
                    href={link.href}
                    className="link"
                    target="_blank"
                    rel="noopener me"
                  >
                    <p className="link-name">{link.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
