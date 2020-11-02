import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {MovieList} from './components/MovieList'
import {MovieDetails} from './components/MovieDetails'
import {ErrorPage} from './components/ErrorPage'


export const App = () => {
  
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path ="/movies/:movieID" exact>
            <MovieDetails />
          </Route>
          <Route path ="/:anything" >
            <ErrorPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
