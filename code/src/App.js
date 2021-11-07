import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { API_KEY, MOVIES_URL } from "./utils/urls";

// import Loading from "./components/Loading";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";

export const App = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState('false')

  useEffect(() => {
    // setLoading(true)
    fetch(MOVIES_URL(API_KEY))
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
    // .finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MovieList movies={movies} />} />
        <Route path="/details/:movieId" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}