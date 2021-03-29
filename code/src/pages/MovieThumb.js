import React from 'react';

export const MovieThumb = ({ title, release_date, poster_path }) => {
  return (
    <section className='movie-thumb'>
      {title}
      <div>
        <img
          className='movie-thumb-image'
          src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          alt={title}
        />
        <p>{release_date}</p>
      </div>
    </section>
  );
};
