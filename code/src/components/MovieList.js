import React, { useState, useEffect } from 'react'
// import { MovieThumb } from './MovieThumb'
import { Link } from 'react-router-dom'
import './movielist.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4b80547951dcd878878a123c5c4d8eab')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)

      })
  }, [])

  return (
    <div className="movie-list-container">

      {movies.map((movie) => (
        <article className="movie-thumb" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className="overlay">
              <div className="movie-thumb-text">
              <h1>{movie.title}</h1>
              <p className="movie-thumbnail-image-releasedate">{movie.release_date}</p>
              </div>
            </div>
            <img className="movie-thumb-image"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title} />

          </Link>

        </article>
      ))}

    </div>
  )
}