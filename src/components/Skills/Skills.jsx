import React from 'react'
import "./skills.css";
import {BsPatchCheckFill} from "react-icons/bs"

const Skills = () => {
  return (
    <section className='skills' id="skills">
      <h5>¿Qué domino?</h5>
      <h2>Mis habilidades</h2>

      <div className="container skills__container">
        
        <div className='skills__frontend'>
          <h3>Desarrollo Frontend</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
          </div>
        </div>

        <div className='skills__backend'>
        <h3>Desarrollo Backend</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills