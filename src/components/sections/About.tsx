import React from "react";
import { about_pic, arrow, education, experience } from "../../assets";
import {
  imgAltTxt_profileImage,
  contactDetails,
  imgAltTxt_experienceIcon,
  imgAltTxt_educationIcon,
  imgAltTxt_arrowIcon,
} from "../../constants";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="small-text">Get to know more</div>
        <div className="large-text">About Me</div>
        <div className="about-photo-and-details-container">
          <img
            src={about_pic}
            alt={imgAltTxt_profileImage}
            className="image-container"
            style={{ borderRadius: "3rem" }}
          />
          <div className="blocks-and-paragraph-container">
            <div className="about-blocks-container">
              <div className="about-block">
                <img
                  src={experience}
                  alt={imgAltTxt_experienceIcon}
                  className="small-icon"
                  style={{ marginBottom: "0.25rem" }}
                />
                <h3>Experience</h3>
                <p style={{ textAlign: "center", color: "gray" }}>
                  10+ years
                  <br />
                  Full Stack Development
                </p>
              </div>
              <div className="about-block">
                <img
                  src={education}
                  alt={imgAltTxt_educationIcon}
                  className="small-icon"
                  style={{ marginBottom: "0.25rem" }}
                />
                <h3>Education</h3>
                <p style={{ textAlign: "center", color: "gray" }}>
                  B.Sc. Bachelors Degree
                </p>
              </div>
            </div>
            <p className="about-paragraph">{contactDetails.aboutMe}</p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src={arrow} alt={imgAltTxt_arrowIcon} className="arrow-icon" />
      </a>
    </section>
  );
};

export default About;
