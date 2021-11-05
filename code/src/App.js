import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import { BASE_URL } from './utils/urls';

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <MovieList movies={list} />} />
        <Route exact path='/details/:movieId' render={() => <MovieDetails />} />
        <Route path='/404' render={() => <NotFound />} />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  );
};
