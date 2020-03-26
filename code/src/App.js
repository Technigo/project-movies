import React, {useState} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { MovieList } from 'MovieList'
import { MovieDetails } from 'MovieDetails'
export const App = () => {

  return (
    <BrowserRouter>
      <header>Hello world</header>
        <Switch>
            <Route path="/" exact>
              <MovieList />
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
      </Switch>
    </BrowserRouter>
  )
}

//https://api.themoviedb.org/3/movie/550?api_key=1ff77d3fb46cefb77c7370504c6cb69d
