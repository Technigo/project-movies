import React, { useState, useEffect } from 'react'

const API = 'https://api.themoviedb.org/3/movie/popular?api_key=83328e75221cc6b9f332da9a39a408f8&language=en-US&page=1'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      <div className="movielist">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster" />
          </div>
        ))}
      </div>
    </div>
  )
}

