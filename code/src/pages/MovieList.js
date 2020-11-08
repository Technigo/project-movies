import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/movieList.css";

export const MovieList = ({ url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, [url]);

  return (
    <section className="movie-list">
      {movies.map((movie) => (
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
