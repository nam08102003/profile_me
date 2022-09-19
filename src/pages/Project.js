import React from "react";
import { ListProject } from "./Data";

function Project() {
  return (
    <div className="project-page grid">
      <div className="container">
        <div className="list-project row">
          {ListProject &&
            ListProject.map((project, index) => {
              return (
                <div className="project-item col l-6 m-12 c-12" key={index}>
                  <div className="content-main-project section-box">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-overview">{project.overview}</p>
                    <div className="project-language">
                      {project.language &&
                        project.language.map((language, index) => {
                          return (
                            <span key={index}>{language && language}</span>
                          );
                        })}
                    </div>
                    <div className="project-status">
                      <span className="">Completed</span>
                    </div>
                    <div className="project-button">
                      <a href={project.linkGit}>View Github</a>
                      <a href={project.linkWeb}>Visit Website</a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
