import React, { useState, useRef } from "react";
import "./Projects.css";
import { useAuth } from "../../context/AuthContext";
import { useProjects } from "../../context/ProjectContext";
import ProjectFormModal from "./ProjectFormModal";
import LoginModal from "../auth/LoginModal";
import {
  Smartphone,
  Globe,
  Monitor,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Plus,
  Pencil,
  Trash2,
  Search,
  Sparkles,
  Download,
  ShieldCheck,
  RotateCcw,
  Check,
} from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";

const Projects = () => {
  const { isAuthenticated, user } = useAuth();
  const {
    filteredProjects,
    projects,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    deleteProject,
    resetToDefaults,
  } = useProjects();

  const [videoPlaying, setVideoPlaying] = useState({});
  const [videoMuted, setVideoMuted] = useState({});
  const videoRefs = useRef({});

  // Modals
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3500);
  };

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
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

  const handleOpenCreateModal = () => {
    setEditingProject(null);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (project) => {
    setEditingProject(project);
    setIsFormModalOpen(true);
  };

  const handleDelete = (id, name) => {
    if (deleteConfirmId === id) {
      deleteProject(id);
      setDeleteConfirmId(null);
      showToast(`Project "${name}" was deleted successfully.`);
    } else {
      setDeleteConfirmId(id);
      setTimeout(() => {
        setDeleteConfirmId((prev) => (prev === id ? null : prev));
      }, 4000);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all projects to original showcases? Custom additions will be reverted.")) {
      resetToDefaults();
      showToast("Projects reset to original default portfolio showcase.");
    }
  };

  // Counts for filter pills
  const counts = {
    all: projects.length,
    mobile: projects.filter((p) => p.category === "mobile" || p.category === "app").length,
    web: projects.filter((p) => p.category === "web").length,
    desktop: projects.filter((p) => p.category === "desktop").length,
  };

  return (
    <section id="projects" className="projects-section section-spacing">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="portfolio-floating-toast">
          <Check size={16} className="text-cyan" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Applications & Software</span>
          </h2>
          <p className="section-subtitle">
            Explore live deployments, cross-platform mobile apps, dynamic web systems, and desktop utilities.
          </p>
        </div>

        {/* Admin Bar (Visible Only When Logged In) */}
        {isAuthenticated && (
          <div className="projects-admin-toolbar glass-card">
            <div className="admin-status-left">
              <div className="admin-badge-active">
                <ShieldCheck size={16} className="text-cyan" />
                <span>
                  Admin Mode: <strong>{user?.name || "Suhaib"}</strong>
                </span>
              </div>
            </div>

            <div className="admin-actions-right">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="btn-toolbar-ghost"
                title="Reset to default seed projects"
              >
                <RotateCcw size={14} />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="btn-primary btn-add-project"
              >
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter Tabs & Search Bar */}
        <div className="projects-controls-bar">
          <div className="filter-pill-container glass-card">
            <button
              type="button"
              className={`filter-pill ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              <span>All Projects</span>
              <span className="filter-count">{counts.all}</span>
            </button>

            <button
              type="button"
              className={`filter-pill ${activeFilter === "mobile" ? "active" : ""}`}
              onClick={() => setActiveFilter("mobile")}
            >
              <Smartphone size={15} />
              <span>Mobile Apps</span>
              <span className="filter-count">{counts.mobile}</span>
            </button>

            <button
              type="button"
              className={`filter-pill ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => setActiveFilter("web")}
            >
              <Globe size={15} />
              <span>Web Apps</span>
              <span className="filter-count">{counts.web}</span>
            </button>

            <button
              type="button"
              className={`filter-pill ${activeFilter === "desktop" ? "active" : ""}`}
              onClick={() => setActiveFilter("desktop")}
            >
              <Monitor size={15} />
              <span>Desktop</span>
              <span className="filter-count">{counts.desktop}</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="projects-search-box glass-card">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tech, title, or keywords..."
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="clear-search-btn"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty-state glass-card">
            <p className="empty-title">No projects found matching your criteria</p>
            <p className="empty-sub">Try changing the category filter or resetting your search query.</p>
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="btn-primary mt-3"
              >
                <Plus size={16} />
                <span>Create First Project Here</span>
              </button>
            )}
          </div>
        )}

        {/* Dynamic Project Cards Grid / List */}
        <div className="projects-showcase-grid">
          {filteredProjects.map((project, index) => {
            const isDesktopLayout =
              project.layoutType === "desktop" ||
              (!project.layoutType && (project.category === "web" || project.category === "desktop"));
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`project-showcase-card glass-card ${
                  isDesktopLayout ? "desktop-layout-card" : "mobile-layout-card"
                } ${isEven ? "card-row-reverse" : ""}`}
              >
                {/* 1. Device Mockup Column (Phone vs Desktop Window) */}
                <div className="project-device-column">
                  {isDesktopLayout ? (
                    /* Desktop macOS / Browser Window Mockup */
                    <div className="device-desktop project-device-frame">
                      <div className="desktop-titlebar">
                        <div className="desktop-window-dots">
                          <span className="dot dot-close" />
                          <span className="dot dot-minimize" />
                          <span className="dot dot-expand" />
                        </div>
                        <div className="desktop-url-bar">
                          <span className="url-lock">🔒</span>
                          <span className="url-text">
                            {project.liveUrl || (project.category === "web" ? "https://suhaib.dev" : "pulse-desktop.app")}
                          </span>
                        </div>
                        <div className="desktop-actions-placeholder" />
                      </div>

                      <div className="desktop-screen">
                        {project.mediaType === "image" ? (
                          <img
                            src={project.mediaSrc}
                            alt={project.name}
                            className="project-image-element"
                          />
                        ) : (
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
                        )}

                        {project.mediaType !== "image" && (
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
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Smartphone Device Frame */
                    <div className="device-phone project-device-frame">
                      <div className="device-island">
                        <div className="device-island-camera" />
                        <span className="island-indicator" />
                      </div>

                      <div className="device-glare" />

                      <div className="device-screen">
                        {project.mediaType === "image" ? (
                          <img
                            src={project.mediaSrc}
                            alt={project.name}
                            className="project-image-element"
                          />
                        ) : (
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
                        )}

                        {project.mediaType !== "image" && (
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
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Project Details Content */}
                <div className="project-content-column">
                  <div className="project-badge-row">
                    <div className="badge-group-left">
                      <span className="project-category-badge">{project.badge || "Featured"}</span>
                      <span className="category-kind-pill">
                        {project.category === "web" ? (
                          <>
                            <Globe size={12} /> Web
                          </>
                        ) : project.category === "desktop" ? (
                          <>
                            <Monitor size={12} /> Desktop
                          </>
                        ) : (
                          <>
                            <Smartphone size={12} /> Mobile
                          </>
                        )}
                      </span>
                    </div>

                    {/* Admin Actions (Edit / Delete) */}
                    {isAuthenticated && (
                      <div className="card-admin-action-buttons">
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(project)}
                          className="btn-card-admin edit-btn"
                          title="Edit this project"
                        >
                          <Pencil size={14} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(project.id, project.name)}
                          className={`btn-card-admin delete-btn ${
                            deleteConfirmId === project.id ? "confirming" : ""
                          }`}
                          title="Delete this project"
                        >
                          <Trash2 size={14} />
                          <span>{deleteConfirmId === project.id ? "Confirm?" : "Delete"}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <h3 className="project-title">{project.name}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle-text">{project.subtitle}</p>
                  )}

                  <p className="project-desc-paragraph">{project.shortDesc}</p>

                  {/* Tech Tags */}
                  <div className="project-tech-tags">
                    {project.techStack?.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Action Buttons */}
                  <div className="project-actions-group">
                    {/* Live Website (for Web) */}
                    {project.isLive && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary btn-live-action"
                      >
                        <ExternalLink size={16} />
                        <span>Live Website</span>
                      </a>
                    )}

                    {/* Google Play Store (for Mobile App) */}
                    {project.isLive && project.playstoreUrl && (
                      <a
                        href={project.playstoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary btn-playstore-action"
                      >
                        <ExternalLink size={16} />
                        <span>Google Play</span>
                      </a>
                    )}

                    {/* Apple App Store */}
                    {project.isLive && project.appstoreUrl && (
                      <a
                        href={project.appstoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        <ExternalLink size={16} />
                        <span>App Store</span>
                      </a>
                    )}

                    {/* Desktop / APK Download */}
                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary btn-download-action"
                      >
                        <Download size={16} />
                        <span>
                          {project.category === "desktop" ? "Download Software" : "Download APK"}
                        </span>
                      </a>
                    )}

                    {/* GitHub Repo */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary btn-github-action"
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Form Modal (Create / Edit) */}
      <ProjectFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        editingProject={editingProject}
      />

      {/* Admin Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={() => showToast("Admin authenticated successfully!")}
      />
    </section>
  );
};

export default Projects;
