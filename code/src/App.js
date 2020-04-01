import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
