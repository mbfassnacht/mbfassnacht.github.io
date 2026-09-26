"use client";

import "@/styles/components/Avatar/avatar.scss";

import { useImperativeHandle, useRef, type Ref } from "react";
import { TweenMax, Power2 } from "gsap";
import { avatar as model } from "@/content/avatar";
import { person } from "@/content/site";

export interface AvatarHandle {
  animateImage: (scrollTop: number) => void;
}

export default function Avatar({ ref }: { ref?: Ref<AvatarHandle> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
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
        } else if (!imageHide.current && scrollTop < 100) {
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
      },
    };
  });

  return (
    <div className="avatar" ref={containerRef}>
      <img
        className="image"
        ref={imageRef}
        src={model.profileImage}
        alt={`Portrait of ${person.name}`}
        width={600}
        height={600}
      />
    </div>
  );
}
