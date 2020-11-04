import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'
import { NotFound } from './pages/NotFound'

export const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route path='/movies/:id'>
            <MovieDetails />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect
            to='/404'
          />
        </Switch>
    </BrowserRouter>
  )
}
