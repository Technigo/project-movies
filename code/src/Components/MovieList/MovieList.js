// /////////////// IMPORT //////////////////////// //

import React from 'react';

// /////////////// COMPONENT //////////////////////// //

export const MovieList = ({ movieList }) => {
  return (

    <section className="movie-list-container">
      {movieList.map((singlemovie) => {
        return (
          <p>{singlemovie.title}</p>
        )
      })}

    </section>

  );
};