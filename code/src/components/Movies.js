import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=37960b018b2292cd4182bc4096fb83c8&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <p key={movie.id}>
            <Link to={`/details/${movie.title}`}>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </Link>
          </p>
        )
      })}
    </>

  )
}