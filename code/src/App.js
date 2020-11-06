import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { MovieList } from "./pages/MovieList";
import { MoviePage } from "./pages/MoviePage";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList/>
        </Route>
        <Route path="/movies/:movieId" exact>
          <MoviePage/>
        </Route>
        <Route path="/404">
          <NotFound/>
        </Route>
        <Redirect
          to= "/404"
        />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
