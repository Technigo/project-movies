/*Outer Dependencies*/
import React from 'react';

export const MovieThumb = ({ title, release_date, poster_path, id }) => {
  return (
    <section className='thumb-container'>
      <img
        className='thumb-image'
        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
        alt={title}
      />
      <div className='movie-list-text'>
        <h1 className='thumb-title'>{title}</h1>
        <p className='thumb-release-date'>Released {release_date}</p>
      </div>
    </section>
  );
};
