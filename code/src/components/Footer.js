import React from 'react';

const Footer = () => {
  return (
    <div className="foot-container">
      <div>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/matilda-frid-7923bb88/"
          aria-label="Link to Matildas Linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/johannaleonsson/"
          aria-label="Link to Johannas Linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </div>
      <p className="byFoot">Created by Matilda Frid & Johanna Leonsson</p>
    </div>
  )
}

export default Footer;