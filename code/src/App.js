import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PopularList from './components/PopularList';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Navbar from 'components/Navbar';
import TopRatedList from 'components/TopRatedList';
import ChristmasList from 'components/Christmas';
import HalloweenList from 'components/Halloween';

import { MOVIES_URL } from './utils/urls';

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar title="Movie(pop)Corner" />
        <Switch>
          <Route exact path="/" render={() => <PopularList movies={list} />} />
          <Route path="/details/:movieID" component={Details} />
          <Route exact path="/toprated"> <TopRatedList /></Route>
          <Route exact path="/christmas"> <ChristmasList /></Route>
          <Route exact path="/halloween"> <HalloweenList /></Route>

          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />

        </Switch>
      </BrowserRouter>
    </>
  );
};