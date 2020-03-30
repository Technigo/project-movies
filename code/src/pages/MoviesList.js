import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = () => {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1'
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <div>


      {movies.map(movie => (
        <section key={movie.id} className="movie-card">
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <Link to={`/movies/${movie.id}`}>Link</Link>
        </section>
      ))}

    </div>
  )
}