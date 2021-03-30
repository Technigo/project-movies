import React from "react";
import { useEffect, useState } from "react";

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState({});

  const API_DETAILS_URL = `https://api.themoviedb.org/3/movie/${match.params.movieID}?api_key=180969109de0f1c45ba2c80ba35bd8c7&language=en-US`;

  useEffect(() => {
    fetch(API_DETAILS_URL)
      .then((response) => response.json())
      .then((json) => {
        setMovieDetails(json);
      });
  }, []);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        className="movie-thumb-img"
        src={`https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
    </div>
  );
};

export default MovieDetails;
