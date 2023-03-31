import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LIST_URL } from '../data/Url';
import '../css/MoviesList.css'

export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setTimeout(() => setLoading(false), 500)
      })
  }, [])
  console.log(movies)

  if (loading) {
    return <p>Loading</p>
  }

  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movie-overlay">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <h1 className="movie-text">{movie.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  )
}