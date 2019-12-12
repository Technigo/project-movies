import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages/MovieList';
import { MovieDetails } from './pages/MovieDetails';
import { MovieDetailsExtra } from './pages/MovieDetailsExtra';

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/movies/:movieId/details">
            <MovieDetailsExtra />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
