import React, { useState, useEffect } from 'react'

export const MovieList = () => {
  const apiKey = '0d6aca16f35de68455e54acc43915021'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map(movie =>
        <div key={movie.id}>
          <img src={`${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
        </div >
      )
      }
    </div >
  )
}