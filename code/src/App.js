import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MovieList from "./components/Movielist";
// import MovieDetails from "./components/Moviedetails";
import { MOVIES_URL } from "./utils/urls";

export const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMoviesList(data.results));
  }, []);

  console.log("data", moviesList);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"render={() => <MovieList movies={moviesList} />}
          ></Route>

          <Route></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};











