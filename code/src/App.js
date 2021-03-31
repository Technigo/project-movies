import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trending from 'pages/Trending';
import Movie from 'pages/DetailsMovie';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Trending />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
