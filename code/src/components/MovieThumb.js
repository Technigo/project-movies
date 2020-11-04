import React from "react";
import { Link } from "react-router-dom";

export const MovieThumb = ({
  title,
  release_date,
  poster_path,
  rating,
  slug,
}) => {
  return (
    <Link to={`/movies/${slug}`}>
      <article className="movie-thumb">
        {title}
        <div className="movie-thumb-image-wrapper">
          <img className="moviethumb-image" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt=""></img>
          
          <p className="relase-date">{release_date}</p>
          <p className="movie-thumb-image-description">{rating}</p>
        </div>
      </article>
    </Link>
  );
};
