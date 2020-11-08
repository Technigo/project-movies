import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'components/MovieList'
import { MovieCard } from 'components/MovieCard'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieCard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
