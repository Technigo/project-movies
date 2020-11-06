import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { BackButton } from "components/js/BackButton";

import "components/css/moviedetails.css";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";

  useEffect(() => {
    const URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(URL_MOVIE_DETAILS)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => {
        console.error("Bad request", error);
      });
  }, [id]);

  return (
    <section className="about-section">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      ></img>
      <Link className="back-button" to='/'>
        <BackButton />All movies
      </Link>
      <div className="content-container">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        ></img>
        <div className="text-container">
          <h1>
            {movie.title}
            <span className="rating">{movie.vote_average}/10</span>
          </h1>
          <p className="movie-description">{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};
