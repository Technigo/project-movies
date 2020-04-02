import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Nav } from "pages/Nav"
import { MoviesList } from 'pages/MoviesList'
import { MovieDetails } from "pages/MovieDetails"

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact>
            <MoviesList />
          </Route>
          <Route path="/movie/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
