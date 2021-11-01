import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import Details from './pages/MovieDetails'

export const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Header />  */}
        <Switch> {/* tells browserrouter to pick only one of the routes at a time*/}
          <Route exact path="/">
            <MovieList />
          </Route>  
          <Route path="/movies/:id" component={Details} />
        </Switch>
      </BrowserRouter> 
    </>
  )
}
