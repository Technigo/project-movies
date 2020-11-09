import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Loader } from 'components/Loader'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = () => {
    const API_KEY = '625126cdbe1a2a3d2d941c58292f85ef'
    const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results)
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    setLoading(true)
    fetchMovies()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (

    <section className='movie-list'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>

          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

          <div className='movie-info'>
            <h2>{movie.title}</h2>
            <p>
              Released {movie.release_date}
            </p>
          </div>

        </Link>
      ))}
    </section>

  )
}
