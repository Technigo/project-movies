import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieInfo from './pages/MovieInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
