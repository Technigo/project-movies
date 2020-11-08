import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { MovieDetails } from "./Pages/MovieDetails"
import { Movies } from "./Pages/Movies"

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Movies/>
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails/>
          </Route>

        </Switch>
      </BrowserRouter>  
    </div>
  )  
}