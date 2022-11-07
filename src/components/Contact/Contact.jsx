import React from 'react'
import "./contact.css";
import {MdOutlineMail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <h5>Contáctame</h5>
      <h2>Contacto</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>teresa.carrasco.sauri@gmail.com</h5>
            <a href="mailto:teresa.carrasco.sauri@gmail.com" target="_blank">Envía un mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+34622560908</h5>
            <a href="https://api.whatsapp.com/send?phone=+34622560908" target="_blank">Envía un mensaje</a>
          </article>

        </div>

        <form action=''>
          <input type="text" name="Nombre" placeholder="Tu nombre completo" required />
          <input type="email" name="Correo electrónico" placeholder="Tu correo electrónico" required />
          <textarea type="message" rows="7" name="Mensaje" placeholder="Escribe aquí tu mensaje" required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar</button>
        </form>

      </div>
    </section>
  )
}

export default Contact