import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <p className="footer-paragraph">A Technigo movie release project made by:</p>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Ylva Karlsson</h4>
          <a href="https://github.com/YlvaKarlsson">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/ylvakarlsson87/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="mailto:ylva_87@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
        <div className="footer-section">
          <h4>Sandra Olsson</h4>
          <a href="https://github.com/SandraMadeleine">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="mailto:sandramohlsson@yahoo.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;