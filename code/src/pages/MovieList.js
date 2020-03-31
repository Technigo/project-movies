import React, { useEffect, useState } from 'react'


export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
          <h2>{movie.title}</h2>

        </div>
      ))}
    </div>
  )
}