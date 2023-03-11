import React from "react";
import BackEnd from "./BackEnd";
import FrondEnd from "./FrondEnd";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Level</span>

      <div className="skills-container container grid">
        <FrondEnd />
        <BackEnd />
      </div>
    </section>
  );
};

export default Skills;
