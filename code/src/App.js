import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { MovieDetails } from 'pages/MovieDetails'
import { PopularMovies } from 'components/PopularMovies'
import { NotFound } from 'pages/NotFound'
import { Nav } from 'components/Nav'
import { Upcoming } from 'pages/Upcoming'
import { TopRated } from 'pages/TopRated'
import { NowPlaying } from 'pages/NowPlaying'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <PopularMovies />
        </Route>
        <Route path="/movies/:id" exact >
          <MovieDetails />
        </Route>
        <Route path="/upcoming" exact>
          <Upcoming />
        </Route>
        <Route path="/toprated" exact>
          <TopRated />
        </Route>
        <Route path="/playingnow" exact>
          <NowPlaying />
        </Route>
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Redirect
          to="/404"
        />
      </Switch>
    </BrowserRouter>
  )
}
