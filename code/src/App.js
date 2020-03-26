import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from "components/MovieList"
import { MovieB } from "components/MovieB"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/Order Now">
          <MovieB />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
