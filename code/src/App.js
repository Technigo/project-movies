import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MoviesList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> 
          <MoviesList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
