import React, { useState, useEffect } from "react";

const API_KEY = "c3172ec38bb05890b52b6288d18c7b8e";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <img
          key={movie.title}
          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          alt="movie posters"
        ></img>
      ))}
    </div>
  );
};
export default MovieList;
