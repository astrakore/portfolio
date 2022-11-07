import React from 'react'
import "./footer.css"

import {BsLinkedin} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/teresa-carrasco/' target="_blank"><BsLinkedin/></a>
        <a href='https://twitter.com/TereC_Sauri' target="_blank"><BsTwitter/></a>
        <a href='https://github.com/astrakore' target="_blank"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Teresa Carrasco. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer