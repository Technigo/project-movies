import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'



export const App = () => {


  return (
  <BrowserRouter>
    <Switch>
      <Route path ="/" exact>
        <MovieList />
      </Route>
      <Route path="/movies/:movieId" exact>
        < MovieDetails/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
