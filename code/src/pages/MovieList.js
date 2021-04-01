import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MovieCard } from '../components/MovieCard'
import { MOVIE_LIST_API } from '../reusables/urls'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIE_LIST_API)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.err(err))
  },[])

  return (
    <section className="movie-list-wrapper">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </section>
  )

}