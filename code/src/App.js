import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { API_URL } from "utils/url";

import MovieList from "components/MovieList";
import MovieDetail from "components/MovieDetail";
import PageNotFound from "components/PageNotFound";
import Loading from "components/Loading";

export const App = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <MovieList movie={movie} />} />
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
