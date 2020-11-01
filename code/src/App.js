import { MovieList } from 'pages/MovieList'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieDetail } from 'pages/MovieDetail';

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MovieList />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetail />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
