import React from "react";
import "./KeyBenefits.css";

import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const KeyBenefits = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <div
      className={`key-benefits ${theme} ${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}
    >
      <h1>{language == "en" ? "Key Benefits" : "Beneficios Clave"}</h1>
      <div className="key-row">
        <h2>
          {language == "en" ? "Precise Diagnostics" : "Diagnósticos Precisos"}
        </h2>
        <div className="vl"></div>
        <p>
          {language == "en"
            ? "With our generative AI technology, we derive diagnostics from real data and patterns, ensuring accurate results and avoiding guesswork."
            : "Con nuestra tecnología de IA generativa, obtenemos diagnósticos basados en datos reales y patrones, lo que garantiza resultados precisos y evita suposiciones."}
        </p>
        <h2>
          {language == "en" ? "Operational Efficiency" : "Eficiencia Operativa"}
        </h2>
        <div className="vl"></div>
        <p>
          {language == "en"
            ? "Automated diagnostic generation streamlines decision-making, reducing analysis time and enhancing operational efficiency."
            : "La generación automática de diagnósticos agiliza el proceso de toma de decisiones, reduciendo el tiempo de análisis y mejorando la eficiencia operativa."}
        </p>
        <h2>{language == "en" ? "Cost Reduction" : "Reducción de Costos"}</h2>
        <div className="vl"></div>
        <p>
          {language == "en"
            ? "By sidestepping manual analysis, our clients experience reduced operational costs and increased data reliability."
            : "Al evitar análisis manuales, nuestros clientes experimentan una reducción en costos operativos y un aumento en la confiabilidad de los datos."}
        </p>
      </div>
      <div className="key-row">
        <h2>
          {language == "en"
            ? "Maintenance Optimization"
            : "Optimización del Mantenimiento"}
        </h2>
        <div className="vl"></div>
        <p>
          {language == "en"
            ? "Detailed diagnostics aid in planning and executing maintenance more effectively, minimizing downtime."
            : "Los diagnósticos detallados permiten planificar y ejecutar el mantenimiento de manera más efectiva, minimizando el tiempo de inactividad."}
        </p>
        <h2> {language == "en" ? "Enhanced Safety" : "Mayor Seguridad"}</h2>
        <div className="vl"></div>
        <p>
          {language == "en"
            ? "Early detection of potential issues contributes to worker safety and overall operational security."
            : "La detección temprana de problemas potenciales contribuye a la seguridad de los trabajadores y las operaciones en general."}
        </p>
      </div>
    </div>
  );
};

export default KeyBenefits;
