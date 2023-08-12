import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";
import "./Solutions.css";
import Implementation from "./Implementation";
import TheProblem from "./TheProblem";
import TheTech from "./TheTech";
import Optimizing from "./Optimizing";
import KeyBenefits from "./KeyBenefits";
import HowItWorks from "./HowItWorks";

const Solutions = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.03 });
  return (
    <div className={`${isVisible ? "fade-in" : "fade-out"}`} ref={sectionRef}>
      <div className={`solutions-section ${theme}`} id="predictive">
        {language == "en" ? (
          <>
            <h1 style={{ marginRight: 10 }}>Predictive</h1>
            <h1>Maintenance</h1>
          </>
        ) : (
          <>
            <h1 style={{ marginRight: 10 }}>Mantenimiento</h1>
            <h1>Predictivo</h1>
          </>
        )}{" "}
      </div>

      <Implementation theme={theme} language={language} />
      <TheProblem theme={theme} language={language} />
      <TheTech theme={theme} language={language} />
      <div className={`solutions-section ${theme}`} id="condition">
        {language == "en" ? (
          <>
            <h1>Condition Monitoring</h1>
          </>
        ) : (
          <>
            <h1>Monitoreo por Condición</h1>
          </>
        )}{" "}
      </div>
      <Optimizing theme={theme} language={language} />
      <KeyBenefits theme={theme} language={language} />
      <HowItWorks theme={theme} language={language} />
    </div>
  );
};

export default Solutions;
