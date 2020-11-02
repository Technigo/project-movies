import React, { useEffect, useState } from 'react'
import { MovieThumb } from 'components/MovieThumb'
import './MovieList.css'

export const MovieList = () => {

  const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e2eb26a39cdd68b3570a5c1b62c9c638&language=en-US&page=1'
  const [movies, setMovies] = useState([])

  useEffect (() => {
    fetch(MOVIE_URL)
    .then((response) => response.json())
    .then((json) => setMovies(json.results))
  }, [])
  
  console.log(movies) // - don't forget to remove

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MovieThumb
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
        />
      ))}
    </section>
  )
}