import React from "react";
import { Link } from "react-router-dom";

const MainSite = ({ movies }) => {
  return (
    <div className="movie-box">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <div className="movie-and-text">
            <img
              className="main-site-poster"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainSite;
