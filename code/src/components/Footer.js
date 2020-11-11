import React from 'react'

import TechnigoLogo from '../img/technigo.svg'
import './footer.css'

export const Footer = () => {
    return (  
    <footer>
      <p>© 2020 Karan Mann <span role='img' aria-label='emoji'>👨‍🍳</span></p>
      <p>
          <a href='https://www.linkedin.com/in/karanmann84/' target='_blank' rel='noopener noreferrer'>Linkedin</a>
          |
          <a href='https://github.com/karanmann' target='_blank' rel='noopener noreferrer' >GitHub</a>
      </p>
      <img src= {TechnigoLogo} alt='technigo logo' />
      <p>Project developed during the Technigo Frontend development bootcamp</p>
    </footer>
  )
}
