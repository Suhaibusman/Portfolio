import React from "react";
import "./Aboutme.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  User,
  MapPin,
  Clock,
  Sparkles,
  Download,
  Send,
  Zap,
  Shield,
  Layers,
  CheckCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

const Aboutme = () => {
  const handleResumeDownload = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.4 },
        colors: ["#6366f1", "#06b6d4", "#8b5cf6"],
      });
    } catch {}
    window.open(PERSONAL_INFO.cvFile, "_blank");
  };

  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="about-layout-grid">
          {/* Left Column: Stylized Portrait & Live Location Card */}
          <div className="about-media-col">
            <div className="about-portrait-card glass-card">
              <div className="portrait-glow-ring" />
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="about-portrait-img"
              />

              {/* Location Floating Pill */}
              <div className="about-location-tag glass-panel">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>{PERSONAL_INFO.location}</strong>
                  <span>Available Globally (Remote)</span>
                </div>
              </div>
            </div>

            {/* Timezone & Availability Box */}
            <div className="about-status-card glass-panel">
              <div className="status-row">
                <Clock size={16} className="text-indigo" />
                <span className="font-mono text-sm">{PERSONAL_INFO.timezone}</span>
              </div>
              <div className="status-row">
                <span className="live-beacon" />
                <span className="text-emerald text-sm font-semibold">{PERSONAL_INFO.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Direct Actions */}
          <div className="about-content-col">
            <div className="section-tag">
              <User size={14} />
              <span>Architect Profile</span>
            </div>

            <h2 className="about-title">
              Crafting Digital Solutions Through <span className="gradient-text">Clean Code & Intuitive UI</span>
            </h2>

            <p className="about-lead">
              I am a dedicated Mobile Application Developer specializing in the <strong>Flutter & Dart ecosystem</strong>. I build high-performance mobile applications for startups, agencies, and enterprise clients around the globe.
            </p>

            <p className="about-paragraph">
              My engineering philosophy focuses on <strong>predictable state flow (BLoC & Riverpod)</strong>, <strong>offline-first local persistence (SQLite)</strong>, and <strong>60FPS animations</strong> that feel natural on every display. I bridge the gap between pixel-perfect Figma designs and robust, scalable backend services (Firebase, Supabase, REST, GraphQL).
            </p>

            {/* 4 Feature Highlights */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <Zap size={18} className="text-cyan" />
                <div>
                  <strong>60 FPS Native Speed</strong>
                  <p>Hardware-accelerated Skia & Impeller rendering engine.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Layers size={18} className="text-violet" />
                <div>
                  <strong>Clean Architecture</strong>
                  <p>Decoupled Domain, Data, and Presentation logic.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Shield size={18} className="text-emerald" />
                <div>
                  <strong>Offline-First Resilience</strong>
                  <p>Local SQLite cache with seamless cloud synchronization.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Sparkles size={18} className="text-amber" />
                <div>
                  <strong>Pixel-Perfect Translation</strong>
                  <p>1:1 exact conversion from Figma to responsive code.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="about-actions-row">
              <button onClick={handleResumeDownload} className="btn-primary">
                <Download size={18} />
                <span>Download Suhaib's CV</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <Send size={18} />
                <span>Start a Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
