import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { MovieDetails } from "components/MovieDetails";
import { MovieList } from "components/MovieList";
import { NotFound } from "components/NotFound";


export const App = () => {
  return (
    <BrowserRouter>
      <main>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect 
        to="404"
         />
      </Switch>
      </main>
    </BrowserRouter>

 )
};


    


