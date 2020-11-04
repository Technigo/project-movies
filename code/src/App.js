import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { MovieList } from './pages/MovieList.js'
import { MovieDetails } from './pages/MovieDetails.js'
import { NotFound } from './pages/NotFound.js'

export const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/' exact>
          <MovieList />
        </Route>

        <Route path='/movies/:id' exact>
          <MovieDetails />
        </Route>

        <Route>
          <NotFound />
        </Route>

        {/* <Route path='/404'>
          <NotFound />
        </Route>

        <Redirect to='/404' /> */}

      </Switch>
    </Router>
  )
}
