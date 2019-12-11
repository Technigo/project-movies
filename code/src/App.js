import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'

export const App = () => {

  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}
