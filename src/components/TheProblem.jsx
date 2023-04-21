import React from "react";
import "./TheProblem.css";
import gifDark from "../img/gifDark.gif";
import gifLight from "../img/gifLight.gif";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const TheProblem = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <section
      id="problem"
      className={`problem-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <div className="problem-content2">
        <img src={theme == "light" ? gifLight : gifDark} alt="" width="50%" />
        <div>
          {language == "en" ? (
            <h1>What is the problem we are solving?</h1>
          ) : (
            <h1>¿Cuál es el problema que estamos resolviendo?</h1>
          )}

          {language == "en" ? (
            <div>
              {" "}
              <p>
                Our company provides predictive maintenance services without
                adding any extra sensors to your assets. We use three sources of
                information, including operation variables condition variables,
                and maintenance events. Our ML models correlate this data to
                calculate the remaining useful life (RUL) and the probability of
                failure in the next 30 days.
              </p>
              <p>
                The results are presented in a user-friendly dashboard, enabling
                our clients to make informed maintenance decisions to prevent
                costly equipment failures in their mining operations.
              </p>
            </div>
          ) : (
            <div>
              {" "}
              <p>
                Nuestra empresa brinda servicios de mantenimiento predictivo sin
                agregar cualquier sensor adicional a sus activos. Utilizamos
                tres fuentes de información, incluidas las variables de
                operación, las variables de condición, y eventos de
                mantenimiento.
              </p>
              <p>
                Nuestros modelos ML correlacionan estos datos con calcular la
                vida útil remanente (RUL) y la probabilidad de fracaso en los
                próximos 30 días. Los resultados se presentan en un Tablero
                fácil de usar, que permite a nuestros clientes tomar decisiones
                informadas decisiones de mantenimiento para evitar costosas
                fallas en los equipos sus operaciones mineras.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
