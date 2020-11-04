import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movieDetail.css";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  // console.log("API:", URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [movieId, URL]);

  console.log("Movie", movie);
  return (
    <div
      className="movie-details-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}) `,
      }}
    >
      <div className="back-to-movies">
        <span>&#10094; </span>
        <Link to="/">
          <span className="back">Movies</span>
        </Link>
      </div>
      <div className="summery">
        <img
          src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
          <h1>
            {movie.title}
            <span className="movie-detial-rating">{movie.vote_average}/10</span>
          </h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
