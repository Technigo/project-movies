import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import CompanyDetail from './pages/CompanyDetail';
//import { API_KEY } from './api.js';

import './styles.scss';
import Nav from 'components/Nav';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/popular">
          <MovieList>popular</MovieList>
        </Route>
        <Route exact path="/top_rated">
          <MovieList>top_rated</MovieList>
        </Route>
        <Route exact path="/upcoming">
          <MovieList>upcoming</MovieList>
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route exact path="/company/:companyId">
          <CompanyDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
