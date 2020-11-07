import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { TvShowList } from './pages/TvShowList';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>My header</header>
        <Switch>
          <Route exact path="/" >
            <TvShowList />
          </Route>
          <Route exact path="/tv/:id" >
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
