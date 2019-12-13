import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import 'MovieList.css'


export const MovieList = () => {
  const api_key = ("2a89f9965a48e33d809fbd966cc6a018")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })

  }, [])

  return (
    <article>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} className="movie-cover" key={movie.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }} >
          <section className="movie-details">
            <h2>{movie.original_title}</h2>
            <h3>{movie.release_date}</h3>
          </section>
        </ Link>
      ))
      }
    </article >
  )
}
