import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'


export const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <MovieList />
      </Route>
      <Route path="/moives/:id" exact>
        <MovieDetails />
      </Route>

    </Router>
  )
}