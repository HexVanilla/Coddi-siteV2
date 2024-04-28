import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import logoDark from "../img/logoDark.png";
import { CiLight, CiCircleQuestion, CiDark } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">
        <img src={theme == "light" ? logoDark : logo} alt="" width="150px" />
      </div>
      <div className={`navbar-links${isMenuOpen ? " open" : ""}`}>
        {/*<a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("whatwedo")}
        >
          {language === "en" ? "What We Do" : "Lo que hacemos"}
  </a>*/}
        <a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("predictive")}
        >
          {language === "en"
            ? " Predictive Maintenance"
            : "Mantenimiento Predictivo"}
        </a>
        <a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("condition")}
        >
          {language === "en" ? "Condition Monitoring" : "Monitoreo Condición"}
        </a>

        <a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("ourclients")}
        >
          {language === "en" ? "Our Clients" : "Clientes"}
        </a>
        <a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("theteam")}
        >
          {language === "en" ? "The Team" : "El equipo"}
        </a>
        <a
          style={isMenuOpen ? { fontSize: "1.5rem", lineHeight: "2" } : {}}
          onClick={() => scrollToSection("news")}
        >
          {language === "en" ? "News" : "Noticias"}
        </a>
      </div>
      <AiOutlineMenu
        className={`hamburger-menu ${theme}`} // Add the className attribute here
        onClick={toggleMenu}
      />

      <div className="navbar-buttons">
        <a href="http://app.coddi.ai" style={{ textDecoration: "none" }}>
          <div className="app-button">AI App</div>
        </a>
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
