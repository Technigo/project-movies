import React from "react";
import { useParams, Link } from "react-router-dom";

import "./MovieDetails.css";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.filter((movie) => movie.id === Number(movieId))[0];

  return (
    <section className="movie-container">
      <Link className="back-link" to={"/"}>
        <img className="back-icon" src="../../backarrow.png" alt="back arrow" />
        <span className="back-label">Films</span>
      </Link>
      <img className="movie-poster" src={movie.backdropImgUrl} alt={movie.backdropImgUrl} />
      <div className="movie-desktop-details">
        <img className="movie-cover" src={movie.coverImgUrl} alt={movie.coverImgUrl} />
        <div className="movie-details-group">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-rating">{movie.rating}/10</p>
          <p>{movie.description}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
