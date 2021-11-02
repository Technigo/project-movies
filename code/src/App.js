import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { MOVIES_URL } from "./utils/urls";

export const App = () => {
  const [movieLi, setMovieLi] = useState([]);
  /*  const [movieId, setMovieId] = useState({}); */

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovieLi(data.results));
  }, []);

  console.log("GENERAL DATA", movieLi);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MovieList movies={movieLi} />}
          ></Route>

          <Route path="/movies/:movieId" component={MovieDetails}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
