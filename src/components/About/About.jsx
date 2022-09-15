import React from 'react'
import "./about.css";
import ME2 from "../../assets/foto2.JPG"

const About = () => {
  return (
    <section className="about" id="about">
      <h5>Conoce un poco más</h5>
      <h2>Sobre mí</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt=""/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__text">
            
            <p>Comencé a estudiar programación en enero de 2022.</p>
            <p>Asistí al bootcamp Full Stack Developer presencial de Geekshubs Academy en Valencia.</p>
            <p>Me formé en HTML5, CSS3, JavaScript, React y Node, entre otros.</p>
            <p>Para el futuro, tengo interés en formarme, además, en el desarrollo mobile nativo.</p>
            <p>Estoy abierta a oportunidades de trabajo en remoto o presenciales en Valencia, España.</p>

          </div>
          <a href="#contact" className='btn btn-primary'>¿Hablamos?</a>
        </div>
      </div>
    </section>
  )
}

export default About