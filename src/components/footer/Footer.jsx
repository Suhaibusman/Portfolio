import React from "react";
import "./footer.scss";
import logo from "../../Images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="left">
        {/* <img src={logo} alt="" /> */}
        <h1 className="animate-charcter">Suhaib</h1>


      </div>

      <div className="right">
        <span>
          Thank you so much for your most precious time, I am glad that you
          scrolled till end! ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footer;
