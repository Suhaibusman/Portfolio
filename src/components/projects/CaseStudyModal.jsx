import React from "react";
import "./CaseStudyModal.css";
import { X, ExternalLink, ShieldCheck, Zap, Layers, CheckCircle, Smartphone } from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="case-modal-overlay" onClick={onClose}>
      <div className="case-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="case-modal-header">
          <div className="case-modal-title-group">
            <span className="case-badge">{project.badge}</span>
            <h2>{project.name}</h2>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="case-modal-close-btn" aria-label="Close Case Study">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="case-modal-body">
          {/* Media & Key Specs Grid */}
          <div className="case-modal-grid">
            {/* Left: Video / Device */}
            <div className="case-modal-media-col">
              <div className="device-phone case-phone-preview">
                <div className="device-island">
                  <div className="device-island-camera" />
                </div>
                <div className="device-glare" />
                <div className="device-screen">
                  {project.mediaType === "video" ? (
                    <video
                      src={project.mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="case-video-player"
                    />
                  ) : (
                    <img
                      src={project.mediaSrc}
                      alt={project.name}
                      className="case-img-preview"
                    />
                  )}
                </div>
              </div>

              {/* Metrics Box */}
              {project.metrics && (
                <div className="case-metrics-card">
                  <h4>Key Architectural Metrics</h4>
                  <div className="case-metrics-list">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key} className="case-metric-row">
                        <span className="case-metric-key">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <strong className="case-metric-val">{val}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Architectural Breakdown */}
            <div className="case-modal-details-col">
              {/* Tech Stack Chips */}
              <div className="case-section-block">
                <h3>Tech Stack & Tooling</h3>
                <div className="case-tech-chips">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Statement */}
              <div className="case-section-block">
                <h3>The Challenge & Requirements</h3>
                <p className="case-text-p">{project.problemStatement || project.desc}</p>
              </div>

              {/* Architectural Solution */}
              <div className="case-section-block">
                <h3>Architectural Solution & Implementation</h3>
                <p className="case-text-p">{project.solution || project.shortDesc}</p>
              </div>

              {/* Tangible Outcomes */}
              {project.outcomes && (
                <div className="case-section-block">
                  <h3>Key Deliverables & Outcomes</h3>
                  <ul className="case-outcomes-list">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} className="text-emerald shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="case-modal-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <GithubIcon size={18} />
                    <span>View GitHub Source Code</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={18} />
                    <span>Live Web Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;

