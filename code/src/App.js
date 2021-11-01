import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import { MOVIES_URL } from 'utils/urls'

export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Movies />
        </Route>
        <Route path='/MovieDetails'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}
