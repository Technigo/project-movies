import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import { PopularMovieList } from './components/PopularMovieList';
import { MovieDetail } from './components/MovieDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularMovieList />
        </Route>
        <Route path="/movies/:id" exact> 
          <MovieDetail />
        </Route>
      </Switch>  
    </BrowserRouter>
  )
}
