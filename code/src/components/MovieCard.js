import React from 'react';

const MovieCard = ({ poster_path, title, release_date }) => {
  return (
    <section className='movie-card'>
      <img className='cover' src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} ></img>
      <div className="details">
        <h1 className='title'>{title}</h1>
        <p>Released: {release_date}</p>
      </div>
    </section>
  );
};

export default MovieCard;