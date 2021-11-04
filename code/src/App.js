import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import { MOVIES_URL } from "./utils/urls";

export const App = () => {
  const [movieLi, setMovieLi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setTimeout(() => setMovieLi(data.results), 1000))
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MovieList movies={movieLi} />}
          ></Route>
          <Route path="/movies/:movieId" component={MovieDetails}></Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
