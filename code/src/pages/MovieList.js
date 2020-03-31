import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <section>
      {movies.map((movie) => (
        <article key={movie.id}>
          <a>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="text-container">
              <h1>{movie.title}</h1>
              <p>Released: {movie.release_date}</p>
              <p>Average rating: {movie.vote_average}</p>
            </div>
          </a>
        </article>
      ))}
    </section>
  )
}