import React from 'react';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';

const MovieList = ({ list }) => {
  return (
    <div className="movie-list">
      {list.map((movie) => {
        return (
          <article key={movie.id}>
            <Link className="movie-card" to={`/movies/${movie.id}`}>
              <div className="overlay">
                <div className="movie-details">
                  <h2 key={movie.title}>{movie.title}</h2>
                  <p key={movie.release_date}>{movie.release_date}</p>
                </div>
              </div>
              <img className="movie-poster-" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
            </Link>
          </article>
        )
      })}
      <Footer />
    </div>
  );
}

export default MovieList;