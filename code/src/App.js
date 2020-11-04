import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MovieStartPage } from "./pages/MovieStartPage";
import { MovieDetails } from "../src/pages/MovieDetails"

// just for showing data while working
const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
const URL_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const TestingData = () => {
  fetch(URL_MOVIES)
    .then((response) => response.json())
    .then((json) => console.log(json.results));
};

export const App = () => { //Exact - if this path matches exact, then render the Startpage. The Switch is like an if-statement.
  // : (path parameter) - means "whatever that comes after the slash can be any value, 
  //and the component we create after will capture that value.
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieStartPage />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
