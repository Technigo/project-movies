import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { MovieList } from './pages/MovieList'
import { MovieDetails } from './pages/MovieDetails'
import { NotFound } from './pages/NotFound'

export const App = () => {
/* switch - render on page at the time (almost like an if statement)
Route with path to every page. Since MovieList is the landing page and has url / it needs to have an exact path, since all sites starts with the same / path. */
  return (

    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route path='/movies/:id'>
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
