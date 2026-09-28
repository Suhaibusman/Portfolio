import React from "react";
import "./TechArsenal.css";
import { TECHNICAL_SKILLS } from "../../data/portfolioData";
import { Cpu } from "lucide-react";

const TechArsenal = () => {
  return (
    <section id="skills" className="arsenal-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Tech Stack</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Development Tools</span>
          </h2>
          <p className="section-subtitle">
            My primary technical skills for crafting responsive mobile apps and modern web interfaces.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="clean-skills-grid">
          {TECHNICAL_SKILLS.map((skill) => (
            <div key={skill.id} className="clean-skill-card glass-card">
              <div className="skill-card-icon-wrap">
                <img src={skill.icon} alt={skill.name} className="clean-skill-icon" />
              </div>
              <strong className="clean-skill-name">{skill.name}</strong>
              <span className="clean-skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
