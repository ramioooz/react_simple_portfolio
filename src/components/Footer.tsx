import React from "react";
import { contactDetails, navLinks } from "../constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{ margin: "5rem auto" }}>
        <ul className="navbar-links">
          {navLinks.map((link, i) => (
            <li>
              <a href={link.url} key={i}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="copy-writes">
          {`All rights reserved © ${new Date().getFullYear()} ${
            contactDetails.fullName
          }`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
