import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = 'https://api.themoviedb.org/3/movie/popular?api_key=83328e75221cc6b9f332da9a39a408f8&language=en-US&page=1'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])
  return (
    <div className="movie-card">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <div>
              <div className="movie-image">
                <Link to={`/details/${movie.id}`}>
                  <div className="overlay">
                    <div className="movie-details">
                      <h1>{movie.title} </h1>
                      <h4>Released {movie.release_date} </h4>
                    </div>
                  </div>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt="album cover" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

