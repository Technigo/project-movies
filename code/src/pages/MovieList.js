import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'


export const MovieList = () => {
  const apiKey = '0d6aca16f35de68455e54acc43915021'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])




  return (
    <div className='movies-container'>
      {movies.map(movie =>
        <Link to={`/movies/${movie.id}`}>
          <section className='movie-card' key={movie.id}>
            <div className='movie-card-image-wrapper'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='movie-image' />
              <div className='movie-title'>
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </div>
          </section>
        </Link>
      )
      }
    </div >
  )
}