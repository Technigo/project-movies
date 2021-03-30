import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieInfo from './pages/MovieInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieInfo />
        </Route>
      </Switch> 
    </BrowserRouter>
  )
}
