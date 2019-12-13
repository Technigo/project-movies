import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}