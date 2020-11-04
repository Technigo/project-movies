import React from 'react'

import { MovieList } from './components/MovieList'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <div>
      <MovieList />
      <MovieDetails />
    </div>
  )
}
