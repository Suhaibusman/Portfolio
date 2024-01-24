"use client";
import React, { useContext } from "react";
import "./thememode.css";
import { ThemeContext } from "../../context/ThemeContext";
const ThemeMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="themetogglebtn"
      onClick={toggle}
      style={
        mode === "light"
          ? { border: "2px solid black" }
          : { border: "2px solid white" }
      }
    >
      <div className="icon">🌞</div>
      <div className="icon">🌙</div>
      <div
        className="ball"
        style={mode === "light" ? { right: "2.8rem" } : { left: "2.8rem" }}
      />
    </div>
  );
};

export default ThemeMode;
