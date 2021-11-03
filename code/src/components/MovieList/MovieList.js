import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const movieList = ({ movies }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <div className="overlay" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Released {movie.release_date}</p>
            </div>

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
