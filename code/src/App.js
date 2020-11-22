import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom';


import { MoviesList } from './pages/MoviesList';
import { MovieDetails } from './pages/MovieDetails';


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MoviesList />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
