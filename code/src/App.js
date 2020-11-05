import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";
import { MOVIES_API } from "./API_info";
import Button from "./components/Button";

export const App = () => {

  const [movies, setMovies] = useState([]);

  console.log("Render 1");
  //fetch top rated movies
  useEffect(() => {
    fetch(MOVIES_API)
      .then(response => response.json())
      .then(data => setMovies(data.results));

  }, []);

  console.log("Render 2");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <section className="app-container">
            {movies.map(movie => (
              <MovieList
                key={movie.id}
                {...movie}
              />
            ))}
          </section>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/404">
          {/* <NotFound /> */}
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};