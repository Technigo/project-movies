import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MoviesList } from './MoviesList';
import { MoviesDetails } from './MoviesDetails';
import { SimilarMovies } from './SimilarMovies'

export const Home = () => {
  const [sortCategory, setSortCategory] = useState('popular');

  return (
    <BrowserRouter>
      <main>
        <Navbar 
          dropdownItem={sortCategory}
          onDropdownChange={setSortCategory}
        />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/movies' />
          </Route>

          <Route path='/movies' exact>
            <MoviesList 
              category={sortCategory}
            />
          </Route>

          <Route path='/movies/:id' exact>
            <MoviesDetails />
          </Route>

          <Route path='/movies/:id/similar' exact>
            <SimilarMovies />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  );
}