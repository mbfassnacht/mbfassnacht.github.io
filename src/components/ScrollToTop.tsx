"use client";

import { useEffect } from "react";
import ScrollManager from "scroll-manager";

export default function ScrollToTop() {
  useEffect(function () {
    new ScrollManager().scrollTop({
      element: document.body,
      duration: 0.4,
      ease: "easeOutExpo",
    });
  }, []);

  return null;
}
