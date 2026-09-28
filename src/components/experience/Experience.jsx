import React, { useState } from "react";
import "./Experience.css";
import { EXPERIENCE_TIMELINE, TESTIMONIALS, PERSONAL_INFO } from "../../data/portfolioData";
import CertificateModal from "./CertificateModal";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Award,
  Star,
  Quote,
  ExternalLink,
  Users,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="experience" className="experience-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Track Record & Impact</span>
          </div>
          <h2 className="section-title">
            Experience, <span className="gradient-text">Leadership & Credentials</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated excellence across global client deliveries, technical developer communities, and verified professional certifications.
          </p>
        </div>

        {/* Timeline & Impact Columns */}
        <div className="experience-layout-grid">
          {/* Vertical Timeline */}
          <div className="timeline-container">
            <div className="timeline-track" />

            {EXPERIENCE_TIMELINE.map((item, index) => (
              <div key={item.id} className="timeline-item-row">
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <span className="marker-inner-dot" />
                  </div>
                </div>

                <div className="timeline-card-wrapper">
                  <div className="timeline-card glass-card">
                    <div className="timeline-card-header">
                      <div>
                        <div className="timeline-badge-row">
                          <span className="timeline-badge">{item.badge}</span>
                          <span className="timeline-period font-mono">{item.period}</span>
                        </div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <strong className="timeline-company">{item.company}</strong>
                      </div>

                      {item.image && (
                        <button
                          onClick={() =>
                            setSelectedCertificate({
                              title: item.role,
                              issuer: item.company,
                              image: item.image,
                            })
                          }
                          className="btn-cert-preview"
                          title="View Verified Credential"
                        >
                          <Award size={16} />
                          <span>View Credential</span>
                        </button>
                      )}
                    </div>

                    <ul className="timeline-highlights">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="text-emerald shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials & Client Reviews Column */}
          <div className="testimonials-column">
            <div className="testimonials-header glass-panel">
              <div className="rating-score-box">
                <strong className="score-num">4.9</strong>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" fill="#f59e0b" />
                  ))}
                </div>
                <span className="rating-label">Top Rated Across Freelance Platforms</span>
              </div>
            </div>

            <div className="testimonials-list">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="testimonial-card glass-card">
                  <div className="testimonial-top">
                    <div className="quote-icon-box">
                      <Quote size={20} className="text-cyan" />
                    </div>
                    <div className="stars-row">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  <p className="testimonial-text">"{t.text}"</p>

                  <div className="testimonial-author">
                    <strong className="author-name">{t.name}</strong>
                    <span className="author-role">{t.role}</span>
                    <span className="author-project">Project: {t.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default Experience;
