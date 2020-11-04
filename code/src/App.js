import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from 'components/Nav';
import Error from 'components/Error';
import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList';

import './styles/styles.scss';
import './styles/list.scss';
import './styles/detail.scss';
import './styles/button.scss';

export const App = () => {
  const [list, setList] = useState();
  const handleNavClick = selectedList => {
    setList(selectedList);
  };

  return (
    <BrowserRouter>
      <Nav onNavClick={handleNavClick} />
      <Switch>
        {/* <Route exact path="/">
   <MovieList/>{list}</MovieList>
        </Route> */}
        <Route exact path="/">
          <MovieList>{list}</MovieList>
        </Route>
        {/* <Route exact path="/popular">
          <MovieList>popular</MovieList>
        </Route>
        <Route exact path="/top_rated">
          <MovieList>top_rated</MovieList>
        </Route>
        <Route exact path="/upcoming">
          <MovieList>upcoming</MovieList>
        </Route> */}
        <Route exact path="/movies/:movieId">
          <MoviePage />
        </Route>
        <Route exact path="/movies/:movieId/company/:companyId">
          <CompanyList />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
