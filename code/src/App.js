import React, { useState, useEffect } from "react";
import { TOKEN } from "token";

export const App = () => {
  const [movies, setMovies] = useState([]);

  const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TOKEN}&language=en-US&page=1`;

  useEffect(() => {
    fetch(moviesUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          data.results.map((item) => ({
            id: item.id,
            title: item.title,
            release: item.release_date,
            description: item.overview,
            rating: item.vote_average,
            coverImgUrl: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
            backdropImgUrl: `https://image.tmdb.org/t/p/w780/${item.backdrop_path}`,
          }))
        );
      })

      .catch((error) => console.log(error));
  }, [moviesUrl]);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.date}</p>
          <p>{movie.rating}</p>
          <p>{movie.description}</p>
          <img src={movie.coverImgUrl} alt={movie.title} />
          <img src={movie.backdropImgUrl} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};
