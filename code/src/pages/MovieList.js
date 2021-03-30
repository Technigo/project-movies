import React, { useEffect, useState } from 'react'

import { MOVIES_URL } from 'reusable/urls'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect (() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then ((data) => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div>
      {movies.map(movie => {
        return(
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}/>
            <h1>{movie.original_title}</h1>
            <h2>{movie.release_date}</h2>
          </div>
        )
      })}
    </div>
  )
}