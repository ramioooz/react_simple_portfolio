import React from "react";
import { backendSkills, frontendSkills, imgAltTxt_arrowIcon } from "../../constants";
import { arrow } from "../../assets";
import Skill from "../Skill";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <div className="small-text">Explore my</div>
        <div className="large-text">Experience</div>
        <div className="exp-group-container">
          <div className="about-block">
            <p className="exp-header">Frontend Development</p>
            <div className="skills-wrap">
              {frontendSkills.map((skill, i) => (
                <Skill key={i} {...skill}/>
              ))}
            </div>
          </div>
          <div className="about-block">
            <p className="exp-header">Backend Development</p>
            <div className="skills-wrap">
              {backendSkills.map((skill, i) => (
                <Skill key={i} {...skill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#projects"><img src={arrow} alt={imgAltTxt_arrowIcon}  className='arrow-icon'/></a>
    </section>
  );
};

export default Experience;
