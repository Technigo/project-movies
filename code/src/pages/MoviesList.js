import React from 'react'
import { useState, useEffect } from 'react'
import { MovieThumb } from '../components/MovieThumb'


export const MoviesList = () => {
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=541a4fa38d118d1abb311bee0b16d595&language=en-US&page=1"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results))
  })
  return (
    <section className="movies-list">
      {
        movies.map(movie => (
          <MovieThumb {...movie} />
        ))
      }
    </section>
  )
}