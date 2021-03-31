import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { PopularMovies } from 'pages/PopularMovies'
import { MovieDetails  } from 'pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularMovies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch> 
    </BrowserRouter>
  )
}
