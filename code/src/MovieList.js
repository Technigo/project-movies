import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState(undefined)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8470fd181cec36bb64fcc0377f8eb255&language=en-US&page=1')
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
        console.log(json.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (movies === undefined) {
    return (
      <div className="loader">
      </div>
    )
  }

  return (
    <div className="movie-list">
      {movies.map((movie => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})` }}
        >
          <div
            className="movie-container">
            <h1>
              {movie.title}
            </h1>
            <div className="overview-release-wrapper">
              <p>
                {movie.overview}
              </p>
              <h2>
                {movie.vote_average}/10
              </h2>
            </div>
          </div>
        </Link >
      )))}
    </div >
  )
}