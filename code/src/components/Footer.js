import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://github.com/annikalindberg"><img src="./assets/annika.jpg" className="contact-logo" alt="link to Annika's github" /></a>
        <a href="https://bridgetmailley.com/"><img src="./assets/bridget.jpg" className="contact-logo" alt="link to Bridget's portfolio" /></a>
        <a href="https://frida-nordenlow-portfolio.netlify.app//"><img src="./assets/frida.jpg" className="contact-logo" alt="link to Frida's portfolio" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Annika, Bridget, & Frida. Technigo Web Development Bootcamp 2023.</p>
      </div>
    </footer>
  )
}

export default Footer