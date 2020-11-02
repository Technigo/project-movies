import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const ApiKey = '40be626d591abb41158713818687432b'
  const movieListURL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`

  useEffect(() => {
    fetch(movieListURL)
    .then((res) => res.json())
    .then(json => {
      setMovies(json.results) 
    })
  })

  return (
    <div className="list-wrapper">
      {movies.map((movie) => (
        <div key={movie.id} className="lists">
          <img className="posters" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          <h2>
            <Link to={`/movies/${movie.id}`}>
            {movie.original_title}
            </Link>
            </h2>
          <h3>{movie.release_date}</h3>
        </div>
      )
  )} </div>
)
}