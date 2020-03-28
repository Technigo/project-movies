import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MoviePage } from 'pages/MoviePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <MoviePage />
        </Route>
        <Route path="/about" exact>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
