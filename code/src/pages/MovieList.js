import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

//export component
export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8a43e19df67e81dfd10b5f88d05f471f&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <section className="movie-container">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-image-description">
              <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
