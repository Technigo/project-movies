import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './similarmovies.css'

export const SimilarMovies = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=df891c50a8dd83e3e3bb1b5bb74c3699&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
        console.log(json.results)
      })
  }, [movieId])

  if (movies.length) {
    return (
      <section className="movies-container">
        {movies.map(movie => (
          <article className="movie-card" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img className="poster" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
              <div className="text-container">
                <h1>{movie.title}</h1>
                <p>Released: {movie.release_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    )
  }

  return (
    <section className="not-found-message">
      <p>No similar movies found.</p>
      <Link className="backlink" to="/">
        <span role="img" aria-label="back-to-movies">◀️ </span>
        <span className="back-to-movies">Back to movies</span>
      </Link>
    </section>
  )
}