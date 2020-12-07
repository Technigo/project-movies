import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { MovieList } from 'components/MovieList';
import { Nav } from 'components/Nav';
import { NotFound } from 'components/NotFound';
import { TopratedMoviesList } from 'pages/TopRatedMoviesList';
import { UpcomingMoviesList } from 'pages/UpcomingMoviesList';
import { MovieDetail } from 'pages/MovieDetail';
import { MoviesByTheme } from 'pages/MoviesByTheme';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail />
        </Route>
        <Route path="/toprated">
          <TopratedMoviesList />
        </Route>
        <Route path="/upcoming">
          <UpcomingMoviesList />
        </Route>
        <Route path="/theme">
          <MoviesByTheme />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect 
          to="/404"
        />
      </Switch>
    </BrowserRouter>
  );
};
