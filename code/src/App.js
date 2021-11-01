import React, { useState, useEffect } from 'react'
import { API_LIST } from './utils/urls'

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(API_LIST)
      .then((res) => res.json())
      .then((data) => setList(data.results))
  }, [])
  return (
    <section className='movies-container'>
      {list.map((movie) => (
        <div className='movie-card' key={movie.id}>
          {console.log(movie)}
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='overlay'>
            <div className='movie-data'>
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )

  // src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
}
