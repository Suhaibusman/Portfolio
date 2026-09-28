import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import MetricsBar from "./components/metrics/MetricsBar";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import AppPlaypen from "./components/playpen/AppPlaypen";
import TechArsenal from "./components/techarsenal/TechArsenal";
import Experience from "./components/experience/Experience";
import GithubStats from "./components/githubstats/GithubStats";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  // Theme state: dark by default (2026 dark-mode-first aesthetic)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme;
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app-root theme ${theme}`}>
      {/* Micro-dot ambient mesh grid background */}
      <div className="ambient-mesh" />

      {/* Top Solidarity & Awareness Ticker */}
      <Banner />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Digital Showcase Content */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Metrics & Highlights Bar */}
        <MetricsBar />

        {/* 3. Architect Profile & Bio */}
        <Aboutme />

        {/* 4. Featured Mobile Applications (Core Case Studies) */}
        <Projects />

        {/* 5. Interactive Mobile App Simulator / Playpen */}
        <AppPlaypen />

        {/* 6. Technical Arsenal & Architecture Matrix */}
        <TechArsenal />

        {/* 7. Experience, Certifications & Testimonials */}
        <Experience />

        {/* 8. Live GitHub Activity Calendar */}
        <GithubStats />

        {/* 9. Contact & Work Inquiry Suite + FAQ */}
        <Contact />
      </main>

      {/* 10. Cyber Footer */}
      <Footer />
    </div>
  );
};

export default App;
