import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <p className="movies-nav-text-mobile"><span className="nav-emoji" role="img" aria-label="popcorn emoji">&#127871;</span>Popular Movies</p>
      </Link>

      <Link to="/">
        <p className="movies-nav-text">Popular Movies Right Now!</p>
      </Link>

      <Link to="/top-movies">
        <p className="top-movies-nav-text">See also: Our Top Rated Movies of All Time!</p>
      </Link>

      <a className="tmdb-nav-text" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Visit The Movie Database HomePage</a>
    </nav>
  )
};