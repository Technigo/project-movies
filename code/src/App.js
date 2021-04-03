import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MovieDetails } from './pages/MovieDetails'


export const App = () => {
  return (
    <div className='main'>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movie/:id'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}
