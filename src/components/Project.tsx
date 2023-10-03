import React from "react";
import { projectType } from "../types/types";

const Project = (props: projectType) => {
  return (
    <div className="project-container">
      <img src={props.img} alt="project img" className="project-img" />
      <h1 className="project-name">{props.name}</h1>
      <div className="project-btns">
        {props.githubLink && (
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-button"
          >
            Github
          </a>
        )}
        {props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-button"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
