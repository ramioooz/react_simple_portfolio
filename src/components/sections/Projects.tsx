import React from "react";
import { imgAltTxt_arrowIcon, projects } from "../../constants";
import Project from "../Project";
import { arrow } from "../../assets";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="small-text">Browse my recent</div>
        <div className="large-text">Projects</div>
        <div className="projects-wrap">
          {projects.map((prj, i) => (
            <Project key={i} {...prj} />
          ))}
        </div>
      </div>
      <a href="#contact" aria-label="go to next section">
        <img src={arrow} alt={imgAltTxt_arrowIcon} className="arrow-icon" />
      </a>
    </section>
  );
};

export default Projects;
