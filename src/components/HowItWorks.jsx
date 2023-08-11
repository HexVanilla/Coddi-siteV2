import React from "react";
import "./TheProblem.css";
import gifDark from "../img/WebGif_monitoring_black.gif";
import gifLight from "../img/WebGif_monitoring.gif";

const HowItWorks = ({ theme, language }) => {
  return (
    <section className={`problem-section ${theme} `}>
      <div className="problem-content2">
        <img src={theme == "light" ? gifLight : gifDark} alt="" />
        <div>
          {language == "en" ? <h1>How It Works?</h1> : <h2>¿Cómo Funciona?</h2>}

          {language == "en" ? (
            <div>
              <p>
                Nuestro sistema se conecta con los resultados de monitoreo y
                genera diagnósticos precisos a través de una API. Estos
                diagnósticos se basan en patrones aprendidos por la IA
                generativa, lo que garantiza recomendaciones coherentes y
                confiables.
              </p>
              <p>
                En Coddi, estamos comprometidos con la innovación continua y la
                entrega de soluciones tecnológicas que marcan la diferencia.
                Únete a nosotros en esta emocionante revolución en el monitoreo
                de condición de equipos en la industria minera.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Our system interfaces with monitoring results and generates
                accurate diagnostics through an API. These diagnostics are based
                on patterns learned by the generative AI, ensuring consistent
                and reliable recommendations.
              </p>
              <p>
                At Coddi, we are committed to continuous innovation and
                delivering technological solutions that make a difference. Join
                us in this exciting revolution in equipment condition monitoring
                within the mining industry.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
