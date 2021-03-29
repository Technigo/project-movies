import React from 'react';

export const MovieThumb = ({ title, release_date, poster_path, id }) => {
  return (
    <section className='thumb-container'>
      <h1 className='thumb-title'>{title}</h1>
      <div>
        <img
          className='thumb-image'
          src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          alt={title}
        />
        <p className='thumb-release-date'>{release_date}</p>
      </div>
    </section>
  );
};
