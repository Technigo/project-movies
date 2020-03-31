import React, { useState, useEffect } from 'react'
// import { MovieThumb } from './MovieThumb'
import { Link } from 'react-router-dom'


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
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <section className="movie-thumb">
              <p>{movie.title}</p>
              <div className="movie-thumb-image-wrapper">
                <img className="movie-thumb-image"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title} />
                <p className="movie-thumbnail-image-description">{movie.release_date}</p>

              </div>
            </section>
          </Link>
        </div>
      ))}
    </div>
  )
}