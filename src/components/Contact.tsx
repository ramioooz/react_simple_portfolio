import React from "react";
import { email, linkedin } from "../assets";
import { contactDetails } from "../constants";

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
        <a href={`mailto:${contactDetails.email}`}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img src={email} alt="email icon" className="small-icon" />
            <p>{contactDetails.email}</p>
          </div>
        </a>
        {contactDetails.linkedIn && (
          <a
            href={contactDetails.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <img src={linkedin} alt="email icon" className="small-icon" />
              <p>LinkedIn</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;
