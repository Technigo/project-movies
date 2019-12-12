import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from "pages/MovieList"
import { MovieInfo } from "pages/MovieInfo"



export const App = () => {
  return (

    // 0acc5941943be92854a9966e91961a97 //
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
