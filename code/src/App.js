import React, {useState} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { MovieList } from 'movieList/MovieList'
import { MovieDetails } from 'movieDetails/MovieDetails'
import { Banner } from 'Banner'
const key = "1ff77d3fb46cefb77c7370504c6cb69d"
export const App = () => {
console.log("key from start", key)
  
  return (
    <BrowserRouter>
    <div className = "app">
      <Banner />
        <Switch>
            <Route path="/" exact>
              <MovieList />
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
      </Switch>
      </div>
    </BrowserRouter>
  )
}

//https://api.themoviedb.org/3/movie/550?api_key=1ff77d3fb46cefb77c7370504c6cb69d
