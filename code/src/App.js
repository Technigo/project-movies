import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "pages/MovieList";
import { MovieDetail } from "pages/MovieDetail";
import "css/MovieList.css";
import "css/MovieDetails.css";
import "css/LinkButton.css";
import "css/Navbar.css";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/popular" exact>
            <MovieList category="popular" />
          </Route>
          <Route path="/upcoming">
            <MovieList category="upcoming" />
          </Route>
          <Route path="/top_rated">
            <MovieList category="top_rated" />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
