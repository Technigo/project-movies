import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "components/HomePage";
import AllMovies from "components/AllMovies";
import MovieDetails from "components/MovieDetails";

export const App = () => {
  const [userApiKey, setUserApiKey] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage userApiKey={userApiKey} setUserApiKey={setUserApiKey} />
        </Route>
        <Route path="/all-movies" exact>
          <AllMovies
            userApiKey={userApiKey}
            allMovies={allMovies}
            setAllMovies={setAllMovies}
          />
        </Route>
        <Route path="/details/:movieId">
          <MovieDetails allMovies={allMovies} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
