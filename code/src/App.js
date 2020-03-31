import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {MovieList} from './pages/MovieList'
import { Movie } from './pages/Movie'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:movieId'>
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
