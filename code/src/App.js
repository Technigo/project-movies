import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MoviePage } from './components/MoviePage'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/' exact>
      <MovieList/>
      </Route>
      <Route path='/movies/:movieId' exact>
      <MoviePage/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
