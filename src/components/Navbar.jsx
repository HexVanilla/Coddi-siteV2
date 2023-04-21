import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import logoDark from "../img/logoDark.png";
import { CiLight, CiCircleQuestion, CiDark } from "react-icons/ci";

const Navbar = ({
  theme,
  setTheme,
  language,
  setLanguage,
  scrollToSection,
}) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">
        <img src={theme == "light" ? logoDark : logo} alt="" width="150px" />
      </div>
      <div className="navbar-links">
        <a onClick={() => scrollToSection("whatwedo")}>
          {language === "en" ? "What We Do" : "Lo que hacemos"}
        </a>
        <a onClick={() => scrollToSection("implementation")}>
          {language === "en" ? "Implementation" : "Implementación"}
        </a>
        <a onClick={() => scrollToSection("problem")}>
          {language === "en" ? "The Problem" : "El problema"}
        </a>
        <a onClick={() => scrollToSection("thetech")}>
          {language === "en" ? "The Tech" : "La tecnología"}
        </a>
        <a onClick={() => scrollToSection("theteam")}>
          {language === "en" ? "The Team" : "El equipo"}
        </a>
      </div>
      <div className="navbar-buttons">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme == "light" ? (
            <span className="material-icons">
              <CiDark className={theme} size={24} />{" "}
            </span>
          ) : (
            <span className="material-icons">
              <CiLight className={theme} size={24} />{" "}
            </span>
          )}
          {language === "en"
            ? theme === "light"
              ? " Dark"
              : " Light"
            : theme === "light"
            ? " Oscuro"
            : " Claro"}
          {language === "en" ? "Mode" : ""}
        </button>

        <button className="language-toggle" onClick={toggleLanguage}>
          <span className="material-icons">
            <CiCircleQuestion className={theme} size={24} />{" "}
          </span>
          {language === "en" ? "Español" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
