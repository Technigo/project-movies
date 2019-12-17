import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MovieList } from "./Pages/MovieList";
import { MovieDetails } from "./Pages/MovieDetails";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <MovieList />
      </Route>
      <Route path="/movies/:id" exact>
        <MovieDetails />
      </Route>
    </Router>
  );
};
