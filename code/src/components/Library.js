import React from 'react';
import { Link } from 'react-router-dom';

const Library = ({ library }) => {
  return (
    <section className="library">
      {library.map((movie) => {
        return (
          <Link
            key={movie.title}
            to={`/details/${movie.title}`}>

            <img className="library-image" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />

            <div className="library-element">
              <h1>{movie.title}</h1>
              <p>Release date: {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </section>
  )
};

export default Library;

// First page before you click, should have an overlay and title in white
// fix id later and poster images
// took away image container - put back if needed