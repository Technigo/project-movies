import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import {MovieList} from './components/MovieList'
import {MovieDetails} from'./pages/MovieDetails'
import {NotFound} from './pages/NotFound'

export const App = () => {
  return (
   
    /* BrowserRouter, Switch and Route to decide which page to display */
    <BrowserRouter>
      <Switch>
        <Route path="/"exact>
          <MovieList />
        </Route>
        <Route path="/movies/:slug" exact>
          <MovieDetails />
        </Route>
        <Route path="/404" >
          <NotFound />
        </Route>
        <Redirect
          to="/404"
          />
      </Switch>
  </BrowserRouter> 
  )
}
