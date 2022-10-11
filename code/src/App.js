import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Movie } from './components/Movie';
import { NotFound } from './components/NotFound';
import  { List } from './components/List';
/*Api*/
import { API_URL } from 'utils/urls'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" />
          <List />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/NotFound" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
