import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <p>
        <Link to="/">PROJECT MOVIES - Popular Movies Right Now!</Link>
      </p>

      <p>
        <Link to="/top-movies">See also: Our Top Rated Movies of All Time!</Link>
      </p>

      <a href="https://www.themoviedb.org/" target="_blank">Visit The Movie Database HomePage</a>
    </nav>
  )
};