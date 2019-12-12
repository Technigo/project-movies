import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from "pages/MovieList"
import { MovieInfo } from "pages/MovieInfo"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
