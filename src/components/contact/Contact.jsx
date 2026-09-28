import React, { useState } from "react";
import "./Contact.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "../common/BrandIcons";
import confetti from "canvas-confetti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendChannel, setSendChannel] = useState("whatsapp"); // "whatsapp" | "email"
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } catch {}

    if (sendChannel === "whatsapp") {
      // Direct WhatsApp alert to Suhaib's number
      const cleanPhone = "923112136120";
      const waText = encodeURIComponent(
        `👋 *New Inquiry from Portfolio*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n\n` +
        `💬 *Message:*\n${formData.message}\n\n` +
        `— Sent via Suhaib.dev Portfolio`
      );
      window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${waText}`, "_blank");
    } else {
      // Email submission fallback
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Suhaib,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");
    }

    setFormSubmitted(true);
  };

  const contactLinks = [
    {
      id: "location",
      title: "Location",
      value: PERSONAL_INFO.location,
      icon: <MapPin size={20} className="text-cyan" />,
      action: null,
    },
    {
      id: "email",
      title: "Email",
      value: PERSONAL_INFO.email,
      icon: <Mail size={20} className="text-indigo" />,
      copy: handleCopyEmail,
      copied: copiedEmail,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: PERSONAL_INFO.phoneDisplay,
      icon: <WhatsAppIcon size={20} className="text-emerald" />,
      link: PERSONAL_INFO.whatsappUrl,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "Muhammad Suhaib Usman",
      icon: <LinkedinIcon size={20} />,
      link: PERSONAL_INFO.linkedinUrl,
    },
    {
      id: "github",
      title: "GitHub",
      value: "Suhaibusman",
      icon: <GithubIcon size={20} />,
      link: PERSONAL_INFO.githubUrl,
    },
    {
      id: "upwork",
      title: "Upwork",
      value: "Suhaib U. (Freelance)",
      icon: <ExternalLink size={20} />,
      link: PERSONAL_INFO.upworkUrl,
    },
    {
      id: "fiverr",
      title: "Fiverr",
      value: "suhaibusman",
      icon: <ExternalLink size={20} />,
      link: PERSONAL_INFO.fiverrUrl,
    },
    {
      id: "facebook",
      title: "Facebook",
      value: "Suhaib Usman",
      icon: <ExternalLink size={20} />,
      link: PERSONAL_INFO.facebookUrl,
    },
    {
      id: "instagram",
      title: "Instagram",
      value: "S U H A I B ツ",
      icon: <ExternalLink size={20} />,
      link: PERSONAL_INFO.instagramUrl,
    },
  ];

  return (
    <section id="contact" className="contact-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Don't be shy! <span className="gradient-text">Hit me up! 👇</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for project inquiries, freelance work, or full-time opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout-grid">
          {/* Left: Contact Info Grid */}
          <div className="contact-cards-col">
            <div className="contact-links-grid">
              {contactLinks.map((item) => (
                <div key={item.id} className="contact-info-card glass-card">
                  <div className="contact-card-icon-box">
                    {item.icon}
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-item-title">{item.title}</span>
                    <strong className="contact-item-value">{item.value}</strong>
                  </div>

                  {item.copy && (
                    <button
                      onClick={item.copy}
                      className="btn-copy-icon"
                      title={`Copy ${item.title}`}
                    >
                      {item.copied ? (
                        <Check size={16} className="text-emerald" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-link-icon"
                      title={`Open ${item.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Direct Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="inquiry-form-header">
                    <h3>Send a Direct Message</h3>
                    <p className="form-subtext">Direct alert sends straight to my WhatsApp or Email.</p>
                  </div>

                  {/* Channel Toggle (WhatsApp vs Email) */}
                  <div className="channel-selector-row">
                    <span className="channel-select-label">Send Alert To:</span>
                    <div className="channel-pill-group">
                      <button
                        type="button"
                        onClick={() => setSendChannel("whatsapp")}
                        className={`channel-pill-btn ${sendChannel === "whatsapp" ? "active-whatsapp" : ""}`}
                      >
                        <WhatsAppIcon size={16} />
                        <span>WhatsApp (Instant)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendChannel("email")}
                        className={`channel-pill-btn ${sendChannel === "email" ? "active-email" : ""}`}
                      >
                        <Mail size={16} />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="user-name">Your Name *</label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="form-text-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="user-email">Your Email *</label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="form-text-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="user-message">Message *</label>
                    <textarea
                      id="user-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project details or message here..."
                      className="form-textarea"
                    />
                  </div>

                  {sendChannel === "whatsapp" ? (
                    <button type="submit" className="btn-primary w-full btn-submit-whatsapp">
                      <WhatsAppIcon size={18} />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  ) : (
                    <button type="submit" className="btn-primary w-full">
                      <Send size={18} />
                      <span>Send via Email</span>
                    </button>
                  )}
                </form>
              ) : (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <Check size={28} className="text-emerald" />
                  </div>
                  <h3>Thank You, {formData.name}!</h3>
                  <p>
                    {sendChannel === "whatsapp" ? (
                      <>Your message was routed directly to Suhaib's <strong>WhatsApp ({PERSONAL_INFO.phoneDisplay})</strong>.</>
                    ) : (
                      <>Your message was drafted directly to <strong>{PERSONAL_INFO.email}</strong>.</>
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
