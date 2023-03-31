import React from 'react';

export const Foot = () => {
  return (
    <div className="footContainer">
      <div className="footSome">
        <a
          className="icon"
          href="https://www.linkedin.com/in/johannaleonsson/"
          aria-label="Link to Johannas Linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          className="icon"
          href="https://github.com/JohLeo"
          aria-label="Link to Johannas GitHub"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-github" />
        </a>
      </div>
      <p className="byFoot">Created by Matilda Frid & Johanna Leonsson</p>
    </div>
  )
}