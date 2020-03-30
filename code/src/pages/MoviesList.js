import React, { useState, useEffect } from 'react'
import { Movie } from '../components/Movie'

export const MoviesList = () => {
  const moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1'
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(moviesUrl)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])


  console.log(movies)

  return (
    <div>


      {movies.map(movie => (
        <h2>{movie.original_title}</h2>
      ))}

    </div>
  )
}