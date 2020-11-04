import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "components/css/moviedetails.css";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
  const URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const fetchMovieDetails = () => {
    fetch(URL_MOVIE_DETAILS)
      .then((response) => response.json())
      .then((json) => setMovie(json));
  };
  useEffect(fetchMovieDetails, []);

  return (
    <section className="about-section">
      <img className="background-image" src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.title}></img>
      <article className="content-container">
        <img className="poster-image" src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title}></img>
        <h1>{movie.title}</h1>
        <span className="rating">{movie.vote_average}</span>
        <p>{movie.overview}</p>
      </article>
    </section>
  );
};
