import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages/MovieList';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movie/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
