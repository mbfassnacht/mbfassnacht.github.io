"use client";

import "@/styles/components/DescriptionCanvas/descriptionCanvas.scss";

import { useEffect, useRef } from "react";
import isMobile from "is-mobile";
import Avatar, { type AvatarHandle } from "./Avatar";
import TerminalTyping from "./TerminalTyping";
import TerminalWindow from "./TerminalWindow";
import { descriptionCanvas as model } from "@/content/descriptionCanvas";

export default function DescriptionCanvas() {
  const containerRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<AvatarHandle>(null);

  useEffect(function () {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let cleanupCanvas: (() => void) | undefined;

    function onScroll() {
      avatarRef.current?.animateImage(window.scrollY);
    }

    window.addEventListener("scroll", onScroll, true);

    if (isMobile()) {
      container.classList.add("mobile");
    } else {
      // Three.js is only needed for the desktop background, so load it lazily.
      import("three").then(function (THREE) {
        if (cancelled) return;
        try {
          cleanupCanvas = initCanvas(THREE, container);
        } catch {
          // No WebGL (disabled or unsupported): use the static background.
          container.classList.add("mobile");
        }
      });
    }

    return function () {
      cancelled = true;
      window.removeEventListener("scroll", onScroll, true);
      cleanupCanvas?.();
    };
  }, []);

  return (
    <section className="description-canvas" ref={containerRef}>
      <div id="canvas-container"></div>
      <div className="description-container">
        <Avatar ref={avatarRef} />
        <h2 className="title">{model.title}</h2>
        <p className="sub-title">{model.subtitle}</p>
        <TerminalWindow title="zsh">
          <TerminalTyping
            prompt="mbfassnacht %"
            segments={[
              { text: "echo ", className: "terminal-command" },
              { text: `"${model.description}"` },
            ]}
          />
        </TerminalWindow>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initCanvas(THREE: any, container: HTMLElement) {
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  let mouseX = 0;
  let mouseY = 0;
  let animFrame = 0;

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    2,
    2000,
  );
  camera.position.z = 1000;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xf8fafc, 0.001);
  const geometry = new THREE.Geometry();
  const sprite = new THREE.TextureLoader().load("/assets/images/disc.png");
  for (let i = 0; i < 10000; i++) {
    const vertex = new THREE.Vector3();
    vertex.x = 2000 * Math.random() - 1000;
    vertex.y = 2000 * Math.random() - 1000;
    vertex.z = 2000 * Math.random() - 1000;
    geometry.vertices.push(vertex);
  }
  const material = new THREE.PointsMaterial({
    size: 35,
    sizeAttenuation: false,
    map: sprite,
    alphaTest: 0.5,
    transparent: true,
  });
  material.color.setHSL(0.6, 0.5, 0.55);
  scene.add(new THREE.Points(geometry, material));

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor(0xf8fafc, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event: MouseEvent) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onDocumentTouch(event: TouchEvent) {
    if (event.touches.length == 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  function animate() {
    animFrame = requestAnimationFrame(animate);
    const time = Date.now() * 0.00005;
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    const h = ((360 * (1.0 + time)) % 360) / 360;
    material.color.setHSL(h, 0.4, 0.55);
    renderer.render(scene, camera);
  }

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("touchstart", onDocumentTouch, false);
  document.addEventListener("touchmove", onDocumentTouch, false);
  window.addEventListener("resize", onWindowResize, false);
  animate();

  return function () {
    cancelAnimationFrame(animFrame);
    document.removeEventListener("mousemove", onDocumentMouseMove, false);
    document.removeEventListener("touchstart", onDocumentTouch, false);
    document.removeEventListener("touchmove", onDocumentTouch, false);
    window.removeEventListener("resize", onWindowResize, false);
    renderer.dispose();
    renderer.domElement.remove();
  };
}
