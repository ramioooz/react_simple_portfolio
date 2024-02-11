import React from "react";

import { profile_pic } from "../../assets";
import {
  contactDetails,
  cvlink,
  imgAltTxt_profileImage,
  profileLinks,
} from "../../constants";

const Profile = () => {
  return (
    <div className="profile-div">
      <img
        src={profile_pic}
        alt={imgAltTxt_profileImage}
        className="image-container"
      />
      <div className="profile-context-container">
        <div className="small-text">Hello. I am</div>
        <div className="large-text">Rami Mohamed</div>
        <div className="medium-text">{contactDetails.jobTitle}</div>
        <div className="profile-txt-btns-container">
          <a
            href={cvlink.url}
            target="_blank"
            rel="noopener"
            className="text-button"
          >
            Read CV
          </a>
          <a href="./#contact" className="text-button">
            Contact Info
          </a>
        </div>
        <div className="profile-links-btns-container">
          {profileLinks.map((link, i) => (
            <a href={link.url} target="_blank" rel="noopener" key={i}>
              <img
                src={link.img}
                alt={link.altTxt}
                className="profile-link-btn"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
