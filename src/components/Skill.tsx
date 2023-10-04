import React from "react";
import { skillType } from "../types/types";

const Skill = ({ icon, name, level }: skillType) => {
  return (
    <div className="exp-group">
      <img src={icon} alt="checkmark" className="small-icon"  
      style={{marginTop: "0.25rem"}}
      />
      <div className="skill-and-level">
        <div className="exp-title">{name}</div>
        <div className="exp-level">{level}</div>
      </div>
    </div>
  );
};

export default Skill;
