import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const PopularMovieList = (props) => {
  const { apiKey, setHeader } = props
  const [movies, setMovies] = useState([])
  setHeader('Popular movies')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [apiKey])

  return (
    <section>
      {movies.map((movie, index) => (
        <article key={index}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
          <h2><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></h2>
          <h3>{movie.vote_average}</h3>
        </article>
      ))}
    </section>
  )
}