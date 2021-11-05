import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// API of playing now movies  //
import { LIST_URL } from "./utils/urls";

// Components //
import MoviesList from "components/MoviesList";
import MoviesDetails from "components/MoviesDetails";
import NotFound from "components/NotFound";

export const App = () => {
  const [movies, setMovies] = useState([]); // we expect to get data from an array, that's why we use []

  useEffect(() => {
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> {/* This path means that it is the first page that displays */}
          <MoviesList films={movies} />
        </Route>
        <Route path="/details/:moviesId">
          <MoviesDetails />
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
