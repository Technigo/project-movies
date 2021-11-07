import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'

export const App = () => {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/LoadPage"/>
        <Route exact path="/" render={() => <Movies />} />
        <Route path="/movies/:id" render={() => <MovieDetails />} />
      </Switch>
    </BrowserRouter>
  
  )
}