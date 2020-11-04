import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

export const MovieThumb = ({
  title,
  release_date,
  vote_average,
  poster_path,
  backdrop_path,
  id,
}) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className="movie-thumb">
        <img
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
      </article>
    </Link>
  );
};

/*  <p>{title}</p>
    <p>{release_date}</p>
    <p>{vote_average} / 10</p>*/
