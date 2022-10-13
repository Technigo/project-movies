/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const apiKey = 'd4669261ce30d2ac76f238d73f4bd890';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMovieList(json.results));
  }, []);

  return (
    <div className="movies-list">
      {movieList.map((movie) => {
        return (
          <NavLink
            key={movie.id}
            to={`/details/${movie.id}`}
            className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-item-info-wrapper">
              <div className="movie-item-info">
                <h2>{movie.title}</h2>
                <p>⭐️ {movie.vote_average}</p>
                <p className="truncated">{movie.overview}</p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
