import React from "react";
import { email, linkedin } from "../assets";
import {
  contactDetails,
  imgAltTxt_emailIcon,
  imgAltTxt_linkedInIcon,
} from "../constants";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="small-text">Get in touch</div>
      <div className="large-text">Contact Me</div>
      <div
        className="about-block"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <a href={`mailto:${contactDetails.email}?subject=WEBSITE-VISITOR`}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img src={email} alt={imgAltTxt_emailIcon} className="small-icon" />
            <p>{contactDetails.email}</p>
          </div>
        </a>
        {contactDetails.linkedIn && (
          <a href={contactDetails.linkedIn} target="_blank" rel="noopener">
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <img
                src={linkedin}
                alt={imgAltTxt_linkedInIcon}
                className="small-icon"
              />
              <p>LinkedIn</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;
