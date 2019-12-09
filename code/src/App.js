import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from './MovieList'
import { Movie } from './Movie'


// Api Key: 2a89f9965a48e33d809fbd966cc6a018

export const App = () => {
  return (
    <BrowserRouter>
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
