import React from 'react'
import { MovieList } from 'pages/MovieList'
import { Movie } from 'pages/Movie'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
