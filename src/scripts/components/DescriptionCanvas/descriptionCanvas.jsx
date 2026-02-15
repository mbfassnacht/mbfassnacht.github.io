require("../../../styles/components/DescriptionCanvas/descriptionCanvas.scss");

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Avatar from "../Avatar/avatar.jsx";

var model = require("./descriptionCanvas-model");
var mobile = require("is-mobile");

function DescriptionCanvas() {
  const containerRef = useRef(null);
  const avatarRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(function () {
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    function onScroll() {
      if (avatarRef.current) {
        avatarRef.current.animateImage(window.scrollY);
      }
    }

    window.addEventListener("scroll", onScroll, true);

    if (mobile()) {
      containerRef.current.className += " mobile";
    } else {
      initCanvas();
    }

    function initCanvas() {
      cameraRef.current = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000,
      );
      cameraRef.current.position.z = 1000;
      sceneRef.current = new THREE.Scene();
      sceneRef.current.fog = new THREE.FogExp2(0xf8fafc, 0.001);
      var geometry = new THREE.Geometry();
      var sprite = new THREE.TextureLoader().load("../assets/images/disc.png");
      for (var i = 0; i < 10000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = 2000 * Math.random() - 1000;
        vertex.y = 2000 * Math.random() - 1000;
        vertex.z = 2000 * Math.random() - 1000;
        geometry.vertices.push(vertex);
      }
      materialRef.current = new THREE.PointsMaterial({
        size: 35,
        sizeAttenuation: false,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
      });
      materialRef.current.color.setHSL(0.6, 0.5, 0.55);
      var particles = new THREE.Points(geometry, materialRef.current);
      sceneRef.current.add(particles);

      rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
      rendererRef.current.setClearColor(0xf8fafc, 1);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(rendererRef.current.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);
      window.addEventListener("resize", onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX.current = event.clientX - windowHalfX;
      mouseY.current = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {
      if (event.touches.length == 1) {
        event.preventDefault();
        mouseX.current = event.touches[0].pageX - windowHalfX;
        mouseY.current = event.touches[0].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length == 1) {
        event.preventDefault();
        mouseX.current = event.touches[0].pageX - windowHalfX;
        mouseY.current = event.touches[0].pageY - windowHalfY;
      }
    }

    function animate() {
      animFrameRef.current = requestAnimationFrame(animate);
      renderCanvas();
    }

    function renderCanvas() {
      var time = Date.now() * 0.00005;
      cameraRef.current.position.x +=
        (mouseX.current - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y +=
        (-mouseY.current - cameraRef.current.position.y) * 0.05;
      cameraRef.current.lookAt(sceneRef.current.position);
      var h = ((360 * (1.0 + time)) % 360) / 360;
      materialRef.current.color.setHSL(h, 0.4, 0.55);
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    return function () {
      window.removeEventListener("scroll", onScroll, true);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (!mobile()) {
        document.removeEventListener("mousemove", onDocumentMouseMove, false);
        document.removeEventListener("touchstart", onDocumentTouchStart, false);
        document.removeEventListener("touchmove", onDocumentTouchMove, false);
        window.removeEventListener("resize", onWindowResize, false);
      }
    };
  }, []);

  return (
    <div className="description-canvas" ref={containerRef}>
      <div id="canvas-container"></div>
      <div className="description-container">
        <Avatar ref={avatarRef}></Avatar>
        <p className="title">{model.title}</p>
        <p className="sub-title">{model.subtitle}</p>
        <div className="terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">zsh</span>
          </div>
          <div className="terminal-body">
            <p className="description">
              <span className="terminal-prompt">
                mbfassnacht@BEST-MACBOOK %{" "}
              </span>
              <span className="terminal-command">echo </span>"
              {model.description}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCanvas;
