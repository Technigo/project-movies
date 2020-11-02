import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList.js';
import MovieDetails from './components/MovieDetails.js';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>    
        <Route path="/" exact>
          <MovieList />  
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails /> 
      </Route>
     </Switch>
    </BrowserRouter>
  );
};
