"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  charDelay?: number;
  startDelay?: number;
  threshold?: number;
}

// Counts from 0 to `total` one character at a time, starting once the returned
// ref's element scrolls into view. Starts at `total` so server-rendered HTML
// (and reduced-motion users) get the finished state.
export function useTypewriter<T extends Element>(
  total: number,
  { charDelay = 22, startDelay = 400, threshold = 0.6 }: TypewriterOptions = {},
) {
  const ref = useRef<T>(null);
  const [typed, setTyped] = useState(total);

  useEffect(
    function () {
      const element = ref.current;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (!element || reduceMotion || !("IntersectionObserver" in window)) {
        return;
      }

      let timer: ReturnType<typeof setTimeout> | undefined;
      setTyped(0);

      function typeNext(count: number) {
        setTyped(count);
        if (count < total) {
          timer = setTimeout(() => typeNext(count + 1), charDelay);
        }
      }

      const observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            timer = setTimeout(() => typeNext(1), startDelay);
          }
        },
        { threshold },
      );
      observer.observe(element);

      return function () {
        observer.disconnect();
        clearTimeout(timer);
      };
    },
    [total, charDelay, startDelay, threshold],
  );

  return { ref, typed, done: typed >= total };
}
