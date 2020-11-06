import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from "./MovieList";
import { MovieDetail } from "./MovieDetail";

export const App = () => {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:movieId'>
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
