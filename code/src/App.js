import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MovieList } from "./pages/MovieList";
import { MoviePage } from "./pages/MoviePage";
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
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
