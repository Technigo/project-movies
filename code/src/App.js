/* Outer dependencies*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*Inner Dependencies*/
import { MovieList } from './pages/MovieList';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          {/* <Route path='/detail' exact>
            <MovieDetail />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};
