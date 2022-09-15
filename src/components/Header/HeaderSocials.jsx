import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/teresa-carrasco/' target="_blank"><BsLinkedin/></a>
        <a href='https://twitter.com/TereC_Sauri' target="_blank"><BsTwitter/></a>
        <a href='https://github.com/astrakore' target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials