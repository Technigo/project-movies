import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MovieDetails } from "pages/MovieDetails";
import { MovieList } from "components/MovieList";
// import { NotFound } from "components/NotFound";


export const App = () => {
  return (

    <BrowserRouter>
      <main>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie/:key" exact>
          <MovieDetails />
        </Route>
      </Switch>
      </main>
    </BrowserRouter>

 )
};


    
