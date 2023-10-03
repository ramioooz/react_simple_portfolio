import React from "react";
import { backendSkills, frontendSkills } from "../../constants";
import { arrow } from "../../assets";

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
                <div className="exp-group" key={i}>
                  <img
                    src={skill.icon}
                    alt="checkmark"
                    className="small-icon"
                  />
                  <div className="skill-and-level">
                    <div className="exp-title">{skill.name}</div>
                    <div className="exp-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-block">
            <p className="exp-header">Backend Development</p>
            <div className="skills-wrap">
              {backendSkills.map((skill, i) => (
                <div className="exp-group" key={i}>
                  <img
                    src={skill.icon}
                    alt="checkmark"
                    className="small-icon"
                  />
                  <div className="skill-and-level">
                    <div className="exp-title">{skill.name}</div>
                    <div className="exp-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#projects"><img src={arrow} alt="arrow icon"  className='arrow-icon'/></a>
    </section>
  );
};

export default Experience;
