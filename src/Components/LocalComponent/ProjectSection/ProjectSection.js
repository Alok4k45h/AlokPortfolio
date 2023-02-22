import React from "react";

import ProjectData from "./ProjectsData";
import ProjectModal from "../../Modal/ProjectModal/ProjectModal";

import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="explore-project-section pt-5 pb-5" id="projectSection">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h1 className="project-section-heading">Projects</h1>
          </div>

          {ProjectData.map((data) => (
            <ProjectModal
              key={data.id}
              imgLink={data.image}
              title={data.title}
              desc={data.description}
              techStack={data.technologies}
              listFirst={data.listFirst}
              listSecond={data.listSecond}
              WebLink={data.link}
            />
          ))}
        </div>

        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center mt-3">
            <a
              href="https://github.com/Alok4k45h"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-outline-success">View All</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
