import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movieList.css'

export const MovieList = (props) => {
  const [movies, setMovies] = useState([])
  // Fetch data from movie database
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=1a381f2cdba45c6f12c9451edcfa9c50&language=en-US&page=1")
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <section className="movie-list">
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-link">
            <article className="movie" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }} >
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release-date">Release date: {movie.release_date}</p>
            </article>
          </Link>
        )
      })}
    </section>
  )
}