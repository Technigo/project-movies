import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./pages/NotFound";
import { POPULAR_URL } from "./urls";

export const App = () => {
  const [url, setUrl] = useState(POPULAR_URL);

  const getUrl = (url) => {
    setUrl(url);
  };

  return (
    <BrowserRouter>
      <Header getUrl={getUrl} />
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList url={url} />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetails />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
