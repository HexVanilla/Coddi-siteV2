import React from "react";
import "./Implementation.css";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const Implementation = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <section
      id="implementation"
      className={`implementation-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <div className="implementation-content">
        {language == "en" ? (
          <h1>
            <span className="desktop-only">Implementation</span>{" "}
            <span className="mobile-only">Implem-</span>
            <br className="mobile-only" />
            <span className="mobile-only">entation</span> Process
          </h1>
        ) : (
          <h1>
            Proceso de{" "}
            <span className="desktop-only mobile-break">implementación</span>
            <span className="mobile-only">implem-</span>
            <br className="mobile-only" />
            <span className="mobile-only">entación</span>
          </h1>
        )}

        {language == "en" ? (
          <div>
            <p>
              We offer a two-stage implementation process. During the first
              stage, which typically lasts between 12 and 16 weeks, we work with
              our clients to collect data on their mining equipment, including
              operation variables, condition variables, and maintenance events.
              The collected data can be consumed by our system from various
              sources and is used to train and validate our ML models.
            </p>
            <p>
              We recognize that some mining companies may have limited
              information on their maintenance and repair history, which can
              affect the accuracy of our predictive models.
            </p>
            <p>
              To address this challenge, we recommend implementing best
              practices for data collection and condition monitoring to improve
              data quality and quantity.
            </p>
          </div>
        ) : (
          <div>
            <p>
              Ofrecemos un proceso de implementación en dos etapas. Durante la
              primera etapa, que normalmente dura entre 12 y 16 semanas,
              trabajamos con nuestro clientes para recopilar datos sobre sus
              equipos de minería, incluida la operación variables, variables de
              condición y eventos de mantenimiento.
            </p>
            <p>
              Lo recogido Nuestro sistema puede consumir datos de varias fuentes
              y se utilizan para entrenar y validar nuestros modelos ML.
              Reconocemos que algunas actividades mineras las empresas pueden
              tener información limitada sobre su mantenimiento y reparación
              historial, lo que puede afectar la precisión de nuestros modelos
              predictivos.
            </p>
            <p>
              A enfrentar este desafío, recomendamos implementar las mejores
              prácticas para recopilación de datos y monitoreo de condiciones
              para mejorar la calidad de los datos y cantidad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Implementation;
