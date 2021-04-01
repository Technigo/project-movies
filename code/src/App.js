import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'
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
    </Switch>
  </BrowserRouter>
  )
}
