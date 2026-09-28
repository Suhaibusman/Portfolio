import React from "react";
import "./MetricsBar.css";
import { METRICS } from "../../data/portfolioData";
import { Smartphone, Star, ShieldCheck, GitBranch } from "lucide-react";

const MetricsBar = () => {
  const getIcon = (iconName, accent) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="metric-icon" size={24} />;
      case "Star":
        return <Star className="metric-icon text-amber" size={24} />;
      case "ShieldCheck":
        return <ShieldCheck className="metric-icon text-emerald" size={24} />;
      case "GitBranch":
        return <GitBranch className="metric-icon text-cyan" size={24} />;
      default:
        return <Smartphone className="metric-icon" size={24} />;
    }
  };

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {METRICS.map((metric) => (
            <div key={metric.id} className="metric-card glass-card">
              <div className={`metric-icon-box accent-${metric.accent}`}>
                {getIcon(metric.icon, metric.accent)}
              </div>
              <div className="metric-content">
                <strong className="metric-value">{metric.value}</strong>
                <span className="metric-label">{metric.label}</span>
                <p className="metric-desc">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
