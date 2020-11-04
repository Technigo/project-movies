import React, { useEffect, useState } from 'react'

import { MovieCard } from '../components/MovieCard'

export const MovieList = () => {
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=0db2a5ac0c510ce6221cadf605f4d3e6&language=en-US&page=3";
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <section className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          {...movie}
        />
      ))}

    </section>

  )

}