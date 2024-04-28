import React from "react";
import "./WhatWeDo.css";
import bg from "../img/background.jpg";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";
const WhatWeDo = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <section
      id="whatwedo"
      className={`whatwedo-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <div className={`whatwedo-content ${theme}`}>
        {language == "en" ? (
          <h1>What we do?</h1>
        ) : (
          <h1>
            <span className="desktop-only">¿Qué hacemos?</span>
            <span className="mobile-only">¿Qué</span>
            <br className="mobile-only" />
            <span className="mobile-only">hace-</span>{" "}
            <span className="mobile-only">mos?</span>
          </h1>
        )}

        {language == "en" ? (
          <div>
            {" "}
            <p>
              Coddi empowers industrial companies with cutting-edge AI-driven
              predictive maintenance and condition monitoring solutions,
              minimizing downtime, reducing costs, and maximizing equipment
              reliability and operational efficiency.
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <p>
              Coddi empodera a las empresas con soluciones de mantenimiento
              predictivo y monitoreo de condiciones impulsadas por IA de última
              generación, minimizando tiempos detenidos, reduciendo costos y
              maximizando la confiabilidad de los activos y la eficiencia
              operativa.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
