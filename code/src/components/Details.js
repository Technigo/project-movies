import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { ReactComponent as Arrow } from "../icons/arrow-left.svg";

const Details = ({ makePosterUrl, apiKey }) => {
  const [movie, setMovie] = useState([]);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const history = useHistory();
  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => {
        // If the fetch is successful and returned object has a movie id we proceed with set state property
        if (json.id) {
          setMovie(json);
        } else {
          // Else we display error
          setHasError(true);
        }
      });
  }, [MOVIE_URL]);

  if (hasError) {
    return (
      <div>
        <h1>Such movie is not made yet. You want to give it a try? </h1>
        <button
          class="return-btn"
          type="button"
          onClick={() => history.goBack()}
        >
          Return to previous page!
        </button>
      </div>
    );
  }

  const backdrop_url_large = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div className="details-page-wrapper">
      <div className="top-header">
        <Link className="movies-link" to="/">
          <div className="link-wrapper">
            <Arrow className="arrow-left" />
            Movies
          </div>
        </Link>
      </div>
      <div className="movie-details-content">
        <img
          className="movie-poster-details"
          // We make string that holds the path to the poster image by using a function declared in App.js
          src={makePosterUrl(movie.poster_path)}
          alt="movie poster"
        />
        <div className="movie-details-info">
          <h1>
            {movie.title}
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
