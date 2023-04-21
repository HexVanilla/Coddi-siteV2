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
        {language == "en" ? <h1>What we do?</h1> : <h1>¿Qué hacemos?</h1>}

        {language == "en" ? (
          <div>
            {" "}
            <p>
              Coddi specializes in providing AI-based predictive maintenance
              services for high-value assets in the mining industry. Our
              services use advanced machine learning algorithms to analyze data
              on mining equipment, including metrics such as vibration,
              temperature, and pressure.
            </p>
            <p>
              By detecting patterns and anomalies in the data, we can predict
              maintenance needs and schedule repairs proactively, helping mining
              companies optimize maintenance schedules, minimize equipment
              downtime, and save costs.
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <p>
              Coddi se especializa en proporcionar mantenimiento predictivo
              basado en IA servicios para activos de alto valor en la industria
              minera. Nuestros servicios use algoritmos avanzados de aprendizaje
              automático para analizar datos sobre minería equipo, incluidas
              métricas como vibración, temperatura y presión.
            </p>
            <p>
              Al detectar patrones y anomalías en los datos, podemos predecir
              las necesidades de mantenimiento y programar las reparaciones de
              forma proactiva, ayudando las empresas mineras optimizan los
              programas de mantenimiento, minimizan los equipos tiempo de
              inactividad y ahorrar costes.
            </p>
          </div>
        )}

        <button className="cta-button">
          {language == "en" ? "Learn More" : "Aprende más"}
        </button>
      </div>
    </section>
  );
};

export default WhatWeDo;
