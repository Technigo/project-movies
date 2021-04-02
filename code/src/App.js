import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetail } from './pages/MovieDetail'

export const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:movieId'>
          <MovieDetail />
        </Route>  
      </Switch>
    </BrowserRouter>
    
    
  )
}
