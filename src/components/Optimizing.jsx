import React from "react";
import "./Implementation.css";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const Optimizing = ({ theme, language }) => {
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
          <>
            <h1>
              Optimizing the Future of Mining with Accurate and Efficient
              Diagnostics!
            </h1>
          </>
        ) : (
          <h1>
            ¡Optimizando el Futuro de la Minería con Diagnósticos Precisos y
            Eficientes!
          </h1>
        )}

        {language == "en" ? (
          <div>
            <p>
              Welcome to our groundbreaking service, Condition Monitoring
              through Generative Artificial Intelligence. At Coddi, we are
              constantly exploring innovative ways to enhance efficiency,
              safety, and reliability in the mining industry. Our latest
              implementation combines the power of artificial intelligence with
              equipment condition monitoring, taking decision-making to an
              entirely new level.
            </p>
            <h1>What We Offer</h1>
            <p>
              Our Condition Monitoring service is built on cutting-edge
              technology, integrating powerful generative artificial
              intelligence with the Microsoft Azure cloud platform. This allows
              us to generate precise and detailed diagnostics from monitoring
              results, providing deep insights into equipment status.
            </p>
          </div>
        ) : (
          <div>
            <p>
              Bienvenido a nuestro revolucionario servicio de Monitoreo de
              Condición mediante Inteligencia Artificial Generativa. Estamos en
              constante búsqueda de formas innovadoras para mejorar la
              eficiencia, la seguridad y la confiabilidad en la industria
              minera. Nuestra última implementación combina la potencia de la
              inteligencia artificial con el monitoreo de condición de equipos,
              llevando la toma de decisiones a un nivel completamente nuevo.
            </p>
            <h2>¿Qué Ofrecemos?</h2>
            <p>
              Nuestro servicio de Monitoreo de Condición se basa en tecnología
              de punta, integrando la potente inteligencia artificial generativa
              con la plataforma en la nube Microsoft Azure. Esto nos permite
              generar diagnósticos precisos y detallados a partir de los
              resultados de monitoreo, brindando una comprensión profunda del
              estado de los equipos.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Optimizing;
