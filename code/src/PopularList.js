import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const PopularList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0ba76df6e948cef09d2c33de2fa27368&language=en-US&page=1")
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <div 
          className="movie-poster"
          key={movie.id}
        >
          <Link to={`/movies/${movie.id}`}>
          <img 
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} 
          />
          </Link>
          <h2 className="movie-title">{movie.title}</h2>
          <h3 className="release-date">{movie.release_date}</h3>
        </div>
      ))}
    </div>
  )
}


