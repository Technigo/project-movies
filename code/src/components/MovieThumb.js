import React from "react";
import { Link } from "react-router-dom";

export const MovieThumb = ({
  title,
  release_date,
  vote_average,
  poster_path,
  id,
}) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className="movie-thumb">
        <div className="overlay-container">
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
          />
        </div>
      </article>
    </Link>
  );
};
