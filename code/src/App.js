import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from './Components/Nav'
import { MovieList } from './Components/MovieList'
import { MovieDetails } from './Components/MovieDetails'

//api-key 3bb2ad59c76c83daa1fd97f0b4effa78

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path="/details/:movieID">
          <MovieDetails />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  )
}
