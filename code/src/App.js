import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'

export const App = () => {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
