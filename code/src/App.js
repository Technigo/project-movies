import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './pages/PopularList'
import { MovieDetails } from './pages/MovieDetails'


export const App = () => {
  return (

    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
