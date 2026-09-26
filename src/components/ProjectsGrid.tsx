import "@/styles/components/ProjectsGrid/projectsGrid.scss";

import Project from "./Project";
import { projectsGrid as model } from "@/content/projects";

export default function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {model.projects.map(function (row, i) {
        return (
          <div className="project-row" key={i}>
            {row.map(function (project) {
              return <Project key={project.name} {...project} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
