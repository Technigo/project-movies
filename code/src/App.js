import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from "components/MovieList"
import { MovieB } from "components/MovieB"

//const api_key = 55cd0e0e418083e581aec6766c6a1677


//https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/Order Now">
          <MovieB />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
