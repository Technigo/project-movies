import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MovieList } from './pages/MovieList.js'
import { MovieDetails } from './pages/MovieDetails.js'
import { NotFound } from './components/NotFound.js'

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

        {/* <Route path='/404'>
          <NotFound />
        </Route>

        <Redirect to='/404' /> */}

      </Switch>
    </Router>
  )
}
