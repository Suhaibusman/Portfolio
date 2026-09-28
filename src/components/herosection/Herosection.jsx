import React from "react";
import "./HeroSection.css";
import { PERSONAL_INFO, TECHNICAL_SKILLS } from "../../data/portfolioData";
import sadapayVideo from "../../assets/sadapay.mp4";
import {
  Smartphone,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "../common/BrandIcons";
import confetti from "canvas-confetti";

const HeroSection = () => {
  const handleResumeDownload = () => {
    try {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.3 } });
    } catch {}
    window.open(PERSONAL_INFO.cvFile, "_blank");
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-container">
        {/* Left: Bio & CTAs */}
        <div className="hero-content">
          <div className="hero-badge-row">
            <div className="live-badge">
              <span className="live-beacon" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
            <span className="location-pill">
              <MapPin size={13} className="text-cyan" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>

          <h2 className="hero-designation">
            Passionate <span className="gradient-text-flutter">Flutter Developer</span> 🚀
          </h2>

          <p className="hero-description">
            Dedicated to building smooth, responsive, and high-performance cross-platform mobile apps for iOS and Android using Flutter & Dart.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={handleResumeDownload} className="btn-secondary">
              <Download size={17} />
              <span>Download CV</span>
            </button>

            <a href="#contact" className="btn-outline-glow">
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links Matrix */}
          <div className="hero-social-matrix">
            <span className="social-label">Find Me Online:</span>
            <div className="social-links-grid">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="GitHub Repositories"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.upworkUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card upwork-card"
                title="Upwork Profile"
              >
                <span>Upwork</span>
              </a>

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="Fiverr Profile"
              >
                <span>Fiverr</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card whatsapp-card"
                title="WhatsApp Chat"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero-social-card"
                title="Direct Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Portrait & Featured Flutter App Video Mockup */}
        <div className="hero-visual-wrapper">
          <div className="hero-portrait-frame glass-card">
            <div className="portrait-inner-content">
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="hero-avatar-image"
              />
              <div className="hero-avatar-badge glass-panel">
                <span className="live-beacon" />
                <div>
                  <strong>Muhammad Suhaib Usman</strong>
                  <span>Flutter & Mobile Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee / Chip Bar */}
      <div className="container hero-techstack-bar">
        <div className="techstack-header">
          <span>Core Tech Stack:</span>
        </div>
        <div className="techstack-chips-row">
          {TECHNICAL_SKILLS.map((skill) => (
            <div key={skill.id} className="tech-chip-item glass-panel">
              <img src={skill.icon} alt={skill.name} className="tech-chip-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
