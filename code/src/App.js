import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { API_URL } from './utils/url'

export const App = () => {
  console.log(API_URL)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <MovieList />} />
        <Route path='/details' render={() => <MovieDetails />} />
      </Switch>
    </BrowserRouter>
  )
}
