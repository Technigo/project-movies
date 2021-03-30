import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/not-found/not-found.component";
import MoviesList from "./pages/MoviesList/MoviesList.component";
import MoviesDetails from "./pages/MovieDetails/Movie.component";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MoviesList} exact />
        <Route path="/movie/:id/:title" component={MoviesDetails} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
