import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/foto1.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hola, soy</h5>
        <h1>Teresa Carrasco</h1>
        <h5 className="text-light">Desarrolladora Full Stack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt=""/>
        </div>

        <a href='#contact' className='scroll__down'>Ve abajo</a>

      </div>
    </header>
  )
}

export default Header