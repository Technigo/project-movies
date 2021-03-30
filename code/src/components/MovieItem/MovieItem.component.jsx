import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ id, original_title: title, poster_path: image }) => {
  return (
    <Link to={`/movie/${id}/${title}`}>
      <section>
        <img src={`https://image.tmdb.org/t/p/w342/${image}`} alt={title} />
      </section>
    </Link>
  );
};

export default MovieItem;
