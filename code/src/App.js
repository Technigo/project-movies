import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MovieDetails } from './pages/MovieDetails'


export const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Switch> 
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movie/:id' exact>
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

