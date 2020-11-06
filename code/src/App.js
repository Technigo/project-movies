import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ListHeader from 'components/ListHeader';
import Error from 'components/Error';
import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList';

import './styles/styles.scss';

export const App = () => {
  const [list, setList] = useState();
  const handleClick = selectedList => {
    setList(selectedList);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListHeader onClick={handleClick} />
          <MovieList>{list}</MovieList>
        </Route>
        <Route exact path="/movies/:movieId">
          <MoviePage />
        </Route>
        <Route exact path="/company/:companyId">
          <CompanyList />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
};
