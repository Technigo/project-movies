import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { API_MOVIE_LIST } from "./Links";
import { OverLay } from "./OverLay";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_MOVIE_LIST)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, []);
  console.log(movies);

  return (
    <div className="grid">
      {movies.map((movie) => (
        <div className="movie-container" key={movie.id}>
          <img
            alt={`${movie.original_title} `}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
          <Link to={`/movieDetails/${movie.id}`}>
            <OverLay>
              <h2>{movie.original_title}</h2>
              <p>Released {moment(movie.release_date).format("MMM Do YY")}</p>
            </OverLay>
          </Link>
        </div>
      ))}
    </div>
  );
};
