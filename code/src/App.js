import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { API_URL } from './utils/urls';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .finally(() => setLoading(false));
  };

  console.log('APP API INFO HERE: ', movies);

  return (
    <div>
      {loading && <Loading />}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <MovieList movies={movies} />} />
          <Route path="/movies/:info" component={MovieDetails} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
