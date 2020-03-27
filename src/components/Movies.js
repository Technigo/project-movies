import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=1a0b43b3e6aab8215b964c141c11111b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=1771')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((results) => (
        <div key={results.id}>
          <h2>{results.original_title}</h2>
          <img src={`https://image.tmdb.org/t/p/w185${results.poster_path}`} alt={results.original_title} />
        </div>
      ))}
    </div>
  )
}