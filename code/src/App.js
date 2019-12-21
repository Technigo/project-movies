import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <MovieList />
      </Route>
      <Route path='/movies/:id'>
        <MovieDetails />
      </Route>
      <Route path='*'>
        <h1>Error</h1>
      </Route>
    </Switch>
  </BrowserRouter>
)