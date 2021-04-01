import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieInfo from './pages/MovieInfo';

export const App = () => {
  const [movieListType, setMovieListType] = useState('popular')
  return (
    <BrowserRouter>
      <Header
        movieListType={movieListType}
        setMovieListType={setMovieListType}
      />
      <Switch>
        <Route path="/" exact>
          <MovieList
            movieListType={movieListType} 
          />
        </Route>
        <Route path="/movies/:id">
          <MovieInfo />
        </Route>
      </Switch> 
    </BrowserRouter>
  )
}
