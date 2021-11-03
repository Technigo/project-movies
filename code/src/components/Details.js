import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../icons/arrow-left.svg";

const Details = ({ makePosterUrl, apiKey }) => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => setMovie(json));
  }, [MOVIE_URL]);

  const backdrop_url_large = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div className="details-page-wrapper">
      <div className="top-header">
        <Link className="movies-link" to="/">
          <Arrow className="arrow-left" /> Movies
        </Link>
      </div>
      <div className="movie-details-content">
        <img
          className="movie-poster-details"
          src={makePosterUrl(movie.poster_path)}
          alt="movie poster"
        />
        <div className="movie-details-info">
          <h1>
            {movie.title}{" "}
            <span className="movie-score">{movie.vote_average} / 10</span>
          </h1>

          <p className="movie-description">{movie.overview}</p>

          <img
            className="movie-hero-image"
            src={backdrop_url_large}
            alt="movie backdrop"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
