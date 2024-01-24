import React from "react";
import palestineflag from "../../Images/palestineflag.webp";
import "./banner.scss";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner">
      <Typewriter
        words={["Supporting Palestine.", "Israel is terrorist illegal state."]}
        loop
        typeSpeed={60}
        deleteSpeed={30}
        delaySpeed={3000}
      />{" "}
      <img src={palestineflag} alt="" />
    </div>
  );
};

export default Banner;
