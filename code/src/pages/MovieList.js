import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  POPULAR_URL,
  // NOWPLAYING_URL,
  // UPCOMING_URL,
  // TOPRATED_URL,
} from ".././urls";
import "../css/movieList.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
        // console.log(json.results);
      });
  }, []);

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        // <MovieThumb key={movie.id} {...movie} />
        <Link key={movie.id} to={`/movies/${movie.id}`} className="movie">
          <article>
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            ></img>
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="release-date">Released {movie.release_date}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};
