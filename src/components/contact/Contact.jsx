import React, { useState } from "react";
import "./Contact.css";
import { PERSONAL_INFO, FAQS } from "../../data/portfolioData";
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  Copy,
  Check,
  Calendar,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Phone,
  ShieldCheck,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Mobile App",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const projectTypes = [
    "Full Mobile App",
    "Figma to Flutter UI",
    "Bug Fixing & 60FPS",
    "Consulting / Architecture",
  ];

  const budgetOptions = ["<$1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000+"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#06b6d4", "#10b981"],
      });
    } catch {}

    // Prepare mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Suhaib,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\n\nProject Overview:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Let's Build Together</span>
          </div>
          <h2 className="section-title">
            Have a Mobile Vision? <span className="gradient-text">Let's Bring It to Life.</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a full-scale mobile app from scratch, a 60FPS UI overhaul, or architectural consulting, I'm ready to collaborate.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Inquiry Channels */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3>Direct Channels</h3>
              <p className="contact-card-sub">Quickest response within 4 hours.</p>

              <div className="direct-channels-list">
                {/* Email Item */}
                <div className="channel-item">
                  <div className="channel-icon-box bg-indigo">
                    <Mail size={18} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Email Address</span>
                    <strong className="channel-val">{PERSONAL_INFO.email}</strong>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-copy-action"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="channel-item">
                  <div className="channel-icon-box bg-emerald">
                    <MessageSquare size={18} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">WhatsApp (Direct Chat)</span>
                    <strong className="channel-val">{PERSONAL_INFO.phone}</strong>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-copy-action"
                    title="Open WhatsApp Chat"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Location Item */}
                <div className="channel-item">
                  <div className="channel-icon-box bg-cyan">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Primary Location</span>
                    <strong className="channel-val">{PERSONAL_INFO.location}</strong>
                  </div>
                  <span className="font-mono text-xs text-muted">UTC+5</span>
                </div>
              </div>

              {/* Verified Platform Badges */}
              <div className="freelance-links-box">
                <span className="box-title">Verified Freelance Profiles:</span>
                <div className="freelance-badges-row">
                  <a
                    href={PERSONAL_INFO.upworkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="platform-badge-link upwork"
                  >
                    <span className="status-dot-green" />
                    <span>Upwork (Top Rated)</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={PERSONAL_INFO.fiverrUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="platform-badge-link fiverr"
                  >
                    <span>Fiverr (Level 2)</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="platform-badge-link linkedin"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="guarantees-card glass-panel">
              <div className="guarantee-item">
                <ShieldCheck size={18} className="text-emerald" />
                <div>
                  <strong>NDA & Code Ownership</strong>
                  <span>Full intellectual property transfer upon project sign-off.</span>
                </div>
              </div>

              <div className="guarantee-item">
                <Clock size={18} className="text-cyan" />
                <div>
                  <strong>Daily Asynchronous Updates</strong>
                  <span>Continuous TestFlight / APK builds via automated CI/CD.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <h3>Project Inquiry Form</h3>
                  <p className="form-subtext">Fill out your requirements for a free estimation and architecture proposal.</p>

                  {/* Project Scope Chips */}
                  <div className="form-group">
                    <label className="form-label">Project Scope / Requirement</label>
                    <div className="chips-selector-row">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`scope-chip ${
                            formData.projectType === type ? "selected" : ""
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget Chips */}
                  <div className="form-group">
                    <label className="form-label">Estimated Budget (USD)</label>
                    <div className="chips-selector-row">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`scope-chip budget ${
                            formData.budget === b ? "selected" : ""
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="form-inputs-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-name">
                        Your Name *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="form-text-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="client-email">
                        Your Email *
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@startup.com"
                        className="form-text-input"
                      />
                    </div>
                  </div>

                  {/* Project Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-msg">
                      Project Details & Timeline
                    </label>
                    <textarea
                      id="client-msg"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your app vision, target platforms (iOS/Android), and deadline..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full btn-submit-inquiry">
                    <Send size={18} />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="form-success-state">
                  <div className="success-icon-wrapper">
                    <Sparkles size={40} className="text-cyan" />
                  </div>
                  <h3>Thank You, {formData.name}!</h3>
                  <p>
                    Your inquiry for <strong>{formData.projectType}</strong> has been drafted. I will review your requirements and respond with a technical scope within 4-12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Full Mobile App",
                        budget: "$1,000 - $3,000",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Client FAQs Accordion */}
        <div className="faqs-section-wrapper">
          <div className="faqs-header">
            <span className="faq-tag">Questions & Answers</span>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="faqs-accordion-grid">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item glass-card ${isOpen ? "open" : ""}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="faq-question-btn"
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
