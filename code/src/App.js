import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PopularList } from './pages/PopularList';
import { DetailPage } from './pages/DetailPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/Upcoming">
          <PopularList category="upcoming" />
        </Route>
        <Route path="/movie/:movieId">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
