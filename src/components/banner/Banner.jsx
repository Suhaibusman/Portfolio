import React from "react";
import "./Banner.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { Heart, Globe2 } from "lucide-react";

const Banner = () => {
  return (
    <div className="top-ticker-banner">
      <div className="banner-inner container">
        <div className="banner-flag-wrapper">
          <img
            src={PERSONAL_INFO.palestineFlag}
            alt="Palestine Flag"
            className="banner-flag"
          />
        </div>
        <div className="banner-text-content">
          <span className="banner-label">Solidarity & Peace</span>
          <span className="banner-divider">•</span>
          <span className="banner-phrase">
            Standing in solidarity with Palestine 🇵🇸 | Advocating for human rights, peace & freedom worldwide.
          </span>
        </div>
        <div className="banner-heart-wrapper">
          <Heart size={14} className="banner-heart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
