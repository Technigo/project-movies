import React from "react";
import { Link } from "react-router-dom";

//((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date))

const MainSite = ({ movies }) => {
  return (
    <div className="movie-box">
      {movies
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((movie) => (
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
