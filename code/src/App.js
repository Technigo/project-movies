import React, { useState, useEffect } from "react";
import { TOKEN } from "token";

export const App = () => {
  const [movies, setMovies] = useState([]);

  const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TOKEN}&language=en-US&page=1`;

  useEffect(() => {
    fetch(moviesUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [moviesUrl]);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};
