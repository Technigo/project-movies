import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/moviesList.css'

export const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef0fb1aeba7a73c8909c5037c23fc608&language=en-US&page=1')
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
    })

  }, [])

  return (
    <div className="movies-list">
      {movies.map((movie) =>(
        <div key={movie.id} className="movie-card" >
          <Link to={`/movieInfo/${movie.id}`}>
            <img className="img-hover" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.original_title} />
            <div className="info-on-hover"> <h2>{movie.original_title}</h2>
              <p>Released {movie.release_date}</p></div>
           
          </Link>
        </div>
      ))}
    </div>
  )
}