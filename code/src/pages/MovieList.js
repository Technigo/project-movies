import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "pages/movieList.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b5cad1b08293d5f69add78a8d839f05b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <div className="movieList">
      {movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="movie-poster"
          />
          <div className="movieInfo">
            <h2>{movie.title}</h2>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
