import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'MovieList'
import { MovieDetails } from 'MovieDetails'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movie/:movieId'>
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
