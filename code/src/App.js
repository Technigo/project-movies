import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
// import "./styles.css";

export const App = () => {
  const key = "1ff77d3fb46cefb77c7370504c6cb69d"
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList id = {key} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails id = {key} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

//https://api.themoviedb.org/3/movie/550?api_key=1ff77d3fb46cefb77c7370504c6cb69d
