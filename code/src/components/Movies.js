import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState({ results: [] });

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d07e418e3a6ee346618c7a898de9210&language=en-US&page=1')
      .then((response) => response.json())
      .then((fetchData) => {
        setMovies(fetchData);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.results.map((singleMovie) => {
        return (
          <div className="release-info">
            <Link key={singleMovie.id} to={`/details/${singleMovie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`} alt={singleMovie.original_title} />
              <h2>{singleMovie.original_title}</h2>
              <p>{singleMovie.release_date}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};