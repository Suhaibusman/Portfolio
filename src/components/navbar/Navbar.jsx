import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../Images/logo.png";
import bars from "../../Images/bars.png";
import gitfork from "../../assets/gitfork.svg";
import close from "../../Images/close.png";
import ThemeMode from "../thememode/ThemeMode";
import { Link as ScrollLink } from "react-scroll";
import cvFile from "../../assets/SuhaibCv.pdf";

import { Link as RouterLink } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);

  const handleDownloadCVClick = () => {
    window.open(cvFile, "_blank");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav className={active ? "navbar active" : "navbar"}>
      <div className="left">
        {/* <img src={logo} alt="" /> */}
        <h1 className="animate-charcter">Suhaib</h1>
      </div>

      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={20}
        onClick={closeMenu}
      >
        <div className="afp">
          <span className="dot" />
          <span>Available for projects</span>
        </div>
      </ScrollLink>

      <div className="forkandmenu">
        <button onClick={handleDownloadCVClick} className="resumebutton"> Resume</button>
        <div className="responsivemenu" onClick={handleClick}>
          {!click ? (
            <img src={bars} alt="" className="menu" />
          ) : (
            <img src={close} alt="" className="menu" />
          )}
        </div>
      </div>

      {click && (
        <div className="responsivemenuu">
          <div className="right">
            <ul className="navitems">
              <a
                href="https://github.com/MuhammadZohaib28/portfolio"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                <div className="fork">
                  <img
                    src={gitfork}
                    alt="gitfork logo"
                    className="gitforkimg"
                  />
                  <span>Fork</span>
                </div>
              </a>
              <li className="navitem">
                <ScrollLink
                  to="navbar"
                  spy={true}
                  smooth={true}
                  offset={-11170}
                  duration={20}
                  onClick={closeMenu}
                >
                  Home
                </ScrollLink>
              </li>{" "}
              {/* <hr /> */}
              <li className="navitem">
                <ScrollLink
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  About
                </ScrollLink>
              </li>{" "}
              {/* <hr /> */}
              <li className="navitem">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Projects
                </ScrollLink>
              </li>{" "}
              {/* <hr /> */}

              {/* <hr /> */}
              <li className="navitem">
                <ScrollLink
                  to="githubstats"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  GitHub Stats
                </ScrollLink>
              </li>{" "}
              {/* <hr /> */}
              <li className="navitem">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Contact
                </ScrollLink>
              </li>{" "}
              {/* <hr /> */}
              <li className="navitem toggle" onClick={props.button}>
                <ThemeMode />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
