import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import 'pages/movieList.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US&page=1$region=SE')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
          <div key={movie.id} className='image-card-container'>
            <Link to={`/movie/${movie.id}`}>
              <img className='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <section className='info'>
                  <h2>{movie.title}</h2>
                  <h3>Released: {movie.release_date}</h3>
                </section>
            </Link>
          </div>
      ))}
    </div>
  )
}