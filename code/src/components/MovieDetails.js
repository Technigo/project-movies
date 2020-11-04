import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=995425e2e6cd0fcf599ff795098e1e8b&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [movieId]);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
        </div>
      ))}
    </div>
  );
};
