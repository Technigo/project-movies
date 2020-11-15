import React from 'react';

import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <img alt="Technigo logo" className="logo" src={logo}></img>
        <div className="footer-info">
          <p>Project 12 - Movies Project</p>
          <p>Anna Hellqvist @ Technigo Bootcamp 2020</p>
          <div>
            <p>
              <a href="https://github.com/AnnaHellqvist">GitHub</a>
                -
              <a href="https://www.linkedin.com/in/anna-hellqvist-62168466/">
                LinkedIn
              </a> -
              <a href="https://medium.com/@anna.hellqvist89">
                 Medium
              </a>
            </p>
          </div>
        </div>
        <p className="reference">
          <a
            target="_blank"
            href="https://icons8.com/icons/set/popcorn"
            rel=" noopener noreferrer"
          >
            Popcorn icon
          </a> icon by <a target="_blank" href="https://icons8.com" rel="noopener noreferrer"> Icons8</a>
        </p>
      </footer>
    )
};

export default Footer;