import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import FirstPage from 'pages/FirstPage'
import MovieList from 'pages/MovieList'
import MovieDetails from 'pages/MovieDetails'
import NotFound from 'pages/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <FirstPage />
        </Route>

        <Route path='/list/:countryCode' exact>
          <MovieList />
        </Route>

        <Route path='/list/:countryCode/movie/:movieId'>
          <MovieDetails />
        </Route>

        <Route path='/404'>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  )
}
