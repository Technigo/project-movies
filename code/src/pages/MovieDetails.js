import React from "react";

//import { MoviePage } from "react";

export const MovieDetails = ({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  tagline,
  overview,
}) => {
  return (
    <article
      className="movie-details-background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
      }}
    >
      <div className="movie-details-wrapper">
        <img
          className="movie-poster-image"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
        <div className="movie-details-text">
          <h1>
            {title}
            <span>{vote_average} / 10</span>
          </h1>

          <p>{overview}</p>
        </div>
      </div>
    </article>
  );
};
