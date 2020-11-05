import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { TopratedMoviesList } from 'pages/TopRatedMoviesList';
import { UpcomingMoviesList } from 'pages/UpcomingMoviesList';
import { MovieDetail } from 'pages/MovieDetail';
import { Nav } from 'components/Nav';
import { NotFound } from 'components/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetail />
        </Route>
        <Route path="/toprated" exact>
          <TopratedMoviesList />
        </Route>
        <Route path="/upcoming" exact>
          <UpcomingMoviesList />
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
