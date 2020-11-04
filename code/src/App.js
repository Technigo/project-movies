import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PopularList from "./pages/PopularList";
import MovieDetail from "./pages/MovieDetail";
// const API_KEY = f7e0c4070f4665dbae6d58fba626cfe4;

// *Fetching popular movies for the list page*
// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// *Fetching popular movies for movies details page*
// const URL = `https://api.themoviedb.org/3/movie/{movie_id}?${API_KEY}={api_key}&language=en-US`

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
