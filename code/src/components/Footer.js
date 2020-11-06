import React from 'react';

import 'styles/footer.css';

export const Footer = () => {
  return (
      <footer>
          <p>Created by Henrike Wiemker</p>
          <p>Back button by Star and Anchor Design from the Noun Project</p>
          <p>Technigo Bootcamp</p>
          <p>November 2020</p>
          <img src={require("assets/logo.svg")} alt="The Technigo logo"/>
      </footer>
  );
};
