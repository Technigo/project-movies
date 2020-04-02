import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Movies } from './pages/Movies'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Movies />
        </Route>
        <Route path='/movies/:movieId'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}