import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=fac0e6041f4464409ca2dd71e7e9d33c&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
        </Link>
      ))}
    </div>
  )
}