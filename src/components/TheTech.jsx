import React from "react";
import "./TheTech.css";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const TheTech = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <section
      id="thetech"
      className={`thetech-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <div className="video-overlay"></div>
      <div className="video-container">
        <iframe
          className="tech-video"
          src="https://www.youtube.com/embed/nWnW62Ft05g?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=nWnW62Ft05g"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="The Tech Video"
        ></iframe>
      </div>
      <div className={`dot-pattern ${theme}`}></div>
      <div className="thetech-content">
        <h1 className={theme}>
          {language == "en" ? "The Tech Behind" : "La tecnología detrás"}
        </h1>
        <p className={theme}>
          {language == "en" ? (
            <div>
              <p>
                The technology behind our company's products consist in AI
                techniques running in suited cloud infrastructure that leverage
                state-of-the-art ML algorithms.
              </p>
              <p>
                Our company's products are powered by cutting-edge AI techniques
                running on a robust cloud infrastructure. We prioritize high
                availability, security, reliability, and scalability for all our
                products. This allows us to continuously monitor our products
                and ensure model and data quality, as well as bias detection,
                with the ability to roll back to previous models if necessary.
              </p>
            </div>
          ) : (
            <div>
              <p>
                La tecnología detrás de los productos de nuestra empresa
                consiste en técnicas de IA ejecutándose en una infraestructura
                de nube adecuada que aprovecha la tecnología de punta algoritmos
                de aprendizaje automático.
              </p>
              <p>
                Los productos de nuestra empresa funcionan con técnicas de
                inteligencia artificial de vanguardia que se ejecutan en una
                sólida infraestructura en la nube. Priorizamos una alta
                disponibilidad, seguridad, confiabilidad y escalabilidad para
                todos nuestros productos. Esto nos permite monitorear
                continuamente nuestros productos y garantizar la calidad del
                modelo y los datos, así como la detección de sesgos, con la
                capacidad de devolverse a modelos anteriores si es necesario.
              </p>
            </div>
          )}
        </p>
        <a
          href="https://www.youtube.com/watch?v=nWnW62Ft05g"
          target="_blank"
          rel="noopener noreferrer"
          className={`cta-button ${theme}`}
        >
          {language == "en" ? "Watch the Video" : "Ver el vídeo"}
        </a>
      </div>
    </section>
  );
};

export default TheTech;
