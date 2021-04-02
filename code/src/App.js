// TO DO:
// [X] Back button
// [X] background page
// [X] Format first page according to guidelines
// [X] Format second page according to guidelines
// [X] Add a rating
// [X] image not found 
// [X] Handle 404 page not found
// [X] Handle loading state
// [] Add Company page
// [] Reshape error function 

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'
import Error from './pages/Error'
import Companies from './pages/Companies'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetail />
        </Route>
        <Route path="/error" exact>
          <Error />
        </Route>
        <Route path="/companies/:comp" exact>
          <Companies />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
