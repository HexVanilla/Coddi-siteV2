import useIntersectionObserver from './useIntersectionObserver'
import { useRef } from 'react'
import './News.css'
import newsBanner from '../img/linkedin_news01.png'
import newsBannerHackaton from '../img/hackaton.jpg'

const News = ({ theme, language }) => {
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  return (
    <section
      id="news"
      className={`news-header ${isVisible ? 'fade-in' : 'fade-out'}`}
      ref={sectionRef}
    >
      <h1
        style={{ fontSize: '5em', color: theme == 'dark' ? 'white' : 'black' }}
      >
        {language == 'en' ? 'News' : 'Noticias'}
      </h1>
      <div className="news-section">
        <div className="news-box">
          <img src={newsBannerHackaton} alt="" className="news-image" />
          <div className="info-news-box">
            <h1>
              Desafiando límites y liderando la innovación: Coodi triunfa en la
              Hackathon de Minera Centinela
            </h1>
            <small>13 de diciembre de 2023</small>
            <p>
              ¡Emocionados de compartir la noticia! En los últimos días, el
              equipo de Coodi se destacó en la primera hackathon organizada por
              Minera Centinela, donde enfrentamos el desafío de "identificar y
              alertar zonas de velocidad cero" para mejorar el rendimiento de la
              flota de transporte....
            </p>
            <a href="https://www.linkedin.com/pulse/desafiando-l%25C3%25ADmites-y-liderando-la-innovaci%25C3%25B3n-coodi-triunfa-en-uthle">
              Continuar leyendo en LinkedIn
            </a>
          </div>
        </div>
        <div className="news-box">
          <img src={newsBanner} alt="" className="news-image" />

          <div className="info-news-box">
            <h1>
              Revolucionando el Monitoreo de Equipos de Minería con Inteligencia
              Artificial Generativa
            </h1>
            <small>2 de agosto de 2023</small>
            <p>
              ¡Estimada comunidad de LinkedIn! Hoy, estamos emocionados de
              compartir con ustedes un logro significativo: hemos completado el
              desarrollo e implementación de nuestra solución de inteligencia
              artificial generativa para el monitoreo de la condición de equipos
              de minería...
            </p>
            <a href="https://www.linkedin.com/pulse/revolucionando-el-monitoreo-de-equipos-miner%25C3%25ADa-con-inteligencia">
              Continuar leyendo en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
