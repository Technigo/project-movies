import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export const MovieThumb = ({ id, title, poster_path, release_date }) => {
  return (
    <Grid item xs={6} md={3}>
      <BrowserRouter>
        <Switch>
          <Route>
            <div className="position-relative">
              <Grid
                container
                direction="column"
                justify="flex-end"
                className="position-absolute hidden-shown text-realeased-content"
              >
                <h1>{title}</h1>
                <h5>{release_date}</h5>
              </Grid>
              <Link to={`/movies/${id}`}>
                <img
                  className="movie-thumb-img"
                  src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                  alt={title}
                />
              </Link>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Grid>
  );
};
