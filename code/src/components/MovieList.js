import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { API_URL } from '../reusable/urls'

export const MovieList = () => {
    const [movies, setMovies] = useState([])


    useEffect (() => {
      fetch(API_URL)
      .then (response => response.json())
      .then (json => {
        setMovies(json.results)
      })
    },[])

    return (
      <main className="movies-container">
        {movies.map((movie) => (
           <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="movie-card">             
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
              
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>Released: {movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
        Hello!
      </main>
    )
}