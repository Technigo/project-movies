import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './popularlist.css'

export const PopularList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=01c5831a9741275652de4ceff9c6e22f&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])
  return (
    <div className='popular-movies'>
      {movies.map((movie) => (
        <div key={movie.id} className='popular-card'>
          <Link to={`/movies/${movie.id}`}>
            <div className='movie-box'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
              <div className='text'>
                <h2>{movie.original_title}</h2>
                <h3>{movie.release_date}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))
      }
    </div >
  )
}