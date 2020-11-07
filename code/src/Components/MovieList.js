import React, { useEffect, useState } from 'react'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=078bf3a954eadf3e9528b49c2a6a9682&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h3>{movie.release_date}</h3>
        </div>
      ))}
    </div>
  )
}