import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MovieList } from "./Pages/MovieList"
import { MovieDetails } from "./Pages/MovieDetails"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path="/upcoming">
          <MovieList category="upcoming"/>  
        </Route>
        <Route path="/top_rated">
          <MovieList category="top_rated"/>  
        </Route>
        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
