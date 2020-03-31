import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=df891c50a8dd83e3e3bb1b5bb74c3699&language=en-US&page=1')
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [])

  return (
    <section className="movies-container">
      {movies.map(movie => (
        <article className="movie-card" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
            <div className="text-container">
              <h1>{movie.title}</h1>
              <p>Released: {movie.release_date}</p>
              <p>Average rating: {movie.vote_average}</p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  )
}