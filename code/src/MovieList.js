import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// NavLinlk är användbart ist för Link om jag vill stylea länken för sidan jag är på/visa vilken sida jag är på. Det skapar en class "active" so mjag kan stylea i css -> a.active{}

import 'MovieList.css'
// för all data: 

export const MovieList = () => {
  const api_key = ("2a89f9965a48e33d809fbd966cc6a018")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2a89f9965a48e33d809fbd966cc6a018&language=en-US&page=1`)
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
