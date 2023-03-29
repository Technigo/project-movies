/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <div className="movie-container">
      {/* ett snyggt grid på movie-container, tänk på att den ska kunna vara responsiv vid mindre än desktop */}
      <Link key={1} to="toBeDeclared" className="movie">
        <div className="movie-image">
          <img
            alt={props.title}
            src={`https://image.tmdb.org/t/p/w1280/${props.posterPath}`}
          />
        </div>
        {/* Jag tänker att movie-item kommer synas vid hover och vara ovanpå movie-image  */}
        <div className="movie-item">
          <h1>{props.title}</h1>
          <p>{props.release}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
