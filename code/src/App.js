import React from "react";
import { Switch, Route } from "react-router-dom";

import MoviesList from "./pages/MoviesList/MoviesList.component";
import MoviesDetails from "./pages/MovieDetails/MovieDetails.component";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MoviesList} exact />
        <Route path="/movie/:id" component={MoviesDetails} exact />
      </Switch>
    </>
  );
}

export default App;
