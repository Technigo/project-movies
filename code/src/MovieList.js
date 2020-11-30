import React from 'react'

import { MoviePoster } from './MoviePoster'
import "./css/MovieList.css"

export const MovieList = ({ movies }) => {
  return (
    <section className='movie-list'>
      {
        movies.map(movie => {
          return (
            <MoviePoster key={movie.id} {...movie} />
          )
        })
      }
    </section>
  )
}