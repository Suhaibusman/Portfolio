import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { useAuth } from "../../context/AuthContext";
import LoginModal from "../auth/LoginModal";
import {
  Smartphone,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  LogOut,
  User,
  Plus,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";
import confetti from "canvas-confetti";

const Navbar = ({ theme, toggleTheme }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ["hero", "aboutme", "projects", "skills", "github", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.2 },
        colors: ["#6366f1", "#06b6d4", "#8b5cf6", "#10b981"],
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }
    window.open(PERSONAL_INFO.cvFile, "_blank");
  };

  const navLinks = [
    { name: "About", href: "#aboutme" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#skills" },
    { name: "GitHub Stats", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="navbar-brand">
            <div className="brand-icon-box">
              <Smartphone className="brand-phone-icon" size={20} />
            </div>
            <div className="brand-text-wrapper">
              <span className="brand-name">
                Suhaib<span className="brand-dot">.dev</span>
              </span>
              <span className="brand-role">Flutter & FullStack Dev</span>
            </div>
          </a>

          {/* Live Availability Pill (Desktop) */}
          <a href="#contact" className="nav-availability-pill">
            <span className="live-beacon"></span>
            <span className="availability-text">Available for contracts</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${
                      activeSection === link.href.replace("#", "") ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="navbar-actions">
            {/* Admin Authentication Trigger */}
            {isAuthenticated ? (
              <div className="nav-admin-profile-pill">
                <span className="admin-status-dot" />
                <span className="admin-user-title">{user?.name?.split(" ")[0] || "Suhaib"}</span>
                <button
                  type="button"
                  onClick={logout}
                  className="nav-admin-logout-btn"
                  title="Logout Admin"
                  aria-label="Logout"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoginModalOpen(true)}
                className="btn-admin-nav-login"
                title="Admin Login & Project Manager"
              >
                <ShieldCheck size={15} />
                <span className="hide-on-mobile-xs">Admin</span>
              </button>
            )}

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle light or dark theme"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="theme-icon sun-icon" />
              ) : (
                <Moon size={18} className="theme-icon moon-icon" />
              )}
            </button>

            {/* Resume Download CTA */}
            <button
              onClick={handleDownloadCV}
              className="btn-resume"
              title="Download Suhaib's CV"
            >
              <Download size={15} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
          <div className="mobile-drawer-content">
            <div className="mobile-availability-box">
              <span className="live-beacon"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}

              {/* Admin option in mobile drawer */}
              <li className="mobile-nav-item mobile-admin-nav-row">
                {isAuthenticated ? (
                  <div className="mobile-logged-in-box">
                    <span>Logged in as <strong>{user?.name}</strong></span>
                    <button onClick={logout} className="btn-secondary btn-sm mt-1">
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="mobile-admin-login-btn"
                  >
                    <ShieldCheck size={16} />
                    <span>Admin Login & Project Manager</span>
                  </button>
                )}
              </li>
            </ul>

            <div className="mobile-drawer-footer">
              <button onClick={handleDownloadCV} className="btn-primary w-full">
                <Download size={18} />
                <span>Download Full CV</span>
              </button>
              <div className="mobile-socials-row">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-icon"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-icon"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-icon"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Login Modal from Navbar */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
