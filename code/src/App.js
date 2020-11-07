import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:movieId' exact> 
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

