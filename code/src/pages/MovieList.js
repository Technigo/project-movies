import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US&page=1$region=SE')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        console.log(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
          
        </div>
      ))}
    </div>
  )
}