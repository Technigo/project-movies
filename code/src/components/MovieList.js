import React, {useState, useEffect } from 'react'

import { MovieCard } from './MovieCard'

import { MOVIE_LIST_URL } from '../reusable/Urls.js'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIE_LIST_URL)
        .then(res => res.json())
        .then(json => setMovies(json.results))
  },[])

  return (

        <section className='movie-list'>
         {movies.map((movie) => <MovieCard key={movie.id} {...movie}/>
         )}
        </section>
  )
} 

