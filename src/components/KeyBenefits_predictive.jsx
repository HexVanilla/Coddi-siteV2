import React from 'react'
import './KeyBenefits.css'

import useIntersectionObserver from './useIntersectionObserver'
import { useRef } from 'react'

const KeyBenefits = ({ theme, language }) => {
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  return (
    <div
      className={`key-benefits-section ${theme} ${
        isVisible ? 'fade-in' : 'fade-out'
      }`}
      ref={sectionRef}
    >
      <h1>{language == 'en' ? 'Key Benefits' : 'Beneficios Clave'}</h1>
      <div className='key-row-section'>
        <h2>
          {language == 'en'
            ? 'Improved Equipment Reliability'
            : 'Mejoras en la Confiabilidad de Equipos'}
        </h2>
        <div className='vl'></div>
        <p>
          {language == 'en'
            ? 'By predicting potential equipment failures, Coddi helps mining companies minimize unplanned downtime and improve the reliability of their operations.'
            : 'Al predecir posibles fallas en los equipos, Coddi ayuda a minimizar el tiempo de inactividad no planificado y mejorar la confiabilidad de sus operaciones.'}
        </p>
        <h2>{language == 'en' ? 'Cost Savings' : 'Reducción de Costos'}</h2>
        <div className='vl'></div>
        <p>
          {language == 'en'
            ? 'Predictive maintenance allows for more efficient use of maintenance resources, reducing costs associated with failures.'
            : 'El mantenimiento predictivo permite un uso más eficiente de los recursos y reduciendo los costos asociados a fallas.'}
        </p>
      </div>
      <div className='key-row-section'>
        <h2>
          {language == 'en' ? 'Asset Optimization' : 'Optimización de Activos'}
        </h2>
        <div className='vl'></div>
        <p>
          {language == 'en'
            ? "By monitoring equipment health and performance, Coddi's predictive maintenance service helps mining companies optimize the use of their assets and extend their lifecicle."
            : 'Al monitorear la salud y el rendimiento del equipo, el servicio de mantenimiento predictivo de Coddi ayuda a las empresas mineras a optimizar el uso de sus activos y extender su ciclo de vida.'}
        </p>
        <h2> {language == 'en' ? 'Enhanced Safety' : 'Mayor Seguridad'}</h2>
        <div className='vl'></div>
        <p>
          {language == 'en'
            ? 'Predictive maintenance helps identify potential safety hazards early, allowing for timely intervention and ensure a safer working environment for mining personnel.'
            : 'El mantenimiento predictivo ayuda a identificar posibles riesgos de seguridad con anticipación, permitiendo una intervención oportuna y asegurando un entorno de trabajo más seguro para el personal minero.'}
        </p>
      </div>
    </div>
  )
}

export default KeyBenefits
