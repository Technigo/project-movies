import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MovieList } from './pages/MovieList.js'
import { MovieDetails } from './pages/MovieDetails.js'
import { NotFound } from './pages/NotFound.js'

//const API_KEY = 'c07a4dcb1d91b54eb3b153e458e26489'

export const App = () => {

  return (
    <Router>
      <Switch>

        <Route path='/' exact>
          <MovieList />
        </Route>

        <Route path='/movies/:movieId' exact>
          {/* "movieId" must be the same varibale name as in MovieDetails useParams */}
          <MovieDetails />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </Router>
  )
}
