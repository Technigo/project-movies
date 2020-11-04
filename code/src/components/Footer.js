import React from "react";

import TechnigoLogo from "../assets/logo.svg";

export const Footer = () => {
    return (  
    <>
      <footer>
          <p>© 2020 Sofia Vaz Sousa <span role="img" aria-label="emoji">🦊</span></p>
          <p>
              <a href="https://www.linkedin.com/in/sofiavazsousa/"target="_blank" rel="noopener noreferrer">Linkedin</a>
              |
              <a href="https://github.com/sofiavazs" target="_blank" rel="noopener noreferrer" >GitHub</a>
          </p>
          <img src= {TechnigoLogo} alt="technigo logo" />
          <p>Project developed during the Technigo frontend development bootcamp</p>
      </footer>
    </>
  );
};
