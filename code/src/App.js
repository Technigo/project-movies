import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { FilmList } from 'components/FilmList';
import { FilmDetail } from 'pages/FilmDetail';

export const App = () => {

  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <FilmList />          
          </Route>
          <Route path="/movies/:id" exact>
            <FilmDetail />          
          </Route>
        </Switch>      
      </BrowserRouter>
    </main>
  );
};