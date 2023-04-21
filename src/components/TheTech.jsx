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
                We embrase an AWS-first approach to enjoy high availability,
                security, relaibility and scalability for all our products. That
                way we can constantly monitor our products to check for model
                and data quality and bias with roll-back capabilities to
                previous models.
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
                Adoptamos un enfoque basado en AWS para disfrutar de una alta
                disponibilidad, seguridad, confiabilidad y escalabilidad para
                todos nuestros productos De esa manera podemos monitorear
                constantemente nuestros productos para verificar si modelo y
                calidad de datos y sesgo con capacidades de reversión para
                modelos anteriores.
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
