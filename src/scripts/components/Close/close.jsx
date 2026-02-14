require("../../../styles/components/Close/close.scss");

import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { TweenMax, Expo } from "gsap";
import loadsvg from "load-svg";

var model = require("./close-model");

const Close = forwardRef(function Close(props, ref) {
  const containerRef = useRef(null);

  useEffect(function () {
    loadsvg(model.closeIcon, function (err, svg) {
      if (containerRef.current) {
        containerRef.current.appendChild(svg);
      }
    });
  }, []);

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

  function handleMouseDown() {
    if (typeof props.onClicked === "function") {
      props.onClicked();
    }
  }

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
    <div
      className="close"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
});

export default Close;
