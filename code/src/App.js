import React from 'react'
import { MovieList } from 'components/MovieList.js'
import { MovieDetails } from 'pages/MovieDetails.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
      </Switch>
    </BrowserRouter> 
  )
}
