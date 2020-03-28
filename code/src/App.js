import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MoviePage } from 'pages/MoviePage'
import { About } from 'pages/About'

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
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
