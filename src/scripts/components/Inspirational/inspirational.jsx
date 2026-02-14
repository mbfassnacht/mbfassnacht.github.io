import React, { useEffect, useRef } from "react";
var model = require("./inspirational-model");
var ScrollManager = require("scroll-manager");

function Inspirational() {
  const scrollerRef = useRef(null);

  useEffect(function () {
    scrollerRef.current = new ScrollManager();
    scrollerRef.current.scrollTop({
      element: document.body,
      duration: 0.4,
      ease: "easeOutExpo",
    });
  }, []);

  return (
    <div id="inspirational">
      <h1 className="title">{model.title}</h1>
    </div>
  );
}

export default Inspirational;
