import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          <p>Released {movie.date}</p>
          <p>{movie.rating}/10</p>
          <img src={movie.coverImgUrl} alt={movie.title} />
        </div>
      ))}
    </section>
  );
};

export default MovieList;
