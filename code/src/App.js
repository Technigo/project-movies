import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>My header</header>
        <Switch>
          <Route exact path="/" >
            <ListPage />
          </Route>
          <Route exact path="/tv/:id" >
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
