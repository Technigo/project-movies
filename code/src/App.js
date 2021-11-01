import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './components/MovieList'
import Details from './components/MovieDetails'

export const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Header />  */}
        <Switch> {/* tells browserrouter to pick only one of the routes at a time*/}
          <Route exact path="/">
            <MovieList />
          </Route>  
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter> 
    </>
  )
}
