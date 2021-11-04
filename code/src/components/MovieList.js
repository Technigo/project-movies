import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import MoviePoster from "./MoviePoster";
import Details from "./Details";
import Error from "./Error";
import Selector from "./Selector";

const MovieList = ({
  movies,
  makePosterUrl,
  apiKey,
  makeApiUrl,
  setApiUrl,
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Selector makeApiUrl={makeApiUrl} setApiUrl={setApiUrl} />
          <div className="movie-list-wrapper">
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="single-poster-wrapper">
                  <Link to={`/movies/${movie.id}`}>
                    <MoviePoster
                      title={movie.title}
                      poster_url={makePosterUrl(movie.poster_path)}
                      release={movie.release_date}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </Route>
        <Route exact path="/movies/:id">
          <Details makePosterUrl={makePosterUrl} apiKey={apiKey} />
        </Route>
        <Route exact path="/404">
          <Error />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default MovieList;
