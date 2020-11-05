import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

export const API_KEY = "d18f9e3ce26c7875c97d06084254693a";
const URL_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const MovieList = () => {
  const [movies, setMovies] = useState ([])

  useEffect(() => {
    fetch(URL_POPULAR_MOVIES)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)

      })
  }, [])

  return (
    <section className="movie-section">
      {movies.map((movie) => (
        <div className="list-container" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img className="poster-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              <div className="title-release">
                <h2 className="movie-title">{movie.title}</h2>
                <h3 className="movie-release">Released {movie.release_date}</h3>
              </div>
            </Link>
        </div>
      ))}
    </section>
  )
}