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
      <h1>
        {language == 'en'
          ? 'Key Metrics After Implementation'
          : 'Indicadores clave después de la implementación'}
      </h1>
      <div className='key-row-section'>
        <h2>
          {language == 'en'
            ? 'Reduction in report generation time'
            : 'Reducción en el tiempo de generación de reportes'}
        </h2>
        <div className='vl'></div>
        <h1>{language == 'en' ? '52%' : '52%'}</h1>
        <h2>
          {language == 'en'
            ? 'Increase in the quantity of generated reports'
            : 'Aumento en la cantidad de reportes generados'}
        </h2>
        <div className='vl'></div>
        <h1>{language == 'en' ? '77%' : '77%'}</h1>
      </div>
    </div>
  )
}

export default KeyBenefits
