import React from "react";
import { DETAILS_URL } from "./utils.js/Urls";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movie_id } = useParams();

  useEffect(() => {
    fetch(DETAILS_URL(movie_id))
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, []);

  return (
    <section className="details-container">
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails}
      />
      <div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`}
          alt={movieDetails}
        />
        <h1 className="title">{movieDetails.title}</h1>
        <h2 className="rating">{movieDetails.vote_average}/10</h2>
        <p className="overview">{movieDetails.overview}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
