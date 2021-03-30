
import React from "react";
import { Link } from "react-router-dom"

const MovieItem = ({ id, original_title, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <section>
        <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={original_title} />
      </section>
    </Link>
  );
}

export default MovieItem;