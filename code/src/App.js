import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Router } from 'react-router-dom'
import { MovieCard } from './list/MovieCard'

export const App = () => {
  const [movies, setMovies] = useState([])
  // Fetch data from movie database
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=1a381f2cdba45c6f12c9451edcfa9c50&language=en-US&page=1")
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <main>
      <section className="movie-list">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={movie.poster_path} />
          )
        })}
      </section>
    </main>
  )
}
