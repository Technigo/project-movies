import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from './MovieList'
import { Movie } from './Movie'
import { Nav } from './Nav'

import 'App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>

          <Route exact path="/movie/:movieId">
            <Movie />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
}
