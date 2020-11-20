import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components/Header'
import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
