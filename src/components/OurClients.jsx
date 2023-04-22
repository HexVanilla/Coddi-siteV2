import React from "react";
import "./OurClients.css";
import logo01 from "../img/LogosClientes-01.png";
import logo02 from "../img/LogosClientes-02.png";
import logo03 from "../img/LogosClientes-03.png";
import logo04 from "../img/LogosClientes-04.png";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const OurClients = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  return (
    <section
      id="ourclients"
      className={`our-clients-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <h1> {language == "en" ? "Our Clients" : "Clientes"}</h1>
      <div className="client-columns">
        <div className="client-box">
          <img src={logo01} alt="" />
        </div>
        <div className="client-box">
          <img src={logo02} alt="" />
        </div>
        <div className="client-box">
          <img src={logo03} alt="" />
        </div>
        <div className="client-box">
          <img src={logo04} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
