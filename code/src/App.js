import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MovieList } from 'components/MovieList.js'
import { MovieDetails } from 'pages/MovieDetails.js'
import { NotFound } from 'pages/NotFound.js'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id' exact>
          <MovieDetails />
        </Route>
        <Route path='/404'>
          <NotFound />
        </Route>
        <Redirect 
          to='/404'
        />
      </Switch>
    </BrowserRouter> 
  )
}
