import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";
import "./Solutions.css";
import Implementation from "./Implementation";
import TheProblem from "./TheProblem";
import TheTech from "./TheTech";
import Optimizing from "./Optimizing";
import KeyBenefits from "./KeyBenefits";
import HowItWorks from "./HowItWorks";
import KeyBenefitsPredictive from "./KeyBenefits_predictive";
import KeyMetrics from "./KeyMetrics";
import bg from "../img/background.jpg";

const Solutions = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.03 });
  return (
    <div className={`${isVisible ? "fade-in" : "fade-out"}`} ref={sectionRef}>
      <div className={`solutions-section ${theme}`} id="predictive">
        {language == "en" ? (
          <>
            <p>
              Coddi empowers industrial companies with cutting-edge AI-driven
              predictive maintenance and condition monitoring solutions,
              minimizing downtime, reducing costs, and maximizing equipment
              reliability and operational efficiency.
            </p>
          </>
        ) : (
          <>
            <p>
              Coddi empodera a las empresas con soluciones de mantenimiento
              predictivo y monitoreo de condiciones impulsadas por IA de última
              generación, minimizando tiempos detenidos, reduciendo costos y
              maximizando la confiabilidad de los activos y la eficiencia
              operativa.
            </p>
          </>
        )}{" "}
      </div>

      <Implementation theme={theme} language={language} />
      <TheProblem theme={theme} language={language} />
      <KeyBenefitsPredictive theme={theme} language={language} />
      <TheTech theme={theme} language={language} />
      <div className={`solutions-section ${theme}`} id="condition"></div>
      <Optimizing theme={theme} language={language} />
      <KeyBenefits theme={theme} language={language} />
      <KeyMetrics theme={theme} language={language} />
      <HowItWorks theme={theme} language={language} />
    </div>
  );
};

export default Solutions;
