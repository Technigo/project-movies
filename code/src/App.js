import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { MovieList } from "./pages/MovieList"
import { MovieDetail } from "./pages/MovieDetail"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
} 
