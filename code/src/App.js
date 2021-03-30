import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import MovieList from './components/MovieList'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= "/" exact>
          <MovieList />
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}
