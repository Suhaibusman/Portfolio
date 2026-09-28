import React, { useState } from "react";
import "./HeroSection.css";
import { PERSONAL_INFO, METRICS } from "../../data/portfolioData";
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Download,
  MessageSquare,
  Mail,
  Zap,
  ShieldCheck,
  Layers,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Send,
  Eye,
  EyeOff,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";

const HeroSection = () => {
  // Interactive state for hero phone simulator
  const [balance, setBalance] = useState(14850.75);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [recentTransfers, setRecentTransfers] = useState([
    { id: 1, name: "Flutter Store Revenue", type: "income", amount: "+$850.00", time: "Just now" },
    { id: 2, name: "Firebase Cloud Sync", type: "expense", amount: "-$42.50", time: "2h ago" },
    { id: 3, name: "Upwork Milestone #4", type: "income", amount: "+$1,200.00", time: "Yesterday" },
  ]);
  const [animatingTransfer, setAnimatingTransfer] = useState(false);

  const handleSimulateTransfer = () => {
    if (animatingTransfer) return;
    setAnimatingTransfer(true);
    setTimeout(() => {
      setBalance((prev) => prev + 250);
      setRecentTransfers((prev) => [
        {
          id: Date.now(),
          name: "Instant Client P2P",
          type: "income",
          amount: "+$250.00",
          time: "Just now",
        },
        ...prev.slice(0, 2),
      ]);
      setAnimatingTransfer(false);
    }, 450);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Availability Pill */}
          <div className="hero-badge-row">
            <div className="live-badge">
              <span className="live-beacon" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
            <span className="hero-specialization-pill">
              <Zap size={14} className="text-cyan" />
              <span>Cross-Platform Flutter & Native Specialist</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Architecting <span className="gradient-text">60FPS Mobile Apps</span> with Precision & Fluidity.
          </h1>

          {/* Subheading / Bio */}
          <p className="hero-description">
            Hi, I'm <strong className="highlight-text">{PERSONAL_INFO.name}</strong> — a Senior Mobile Application Engineer based in {PERSONAL_INFO.location}. I transform complex ideas into high-performance, responsive iOS & Android mobile architectures with clean BLoC/Riverpod state and sub-100ms API sync.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>Explore Featured Apps</span>
              <ArrowRight size={18} />
            </a>

            <a href="#playpen" className="btn-secondary">
              <Smartphone size={18} className="text-cyan" />
              <span>Interactive Sandbox</span>
            </a>

            <a href="#contact" className="btn-outline-glow">
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick-Action Social Links Matrix */}
          <div className="hero-social-matrix">
            <span className="social-label">Connect & Verify:</span>
            <div className="social-links-grid">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="GitHub Repositories"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.upworkUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card upwork-card"
                title="Upwork Top Rated Profile"
              >
                <span className="upwork-badge">Top Rated</span>
                <span>Upwork</span>
              </a>

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                title="Fiverr Freelance Profile"
              >
                <span>Fiverr</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card whatsapp-card"
                title="Direct WhatsApp Chat"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero-social-card"
                title="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Phone Mockup Showcase */}
        <div className="hero-visual-wrapper">
          {/* Orbiting Feature Badges */}
          <div className="orbit-pill orbit-pill-1 animate-float">
            <Zap size={16} className="text-cyan" />
            <div>
              <strong>60 FPS</strong>
              <span>Fluid Rendering</span>
            </div>
          </div>

          <div className="orbit-pill orbit-pill-2 animate-float" style={{ animationDelay: "1.5s" }}>
            <Layers size={16} className="text-violet" />
            <div>
              <strong>Clean Architecture</strong>
              <span>BLoC / Riverpod</span>
            </div>
          </div>

          <div className="orbit-pill orbit-pill-3 animate-float" style={{ animationDelay: "3s" }}>
            <ShieldCheck size={16} className="text-emerald" />
            <div>
              <strong>Offline-First</strong>
              <span>SQLite Cache Sync</span>
            </div>
          </div>

          {/* 3D Isometric Phone Frame Container */}
          <div className="hero-phone-3d-stage">
            <div className="hero-phone-device device-phone">
              {/* Top Dynamic Island */}
              <div className="device-island">
                <div className="device-island-camera" />
                <span className="island-indicator" />
              </div>

              {/* Gloss Reflection Overlay */}
              <div className="device-glare" />

              {/* Inside Screen Content - Live Interactive SadaPay Fintech Simulation */}
              <div className="device-screen hero-simulated-screen">
                {/* Simulated App Header */}
                <div className="app-screen-header">
                  <div className="app-user-info">
                    <img
                      src={PERSONAL_INFO.photo}
                      alt={PERSONAL_INFO.name}
                      className="app-user-avatar"
                    />
                    <div>
                      <span className="app-greeting">Good evening,</span>
                      <strong className="app-username">Suhaib U.</strong>
                    </div>
                  </div>
                  <div className="app-status-badge">
                    <span className="live-beacon" />
                    <span>Live UI</span>
                  </div>
                </div>

                {/* Animated Virtual Debit Card */}
                <div className="virtual-card-widget">
                  <div className="card-top-row">
                    <span className="card-bank-name">SadaPay Black</span>
                    <CreditCard size={18} className="card-chip-icon" />
                  </div>

                  <div className="card-balance-box">
                    <span className="balance-label">Total Balance</span>
                    <div className="balance-amount-row">
                      <strong className="balance-value">
                        ${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </strong>
                      <button
                        onClick={() => setShowCardNumber(!showCardNumber)}
                        className="btn-card-toggle"
                        title="Toggle Card Number"
                      >
                        {showCardNumber ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="card-bottom-row">
                    <span className="card-number-mask">
                      {showCardNumber ? "4532 •••• •••• 9104" : "•••• •••• •••• 9104"}
                    </span>
                    <span className="card-expiry">08/29</span>
                  </div>
                </div>

                {/* Quick Interactive Actions */}
                <div className="app-actions-row">
                  <button
                    onClick={handleSimulateTransfer}
                    className={`app-action-btn ${animatingTransfer ? "btn-transferring" : ""}`}
                    disabled={animatingTransfer}
                  >
                    <Send size={15} />
                    <span>{animatingTransfer ? "Transferring..." : "Send $250"}</span>
                  </button>

                  <a href="#playpen" className="app-action-btn action-secondary">
                    <Sparkles size={15} />
                    <span>Switch App</span>
                  </a>
                </div>

                {/* Live Transactions Feed */}
                <div className="app-transactions-section">
                  <div className="transactions-header">
                    <span>Recent Activity</span>
                    <span className="trans-count">Live Stream</span>
                  </div>

                  <div className="transactions-list">
                    {recentTransfers.map((tx) => (
                      <div key={tx.id} className="transaction-item">
                        <div className="trans-icon-box">
                          <TrendingUp size={14} />
                        </div>
                        <div className="trans-info">
                          <span className="trans-name">{tx.name}</span>
                          <span className="trans-time">{tx.time}</span>
                        </div>
                        <span className={`trans-amount ${tx.type}`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Phone Bottom Navigation */}
                <div className="app-bottom-dock">
                  <span className="dock-item active">●</span>
                  <span className="dock-item">●</span>
                  <span className="dock-item">●</span>
                  <span className="dock-item">●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
