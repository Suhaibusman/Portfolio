import React, { useState, useRef } from "react";
import "./Projects.css";
import { MOBILE_PROJECTS, WEB_PROJECTS } from "../../data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import {
  Smartphone,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Code2,
  CheckCircle2,
  Monitor,
} from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all-mobile");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState({});
  const [videoMuted, setVideoMuted] = useState({});
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setVideoPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setVideoPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    video.muted = !video.muted;
    setVideoMuted((prev) => ({ ...prev, [id]: video.muted }));
  };

  return (
    <section id="projects" className="projects-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>Featured Mobile Work</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Speed, Scale & Delight</span>
          </h2>
          <p className="section-subtitle">
            Explore production-grade Flutter & Native mobile architectures. Each project is crafted with strict performance standards, clean state isolation, and custom UI physics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="projects-filter-bar">
          <div className="filter-pill-container glass-panel">
            <button
              onClick={() => setActiveTab("all-mobile")}
              className={`filter-pill ${activeTab === "all-mobile" ? "active" : ""}`}
            >
              <Smartphone size={16} />
              <span>Mobile Apps ({MOBILE_PROJECTS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`filter-pill ${activeTab === "web" ? "active" : ""}`}
            >
              <Monitor size={16} />
              <span>Web & UI Systems ({WEB_PROJECTS.length})</span>
            </button>
          </div>
        </div>

        {/* Mobile Applications Showcase (Layered Case Studies) */}
        {activeTab === "all-mobile" && (
          <div className="mobile-showcase-grid">
            {MOBILE_PROJECTS.map((project, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={project.id}
                  className={`project-showcase-card glass-card ${
                    isEven ? "card-row-reverse" : ""
                  }`}
                >
                  {/* Left: Device Mockup Housing High-Res Video */}
                  <div className="project-device-column">
                    <div className="device-phone project-device-frame">
                      {/* Dynamic Island */}
                      <div className="device-island">
                        <div className="device-island-camera" />
                        <span className="island-indicator" />
                      </div>

                      <div className="device-glare" />

                      <div className="device-screen">
                        <video
                          ref={(el) => (videoRefs.current[project.id] = el)}
                          src={project.mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="project-video-element"
                          onPlay={() =>
                            setVideoPlaying((prev) => ({ ...prev, [project.id]: true }))
                          }
                          onPause={() =>
                            setVideoPlaying((prev) => ({ ...prev, [project.id]: false }))
                          }
                        />

                        {/* In-Frame Floating Controls */}
                        <div className="video-overlay-controls">
                          <button
                            onClick={() => togglePlay(project.id)}
                            className="video-ctrl-btn"
                            title={videoPlaying[project.id] ? "Pause Video" : "Play Video"}
                          >
                            {videoPlaying[project.id] !== false ? (
                              <Pause size={14} />
                            ) : (
                              <Play size={14} />
                            )}
                          </button>

                          <button
                            onClick={() => toggleMute(project.id)}
                            className="video-ctrl-btn"
                            title={videoMuted[project.id] ? "Unmute" : "Mute"}
                          >
                            {videoMuted[project.id] ? (
                              <VolumeX size={14} />
                            ) : (
                              <Volume2 size={14} />
                            )}
                          </button>

                          <button
                            onClick={() => setSelectedCaseStudy(project)}
                            className="video-ctrl-btn"
                            title="Expand Full Details"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Rich Case Study Content */}
                  <div className="project-content-column">
                    {/* Badge & Platforms */}
                    <div className="project-badge-row">
                      <span className="project-category-badge">{project.badge}</span>
                      <div className="platform-badges">
                        {project.platforms.map((platform) => (
                          <span key={platform} className="platform-pill">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-subtitle-text">{project.subtitle}</p>

                    {/* Short Description */}
                    <p className="project-desc-paragraph">{project.shortDesc}</p>

                    {/* Architectural Highlights / Metrics */}
                    <div className="project-specs-panel">
                      {project.metrics &&
                        Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="spec-item">
                            <span className="spec-label">
                              {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <strong className="spec-val">{value}</strong>
                          </div>
                        ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="project-tech-tags">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="project-actions-group">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="btn-primary"
                      >
                        <Layers size={16} />
                        <span>Case Study Deep Dive</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        <GithubIcon size={16} />
                        <span>View Repository</span>
                      </a>

                      {project.inPlaypen && (
                        <a href="#playpen" className="btn-outline-glow">
                          <Sparkles size={15} />
                          <span>Test in Phone Simulator</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Web & UI Systems Showcase */}
        {activeTab === "web" && (
          <div className="web-showcase-grid">
            {WEB_PROJECTS.map((item) => (
              <div key={item.id} className="web-project-card glass-card">
                <div className="web-img-wrapper">
                  <img src={item.mediaSrc} alt={item.name} className="web-project-img" />
                  <div className="web-img-overlay">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary btn-sm"
                    >
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="web-card-content">
                  <span className="project-category-badge">{item.badge}</span>
                  <h3 className="web-title">{item.name}</h3>
                  <p className="web-subtitle">{item.subtitle}</p>
                  <p className="web-desc">{item.desc}</p>

                  <div className="web-tech-list">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="web-card-footer">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="web-link-action"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
};

export default Projects;
