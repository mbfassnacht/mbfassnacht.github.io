var React = require("react");
var model = require("./inspirationalPreview-model");
var TweenMax = require("gsap");
var Link = require("react-router").Link;

import { useRef } from "react";

function InspirationalPreview() {
  const dividerRef = useRef(null);

  function handleMouseEnter() {
    TweenMax.to(dividerRef.current, 0.4, { width: "60%" });
  }

  function handleMouseLeave() {
    TweenMax.to(dividerRef.current, 0.4, { width: "10%" });
  }

  return (
    <div className="inspirational-preview">
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="inspirational-stuff" className="title">
          {model.title}
        </Link>
        <div className="divider" ref={dividerRef}></div>
      </div>
    </div>
  );
}

export default InspirationalPreview;
