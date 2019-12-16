import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiKey = "c616ef82836e90a0073b3a17b8bde4ba";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setMovies(json.results);
      });
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <h1>{movie.title}</h1>
        </Link>
      ))}
    </div>
  );
};
