import React from "react";
import { Link } from "react-router-dom";
import "./leosList.css";

// MOVIE LIST COMPONENT (START PAGE) 
const LeosList = ({ movies }) => {
  return (
    <section className="all-movies">
      {movies
        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
        .map((movie) => (
          <div className="movie-overlay" key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>Released {movie.release_date}</p>
              </div>

              <img
                className="movie-thumbnail"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
                    : "https://www.themoviedb.org/t/p/original/jqbqNrOIB3alGMX6Gh2MbOKMXZO.jpg" //if there is no thumbnail available, we show a profile pic of Leo
                }
                alt="{movie.title}"
              ></img>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default LeosList;
