import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { API_URL } from './utils/urls'

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

export const App = () => {
const [movies, setMovies] = useState([])

useEffect(() => {
  fetchMovies()
}, [])


const fetchMovies = () => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => setMovies());
}

    
  return (
    <div>
    <BrowserRouter>
    <Switch> 
      <Route exact path="/"> <MovieList movies={movies} /> LIST OF MOVIES WILL BE DISPLAYED HERE </Route>
      <Route path="/MovieDetails"> <MovieDetails /> THE DETAILS OF THE MOVIE WILL BE DISPLAYED HERE </Route>
    </Switch>
    </BrowserRouter>
    </div>
  )
}
