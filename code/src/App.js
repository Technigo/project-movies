import { MovieList } from 'pages/MovieList'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieDetail } from 'pages/MovieDetail';
import { RecommendedMovies } from 'pages/RecommendedMovies'
import { Actor } from 'pages/Actor';

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>

      <Route path="/" exact>
        <MovieList />
      </Route>

      <Route path="/movies/:movieId" exact>
        <MovieDetail />
      </Route>

      <Route path="/movies/:movieId/recommendedMovies" exact>
        <RecommendedMovies />
      </Route>

      <Route path="/movies/:movieId/cast/:actorID" exact>
        <Actor/>
      </Route>

    </Switch>

    </BrowserRouter>
  )
}
