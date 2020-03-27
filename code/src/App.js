import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from "components/MovieList"
import { PopularList } from "components/PopularList"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <PopularList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
