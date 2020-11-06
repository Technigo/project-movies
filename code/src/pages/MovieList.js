import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { MovieThumb } from "../components/MovieThumb";

import "./movieList.css";

export const MovieList = () => {
  // const MOVIES_URL = "https://api.rawg.io/api/games?ordering=rating0";
  const MOVIES_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=16cd57d89911f5854d96fcf791abf8a9&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_original_language=fr";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
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
              <p className="movie-title">{movie.title}</p>
              <p className="relase-date">Released {movie.release_date}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};
