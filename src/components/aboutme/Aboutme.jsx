import React from "react";
import "./aboutme.scss";
import aboutmeee from "../../Images/aboutmee.svg";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="container">
        <div className="left">
          <img src={aboutmeee} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <h1>About Me</h1>
          </div>
          <div className="mid">
            <h2>
              A dedicated Flutter Developer based in Karachi, Pakistan. 📍
            </h2>
          </div>
          <div className="bottom">
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in <span className="pspan">HTML5</span> ,{" "}
              <span className="pspan">CSS3</span>,{" "}
              <span className="pspan">JavaScript</span>,{" "}
              <span className="pspan">Flutter</span> ,{" "}
              <span className="pspan">Dart</span>, and{" "}
              <span className="pspan">Firebase</span>. I excel in designing and
              maintaining <span className="pspan">responsive websites</span>{" "}
              that offer a smooth user experience. My expertise lies in crafting
              <span className="pspan">dynamic</span>, engaging interfaces
              through writing <span className="pspan">clean</span> and{" "}
              <span className="pspan">optimized code</span> and utilizing
              cutting-edge development tools and techniques. I am also a{" "}
              <span className="pspan">team player</span>
              who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
