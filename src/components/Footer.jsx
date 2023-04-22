// src/components/Footer.js

import React from "react";
import "./Footer.css";
import logo from "../img/logo.png";
import logoDark from "../img/logoDark.png";
import { FaLinkedin } from "react-icons/fa";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";
import hub from "../img/hub.png";

const Footer = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <footer
      id="footer"
      className={`footer-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <h1>{language == "en" ? "Let's Talk" : "Hablemos"}</h1>

      <hr className="divider" />
      <div className="footer-columns">
        <div className="column">
          <h2>info@coddi.ai</h2>
        </div>
        <div className="column">
          <img src={hub} alt="" width="240px" />
        </div>
        <div className="column">
          <a
            href="https://www.linkedin.com/company/coddi_pmd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="linkedin">
              <FaLinkedin className={theme} size={32} />{" "}
              {/* Set the icon size */}
              <p>coddi_pmd</p>
            </div>
          </a>
        </div>
        <div className="column">
          <img src={theme == "light" ? logoDark : logo} alt="Coddi Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
