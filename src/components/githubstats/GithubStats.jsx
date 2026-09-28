import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubStats.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { GitBranch, Star, GitPullRequest, Code2, ExternalLink, Sparkles } from "lucide-react";

const GithubStats = () => {
  return (
    <section id="github" className="github-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GitBranch size={14} />
            <span>Open Source & Activity</span>
          </div>
          <h2 className="section-title">
            Real-Time <span className="gradient-text">GitHub Contribution</span> Flow
          </h2>
          <p className="section-subtitle">
            Consistent open-source contributions, clean commits, and modular repository engineering.
          </p>
        </div>

        {/* GitHub Glass Container */}
        <div className="github-stats-card glass-card">
          <div className="github-card-header">
            <div className="github-user-badge">
              <span className="github-icon-box">
                <Code2 size={18} />
              </span>
              <div>
                <strong>@Suhaibusman</strong>
                <span>Continuous Mobile Engineering</span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-glow"
            >
              <span>Explore All Repos</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Calendar Heatmap Container */}
          <div className="github-calendar-wrapper">
            <GitHubCalendar
              username="Suhaibusman"
              fontSize={13}
              blockSize={14}
              blockMargin={5}
              blockRadius={3}
              colorScheme="dark"
              theme={{
                dark: ["#0d121f", "#1e1b4b", "#4338ca", "#6366f1", "#06b6d4"],
                light: ["#f1f5f9", "#c7d2fe", "#818cf8", "#6366f1", "#06b6d4"],
              }}
              labels={{
                totalCount: "{{count}} contributions recorded in recent year",
              }}
            />
          </div>

          {/* Quick Metrics Matrix */}
          <div className="github-quick-chips">
            <div className="gh-chip">
              <GitPullRequest size={15} className="text-cyan" />
              <span>Clean Pull Requests & Git Flows</span>
            </div>
            <div className="gh-chip">
              <Star size={15} className="text-amber" />
              <span>Public Repositories & Starred Packages</span>
            </div>
            <div className="gh-chip">
              <Sparkles size={15} className="text-violet" />
              <span>100% Documented Architectures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
