// /////////////// IMPORT //////////////////////// //

import React from 'react';

// /////////////// COMPONENT //////////////////////// //

export const MovieList = ({ movieList }) => {
  return (

    <section className="movie-list-container">
      {movieList.map((singlemovie) => {
        return (
          <a key={singlemovie.name}>
            <p>{singlemovie.title}</p>
            <p>{singlemovie.release_date}</p>
          </a>
        )
      })}

    </section>

  );
};