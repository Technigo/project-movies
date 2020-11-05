import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieDetails from 'pages/MovieDetails'
import Cast from './pages/Cast'
import Crew from './pages/Crew'
import PageNotFound from './pages/PageNotFound'
// import ListOfMovies from './pages/ListOfMovies'


export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetails />
        </Route>
        <Route path="/movies/:movieId/cast" exact>
          <Cast />
        </Route>
        <Route path="/actors/:actorId">
          <listOfMovies />
        </Route>
        <Route path="/movies/:movieId/crew" exact>
          <Crew />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Redirect 
          to="/404" 
        />
      </Switch>
    </BrowserRouter>
  )
}
