import React, { useState } from "react";
import "./TechArsenal.css";
import { TECHNICAL_ARSENAL } from "../../data/portfolioData";
import {
  Code,
  Cpu,
  Layers,
  Database,
  Cloud,
  Terminal,
  Palette,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";

const TechArsenal = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState(TECHNICAL_ARSENAL[0].skills[0]);

  return (
    <section id="skills" className="arsenal-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            The <span className="gradient-text">Mobile Architecture</span> Arsenal
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of production frameworks, state patterns, local databases, and CI/CD pipelines utilized in my mobile applications.
          </p>
        </div>

        {/* Arsenal Navigation Tabs */}
        <div className="arsenal-category-tabs">
          {TECHNICAL_ARSENAL.map((category, index) => (
            <button
              key={category.category}
              onClick={() => {
                setSelectedCategory(index);
                setActiveSkill(TECHNICAL_ARSENAL[index].skills[0]);
              }}
              className={`category-tab-btn ${selectedCategory === index ? "active" : ""}`}
            >
              <span className="tab-tag">{category.tag}</span>
              <span className="tab-title">{category.category}</span>
            </button>
          ))}
        </div>

        {/* Arsenal Matrix Display */}
        <div className="arsenal-display-grid">
          {/* Left: Skills Chip Matrix */}
          <div className="skills-matrix-col glass-card">
            <div className="matrix-header">
              <h3>{TECHNICAL_ARSENAL[selectedCategory].category}</h3>
              <span className="skills-count">
                {TECHNICAL_ARSENAL[selectedCategory].skills.length} Core Technologies
              </span>
            </div>

            <div className="skills-chips-grid">
              {TECHNICAL_ARSENAL[selectedCategory].skills.map((skill) => {
                const isSelected = activeSkill?.name === skill.name;
                return (
                  <div
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    className={`skill-matrix-card ${isSelected ? "selected" : ""}`}
                  >
                    <div className="skill-card-top">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                      ) : (
                        <div className="skill-icon-placeholder">
                          <Code size={18} />
                        </div>
                      )}
                      <span className={`skill-level-pill ${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="skill-card-bottom">
                      <strong className="skill-name">{skill.name}</strong>
                      <span className="skill-exp">{skill.years} Production</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Skill Detail Inspector */}
          <div className="skill-inspector-col glass-card">
            {activeSkill ? (
              <div className="inspector-content">
                <div className="inspector-header">
                  <div className="inspector-icon-wrapper">
                    {activeSkill.icon ? (
                      <img src={activeSkill.icon} alt={activeSkill.name} className="inspector-icon" />
                    ) : (
                      <Code size={28} className="text-cyan" />
                    )}
                  </div>
                  <div>
                    <h3 className="inspector-skill-name">{activeSkill.name}</h3>
                    <div className="inspector-meta-row">
                      <span className="inspector-badge">{activeSkill.level} Level</span>
                      <span className="inspector-exp">{activeSkill.years} Experience</span>
                    </div>
                  </div>
                </div>

                <div className="inspector-body">
                  <h4>Application & Mastery</h4>
                  <p className="inspector-desc">{activeSkill.desc}</p>

                  <div className="architecture-guarantees">
                    <h4>Production Standards</h4>
                    <div className="guarantee-row">
                      <Zap size={16} className="text-cyan" />
                      <span>60FPS Smooth Rendering & GPU optimization</span>
                    </div>
                    <div className="guarantee-row">
                      <ShieldCheck size={16} className="text-emerald" />
                      <span>Memory leak prevention & efficient garbage collection</span>
                    </div>
                    <div className="guarantee-row">
                      <Award size={16} className="text-violet" />
                      <span>Comprehensive Unit & Widget test coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="inspector-empty">
                <Sparkles size={32} className="text-cyan" />
                <p>Click any skill chip on the left to inspect architectural details.</p>
              </div>
            )}
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="pillars-grid">
          <div className="pillar-card glass-panel">
            <div className="pillar-icon-box bg-indigo">
              <Zap size={22} className="text-indigo" />
            </div>
            <h4>Zero-Jank Guarantee</h4>
            <p>
              Every screen is profiled against Flutter DevTools. Heavy compute operations run inside background Isolates to prevent dropped frames.
            </p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon-box bg-cyan">
              <Database size={22} className="text-cyan" />
            </div>
            <h4>Offline-First Synchronization</h4>
            <p>
              SQLite database caching with seamless conflict-resolution logic keeps applications 100% usable without active network coverage.
            </p>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon-box bg-violet">
              <Layers size={22} className="text-violet" />
            </div>
            <h4>Clean SOLID Architecture</h4>
            <p>
              Domain, Data, and Presentation layers are strictly decoupled using BLoC & Riverpod patterns, ensuring modular maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
