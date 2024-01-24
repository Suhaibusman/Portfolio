import React from "react";
import "./herosection.scss";
import hand from "../../Images/hand.png";
import linkedin from "../../Images/linkedIn.png";
import github from "../../Images/github.png";
import upwork from "../../Images/upwork.png";
import fiverrlogo from "../../Images/fiverrlogo.webp";
import zohaibpicture from "../../Images/suhaibsPicture.png";
import { techstack } from "./data";

const Herosection = () => {
  return (
    <div className="hero">
      <div className="top">
        <div className="left">
          <div className="designation">
            <h1>
              Flutter Developer
              <span>
                <img src={hand} alt="" />
              </span>
            </h1>
          </div>
          <div className="desc">
            <p>
              Hi, I'm <span className="name">Muhammad Suhaib Usman</span>. A
              passionate Flutter Developer based in Karachi, Pakistan.
              📍
            </p>
          </div>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/suhaibusman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="firstchild" />
            </a>

            <a
              href="https://github.com/Suhaibusman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="lastchild" />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~015f706a438a826586"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={upwork} alt="" className="firstchild upwork" />
            </a>

            <a
              href="https://www.fiverr.com/suhaibusman?up_rollout=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fiverrlogo} alt="" className="firstchild upwork" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src={zohaibpicture} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>Tech Stack</span>
          <span className="borderright" />
        </div>
        <div className="right">
          {techstack.map((item) => {
            return (
              <div className="container rotate-scale-up" key={item.id}>
                <img src={item.name} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
