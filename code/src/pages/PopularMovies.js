import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/popularMovies.css'
import { BASE_URL } from '../data/urls';

export const PopularMovies = () => {
  const [popMovies, setPopMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setPopMovies(data.results))
      .finally(() => setLoading(false))
  }, []);
  if (loading) {
    return <h1>loading</h1>
  }
  console.log(popMovies)
  return (
    <section className="movie-container">
      {popMovies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            <div className="img-container">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                className="image" />
              <div className="overlay">
                <div className="text">
                  <h2>{movie.title}</h2>
                  <h2 className="rating-overlay">⭐️ {Math.round(movie.vote_average * 10) / 10}</h2>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}