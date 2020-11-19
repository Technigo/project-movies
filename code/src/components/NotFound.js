import React, { useState } from 'react';

import { BackButton } from 'components/BackButton';

import 'styles/error.css';

export const NotFound = () => {
  
  return (
  <div className="error-div">
    <h1 className="error-text" tabIndex="0">Oops! This page doesn't exists.</h1>
    <BackButton />
    <img 
      className="error-gif"
      src="https://media4.giphy.com/media/Ke8JKfxe83FpLrra71/giphy.webp?cid=ecf05e4777qfdmv4uqzy16r4n0hb9o12k7jy34sodz8p78s6&rid=giphy.webp" 
      alt="Funny GIF"
    />
  </div>
);
}