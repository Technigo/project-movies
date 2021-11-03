import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import NotFound from './components/NotFound';
import { MOVIELIST_URL } from './utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(MOVIELIST_URL)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' exact>
            <MovieList movies={movieList} />
          </Route>
          <Route path='/details/:id'>
            <MovieDetails />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect to='/404' />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
