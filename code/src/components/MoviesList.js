import React, { useState, useEffect } from 'react'

import { Movie } from '../components/Movie'

export const MoviesList = () => {
  const MOVIES_URL= "https://api.themoviedb.org/3/movie/popular?api_key=585503bd19f6199055d11458d97ac4cc&language=en-US&page=1"

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json=> setMovies(json.results))
  },[])

  return (
    <>
    <section className='all-movies'>
      {movies.map(movie => (
       
        <div key={movie.id} className='movie-wrapper'>
          <Movie 
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          />
       </div>
      ))}
    </section>
    </>
  )
}