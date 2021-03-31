import React from 'react';

import { MovieList } from './pages/MovieList';
import { MovieDetails } from './pages/MovieDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList/>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

//pages here within routes the components are within the pages