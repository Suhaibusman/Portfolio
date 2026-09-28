import React, { createContext, useContext, useState, useEffect } from "react";
import { MOBILE_PROJECTS } from "../data/portfolioData";

const ProjectContext = createContext();

const STORAGE_KEY = "portfolio_projects_v2";

// High quality initial seed data containing Web, Mobile, and Desktop projects
const SEED_PROJECTS = [
  ...MOBILE_PROJECTS.map((p) => ({
    ...p,
    category: "mobile",
    layoutType: "mobile",
    mediaType: "video",
    isLive: false,
    playstoreUrl: "",
    appstoreUrl: "",
    liveUrl: p.liveDemoUrl || "",
    downloadUrl: "",
    createdAt: new Date().toISOString(),
  })),
  {
    id: "nexus-saas-web",
    name: "Nexus SaaS Analytics Dashboard 🌐",
    subtitle: "High-Performance Cloud Analytics Platform",
    badge: "React & Next.js",
    category: "web",
    layoutType: "desktop",
    mediaType: "video",
    mediaSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-41589-large.mp4",
    techStack: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    platforms: ["Web", "Chrome", "Safari"],
    shortDesc:
      "A modern web application featuring real-time financial analytics, customizable telemetry widgets, multi-tenant workspace management, and high-performance charting.",
    isLive: true,
    liveUrl: "https://example.com/nexus-dashboard",
    githubUrl: "https://github.com/Suhaibusman",
    playstoreUrl: "",
    appstoreUrl: "",
    downloadUrl: "",
    createdAt: new Date().toISOString(),
  },
  {
    id: "pulse-desktop-suite",
    name: "Pulse Studio Desktop 💻",
    subtitle: "Cross-Platform Flutter Desktop Suite",
    badge: "Flutter Desktop & Rust",
    category: "desktop",
    layoutType: "desktop",
    mediaType: "video",
    mediaSrc: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-42999-large.mp4",
    techStack: ["Flutter Desktop", "Dart", "Rust FFI", "SQLite", "Material 3"],
    platforms: ["Windows", "macOS", "Linux"],
    shortDesc:
      "High-throughput native desktop client engineered with Flutter Desktop. Includes offline local SQLite storage, system tray integration, background sync, and ultra-low latency audio/file processing.",
    isLive: true,
    liveUrl: "https://github.com/Suhaibusman",
    githubUrl: "https://github.com/Suhaibusman",
    playstoreUrl: "",
    appstoreUrl: "",
    downloadUrl: "https://github.com/Suhaibusman/releases/latest",
    createdAt: new Date().toISOString(),
  },
];

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Load from localStorage or initialize with seed data
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Re-map video assets for mobile defaults if needed
          const hydrated = parsed.map((item) => {
            const seedMatch = SEED_PROJECTS.find((s) => s.id === item.id);
            if (seedMatch && !item.mediaSrc.startsWith("data:") && !item.mediaSrc.startsWith("http")) {
              return { ...item, mediaSrc: seedMatch.mediaSrc };
            }
            return item;
          });
          setProjects(hydrated);
          return;
        }
      }
      setProjects(SEED_PROJECTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PROJECTS));
    } catch (e) {
      console.error("Failed to load projects", e);
      setProjects(SEED_PROJECTS);
    }
  }, []);

  // Save to localStorage whenever projects change
  const saveProjects = (updatedList) => {
    setProjects(updatedList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch (err) {
      console.warn("Storage quota exceeded or error saving to localStorage", err);
    }
  };

  // Add Project
  const addProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: projectData.id || `proj_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newProject, ...projects];
    saveProjects(updated);
    return newProject;
  };

  // Update Project
  const updateProject = (id, updatedData) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
    saveProjects(updated);
  };

  // Delete Project
  const deleteProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
  };

  // Reset to default sample projects
  const resetToDefaults = () => {
    saveProjects(SEED_PROJECTS);
  };

  // Export JSON
  const exportProjectsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `portfolio_projects_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const importProjectsJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed)) {
        saveProjects(parsed);
        return { success: true, count: parsed.length };
      }
      return { success: false, message: "Invalid JSON format: expected an array of projects" };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // Filtered & Searched Projects
  const filteredProjects = projects.filter((p) => {
    // Filter by Category
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "mobile" && (p.category === "mobile" || p.category === "app")) ||
      activeFilter === p.category;

    // Filter by Search Query
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesFilter;

    const matchesSearch =
      p.name?.toLowerCase().includes(query) ||
      p.subtitle?.toLowerCase().includes(query) ||
      p.shortDesc?.toLowerCase().includes(query) ||
      p.techStack?.some((t) => t.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  return (
    <ProjectContext.Provider
      value={{
        projects,
        filteredProjects,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        addProject,
        updateProject,
        deleteProject,
        resetToDefaults,
        exportProjectsJSON,
        importProjectsJSON,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
