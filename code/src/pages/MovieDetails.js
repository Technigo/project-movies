import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../index.css";

import BackButton from "../components/BackButton";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=50eb4adf4920d3714372a2ce134f64ac&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails([json]);
      });
  }, [movieId]);

  return (
    <section className="movie-details-page">
      <BackButton />
      {/* conditional rendering */}
      {movieDetails &&
        movieDetails.map((details) => (
          <div key={details.id} className="container">
            <img
              className="background-image"
              src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
              alt={details.original_title}
            />
            <div className="movie-details-container">
              <img
                className="poster-details-image"
                src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
                alt={details.original_title}
              />
              <div className="movie-info">
                <h1 className="movie-title">
                  {details.original_title}
                  <span className="rating">{details.vote_average}/10</span>
                </h1>
                <p>{details.overview}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}
