import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from '../src/components/MovieList'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <div className='main-container'>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movie/:movie_id'>
          <MovieDetails />
        </Route>
        
      </Switch>
      </BrowserRouter>
    </div>
  )
}

