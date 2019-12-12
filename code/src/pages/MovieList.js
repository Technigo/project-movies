import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const apiKey = "cc325ede4f72069add696614aa58b9e2";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <section className="wrapper">
      {movies.map(movie => (
        <article key={movie.id} className="movie-wrap">
          <Link to={`/movies/${movie.id}`}>
            <img
              className="small-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="overlay">
              <div>
                <h2>{movie.title}</h2>
                <p>Released {movie.release_date}</p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};
