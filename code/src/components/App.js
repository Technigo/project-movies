import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { MovieList } from '../pages/MovieList'
import { MovieDetails } from '../pages/MovieDetails'
import { NotFound } from '../pages/NotFound'
import { Nav } from './Nav'

export const App = () => {

  return (
    <BrowserRouter>
    <main className='main__grid'>
      <Nav/>
      <Switch>
        <Route path='/' exact>
          <MovieList/>
        </Route>
        <Route path='/category/:category' exact>
          <MovieList/>
        </Route>
        <Route path='/movie/:movieId' exact>
          <MovieDetails />
        </Route>
        <Route path='/404' exact>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
      </main>
    </BrowserRouter>
  )
}
