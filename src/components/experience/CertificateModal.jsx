import React from "react";
import "./CertificateModal.css";
import { X, ExternalLink, Award, ShieldCheck } from "lucide-react";

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-header-info">
            <span className="cert-tag">Verified Professional Credential</span>
            <h3>{certificate.title}</h3>
            <span className="cert-issuer">Issued by: {certificate.issuer}</span>
          </div>
          <button onClick={onClose} className="cert-close-btn" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="cert-modal-body">
          <div className="cert-image-container">
            <img src={certificate.image} alt={certificate.title} className="cert-full-img" />
          </div>

          <div className="cert-modal-footer">
            <div className="cert-verified-badge">
              <ShieldCheck size={16} className="text-emerald" />
              <span>Cryptographically Verified Credential</span>
            </div>
            <a
              href="https://www.linkedin.com/in/suhaibusman/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-sm"
            >
              <span>Verify on LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
