import React, { useState, useEffect, useRef } from "react";
import "./ProjectFormModal.css";
import { useProjects } from "../../context/ProjectContext";
import {
  X,
  Upload,
  Globe,
  Smartphone,
  Monitor,
  Check,
  Plus,
  Play,
  Pause,
  ExternalLink,
  Trash2,
  Sparkles,
  Layers,
  Video,
  Image as ImageIcon,
} from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";

const PRESET_TECH_TAGS = [
  "Flutter",
  "Dart",
  "Firebase",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "TypeScript",
  "Electron",
  "SQLite",
  "REST API",
  "Clean Architecture",
  "Bloc",
  "Provider",
  "Python",
];

const SAMPLE_DEMO_VIDEOS = [
  {
    name: "Coding Screen Demo",
    url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-41589-large.mp4",
  },
  {
    name: "Laptop Typing Demo",
    url: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-42999-large.mp4",
  },
  {
    name: "App Mobile Wireframe",
    url: "https://assets.mixkit.co/videos/preview/mixkit-mobile-application-screens-sliding-42358-large.mp4",
  },
];

const ProjectFormModal = ({ isOpen, onClose, editingProject = null }) => {
  const { addProject, updateProject } = useProjects();

  const [category, setCategory] = useState("web"); // "web" | "app" | "desktop"
  const [layoutType, setLayoutType] = useState("desktop"); // "mobile" | "desktop"
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [badge, setBadge] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [techStack, setTechStack] = useState(["Flutter", "Dart"]);
  const [customTagInput, setCustomTagInput] = useState("");

  // Links & isLive
  const [isLive, setIsLive] = useState(true);
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [playstoreUrl, setPlaystoreUrl] = useState("");
  const [appstoreUrl, setAppstoreUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  // Media
  const [mediaType, setMediaType] = useState("video"); // "video" | "image"
  const [mediaSrc, setMediaSrc] = useState("");
  const [mediaFileError, setMediaFileError] = useState("");
  const fileInputRef = useRef(null);

  // Initialize when opening or switching editing project
  useEffect(() => {
    if (editingProject) {
      setCategory(editingProject.category || (editingProject.platforms?.includes("Web") ? "web" : "app"));
      setLayoutType(editingProject.layoutType || (editingProject.category === "app" || editingProject.category === "mobile" ? "mobile" : "desktop"));
      setName(editingProject.name || "");
      setSubtitle(editingProject.subtitle || "");
      setBadge(editingProject.badge || "");
      setShortDesc(editingProject.shortDesc || "");
      setTechStack(editingProject.techStack || ["Flutter", "Dart"]);
      setIsLive(editingProject.isLive !== false);
      setLiveUrl(editingProject.liveUrl || editingProject.liveDemoUrl || "");
      setGithubUrl(editingProject.githubUrl || "");
      setPlaystoreUrl(editingProject.playstoreUrl || "");
      setAppstoreUrl(editingProject.appstoreUrl || "");
      setDownloadUrl(editingProject.downloadUrl || "");
      setMediaType(editingProject.mediaType || "video");
      setMediaSrc(editingProject.mediaSrc || "");
    } else {
      // Default initial states for new project
      resetForm("web");
    }
  }, [editingProject, isOpen]);

  const resetForm = (targetCategory = "web") => {
    setCategory(targetCategory);
    setLayoutType(targetCategory === "app" ? "mobile" : "desktop");
    setName("");
    setSubtitle("");
    setBadge(
      targetCategory === "web"
        ? "React & Web"
        : targetCategory === "app"
        ? "Flutter & Mobile"
        : "Flutter Desktop"
    );
    setShortDesc("");
    setTechStack(
      targetCategory === "web"
        ? ["React", "JavaScript", "CSS3"]
        : targetCategory === "app"
        ? ["Flutter", "Dart", "Firebase"]
        : ["Flutter Desktop", "Dart", "SQLite"]
    );
    setIsLive(true);
    setLiveUrl("");
    setGithubUrl("");
    setPlaystoreUrl("");
    setAppstoreUrl("");
    setDownloadUrl("");
    setMediaType("video");
    setMediaSrc(
      targetCategory === "app"
        ? SAMPLE_DEMO_VIDEOS[2].url
        : targetCategory === "web"
        ? SAMPLE_DEMO_VIDEOS[0].url
        : SAMPLE_DEMO_VIDEOS[1].url
    );
    setMediaFileError("");
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    // Auto sync layout unless user customized
    if (cat === "app") {
      setLayoutType("mobile");
      setBadge("Flutter & Mobile");
    } else if (cat === "web") {
      setLayoutType("desktop");
      setBadge("React & Web");
    } else {
      setLayoutType("desktop");
      setBadge("Flutter Desktop & Rust");
    }
  };

  const handleAddTag = (tag) => {
    const trimmed = tag.trim();
    if (trimmed && !techStack.includes(trimmed)) {
      setTechStack([...techStack, trimmed]);
    }
    setCustomTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTechStack(techStack.filter((t) => t !== tagToRemove));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMediaFileError("");
    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");

    if (!isVideo && !isImage) {
      setMediaFileError("Please upload a valid MP4/WebM video or image file.");
      return;
    }

    // Check size limit: for localStorage, file should ideally be small or url-based
    if (file.size > 25 * 1024 * 1024) {
      setMediaFileError("File is too large (>25MB). Please provide an external video/image URL or use a smaller clip.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      setMediaSrc(dataUrl);
      setMediaType(isVideo ? "video" : "image");
    };
    reader.onerror = () => {
      setMediaFileError("Failed to read file.");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please provide a project title");
      return;
    }

    const projectPayload = {
      name: name.trim(),
      subtitle: subtitle.trim() || `${badge} Project`,
      badge: badge.trim() || (category === "web" ? "Web App" : category === "app" ? "Mobile App" : "Desktop"),
      category,
      layoutType,
      mediaType,
      mediaSrc: mediaSrc.trim() || SAMPLE_DEMO_VIDEOS[0].url,
      shortDesc: shortDesc.trim() || "An innovative, high-performance application built with modern architecture.",
      techStack: techStack.length > 0 ? techStack : ["Technology"],
      platforms:
        category === "web"
          ? ["Web", "Chrome"]
          : category === "app"
          ? ["iOS", "Android"]
          : ["Windows", "macOS"],
      isLive,
      liveUrl: liveUrl.trim(),
      githubUrl: githubUrl.trim(),
      playstoreUrl: playstoreUrl.trim(),
      appstoreUrl: appstoreUrl.trim(),
      downloadUrl: downloadUrl.trim(),
    };

    if (editingProject && editingProject.id) {
      updateProject(editingProject.id, projectPayload);
    } else {
      addProject(projectPayload);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="project-modal-header">
          <div className="modal-title-box">
            <span className="modal-top-chip">
              <Sparkles size={14} />
              {editingProject ? "Update Project" : "New Showcase Creation"}
            </span>
            <h2 className="modal-heading">
              {editingProject ? `Edit: ${editingProject.name}` : "Add Project to Portfolio"}
            </h2>
          </div>
          <button onClick={onClose} className="modal-close-icon" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="project-modal-form">
          <div className="modal-scroll-area">
            {/* 1. Category Selection Tabs (Web / App / Desktop) */}
            <div className="category-selection-container">
              <label className="section-field-label">1. Select Project Type / Category</label>
              <div className="category-tabs-grid">
                <button
                  type="button"
                  onClick={() => handleCategoryChange("web")}
                  className={`category-tab-btn ${category === "web" ? "active" : ""}`}
                >
                  <Globe size={20} />
                  <div className="tab-text">
                    <strong className="tab-title">Web App</strong>
                    <span className="tab-sub">Websites, SaaS & PWAs</span>
                  </div>
                  {category === "web" && <Check size={16} className="active-check" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleCategoryChange("app")}
                  className={`category-tab-btn ${category === "app" ? "active" : ""}`}
                >
                  <Smartphone size={20} />
                  <div className="tab-text">
                    <strong className="tab-title">Mobile App</strong>
                    <span className="tab-sub">Flutter, iOS & Android</span>
                  </div>
                  {category === "app" && <Check size={16} className="active-check" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleCategoryChange("desktop")}
                  className={`category-tab-btn ${category === "desktop" ? "active" : ""}`}
                >
                  <Monitor size={20} />
                  <div className="tab-text">
                    <strong className="tab-title">Desktop App</strong>
                    <span className="tab-sub">Windows, macOS & Linux</span>
                  </div>
                  {category === "desktop" && <Check size={16} className="active-check" />}
                </button>
              </div>
            </div>

            {/* 2. Device Layout Frame & Media Mode */}
            <div className="form-card-section">
              <label className="section-field-label">2. Showcase Device Layout & Media</label>
              <div className="layout-picker-row">
                <div className="layout-picker-label">
                  <span>Display Frame Mockup:</span>
                </div>
                <div className="layout-radio-group">
                  <button
                    type="button"
                    onClick={() => setLayoutType("mobile")}
                    className={`layout-pill-btn ${layoutType === "mobile" ? "active" : ""}`}
                  >
                    <Smartphone size={16} />
                    <span>Mobile Phone Frame (9:18 Bezel)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLayoutType("desktop")}
                    className={`layout-pill-btn ${layoutType === "desktop" ? "active" : ""}`}
                  >
                    <Monitor size={16} />
                    <span>Desktop Browser Window Frame (16:9)</span>
                  </button>
                </div>
              </div>

              {/* Media Selection: Video vs Image */}
              <div className="media-source-grid">
                <div className="media-tabs-row">
                  <button
                    type="button"
                    onClick={() => setMediaType("video")}
                    className={`media-type-btn ${mediaType === "video" ? "active" : ""}`}
                  >
                    <Video size={16} />
                    <span>Video Showcase</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaType("image")}
                    className={`media-type-btn ${mediaType === "image" ? "active" : ""}`}
                  >
                    <ImageIcon size={16} />
                    <span>Image / Screenshot</span>
                  </button>
                </div>

                {/* Media URL Input */}
                <div className="form-group">
                  <label>Direct {mediaType === "video" ? "Video (MP4/WebM)" : "Image"} URL:</label>
                  <input
                    type="text"
                    value={mediaSrc}
                    onChange={(e) => setMediaSrc(e.target.value)}
                    placeholder={
                      mediaType === "video"
                        ? "https://example.com/demo.mp4"
                        : "https://images.unsplash.com/photo-..."
                    }
                  />
                </div>

                {/* Local File Upload Button */}
                <div className="upload-file-box">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept={mediaType === "video" ? "video/*" : "image/*"}
                    onChange={handleFileUpload}
                    className="hidden-file-input"
                    id="project-media-file"
                  />
                  <label htmlFor="project-media-file" className="file-upload-label">
                    <Upload size={18} />
                    <span>Upload {mediaType === "video" ? "Video File" : "Image"} from Device</span>
                  </label>
                  <span className="file-tip">Supports MP4, WebM, PNG, JPG, GIF</span>
                </div>

                {mediaFileError && <div className="media-error-msg">{mediaFileError}</div>}

                {/* Sample Presets */}
                <div className="sample-presets-box">
                  <span className="presets-label">Or Pick a Demo Video:</span>
                  <div className="presets-chips">
                    {SAMPLE_DEMO_VIDEOS.map((demo) => (
                      <button
                        key={demo.name}
                        type="button"
                        onClick={() => {
                          setMediaSrc(demo.url);
                          setMediaType("video");
                        }}
                        className="preset-chip-btn"
                      >
                        <Play size={12} />
                        <span>{demo.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Basic Information */}
            <div className="form-card-section">
              <label className="section-field-label">3. Project Information</label>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. SadaPay Mobile Wallet or SaaS Dashboard"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subtitle / Tagline</label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="e.g. Next-Gen Financial Banking Experience"
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label>Badge / Tech Label</label>
                  <input
                    type="text"
                    value={badge}
                    onChange={(e) => setBadge(e.target.value)}
                    placeholder="e.g. Flutter & Dart or React 18 & Vite"
                  />
                </div>

                <div className="form-group">
                  <label>GitHub Source Code URL (Optional)</label>
                  <div className="input-icon-wrapper">
                    <GithubIcon size={16} className="input-leading-icon" />
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/Suhaibusman/..."
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Short Description *</label>
                <textarea
                  rows={3}
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="Describe what the application does, key highlights, architecture, and user experience..."
                />
              </div>

              {/* Tech Stack Chips */}
              <div className="form-group">
                <label>Tech Stack & Tools</label>
                <div className="tech-chips-selected">
                  {techStack.map((tech) => (
                    <span key={tech} className="selected-tag-pill">
                      <span>{tech}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tech)}
                        className="remove-tag-btn"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                {/* Add Custom Tag */}
                <div className="add-tag-row">
                  <input
                    type="text"
                    value={customTagInput}
                    onChange={(e) => setCustomTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag(customTagInput);
                      }
                    }}
                    placeholder="Type custom tech tag and press Add"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddTag(customTagInput)}
                    className="btn-add-tag"
                  >
                    <Plus size={16} />
                    <span>Add</span>
                  </button>
                </div>

                {/* Quick preset suggestions */}
                <div className="preset-tags-list">
                  <span className="preset-label">Quick Add:</span>
                  {PRESET_TECH_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleAddTag(tag)}
                      className={`preset-pill ${techStack.includes(tag) ? "disabled" : ""}`}
                      disabled={techStack.includes(tag)}
                    >
                      +{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Dynamic Platform Specific Links */}
            <div className="form-card-section">
              <label className="section-field-label">4. Platform Deployment & Live Links</label>

              {/* Web specific fields */}
              {category === "web" && (
                <div className="platform-fields-box">
                  <div className="toggle-row">
                    <label className="toggle-switch-label">
                      <input
                        type="checkbox"
                        checked={isLive}
                        onChange={(e) => setIsLive(e.target.checked)}
                      />
                      <span className="slider-round" />
                    </label>
                    <div className="toggle-info">
                      <strong>Is Website Live / Deployed?</strong>
                      <span>Enable to showcase a direct Live Site link for visitors</span>
                    </div>
                  </div>

                  {isLive && (
                    <div className="form-group mt-3">
                      <label>Live Website URL *</label>
                      <div className="input-icon-wrapper">
                        <Globe size={16} className="input-leading-icon text-cyan" />
                        <input
                          type="url"
                          value={liveUrl}
                          onChange={(e) => setLiveUrl(e.target.value)}
                          placeholder="https://mywebapp.vercel.app"
                          required={isLive}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile App specific fields */}
              {category === "app" && (
                <div className="platform-fields-box">
                  <div className="toggle-row">
                    <label className="toggle-switch-label">
                      <input
                        type="checkbox"
                        checked={isLive}
                        onChange={(e) => setIsLive(e.target.checked)}
                      />
                      <span className="slider-round" />
                    </label>
                    <div className="toggle-info">
                      <strong>Published on Google Play Store / App Store?</strong>
                      <span>Check if users can install the live mobile application</span>
                    </div>
                  </div>

                  {isLive && (
                    <div className="form-grid-2col mt-3">
                      <div className="form-group">
                        <label>Google Play Store URL</label>
                        <input
                          type="url"
                          value={playstoreUrl}
                          onChange={(e) => setPlaystoreUrl(e.target.value)}
                          placeholder="https://play.google.com/store/apps/details?id=..."
                        />
                      </div>
                      <div className="form-group">
                        <label>Apple App Store URL (Optional)</label>
                        <input
                          type="url"
                          value={appstoreUrl}
                          onChange={(e) => setAppstoreUrl(e.target.value)}
                          placeholder="https://apps.apple.com/app/..."
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-group mt-2">
                    <label>Direct APK / Demo Link (Optional)</label>
                    <input
                      type="url"
                      value={downloadUrl}
                      onChange={(e) => setDownloadUrl(e.target.value)}
                      placeholder="https://github.com/.../releases/app-release.apk"
                    />
                  </div>
                </div>
              )}

              {/* Desktop specific fields */}
              {category === "desktop" && (
                <div className="platform-fields-box">
                  <div className="toggle-row">
                    <label className="toggle-switch-label">
                      <input
                        type="checkbox"
                        checked={isLive}
                        onChange={(e) => setIsLive(e.target.checked)}
                      />
                      <span className="slider-round" />
                    </label>
                    <div className="toggle-info">
                      <strong>Direct Download / Installer Available?</strong>
                      <span>Provide .exe, .dmg, or GitHub release download</span>
                    </div>
                  </div>

                  {isLive && (
                    <div className="form-group mt-3">
                      <label>Desktop App Download / Release URL</label>
                      <div className="input-icon-wrapper">
                        <ExternalLink size={16} className="input-leading-icon text-cyan" />
                        <input
                          type="url"
                          value={downloadUrl}
                          onChange={(e) => setDownloadUrl(e.target.value)}
                          placeholder="https://github.com/.../releases/latest"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="project-modal-footer">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-primary modal-save-btn">
              <Check size={18} />
              <span>{editingProject ? "Save Changes" : "Publish Project"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormModal;
