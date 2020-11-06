import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=995425e2e6cd0fcf599ff795098e1e8b&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
              <h2>{movie.original_title}</h2>
              <h3>{movie.release_date}</h3>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
