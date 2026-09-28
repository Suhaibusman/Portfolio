import React, { useState, useRef } from "react";
import "./Projects.css";
import { MOBILE_PROJECTS } from "../../data/portfolioData";
import {
  Smartphone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Code2,
} from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";

const Projects = () => {
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
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Flutter Mobile Apps</span>
          </h2>
          <p className="section-subtitle">
            Each project is a unique piece of development 🧩. Explore real video recordings and source code repositories.
          </p>
        </div>

        {/* Mobile Projects Showcase List */}
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
                {/* Device Mockup Housing Real Video */}
                <div className="project-device-column">
                  <div className="device-phone project-device-frame">
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

                      {/* Video Controls Overlay */}
                      <div className="video-overlay-controls">
                        <button
                          onClick={() => togglePlay(project.id)}
                          className="video-ctrl-btn"
                          title={videoPlaying[project.id] !== false ? "Pause" : "Play"}
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-content-column">
                  <div className="project-badge-row">
                    <span className="project-category-badge">{project.badge}</span>
                  </div>

                  <h3 className="project-title">{project.name}</h3>

                  <p className="project-desc-paragraph">{project.shortDesc}</p>

                  <div className="project-tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions-group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <GithubIcon size={18} />
                      <span>View Code on GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
