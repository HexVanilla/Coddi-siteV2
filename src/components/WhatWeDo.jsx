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
              At Coddi, we are at the forefront of revolutionizing maintenance
              strategies for the mining industry through cutting-edge AI-driven
              solutions. Our specialized services empower mining companies to
              optimize equipment reliability, minimize downtime, and enhance
              operational efficiency.
            </p>
            <h2>AI-Powered Predictive Maintenance</h2>
            <p>
              Harnessing the power of advanced machine learning algorithms, we
              delve into the intricacies of your mining equipment's data. Our AI
              systems analyze crucial metrics like vibration, temperature, and
              pressure, spotting patterns and anomalies that predict maintenance
              needs. By anticipating issues before they escalate, we enable you
              to schedule repairs proactively and save valuable resources.
            </p>
            <h2>Generative AI for Precise Condition Monitoring</h2>
            <p>
              Our innovative generative AI application takes condition
              monitoring to the next level. Through automatic prompt generation,
              we provide you with precise diagnostic results from condition
              monitoring techniques. This comprehensive insight into equipment
              health empowers you to make well-informed decisions about
              maintenance and investments, ensuring your mining assets perform
              optimally. Discover the future of maintenance strategies with
              Coddi's AI expertise. Join us in reshaping the mining industry by
              unlocking the potential of AI-driven predictive maintenance and
              condition monitoring.
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <p>
              En Coddi, estamos a la vanguardia de la revolución de las
              estrategias de mantenimiento para la industria minera a través de
              soluciones de vanguardia impulsadas por la IA. Nuestros servicios
              especializados empoderan a las compañías mineras para optimizar la
              confiabilidad de los equipos, minimizar los tiempos de inactividad
              y mejorar la eficiencia operativa.
            </p>
            <h2>Mantenimiento Predictivo Impulsado por IA</h2>
            <p>
              Aprovechando el poder de algoritmos avanzados de aprendizaje
              automático, profundizamos en las complejidades de los datos de sus
              equipos mineros. Nuestros sistemas de IA analizan métricas
              cruciales como vibración, temperatura y presión, identificando
              patrones y anomalías que predicen las necesidades de
              mantenimiento. Al anticipar problemas antes de que escalen, le
              permitimos programar reparaciones de manera proactiva y ahorrar
              recursos valiosos.
            </p>
            <h2>IA Generativa para un Monitoreo Preciso de la Condición</h2>
            <p>
              Nuestra innovadora aplicación de IA generativa lleva el monitoreo
              de la condición al siguiente nivel. A través de la generación
              automática de indicaciones, le proporcionamos resultados de
              diagnóstico precisos de técnicas de monitoreo de la condición.
              Esta comprensión integral de la salud del equipo le permite tomar
              decisiones bien informadas sobre el mantenimiento y las
              inversiones, asegurando el rendimiento óptimo de sus activos
              mineros. Descubra el futuro de las estrategias de mantenimiento
              con la experiencia en IA de Coddi. Únase a nosotros para
              transformar la industria minera desbloqueando el potencial del
              mantenimiento predictivo impulsado por IA y el monitoreo de la
              condición.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
