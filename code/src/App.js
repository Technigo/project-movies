import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'
import { NotFound } from 'components/NotFound'

export const App = () => {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
