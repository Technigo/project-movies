import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";
import { MOVIES_API } from "./API_info";

export const App = () => {

  const [movies, setMovies] = useState([]);

  //fetch top rated movies
  useEffect(() => {
    fetch(MOVIES_API)
      .then(response => response.json())
      .then(data => setMovies(data.results));

  }, []);

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
      </Switch>
    </BrowserRouter>
  );
};