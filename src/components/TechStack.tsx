import "@/styles/components/TechStack/techStack.scss";

import TechStackCategory from "./TechStackCategory";
import { techStack as model } from "@/content/techStack";

export default function TechStack() {
  return (
    <section className="tech-stack">
      <h2 className="section-title">{model.title}</h2>
      <div className="section-divider"></div>
      <div className="categories">
        {model.categories.map(function (category, i) {
          return (
            <TechStackCategory
              key={category.name}
              name={category.name}
              items={category.items}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
}
