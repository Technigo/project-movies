import React from "react";
import { Link } from "react-router-dom";

const movieList = ({ movies }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className="movie-info">
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>

          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="{movie.title} poster"
            ></img>
          </Link>
        </div>
      ))}
      ;
    </section>
  );
};
export default movieList;
