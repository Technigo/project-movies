import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/error.css';

export const NotFound = () => (
  <div className="error-div">
    <h1 className="error-text">Oops! This page doesn't exists.</h1>
    <Link to="/" className="back-home-link">
      <p>
        <span className="arrows-wrapper">
          <i className="arrow left"></i>
          <i className="arrow left"></i>
          <i className="arrow left"></i>
        </span>
        Go back to the home page
      </p>
    </Link>
    <img 
      className="error-gif"
      src="https://media4.giphy.com/media/Ke8JKfxe83FpLrra71/giphy.webp?cid=ecf05e4777qfdmv4uqzy16r4n0hb9o12k7jy34sodz8p78s6&rid=giphy.webp" 
      alt="Funny GIF"
    />
  </div>
);