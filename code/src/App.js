import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> 
          <MovieList />
        </Route>
        <Route path="/movie/:id" exact>
          <MovieDetails />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
