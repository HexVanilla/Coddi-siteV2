import React from "react";
import "./TheTeam.css";
import carlos from "../img/carlos.png";
import patricio from "../img/patricio.png";
import jourdan from "../img/jourdan.png";
import warren from "../img/warren.png";
import pedro from "../img/pedro.png";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRef } from "react";

const TheTeam = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const teamMembers = [
    {
      name: "Pedro Cancino Barraza",
      title: "CEO",
      description: "pedro@coddi.ai",
      image: pedro,
    },
    {
      name: "Warren Eaton Sciaccaluga",
      title: "Cloud Architect",
      description: "warren@coddi.ai",
      image: warren,
    },
    {
      name: "Jourdan Bugueño Flores",
      title: "Condition Monitoring Engineer",
      description: "jourdan@coddi.ai",
      image: jourdan,
    },
    {
      name: "Patricio Ortiz Vargas, MSC.",
      title: "Data Science",
      description: "patricio@coddi.ai",
      image: patricio,
    },
    /*
    {
      name: "Carlos Poblete Canales",
      title: "Data Science",
      description: "carlos@coddi.ai",
      image: carlos,
    },
    */
    // Add more team members here
  ];

  return (
    <section
      id="theteam"
      className={`theteam-section ${theme} ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <div className="left-column">
        <h1>{language == "en" ? "Our Team" : "El Equipo"}</h1>
      </div>
      <div className="right-column">
        <div className="right-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={`${member.name}`} />
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheTeam;
