import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* Ask Daniel at todays 1:1 as VS code asks if we mean "Footer" below - but the header works fine */
/* so we don't really understand why it's complaining here by the footer but not with the header */
const Footer = () => {
  return (
    <footer>
      <p>A Technigo movie release project by Ylva Karlsson & Sandra Olsson </p>
      <div className="footer">
        {/* <div className="footer-text">
          {/* <p>A Technigo movie release project by Ylva Karlsson & Sandra Olsson </p> */}
        {/* </div> */}
        <div className="footer-section">
          <h3>Ylva Karlsson</h3>
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
      </div>
      {/* footer-text below was called footer-section from ChatGPT */}
      <div className="footer-section">
        <h3>Sandra Olsson</h3>
        <a href="https://github.com/SandraMadeleine">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/person2">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="mailto:person2@example.com">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />ADD SANDRAS MAIL
        </a>
      </div>
      <div className="footer-favicon-text">
        <a
          href="https://icons8.com"
          rel="noopener noreferrer"
          target="_blank">
            Favicon from icons8.com
        </a>
      </div>
    </footer>
  )
}

export default Footer;