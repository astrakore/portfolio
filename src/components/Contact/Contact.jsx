import React from 'react'
import "./contact.css";
import {MdOutlineMail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jppkp9l', 'template_44uwuai', form.current, 'Rfxk88x1rAYMosVXY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section className='centrate_puto' id="contact">
      <h5>Contáctame</h5>
      <h2>Contacto</h2>

      <div className='centrate_puto_peque contact container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>teresa.carrasco.sauri@gmail.com</h5>
            <a href="mailto:teresa.carrasco.sauri@gmail.com" target="_blank">Envíame un mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Clica el botón</h5>
            <a href="https://api.whatsapp.com/send?phone=+34622560908" target="_blank">Envíame un mensaje</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="nombre" placeholder="Tu nombre completo" required />
          <input type="email" name="correo" placeholder="Tu correo electrónico" required />
          <textarea type="message" rows="7" name="mensaje" placeholder="Escribe aquí tu mensaje" required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar</button>
        </form>

      </div>
    </section>
  )
}

export default Contact