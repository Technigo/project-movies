import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'
import { Nav } from 'components/nav'

export const App = () => {
  return (

    <BrowserRouter>
      <Route>
      <Nav />  
        <main>
            <Switch>
              <Route path="/" exact>
                <MovieList/>
              </Route>
              <Route path="/movies/:id">
                <MovieDetails />
              </Route>
            </Switch>
        </main>
      </Route>
    </BrowserRouter>
     
  )
}
