import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PopularList } from 'pages/PopularList'
import { MovieDetail } from 'pages/MovieDetail'






export const App = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}
