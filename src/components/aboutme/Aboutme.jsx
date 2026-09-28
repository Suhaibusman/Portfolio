import React from "react";
import "./Aboutme.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  User,
  MapPin,
  Download,
  Send,
  Code2,
  Smartphone,
  Layers,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

const Aboutme = () => {
  const handleResumeDownload = () => {
    try {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.4 } });
    } catch {}
    window.open(PERSONAL_INFO.cvFile, "_blank");
  };

  return (
    <section id="aboutme" className="about-section section-spacing">
      <div className="container">
        <div className="about-layout-grid">
          {/* Left: Photo with Location Badge */}
          <div className="about-media-col">
            <div className="about-portrait-card glass-card">
              <div className="portrait-glow-ring" />
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="about-portrait-img"
              />

              <div className="about-location-tag glass-panel">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>{PERSONAL_INFO.location}</strong>
                  <span>📍 Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Key Competencies */}
          <div className="about-content-col">
            <div className="section-tag">
              <User size={14} />
              <span>About Me</span>
            </div>

            <h2 className="about-title">
              A Dedicated <span className="gradient-text">Flutter Developer</span> Based in Karachi 📍
            </h2>

            <p className="about-paragraph">
              As a dedicated Flutter Developer, I possess a strong arsenal of skills in <strong className="text-primary">Flutter</strong>, <strong className="text-primary">Dart</strong>, <strong className="text-primary">Firebase</strong>, <strong className="text-primary">HTML5</strong>, <strong className="text-primary">CSS3</strong>, and <strong className="text-primary">JavaScript</strong>.
            </p>

            <p className="about-paragraph">
              I excel in designing and maintaining responsive mobile applications and websites that offer a smooth, intuitive user experience. My focus lies in crafting dynamic, engaging interfaces through writing clean, optimized, and maintainable code.
            </p>

            <p className="about-paragraph">
              I am a proactive team player who thrives in collaborating to turn creative concepts into functional, high-quality digital products.
            </p>

            <div className="about-actions-row">
              <button onClick={handleResumeDownload} className="btn-primary">
                <Download size={18} />
                <span>Download Resume / CV</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <Send size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
