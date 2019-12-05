import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=db37f43a686cbd6ad83202f3d97ecfb5&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="outerDiv">
      {movies.map((results) => (

        <div key={results.id} className="movieDisplay">
          <Link className="linkStyle" to={`/movies/${results.id}`}>
            <div className="movieDetails">
              <h1>{results.title}</h1>
              <h2>{results.release_date}</h2>
            </div>
            <img src={`https://image.tmdb.org/t/p/w342/${results.poster_path}`} alt={results.title} />
          </Link>
        </div>

      ))}
    </div>
  )
} 