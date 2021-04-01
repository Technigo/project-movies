import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';

import Trending from 'pages/Trending';
import Movie from 'pages/DetailsMovie';
import Collection from 'pages/DetailsCollection';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Trending />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/collections/:id">
          <Collection />
        </Route>
        {/* If user tries to go to a route that is non-existent we redirect to main page */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
