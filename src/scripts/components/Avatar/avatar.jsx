require("../../../styles/components/Avatar/avatar.scss");

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { TweenMax, Power2 } from "gsap";

var model = require("./avatar-model");

const Avatar = forwardRef(function Avatar(props, ref) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageHide = useRef(true);

  useImperativeHandle(ref, function () {
    return {
      animateImage: function (scrollTop) {
        if (imageHide.current && scrollTop > 150) {
          imageHide.current = false;
          TweenMax.fromTo(
            imageRef.current,
            0.8,
            { autoAlpha: 0, scaleX: 0.2, scaleY: 0.2 },
            { autoAlpha: 1, scaleX: 1, scaleY: 1, ease: Power2.easeOut },
          );
          TweenMax.fromTo(
            containerRef.current,
            0.8,
            { autoAlpha: 0, scaleX: 0.2, scaleY: 0.2 },
            { autoAlpha: 1, scaleX: 1, scaleY: 1, ease: Power2.easeOut },
          );
        } else {
          if (!imageHide.current && scrollTop < 100) {
            imageHide.current = true;
            TweenMax.fromTo(
              imageRef.current,
              0.8,
              { autoAlpha: 1, scaleX: 1, scaleY: 1 },
              { autoAlpha: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeOut },
            );
            TweenMax.fromTo(
              containerRef.current,
              0.8,
              { autoAlpha: 1, scaleX: 1, scaleY: 1 },
              { autoAlpha: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeOut },
            );
          }
        }
      },
    };
  });

  return (
    <div className="avatar" ref={containerRef}>
      <img className="image" ref={imageRef} src={model.profileImage}></img>
    </div>
  );
});

export default Avatar;
