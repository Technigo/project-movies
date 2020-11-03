import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <p className="movies-nav-text-mobile">
        <Link to="/"><span role="img" aria-label="popcorn emoji">&#127871;</span>Popular Movies</Link>
      </p>

      <p className="movies-nav-text">
        <Link to="/">Popular Movies Right Now!</Link>
      </p>

      <p className="top-movies-nav-text">
        <Link to="/top-movies">See also: Our Top Rated Movies of All Time!</Link>
      </p>

      <a className="tmdb-nav-text" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Visit The Movie Database HomePage</a>
    </nav>
  )
};