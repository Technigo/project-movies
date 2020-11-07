import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

export const App = () => {
  const [api, setApi] = useState('POPULAR_URL');

  const handleApiChange = event => {
    setApi(event.target.value);
  }

  return (
    <BrowserRouter>
      <Header api={api} onApiChange={handleApiChange} />
      <Switch>
        <Route path='/' exact>
          <MovieList api={api} />
        </Route>
        <Route path='/movies/:id' exact>
          <MovieDetails />
        </Route>
        <Route path='/404'>
          <NotFound />
        </Route>
        <Redirect to='/404'></Redirect>
      </Switch>
    </BrowserRouter>
  );
};
