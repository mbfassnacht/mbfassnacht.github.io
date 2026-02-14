require("../../../styles/components/TechStack/techStack.scss");

import React from "react";

var model = require("./techStack-model");

function TechStack() {
  return (
    <div className="tech-stack">
      <h2 className="section-title">{model.title}</h2>
      <div className="section-divider"></div>
      <div className="categories">
        {model.categories.map(function (category, i) {
          return (
            <div className="category" key={i}>
              <h3 className="category-name">{category.name}</h3>
              <div className="items">
                {category.items.map(function (item, j) {
                  return (
                    <span className="item" key={j}>
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
