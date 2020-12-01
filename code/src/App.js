import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ListHeader from 'components/ListHeader';
import Error from 'components/Error';
import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList';

import './styles/styles.scss';

export const App = () => {
  const [movieList, setMovieList] = useState();
  const handleListType = selectedList => {
    setMovieList(selectedList);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListHeader onClick={handleListType} />
          <MovieList>{movieList}</MovieList>
        </Route>
        <Route path="/movies/:movieId">
          <MoviePage />
        </Route>
        <Route path="/company/:companyId">
          <CompanyList />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
};
