import React from 'react'
import { MovieCard } from './MovieCard'
import { MovieDetails } from './MovieDetails'

export const App = () => {
  return (
    <div className="main-container">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieDetails />
    </div>
  )
}
