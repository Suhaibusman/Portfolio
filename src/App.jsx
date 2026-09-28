import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import TechArsenal from "./components/techarsenal/TechArsenal";
import GithubStats from "./components/githubstats/GithubStats";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
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

        {/* 2. About Me */}
        <Aboutme />

        {/* 3. Featured Mobile Applications (Real Video Showcases) */}
        <Projects />

        {/* 4. Technical Skills */}
        <TechArsenal />

        {/* 5. Live GitHub Activity Heatmap */}
        <GithubStats />

        {/* 6. Contact & Direct Inquiry */}
        <Contact />
      </main>

      {/* 7. Cyber Footer */}
      <Footer />
    </div>
  );
};

export default App;
