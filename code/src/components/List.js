/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=dfb43b39df4efba7f1f4678ddc567fa1&language=en-US&page=1';

export const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div>
      {movieList.map((movie) => {
        return (
          <NavLink key={movie.id} to={`/details/${movie.id}`} className="movie-item">
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title} />
          </NavLink>
        );
      })}
    </div>
  );
};
