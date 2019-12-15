import React from 'react'
import { NavBar } from "components/NavBar"
import { MovieList } from "pages/MovieList"
import { MovieDetails } from "pages/MovieDetails"
import { CastDetails } from "pages/CastDetails"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NoMatch } from "pages/NoMatch"

import "./app.css"

// const api_key = "363444609247127238629594b245e069"

export const App = () => {

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails
          />
        </Route>
        <Route path="/cast/:castId">
          <CastDetails />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

