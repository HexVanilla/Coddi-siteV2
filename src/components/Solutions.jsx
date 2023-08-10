import React from "react";
import "./Solutions.css";
import Implementation from "./Implementation";
import TheProblem from "./TheProblem";
import TheTech from "./TheTech";

const Solutions = ({ theme, language }) => {
  return (
    <div id="solutions">
      <div className={`solutions-section ${theme}`}>
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
    </div>
  );
};

export default Solutions;
