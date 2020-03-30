import React, { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'

export const MoviesList = () => {
  const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1'
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <div className="movies-container">

      {movies.map(movie => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          img={movie.poster_path}
          releaseDate={movie.release_date}
        />
      ))}

    </div>
  )
}