import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MoviePage } from './components/MoviePage'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
        <MovieList/>
        </Route>
        <Route path='/movies/:movieId' exact>
        <MoviePage/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
