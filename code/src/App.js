import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movies/:movieId">
          {/* movieId is the name of our varible that we will use in the movieDetails component and we will use it to pull our URL id through useParams */}
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
