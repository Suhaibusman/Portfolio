import React from "react";
import "./Footer.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  Smartphone,
  ArrowUp,
  MessageCircle,
  Mail,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="brand-icon-box">
                <Smartphone size={20} />
              </div>
              <span className="brand-name">
                Suhaib<span className="brand-dot">.dev</span>
              </span>
            </div>
            <p className="footer-brand-bio">
              Flutter Developer based in {PERSONAL_INFO.location}. Crafting fluid, responsive mobile apps and modern web interfaces with clean code.
            </p>
            <div className="footer-live-status">
              <span className="live-beacon" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4>Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Tech Stack</a></li>
              <li><a href="#github">GitHub Stats</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Socials & Connect Col */}
          <div className="footer-social-col">
            <h4>Connect Directly</h4>
            <div className="footer-social-icons">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="footer-social-btn"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="footer-verified-pill">
              <ShieldCheck size={14} className="text-emerald" />
              <span>Upwork Top-Rated & Verified Dev</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved. Designed & Engineered with modern React & Flutter standards.
          </p>

          <button onClick={scrollToTop} className="btn-back-to-top" title="Scroll to Top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
