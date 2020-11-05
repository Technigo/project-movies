import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom';


import { MoviesList } from './pages/MoviesList';
import { MovieDetails } from './pages/MovieDetails';


export const App = () => {
  return (
    // wrapp app in BrowserRouter wich enables react router on the comps
    <BrowserRouter>
    {/* always displayed therefore not in switch */}
      {/* <header>Movies</header> */}
    {/* enables switches between the different routes and displaying only one */}
      <Switch>
        {/* Wrap the comp in a path  */}
      <Route path="/" exact>
      <MoviesList />
      </Route>
      <Route path="/movies/:movieId" exact>
      <MovieDetails />
      </Route>
      {/* <Route path="/404">
        <NotFound />
        </Route>  */}
      </Switch>
    </BrowserRouter>

  )
}
