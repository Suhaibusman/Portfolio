import React, { useState } from "react";
import "./LoginModal.css";
import { useAuth } from "../../context/AuthContext";
import { Lock, User, KeyRound, X, ShieldCheck, AlertCircle } from "lucide-react";

const LoginModal = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter both username and password");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const result = login(username, password);
      setIsSubmitting(false);

      if (result.success) {
        if (onSuccess) onSuccess();
        onClose();
      } else {
        setError(result.message);
      }
    }, 400);
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="login-modal-header">
          <div className="login-title-wrapper">
            <div className="login-shield-badge">
              <ShieldCheck size={20} className="text-cyan" />
            </div>
            <div>
              <h3 className="login-title">Admin Authentication</h3>
              <p className="login-subtitle">Unlock project management & uploads</p>
            </div>
          </div>
          <button onClick={onClose} className="login-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="login-error-alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <div className="input-with-icon">
              <User size={16} className="input-icon" />
              <input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="off"
                autoFocus
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Master Password</label>
            <div className="input-with-icon">
              <KeyRound size={16} className="input-icon" />
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>

          <div className="login-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn-cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary login-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Lock size={16} />
                  <span>Authorize & Login</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
