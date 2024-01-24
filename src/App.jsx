import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Herosection from "./components/herosection/Herosection";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

import GithubStats from "./components/githubstats/GithubStats";
import Banner from "./components/banner/Banner";


const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      
      <div className="app" button={toggleTheme} id={theme}>
        <Banner />
        <Navbar button={toggleTheme} name={theme} />
        <Herosection />
        <Aboutme />
        <Projects />

        <GithubStats />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
