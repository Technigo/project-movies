import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages/MovieList/MovieList';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
        </Switch>
      </main>
    </Router>
  );
};
