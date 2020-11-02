import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'
import { Nav } from 'components/nav'

export const App = () => {
  return (
  <router>
    <Nav />  
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <MovieList/>
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </router>
  )
}
