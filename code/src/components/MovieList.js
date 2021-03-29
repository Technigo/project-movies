import React, { useEffect, useState } from 'react'

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
          <>
            <div className="movie-card" key={movie.id}>
              <div>
                <h3>{movie.title}</h3>
                Released: {movie.release_date}
              </div>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
            </div>
          </>
        ))}
        Hello!
      </main>
    )
}