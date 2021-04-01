import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'
import { NotFound } from './pages/NotFound'
// import { BackButton } from './components/BackButton'



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
      < Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
