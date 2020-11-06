import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList.js';
import MovieDetails from './components/MovieDetails.js';
import { Trending } from 'components/Trending.js';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Switch>   
        <Route path="/" exact>
          <MovieList />  
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails /> 
      </Route>
      <Route path="/trending" exact>
        <Trending />
      </Route>
     </Switch>
    </BrowserRouter>
  );
};
